"use client";
import { Demo } from "../Demo";

export default function TileDemo() {
  return (
    <Demo
      title="Clickable card"
      code={`<a href="#" className="mc-tile">
  <div className="mc-tile__media" />
  <div className="mc-tile__body">
    <h3 className="mc-tile__title">Outdoor furniture</h3>
    <p className="mc-tile__description">Tables, chairs, parasols and more.</p>
  </div>
</a>`}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(160px, 1fr))", gap: 12, width: "100%" }}>
        {["Outdoor", "Kitchen", "Tools"].map((t) => (
          <a key={t} href="#" className="mc-tile" style={{ display: "block", textDecoration: "none", color: "inherit", border: "1px solid #e4e4e4", borderRadius: 10, overflow: "hidden", background: "#fff" }}>
            <div className="mc-tile__media" style={{ height: 80, background: "linear-gradient(135deg, #efefef, #d8d8d8)" }} />
            <div className="mc-tile__body" style={{ padding: 12 }}>
              <h3 className="mc-tile__title" style={{ margin: 0, fontSize: 14 }}>{t} furniture</h3>
              <p className="mc-tile__description" style={{ margin: "4px 0 0", fontSize: 12, color: "#6e6e6e" }}>Tables, chairs, parasols and more.</p>
            </div>
          </a>
        ))}
      </div>
    </Demo>
  );
}
