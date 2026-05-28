"use client";
import { Demo } from "../Demo";

function Icon({ color }: { color: string }) {
  return (
    <svg
      className="mc-status-message__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export default function StatusMessageDemo() {
  return (
    <Demo
      title="Variants"
      code={`<p className="mc-status-message">
  <svg className="mc-status-message__icon" /* info icon */ />
  <span className="mc-status-message__description">Informational message</span>
</p>
<p className="mc-status-message mc-status-message--success">…</p>
<p className="mc-status-message mc-status-message--warning">…</p>
<p className="mc-status-message mc-status-message--danger">…</p>`}
    >
      <div style={{ display: "grid", gap: 8, width: "100%" }}>
        <p className="mc-status-message">
          <Icon color="#1f5199" />
          <span className="mc-status-message__description">Informational message</span>
        </p>
        <p className="mc-status-message mc-status-message--success">
          <Icon color="#188038" />
          <span className="mc-status-message__description">Operation completed</span>
        </p>
        <p className="mc-status-message mc-status-message--warning">
          <Icon color="#b06000" />
          <span className="mc-status-message__description">Heads up — review before continuing</span>
        </p>
        <p className="mc-status-message mc-status-message--danger">
          <Icon color="#b3261e" />
          <span className="mc-status-message__description">Something went wrong</span>
        </p>
      </div>
    </Demo>
  );
}
