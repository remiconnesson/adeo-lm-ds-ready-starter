"use client";
import { Demo } from "../Demo";

export default function FlagDemo() {
  return (
    <Demo
      title="Variants"
      description="Flag is a status-style label used to highlight a state inside a list or card."
      code={`<span className="mc-flag">New</span>
<span className="mc-flag mc-flag--accent">Promo</span>
<span className="mc-flag mc-flag--danger">Out of stock</span>`}
    >
      <span className="mc-flag">New</span>
      <span className="mc-flag mc-flag--accent">Promo</span>
      <span className="mc-flag mc-flag--danger">Out of stock</span>
    </Demo>
  );
}
