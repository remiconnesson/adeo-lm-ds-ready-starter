"use client";
import { Demo } from "../Demo";

export default function TagDemo() {
  return (
    <>
      <Demo
        title="Default"
        code={`<span className="mc-tag">
  <span className="mc-tag__label">Label</span>
</span>`}
      >
        <span className="mc-tag">
          <span className="mc-tag__label">Label</span>
        </span>
      </Demo>
      <Demo
        title="Removable"
        code={`<span className="mc-tag mc-tag--removable">
  <span className="mc-tag__label">Removable</span>
  <button type="button" className="mc-tag__close" aria-label="Remove">×</button>
</span>`}
      >
        <span className="mc-tag mc-tag--removable">
          <span className="mc-tag__label">Removable</span>
          <button type="button" className="mc-tag__close" aria-label="Remove">×</button>
        </span>
      </Demo>
    </>
  );
}
