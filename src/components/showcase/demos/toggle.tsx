"use client";
import { useState } from "react";
import { Demo } from "../Demo";

export default function ToggleDemo() {
  const [on, setOn] = useState(true);
  return (
    <Demo
      title="On / off"
      code={`<label className="mc-toggle">
  <input type="checkbox" className="mc-toggle__input" />
  <span className="mc-toggle__container">
    <span className="mc-toggle__label">Enable notifications</span>
  </span>
</label>`}
    >
      <label className="mc-toggle">
        <input
          type="checkbox"
          className="mc-toggle__input"
          checked={on}
          onChange={(e) => setOn(e.target.checked)}
        />
        <span className="mc-toggle__container">
          <span className="mc-toggle__label">Enable notifications</span>
        </span>
      </label>
    </Demo>
  );
}
