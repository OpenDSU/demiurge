import {
  e as e2
} from "./chunk.7QWA24FS.js";
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

// src/components/tab/tab.styles.ts
var tab_styles_default = i`
  ${component_styles_default}

  :host {
    --focus-ring: inset 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));

    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: 4px;
    color: rgb(var(--sl-color-neutral-600));
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: rgb(var(--sl-color-primary-600));
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus:not(.tab--disabled) {
    color: rgb(var(--sl-color-primary-600));
    box-shadow: var(--focus-ring);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: rgb(var(--sl-color-primary-600));
  }

  .tab.tab--closable {
    padding-right: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-left: var(--sl-spacing-xx-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-xxx-small);
  }
`;

// src/components/tab/tab.ts
var id = 0;
var SlTab = class extends h {
  constructor() {
    super(...arguments);
    this.componentId = `tab-${++id}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  focus(options) {
    this.tab.focus(options);
  }
  blur() {
    this.tab.blur();
  }
  handleCloseClick() {
    emit(this, "sl-close");
  }
  render() {
    this.id = this.id || this.componentId;
    return T`
      <div
        part="base"
        class=${e2({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? T`
              <sl-icon-button
                name="x"
                library="system"
                exportparts="base:close-button"
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
                aria-hidden="true"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = tab_styles_default;
__decorateClass([
  o(".tab")
], SlTab.prototype, "tab", 2);
__decorateClass([
  e()
], SlTab.prototype, "panel", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
__decorateClass([
  e({ type: Boolean })
], SlTab.prototype, "closable", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
SlTab = __decorateClass([
  n("sl-tab")
], SlTab);
var tab_default = SlTab;

export {
  tab_default
};
