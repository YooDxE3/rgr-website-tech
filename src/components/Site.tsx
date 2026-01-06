import Image from "next/image";
import Tips from "./Tips";

type Lang = "pt" | "en" | "es";

export default function Site({ lang }: { lang: Lang }) {
  // foco: MSO B2B (PT como principal; EN/ES você pode traduzir depois)
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
      <header className="topbar">
        <div className="container topbarInner">
          <div className="brand">
            <div className="brandLogo">
              <Image
                src="/assets/logo-rgr.jpeg"
                alt="RGR"
                width={42}
                height={42}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="brandName">RGR</div>
              <div className="brandTag">MSO • Governança • Operação • Qualidade • KPI</div>
            </div>
          </div>

          <nav className="nav">
            <a href={`${langPrefix}#sobre`}>Sobre</a>
            <a href={`${langPrefix}#servicos`}>Serviços</a>
            <a href={`${langPrefix}#governanca`}>Governança Médica</a>
            <a href={`${langPrefix}#desafios`}>Desafios</a>
            <a href={`${langPrefix}#escopo`}>Escopo</a>
            <a href={`${langPrefix}#roadmap`}>Roadmap</a>
            <a href={`${langPrefix}#dicas`}>Dicas</a>
            <a href={`${langPrefix}#contato`}>Contato</a>
          </nav>

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a className="btn btnGhost" href="/">PT</a>
            <a className="btn btnGhost" href="/en">EN</a>
            <a className="btn btnGhost" href="/es">ES</a>
            <a className="btn btnPrimary" href="mailto:servicosmedicosrgr@gmail.com">Contato</a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="container heroGrid">
            <div>
              <h1 className="heroTitle">{title}</h1>
              <p className="muted" style={{ fontSize: 16 }}>{subtitle}</p>

              <div className="pillRow">
                <span className="pill"><strong>MSO</strong> B2B corporativo</span>
                <span className="pill"><strong>SLA</strong> testável</span>
                <span className="pill"><strong>KPI</strong> executivos</span>
                <span className="pill"><strong>Qualidade</strong> + Auditoria</span>
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
                <a className="btn btnPrimary" href="#contato">Falar com a RGR</a>
                <a className="btn" href="https://www.instagram.com/rgr.healthops/" target="_blank">Instagram</a>
              </div>

              <div className="list">
                <div className="li">
                  <div className="dot" />
                  <div className="muted">Sem agendamento de consultas. Foco total em gestão e operação de serviços de saúde.</div>
                </div>
                <div className="li">
                  <div className="dot" />
                  <div className="muted">Padronização, rituais de gestão, auditoria e trilha de evidência.</div>
                </div>
                <div className="li">
                  <div className="dot" />
                  <div className="muted">Conteúdo educativo de saúde atualizado automaticamente a cada 48h (dicas rápidas).</div>
                </div>
              </div>
            </div>

            <div className="heroBox">
              <div className="fine">Resumo executivo</div>
              <div className="hr" />
              <div className="grid2">
                <div className="card cardSoft">
                  <div className="kpi"><strong>SLA</strong><span>Tempo-resposta</span></div>
                  <div className="fine">gatilhos + acionamento + auditoria</div>
                </div>
                <div className="card cardSoft">
                  <div className="kpi"><strong>KPI</strong><span>Qualidade</span></div>
                  <div className="fine">indicadores + trilha de evidência</div>
                </div>
                <div className="card cardSoft">
                  <div className="kpi"><strong>Ops</strong><span>Escala</span></div>
                  <div className="fine">modelo D-5 + contingência</div>
                </div>
                <div className="card cardSoft">
                  <div className="kpi"><strong>MSO</strong><span>Execução</span></div>
                  <div className="fine">rotina + previsibilidade + entrega</div>
                </div>
              </div>

              <div className="hr" />
              <div className="fine">Contato</div>
              <div style={{ fontWeight: 900, marginTop: 6 }}>servicosmedicosrgr@gmail.com</div>
              <div className="fine" style={{ marginTop: 6 }}>@rgr.healthops</div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section" id="sobre">
          <div className="container">
            <h2 className="h2">Sobre a RGR</h2>
            <p className="muted">
              A RGR é uma <strong>MSO</strong> dedicada à <strong>gestão de serviços de saúde com excelência</strong>.
              Atuamos na estruturação e operação assistencial com governança médica, qualidade, compliance e indicadores,
              entregando previsibilidade e performance para unidades e redes.
            </p>

            <div className="grid3" style={{ marginTop: 14 }}>
              <div className="card">
                <h3>Governança</h3>
                <p className="muted">Regras claras, responsabilidades, comitês e tomada de decisão padronizada.</p>
              </div>
              <div className="card">
                <h3>Operação</h3>
                <p className="muted">Rotina assistencial, escala, contingência e execução com SLA real.</p>
              </div>
              <div className="card">
                <h3>Indicadores</h3>
                <p className="muted">KPI executivos, auditoria, rastreabilidade e trilha de evidência.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="section sectionAlt" id="servicos">
          <div className="container">
            <h2 className="h2">Serviços</h2>
            <p className="muted">Módulos que se conectam e escalam conforme sua operação.</p>

            <div className="grid3" style={{ marginTop: 14 }}>
              <div className="card">
                <h3>Gestão MSO</h3>
                <p className="muted">Operação ponta a ponta, rotina e governança de execução.</p>
              </div>
              <div className="card">
                <h3>Qualidade & Segurança</h3>
                <p className="muted">Auditoria, incidentes, melhoria contínua e evidências.</p>
              </div>
              <div className="card">
                <h3>Inteligência & KPI</h3>
                <p className="muted">Painéis executivos por unidade/linha e desempenho assistencial.</p>
              </div>
              <div className="card">
                <h3>Gestão de Escala</h3>
                <p className="muted">Modelo D-5, banco reserva, substituição e métricas de cobertura.</p>
              </div>
              <div className="card">
                <h3>SLA & Compliance</h3>
                <p className="muted">SLA testável: gatilhos, auditoria e relatórios para diretoria.</p>
              </div>
              <div className="card">
                <h3>Protocolos & Fluxos</h3>
                <p className="muted">Linhas de cuidado, padronização e adesão com evidência.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GOVERNANÇA MÉDICA */}
        <section className="section" id="governanca">
          <div className="container">
            <h2 className="h2">Governança Médica</h2>
            <p className="muted">
              Governança é o sistema que garante consistência, segurança e previsibilidade. A RGR estrutura e mantém:
              comitês, protocolos, fluxos críticos, trilha de auditoria e rituais de gestão orientados a KPI.
            </p>

            <div className="grid2" style={{ marginTop: 14 }}>
              <div className="card">
                <h3>Padronização que funciona</h3>
                <p className="muted">Protocolos e fluxos aplicáveis ao chão da operação, com adesão monitorada.</p>
              </div>
              <div className="card">
                <h3>Rituais executivos</h3>
                <p className="muted">Reuniões e rotinas de gestão que garantem decisão rápida e execução.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DESAFIOS */}
        <section className="section sectionAlt" id="desafios">
          <div className="container">
            <h2 className="h2">Desafios críticos e nossas soluções</h2>
            <p className="muted">Pontos onde operações travam — e como destravar com método.</p>

            <div className="grid3" style={{ marginTop: 14 }}>
              <div className="card">
                <div className="fine">Desafio</div>
                <h3>Escala instável</h3>
                <p className="muted">Faltas, trocas e improviso derrubam SLA e aumentam risco.</p>
                <div className="hr" />
                <div className="fine">Solução RGR</div>
                <p className="muted">Modelo D-5 + banco reserva + KPI de cobertura e reposição.</p>
              </div>

              <div className="card">
                <div className="fine">Desafio</div>
                <h3>Indicadores “decorativos”</h3>
                <p className="muted">Mede-se muito e decide-se pouco.</p>
                <div className="hr" />
                <div className="fine">Solução RGR</div>
                <p className="muted">KPI executivos com gatilhos, responsáveis e trilha de evidência.</p>
              </div>

              <div className="card">
                <div className="fine">Desafio</div>
                <h3>Qualidade sem rastreio</h3>
                <p className="muted">Sem auditoria real, não há melhoria contínua.</p>
                <div className="hr" />
                <div className="fine">Solução RGR</div>
                <p className="muted">Auditoria estruturada + incidentes + plano de ação monitorado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ESCOPO */}
        <section className="section" id="escopo">
          <div className="container">
            <h2 className="h2">Escopo assistencial de ponta a ponta</h2>
            <p className="muted">Cobertura modular conforme criticidade e linha de cuidado.</p>

            <div className="grid2" style={{ marginTop: 14 }}>
              <div className="card">
                <h3>UPA / Emergência</h3>
                <p className="muted">Fluxos de porta, protocolos, contingência e governança assistencial.</p>
              </div>
              <div className="card">
                <h3>Enfermaria</h3>
                <p className="muted">Rotina clínica, rounds, padronização e auditoria contínua.</p>
              </div>
              <div className="card">
                <h3>UTI / Críticos</h3>
                <p className="muted">Linhas de cuidado, protocolos e governança multiprofissional.</p>
              </div>
              <div className="card">
                <h3>Ambulatório corporativo</h3>
                <p className="muted">Operação e indicadores (sem agendamento de consultas no site).</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="section sectionAlt" id="roadmap">
          <div className="container">
            <h2 className="h2">Roadmap de implantação</h2>
            <p className="muted">Implantação por fases para ganho rápido e sustentado.</p>

            <div className="timeline">
              <div className="step">
                <div className="stepNum">Semana 1</div>
                <div className="card">
                  <h3>Diagnóstico + desenho</h3>
                  <p className="muted">Mapeamento, gaps, riscos e plano de execução.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepNum">Semana 2</div>
                <div className="card">
                  <h3>Governança + rituais</h3>
                  <p className="muted">SLA, responsabilidades, comitês e rotinas executivas.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepNum">Semana 3</div>
                <div className="card">
                  <h3>Operação + escala</h3>
                  <p className="muted">Modelo D-5, contingência, processos e metas.</p>
                </div>
              </div>

              <div className="step">
                <div className="stepNum">Semana 4</div>
                <div className="card">
                  <h3>KPI + auditoria</h3>
                  <p className="muted">Dashboard, trilha de evidência e melhoria contínua.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DICAS 48H */}
        <section className="section" id="dicas">
          <div className="container">
            <Tips />
          </div>
        </section>

        {/* CONTATO */}
        <section className="section sectionAlt" id="contato">
          <div className="container">
            <h2 className="h2">Contato</h2>
            <p className="muted">
              Vamos conversar sobre a sua operação (B2B). Envie uma mensagem e descreva sua necessidade.
            </p>

            <div className="grid2" style={{ marginTop: 14 }}>
              <div className="card">
                <h3>E-mail</h3>
                <p className="muted">servicosmedicosrgr@gmail.com</p>
                <div style={{ marginTop: 12 }}>
                  <a className="btn btnPrimary" href="mailto:servicosmedicosrgr@gmail.com">Enviar e-mail</a>
                </div>
              </div>
              <div className="card">
                <h3>Instagram</h3>
                <p className="muted">@rgr.healthops</p>
                <div style={{ marginTop: 12 }}>
                  <a className="btn" href="https://www.instagram.com/rgr.healthops/" target="_blank">Abrir Instagram</a>
                </div>
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
