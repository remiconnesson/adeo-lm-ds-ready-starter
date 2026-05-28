"use client";
import { useState } from "react";
import { Demo } from "../Demo";

export default function CheckboxDemo() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  return (
    <>
      <Demo
        title="Default"
        code={`<label className="mc-checkbox">
  <input type="checkbox" className="mc-checkbox__input" />
  <span className="mc-checkbox__label">Accept the terms</span>
</label>`}
      >
        <label className="mc-checkbox">
          <input type="checkbox" className="mc-checkbox__input" checked={a} onChange={(e) => setA(e.target.checked)} />
          <span className="mc-checkbox__label">Accept the terms</span>
        </label>
      </Demo>
      <Demo
        title="States"
        code={`<label className="mc-checkbox">
  <input type="checkbox" className="mc-checkbox__input" defaultChecked />
  <span className="mc-checkbox__label">Checked</span>
</label>
<label className="mc-checkbox">
  <input type="checkbox" className="mc-checkbox__input" disabled />
  <span className="mc-checkbox__label">Disabled</span>
</label>`}
      >
        <label className="mc-checkbox">
          <input type="checkbox" className="mc-checkbox__input" checked={b} onChange={(e) => setB(e.target.checked)} />
          <span className="mc-checkbox__label">Checked</span>
        </label>
        <label className="mc-checkbox">
          <input type="checkbox" className="mc-checkbox__input" disabled />
          <span className="mc-checkbox__label">Disabled</span>
        </label>
      </Demo>
    </>
  );
}
