import {
  l
} from "./chunk.CXQBDYM7.js";
import {
  e
} from "./chunk.7QWA24FS.js";
import {
  T,
  i
} from "./chunk.4WUNMDF2.js";

// src/internal/form-control.ts
var renderFormControl = (props, input) => {
  const hasLabel = props.label ? true : !!props.hasLabelSlot;
  const hasHelpText = props.helpText ? true : !!props.hasHelpTextSlot;
  return T`
    <div
      part="form-control"
      class=${e({
    "form-control": true,
    "form-control--small": props.size === "small",
    "form-control--medium": props.size === "medium",
    "form-control--large": props.size === "large",
    "form-control--has-label": hasLabel,
    "form-control--has-help-text": hasHelpText
  })}
    >
      <label
        part="label"
        id=${l(props.labelId)}
        class="form-control__label"
        for=${props.inputId}
        aria-hidden=${hasLabel ? "false" : "true"}
        @click=${(event) => props.onLabelClick ? props.onLabelClick(event) : null}
      >
        <slot name="label">${props.label}</slot>
      </label>

      <div class="form-control__input">${T`${input}`}</div>

      <div
        part="help-text"
        id=${l(props.helpTextId)}
        class="form-control__help-text"
        aria-hidden=${hasHelpText ? "false" : "true"}
      >
        <slot name="help-text">${props.helpText}</slot>
      </div>
    </div>
  `;
};
function getLabelledBy(props) {
  const labelledBy = [
    props.label || props.hasLabelSlot ? props.labelId : "",
    props.helpText || props.hasHelpTextSlot ? props.helpTextId : ""
  ].filter((val) => val);
  return labelledBy.join(" ") || void 0;
}

// src/styles/form-control.styles.ts
var form_control_styles_default = i`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-xxx-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: rgb(var(--sl-input-help-text-color));
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-xxx-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`;

export {
  renderFormControl,
  getLabelledBy,
  form_control_styles_default
};
