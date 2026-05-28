"use client";
import { Demo } from "../Demo";

export default function DividerDemo() {
  return (
    <Demo
      title="Horizontal"
      code={`<hr className="mc-divider" />`}
    >
      <div style={{ width: "100%" }}>
        <p style={{ margin: 0 }}>Section A</p>
        <hr className="mc-divider" />
        <p style={{ margin: 0 }}>Section B</p>
      </div>
    </Demo>
  );
}
