"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

type Tab = "overview" | "orders" | "team";

export default function DashboardExample() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <header style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--color-text-secondary, #6e6e6e)",
            }}
          >
            Region · North
          </span>
          <h2 style={{ margin: "6px 0 4px", fontSize: 24, fontWeight: 600 }}>Store performance</h2>
          <p style={{ margin: 0, color: "var(--color-text-secondary, #6e6e6e)", fontSize: 14 }}>
            Last 30 days, compared to the previous period.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" className="mc-button mc-button--s mc-button--bordered">
            <span className="mc-button__label">Export CSV</span>
          </button>
          <button type="button" className="mc-button mc-button--s">
            <span className="mc-button__label">New report</span>
          </button>
        </div>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12,
        }}
      >
        <Kpi label="Revenue" value="€482k" delta={+12.4} positive />
        <Kpi label="Orders" value="3 184" delta={+4.8} positive />
        <Kpi label="Avg. basket" value="€151.40" delta={-2.1} positive={false} />
        <Kpi label="Returns" value="78" delta={-18.0} positive />
      </section>

      <section
        style={{
          border: "1px solid var(--color-border-primary, #e4e4e4)",
          borderRadius: 12,
          padding: 20,
          background: "var(--color-background-primary, #fff)",
          display: "grid",
          gap: 18,
        }}
      >
        <header style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Targets</h3>
          <span style={{ fontSize: 13, color: "var(--color-text-secondary, #6e6e6e)" }}>April 2026</span>
        </header>
        <Target label="Revenue target" value={68} caption="€482k of €710k" />
        <Target label="New customers" value={92} caption="2 480 of 2 700" />
        <Target label="Stock turnover" value={41} caption="On track" />
      </section>

      <Tabs current={tab} onChange={setTab} />

      {tab === "overview" && <OverviewTab />}
      {tab === "orders" && <OrdersTab />}
      {tab === "team" && <TeamTab />}
    </div>
  );
}

function Kpi({ label, value, delta, positive }: { label: string; value: string; delta: number; positive: boolean }) {
  const color = positive ? "var(--color-text-accent, #117f03)" : "var(--color-status-text-error, #c61112)";
  return (
    <div
      style={{
        padding: 16,
        border: "1px solid var(--color-border-primary, #e4e4e4)",
        borderRadius: 12,
        background: "var(--color-background-primary, #fff)",
        display: "grid",
        gap: 6,
      }}
    >
      <span style={{ fontSize: 12, color: "var(--color-text-secondary, #6e6e6e)" }}>{label}</span>
      <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em" }}>{value}</span>
      <span style={{ fontSize: 12, fontWeight: 600, color }}>
        {delta > 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}%
      </span>
    </div>
  );
}

function Target({ label, value, caption }: { label: string; value: number; caption: string }) {
  return (
    <div style={{ display: "grid", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
        <span>{label}</span>
        <span style={{ color: "var(--color-text-secondary, #6e6e6e)" }}>{caption}</span>
      </div>
      <div
        className="mc-linear-progressbar-percentage"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ ["--progress-value" as string]: value, width: "100%" } as CSSProperties}
      >
        <div className="mc-linear-progressbar-percentage__indicator">
          <div className="mc-linear-progressbar-percentage__label">
            <span className="mc-linear-progressbar-percentage__value">{value}</span>
            <span className="mc-linear-progressbar-percentage__unit">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tabs({ current, onChange }: { current: Tab; onChange: (t: Tab) => void }) {
  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        gap: 4,
        borderBottom: "1px solid var(--color-border-primary, #e4e4e4)",
      }}
    >
      {(["overview", "orders", "team"] as Tab[]).map((t) => {
        const active = t === current;
        return (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(t)}
            style={{
              padding: "10px 14px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: active ? 600 : 400,
              color: active ? "var(--color-text-accent, #117f03)" : "var(--color-text-primary, #1c1c1c)",
              borderBottom: `2px solid ${active ? "var(--color-brand, #46a610)" : "transparent"}`,
              textTransform: "capitalize",
            }}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

function OverviewTab() {
  const rows = [
    { sku: "REF-2841", name: "Cordless drill 18V", status: "in-stock", revenue: "€38 200" },
    { sku: "REF-1109", name: "Outdoor LED panel", status: "low", revenue: "€26 740" },
    { sku: "REF-7732", name: "Smart thermostat", status: "out", revenue: "€19 150" },
    { sku: "REF-0451", name: "Workbench (oak)", status: "in-stock", revenue: "€14 980" },
  ];
  return (
    <div
      style={{
        border: "1px solid var(--color-border-primary, #e4e4e4)",
        borderRadius: 12,
        overflow: "hidden",
        background: "var(--color-background-primary, #fff)",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "var(--color-background-secondary, #fafafa)" }}>
            <Th>SKU</Th>
            <Th>Product</Th>
            <Th>Stock</Th>
            <Th align="right">Revenue</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.sku} style={{ borderTop: "1px solid var(--color-border-primary, #eaeaea)" }}>
              <Td muted>{r.sku}</Td>
              <Td>{r.name}</Td>
              <Td>
                <StatusBadge status={r.status as "in-stock" | "low" | "out"} />
              </Td>
              <Td align="right" weight={600}>
                {r.revenue}
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OrdersTab() {
  return (
    <div
      style={{
        padding: 20,
        border: "1px solid var(--color-border-primary, #e4e4e4)",
        borderRadius: 12,
        background: "var(--color-background-primary, #fff)",
        color: "var(--color-text-secondary, #6e6e6e)",
        fontSize: 14,
      }}
    >
      3 184 orders in the last 30 days. Filter and sort tooling lives here in the real app.
    </div>
  );
}

function TeamTab() {
  const team = [
    { name: "Marion", role: "Store manager", initials: "MA" },
    { name: "Yannick", role: "Pro advisor", initials: "YA" },
    { name: "Clara", role: "Cashier", initials: "CL" },
    { name: "Bruno", role: "Receiver", initials: "BR" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
      {team.map((m) => (
        <div
          key={m.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: 14,
            border: "1px solid var(--color-border-primary, #e4e4e4)",
            borderRadius: 12,
            background: "var(--color-background-primary, #fff)",
          }}
        >
          <span className="mc-avatar mc-avatar--m">{m.initials}</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{m.name}</div>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary, #6e6e6e)" }}>{m.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: "in-stock" | "low" | "out" }) {
  const map = {
    "in-stock": { label: "In stock", className: "mc-status-badge mc-status-badge--success" },
    low: { label: "Low", className: "mc-status-badge mc-status-badge--warning" },
    out: { label: "Out", className: "mc-status-badge mc-status-badge--danger" },
  } as const;
  const { label, className } = map[status];
  return <span className={className}>{label}</span>;
}

function Th({ children, align = "left" }: { children: React.ReactNode; align?: "left" | "right" }) {
  return (
    <th
      style={{
        padding: "10px 14px",
        textAlign: align,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--color-text-secondary, #6e6e6e)",
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  align = "left",
  muted = false,
  weight = 400,
}: {
  children: React.ReactNode;
  align?: "left" | "right";
  muted?: boolean;
  weight?: 400 | 600;
}) {
  return (
    <td
      style={{
        padding: "12px 14px",
        textAlign: align,
        color: muted ? "var(--color-text-secondary, #6e6e6e)" : "inherit",
        fontWeight: weight,
        fontVariantNumeric: align === "right" ? "tabular-nums" : "normal",
      }}
    >
      {children}
    </td>
  );
}
