"use client";

import { useState } from "react";
import { Demo } from "../Demo";

function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="mc-button mc-button--accent"
        onClick={() => setOpen(true)}
      >
        <span className="mc-button__label">Open modal</span>
      </button>

      {open && (
        <div
          className="mc-overlay is-open"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      <div
        className={`mc-modal${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mc-modal__dialog">
          <header className="mc-modal__header">
            <h2 className="mc-modal__title">Confirm the action</h2>
            <button
              type="button"
              className="mc-modal__close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </header>
          <div className="mc-modal__body">
            <p>
              You are about to apply changes to several items. This cannot be
              undone.
            </p>
          </div>
          <footer className="mc-modal__footer">
            <button
              type="button"
              className="mc-button mc-button--outlined"
              onClick={() => setOpen(false)}
            >
              <span className="mc-button__label">Cancel</span>
            </button>
            <button
              type="button"
              className="mc-button mc-button--accent"
              onClick={() => setOpen(false)}
            >
              <span className="mc-button__label">Confirm</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default function ModalDemo() {
  return (
    <Demo
      title="Open / close"
      description="A modal is rendered with mc-modal and toggled by adding the is-open class. The accompanying overlay (mc-overlay) dims the page."
      code={`const [open, setOpen] = useState(false);

return (
  <>
    <button
      className="mc-button mc-button--accent"
      onClick={() => setOpen(true)}
    >
      <span className="mc-button__label">Open modal</span>
    </button>

    {open && <div className="mc-overlay is-open" onClick={() => setOpen(false)} />}

    <div className={\`mc-modal\${open ? " is-open" : ""}\`} role="dialog">
      <div className="mc-modal__dialog">
        <header className="mc-modal__header">
          <h2 className="mc-modal__title">Confirm the action</h2>
          <button className="mc-modal__close" onClick={() => setOpen(false)}>×</button>
        </header>
        <div className="mc-modal__body">
          <p>You are about to apply changes…</p>
        </div>
        <footer className="mc-modal__footer">
          <button className="mc-button mc-button--outlined" onClick={() => setOpen(false)}>
            <span className="mc-button__label">Cancel</span>
          </button>
          <button className="mc-button mc-button--accent" onClick={() => setOpen(false)}>
            <span className="mc-button__label">Confirm</span>
          </button>
        </footer>
      </div>
    </div>
  </>
);`}
    >
      <ModalExample />
    </Demo>
  );
}
