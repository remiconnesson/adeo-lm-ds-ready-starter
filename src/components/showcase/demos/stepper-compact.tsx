"use client";
import { Demo } from "../Demo";

export default function StepperCompactDemo() {
  return (
    <Demo
      title="Step 2 of 4"
      code={`<div className="mc-stepper-compact" role="status">
  <span className="mc-stepper-compact__current">Step 2 of 4</span>
  <span className="mc-stepper-compact__label">Shipping</span>
</div>`}
    >
      <div className="mc-stepper-compact" role="status" style={{ display: "inline-flex", gap: 12, alignItems: "center", padding: "6px 12px", border: "1px solid #e4e4e4", borderRadius: 999 }}>
        <span className="mc-stepper-compact__current" style={{ fontSize: 12, color: "#46a610", fontWeight: 600 }}>Step 2 of 4</span>
        <span style={{ width: 1, height: 14, background: "#e4e4e4" }} />
        <span className="mc-stepper-compact__label" style={{ fontSize: 13 }}>Shipping</span>
      </div>
    </Demo>
  );
}
