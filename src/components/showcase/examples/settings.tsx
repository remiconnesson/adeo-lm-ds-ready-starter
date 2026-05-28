"use client";

import { useState } from "react";

export default function SettingsExample() {
  const [emailDigest, setEmailDigest] = useState(true);
  const [push, setPush] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");
  const [bio, setBio] = useState("Field engineer at Adeo. Working on the Mozaic showcase.");

  return (
    <div style={{ display: "grid", gap: 32 }}>
      <header style={{ display: "grid", gap: 8 }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--color-text-secondary, #6e6e6e)",
          }}
        >
          Account
        </span>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>Preferences</h2>
        <p style={{ margin: 0, color: "var(--color-text-secondary, #6e6e6e)", fontSize: 14 }}>
          Control how the app behaves and how we contact you.
        </p>
      </header>

      <Section title="Profile" hint="Visible to teammates and on shared links.">
        <div className="mc-field" style={{ maxWidth: 480 }}>
          <label className="mc-field__label" htmlFor="display-name">
            Display name
          </label>
          <input id="display-name" type="text" className="mc-text-input" defaultValue="Rémi Connesson" />
        </div>

        <div className="mc-field" style={{ maxWidth: 480 }}>
          <label className="mc-field__label" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            className="mc-textarea"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <p className="mc-field__helper">{200 - bio.length} characters left.</p>
        </div>
      </Section>

      <Divider />

      <Section title="Appearance">
        <Row label="Theme" hint="Affects only your sessions.">
          <div role="radiogroup" aria-label="Theme" style={{ display: "grid", gap: 8 }}>
            {(["system", "light", "dark"] as const).map((t) => (
              <label key={t} className="mc-radio">
                <input
                  type="radio"
                  name="theme"
                  value={t}
                  checked={theme === t}
                  onChange={() => setTheme(t)}
                  className="mc-radio__input"
                />
                <span className="mc-radio__label" style={{ textTransform: "capitalize" }}>
                  {t}
                </span>
              </label>
            ))}
          </div>
        </Row>

        <Row label="Density">
          <div className="mc-segmented-control" role="radiogroup" aria-label="Density">
            {(["comfortable", "compact"] as const).map((d) => (
              <button
                key={d}
                type="button"
                className={`mc-segmented-control__item${density === d ? " is-selected" : ""}`}
                onClick={() => setDensity(d)}
                aria-pressed={density === d}
              >
                {d === "comfortable" ? "Comfortable" : "Compact"}
              </button>
            ))}
          </div>
        </Row>
      </Section>

      <Divider />

      <Section title="Notifications" hint="We never share your contact details.">
        <ToggleRow
          label="Weekly email digest"
          hint="A summary of activity, sent on Mondays."
          checked={emailDigest}
          onChange={setEmailDigest}
        />
        <ToggleRow
          label="Push notifications"
          hint="Real-time alerts on this device."
          checked={push}
          onChange={setPush}
        />
        <ToggleRow
          label="Marketing emails"
          hint="Occasional product news and tips."
          checked={marketing}
          onChange={setMarketing}
        />
      </Section>

      <div
        style={{
          position: "sticky",
          bottom: 0,
          marginTop: 16,
          marginInline: -32,
          padding: "16px 32px",
          borderTop: "1px solid var(--color-border-primary, #e4e4e4)",
          background: "var(--color-background-primary, #fff)",
          display: "flex",
          justifyContent: "flex-end",
          gap: 12,
        }}
      >
        <button type="button" className="mc-button mc-button--bordered">
          <span className="mc-button__label">Discard</span>
        </button>
        <button type="button" className="mc-button">
          <span className="mc-button__label">Save changes</span>
        </button>
      </div>
    </div>
  );
}

function Section({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 32 }}>
      <div>
        <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{title}</h3>
        {hint && (
          <p style={{ margin: "4px 0 0", color: "var(--color-text-secondary, #6e6e6e)", fontSize: 13 }}>
            {hint}
          </p>
        )}
      </div>
      <div style={{ display: "grid", gap: 16 }}>{children}</div>
    </section>
  );
}

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
      {hint && (
        <span style={{ fontSize: 13, color: "var(--color-text-secondary, #6e6e6e)" }}>{hint}</span>
      )}
      <div>{children}</div>
    </div>
  );
}

function ToggleRow({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="mc-toggle" style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
      <span style={{ flex: 1 }}>
        <span style={{ display: "block", fontSize: 14, fontWeight: 500 }}>{label}</span>
        {hint && (
          <span
            style={{ display: "block", fontSize: 13, color: "var(--color-text-secondary, #6e6e6e)", marginTop: 2 }}
          >
            {hint}
          </span>
        )}
      </span>
      <input
        type="checkbox"
        className="mc-toggle__input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="mc-toggle__container" />
    </label>
  );
}

function Divider() {
  return <hr className="mc-divider" style={{ margin: 0 }} />;
}
