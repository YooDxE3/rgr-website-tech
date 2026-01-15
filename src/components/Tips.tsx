"use client";

import { useEffect, useState } from "react";

type HealthPost = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
};

export default function HealthTipsGrid() {
  const [posts, setPosts] = useState<HealthPost[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/content/feed.json", {
          cache: "no-store",
        });
        const data = await res.json();

        const healthPosts = (data?.posts || []).filter(
          (p: HealthPost) => p.category === "saude"
        );

        setPosts(healthPosts.slice(0, 3)); // quantidade de cards
      } catch (err) {
        console.error("Erro ao carregar dicas", err);
      }
    })();
  }, []);

  return (
    <section>
      <h2 className="h2">Inovação e benchmark internacional</h2>
      <p className="muted">
        Práticas modernas para elevar performance clínica e eficiência operacional.
      </p>

      <div className="grid3" style={{ marginTop: 24 }}>
        {posts.map((post) => (
          <article key={post.id} className="card">
            <h3>{post.title}</h3>
            <p className="muted">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
