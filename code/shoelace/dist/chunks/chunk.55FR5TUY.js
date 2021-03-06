import {
  emit
} from "./chunk.I4TE3TJV.js";
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

// src/components/resize-observer/resize-observer.styles.ts
var resize_observer_styles_default = i`
  ${component_styles_default}

  :host {
    display: contents;
  }
`;

// src/components/resize-observer/resize-observer.ts
var SlResizeObserver = class extends h {
  constructor() {
    super(...arguments);
    this.observedElements = [];
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => {
      emit(this, "sl-resize", { detail: { entries } });
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.disconnect();
  }
  handleSlotChange() {
    const slot = this.shadowRoot.querySelector("slot");
    const elements = slot.assignedElements({ flatten: true });
    this.observedElements.map((el) => this.resizeObserver.unobserve(el));
    this.observedElements = [];
    elements.map((el) => {
      this.resizeObserver.observe(el);
      this.observedElements.push(el);
    });
  }
  render() {
    return T` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
SlResizeObserver.styles = resize_observer_styles_default;
SlResizeObserver = __decorateClass([
  n("sl-resize-observer")
], SlResizeObserver);
var resize_observer_default = SlResizeObserver;

export {
  resize_observer_default
};
