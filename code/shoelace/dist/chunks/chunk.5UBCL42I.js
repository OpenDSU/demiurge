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

// src/components/menu-divider/menu-divider.styles.ts
var menu_divider_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-divider {
    border-top: solid 1px rgb(var(--sl-panel-border-color));
    margin: var(--sl-spacing-x-small) 0;
  }
`;

// src/components/menu-divider/menu-divider.ts
var SlMenuDivider = class extends h {
  render() {
    return T` <div part="base" class="menu-divider" role="separator" aria-hidden="true"></div> `;
  }
};
SlMenuDivider.styles = menu_divider_styles_default;
SlMenuDivider = __decorateClass([
  n("sl-menu-divider")
], SlMenuDivider);
var menu_divider_default = SlMenuDivider;

export {
  menu_divider_default
};
