import Image from "next/image";
import Tips from "./Tips";

type Lang = "pt" | "en" | "es";

export default function Site({ lang }: { lang: Lang }) {
  const isPT = lang === "pt";
  const langPrefix = lang === "pt" ? "" : `/${lang}`;

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
            <Image
              src="/assets/logo-rgr.jpeg"
              alt="RGR"
              width={44}
              height={44}
              className="logo"
            />
            <div className="brand__text">
              <strong>RGR</strong>
              <span>MSO • Governança • Operação • KPI</span>
            </div>
          </a>

          <nav className="nav">
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
              <h1>{title}</h1>
              <p className="lead">{subtitle}</p>

              <div className="cta">
                <a className="btn btn--primary" href="#contato">Falar com a RGR</a>
                <a className="btn btn--ghost" href="https://www.instagram.com/rgr.healthops/" target="_blank">
                  Instagram
                </a>
              </div>

              <div className="mini">
                <div className="mini__item">
                  <strong>MSO</strong>
                  <span>Gestão assistencial</span>
                </div>
                <div className="mini__item">
                  <strong>SLA</strong>
                  <span>Testável e auditável</span>
                </div>
                <div className="mini__item">
                  <strong>KPI</strong>
                  <span>Executivos</span>
                </div>
              </div>
            </div>

            <aside className="card">
              <h2>Resumo executivo</h2>
              <ul>
                <li>Governança médica estruturada</li>
                <li>Rotina assistencial com SLA</li>
                <li>Auditoria, indicadores e previsibilidade</li>
                <li>Modelo MSO full-service</li>
              </ul>
              <p className="fine">Contato: servicosmedicosrgr@gmail.com</p>
            </aside>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section" id="sobre">
          <div className="container">
            <h2>Sobre a RGR</h2>
            <p className="muted">
              A RGR é uma <strong>MSO</strong> dedicada à gestão de serviços de saúde com excelência operacional,
              governança médica, compliance e indicadores executivos.
            </p>

            <div className="grid3">
              <div className="card">
                <h3>Governança</h3>
                <p className="muted">Protocolos, comitês e tomada de decisão padronizada.</p>
              </div>
              <div className="card">
                <h3>Operação</h3>
                <p className="muted">Rotina assistencial, escala e contingência.</p>
              </div>
              <div className="card">
                <h3>Indicadores</h3>
                <p className="muted">KPI executivos com trilha de evidência.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="section section--alt" id="servicos">
          <div className="container">
            <h2>Serviços</h2>
            <div className="grid3">
              <div className="card">
                <h3>Gestão MSO</h3>
                <p className="muted">Operação ponta a ponta.</p>
              </div>
              <div className="card">
                <h3>Qualidade & Segurança</h3>
                <p className="muted">Auditoria, incidentes e melhoria contínua.</p>
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
            <h2>Contato</h2>
            <p className="muted">B2B corporativo. Sem agendamento de consultas.</p>

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
          <div className="container footer__inner">
            © RGR • MSO • Governança • Operação • Qualidade • KPI
          </div>
        </footer>
      </main>
    </>
  );
}
