"use client";
import { Demo } from "../Demo";

export default function StepperStackedDemo() {
  const steps = [
    { label: "Account", body: "Set up your account details." },
    { label: "Shipping", body: "Where should we ship your order?" },
    { label: "Payment", body: "Add a payment method." },
  ];
  const current = 1;

  return (
    <Demo
      title="Vertical with descriptions"
      code={`<ol className="mc-stepper-stacked__container">
  {steps.map((s, i) => (
    <li className={\`mc-stepper-stacked__item\${s.body ? " has-additional" : ""}\`}>
      <div className="mc-stepper-stacked__indicator">
        <span className={\`mc-stepper-stacked__circle\${i === current ? " is-current" : ""}\`}>{i + 1}</span>
      </div>
      <div className="mc-stepper-stacked__content">
        <span className={\`mc-stepper-stacked__label\${i === current ? " is-current" : ""}\`}>{s.label}</span>
        <span className="mc-stepper-stacked__additional">{s.body}</span>
      </div>
    </li>
  ))}
</ol>`}
    >
      <ol className="mc-stepper-stacked__container" style={{ width: "100%" }}>
        {steps.map((s, i) => (
          <li
            key={s.label}
            className={`mc-stepper-stacked__item${s.body ? " has-additional" : ""}`}
          >
            <div className="mc-stepper-stacked__indicator">
              <span
                className={`mc-stepper-stacked__circle${i === current ? " is-current" : ""}`}
              >
                {i + 1}
              </span>
            </div>
            <div className="mc-stepper-stacked__content">
              <span
                className={`mc-stepper-stacked__label${i === current ? " is-current" : ""}`}
              >
                {s.label}
              </span>
              <span className="mc-stepper-stacked__additional">{s.body}</span>
            </div>
          </li>
        ))}
      </ol>
    </Demo>
  );
}
