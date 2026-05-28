"use client";
import { useState } from "react";
import { Demo } from "../Demo";

export default function PasswordInputDemo() {
  const [shown, setShown] = useState(false);
  return (
    <Demo
      title="With visibility toggle"
      code={`<div className="mc-password-input">
  <input className="mc-text-input" type={shown ? "text" : "password"} />
  <button className="mc-password-input__toggle" onClick={() => setShown(s => !s)}>
    {shown ? "Hide" : "Show"}
  </button>
</div>`}
    >
      <div className="mc-password-input" style={{ position: "relative", width: 280 }}>
        <input
          className="mc-text-input"
          type={shown ? "text" : "password"}
          defaultValue="secret123"
          style={{ paddingRight: 56 }}
        />
        <button
          type="button"
          className="mc-password-input__toggle"
          onClick={() => setShown((s) => !s)}
          style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", border: 0, background: "transparent", color: "#46a610", fontSize: 12, cursor: "pointer" }}
        >
          {shown ? "Hide" : "Show"}
        </button>
      </div>
    </Demo>
  );
}
