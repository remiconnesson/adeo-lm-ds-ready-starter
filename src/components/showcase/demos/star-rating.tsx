"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function StarRatingExample() {
  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(0);
  return (
    <div className="mc-star-rating" role="radiogroup" aria-label="Rating" style={{ display: "inline-flex", gap: 4 }}>
      {[1, 2, 3, 4, 5].map((n) => {
        const active = (hover || value) >= n;
        return (
          <button
            key={n}
            type="button"
            aria-checked={value === n}
            role="radio"
            className={`mc-star-rating__star${active ? " is-active" : ""}`}
            onClick={() => setValue(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            style={{ background: "transparent", border: 0, cursor: "pointer", fontSize: 24, color: active ? "#f7b500" : "#cdcdcd", lineHeight: 1 }}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

export default function StarRatingDemo() {
  return (
    <Demo
      title="1–5 star input"
      code={`<div className="mc-star-rating" role="radiogroup">
  {[1,2,3,4,5].map(n => (
    <button key={n} role="radio" className="mc-star-rating__star" onClick={() => setValue(n)}>★</button>
  ))}
</div>`}
    >
      <StarRatingExample />
    </Demo>
  );
}
