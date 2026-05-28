"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function TabsExample() {
  const [tab, setTab] = useState("overview");
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "specs", label: "Specs" },
    { id: "reviews", label: "Reviews" },
  ];
  return (
    <div className="mc-tabs" style={{ width: "100%" }}>
      <div className="mc-tabs__list" role="tablist" style={{ display: "flex", gap: 4, borderBottom: "1px solid #e4e4e4" }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={`mc-tabs__tab${tab === t.id ? " is-active" : ""}`}
            onClick={() => setTab(t.id)}
            style={{ border: 0, background: "transparent", padding: "10px 14px", borderBottom: `2px solid ${tab === t.id ? "#46a610" : "transparent"}`, fontWeight: tab === t.id ? 600 : 400, cursor: "pointer", color: tab === t.id ? "#46a610" : "#1c1c1c" }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mc-tabs__panel" role="tabpanel" style={{ padding: "16px 4px" }}>
        {tab === "overview" && <p style={{ margin: 0 }}>Product overview and key benefits.</p>}
        {tab === "specs" && <p style={{ margin: 0 }}>Technical specifications.</p>}
        {tab === "reviews" && <p style={{ margin: 0 }}>What customers are saying.</p>}
      </div>
    </div>
  );
}

export default function TabsDemo() {
  return (
    <Demo
      title="Tab switching"
      code={`<div className="mc-tabs">
  <div className="mc-tabs__list" role="tablist">
    {tabs.map(t => (
      <button role="tab" aria-selected={tab === t.id} className={\`mc-tabs__tab\${tab === t.id ? " is-active" : ""}\`} onClick={() => setTab(t.id)}>
        {t.label}
      </button>
    ))}
  </div>
  <div className="mc-tabs__panel" role="tabpanel">…</div>
</div>`}
    >
      <TabsExample />
    </Demo>
  );
}
