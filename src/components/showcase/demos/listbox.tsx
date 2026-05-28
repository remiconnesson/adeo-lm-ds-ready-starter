"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function ListboxExample() {
  const [v, setV] = useState("italy");
  const opts = [
    { id: "france", label: "France" },
    { id: "italy", label: "Italy" },
    { id: "spain", label: "Spain" },
  ];
  return (
    <div className="mc-listbox" role="listbox" aria-label="Country" style={{ width: 220, border: "1px solid #e4e4e4", borderRadius: 8, padding: 4 }}>
      <ul className="mc-listbox__content" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {opts.map((o) => (
          <li
            key={o.id}
            role="option"
            aria-selected={v === o.id}
            className={`mc-listbox__option${v === o.id ? " is-selected" : ""}`}
            onClick={() => setV(o.id)}
            style={{ padding: "8px 12px", borderRadius: 6, cursor: "pointer", background: v === o.id ? "rgba(70,166,16,0.12)" : "transparent", fontSize: 14 }}
          >
            {o.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ListboxDemo() {
  return (
    <Demo
      title="Persistent list selection"
      code={`<div className="mc-listbox" role="listbox">
  <ul className="mc-listbox__content">
    {opts.map(o => (
      <li role="option" aria-selected={v === o.id} className={\`mc-listbox__option\${v === o.id ? " is-selected" : ""}\`}>{o.label}</li>
    ))}
  </ul>
</div>`}
    >
      <ListboxExample />
    </Demo>
  );
}
