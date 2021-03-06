import {
  form_control_styles_default,
  getLabelledBy,
  renderFormControl
} from "./chunk.XXM4Q4SA.js";
import {
  l as l2
} from "./chunk.RMFWRBHY.js";
import {
  l
} from "./chunk.CXQBDYM7.js";
import {
  hasSlot
} from "./chunk.IBDZI3K2.js";
import {
  e as e2
} from "./chunk.7QWA24FS.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  component_styles_default
} from "./chunk.LERSXYXA.js";
import {
  e,
  n,
  o,
  r
} from "./chunk.VRIBQCTO.js";
import {
  T,
  h,
  i
} from "./chunk.4WUNMDF2.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// src/components/range/range.styles.ts
var range_styles_default = i`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    --thumb-size: 20px;
    --tooltip-offset-y: 10px;
    --track-color: rgb(var(--sl-color-neutral-200));
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    -webkit-appearance: none;
    width: 100%;
    height: var(--sl-input-height-medium);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: rgb(var(--sl-color-primary-600));
    border: solid var(--sl-input-border-width) rgb(var(--sl-color-primary-600));
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:not(:disabled)::-webkit-slider-thumb:hover {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
  }

  .range__control:not(:disabled):focus::-webkit-slider-thumb {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .range__control:not(:disabled)::-webkit-slider-thumb:active {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:not(:disabled)::-moz-range-thumb:hover {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
  }

  .range__control:not(:disabled):focus::-moz-range-thumb {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .range__control:not(:disabled)::-moz-range-thumb:active {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    cursor: grabbing;
  }

  /* States */
  .range__control:focus {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 1px;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: rgb(var(--sl-tooltip-background-color));
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: rgb(var(--sl-tooltip-color));
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    margin-left: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset-y));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid rgb(var(--sl-tooltip-background-color));
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset-y));
  }
  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid rgb(var(--sl-tooltip-background-color));
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }
`;

// src/components/range/range.ts
var id = 0;
var SlRange = class extends h {
  constructor() {
    super(...arguments);
    this.inputId = `input-${++id}`;
    this.helpTextId = `input-help-text-${id}`;
    this.labelId = `input-label-${id}`;
    this.hasFocus = false;
    this.hasHelpTextSlot = false;
    this.hasLabelSlot = false;
    this.hasTooltip = false;
    this.name = "";
    this.value = 0;
    this.label = "";
    this.helpText = "";
    this.disabled = false;
    this.invalid = false;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.tooltip = "top";
    this.tooltipFormatter = (value) => value.toString();
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleSlotChange = this.handleSlotChange;
    this.resizeObserver = new ResizeObserver(() => this.syncTooltip());
    this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    if (this.value === void 0 || this.value === null)
      this.value = this.min;
    if (this.value < this.min)
      this.value = this.min;
    if (this.value > this.max)
      this.value = this.max;
    this.handleSlotChange();
    this.updateComplete.then(() => {
      this.syncTooltip();
      this.resizeObserver.observe(this.input);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.input);
    this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleInput() {
    this.value = Number(this.input.value);
    emit(this, "sl-change");
    requestAnimationFrame(() => this.syncTooltip());
  }
  handleBlur() {
    this.hasFocus = false;
    this.hasTooltip = false;
    emit(this, "sl-blur");
  }
  handleDisabledChange() {
    if (this.input) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }
  handleFocus() {
    this.hasFocus = true;
    this.hasTooltip = true;
    emit(this, "sl-focus");
  }
  handleSlotChange() {
    this.hasHelpTextSlot = hasSlot(this, "help-text");
    this.hasLabelSlot = hasSlot(this, "label");
  }
  handleThumbDragStart() {
    this.hasTooltip = true;
  }
  handleThumbDragEnd() {
    this.hasTooltip = false;
  }
  syncTooltip() {
    if (this.tooltip !== "none") {
      const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
      const inputWidth = this.input.offsetWidth;
      const tooltipWidth = this.output.offsetWidth;
      const thumbSize = getComputedStyle(this.input).getPropertyValue("--thumb-size");
      const x = `calc(${inputWidth * percent}px - calc(calc(${percent} * ${thumbSize}) - calc(${thumbSize} / 2)))`;
      this.output.style.transform = `translateX(${x})`;
      this.output.style.marginLeft = `-${tooltipWidth / 2}px`;
    }
  }
  render() {
    return renderFormControl({
      inputId: this.inputId,
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpTextId: this.helpTextId,
      helpText: this.helpText,
      hasHelpTextSlot: this.hasHelpTextSlot,
      size: "medium"
    }, T`
        <div
          part="base"
          class=${e2({
      range: true,
      "range--disabled": this.disabled,
      "range--focused": this.hasFocus,
      "range--tooltip-visible": this.hasTooltip,
      "range--tooltip-top": this.tooltip === "top",
      "range--tooltip-bottom": this.tooltip === "bottom"
    })}
          @mousedown=${this.handleThumbDragStart}
          @mouseup=${this.handleThumbDragEnd}
          @touchstart=${this.handleThumbDragStart}
          @touchend=${this.handleThumbDragEnd}
        >
          <input
            part="input"
            type="range"
            class="range__control"
            name=${l(this.name)}
            ?disabled=${this.disabled}
            min=${l(this.min)}
            max=${l(this.max)}
            step=${l(this.step)}
            .value=${l2(String(this.value))}
            aria-labelledby=${l(getLabelledBy({
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpText: this.helpText,
      helpTextId: this.helpTextId,
      hasHelpTextSlot: this.hasHelpTextSlot
    }))}
            @input=${this.handleInput}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
          ${this.tooltip !== "none" ? T` <output part="tooltip" class="range__tooltip"> ${this.tooltipFormatter(this.value)} </output> ` : ""}
        </div>
      `);
  }
};
SlRange.styles = range_styles_default;
__decorateClass([
  o(".range__control")
], SlRange.prototype, "input", 2);
__decorateClass([
  o(".range__tooltip")
], SlRange.prototype, "output", 2);
__decorateClass([
  r()
], SlRange.prototype, "hasFocus", 2);
__decorateClass([
  r()
], SlRange.prototype, "hasHelpTextSlot", 2);
__decorateClass([
  r()
], SlRange.prototype, "hasLabelSlot", 2);
__decorateClass([
  r()
], SlRange.prototype, "hasTooltip", 2);
__decorateClass([
  e()
], SlRange.prototype, "name", 2);
__decorateClass([
  e({ type: Number })
], SlRange.prototype, "value", 2);
__decorateClass([
  e()
], SlRange.prototype, "label", 2);
__decorateClass([
  e({ attribute: "help-text" })
], SlRange.prototype, "helpText", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlRange.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlRange.prototype, "invalid", 2);
__decorateClass([
  e({ type: Number })
], SlRange.prototype, "min", 2);
__decorateClass([
  e({ type: Number })
], SlRange.prototype, "max", 2);
__decorateClass([
  e({ type: Number })
], SlRange.prototype, "step", 2);
__decorateClass([
  e()
], SlRange.prototype, "tooltip", 2);
__decorateClass([
  e({ attribute: false })
], SlRange.prototype, "tooltipFormatter", 2);
__decorateClass([
  watch("disabled")
], SlRange.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("label"),
  watch("helpText")
], SlRange.prototype, "handleSlotChange", 1);
SlRange = __decorateClass([
  n("sl-range")
], SlRange);
var range_default = SlRange;

export {
  range_default
};
