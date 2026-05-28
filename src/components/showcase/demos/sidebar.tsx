"use client";
import { Demo } from "../Demo";

export default function SidebarDemo() {
  const items = [
    { label: "Dashboard", active: true },
    { label: "Orders" },
    { label: "Customers" },
    { label: "Products" },
    { label: "Settings" },
  ];
  return (
    <Demo
      title="Vertical nav rail"
      code={`<aside className="mc-sidebar">
  <ul className="mc-sidebar__list">
    {items.map(i => (
      <li><a className={\`mc-sidebar__link\${i.active ? " is-active" : ""}\`}>{i.label}</a></li>
    ))}
  </ul>
</aside>`}
    >
      <aside className="mc-sidebar" style={{ width: 220, border: "1px solid #e4e4e4", borderRadius: 8, padding: 8, background: "#fff" }}>
        <ul className="mc-sidebar__list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((i) => (
            <li key={i.label}>
              <a href="#" className={`mc-sidebar__link${i.active ? " is-active" : ""}`} style={{ display: "block", padding: "8px 10px", borderRadius: 6, fontSize: 14, color: i.active ? "#46a610" : "#1c1c1c", background: i.active ? "rgba(70,166,16,0.12)" : "transparent", textDecoration: "none", fontWeight: i.active ? 600 : 400 }}>
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </Demo>
  );
}
