"use client";
import { Demo } from "../Demo";

function Icon() {
  return (
    <svg
      className="mc-callout__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-6h2Zm0-8h-2V7h2Z"
      />
    </svg>
  );
}

export default function CalloutDemo() {
  return (
    <Demo
      title="Default"
      code={`<aside className="mc-callout">
  <svg className="mc-callout__icon" /* … */ />
  <div className="mc-callout__content">
    <h3 className="mc-callout__title">Heads up</h3>
    <p className="mc-callout__message">This is content worth pulling out of the body flow.</p>
  </div>
</aside>`}
    >
      <aside className="mc-callout" style={{ maxWidth: 480 }}>
        <Icon />
        <div className="mc-callout__content">
          <h3 className="mc-callout__title">Heads up</h3>
          <p className="mc-callout__message">
            This is content worth pulling out of the body flow.
          </p>
        </div>
      </aside>
    </Demo>
  );
}
