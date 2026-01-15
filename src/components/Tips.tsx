"use client";

import { useEffect, useState } from "react";
import { Lang } from "@/lib/i18n";

type HealthPost = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
};

export default function Tips({ lang }: { lang: Lang }) {
  const [posts, setPosts] = useState<HealthPost[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/content/feed.json", { cache: "no-store" });
        const data = await res.json();

        const healthPosts = (data?.posts || []).filter(
          (p: HealthPost) => p.category === "saude"
        );

        setPosts(healthPosts.slice(0, 3));
      } catch (e) {
        console.error("Erro ao carregar dicas", e);
      }
    }

    load();
  }, [lang]);

  return (
    <div className="grid3" style={{ marginTop: 24 }}>
      {posts.map((post) => (
        <article key={post.id} className="card">
          <h3>{post.title}</h3>
          <p className="muted">{post.excerpt}</p>
        </article>
      ))}

      {posts.length === 0 && (
        <div className="card">
          <strong>
            {lang === "en"
              ? "No tips available"
              : lang === "es"
              ? "No hay consejos disponibles"
              : "Nenhuma dica disponível"}
          </strong>
        </div>
      )}
    </div>
  );
}
