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

// src/components/checkbox/checkbox.styles.ts
var checkbox_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: rgb(var(--sl-input-color));
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
    border-radius: 2px;
    background-color: rgb(var(--sl-input-background-color));
    color: rgb(var(--sl-color-neutral-1000));
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__control input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: rgb(var(--sl-input-border-color-hover));
    background-color: rgb(var(--sl-input-background-color-hover));
  }

  /* Focus */
  .checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control {
    border-color: rgb(var(--sl-input-border-color-focus));
    background-color: rgb(var(--sl-input-background-color-focus));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: rgb(var(--sl-color-primary-600));
    background-color: rgb(var(--sl-color-primary-600));
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: rgb(var(--sl-color-primary-500));
    background-color: rgb(var(--sl-color-primary-500));
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control {
    border-color: rgb(var(--sl-color-primary-500));
    background-color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--sl-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`;

// src/components/checkbox/checkbox.ts
var id = 0;
var SlCheckbox = class extends h {
  constructor() {
    super(...arguments);
    this.inputId = `checkbox-${++id}`;
    this.labelId = `checkbox-label-${id}`;
    this.hasFocus = false;
    this.disabled = false;
    this.required = false;
    this.checked = false;
    this.indeterminate = false;
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
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    emit(this, "sl-change");
  }
  handleBlur() {
    this.hasFocus = false;
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
    emit(this, "sl-focus");
  }
  handleLabelMouseDown(event) {
    event.preventDefault();
    this.input.focus();
  }
  handleStateChange() {
    this.invalid = !this.input.checkValidity();
  }
  render() {
    return T`
      <label
        part="base"
        class=${e2({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate
    })}
        for=${this.inputId}
        @mousedown=${this.handleLabelMouseDown}
      >
        <span part="control" class="checkbox__control">
          ${this.checked ? T`
                <span part="checked-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}
          ${!this.checked && this.indeterminate ? T`
                <span part="indeterminate-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}

          <input
            id=${this.inputId}
            type="checkbox"
            name=${l(this.name)}
            value=${l(this.value)}
            .indeterminate=${l2(this.indeterminate)}
            .checked=${l2(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="checkbox"
            aria-checked=${this.checked ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />
        </span>

        <span part="label" id=${this.labelId} class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `;
  }
};
SlCheckbox.styles = checkbox_styles_default;
__decorateClass([
  o('input[type="checkbox"]')
], SlCheckbox.prototype, "input", 2);
__decorateClass([
  r()
], SlCheckbox.prototype, "hasFocus", 2);
__decorateClass([
  e()
], SlCheckbox.prototype, "name", 2);
__decorateClass([
  e()
], SlCheckbox.prototype, "value", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "checked", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "indeterminate", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "invalid", 2);
__decorateClass([
  watch("disabled")
], SlCheckbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("checked", { waitUntilFirstUpdate: true }),
  watch("indeterminate", { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleStateChange", 1);
SlCheckbox = __decorateClass([
  n("sl-checkbox")
], SlCheckbox);
var checkbox_default = SlCheckbox;

export {
  checkbox_default
};
