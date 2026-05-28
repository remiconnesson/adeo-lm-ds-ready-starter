"use client";

import { useState } from "react";

export default function SignInExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 900);
  }

  return (
    <div style={{ maxWidth: 420, margin: "0 auto", display: "grid", gap: 20 }}>
      <header style={{ display: "grid", gap: 6 }}>
        <h2 style={{ margin: 0, fontSize: 24, fontWeight: 600 }}>Welcome back</h2>
        <p style={{ margin: 0, color: "var(--color-text-secondary, #6e6e6e)", fontSize: 14 }}>
          Sign in to continue to the dashboard.
        </p>
      </header>

      {error && (
        <aside className="mc-callout" role="alert">
          <svg className="mc-callout__icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z"
            />
          </svg>
          <div className="mc-callout__content">
            <h3 className="mc-callout__title">Check your details</h3>
            <p className="mc-callout__message">{error}</p>
          </div>
        </aside>
      )}

      <form onSubmit={submit} style={{ display: "grid", gap: 16 }} noValidate>
        <div className="mc-field">
          <label className="mc-field__label" htmlFor="sign-in-email">
            Email
          </label>
          <input
            id="sign-in-email"
            type="email"
            autoComplete="email"
            className="mc-text-input"
            placeholder="you@adeo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mc-field">
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <label className="mc-field__label" htmlFor="sign-in-password">
              Password
            </label>
            <a className="mc-link mc-link--s" href="#forgot">
              Forgot password?
            </a>
          </div>
          <input
            id="sign-in-password"
            type="password"
            autoComplete="current-password"
            className="mc-text-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="mc-field__helper">Minimum 8 characters.</p>
        </div>

        <label className="mc-checkbox">
          <input
            type="checkbox"
            className="mc-checkbox__input"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span className="mc-checkbox__label">Keep me signed in on this device</span>
        </label>

        <button type="submit" className="mc-button" disabled={loading}>
          <span className="mc-button__label">{loading ? "Signing in…" : "Sign in"}</span>
        </button>

        <p style={{ margin: 0, textAlign: "center", fontSize: 14, color: "var(--color-text-secondary, #6e6e6e)" }}>
          New here?{" "}
          <a className="mc-link" href="#signup">
            Create an account
          </a>
        </p>
      </form>
    </div>
  );
}
