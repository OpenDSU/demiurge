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

// src/components/badge/badge.styles.ts
var badge_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--sl-font-size-x-small);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Type modifiers */
  .badge--primary {
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .badge--success {
    background-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .badge--neutral {
    background-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .badge--warning {
    background-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  .badge--danger {
    background-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-1000));
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: rgb(var(--sl-color-primary-600));
  }

  .badge--pulse.badge--success {
    --pulse-color: rgb(var(--sl-color-success-600));
  }

  .badge--pulse.badge--neutral {
    --pulse-color: rgb(var(--sl-color-neutral-600));
  }

  .badge--pulse.badge--warning {
    --pulse-color: rgb(var(--sl-color-warning-600));
  }

  .badge--pulse.badge--danger {
    --pulse-color: rgb(var(--sl-color-danger-600));
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

// src/components/badge/badge.ts
var SlBadge = class extends h {
  constructor() {
    super(...arguments);
    this.type = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return T`
      <span
        part="base"
        class=${e2({
      badge: true,
      "badge--primary": this.type === "primary",
      "badge--success": this.type === "success",
      "badge--neutral": this.type === "neutral",
      "badge--warning": this.type === "warning",
      "badge--danger": this.type === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
SlBadge.styles = badge_styles_default;
__decorateClass([
  e({ reflect: true })
], SlBadge.prototype, "type", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlBadge.prototype, "pill", 2);
__decorateClass([
  e({ type: Boolean, reflect: true })
], SlBadge.prototype, "pulse", 2);
SlBadge = __decorateClass([
  n("sl-badge")
], SlBadge);
var badge_default = SlBadge;

export {
  badge_default
};
