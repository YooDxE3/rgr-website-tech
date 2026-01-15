"use client";

import { useEffect, useState } from "react";
import { Lang } from "@/lib/i18n";
import { copy } from "@/lib/copy";

type FeedItem = { category?: string; title?: string; summary?: string };
type Feed = { updated_at?: string; items?: FeedItem[] };

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
      <h2>{t.title}</h2>
      <p className="muted">{t.subtitle}</p>

      <div className="grid3">
        {items.length === 0 ? (
          <div className="card">
            <p>{t.empty}</p>
          </div>
        ) : (
          items.slice(0, 6).map((it, idx) => (
            <div className="card" key={idx}>
              <h3>{it.title}</h3>
              <p className="muted">{it.summary}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
