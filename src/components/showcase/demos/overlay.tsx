"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function OverlayExample() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", minHeight: 180 }}>
      <button
        type="button"
        className="mc-button mc-button--bordered"
        onClick={() => setOpen(true)}
      >
        <span className="mc-button__label">Show overlay</span>
      </button>
      <div
        className={`mc-overlay${open ? " is-visible" : ""}`}
        onClick={() => setOpen(false)}
        style={{ position: "absolute" }}
      />
      {open && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          <span
            style={{
              margin: 12,
              padding: "6px 10px",
              borderRadius: 6,
              background: "rgba(0,0,0,.75)",
              color: "#fff",
              fontSize: 12,
            }}
          >
            Click anywhere to dismiss
          </span>
        </div>
      )}
    </div>
  );
}

export default function OverlayDemo() {
  return (
    <Demo
      title="Dimming layer"
      description="The overlay is the dimmed background used behind modals and drawers."
      code={`<div className={\`mc-overlay\${open ? " is-visible" : ""}\`} onClick={onDismiss} />`}
    >
      <OverlayExample />
    </Demo>
  );
}
