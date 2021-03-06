import {
  l as l2
} from "./chunk.RMFWRBHY.js";
import {
  l
} from "./chunk.CXQBDYM7.js";
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

// src/components/switch/switch.styles.ts
var switch_styles_default = i`
  ${component_styles_default}

  :host {
    --height: var(--sl-toggle-size);
    --thumb-size: calc(var(--sl-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: rgb(var(--sl-input-color));
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: rgb(var(--sl-color-neutral-300));
    border: solid var(--sl-input-border-width) rgb(var(--sl-color-neutral-300));
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: rgb(var(--sl-color-neutral-1000));
    border-radius: 50%;
    border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
    transform: translateX(calc((var(--width) - var(--height)) / -2));
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__control input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: rgb(var(--sl-color-neutral-200));
    border-color: rgb(var(--sl-color-neutral-200));
  }
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-1000));
    border-color: rgb(var(--sl-input-border-color));
  }

  /* Focus */
  .switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control {
    background-color: rgb(var(--sl-color-neutral-200));
    border-color: rgb(var(--sl-color-neutral-200));
  }

  .switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-1000));
    border-color: rgb(var(--sl-color-primary-600));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-1000));
    border-color: rgb(var(--sl-color-primary-600));
    transform: translateX(calc((var(--width) - var(--height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-1000));
    border-color: rgb(var(--sl-color-primary-600));
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled).switch--focused .switch__control {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
  }

  .switch.switch--checked:not(.switch--disabled).switch--focused .switch__control .switch__thumb {
    background-color: rgb(var(--sl-color-neutral-1000));
    border-color: rgb(var(--sl-color-primary-600));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    line-height: var(--height);
    margin-left: 0.5em;
    user-select: none;
  }
`;

// src/components/switch/switch.ts
var id = 0;
var SlSwitch = class extends h {
  constructor() {
    super(...arguments);
    this.switchId = `switch-${++id}`;
    this.labelId = `switch-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.invalid = false;
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
  }
  click() {
    this.input.click();
  }
  focus(options) {
    this.input.focus(options);
  }
  blur() {
    this.input.blur();
  }
  reportValidity() {
    return this.input.reportValidity();
  }
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "sl-blur");
  }
  handleCheckedChange() {
    if (this.input) {
      this.input.checked = this.checked;
      this.invalid = !this.input.checkValidity();
    }
  }
  handleClick() {
    this.checked = !this.checked;
    emit(this, "sl-change");
  }
  handleDisabledChange() {
    if (this.input) {
      this.input.disabled = this.disabled;
      this.invalid = !this.input.checkValidity();
    }
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "sl-focus");
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      emit(this, "sl-change");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      emit(this, "sl-change");
    }
  }
  handleMouseDown(event) {
    event.preventDefault();
    this.input.focus();
  }
  render() {
    return T`
      <label
        part="base"
        for=${this.switchId}
        class=${e2({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus
    })}
        @mousedown=${this.handleMouseDown}
      >
        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>

          <input
            id=${this.switchId}
            type="checkbox"
            name=${l(this.name)}
            value=${l(this.value)}
            .checked=${l2(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />
        </span>

        <span part="label" id=${this.labelId} class="switch__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
SlSwitch.styles = switch_styles_default;
__decorateClass([
  o('input[type="checkbox"]')
], SlSwitch.prototype, "input", 2);
__decorateClass([
  r()
], SlSwitch.prototype, "hasFocus", 2);
__decorateClass([
  e()
], SlSwitch.prototype, "name", 2);
__decorateClass([
  e()
], SlSwitch.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlSwitch.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlSwitch.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlSwitch.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlSwitch.prototype, "invalid", 2);
__decorateClass([
  watch("checked")
], SlSwitch.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlSwitch.prototype, "handleDisabledChange", 1);
SlSwitch = __decorateClass([
  n("sl-switch")
], SlSwitch);
var switch_default = SlSwitch;

export {
  switch_default
};
