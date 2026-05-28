"use client";
import { Demo } from "../Demo";

export default function FieldDemo() {
  return (
    <>
      <Demo
        title="With helper text"
        code={`<div className="mc-field">
  <label className="mc-field__label" htmlFor="email">Email</label>
  <input id="email" type="email" className="mc-text-input" />
  <p className="mc-field__helper">We will never share your email.</p>
</div>`}
      >
        <div className="mc-field" style={{ width: 320 }}>
          <label className="mc-field__label" htmlFor="email">Email</label>
          <input id="email" type="email" className="mc-text-input" />
          <p className="mc-field__helper">We will never share your email.</p>
        </div>
      </Demo>
      <Demo
        title="With error"
        code={`<div className="mc-field mc-field--invalid">
  <label className="mc-field__label" htmlFor="pwd">Password</label>
  <input id="pwd" type="password" className="mc-text-input mc-text-input--invalid" />
  <p className="mc-field__error">Use at least 8 characters.</p>
</div>`}
      >
        <div className="mc-field mc-field--invalid" style={{ width: 320 }}>
          <label className="mc-field__label" htmlFor="pwd">Password</label>
          <input id="pwd" type="password" className="mc-text-input mc-text-input--invalid" />
          <p className="mc-field__error">Use at least 8 characters.</p>
        </div>
      </Demo>
    </>
  );
}
