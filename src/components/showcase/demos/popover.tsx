"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function PopoverExample() {
  const [open, setOpen] = useState(false);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <button type="button" className="mc-button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="mc-button__label">{open ? "Close" : "Open"} popover</span>
      </button>
      {open && (
        <div
          role="dialog"
          className="mc-popover is-open"
          style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, minWidth: 240, padding: 12, background: "#fff", border: "1px solid #e4e4e4", borderRadius: 8, boxShadow: "0 8px 24px rgba(0,0,0,.08)", zIndex: 4 }}
        >
          <h4 style={{ margin: 0, fontSize: 14 }}>Quick info</h4>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#6e6e6e" }}>Popovers can hold richer content than tooltips.</p>
        </div>
      )}
    </span>
  );
}

export default function PopoverDemo() {
  return (
    <Demo
      title="Anchored panel"
      code={`<div role="dialog" className="mc-popover is-open">
  <h4>Quick info</h4>
  <p>Popovers can hold richer content than tooltips.</p>
</div>`}
    >
      <PopoverExample />
    </Demo>
  );
}
