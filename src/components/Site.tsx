import Image from "next/image";
import Tips from "./Tips";

type Lang = "pt" | "en" | "es";

export default function Site({ lang }: { lang: Lang }) {
  const isPT = lang === "pt";

  const title = isPT
    ? "RGR — MSO • Gestão de Serviços de Saúde com Excelência"
    : "RGR — MSO • Healthcare Services Management Excellence";

  const subtitle = isPT
    ? "Operação assistencial, governança médica e indicadores executivos para elevar qualidade, reduzir risco e aumentar previsibilidade."
    : "Operations, medical governance and executive KPIs to improve quality, reduce risk and increase predictability.";

  return (
    <>
      {/* TOPBAR */}
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href="#inicio">
            <div className="brand__logo">
              <Image
                src="/assets/logo-rgr.jpeg"
                alt="RGR"
                width={44}
                height={44}
              />
            </div>
            <div className="brand__text">
              <div className="brand__name">RGR</div>
              <div className="brand__tag">
                MSO • Governança • Operação • KPI
              </div>
            </div>
          </a>

          <nav className="navlinks">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#governanca">Governança</a>
            <a href="#escopo">Escopo</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#dicas">Dicas</a>
            <a className="btn" href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="container hero__grid">
            <div>
              <span className="kicker">MSO • B2B Corporativo</span>
              <h1 className="hero__title">{title}</h1>
              <p className="hero__lead">{subtitle}</p>

              <div className="cta">
                <a className="btn btn--primary" href="#contato">
                  Falar com a RGR
                </a>
                <a
                  className="btn btn--ghost"
                  href="https://www.instagram.com/rgr.healthops/"
                  target="_blank"
                >
                  Instagram
                </a>
              </div>

              <div className="pills">
                <span className="pill"><b>MSO</b> Gestão assistencial</span>
                <span className="pill"><b>SLA</b> Testável</span>
                <span className="pill"><b>KPI</b> Executivos</span>
              </div>
            </div>

            <aside className="hero__panel">
              <h3>Resumo executivo</h3>
              <ul>
                <li>Governança médica estruturada</li>
                <li>Rotina assistencial com SLA</li>
                <li>Auditoria, indicadores e previsibilidade</li>
                <li>Modelo MSO full-service</li>
              </ul>
              <div className="fine">
                Contato: servicosmedicosrgr@gmail.com
              </div>
            </aside>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section" id="sobre">
          <div className="container">
            <h2 className="h2">Sobre a RGR</h2>
            <p className="muted">
              A RGR é uma <strong>MSO</strong> dedicada à gestão de serviços de
              saúde com excelência operacional, governança médica, compliance e
              indicadores executivos.
            </p>

            <div className="grid3">
              <div className="card">
                <h3>Governança</h3>
                <p className="muted">
                  Protocolos, comitês e tomada de decisão padronizada.
                </p>
              </div>
              <div className="card">
                <h3>Operação</h3>
                <p className="muted">
                  Rotina assistencial, escala e contingência.
                </p>
              </div>
              <div className="card">
                <h3>Indicadores</h3>
                <p className="muted">
                  KPI executivos com trilha de evidência.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="section section--alt" id="servicos">
          <div className="container">
            <h2 className="h2">Serviços</h2>
            <div className="grid3">
              <div className="card">
                <h3>Gestão MSO</h3>
                <p className="muted">Operação ponta a ponta.</p>
              </div>
              <div className="card">
                <h3>Qualidade & Segurança</h3>
                <p className="muted">
                  Auditoria, incidentes e melhoria contínua.
                </p>
              </div>
              <div className="card">
                <h3>Inteligência & KPI</h3>
                <p className="muted">Painéis executivos e SLA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DICAS */}
        <section className="section" id="dicas">
          <div className="container">
            <Tips />
          </div>
        </section>

        {/* CONTATO */}
        <section className="section section--alt" id="contato">
          <div className="container">
            <h2 className="h2">Contato</h2>
            <p className="muted">
              B2B corporativo. Sem agendamento de consultas.
            </p>

            <div className="grid2">
              <div className="card">
                <h3>E-mail</h3>
                <p className="muted">servicosmedicosrgr@gmail.com</p>
              </div>
              <div className="card">
                <h3>Instagram</h3>
                <p className="muted">@rgr.healthops</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            © RGR • MSO • Governança • Operação • Qualidade • KPI
          </div>
        </footer>
      </main>
    </>
  );
}
