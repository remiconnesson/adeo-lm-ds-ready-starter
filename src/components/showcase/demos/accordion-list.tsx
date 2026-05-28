"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function AccordionExample() {
  const [open, setOpen] = useState<string | null>("shipping");
  const items = [
    { id: "shipping", title: "Shipping", body: "We ship to Europe in 2–5 business days." },
    { id: "returns", title: "Returns", body: "Return any item within 30 days for a full refund." },
    { id: "warranty", title: "Warranty", body: "All products carry a minimum two-year warranty." },
  ];
  return (
    <ul className="mc-accordion" style={{ width: "100%", listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((i) => (
        <li key={i.id} className={`mc-accordion__item${open === i.id ? " is-open" : ""}`} style={{ borderBottom: "1px solid #e4e4e4" }}>
          <button
            type="button"
            className="mc-accordion__header"
            aria-expanded={open === i.id}
            onClick={() => setOpen((cur) => (cur === i.id ? null : i.id))}
            style={{ width: "100%", textAlign: "left", padding: "12px 4px", background: "transparent", border: 0, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600 }}
          >
            <span>{i.title}</span>
            <span style={{ transition: "transform .15s", transform: open === i.id ? "rotate(180deg)" : "none" }}>⌄</span>
          </button>
          {open === i.id && <div className="mc-accordion__body" style={{ padding: "0 4px 12px", color: "#6e6e6e", fontSize: 14 }}>{i.body}</div>}
        </li>
      ))}
    </ul>
  );
}

export default function AccordionListDemo() {
  return (
    <Demo
      title="One open at a time"
      code={`<ul className="mc-accordion">
  {items.map(i => (
    <li className={\`mc-accordion__item\${open === i.id ? " is-open" : ""}\`}>
      <button className="mc-accordion__header" onClick={() => toggle(i.id)}>
        {i.title}
      </button>
      {open === i.id && <div className="mc-accordion__body">{i.body}</div>}
    </li>
  ))}
</ul>`}
    >
      <AccordionExample />
    </Demo>
  );
}
