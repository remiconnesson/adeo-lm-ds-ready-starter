"use client";
import { useState } from "react";
import { Demo } from "../Demo";

type ToastType = "information" | "success" | "danger";
type Toast = { id: number; message: string; type: ToastType };

const ICONS: Record<ToastType, string> = {
  information:
    "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-6h2Zm0-8h-2V7h2Z",
  success:
    "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14.41-4.71-4.7 1.42-1.42L11 13.59l5.29-5.3 1.42 1.42Z",
  danger:
    "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z",
};

function ToasterIcon({ type }: { type: ToastType }) {
  return (
    <svg
      className="mc-toaster__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={ICONS[type]} fill="currentColor" />
    </svg>
  );
}

function ToasterExample() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  function push(type: ToastType, message: string) {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  }

  return (
    <div style={{ position: "relative", width: "100%", minHeight: 160 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          className="mc-button mc-button--s mc-button--bordered"
          onClick={() => push("information", "Heads up — something to know")}
        >
          <span className="mc-button__label">Info</span>
        </button>
        <button
          type="button"
          className="mc-button mc-button--s"
          onClick={() => push("success", "Saved successfully")}
        >
          <span className="mc-button__label">Success</span>
        </button>
        <button
          type="button"
          className="mc-button mc-button--s mc-button--danger"
          onClick={() => push("danger", "Something went wrong")}
        >
          <span className="mc-button__label">Danger</span>
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          display: "grid",
          gap: 8,
          width: 320,
        }}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`mc-toaster mc-toaster--${t.type} is-open`}
            role="status"
            style={{ position: "static", transform: "none", margin: 0 }}
          >
            <ToasterIcon type={t.type} />
            <div className="mc-toaster__content">
              <p className="mc-toaster__message">{t.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToasterDemo() {
  return (
    <Demo
      title="Stacked transient notifications"
      code={`<div className="mc-toaster mc-toaster--success is-open" role="status">
  <svg className="mc-toaster__icon" /* … */ />
  <div className="mc-toaster__content">
    <p className="mc-toaster__message">Saved successfully</p>
  </div>
</div>`}
    >
      <ToasterExample />
    </Demo>
  );
}
