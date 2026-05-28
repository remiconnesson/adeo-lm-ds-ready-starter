"use client";
import { Demo } from "../Demo";

export default function StepperBottomBarDemo() {
  return (
    <Demo
      title="Wizard bottom bar"
      code={`<div className="mc-stepper-bottom-bar mc-stepper-bottom-bar--shadow">
  <div className="mc-stepper-bottom-bar__left">Step 2 of 4 · Shipping</div>
  <div className="mc-stepper-bottom-bar__right">
    <button className="mc-button mc-button--s mc-button--bordered"><span className="mc-button__label">Back</span></button>
    <button className="mc-button mc-button--s"><span className="mc-button__label">Next</span></button>
  </div>
</div>`}
    >
      <div style={{ position: "relative", width: "100%", minHeight: 80 }}>
        <div
          className="mc-stepper-bottom-bar mc-stepper-bottom-bar--shadow"
          style={{ position: "absolute", bottom: 0, left: 0 }}
        >
          <div className="mc-stepper-bottom-bar__left">Step 2 of 4 · Shipping</div>
          <div className="mc-stepper-bottom-bar__right">
            <button type="button" className="mc-button mc-button--s mc-button--bordered">
              <span className="mc-button__label">Back</span>
            </button>
            <button type="button" className="mc-button mc-button--s">
              <span className="mc-button__label">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Demo>
  );
}
