import Message from "./utils/Message.js";
import constants from "./constants.js";
import LogService from "./services/LogService.js";

function promisify(fun) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback);

      fun.call(this, ...args);
    });
  };
}

function getPKFromContent(stringContent) {
  const crypto = require("opendsu").loadAPI("crypto");
  return crypto.sha256(stringContent);
}

async function sendGroupMessage(sender, group, content, contentType, recipientType, groupOperation) {
  const w3cdid = require("opendsu").loadAPI("w3cdid");
  const groupDIDDocument = await promisify(w3cdid.resolveDID)(group.did);
  const message = new Message();
  message.setSender(sender);
  content = typeof content === "object" ? JSON.stringify(content) : content;
  message.setContent(content);
  message.setGroupDID(group.did);

  message.setRecipientType(recipientType);
  message.setContentType(contentType);
  message.setOperation(groupOperation);

  await promisify(groupDIDDocument.sendMessage)(message);
}

async function sendUserMessage(sender, group, member, content, contentType, recipientType, operation) {
  const w3cdid = require("opendsu").loadAPI("w3cdid");
  let didDocument = await promisify(w3cdid.resolveDID)(sender);
  const receiverDIDDocument = await promisify(w3cdid.resolveDID)(member.did);
  const message = new Message();
  message.setSender(sender);
  message.setContent(content);
  message.setContentType(contentType);
  message.setRecipientType(recipientType);
  message.setGroupDID(group.did);
  message.setOperation(operation);

  await promisify(didDocument.sendMessage)(message, receiverDIDDocument);
}

async function writeEnvironmentFile(mainDSU, env) {
  const openDSU = require("opendsu");
  const scAPI = openDSU.loadAPI("sc");
  await mainDSU.safeBeginBatchAsync();
  try {
    await $$.promisify(mainDSU.writeFile)("/environment.json", JSON.stringify(env));
    await mainDSU.commitBatchAsync();
  } catch (e) {
    const writeFileError = createOpenDSUErrorWrapper(`Failed to write environment.json`, e);
    try {
      await mainDSU.cancelBatchAsync();
    } catch (e) {
      throw createOpenDSUErrorWrapper(`Failed to cancel batch`, e, writeFileError);
    }

    throw writeFileError;
  }
  scAPI.refreshSecurityContext();
}

async function addSharedEnclaveToEnv(enclaveType, enclaveDID, enclaveKeySSI) {
  const openDSU = require("opendsu");
  const scAPI = openDSU.loadAPI("sc");
  const mainDSU = await $$.promisify(scAPI.getMainDSU)();
  let env = await $$.promisify(mainDSU.readFile)("/environment.json");
  env = JSON.parse(env.toString());
  env[openDSU.constants.SHARED_ENCLAVE.TYPE] = enclaveType;
  env[openDSU.constants.SHARED_ENCLAVE.DID] = enclaveDID;
  env[openDSU.constants.SHARED_ENCLAVE.KEY_SSI] = enclaveKeySSI;
  await writeEnvironmentFile(mainDSU, env);
}

async function removeSharedEnclaveFromEnv() {
  const openDSU = require("opendsu");
  const scAPI = openDSU.loadAPI("sc");
  const mainDSU = await $$.promisify(scAPI.getMainDSU)();
  let env = await $$.promisify(mainDSU.readFile)("/environment.json");
  env = JSON.parse(env.toString());
  env[openDSU.constants.SHARED_ENCLAVE.TYPE] = undefined;
  env[openDSU.constants.SHARED_ENCLAVE.DID] = undefined;
  env[openDSU.constants.SHARED_ENCLAVE.KEY_SSI] = undefined;
  await writeEnvironmentFile(mainDSU, env);
}

async function getManagedFeatures() {
  const openDSU = require("opendsu");
  const config = openDSU.loadAPI("config");
  let managedFeatures = {};
  try {
    for (let i = 0; i < constants.MANAGED_FEATURES_ARR.length; i++) {
      managedFeatures[constants.MANAGED_FEATURES_ARR[i]] = await $$.promisify(config.getEnv)(constants.MANAGED_FEATURES_ARR[i]);
    }
  } catch (e) {
    console.log("Couldn't load disabledFeatures");
  }
  return managedFeatures;
}

async function fetchGroups() {
  const scAPI = require("opendsu").loadAPI("sc");
  const enclaveDB = await $$.promisify(scAPI.getSharedEnclave)();
  let groups;
  try {
    groups = await promisify(enclaveDB.filter)(constants.TABLES.GROUPS);
  } catch (e) {
    return console.log(e);
  }
  return groups;
}

