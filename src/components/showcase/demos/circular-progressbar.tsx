"use client";
import type { CSSProperties } from "react";
import { Demo } from "../Demo";

export default function CircularProgressbarDemo() {
  const value = 60;
  return (
    <Demo
      title="Determinate"
      code={`<div className="mc-circular-progressbar" role="progressbar"
  aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}
  style={{ "--progress-value": 60 } as React.CSSProperties}
>
  <svg className="mc-circular-progressbar__line" viewBox="0 0 144 144">
    <circle className="mc-circular-progressbar__track" cx="72" cy="72" r="46" />
    <circle className="mc-circular-progressbar__indicator" cx="72" cy="72" r="46" />
  </svg>
  <div className="mc-circular-progressbar__percentage">
    <span className="mc-circular-progressbar__value">60</span>
    <span className="mc-circular-progressbar__unit">%</span>
  </div>
</div>`}
    >
      <div
        className="mc-circular-progressbar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ ["--progress-value" as string]: value } as CSSProperties}
      >
        <svg className="mc-circular-progressbar__line" viewBox="0 0 144 144">
          <circle className="mc-circular-progressbar__track" cx="72" cy="72" r="46" />
          <circle className="mc-circular-progressbar__indicator" cx="72" cy="72" r="46" />
        </svg>
        <div className="mc-circular-progressbar__percentage">
          <span className="mc-circular-progressbar__value">{value}</span>
          <span className="mc-circular-progressbar__unit">%</span>
        </div>
      </div>
    </Demo>
  );
}
