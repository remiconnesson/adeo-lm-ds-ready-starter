"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function DrawerExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="mc-button mc-button--accent" onClick={() => setOpen(true)}>
        <span className="mc-button__label">Open drawer</span>
      </button>
      {open && <div className="mc-overlay is-open" onClick={() => setOpen(false)} aria-hidden />}
      <aside
        className={`mc-drawer mc-drawer--right${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: 320, background: "#fff", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform .25s ease", zIndex: 6, boxShadow: "-8px 0 24px rgba(0,0,0,.1)" }}
      >
        <header className="mc-drawer__header" style={{ padding: 16, borderBottom: "1px solid #e4e4e4", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 className="mc-drawer__title" style={{ margin: 0, fontSize: 16 }}>Filters</h2>
          <button type="button" className="mc-drawer__close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
        </header>
        <div className="mc-drawer__body" style={{ padding: 16 }}>
          <p>Drawer content goes here.</p>
        </div>
      </aside>
    </>
  );
}

export default function DrawerDemo() {
  return (
    <Demo
      title="Slide-in panel"
      code={`<aside className={\`mc-drawer mc-drawer--right\${open ? " is-open" : ""}\`} role="dialog">
  <header className="mc-drawer__header">
    <h2 className="mc-drawer__title">Filters</h2>
    <button className="mc-drawer__close" onClick={() => setOpen(false)}>×</button>
  </header>
  <div className="mc-drawer__body">…</div>
</aside>`}
    >
      <DrawerExample />
    </Demo>
  );
}
