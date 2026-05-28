"use client";
import { Demo } from "../Demo";

export default function StepperInlineDemo() {
  const steps = ["Cart", "Shipping", "Payment", "Review"];
  const current = 2;
  return (
    <Demo
      title="Horizontal with labels"
      code={`<ol className="mc-stepper-inline">
  {steps.map((s, i) => (
    <li className={\`mc-stepper-inline__item\${i === current ? " is-active" : i < current ? " is-complete" : ""}\`}>
      <span className="mc-stepper-inline__index">{i + 1}</span>
      <span className="mc-stepper-inline__label">{s}</span>
    </li>
  ))}
</ol>`}
    >
      <ol className="mc-stepper-inline" style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: 0, width: "100%" }}>
        {steps.map((s, i) => {
          const state = i === current ? "active" : i < current ? "complete" : "todo";
          return (
            <li key={s} className={`mc-stepper-inline__item is-${state}`} style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, position: "relative" }}>
              <span className="mc-stepper-inline__index" style={{ width: 24, height: 24, borderRadius: "50%", background: state === "todo" ? "#e4e4e4" : "#46a610", color: state === "todo" ? "#6e6e6e" : "#fff", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600 }}>{i + 1}</span>
              <span className="mc-stepper-inline__label" style={{ fontSize: 13, fontWeight: state === "active" ? 600 : 400, color: state === "todo" ? "#6e6e6e" : "#1c1c1c" }}>{s}</span>
              {i < steps.length - 1 && <span style={{ flex: 1, height: 2, background: state === "complete" ? "#46a610" : "#e4e4e4", marginLeft: 8 }} />}
            </li>
          );
        })}
      </ol>
    </Demo>
  );
}
