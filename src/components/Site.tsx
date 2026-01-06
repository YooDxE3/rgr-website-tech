import Image from "next/image";
import OpsBriefs from "./OpsBriefs";
import Tips from "./Tips";

type Lang = "pt" | "en" | "es";

const COPY: Record<Lang, any> = {
  pt: {
    nav: { about: "Sobre", services: "Governança", scope: "Escopo Assistencial", innov: "Inovação", roadmap: "Roadmap" },
    heroTitle: "Gestão com excelência em saúde corporativa",
    heroText:
      "Operação, padrões e indicadores para entregar performance assistencial com segurança, previsibilidade e rastreabilidade.",
    ctas: { contact: "Contato", instagram: "Instagram" },
    aboutTitle: "Sobre a RGR",
    aboutText:
      "Atuamos na gestão e operação de serviços médicos com governança, qualidade e inteligência de dados. B2B corporativo, sem agendamento de consultas.",
    servicesTitle: "Serviços",
    servicesText: "Escolha módulos conforme sua maturidade e momento.",
    services: [
      { t: "Governança Médica", s: "Fluxos, padronização e coordenação multiprofissional." },
      { t: "Gestão MSO", s: "Operação ponta a ponta com SLA e rituais executivos." },
      { t: "Inteligência & KPI", s: "Painéis, auditoria e rastreabilidade para decisão rápida." }
    ],
    scopeTitle: "Escopo assistencial de ponta a ponta",
    scopeText: "Cobertura modular por linhas de cuidado e criticidade.",
    innovTitle: "Inovação e benchmark internacional",
    innovText: "Práticas modernas para elevar qualidade e eficiência.",
    roadmapTitle: "Roadmap de implantação (piloto)",
    roadmapText: "Implantação por fases para ganho rápido e sustentado."
  },
  en: {
    nav: { about: "About", services: "Governance", scope: "Clinical Scope", innov: "Innovation", roadmap: "Roadmap" },
    heroTitle: "Operational excellence for corporate healthcare",
    heroText:
      "Operations, standards and KPIs to deliver safe, predictable and traceable clinical performance.",
    ctas: { contact: "Contact", instagram: "Instagram" },
    aboutTitle: "About RGR",
    aboutText:
      "We run medical operations with governance, quality and data intelligence. Corporate B2B, no appointment scheduling.",
    servicesTitle: "Services",
    servicesText: "Choose modules based on your maturity and priorities.",
    services: [
      { t: "Medical Governance", s: "Clinical flows, standardization and coordination." },
      { t: "MSO Management", s: "End-to-end operations with SLA and executive rituals." },
      { t: "Intelligence & KPI", s: "Dashboards, audit and traceability for fast decisions." }
    ],
    scopeTitle: "End-to-end clinical scope",
    scopeText: "Modular coverage by care lines and acuity.",
    innovTitle: "Innovation & global benchmarks",
    innovText: "Modern practices to raise quality and efficiency.",
    roadmapTitle: "Pilot roadmap",
    roadmapText: "Phased rollout for fast and sustainable gains."
  },
  es: {
    nav: { about: "Sobre", services: "Gobernanza", scope: "Alcance Asistencial", innov: "Innovación", roadmap: "Roadmap" },
    heroTitle: "Excelencia operativa en salud corporativa",
    heroText:
      "Operación, estándares y KPI para entregar desempeño asistencial con seguridad y trazabilidad.",
    ctas: { contact: "Contacto", instagram: "Instagram" },
    aboutTitle: "Sobre RGR",
    aboutText:
      "Gestionamos operaciones médicas con gobernanza, calidad e inteligencia de datos. B2B corporativo, sin agendamiento.",
    servicesTitle: "Servicios",
    servicesText: "Elija módulos según su madurez y prioridades.",
    services: [
      { t: "Gobernanza Médica", s: "Flujos clínicos, estandarización y coordinación." },
      { t: "Gestión MSO", s: "Operación integral con SLA y rituales ejecutivos." },
      { t: "Inteligencia & KPI", s: "Paneles, auditoría y trazabilidad para decisiones rápidas." }
    ],
    scopeTitle: "Alcance asistencial de punta a punta",
    scopeText: "Cobertura modular por líneas de cuidado y criticidad.",
    innovTitle: "Innovación y benchmark internacional",
    innovText: "Prácticas modernas para elevar calidad y eficiencia.",
    roadmapTitle: "Roadmap (piloto)",
    roadmapText: "Implementación por fases para resultados rápidos y sostenibles."
  }
};

export default function Site({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  return (
    <>
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brand">
            <div className="brand__logo">
              <Image src="/assets/logo-rgr.jpeg" alt="RGR" width={42} height={42} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
            <a href="#inovacao">{t.nav.innov}</a>
            <a href="#roadmap">{t.nav.roadmap}</a>
          </nav>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a className="btn btn--ghost" href={lang === "pt" ? "/" : `/${lang}`}>PT</a>
            <a className="btn btn--ghost" href="/en">EN</a>
            <a className="btn btn--ghost" href="/es">ES</a>
            <a className="btn btn--primary" href="mailto:servicosmedicosrgr@gmail.com">{t.ctas.contact}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero__grid">
            <div>
              <h1 className="hero__title">{t.heroTitle}</h1>
              <p className="muted" style={{ fontSize: 16, lineHeight: 1.6 }}>{t.heroText}</p>
              <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
                <a className="btn btn--primary" href="#ops">Ops Briefs (IA)</a>
                <a className="btn" href="https://www.instagram.com/rgr.healthops/" target="_blank">{t.ctas.instagram}</a>
              </div>
            </div>

            <div className="hero__card">
              <div className="fine">Contato</div>
              <div style={{ fontWeight: 800, marginTop: 6 }}>servicosmedicosrgr@gmail.com</div>
              <p className="muted" style={{ marginTop: 10 }}>
                B2B corporativo • Governança • Operação • Qualidade • KPI
              </p>
              <div className="fine" style={{ marginTop: 10 }}>@rgr.healthops</div>
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
                  <h3>{x.t}</h3>
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
          </div>
        </section>

        <section className="section section--alt" id="inovacao">
          <div className="container">
            <h2 className="h2">{t.innovTitle}</h2>
            <p className="muted">{t.innovText}</p>
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="container">
            <h2 className="h2">{t.roadmapTitle}</h2>
            <p className="muted">{t.roadmapText}</p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="container">
            <Tips />
          </div>
        </section>

        <footer className="section">
          <div className="container fine">
            © RGR • Contato: servicosmedicosrgr@gmail.com • Instagram: @rgr.healthops
          </div>
        </footer>
      </main>
    </>
  );
}
