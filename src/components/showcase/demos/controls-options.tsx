"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function ControlsExample() {
  const [v, setV] = useState("balcony");
  const items = [
    { id: "garden", label: "Garden", helper: "Outdoor, with soil" },
    { id: "balcony", label: "Balcony", helper: "Small outdoor space" },
    { id: "indoor", label: "Indoor", helper: "Indoor light only" },
  ];
  return (
    <div className="mc-controls-options" style={{ display: "grid", gap: 8, gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
      {items.map((i) => (
        <label
          key={i.id}
          className={`mc-controls-options__item${v === i.id ? " is-selected" : ""}`}
          style={{ border: `2px solid ${v === i.id ? "#46a610" : "#e4e4e4"}`, borderRadius: 10, padding: 12, cursor: "pointer" }}
        >
          <input type="radio" name="ctrls" value={i.id} checked={v === i.id} onChange={() => setV(i.id)} style={{ display: "none" }} />
          <div style={{ fontWeight: 600, fontSize: 14 }}>{i.label}</div>
          <div style={{ fontSize: 12, color: "#6e6e6e" }}>{i.helper}</div>
        </label>
      ))}
    </div>
  );
}

export default function ControlsOptionsDemo() {
  return (
    <Demo
      title="Selectable option cards"
      code={`<div className="mc-controls-options">
  {items.map(i => (
    <label className={\`mc-controls-options__item\${v === i.id ? " is-selected" : ""}\`}>
      <input type="radio" name="ctrls" />
      …
    </label>
  ))}
</div>`}
    >
      <ControlsExample />
    </Demo>
  );
}
