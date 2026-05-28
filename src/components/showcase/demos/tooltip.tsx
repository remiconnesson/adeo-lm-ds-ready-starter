"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function TooltipExample() {
  const [show, setShow] = useState(false);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        className="mc-button mc-button--outlined"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        aria-describedby="tt"
      >
        <span className="mc-button__label">Hover or focus me</span>
      </button>
      {show && (
        <span
          id="tt"
          role="tooltip"
          className="mc-tooltip mc-tooltip--top is-open"
          style={{ position: "absolute", bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
        >
          Helpful hint
        </span>
      )}
    </span>
  );
}

export default function TooltipDemo() {
  return (
    <Demo
      title="Hover or focus to reveal"
      code={`<span style={{ position: "relative" }}>
  <button aria-describedby="tt" onMouseEnter={...} onMouseLeave={...}>Trigger</button>
  {show && <span id="tt" role="tooltip" className="mc-tooltip mc-tooltip--top is-open">Helpful hint</span>}
</span>`}
    >
      <TooltipExample />
    </Demo>
  );
}
