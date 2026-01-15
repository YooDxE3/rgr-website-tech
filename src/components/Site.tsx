import Image from "next/image";
import Tips from "./Tips";
import { Lang } from "../[lang]/page";

const copy = {
  pt: {
    heroTitle:
      "Operação, padrões e indicadores para serviços de saúde mais eficientes.",
    heroSubtitle:
      "A RGR é uma MSO que estrutura e sustenta a gestão de serviços de saúde.",
    management: "MSO • Gestão em Saúde",
    contact: "Contato",
  },
  en: {
    heroTitle:
      "Operations, standards and indicators for more efficient healthcare services.",
    heroSubtitle:
      "RGR is an MSO that structures and sustains healthcare service management.",
    management: "MSO • Health Management",
    contact: "Contact",
  },
  es: {
    heroTitle:
      "Operación, estándares e indicadores para servicios de salud más eficientes.",
    heroSubtitle:
      "RGR es una MSO que estructura y sostiene la gestión de servicios de salud.",
    management: "MSO • Gestión en Salud",
    contact: "Contacto",
  },
};

export default function Site({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href={`/${lang}`}>
            <Image
              src="/assets/logo-rgr.jpeg"
              alt="RGR"
              width={44}
              height={44}
            />
            <div className="brand__text">
              <strong>RGR</strong>
              <span>{t.management}</span>
            </div>
          </a>

          <nav className="nav">
            <a href="#sobre">Sobre</a>
            <a href="#inovacao">Inovação</a>
            <a href="#contato">{t.contact}</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroSubtitle}</p>
          </div>
        </section>

        <section id="inovacao" className="section section--alt">
          <div className="container">
            <h2>Inovação e benchmark internacional</h2>
            <p className="muted">
              Práticas modernas para elevar performance clínica e eficiência operacional.
            </p>

            <div className="grid3">
              <div className="card">
                <h3>Staffing preditivo</h3>
                <p className="muted">
                  Análise de dados para prever picos de demanda e ajustar escalas.
                </p>
              </div>
              <div className="card">
                <h3>Value-Based Care</h3>
                <p className="muted">
                  Foco em valor, qualidade e desfecho assistencial.
                </p>
              </div>
              <div className="card">
                <h3>Hospital-at-Home Ops</h3>
                <p className="muted">
                  Modelos de alta com acompanhamento domiciliar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="dicas" className="section">
          <div className="container">
            <h2>Dicas rápidas de saúde</h2>
            <Tips />
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} RGR
          </div>
        </footer>
      </main>
    </>
  );
}
