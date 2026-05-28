"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function NavigationIndicatorExample() {
  const [active, setActive] = useState(1);
  const count = 5;
  return (
    <div className="mc-navigation-indicator" role="tablist" style={{ display: "inline-flex", gap: 6 }}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={active === i}
          onClick={() => setActive(i)}
          className={`mc-navigation-indicator__dot${active === i ? " is-active" : ""}`}
          style={{ width: 10, height: 10, borderRadius: "50%", border: 0, background: active === i ? "#46a610" : "#d4d4d4", cursor: "pointer" }}
        />
      ))}
    </div>
  );
}

export default function NavigationIndicatorDemo() {
  return (
    <Demo
      title="Position dots"
      code={`<div className="mc-navigation-indicator">
  {dots.map(i => (
    <button className={\`mc-navigation-indicator__dot\${active === i ? " is-active" : ""}\`} />
  ))}
</div>`}
    >
      <NavigationIndicatorExample />
    </Demo>
  );
}
