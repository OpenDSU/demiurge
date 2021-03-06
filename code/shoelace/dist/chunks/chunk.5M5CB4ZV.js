import {
  i as i2
} from "./chunk.2ICIM75G.js";
import {
  e as e2
} from "./chunk.7QWA24FS.js";
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

// src/components/progress-bar/progress-bar.styles.ts
var progress_bar_styles_default = i`
  ${component_styles_default}

  :host {
    --height: 16px;
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));
    --label-color: rgb(var(--sl-color-neutral-1000));

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }
`;

// src/components/progress-bar/progress-bar.ts
var SlProgressBar = class extends h {
  constructor() {
    super(...arguments);
    this.percentage = 0;
    this.indeterminate = false;
  }
  render() {
    return T`
      <div
        part="base"
        class=${e2({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate
    })}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.indeterminate ? "" : this.percentage}"
      >
        <div part="indicator" class="progress-bar__indicator" style=${i2({ width: this.percentage + "%" })}>
          ${!this.indeterminate ? T`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              ` : ""}
        </div>
      </div>
    `;
  }
};
SlProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e({ type: Number, reflect: true })
], SlProgressBar.prototype, "percentage", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
SlProgressBar = __decorateClass([
  n("sl-progress-bar")
], SlProgressBar);
var progress_bar_default = SlProgressBar;

export {
  progress_bar_default
};
