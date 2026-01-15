"use client";

import { useEffect, useState } from "react";
import { Lang } from "@/lib/i18n";
import { copy } from "@/lib/copy";

type FeedItem = {
  category?: string;
  title?: string;
  summary?: string;
};

type Feed = {
  updated_at?: string;
  items?: FeedItem[];
};

export default function OpsBriefs({ lang }: { lang: Lang }) {
  const t = copy[lang].ops;

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
      <h2 className="h2">{t.title}</h2>
      <p className="muted">{t.subtitle}</p>
      <p className="fine">
        {t.updated}: {feed.updated_at || "—"}
      </p>

      <div className="grid3" style={{ marginTop: 14 }}>
        {items.length === 0 ? (
          <div className="card">
            <h3>{t.title}</h3>
            <p className="muted">{t.empty}</p>
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
