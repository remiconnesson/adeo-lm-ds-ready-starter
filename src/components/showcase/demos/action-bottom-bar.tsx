"use client";
import { Demo } from "../Demo";

export default function ActionBottomBarDemo() {
  return (
    <Demo
      title="Anchored actions"
      code={`<div className="mc-action-bottom-bar mc-action-bottom-bar--shadow">
  <div className="mc-action-bottom-bar__right">
    <button className="mc-button mc-button--bordered"><span className="mc-button__label">Cancel</span></button>
    <button className="mc-button"><span className="mc-button__label">Save</span></button>
  </div>
</div>`}
    >
      <div style={{ position: "relative", width: "100%", minHeight: 80 }}>
        <div
          className="mc-action-bottom-bar mc-action-bottom-bar--shadow"
          style={{ position: "absolute", bottom: 0, left: 0 }}
        >
          <div className="mc-action-bottom-bar__right">
            <button type="button" className="mc-button mc-button--bordered">
              <span className="mc-button__label">Cancel</span>
            </button>
            <button type="button" className="mc-button">
              <span className="mc-button__label">Save</span>
            </button>
          </div>
        </div>
      </div>
    </Demo>
  );
}
