"use client";
import { Demo } from "../Demo";

export default function LinearProgressbarBufferDemo() {
  return (
    <Demo
      title="With buffer"
      code={`<div className="mc-linear-progressbar-buffer">
  <div className="mc-linear-progressbar-buffer__buffer" style={{ width: "60%" }} />
  <div className="mc-linear-progressbar-buffer__bar" style={{ width: "30%" }} />
</div>`}
    >
      <div className="mc-linear-progressbar-buffer" style={{ width: 240 }}>
        <div className="mc-linear-progressbar-buffer__buffer" style={{ width: "60%" }} />
        <div className="mc-linear-progressbar-buffer__bar" style={{ width: "30%" }} />
      </div>
    </Demo>
  );
}
