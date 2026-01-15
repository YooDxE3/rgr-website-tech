"use client";

import { useEffect, useState } from "react";

type HealthPost = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
};

export default function Tips() {
  const [posts, setPosts] = useState<HealthPost[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/content/feed.json", {
          cache: "no-store",
        });

        const data = await res.json();

        const healthPosts = (data?.posts || []).filter(
          (post: HealthPost) => post.category === "saude"
        );

        setPosts(healthPosts.slice(0, 3));
      } catch (error) {
        console.error("Erro ao carregar dicas de saúde:", error);
      }
    }

    load();
  }, []);

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
          <strong>Nenhuma dica disponível</strong>
          <p className="muted">Conteúdo será carregado automaticamente.</p>
        </div>
      )}
    </div>
  );
}
