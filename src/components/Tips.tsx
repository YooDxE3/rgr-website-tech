"use client";

import { useEffect, useState } from "react";

type Tip = { title: string; description: string };

export default function Tips() {
  const [tip, setTip] = useState<Tip | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/assets/health_tips_ptbr.json", { cache: "no-store" });
        const data = await res.json();
        const tips: Tip[] = data?.tips || [];

        if (!tips.length) return;

        // troca a cada 48h
        const slot = Math.floor(Date.now() / (1000 * 60 * 60 * 48));
        setTip(tips[slot % tips.length]);
      } catch {}
    })();
  }, []);

  return (
    <>
      <h2 className="h2">Dicas rápidas de saúde</h2>
      <p className="muted">Conteúdo educativo (não substitui consulta médica). Atualiza a cada 48 horas.</p>

      <div className="grid2" style={{ marginTop: 14 }}>
        <div className="card">
          <h3>{tip?.title || "Carregando..."}</h3>
          <p className="muted">{tip?.description || "Aguarde um instante."}</p>
        </div>
        <div className="card">
          <h3>Campanhas prontas</h3>
          <p className="muted">O Content Hub gera carrossel e texto B2B, pronto para automação no Instagram.</p>
        </div>
      </div>
    </>
  );
}
