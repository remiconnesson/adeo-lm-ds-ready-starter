"use client";
import { Demo } from "../Demo";

export default function LinkGroupDemo() {
  return (
    <Demo
      title="Vertical group"
      code={`<ul className="mc-link-group">
  <li><a href="#" className="mc-link">First link</a></li>
  <li><a href="#" className="mc-link">Second link</a></li>
  <li><a href="#" className="mc-link">Third link</a></li>
</ul>`}
    >
      <ul className="mc-link-group" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li><a href="#" className="mc-link">First link</a></li>
        <li><a href="#" className="mc-link">Second link</a></li>
        <li><a href="#" className="mc-link">Third link</a></li>
      </ul>
    </Demo>
  );
}
