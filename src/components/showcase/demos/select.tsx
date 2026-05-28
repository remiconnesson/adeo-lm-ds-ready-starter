"use client";
import { Demo } from "../Demo";

export default function SelectDemo() {
  return (
    <Demo
      title="Default"
      code={`<select className="mc-select">
  <option>Choose a country</option>
  <option>France</option>
  <option>Italy</option>
</select>`}
    >
      <select className="mc-select" defaultValue="">
        <option value="" disabled>Choose a country</option>
        <option>France</option>
        <option>Italy</option>
        <option>Spain</option>
      </select>
    </Demo>
  );
}
