"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function SegmentedExample() {
  const [v, setV] = useState("day");
  const items = [
    { id: "day", label: "Day" },
    { id: "week", label: "Week" },
    { id: "month", label: "Month" },
  ];
  return (
    <div className="mc-segmented-control" role="tablist" style={{ display: "inline-flex", border: "1px solid #e4e4e4", borderRadius: 8, padding: 2 }}>
      {items.map((i) => (
        <button
          key={i.id}
          type="button"
          role="tab"
          aria-selected={v === i.id}
          className={`mc-segmented-control__item${v === i.id ? " is-active" : ""}`}
          onClick={() => setV(i.id)}
          style={{ border: 0, background: v === i.id ? "#fff" : "transparent", padding: "6px 14px", borderRadius: 6, fontSize: 13, cursor: "pointer", fontWeight: v === i.id ? 600 : 400 }}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}

export default function SegmentedControlDemo() {
  return (
    <Demo
      title="Mutually exclusive options"
      code={`<div className="mc-segmented-control" role="tablist">
  {items.map(i => (
    <button
      key={i.id}
      role="tab"
      aria-selected={v === i.id}
      className={\`mc-segmented-control__item\${v === i.id ? " is-active" : ""}\`}
      onClick={() => setV(i.id)}
    >{i.label}</button>
  ))}
</div>`}
    >
      <SegmentedExample />
    </Demo>
  );
}