async function addLogMessage(userDID, action, userGroup, actionUserId, logPk, privileges = "-") {
  try {
    let logService = new LogService(constants.TABLES.LOGS_TABLE);
    let logMsg = {
      logPk: logPk,
      actionUserId: actionUserId || WebCardinal.wallet.userName,
      userDID: userDID || "-",
      action: action,
      group: userGroup,
      privileges: privileges,
    }
    await $$.promisify(logService.log, logService)(logMsg);
  } catch (e) {
    console.log("Failed to add log message", e);
    return await addLogMessage(userDID, action, userGroup, actionUserId, logPk, privileges);
  }

}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function waitForEnclave(enclave, callback) {
  if (enclave.isInitialised()) {
    console.log('[DONE] Enclave is initialized!');
    return callback(undefined);
  }

  console.log('Enclave is not yet initialized!');
  setTimeout(() => {
    waitForEnclave(enclave, callback);
  }, 10);
}

async function isValidDID(stringDID) {
  try {
    const w3cdid = require("opendsu").loadAPI("w3cdid");
    await promisify(w3cdid.resolveDID)(stringDID);
    return true;
  } catch (err) {
    return false;
  }
}

async function getAdminGroup(sharedEnclave) {
  const tryToGetAdminGroup = async () => {
    let groups = [];
    try {
      groups = await promisify(sharedEnclave.filter)(constants.TABLES.GROUPS);
      let adminGroup = groups.find((gr) => gr.accessMode === constants.ADMIN_ACCESS_MODE || gr.name === constants.EPI_ADMIN_GROUP_NAME) || {};
      if (!adminGroup) {
        throw new Error("Admin group not created yet.")
      }
      return adminGroup;
    } catch (e) {
      self.notificationHandler.reportUserRelevantInfo(`Failed to get info about admin group. Retrying ...`, e);
      return await tryToGetAdminGroup();
    }
  }
  return await tryToGetAdminGroup();
}

function renderToast(message, type, timeoutValue = 15000) {
  let toastContainer = document.querySelector(".toast-container");
  let toastElement = document.createElement("div");
  toastElement.classList.add("toast");
  toastElement.classList.add(type);
  toastElement.innerHTML = `<p class="toast-text">${message}</p>`
  let toastButton = document.createElement("div");
  toastButton.classList.add("toast-close-button");
  toastButton.innerHTML = `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.705 2.20934C13.8928 2.02156 13.9983 1.76687 13.9983 1.50131C13.9983 1.23575 13.8928 0.981059 13.705 0.793278C13.5172 0.605495 13.2625 0.5 12.997 0.5C12.7314 0.5 12.4767 0.605495 12.2889 0.793278L7 6.08352L1.70944 0.794943C1.52165 0.607161 1.26695 0.501666 1.00137 0.501666C0.735788 0.501666 0.481087 0.607161 0.293294 0.794943C0.105501 0.982724 2.79833e-09 1.23741 0 1.50297C-2.79833e-09 1.76854 0.105501 2.02322 0.293294 2.21101L5.58385 7.49958L0.29496 12.7898C0.107167 12.9776 0.00166609 13.2323 0.00166609 13.4979C0.0016661 13.7634 0.107167 14.0181 0.29496 14.2059C0.482752 14.3937 0.737454 14.4992 1.00303 14.4992C1.26861 14.4992 1.52331 14.3937 1.71111 14.2059L7 8.91565L12.2906 14.2067C12.4784 14.3945 12.7331 14.5 12.9986 14.5C13.2642 14.5 13.5189 14.3945 13.7067 14.2067C13.8945 14.0189 14 13.7643 14 13.4987C14 13.2331 13.8945 12.9784 13.7067 12.7907L8.41615 7.49958L13.705 2.20934Z" fill="black"/>
</svg>`
  toastButton.addEventListener(constants.HTML_EVENTS.CLICK, (evt) => {
    if (toastElement && toastElement.parentElement) {
      toastElement.parentNode.removeChild(toastElement);
    }
  })
  toastElement.appendChild(toastButton);
  setTimeout(() => {
    if (toastElement && toastElement.parentElement) {
      toastElement.parentNode.removeChild(toastElement);
    }
  }, timeoutValue)
  toastContainer.appendChild(toastElement);
}

export default {
  promisify,
  getPKFromContent,
  sendGroupMessage,
  sendUserMessage,
  addSharedEnclaveToEnv,
  getManagedFeatures,
  fetchGroups,
  addLogMessage,
  uuidv4,
  isValidDID,
  waitForEnclave,
  removeSharedEnclaveFromEnv,
  getAdminGroup,
  renderToast
};
