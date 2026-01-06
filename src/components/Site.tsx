import Image from "next/image";
import OpsBriefs from "./OpsBriefs";
import Tips from "./Tips";

type Lang = "pt" | "en" | "es";

const PT = {
  nav: {
    about: "Sobre",
    services: "Serviços",
    scope: "Escopo",
    governance: "Governança",
    innovation: "Inovação",
    roadmap: "Roadmap",
    campaigns: "Campanhas"
  },
  kicker: "RGR • MSO • Governança Médica",
  title: "Gestão de Saúde corporativa com padrão, operação e indicadores",
  lead:
    "Uma estrutura B2B para elevar performance assistencial: governança médica, operação ponta a ponta, qualidade, compliance e KPI — com atualização automática de conteúdo por IA a cada 48h.",
  ctas: { ops: "Ver Ops Briefs", contact: "Contato", ig: "Instagram" },

  aboutTitle: "Sobre a RGR",
  aboutText:
    "A RGR atua como MSO e parceiro estratégico em saúde: desenha, opera e monitora serviços médicos com método, previsibilidade e rastreabilidade. Sem agendamento de consultas — foco corporativo e institucional.",

  servicesTitle: "Módulos de serviços (B2B)",
  servicesText:
    "Escolha módulos conforme seu cenário e maturidade. Entrega orientada a SLA e segurança do paciente.",
  services: [
    { t: "Governança Médica", s: "Linhas de cuidado, fluxos, protocolos e comitês. Padronização e coordenação." },
    { t: "Operação Assistencial", s: "Gestão diária, rituais, escalas, dimensionamento e contingência." },
    { t: "Qualidade & Segurança", s: "Indicadores, auditoria, trilhas de evidência e melhoria contínua." },
    { t: "Compliance & Documentação", s: "Rastreabilidade, políticas internas e gestão de conformidade." },
    { t: "Inteligência & KPI", s: "Painéis executivos, SLA, alertas e visão de produção." },
    { t: "Implantação & Turnaround", s: "Plano em fases, quick wins, governança e sustentação." }
  ],

  scopeTitle: "Escopo assistencial de ponta a ponta",
  scopeText: "Cobertura modular por nível de criticidade e linhas de cuidado.",
  scope: [
    { t: "Pronto Atendimento / UPA", s: "Gestão de fluxo, tempo porta, contingência e metas assistenciais." },
    { t: "Enfermaria", s: "Round estruturado, alta segura, qualidade e previsibilidade." },
    { t: "UTI e críticos", s: "Protocolos, bundle, indicadores e aderência assistencial." },
    { t: "Ambulatório corporativo", s: "Governança, padrões e produtividade por especialidade." },
    { t: "Pediatria / Clínica / Emergência", s: "Escalas, cobertura, supervisão e integração com qualidade." },
    { t: "Regulação interna", s: "Métricas, alinhamento com rede e critérios de internação." }
  ],

  governanceTitle: "Governança na prática",
  governanceText: "O que muda quando a governança sai do papel e entra na rotina.",
  governance: [
    { t: "Ritual executivo", s: "D-5 de escala, D-1 confirmação, daily de gargalos e painel de SLA." },
    { t: "Protocolos vivos", s: "Atualização periódica, auditoria de aderência e plano de ação." },
    { t: "Indicadores que importam", s: "Tempo porta, taxa de retorno, eventos, NPS e produtividade." },
    { t: "Plano de contingência", s: "Acionamento em 30–120 min com papéis definidos e prova de teste." }
  ],

  innovationTitle: "Inovação (sem modismo)",
  innovationText:
    "Benchmark global aplicado ao B2B: design limpo, informação acionável, automação e padrão operacional.",
  innovation: [
    { t: "Conteúdo 48h (IA)", s: "Ops Briefs atualizados automaticamente para manter o site vivo e relevante." },
    { t: "Campanhas em carrossel", s: "Artes e copy B2B prontas para Instagram/LinkedIn com consistência visual." },
    { t: "Multilíngue", s: "PT/EN/ES nativo (fase 2: áudio/legenda em vídeo)." },
    { t: "Governança orientada a dados", s: "Toda promessa vira métrica com evidência e auditoria." }
  ],

  roadmapTitle: "Roadmap (piloto em fases)",
  roadmapText: "Implantação rápida com base em rituais e indicadores.",
  roadmap: [
    { t: "Fase 1 — Diagnóstico + KPI", s: "Mapeamento, baseline, metas e quick wins." },
    { t: "Fase 2 — Operação + Escalas", s: "Rotinas, dimensionamento, cobertura e contingência." },
    { t: "Fase 3 — Governança", s: "Protocolos, comitês, auditoria e qualidade." },
    { t: "Fase 4 — Automação", s: "Dashboards, alertas e conteúdo institucional automatizado." }
  ],

  campaignsTitle: "Campanhas prontas (carrossel)",
  campaignsText:
    "Conteúdo executável: você não recebe “ideia”, recebe campanha pronta para publicar e medir.",
};

const COPY: Record<Lang, any> = { pt: PT, en: PT, es: PT }; // (mantemos PT por agora; depois te entrego traduções completas)

