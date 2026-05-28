"use client";
import { Demo } from "../Demo";

export default function PageHeaderDemo() {
  return (
    <Demo
      title="With title, description and action"
      code={`<header className="mc-page-header">
  <div className="mc-page-header__content">
    <h1 className="mc-page-header__title">Orders</h1>
    <p className="mc-page-header__description">Manage and track customer orders.</p>
  </div>
  <div className="mc-page-header__actions">
    <button className="mc-button mc-button--accent"><span className="mc-button__label">New order</span></button>
  </div>
</header>`}
    >
      <header className="mc-page-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "16px 0", borderBottom: "1px solid #e4e4e4" }}>
        <div className="mc-page-header__content">
          <h1 className="mc-page-header__title" style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>Orders</h1>
          <p className="mc-page-header__description" style={{ margin: "4px 0 0", color: "#6e6e6e", fontSize: 13 }}>Manage and track customer orders.</p>
        </div>
        <div className="mc-page-header__actions">
          <button type="button" className="mc-button mc-button--accent"><span className="mc-button__label">New order</span></button>
        </div>
      </header>
    </Demo>
  );
}
