"use client";
import { Demo } from "../Demo";

export default function StatusDotDemo() {
  return (
    <Demo
      title="Variants"
      code={`<span className="mc-status-dot" />
<span className="mc-status-dot mc-status-dot--success" />
<span className="mc-status-dot mc-status-dot--warning" />
<span className="mc-status-dot mc-status-dot--danger" />`}
    >
      <span className="mc-status-dot" />
      <span className="mc-status-dot mc-status-dot--success" />
      <span className="mc-status-dot mc-status-dot--warning" />
      <span className="mc-status-dot mc-status-dot--danger" />
    </Demo>
  );
}
