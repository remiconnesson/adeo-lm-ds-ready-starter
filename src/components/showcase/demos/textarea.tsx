"use client";
import { Demo } from "../Demo";

export default function TextareaDemo() {
  return (
    <Demo
      title="Default"
      code={`<textarea className="mc-textarea" placeholder="Tell us more…" rows={4} />`}
    >
      <textarea className="mc-textarea" placeholder="Tell us more…" rows={4} style={{ width: 320 }} />
    </Demo>
  );
}
