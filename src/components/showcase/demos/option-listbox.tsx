"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function OptionListboxExample() {
  const [v, setV] = useState("standard");
  const opts = [
    { id: "express", label: "Express", helper: "1–2 business days", price: "€9.90" },
    { id: "standard", label: "Standard", helper: "3–5 business days", price: "Free" },
    { id: "pickup", label: "Pickup", helper: "Available in store", price: "Free" },
  ];
  return (
    <div className="mc-option-listbox" role="radiogroup" style={{ display: "grid", gap: 8, width: 360 }}>
      {opts.map((o) => (
        <label key={o.id} className={`mc-option-listbox__option${v === o.id ? " is-selected" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: `2px solid ${v === o.id ? "#46a610" : "#e4e4e4"}`, borderRadius: 10, padding: "10px 14px", cursor: "pointer" }}>
          <span>
            <input type="radio" name="ship" checked={v === o.id} onChange={() => setV(o.id)} style={{ marginRight: 10 }} />
            <strong>{o.label}</strong>
            <span style={{ display: "block", fontSize: 12, color: "#6e6e6e", marginLeft: 24 }}>{o.helper}</span>
          </span>
          <span style={{ fontWeight: 600 }}>{o.price}</span>
        </label>
      ))}
    </div>
  );
}

export default function OptionListboxDemo() {
  return (
    <Demo
      title="Rich option list"
      code={`<div className="mc-option-listbox" role="radiogroup">
  {opts.map(o => (
    <label className={\`mc-option-listbox__option\${v === o.id ? " is-selected" : ""}\`}>
      <input type="radio" name="ship" />
      <strong>{o.label}</strong>
      <span>{o.helper}</span>
      <span>{o.price}</span>
    </label>
  ))}
</div>`}
    >
      <OptionListboxExample />
    </Demo>
  );
}
