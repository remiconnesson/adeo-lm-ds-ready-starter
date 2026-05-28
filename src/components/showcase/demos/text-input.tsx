"use client";
import { Demo } from "../Demo";

export default function TextInputDemo() {
  return (
    <>
      <Demo
        title="Default"
        code={`<input type="text" className="mc-text-input" placeholder="Type something" />`}
      >
        <input type="text" className="mc-text-input" placeholder="Type something" />
      </Demo>
      <Demo
        title="Disabled"
        code={`<input type="text" className="mc-text-input" defaultValue="Read only" disabled />`}
      >
        <input type="text" className="mc-text-input" defaultValue="Read only" disabled />
      </Demo>
      <Demo
        title="Invalid"
        code={`<input type="text" className="mc-text-input mc-text-input--invalid" defaultValue="oops" />`}
      >
        <input type="text" className="mc-text-input mc-text-input--invalid" defaultValue="oops" />
      </Demo>
    </>
  );
}
