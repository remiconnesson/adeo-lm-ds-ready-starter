"use client";
import { useRef } from "react";
import { Demo } from "../Demo";

function PincodeExample() {
  const refs = [useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null), useRef<HTMLInputElement | null>(null)];
  return (
    <div className="mc-pincode-input" style={{ display: "flex", gap: 8 }}>
      {refs.map((r, i) => (
        <input
          key={i}
          ref={r}
          className="mc-text-input mc-pincode-input__digit"
          maxLength={1}
          inputMode="numeric"
          style={{ width: 44, textAlign: "center" }}
          onChange={(e) => {
            if (e.target.value && i < refs.length - 1) refs[i + 1].current?.focus();
          }}
        />
      ))}
    </div>
  );
}

export default function PincodeInputDemo() {
  return (
    <Demo
      title="4-digit code"
      code={`<div className="mc-pincode-input">
  {[0,1,2,3].map(i => <input key={i} className="mc-text-input mc-pincode-input__digit" maxLength={1} />)}
</div>`}
    >
      <PincodeExample />
    </Demo>
  );
}
