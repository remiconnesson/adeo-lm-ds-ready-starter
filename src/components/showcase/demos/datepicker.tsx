"use client";
import { Demo } from "../Demo";

export default function DatepickerDemo() {
  return (
    <Demo
      title="Native date input"
      description="Mozaic styles the native <input type='date'>. For richer pickers, pair with your preferred calendar library."
      code={`<input type="date" className="mc-text-input mc-datepicker" />`}
    >
      <input type="date" className="mc-text-input mc-datepicker" />
    </Demo>
  );
}
