"use client";

import { useMemo, useState } from "react";

type Step = "address" | "shipping" | "payment" | "review";
const STEP_ORDER: Step[] = ["address", "shipping", "payment", "review"];
const STEP_META: Record<Step, { label: string; body: string }> = {
  address: { label: "Shipping address", body: "Where should we deliver?" },
  shipping: { label: "Shipping method", body: "Pick a delivery option." },
  payment: { label: "Payment", body: "Choose how you’ll pay." },
  review: { label: "Review", body: "Confirm and place the order." },
};

const SHIPPING_OPTIONS = [
  { id: "standard", label: "Standard", eta: "3–5 business days", price: 0 },
  { id: "express", label: "Express", eta: "1–2 business days", price: 9.9 },
  { id: "pickup", label: "Pickup at store", eta: "Ready in 2 hours", price: 0 },
] as const;

const PAYMENT_METHODS = [
  { id: "card", label: "Credit card", hint: "Visa, Mastercard, Amex" },
  { id: "paypal", label: "PayPal", hint: "Redirect to PayPal" },
  { id: "store", label: "Store credit", hint: "€48.00 available" },
] as const;

export default function CheckoutExample() {
  const [current, setCurrent] = useState<Step>("shipping");
  const [shipping, setShipping] = useState<(typeof SHIPPING_OPTIONS)[number]["id"]>("standard");
  const [payment, setPayment] = useState<(typeof PAYMENT_METHODS)[number]["id"]>("card");

  const currentIndex = STEP_ORDER.indexOf(current);
  const stepCount = STEP_ORDER.length;

  function goPrev() {
    if (currentIndex > 0) setCurrent(STEP_ORDER[currentIndex - 1]);
  }
  function goNext() {
    if (currentIndex < stepCount - 1) setCurrent(STEP_ORDER[currentIndex + 1]);
  }

  const subtotal = 79.9;
  const shippingPrice = SHIPPING_OPTIONS.find((o) => o.id === shipping)?.price ?? 0;
  const total = useMemo(() => subtotal + shippingPrice, [shippingPrice]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40 }}>
      <section>
        <ol className="mc-stepper-stacked__container" style={{ marginBottom: 24 }}>
          {STEP_ORDER.map((step, i) => {
            const state: "current" | "complete" | "todo" =
              i === currentIndex ? "current" : i < currentIndex ? "complete" : "todo";
            return (
              <li key={step} className="mc-stepper-stacked__item has-additional">
                <div className="mc-stepper-stacked__indicator">
                  <span
                    className={`mc-stepper-stacked__circle${state === "current" ? " is-current" : ""}`}
                  >
                    {state === "complete" ? "✓" : i + 1}
                  </span>
                </div>
                <div className="mc-stepper-stacked__content">
                  <span
                    className={`mc-stepper-stacked__label${state === "current" ? " is-current" : ""}`}
                  >
                    {STEP_META[step].label}
                  </span>
                  <span className="mc-stepper-stacked__additional">{STEP_META[step].body}</span>
                </div>
              </li>
            );
          })}
        </ol>

        {current === "address" && <AddressStep />}
        {current === "shipping" && (
          <ShippingStep selected={shipping} onChange={setShipping} />
        )}
        {current === "payment" && <PaymentStep selected={payment} onChange={setPayment} />}
        {current === "review" && <ReviewStep shipping={shipping} payment={payment} total={total} />}
      </section>

      <aside
        style={{
          alignSelf: "start",
          padding: 20,
          border: "1px solid var(--color-border-primary, #e4e4e4)",
          borderRadius: 12,
          background: "var(--color-background-secondary, #fafafa)",
          display: "grid",
          gap: 14,
          position: "sticky",
          top: 24,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Order summary
        </h3>
        <SummaryLine label="Subtotal" value={`€${subtotal.toFixed(2)}`} />
        <SummaryLine label="Shipping" value={shippingPrice ? `€${shippingPrice.toFixed(2)}` : "Free"} />
        <hr className="mc-divider" style={{ margin: "6px 0" }} />
        <SummaryLine label="Total" value={`€${total.toFixed(2)}`} bold />
        <p className="mc-status-message mc-status-message--success" style={{ margin: 0 }}>
          <svg
            className="mc-status-message__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#188038"
            aria-hidden="true"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14.41-4.71-4.7 1.42-1.42L11 13.59l5.29-5.3 1.42 1.42Z" />
          </svg>
          <span className="mc-status-message__description">Free returns within 30 days.</span>
        </p>
      </aside>

      <div
        style={{
          gridColumn: "1 / -1",
          marginTop: 8,
          marginInline: -32,
          padding: "16px 32px",
          borderTop: "1px solid var(--color-border-primary, #e4e4e4)",
          background: "var(--color-background-primary, #fff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 13, color: "var(--color-text-secondary, #6e6e6e)" }}>
          Step {currentIndex + 1} of {stepCount} · {STEP_META[current].label}
        </span>
        <div style={{ display: "flex", gap: 12 }}>
          <button
            type="button"
            className="mc-button mc-button--bordered"
            onClick={goPrev}
            disabled={currentIndex === 0}
          >
            <span className="mc-button__label">Back</span>
          </button>
          {currentIndex < stepCount - 1 ? (
            <button type="button" className="mc-button" onClick={goNext}>
              <span className="mc-button__label">Continue</span>
            </button>
          ) : (
            <button type="button" className="mc-button">
              <span className="mc-button__label">Place order</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function AddressStep() {
  return (
    <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
      <Field label="Full name" id="full-name" placeholder="Jane Doe" />
      <Field label="Phone" id="phone" placeholder="+33 1 23 45 67 89" />
      <div style={{ gridColumn: "1 / -1" }}>
        <Field label="Street address" id="address" placeholder="14 rue des Pavillons" />
      </div>
      <Field label="City" id="city" placeholder="Lille" />
      <Field label="Postal code" id="postal" placeholder="59000" />
    </div>
  );
}

function ShippingStep({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (id: (typeof SHIPPING_OPTIONS)[number]["id"]) => void;
}) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {SHIPPING_OPTIONS.map((opt) => {
        const active = opt.id === selected;
        return (
          <label
            key={opt.id}
            className="mc-tile"
            style={{
              cursor: "pointer",
              padding: 16,
              display: "flex",
              alignItems: "center",
              gap: 16,
              border: `1px solid ${active ? "var(--color-brand, #46a610)" : "var(--color-border-primary, #e4e4e4)"}`,
              borderRadius: 10,
              background: active ? "var(--color-background-accent, #f3f9eb)" : "var(--color-background-primary, #fff)",
            }}
          >
            <input
              type="radio"
              name="shipping"
              value={opt.id}
              checked={active}
              onChange={() => onChange(opt.id)}
              className="mc-radio__input"
              style={{ accentColor: "var(--color-brand, #46a610)" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>{opt.label}</div>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary, #6e6e6e)" }}>{opt.eta}</div>
            </div>
            <div style={{ fontWeight: 600 }}>{opt.price ? `€${opt.price.toFixed(2)}` : "Free"}</div>
          </label>
        );
      })}
    </div>
  );
}

function PaymentStep({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (id: (typeof PAYMENT_METHODS)[number]["id"]) => void;
}) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <aside className="mc-callout">
        <svg className="mc-callout__icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-6h2Zm0-8h-2V7h2Z"
          />
        </svg>
        <div className="mc-callout__content">
          <h3 className="mc-callout__title">Secure checkout</h3>
          <p className="mc-callout__message">Payment is processed via our PCI-DSS partner. We never store card details.</p>
        </div>
      </aside>

      {PAYMENT_METHODS.map((opt) => {
        const active = opt.id === selected;
        return (
          <label
            key={opt.id}
            style={{
              cursor: "pointer",
              padding: 16,
              display: "flex",
              alignItems: "center",
              gap: 16,
              border: `1px solid ${active ? "var(--color-brand, #46a610)" : "var(--color-border-primary, #e4e4e4)"}`,
              borderRadius: 10,
              background: active ? "var(--color-background-accent, #f3f9eb)" : "var(--color-background-primary, #fff)",
            }}
          >
            <input
              type="radio"
              name="payment"
              value={opt.id}
              checked={active}
              onChange={() => onChange(opt.id)}
              className="mc-radio__input"
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>{opt.label}</div>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary, #6e6e6e)" }}>{opt.hint}</div>
            </div>
          </label>
        );
      })}
    </div>
  );
}

function ReviewStep({
  shipping,
  payment,
  total,
}: {
  shipping: string;
  payment: string;
  total: number;
}) {
  const shippingLabel = SHIPPING_OPTIONS.find((s) => s.id === shipping)?.label ?? shipping;
  const paymentLabel = PAYMENT_METHODS.find((p) => p.id === payment)?.label ?? payment;
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Confirm your order</h3>
      <dl
        style={{
          margin: 0,
          display: "grid",
          gridTemplateColumns: "max-content 1fr",
          rowGap: 8,
          columnGap: 16,
          fontSize: 14,
        }}
      >
        <dt style={{ color: "var(--color-text-secondary, #6e6e6e)" }}>Ship to</dt>
        <dd style={{ margin: 0 }}>14 rue des Pavillons, 59000 Lille</dd>
        <dt style={{ color: "var(--color-text-secondary, #6e6e6e)" }}>Delivery</dt>
        <dd style={{ margin: 0 }}>{shippingLabel}</dd>
        <dt style={{ color: "var(--color-text-secondary, #6e6e6e)" }}>Payment</dt>
        <dd style={{ margin: 0 }}>{paymentLabel}</dd>
        <dt style={{ color: "var(--color-text-secondary, #6e6e6e)" }}>Total</dt>
        <dd style={{ margin: 0, fontWeight: 600 }}>€{total.toFixed(2)}</dd>
      </dl>
    </div>
  );
}

function SummaryLine({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: bold ? 16 : 14, fontWeight: bold ? 600 : 400 }}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Field({ id, label, placeholder }: { id: string; label: string; placeholder?: string }) {
  return (
    <div className="mc-field">
      <label className="mc-field__label" htmlFor={id}>
        {label}
      </label>
      <input id={id} type="text" className="mc-text-input" placeholder={placeholder} />
    </div>
  );
}