export default function Site({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  const langHref = (l: Lang) => (l === "pt" ? "/" : `/${l}`);

  return (
    <>
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brand">
            <div className="brand__logo">
              <Image src="/assets/logo-rgr.jpeg" alt="RGR" width={44} height={44} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="brand__text">
              <div className="brand__name">RGR</div>
              <div className="brand__tag">MSO • Gestão em Saúde</div>
            </div>
          </div>

          <nav className="navlinks">
            <a href="#sobre">{t.nav.about}</a>
            <a href="#servicos">{t.nav.services}</a>
            <a href="#escopo">{t.nav.scope}</a>
            <a href="#governanca">{t.nav.governance}</a>
            <a href="#inovacao">{t.nav.innovation}</a>
            <a href="#roadmap">{t.nav.roadmap}</a>
            <a href="#campanhas">{t.nav.campaigns}</a>
          </nav>

          <div className="lang">
            <a className={`badge ${lang === "pt" ? "badge--on" : ""}`} href={langHref("pt")}>PT</a>
            <a className={`badge ${lang === "en" ? "badge--on" : ""}`} href={langHref("en")}>EN</a>
            <a className={`badge ${lang === "es" ? "badge--on" : ""}`} href={langHref("es")}>ES</a>
            <a className="btn btn--primary" href="mailto:servicosmedicosrgr@gmail.com">{t.ctas.contact}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero__grid">
            <div>
              <div className="kicker"><span className="dot" /> {t.kicker}</div>
              <h1 className="hero__title">{t.title}</h1>
              <p className="hero__lead">{t.lead}</p>

              <div className="pills">
                <span className="pill"><b>Clean</b> & Tech</span>
                <span className="pill"><b>IA</b> (48h)</span>
                <span className="pill"><b>Governança</b> real</span>
                <span className="pill"><b>KPI</b> & SLA</span>
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                <a className="btn btn--primary" href="#ops">{t.ctas.ops}</a>
                <a className="btn" href="https://www.instagram.com/rgr.healthops/" target="_blank">{t.ctas.ig}</a>
              </div>
            </div>

            <div className="hero__panel">
              <div className="fine">Contato corporativo</div>
              <div style={{ fontWeight: 900, fontSize: 16, marginTop: 8 }}>servicosmedicosrgr@gmail.com</div>
              <div className="hr" />
              <div className="fine">Posicionamento</div>
              <div style={{ marginTop: 8, color: "rgba(255,255,255,.85)", lineHeight: 1.6 }}>
                MSO • Governança • Operação • Qualidade • Compliance • KPI
              </div>
              <div className="hr" />
              <div className="fine">Instagram</div>
              <div style={{ marginTop: 8, fontWeight: 800 }}>@rgr.healthops</div>
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="container">
            <h2 className="h2">{t.aboutTitle}</h2>
            <p className="muted">{t.aboutText}</p>
          </div>
        </section>

        <section className="section section--alt" id="servicos">
          <div className="container">
            <h2 className="h2">{t.servicesTitle}</h2>
            <p className="muted">{t.servicesText}</p>
            <div className="grid3" style={{ marginTop: 14 }}>
              {t.services.map((x: any, i: number) => (
                <div className="card" key={i}>
                  <div className="tag">MÓDULO</div>
                  <h3 style={{ marginTop: 6 }}>{x.t}</h3>
                  <p className="muted">{x.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="ops">
          <div className="container">
            <OpsBriefs />
          </div>
        </section>

        <section className="section" id="escopo">
          <div className="container">
            <h2 className="h2">{t.scopeTitle}</h2>
            <p className="muted">{t.scopeText}</p>
            <div className="grid3" style={{ marginTop: 14 }}>
              {t.scope.map((x: any, i: number) => (
                <div className="card card--soft" key={i}>
                  <h3>{x.t}</h3>
                  <p className="muted">{x.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt" id="governanca">
          <div className="container">
            <h2 className="h2">{t.governanceTitle}</h2>
            <p className="muted">{t.governanceText}</p>
            <div className="grid2" style={{ marginTop: 14 }}>
              {t.governance.map((x: any, i: number) => (
                <div className="card" key={i}>
                  <h3>{x.t}</h3>
                  <p className="muted">{x.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="inovacao">
          <div className="container">
            <h2 className="h2">{t.innovationTitle}</h2>
            <p className="muted">{t.innovationText}</p>
            <div className="grid2" style={{ marginTop: 14 }}>
              {t.innovation.map((x: any, i: number) => (
                <div className="card" key={i}>
                  <div className="tag">INOVAÇÃO</div>
                  <h3 style={{ marginTop: 6 }}>{x.t}</h3>
                  <p className="muted">{x.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--alt" id="roadmap">
          <div className="container">
            <h2 className="h2">{t.roadmapTitle}</h2>
            <p className="muted">{t.roadmapText}</p>
            <div className="grid2" style={{ marginTop: 14 }}>
              {t.roadmap.map((x: any, i: number) => (
                <div className="card" key={i}>
                  <div className="tag">FASE</div>
                  <h3 style={{ marginTop: 6 }}>{x.t}</h3>
                  <p className="muted">{x.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="campanhas">
          <div className="container">
            <h2 className="h2">{t.campaignsTitle}</h2>
            <p className="muted">{t.campaignsText}</p>

            <div className="grid3" style={{ marginTop: 14 }}>
              <div className="card">
                <div className="tag">CARROSSEL</div>
                <h3 style={{ marginTop: 6 }}>Governança em 60s</h3>
                <p className="muted">O que é, por que importa e como medir (B2B).</p>
              </div>
              <div className="card">
                <div className="tag">CARROSSEL</div>
                <h3 style={{ marginTop: 6 }}>SLA que funciona</h3>
                <p className="muted">Definição, gatilhos, auditoria e plano de ação.</p>
              </div>
              <div className="card">
                <div className="tag">CARROSSEL</div>
                <h3 style={{ marginTop: 6 }}>Contingência em 2h</h3>
                <p className="muted">Playbook prático para evitar crise operacional.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <Tips />
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            © RGR • Contato: servicosmedicosrgr@gmail.com • Instagram: @rgr.healthops
          </div>
        </footer>
      </main>
    </>
  );
}
