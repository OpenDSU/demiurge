import {
  watch
} from "./chunk.BD26TKS4.js";
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

// src/components/progress-ring/progress-ring.styles.ts
var progress_ring_styles_default = i`
  ${component_styles_default}

  :host {
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .progress-ring__track {
    stroke: var(--track-color);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    transition: 0.35s stroke-dashoffset, 0.35s stroke;
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`;

// src/components/progress-ring/progress-ring.ts
var SlProgressRing = class extends h {
  constructor() {
    super(...arguments);
    this.size = 128;
    this.strokeWidth = 4;
  }
  firstUpdated() {
    this.updateProgress();
  }
  updateProgress() {
    const radius = this.indicator.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - this.percentage / 100 * circumference;
    this.indicator.style.strokeDasharray = `${circumference} ${circumference}`;
    this.indicator.style.strokeDashoffset = `${offset}`;
  }
  render() {
    return T`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.percentage}"
      >
        <svg class="progress-ring__image" width=${this.size} height=${this.size}>
          <circle
            class="progress-ring__track"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            fill="transparent"
            r=${this.size / 2 - this.strokeWidth * 2}
            cx=${this.size / 2}
            cy=${this.size / 2}
          ></circle>

          <circle
            class="progress-ring__indicator"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            fill="transparent"
            r=${this.size / 2 - this.strokeWidth * 2}
            cx=${this.size / 2}
            cy=${this.size / 2}
          ></circle>
        </svg>

        <span part="label" class="progress-ring__label">
          <slot></slot>
        </span>
      </div>
    `;
  }
};
SlProgressRing.styles = progress_ring_styles_default;
__decorateClass([
  o(".progress-ring__indicator")
], SlProgressRing.prototype, "indicator", 2);
__decorateClass([
  e({ type: Number })
], SlProgressRing.prototype, "size", 2);
__decorateClass([
  e({ attribute: "stroke-width", type: Number })
], SlProgressRing.prototype, "strokeWidth", 2);
__decorateClass([
  e({ type: Number, reflect: true })
], SlProgressRing.prototype, "percentage", 2);
__decorateClass([
  watch("percentage", { waitUntilFirstUpdate: true })
], SlProgressRing.prototype, "updateProgress", 1);
SlProgressRing = __decorateClass([
  n("sl-progress-ring")
], SlProgressRing);
var progress_ring_default = SlProgressRing;

export {
  progress_ring_default
};
