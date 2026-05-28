"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function ComboboxExample() {
  const options = ["France", "Germany", "Italy", "Spain", "Portugal", "Belgium"];
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const filtered = options.filter((o) => o.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="mc-combobox" style={{ position: "relative", width: 260 }}>
      <input
        className="mc-text-input mc-combobox__control"
        placeholder="Pick a country"
        value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
      />
      {open && filtered.length > 0 && (
        <ul className="mc-combobox__list" style={{ position: "absolute", inset: "calc(100% + 4px) 0 auto 0", background: "#fff", border: "1px solid #e4e4e4", borderRadius: 8, listStyle: "none", margin: 0, padding: 4, fontSize: 14, zIndex: 4 }}>
          {filtered.map((o) => (
            <li key={o}>
              <button type="button" className="mc-combobox__option" onClick={() => { setQ(o); setOpen(false); }} style={{ width: "100%", textAlign: "left", padding: "6px 10px", background: "transparent", border: 0, borderRadius: 6, cursor: "pointer" }}>
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ComboboxDemo() {
  return (
    <Demo
      title="Text + autocomplete"
      code={`<div className="mc-combobox">
  <input className="mc-text-input mc-combobox__control" />
  {open && (
    <ul className="mc-combobox__list">
      {filtered.map(o => (
        <li><button className="mc-combobox__option" onClick={() => choose(o)}>{o}</button></li>
      ))}
    </ul>
  )}
</div>`}
    >
      <ComboboxExample />
    </Demo>
  );
}
