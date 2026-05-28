"use client";

import { Demo } from "../Demo";

export default function StatusBadgeDemo() {
  return (
    <>
      <Demo
        title="Default"
        description="info is the default style — no modifier required."
        code={`<span className="mc-status-badge">
  <span className="mc-status-badge__label">In progress</span>
</span>`}
      >
        <span className="mc-status-badge">
          <span className="mc-status-badge__label">In progress</span>
        </span>
      </Demo>

      <Demo
        title="Style variations"
        description="Mozaic ships success, warning, danger styles via --{style} modifiers."
        code={`<span className="mc-status-badge mc-status-badge--success">
  <span className="mc-status-badge__label">Success</span>
</span>
<span className="mc-status-badge mc-status-badge--warning">
  <span className="mc-status-badge__label">Warning</span>
</span>
<span className="mc-status-badge mc-status-badge--danger">
  <span className="mc-status-badge__label">Danger</span>
</span>`}
      >
        <span className="mc-status-badge mc-status-badge--success">
          <span className="mc-status-badge__label">Success</span>
        </span>
        <span className="mc-status-badge mc-status-badge--warning">
          <span className="mc-status-badge__label">Warning</span>
        </span>
        <span className="mc-status-badge mc-status-badge--danger">
          <span className="mc-status-badge__label">Danger</span>
        </span>
      </Demo>
    </>
  );
}
