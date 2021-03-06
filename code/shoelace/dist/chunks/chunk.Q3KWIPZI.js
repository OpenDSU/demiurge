import {
  component_styles_default
} from "./chunk.LERSXYXA.js";
import {
  e,
  n
} from "./chunk.VRIBQCTO.js";
import {
  T,
  h,
  i
} from "./chunk.4WUNMDF2.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/components/tab-panel/tab-panel.styles.ts
var tab_panel_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: 20px 20px;
  }
`;

// src/components/tab-panel/tab-panel.ts
var id = 0;
var SlTabPanel = class extends h {
  constructor() {
    super(...arguments);
    this.componentId = `tab-panel-${++id}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id || this.componentId;
  }
  render() {
    this.style.display = this.active ? "block" : "none";
    return T`
      <div
        part="base"
        class="tab-panel"
        role="tabpanel"
        aria-selected=${this.active ? "true" : "false"}
        aria-hidden=${this.active ? "false" : "true"}
      >
        <slot></slot>
      </div>
    `;
  }
};
SlTabPanel.styles = tab_panel_styles_default;
__decorateClass([
  e()
], SlTabPanel.prototype, "name", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTabPanel.prototype, "active", 2);
SlTabPanel = __decorateClass([
  n("sl-tab-panel")
], SlTabPanel);
var tab_panel_default = SlTabPanel;

export {
  tab_panel_default
};
