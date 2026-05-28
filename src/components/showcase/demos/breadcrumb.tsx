"use client";
import { Demo } from "../Demo";

export default function BreadcrumbDemo() {
  return (
    <Demo
      title="Default"
      code={`<nav className="mc-breadcrumb" aria-label="Breadcrumb">
  <ol className="mc-breadcrumb__list">
    <li className="mc-breadcrumb__item"><a className="mc-link" href="#">Home</a></li>
    <li className="mc-breadcrumb__item"><a className="mc-link" href="#">Garden</a></li>
    <li className="mc-breadcrumb__item" aria-current="page">Outdoor furniture</li>
  </ol>
</nav>`}
    >
      <nav className="mc-breadcrumb" aria-label="Breadcrumb">
        <ol className="mc-breadcrumb__list" style={{ listStyle: "none", display: "flex", gap: 8, padding: 0, margin: 0, fontSize: 13 }}>
          <li className="mc-breadcrumb__item"><a className="mc-link" href="#">Home</a></li>
          <li aria-hidden style={{ color: "#9a9a9a" }}>/</li>
          <li className="mc-breadcrumb__item"><a className="mc-link" href="#">Garden</a></li>
          <li aria-hidden style={{ color: "#9a9a9a" }}>/</li>
          <li className="mc-breadcrumb__item" aria-current="page" style={{ color: "#6e6e6e" }}>Outdoor furniture</li>
        </ol>
      </nav>
    </Demo>
  );
}
