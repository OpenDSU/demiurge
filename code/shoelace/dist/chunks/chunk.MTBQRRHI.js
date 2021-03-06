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

// src/components/textarea/textarea.styles.ts
var textarea_styles_default = i`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    background-color: rgb(var(--sl-input-background-color));
    border: solid var(--sl-input-border-width) rgb(var(--sl-input-border-color));
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: text;
  }

  .textarea:hover:not(.textarea--disabled) {
    background-color: rgb(var(--sl-input-background-color-hover));
    border-color: rgb(var(--sl-input-border-color-hover));
  }
  .textarea:hover:not(.textarea--disabled) .textarea__control {
    color: rgb(var(--sl-input-color-hover));
  }

  .textarea.textarea--focused:not(.textarea--disabled) {
    background-color: rgb(var(--sl-input-background-color-focus));
    border-color: rgb(var(--sl-input-border-color-focus));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
    color: rgb(var(--sl-input-color-focus));
  }

  .textarea.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: rgb(var(--sl-input-color-focus));
  }

  .textarea.textarea--disabled {
    background-color: rgb(var(--sl-input-background-color-disabled));
    border-color: rgb(var(--sl-input-border-color-disabled));
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea.textarea--disabled .textarea__control {
    color: rgb(var(--sl-input-color-disabled));
  }

  .textarea.textarea--disabled .textarea__control::placeholder {
    color: rgb(var(--sl-input-placeholder-color-disabled));
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: rgb(var(--sl-input-color));
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: rgb(var(--sl-input-placeholder-color));
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`;

// src/components/textarea/textarea.ts
var id = 0;
var SlTextarea = class extends h {
  constructor() {
    super(...arguments);
    this.inputId = `textarea-${++id}`;
    this.helpTextId = `textarea-help-text-${id}`;
    this.labelId = `textarea-label-${id}`;
    this.hasFocus = false;
    this.hasHelpTextSlot = false;
    this.hasLabelSlot = false;
    this.size = "medium";
    this.value = "";
    this.helpText = "";
    this.rows = 4;
    this.resize = "vertical";
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleSlotChange = this.handleSlotChange.bind(this);
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
    this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    this.handleSlotChange();
    this.updateComplete.then(() => {
      this.setTextareaHeight();
      this.resizeObserver.observe(this.input);
    });
  }
  firstUpdated() {
    this.invalid = !this.input.checkValidity();
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
  select() {
    return this.input.select();
  }
  scrollPosition(position) {
    if (position) {
      if (typeof position.top === "number")
        this.input.scrollTop = position.top;
      if (typeof position.left === "number")
        this.input.scrollLeft = position.left;
      return;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    return this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  setRangeText(replacement, start, end, selectMode = "preserve") {
    this.input.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      emit(this, "sl-input");
    }
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
      emit(this, "sl-input");
      emit(this, "sl-change");
    }
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
  handleChange() {
    this.value = this.input.value;
    this.setTextareaHeight();
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
  handleInput() {
    this.value = this.input.value;
    this.setTextareaHeight();
    emit(this, "sl-input");
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  handleSlotChange() {
    this.hasHelpTextSlot = hasSlot(this, "help-text");
    this.hasLabelSlot = hasSlot(this, "label");
  }
  handleValueChange() {
    if (this.input) {
      this.invalid = !this.input.checkValidity();
    }
  }
  setTextareaHeight() {
    if (this.input) {
      if (this.resize === "auto") {
        this.input.style.height = "auto";
        this.input.style.height = this.input.scrollHeight + "px";
      } else {
        this.input.style.height = void 0;
      }
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
      size: this.size
    }, T`
        <div
          part="base"
          class=${e2({
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": this.value.length === 0,
      "textarea--invalid": this.invalid,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
        >
          <textarea
            part="textarea"
            id=${this.inputId}
            class="textarea__control"
            name=${l(this.name)}
            .value=${l2(this.value)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${l(this.placeholder)}
            rows=${l(this.rows)}
            minlength=${l(this.minlength)}
            maxlength=${l(this.maxlength)}
            autocapitalize=${l(this.autocapitalize)}
            autocorrect=${l(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${l(this.spellcheck)}
            inputmode=${l(this.inputmode)}
            aria-labelledby=${l(getLabelledBy({
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpText: this.helpText,
      helpTextId: this.helpTextId,
      hasHelpTextSlot: this.hasHelpTextSlot
    }))}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          ></textarea>
        </div>
      `);
  }
};
SlTextarea.styles = textarea_styles_default;
__decorateClass([
  o(".textarea__control")
], SlTextarea.prototype, "input", 2);
__decorateClass([
  r()
], SlTextarea.prototype, "hasFocus", 2);
__decorateClass([
  r()
], SlTextarea.prototype, "hasHelpTextSlot", 2);
__decorateClass([
  r()
], SlTextarea.prototype, "hasLabelSlot", 2);
__decorateClass([
  e({ reflect: true })
], SlTextarea.prototype, "size", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "name", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "value", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "label", 2);
__decorateClass([
  e({ attribute: "help-text" })
], SlTextarea.prototype, "helpText", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "placeholder", 2);
__decorateClass([
  e({ type: Number })
], SlTextarea.prototype, "rows", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "resize", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTextarea.prototype, "disabled", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTextarea.prototype, "readonly", 2);
__decorateClass([
  e({ type: Number })
], SlTextarea.prototype, "minlength", 2);
__decorateClass([
  e({ type: Number })
], SlTextarea.prototype, "maxlength", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "pattern", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTextarea.prototype, "required", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlTextarea.prototype, "invalid", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "autocapitalize", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "autocorrect", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "autocomplete", 2);
__decorateClass([
  e({ type: Boolean })
], SlTextarea.prototype, "autofocus", 2);
__decorateClass([
  e({ type: Boolean })
], SlTextarea.prototype, "spellcheck", 2);
__decorateClass([
  e()
], SlTextarea.prototype, "inputmode", 2);
__decorateClass([
  watch("disabled")
], SlTextarea.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("rows")
], SlTextarea.prototype, "handleRowsChange", 1);
__decorateClass([
  watch("helpText"),
  watch("label")
], SlTextarea.prototype, "handleSlotChange", 1);
__decorateClass([
  watch("value")
], SlTextarea.prototype, "handleValueChange", 1);
SlTextarea = __decorateClass([
  n("sl-textarea")
], SlTextarea);
var textarea_default = SlTextarea;

export {
  textarea_default
};
