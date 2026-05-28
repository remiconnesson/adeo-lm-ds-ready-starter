"use client";
import { Demo } from "../Demo";

function Spinner({ size = "m" }: { size?: "s" | "m" | "l" }) {
  const cls = `mc-loader${size !== "m" ? ` mc-loader--${size}` : ""}`;
  const dims = size === "s" ? { viewBox: "0 0 24 24", r: 6 } : size === "l" ? { viewBox: "0 0 64 64", r: 19 } : { viewBox: "0 0 32 32", r: 9 };
  return (
    <div className={cls} role="status" aria-label="Loading">
      <span className="mc-loader__spinner">
        <svg className="mc-loader__icon" xmlns="http://www.w3.org/2000/svg" viewBox={dims.viewBox}>
          <circle className="mc-loader__path" cx="50%" cy="50%" r={dims.r} />
        </svg>
      </span>
    </div>
  );
}

export default function LoaderDemo() {
  return (
    <>
      <Demo
        title="Default"
        code={`<div className="mc-loader" role="status" aria-label="Loading">
  <span className="mc-loader__spinner">
    <svg className="mc-loader__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <circle className="mc-loader__path" cx="50%" cy="50%" r="9" />
    </svg>
  </span>
</div>`}
      >
        <Spinner />
      </Demo>
      <Demo
        title="Sizes"
        code={`<div className="mc-loader mc-loader--s"><span className="mc-loader__spinner"><svg className="mc-loader__icon" viewBox="0 0 24 24"><circle className="mc-loader__path" cx="50%" cy="50%" r="6"/></svg></span></div>
<div className="mc-loader"><span className="mc-loader__spinner"><svg className="mc-loader__icon" viewBox="0 0 32 32"><circle className="mc-loader__path" cx="50%" cy="50%" r="9"/></svg></span></div>
<div className="mc-loader mc-loader--l"><span className="mc-loader__spinner"><svg className="mc-loader__icon" viewBox="0 0 64 64"><circle className="mc-loader__path" cx="50%" cy="50%" r="19"/></svg></span></div>`}
      >
        <Spinner size="s" />
        <Spinner size="m" />
        <Spinner size="l" />
      </Demo>
    </>
  );
}
