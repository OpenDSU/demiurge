import {
  component_styles_default
} from "./chunk.LERSXYXA.js";
import {
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

// src/components/menu-label/menu-label.styles.ts
var menu_label_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: rgb(var(--sl-color-neutral-500));
    padding: var(--sl-spacing-xx-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`;

// src/components/menu-label/menu-label.ts
var SlMenuLabel = class extends h {
  render() {
    return T`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
  }
};
SlMenuLabel.styles = menu_label_styles_default;
SlMenuLabel = __decorateClass([
  n("sl-menu-label")
], SlMenuLabel);
var menu_label_default = SlMenuLabel;

export {
  menu_label_default
};
