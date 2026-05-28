"use client";
import { Demo } from "../Demo";

export default function KpiItemDemo() {
  const items = [
    { label: "Revenue", value: "€1,284", trend: "+12%", positive: true },
    { label: "Orders", value: "318", trend: "+4%", positive: true },
    { label: "Refunds", value: "12", trend: "−2%", positive: false },
  ];
  return (
    <Demo
      title="Key performance indicators"
      code={`<div className="mc-kpi">
  <span className="mc-kpi__label">Revenue</span>
  <span className="mc-kpi__value">€1,284</span>
  <span className="mc-kpi__trend mc-kpi__trend--up">+12%</span>
</div>`}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(140px, 1fr))", gap: 12, width: "100%" }}>
        {items.map((i) => (
          <div key={i.label} className="mc-kpi" style={{ border: "1px solid #e4e4e4", borderRadius: 10, padding: 12 }}>
            <span className="mc-kpi__label" style={{ display: "block", fontSize: 12, color: "#6e6e6e", textTransform: "uppercase", letterSpacing: "0.05em" }}>{i.label}</span>
            <span className="mc-kpi__value" style={{ display: "block", fontSize: 24, fontWeight: 600, marginTop: 4 }}>{i.value}</span>
            <span className={`mc-kpi__trend mc-kpi__trend--${i.positive ? "up" : "down"}`} style={{ fontSize: 12, color: i.positive ? "#46a610" : "#d62b1f" }}>{i.trend}</span>
          </div>
        ))}
      </div>
    </Demo>
  );
}
