"use client";
import { Demo } from "../Demo";

export default function ActionListDemo() {
  return (
    <Demo
      title="Menu actions"
      code={`<ul className="mc-action-list">
  <li><button className="mc-action-list__item">Edit</button></li>
  <li><button className="mc-action-list__item">Duplicate</button></li>
  <li><button className="mc-action-list__item mc-action-list__item--danger">Delete</button></li>
</ul>`}
    >
      <ul className="mc-action-list" style={{ listStyle: "none", padding: 4, margin: 0, width: 200, border: "1px solid #e4e4e4", borderRadius: 8, background: "#fff" }}>
        {[
          { label: "Edit" },
          { label: "Duplicate" },
          { label: "Archive" },
          { label: "Delete", danger: true },
        ].map((a) => (
          <li key={a.label}>
            <button type="button" className={`mc-action-list__item${a.danger ? " mc-action-list__item--danger" : ""}`} style={{ width: "100%", textAlign: "left", padding: "8px 10px", background: "transparent", border: 0, borderRadius: 6, cursor: "pointer", color: a.danger ? "#d62b1f" : "#1c1c1c", fontSize: 14 }}>
              {a.label}
            </button>
          </li>
        ))}
      </ul>
    </Demo>
  );
}
