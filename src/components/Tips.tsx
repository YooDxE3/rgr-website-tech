"use client";

import { useEffect, useState } from "react";

type HealthPost = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  published_at: string;
};

export default function Tips() {
  const [post, setPost] = useState<HealthPost | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/content/feed.json", { cache: "no-store" });
        const data = await res.json();

        const healthPosts = (data?.posts || []).filter(
          (p: HealthPost) => p.category === "saude"
        );

        if (!healthPosts.length) return;

        // troca a cada 48h
        const slot = Math.floor(Date.now() / (1000 * 60 * 60 * 48));
        setPost(healthPosts[slot % healthPosts.length]);
      } catch (err) {
        console.error("Erro ao carregar dicas de saúde", err);
      }
    })();
  }, []);

  return (
    <section aria-labelledby="health-tips">
      <h2 id="health-tips" className="h2">
        Dicas rápidas de saúde
      </h2>

      <p className="muted">
        Conteúdo educativo (não substitui consulta médica).
      </p>

      <article className="card" style={{ marginTop: 14 }}>
        <h3>{post?.title || "Carregando..."}</h3>

        <p className="muted">
          {post?.excerpt || "Aguarde um instante."}
        </p>

        {/* Conteúdo rico = melhor indexação */}
        {post && (
          <section
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
      </article>
    </section>
  );
}
