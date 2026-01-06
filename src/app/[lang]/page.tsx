type Lang = "pt" | "en" | "es";

const copy: Record<Lang, { title: string; subtitle: string; }> = {
  pt: {
    title: "RGR — Governança Médica & MSO",
    subtitle:
      "B2B corporativo. Operação + Qualidade + Compliance + KPI. Conteúdo e campanhas geradas por IA com atualização automática."
  },
  en: {
    title: "RGR — Medical Governance & MSO",
    subtitle:
      "Corporate B2B. Operations + Quality + Compliance + KPI. AI-generated content & campaigns with automatic updates."
  },
  es: {
    title: "RGR — Gobernanza Médica & MSO",
    subtitle:
      "B2B corporativo. Operación + Calidad + Compliance + KPI. Contenido y campañas generadas por IA con actualización automática."
  }
};

export async function generateStaticParams() {
  return [
    { lang: "pt" },
    { lang: "en" },
    { lang: "es" }
  ];
}


async function getFeed() {
  const fallback = { updated_at: "", items: [] as any[] };
  try {
    const res = await fetch("/content/feed.json");
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

export default async function LangPage({ params }: { params: { lang: string } }) {
  const lang = (["pt", "en", "es"].includes(params.lang) ? params.lang : "pt") as Lang;
  const t = copy[lang];
  const feed = await getFeed();

  return (
    <>
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <div className="logoDot" />
            <div>
              <div style={{ fontWeight: 900 }}>RGR</div>
              <div className="small">Corporate Healthcare Services</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
            <a className={`btn ${lang === "pt" ? "btnPrimary" : ""}`} href="/pt">PT</a>
            <a className={`btn ${lang === "en" ? "btnPrimary" : ""}`} href="/en">EN</a>
            <a className={`btn ${lang === "es" ? "btnPrimary" : ""}`} href="/es">ES</a>
            <a className="btn btnPrimary" href="mailto:servicosmedicosrgr@gmail.com">Contato</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h1 className="h1">{t.title}</h1>
          <p className="lead">{t.subtitle}</p>
          <div className="pills">
            <span className="pill"><strong>Modern Tech</strong></span>
            <span className="pill"><strong>IA</strong></span>
            <span className="pill"><strong>PT/EN/ES</strong></span>
            <span className="pill">@rgr.healthops</span>
          </div>
        </section>

        <section className="section">
          <div className="sectionHead">
            <div>
              <h2>O que a RGR entrega</h2>
              <p>Institucional B2B, sem agendamento de consultas.</p>
            </div>
            <div className="small">servicosmedicosrgr@gmail.com</div>
          </div>

          <div className="grid3">
            <div className="card">
              <h3 style={{ margin: 0 }}>Governança Médica</h3>
              <p className="small">Fluxos assistenciais, padronização e coordenação multiprofissional.</p>
            </div>
            <div className="card">
              <h3 style={{ margin: 0 }}>Gestão MSO</h3>
              <p className="small">Operação ponta a ponta: ambulatório, enfermaria, UTI e críticos.</p>
            </div>
            <div className="card">
              <h3 style={{ margin: 0 }}>Inteligência & KPI</h3>
              <p className="small">Painéis, SLA e rastreabilidade para gestão executiva.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHead">
            <div>
              <h2>Ops Briefs (IA)</h2>
              <p>Atualiza a cada 48h (via automação do Content Hub).</p>
            </div>
            <div className="small">Última atualização: {feed.updated_at || "—"}</div>
          </div>

          <div className="grid3">
            {(feed.items || []).slice(0, 6).map((it: any, idx: number) => (
              <div className="card" key={idx}>
                <div className="small">OPS_BRIEF • {it.category || "RGR"}</div>
                <div style={{ fontWeight: 900, marginTop: 6 }}>{it.title}</div>
                <p className="small" style={{ marginTop: 8 }}>{it.summary}</p>
              </div>
            ))}
            {(feed.items || []).length === 0 && (
              <div className="card">
                <div style={{ fontWeight: 900 }}>Feed ainda vazio</div>
                <p className="small" style={{ marginTop: 8 }}>
                  Assim que o Content Hub rodar, este painel será preenchido automaticamente.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <div className="sectionHead">
            <div>
              <h2>Instagram</h2>
              <p>Automação pronta para publicar carrosséis (B2B).</p>
            </div>
            <a className="btn btnPrimary" href="https://www.instagram.com/rgr.healthops/" target="_blank">Abrir @rgr.healthops</a>
          </div>
          <div className="grid2">
            <div className="card">
              <h3 style={{ margin: 0 }}>Carrossel de campanhas</h3>
              <p className="small">O Hub gera as imagens e legenda (PT/EN/ES) e a automação publica via API.</p>
            </div>
            <div className="card">
              <h3 style={{ margin: 0 }}>Multilíngue</h3>
              <p className="small">Site já suporta PT/EN/ES. Vídeos/áudios multilíngues entram na fase 2 (Stream + legendas).</p>
            </div>
          </div>
        </section>

        <div className="footer">
          © RGR • Tech Website • Contato: servicosmedicosrgr@gmail.com • @rgr.healthops
        </div>
      </main>
    </>
  );
}
