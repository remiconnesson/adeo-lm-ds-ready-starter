"use client";

import { Demo } from "../Demo";

export default function ButtonDemo() {
  return (
    <>
      <Demo
        title="Default"
        description="Apply mc-button and wrap the label in a span.mc-button__label for correct baseline alignment."
        code={`<button type="button" className="mc-button">
  <span className="mc-button__label">Label</span>
</button>`}
      >
        <button type="button" className="mc-button">
          <span className="mc-button__label">Label</span>
        </button>
      </Demo>

      <Demo
        title="Color themes"
        description="accent, danger, and inverse are the available color themes. Without a modifier the button uses the primary tokens."
        code={`<button type="button" className="mc-button">
  <span className="mc-button__label">Primary</span>
</button>
<button type="button" className="mc-button mc-button--accent">
  <span className="mc-button__label">Accent</span>
</button>
<button type="button" className="mc-button mc-button--danger">
  <span className="mc-button__label">Danger</span>
</button>`}
      >
        <button type="button" className="mc-button">
          <span className="mc-button__label">Primary</span>
        </button>
        <button type="button" className="mc-button mc-button--accent">
          <span className="mc-button__label">Accent</span>
        </button>
        <button type="button" className="mc-button mc-button--danger">
          <span className="mc-button__label">Danger</span>
        </button>
      </Demo>

      <Demo
        title="Style variations"
        description="Stack --outlined or --ghost on top of a color theme."
        code={`<button type="button" className="mc-button mc-button--outlined">
  <span className="mc-button__label">Outlined</span>
</button>
<button type="button" className="mc-button mc-button--ghost">
  <span className="mc-button__label">Ghost</span>
</button>
<button type="button" className="mc-button mc-button--danger mc-button--outlined">
  <span className="mc-button__label">Danger outlined</span>
</button>`}
      >
        <button type="button" className="mc-button mc-button--outlined">
          <span className="mc-button__label">Outlined</span>
        </button>
        <button type="button" className="mc-button mc-button--ghost">
          <span className="mc-button__label">Ghost</span>
        </button>
        <button
          type="button"
          className="mc-button mc-button--danger mc-button--outlined"
        >
          <span className="mc-button__label">Danger outlined</span>
        </button>
      </Demo>

      <Demo
        title="Sizes"
        description="mc-button--s and mc-button--l. Medium is the default."
        code={`<button type="button" className="mc-button mc-button--s">
  <span className="mc-button__label">Small</span>
</button>
<button type="button" className="mc-button">
  <span className="mc-button__label">Medium</span>
</button>
<button type="button" className="mc-button mc-button--l">
  <span className="mc-button__label">Large</span>
</button>`}
      >
        <button type="button" className="mc-button mc-button--s">
          <span className="mc-button__label">Small</span>
        </button>
        <button type="button" className="mc-button">
          <span className="mc-button__label">Medium</span>
        </button>
        <button type="button" className="mc-button mc-button--l">
          <span className="mc-button__label">Large</span>
        </button>
      </Demo>

      <Demo
        title="Disabled"
        code={`<button type="button" className="mc-button" disabled>
  <span className="mc-button__label">Disabled</span>
</button>`}
      >
        <button type="button" className="mc-button" disabled>
          <span className="mc-button__label">Disabled</span>
        </button>
      </Demo>
    </>
  );
}
