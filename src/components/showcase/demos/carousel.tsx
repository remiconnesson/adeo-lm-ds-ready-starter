"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function CarouselExample() {
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  const [i, setI] = useState(0);
  return (
    <div className="mc-carousel" style={{ width: "100%", maxWidth: 480 }}>
      <div className="mc-carousel__viewport" style={{ overflow: "hidden", border: "1px solid #e4e4e4", borderRadius: 10 }}>
        <div className="mc-carousel__track" style={{ display: "flex", transform: `translateX(-${i * 100}%)`, transition: "transform .3s ease" }}>
          {slides.map((s, idx) => (
            <div key={idx} className="mc-carousel__slide" style={{ flex: "0 0 100%", height: 120, display: "grid", placeItems: "center", background: `hsl(${(idx * 50) % 360} 50% 95%)`, fontSize: 16, fontWeight: 600 }}>
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="mc-carousel__controls" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
        <button type="button" className="mc-button mc-button--s mc-button--outlined" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}>
          <span className="mc-button__label">Prev</span>
        </button>
        <div className="mc-carousel__dots" style={{ display: "flex", gap: 6 }}>
          {slides.map((_, idx) => (
            <button key={idx} type="button" onClick={() => setI(idx)} className={`mc-carousel__dot${idx === i ? " is-active" : ""}`} style={{ width: 8, height: 8, borderRadius: "50%", border: 0, background: idx === i ? "#46a610" : "#d4d4d4", cursor: "pointer" }} />
          ))}
        </div>
        <button type="button" className="mc-button mc-button--s mc-button--outlined" onClick={() => setI((v) => Math.min(slides.length - 1, v + 1))} disabled={i === slides.length - 1}>
          <span className="mc-button__label">Next</span>
        </button>
      </div>
    </div>
  );
}

export default function CarouselDemo() {
  return (
    <Demo
      title="Sliding panels"
      code={`<div className="mc-carousel">
  <div className="mc-carousel__viewport">
    <div className="mc-carousel__track">
      {slides.map(s => <div className="mc-carousel__slide">{s}</div>)}
    </div>
  </div>
  <div className="mc-carousel__controls">…</div>
</div>`}
    >
      <CarouselExample />
    </Demo>
  );
}
