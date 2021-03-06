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

// src/components/spinner/spinner.styles.ts
var spinner_styles_default = i`
  ${component_styles_default}

  :host {
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));
    --stroke-width: 2px;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    border-radius: 50%;
    border: solid var(--stroke-width) var(--track-color);
    border-top-color: var(--indicator-color);
    border-right-color: var(--indicator-color);
    animation: 1s linear infinite spin;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// src/components/spinner/spinner.ts
var SlSpinner = class extends h {
  render() {
    return T` <span part="base" class="spinner" aria-busy="true" aria-live="polite"></span> `;
  }
};
SlSpinner.styles = spinner_styles_default;
SlSpinner = __decorateClass([
  n("sl-spinner")
], SlSpinner);
var spinner_default = SlSpinner;

export {
  spinner_default
};
