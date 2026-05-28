"use client";
import { useState } from "react";
import { Demo } from "../Demo";

export default function RadioDemo() {
  const [v, setV] = useState("a");
  return (
    <Demo
      title="Group"
      code={`<label className="mc-radio">
  <input type="radio" name="opt" className="mc-radio__input" value="a" />
  <span className="mc-radio__label">Option A</span>
</label>`}
    >
      <div style={{ display: "grid", gap: 8 }}>
        {["a", "b", "c"].map((id) => (
          <label key={id} className="mc-radio">
            <input
              type="radio"
              name="opt"
              className="mc-radio__input"
              value={id}
              checked={v === id}
              onChange={() => setV(id)}
            />
            <span className="mc-radio__label">Option {id.toUpperCase()}</span>
          </label>
        ))}
      </div>
    </Demo>
  );
}
