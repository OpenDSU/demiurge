import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  component_styles_default
} from "./chunk.LERSXYXA.js";
import {
  e,
  n,
  o
} from "./chunk.VRIBQCTO.js";
import {
  T,
  h,
  i
} from "./chunk.4WUNMDF2.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/components/form/form.styles.ts
var form_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }
`;

// src/components/form/form.ts
var SlForm = class extends h {
  constructor() {
    super(...arguments);
    this.novalidate = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.formControls = [
      {
        tag: "button",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        click: (event) => {
          const target = event.target;
          if (target.type === "submit") {
            this.submit();
          }
        }
      },
      {
        tag: "input",
        serialize: (el, formData) => {
          if (!el.name || el.disabled) {
            return;
          }
          if ((el.type === "checkbox" || el.type === "radio") && !el.checked) {
            return;
          }
          if (el.type === "file") {
            [...el.files].map((file) => formData.append(el.name, file));
            return;
          }
          formData.append(el.name, el.value);
        },
        click: (event) => {
          const target = event.target;
          if (target.type === "submit") {
            this.submit();
          }
        },
        keyDown: (event) => {
          const target = event.target;
          if (event.key === "Enter" && !event.defaultPrevented && !["checkbox", "file", "radio"].includes(target.type)) {
            this.submit();
          }
        }
      },
      {
        tag: "select",
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              const selectedOptions = [...el.querySelectorAll("option:checked")];
              if (selectedOptions.length) {
                selectedOptions.map((option) => formData.append(el.name, option.value));
              } else {
                formData.append(el.name, "");
              }
            } else {
              formData.append(el.name, el.value);
            }
          }
        }
      },
      {
        tag: "sl-button",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        click: (event) => {
          const target = event.target;
          if (target.submit) {
            this.submit();
          }
        }
      },
      {
        tag: "sl-checkbox",
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "sl-color-picker",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "sl-input",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
        keyDown: (event) => {
          if (event.key === "Enter" && !event.defaultPrevented) {
            this.submit();
          }
        }
      },
      {
        tag: "sl-radio",
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "sl-range",
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            formData.append(el.name, el.value + "");
          }
        }
      },
      {
        tag: "sl-select",
        serialize: (el, formData) => {
          if (el.name && !el.disabled) {
            if (el.multiple) {
              const selectedOptions = [...el.value];
              if (selectedOptions.length) {
                selectedOptions.map((value) => formData.append(el.name, value));
              } else {
                formData.append(el.name, "");
              }
            } else {
              formData.append(el.name, el.value + "");
            }
          }
        }
      },
      {
        tag: "sl-switch",
        serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "sl-textarea",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      },
      {
        tag: "textarea",
        serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
      }
    ];
  }
  getFormData() {
    const formData = new FormData();
    const formControls = this.getFormControls();
    formControls.map((el) => this.serializeElement(el, formData));
    return formData;
  }
  getFormControls() {
    const slot = this.form.querySelector("slot");
    const tags = this.formControls.map((control) => control.tag);
    return slot.assignedElements({ flatten: true }).reduce((all, el) => all.concat(el, [...el.querySelectorAll("*")]), []).filter((el) => tags.includes(el.tagName.toLowerCase()));
  }
  submit() {
    const formData = this.getFormData();
    const formControls = this.getFormControls();
    const formControlsThatReport = formControls.filter((el) => typeof el.reportValidity === "function");
    if (!this.novalidate) {
      for (const el of formControlsThatReport) {
        const isValid = el.reportValidity();
        if (!isValid) {
          return false;
        }
      }
    }
    emit(this, "sl-submit", { detail: { formData, formControls } });
    return true;
  }
  handleClick(event) {
    const target = event.target;
    const tag = target.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.click) {
        formControl.click(event);
      }
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tag = target.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag && formControl.keyDown) {
        formControl.keyDown(event);
      }
    }
  }
  serializeElement(el, formData) {
    const tag = el.tagName.toLowerCase();
    for (const formControl of this.formControls) {
      if (formControl.tag === tag) {
        return formControl.serialize(el, formData);
      }
    }
    return null;
  }
  render() {
    return T`
      <div part="base" class="form" role="form" @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <slot></slot>
      </div>
    `;
  }
};
SlForm.styles = form_styles_default;
__decorateClass([
  o(".form")
], SlForm.prototype, "form", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlForm.prototype, "novalidate", 2);
SlForm = __decorateClass([
  n("sl-form")
], SlForm);
var form_default = SlForm;

export {
  form_default
};
