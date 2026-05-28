"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function LoadingOverlayExample() {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ position: "relative", padding: 16, border: "1px solid #e4e4e4", borderRadius: 8, width: 320 }}>
      <p style={{ margin: 0 }}>Content under the loading overlay.</p>
      <button type="button" className="mc-button mc-button--s" onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500); }} style={{ marginTop: 12 }}>
        <span className="mc-button__label">Trigger</span>
      </button>
      {loading && (
        <div className="mc-loading-overlay is-open" style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", background: "rgba(255,255,255,0.7)" }}>
          <span className="mc-loader mc-loader--l" />
        </div>
      )}
    </div>
  );
}

export default function LoadingOverlayDemo() {
  return (
    <Demo
      title="Block interaction during async work"
      code={`<div style={{ position: "relative" }}>
  <p>Content under the loading overlay.</p>
  {loading && (
    <div className="mc-loading-overlay is-open">
      <span className="mc-loader mc-loader--l" />
    </div>
  )}
</div>`}
    >
      <LoadingOverlayExample />
    </Demo>
  );
}
