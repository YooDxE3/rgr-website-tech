import Image from "next/image";
import Tips from "./Tips";

type Lang = "pt" | "en" | "es";

export default function Site({ lang }: { lang: Lang }) {
  const isPT = lang === "pt";

  const title = isPT
    ? "Operação, padrões e indicadores para serviços de saúde mais eficientes."
    : "Operation, standards and indicators for more efficient healthcare services.";

  const subtitle = isPT
    ? "A RGR é uma MSO (Managed Services Organization) que estrutura e sustenta a gestão de serviços de saúde: processos, SLAs, qualidade, dados e governança."
    : "RGR is an MSO (Managed Services Organization) that structures and sustains healthcare service management: processes, SLAs, quality, data and governance.";

  return (
    <>
      {/* TOPBAR */}
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href="#inicio" aria-label="Início">
            <Image
              src="/assets/logo-rgr.jpeg"
              className="logo"
              alt="Logo da RGR"
              width={44}
              height={44}
            />
            <div className="brand__text">
              <strong>RGR</strong>
              <span>{isPT ? "MSO • Gestão em Saúde" : "MSO • Health Management"}</span>
            </div>
          </a>

          <nav className="nav" aria-label="Menu">
            <a href="#sobre">Sobre</a>
            <a href="#governanca">Governança</a>
            <a href="#escopo">Escopo Assistencial</a>
            <a href="#inovacao">Inovação</a>
            <a href="#roadmap">Roadmap</a>
            <a className="btn" href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="container hero__grid">
            <div>
              <p className="kicker">Gestão com excelência em saúde corporativa</p>
              <h1 className="hero__title">{title}</h1>
              <p className="lead">{subtitle}</p>
              
              <div className="cta">
                <a className="btn btn--primary" href="#contato">Solicitar diagnóstico</a>
                <a className="btn btn--ghost" href="#servicos">Ver serviços</a>
              </div>

              <div className="mini">
                <div className="mini__item"><strong>Padronização</strong><span>protocolos e rotinas</span></div>
                <div className="mini__item"><strong>Indicadores</strong><span>KPI, SLA, custos</span></div>
                <div className="mini__item"><strong>Governança</strong><span>compliance e auditoria</span></div>
              </div>
            </div>

            <aside className="card">
              <h2>O que entregamos</h2>
              <ul>
                <li>Diagnóstico e plano por fases</li>
                <li>Processos (AS-IS/TO-BE) + POPs</li>
                <li>Painéis e ritos de gestão</li>
                <li>Qualidade, risco e melhoria contínua</li>
              </ul>
              <p className="fine">Implantação enxuta, com quick wins e sustentação mensal.</p>
            </aside>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section">
          <div className="container">
            <h2>Sobre a RGR</h2>
            <p className="muted">
              Atuamos na gestão e operação de serviços de saúde com foco em eficiência, segurança e experiência.
              Implementamos padrões que simplificam o dia a dia e aumentam previsibilidade.
            </p>

            <div className="grid3">
              <div className="card">
                <h3>Excelência operacional</h3>
                <p className="muted">Fluxos claros, responsabilidades definidas e rotina bem organizada.</p>
              </div>
              <div className="card">
                <h3>Gestão por dados</h3>
                <p className="muted">Indicadores que viram ação: metas, acompanhamento e melhoria.</p>
              </div>
              <div className="card">
                <h3>Qualidade & compliance</h3>
                <p className="muted">Documentação, auditoria e segurança assistencial.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="section section--alt">
          <div className="container">
            <h2>Serviços</h2>
            <p className="muted">Escolha módulos conforme sua maturidade e momento.</p>

            <div className="grid2">
              <div className="card">
                <h3>Estruturação de MSO</h3>
                <p className="muted">Governança, SLAs, RACI, protocolos e desenho de processos.</p>
              </div>
              <div className="card">
                <h3>Gestão de Prestadores</h3>
                <p className="muted">Scorecards, auditoria, metas e planos de ação com a rede.</p>
              </div>
              <div className="card">
                <h3>Qualidade & Segurança</h3>
                <p className="muted">Protocolos, gestão de incidentes e capacitação de equipes.</p>
              </div>
              <div className="card">
                <h3>Dados & BI</h3>
                <p className="muted">Dashboards executivos e rotina de governança de dados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GOVERNANÇA */}
        <section id="governanca" className="section">
          <div className="container">
            <h2>Governança Médica</h2>
            <p className="muted">
              Projeto executivo de eficiência operacional e gestão de performance para elevar padrão assistencial,
              reduzir variabilidade e dar previsibilidade à operação — com modelo MSO full-service.
            </p>

            <div className="grid3">
              <div className="card">
                <h3>Gestão MSO (Full-Service)</h3>
                <p className="muted">
                  Absorvemos a complexidade operacional: escala, contratos, documentação, indicadores e governança,
                  para que o cliente foque no desfecho clínico.
                </p>
              </div>
              <div className="card">
                <h3>Integração Assistencial</h3>
                <p className="muted">
                  Unificação de processos da porta de entrada (PA/UPA) à alta hospitalar (UTI/Enfermaria),
                  garantindo fluidez, segurança e redução do tempo de internação.
                </p>
              </div>
              <div className="card">
                <h3>Excelência Assistencial</h3>
                <p className="muted">
                  Muito além da gestão de profissionais: uma solução integrada de MSO 2.0 com protocolos,
                  supervisão e melhoria contínua baseada em dados.
                </p>
              </div>
            </div>

            <div className="note">
              Metas típicas de performance: <strong>99% cobertura mínima</strong>, <strong>reposição emergencial em até 2h</strong> e
              <strong>escala fechada D-5</strong>.
            </div>
          </div>
        </section>

        {/* DESAFIOS */}
        <section className="section section--alt">
          <div className="container">
            <h2>Desafios críticos e nossa solução</h2>
            <p className="muted">Um modelo de governança pensado para resolver gargalos frequentes de rede e operação.</p>

            <div className="grid2">
              <div className="card">
                <h3>Absenteísmo e gaps de escala</h3>
                <p className="muted">Banco regional com reposição emergencial em até 2 horas + backup de escala (D-5).</p>
              </div>
              <div className="card">
                <h3>Déficit de especialistas (RQE)</h3>
                <p className="muted">Corpo clínico especializado para todas as áreas críticas, com validação documental.</p>
              </div>
              <div className="card">
                <h3>Passivo e custo direto elevados</h3>
                <p className="muted">Modelo B2B com compliance jurídico e blindagem contratual, com SLAs claros.</p>
              </div>
              <div className="card">
                <h3>Falta de padronização clínica</h3>
                <p className="muted">Supervisão local ativa e protocolos padronizados (clínicos e operacionais).</p>
              </div>
            </div>
          </div>
        </section>

        {/* ESCOPO */}
        <section id="escopo" className="section">
          <div className="container">
            <h2>Escopo assistencial de ponta a ponta</h2>
            <p className="muted">Cobertura modular por linhas de cuidado, com integração e governança.</p>

            <div className="grid2">
              <div className="card">
                <h3>PA & UPA</h3>
                <p className="muted">Gestão ágil de pronto atendimento com protocolos de emergência.</p>
              </div>
              <div className="card">
                <h3>UTI & críticos</h3>
                <p className="muted">Especialistas em alta complexidade e adulto/neonatal com foco em desfecho.</p>
              </div>
              <div className="card">
                <h3>Ambulatório</h3>
                <p className="muted">Consultas em todas as especialidades com foco em continuidade assistencial.</p>
              </div>
              <div className="card">
                <h3>Enfermaria</h3>
                <p className="muted">Acompanhamento horizontal e gestão eficiente do giro de leitos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INOVAÇÃO */}
        <section id="inovacao" className="section section--alt">
          <div className="container">
            <h2>Inovação e benchmark internacional</h2>
            <p className="muted">Práticas modernas para elevar performance clínica e eficiência operacional.</p>

            <div className="grid3">
              <div className="card">
                <h3>Staffing preditivo</h3>
                <p className="muted">Análise de dados para prever picos de demanda e ajustar escalas proativamente.</p>
              </div>
              <div className="card">
                <h3>Value-Based Care</h3>
                <p className="muted">Foco em valor: qualidade e desfecho assistencial para reduzir desperdícios.</p>
              </div>
              <div className="card">
                <h3>Hospital-at-Home Ops</h3>
                <p className="muted">Suporte a modelos de alta com acompanhamento domiciliar quando aplicável.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="section">
          <div className="container">
            <h2>Roadmap de implantação (piloto)</h2>
            <p className="muted">Implantação por fases para ganhar velocidade sem perder controle.</p>

            <div className="grid2">
              <div className="card">
                <h3>Mês 1 — Diagnóstico</h3>
                <p className="muted">Auditoria de gaps assistenciais, mapeamento de riscos e desenho do modelo operacional.</p>
              </div>
              <div className="card">
                <h3>Mês 2–3 — Onboarding</h3>
                <p className="muted">Treinamento em protocolos do cliente, padronização e início da rotina de gestão MSO.</p>
              </div>
              <div className="card">
                <h3>Mês 4 — Otimização</h3>
                <p className="muted">Avaliação de performance clínica, ajuste de indicadores e planos de ação.</p>
              </div>
              <div className="card">
                <h3>Mês 6 — Expansão</h3>
                <p className="muted">Roll-out por evidência de KPI e ROI, com governança e sustentação contínua.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DICAS */}
        <section id="dicas" className="section section--alt">
          <div className="container">
            <h2>Dicas rápidas de saúde</h2>
            <Tips />
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="section">
          <div className="container">
            <h2>Contato</h2>
            <p className="muted">Envie sua necessidade e retornaremos com um diagnóstico inicial.</p>
            <p className="muted">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:servicosmedicosrgr@gmail.com">servicosmedicosrgr@gmail.com</a>
            </p>

            <form className="card form">
              <div className="row">
                <div style={{ flex: 1 }}>
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" required placeholder="Seu nome" style={{ width: '100%' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="empresa">Empresa</label>
                  <input id="empresa" required placeholder="Nome da empresa" style={{ width: '100%' }} />
                </div>
              </div>

              <label htmlFor="mensagem" style={{ display: 'block', marginTop: '1rem' }}>Mensagem</label>
              <textarea id="mensagem" rows={4} required placeholder="Ex.: piloto, número de unidades, metas, dores" style={{ width: '100%' }}></textarea>

              <button className="btn btn--primary" type="submit" style={{ marginTop: '1rem' }}>Enviar</button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer__inner">
            <div className="foot">
              <Image src="/assets/logo-rgr.jpeg" alt="" className="logo logo--sm" width={30} height={30} />
              <div>
                <strong>RGR</strong>
                <p className="muted">Gestão de serviços de saúde com excelência.</p>
              </div>
            </div>
            <p className="fine">© {new Date().getFullYear()} RGR</p>
          </div>
        </footer>
      </main>
    </>
  );
}
