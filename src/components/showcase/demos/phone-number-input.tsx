"use client";
import { Demo } from "../Demo";

export default function PhoneNumberInputDemo() {
  return (
    <Demo
      title="Country prefix + number"
      code={`<div className="mc-phone-number-input">
  <select className="mc-phone-number-input__prefix">
    <option>+33</option>
    <option>+44</option>
    <option>+1</option>
  </select>
  <input className="mc-text-input" type="tel" placeholder="6 12 34 56 78" />
</div>`}
    >
      <div className="mc-phone-number-input" style={{ display: "flex", gap: 8 }}>
        <select className="mc-select mc-phone-number-input__prefix" style={{ width: 90 }}>
          <option>+33</option>
          <option>+44</option>
          <option>+1</option>
        </select>
        <input className="mc-text-input" type="tel" placeholder="6 12 34 56 78" style={{ width: 200 }} />
      </div>
    </Demo>
  );
}
