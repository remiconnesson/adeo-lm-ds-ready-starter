"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function QuantityExample() {
  const [q, setQ] = useState(1);
  return (
    <div className="mc-quantity-selector" style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #e4e4e4", borderRadius: 8, padding: 4 }}>
      <button type="button" className="mc-button mc-button--s mc-button--outlined" onClick={() => setQ((v) => Math.max(0, v - 1))} aria-label="Decrease">
        <span className="mc-button__label">−</span>
      </button>
      <input className="mc-text-input mc-quantity-selector__input" value={q} onChange={(e) => setQ(Math.max(0, Number(e.target.value) || 0))} style={{ width: 56, textAlign: "center" }} />
      <button type="button" className="mc-button mc-button--s mc-button--outlined" onClick={() => setQ((v) => v + 1)} aria-label="Increase">
        <span className="mc-button__label">+</span>
      </button>
    </div>
  );
}

export default function QuantitySelectorDemo() {
  return (
    <Demo
      title="Numeric stepper"
      code={`<div className="mc-quantity-selector">
  <button className="mc-button mc-button--s mc-button--outlined" onClick={dec}>−</button>
  <input className="mc-text-input mc-quantity-selector__input" value={q} />
  <button className="mc-button mc-button--s mc-button--outlined" onClick={inc}>+</button>
</div>`}
    >
      <QuantityExample />
    </Demo>
  );
}
