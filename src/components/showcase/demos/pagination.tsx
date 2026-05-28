"use client";
import { useState } from "react";
import { Demo } from "../Demo";

function PaginationExample() {
  const total = 7;
  const [page, setPage] = useState(3);
  return (
    <nav className="mc-pagination" aria-label="Pagination" style={{ display: "inline-flex", gap: 4 }}>
      <button type="button" className="mc-pagination__nav mc-button mc-button--s mc-button--outlined" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
        <span className="mc-button__label">Prev</span>
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          aria-current={page === p ? "page" : undefined}
          className={`mc-pagination__page mc-button mc-button--s ${page === p ? "" : "mc-button--outlined"}`}
          onClick={() => setPage(p)}
        >
          <span className="mc-button__label">{p}</span>
        </button>
      ))}
      <button type="button" className="mc-pagination__nav mc-button mc-button--s mc-button--outlined" onClick={() => setPage((p) => Math.min(total, p + 1))} disabled={page === total}>
        <span className="mc-button__label">Next</span>
      </button>
    </nav>
  );
}

export default function PaginationDemo() {
  return (
    <Demo
      title="Numbered pages"
      code={`<nav className="mc-pagination">
  <button className="mc-button mc-button--outlined">Prev</button>
  {pages.map(p => (
    <button aria-current={page === p ? "page" : undefined} className={\`mc-button \${page === p ? "" : "mc-button--outlined"}\`}>
      {p}
    </button>
  ))}
  <button className="mc-button mc-button--outlined">Next</button>
</nav>`}
    >
      <PaginationExample />
    </Demo>
  );
}
