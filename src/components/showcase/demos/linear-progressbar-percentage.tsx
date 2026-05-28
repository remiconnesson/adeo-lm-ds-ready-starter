"use client";
import type { CSSProperties } from "react";
import { Demo } from "../Demo";

export default function LinearProgressbarPercentageDemo() {
  const value = 40;
  return (
    <Demo
      title="Determinate"
      code={`<div className="mc-linear-progressbar-percentage" role="progressbar"
  aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}
  style={{ "--progress-value": 40 } as React.CSSProperties}
>
  <div className="mc-linear-progressbar-percentage__indicator">
    <div className="mc-linear-progressbar-percentage__label">
      <span className="mc-linear-progressbar-percentage__value">40</span>
      <span className="mc-linear-progressbar-percentage__unit">%</span>
    </div>
  </div>
</div>`}
    >
      <div
        className="mc-linear-progressbar-percentage"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ ["--progress-value" as string]: value, width: 320 } as CSSProperties}
      >
        <div className="mc-linear-progressbar-percentage__indicator">
          <div className="mc-linear-progressbar-percentage__label">
            <span className="mc-linear-progressbar-percentage__value">{value}</span>
            <span className="mc-linear-progressbar-percentage__unit">%</span>
          </div>
        </div>
      </div>
    </Demo>
  );
}
