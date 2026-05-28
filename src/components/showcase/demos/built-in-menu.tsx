"use client";
import { Demo } from "../Demo";

const items = [
  { label: "Home", selected: true },
  { label: "Catalog" },
  { label: "Services" },
  { label: "Inspiration" },
  { label: "Stores" },
];

export default function BuiltInMenuDemo() {
  return (
    <Demo
      title="Vertical menu"
      description="The Built-in menu is a 240px-wide vertical list used for navigation surfaces."
      code={`<nav className="mc-built-in-menu mc-built-in-menu--outlined" aria-label="Sections">
  <ul className="mc-built-in-menu__list">
    <li className="mc-built-in-menu__item mc-built-in-menu__item--selected">
      <a href="#" className="mc-built-in-menu__link">
        <span className="mc-built-in-menu__label">Home</span>
      </a>
    </li>
    <li className="mc-built-in-menu__item">
      <a href="#" className="mc-built-in-menu__link">
        <span className="mc-built-in-menu__label">Catalog</span>
      </a>
    </li>
  </ul>
</nav>`}
    >
      <nav className="mc-built-in-menu mc-built-in-menu--outlined" aria-label="Sections">
        <ul className="mc-built-in-menu__list">
          {items.map((item) => (
            <li
              key={item.label}
              className={`mc-built-in-menu__item${item.selected ? " mc-built-in-menu__item--selected" : ""}`}
            >
              <a href="#" className="mc-built-in-menu__link">
                <span className="mc-built-in-menu__label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Demo>
  );
}
