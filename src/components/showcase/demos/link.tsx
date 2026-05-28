"use client";
import { Demo } from "../Demo";

export default function LinkDemo() {
  return (
    <>
      <Demo
        title="Default"
        code={`<a href="#" className="mc-link">Read the documentation</a>`}
      >
        <a href="#" className="mc-link">Read the documentation</a>
      </Demo>
      <Demo
        title="Standalone"
        description="Use the standalone modifier when the link is not embedded in body text."
        code={`<a href="#" className="mc-link mc-link--standalone">Standalone link</a>`}
      >
        <a href="#" className="mc-link mc-link--standalone">Standalone link</a>
      </Demo>
    </>
  );
}
