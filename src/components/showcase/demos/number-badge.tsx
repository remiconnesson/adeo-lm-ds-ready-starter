"use client";
import { Demo } from "../Demo";

export default function NumberBadgeDemo() {
  return (
    <>
      <Demo
        title="Default"
        code={`<span className="mc-number-badge">3</span>`}
      >
        <span className="mc-number-badge">3</span>
      </Demo>
      <Demo
        title="Variants"
        code={`<span className="mc-number-badge mc-number-badge--success">12</span>
<span className="mc-number-badge mc-number-badge--danger">99+</span>`}
      >
        <span className="mc-number-badge mc-number-badge--success">12</span>
        <span className="mc-number-badge mc-number-badge--danger">99+</span>
      </Demo>
    </>
  );
}
