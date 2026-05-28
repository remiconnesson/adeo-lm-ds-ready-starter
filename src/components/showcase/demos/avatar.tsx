"use client";
import { Demo } from "../Demo";

export default function AvatarDemo() {
  return (
    <>
      <Demo
        title="With initials"
        code={`<span className="mc-avatar">RC</span>`}
      >
        <span className="mc-avatar">RC</span>
      </Demo>
      <Demo
        title="Sizes"
        code={`<span className="mc-avatar">SM</span>
<span className="mc-avatar mc-avatar--m">MD</span>
<span className="mc-avatar mc-avatar--l">LG</span>`}
      >
        <span className="mc-avatar">SM</span>
        <span className="mc-avatar mc-avatar--m">MD</span>
        <span className="mc-avatar mc-avatar--l">LG</span>
      </Demo>
    </>
  );
}
