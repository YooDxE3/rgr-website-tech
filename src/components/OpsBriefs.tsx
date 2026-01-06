"use client";

import { useEffect, useState } from "react";

type Feed = { updated_at?: string; items?: { category?: string; title?: string; summary?: string }[] };

export default function OpsBriefs() {
  const [feed, setFeed] = useState<Feed>({ items: [] });

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/content/feed.json", { cache: "no-store" });
        const j = await r.json();
        setFeed(j);
      } catch {
        setFeed({ items: [] });
      }
    })();
  }, []);

  const items = feed.items || [];

  return (
    <>
      <h2 className="h2">Ops Briefs (IA)</h2>
      <p className="muted">Atualiza automaticamente a cada 48 horas.</p>
      <p className="fine">Última atualização: {feed.updated_at || "—"}</p>

      <div className="grid3" style={{ marginTop: 14 }}>
        {items.length === 0 ? (
          <div className="card">
            <h3>Feed ainda vazio</h3>
            <p className="muted">Aguarde a próxima execução do Content Hub (48h).</p>
          </div>
        ) : (
          items.slice(0, 6).map((it, idx) => (
            <div className="card" key={idx}>
              <div className="fine">OPS_BRIEF • {it.category || "RGR"}</div>
              <h3 style={{ marginTop: 6 }}>{it.title}</h3>
              <p className="muted">{it.summary}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
