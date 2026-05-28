"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function SuccessIcon() {
  return (
    <svg
      className="mc-status-notification__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14.41-4.71-4.7 1.42-1.42L11 13.59l5.29-5.3 1.42 1.42Z"
      />
    </svg>
  );
}

function NotificationExample() {
  const [visible, setVisible] = useState(true);
  if (!visible)
    return (
      <button
        type="button"
        className="mc-button mc-button--s mc-button--bordered"
        onClick={() => setVisible(true)}
      >
        <span className="mc-button__label">Reset</span>
      </button>
    );
  return (
    <div
      className="mc-status-notification mc-status-notification--success mc-status-notification-closable"
      role="status"
    >
      <SuccessIcon />
      <div className="mc-status-notification__content">
        <h4 className="mc-status-notification__title">Saved</h4>
        <p className="mc-status-notification__message">
          Your preferences have been updated.
        </p>
      </div>
      <button
        type="button"
        className="mc-status-notification-closable__close mc-button mc-button--s mc-button--bordered-neutral"
        aria-label="Dismiss"
        onClick={() => setVisible(false)}
      >
        <span className="mc-button__label">×</span>
      </button>
    </div>
  );
}

export default function StatusNotificationDemo() {
  return (
    <Demo
      title="Dismissable"
      code={`<div className="mc-status-notification mc-status-notification--success mc-status-notification-closable" role="status">
  <svg className="mc-status-notification__icon" /* … */ />
  <div className="mc-status-notification__content">
    <h4 className="mc-status-notification__title">Saved</h4>
    <p className="mc-status-notification__message">Your preferences have been updated.</p>
  </div>
  <button className="mc-status-notification-closable__close mc-button mc-button--s mc-button--bordered-neutral" aria-label="Dismiss">
    <span className="mc-button__label">×</span>
  </button>
</div>`}
    >
      <div style={{ width: "100%" }}>
        <NotificationExample />
      </div>
    </Demo>
  );
}
