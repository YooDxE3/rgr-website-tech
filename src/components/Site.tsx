import Image from "next/image";
import Tips from "./Tips";
import LanguageSwitcher from "./LanguageSwitcher";
import { copy } from "@/lib/copy";
import { Lang } from "@/lib/i18n";

export default function Site({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      {/* TOPBAR */}
      <header className="topbar">
        <div className="container topbar__inner">
          <a className="brand" href="#inicio">
            <img
              src="/assets/logo-rgr.png"
              alt="RGR"
              width="44"
              height="44"
              style={{ objectFit: "contain" }}
            />
            <div className="brand__text">
              <strong>RGR</strong>
              <span>{t.topbar.tagline}</span>
            </div>
          </a>

          <div style={{ display: "flex", alignItems: "center" }}>
            <nav className="nav">
              <a href="#sobre">{t.topbar.menu.about}</a>
              <a href="#governanca">{t.topbar.menu.governance}</a>
              <a href="#escopo">{t.topbar.menu.scope}</a>
              <a href="#inovacao">{t.topbar.menu.innovation}</a>
              <a href="#roadmap">{t.topbar.menu.roadmap}</a>
              <a className="btn" href="#contato">
                {t.topbar.menu.contact}
              </a>
            </nav>
            {/* Se você criou o LanguageSwitcher, ele fica aqui. Se não, pode remover esta linha */}
            <LanguageSwitcher current={lang} />
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="hero">
          <div className="container hero__grid">
            <div>
              <p className="kicker">{t.hero.kicker}</p>
              <h1>{t.hero.title}</h1>
              <p className="lead">{t.hero.subtitle}</p>

              <div className="cta">
                <a className="btn btn--primary" href="#contato">
                  {t.hero.ctaPrimary}
                </a>
                <a className="btn btn--ghost" href="#servicos">
                  {t.hero.ctaSecondary}
                </a>
              </div>

              <div className="mini">
                <div className="mini__item">
                  <strong>{t.hero.mini.standardization}</strong>
                  <span>{t.hero.mini.standardization_sub}</span>
                </div>
                <div className="mini__item">
                  <strong>{t.hero.mini.indicators}</strong>
                  <span>{t.hero.mini.indicators_sub}</span>
                </div>
                <div className="mini__item">
                  <strong>{t.hero.mini.governance}</strong>
                  <span>{t.hero.mini.governance_sub}</span>
                </div>
              </div>
            </div>

            <aside className="card">
              <h2>{t.hero.delivery.title}</h2>
              <ul>
                {t.hero.delivery.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="fine">{t.hero.delivery.note}</p>
            </aside>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="section">
          <div className="container">
            <h2>{t.about.title}</h2>
            <p className="muted">{t.about.description}</p>

            <div className="grid3">
              {t.about.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="section section--alt">
          <div className="container">
            <h2>{t.services.title}</h2>
            <p className="muted">{t.services.subtitle}</p>

            <div className="grid2">
              {t.services.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOVERNANÇA */}
        <section id="governanca" className="section">
          <div className="container">
            <h2>{t.governance.title}</h2>
            <p className="muted">{t.governance.description}</p>

            <div className="grid3">
              {t.governance.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="note">{t.governance.note}</div>
          </div>
        </section>

        {/* DESAFIOS (RESTAURADO) */}
        <section className="section section--alt">
          <div className="container">
            <h2>{t.challenges.title}</h2>
            <p className="muted">{t.challenges.subtitle}</p>

            <div className="grid2">
              {t.challenges.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESCOPO */}
        <section id="escopo" className="section">
          <div className="container">
            <h2>{t.scope.title}</h2>
            <p className="muted">{t.scope.subtitle}</p>

            <div className="grid2">
              {t.scope.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INOVAÇÃO */}
        <section id="inovacao" className="section section--alt">
          <div className="container">
            <h2>{t.innovation.title}</h2>
            <p className="muted">{t.innovation.subtitle}</p>

            <div className="grid3">
              {t.innovation.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="section">
          <div className="container">
            <h2>{t.roadmap.title}</h2>
            <p className="muted">{t.roadmap.subtitle}</p>

            <div className="grid2">
              {t.roadmap.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p className="muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DICAS */}
        <section id="dicas" className="section section--alt">
          <div className="container">
            <h2>{t.tips.title}</h2>
            <Tips lang={lang} />
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="section">
          <div className="container">
            <h2>{t.contact.title}</h2>
            <p className="muted">{t.contact.subtitle}</p>

            <form className="card form">
              <div className="row">
                <div style={{ flex: 1 }}>
                  <label htmlFor="nome">{t.contact.form.name}</label>
                  <input id="nome" required style={{ width: "100%" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="empresa">{t.contact.form.company}</label>
                  <input id="empresa" required style={{ width: "100%" }} />
                </div>
              </div>

              <label
                htmlFor="mensagem"
                style={{ display: "block", marginTop: "1rem" }}
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="mensagem"
                rows={4}
                required
                style={{ width: "100%" }}
              ></textarea>

              <button
                className="btn btn--primary"
                type="submit"
                style={{ marginTop: "1rem" }}
              >
                {t.contact.form.button}
              </button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer__inner">
            <div className="foot">
              {/* Tag HTML normal, sem otimização */}
              <img
                src="/assets/logo-rgr.png"
                alt="RGR"
                width="44"
                height="44"
                style={{ objectFit: "contain" }}
              />
              <div>
                <strong>RGR</strong>
                <p className="muted">{t.footer.description}</p>
              </div>
            </div>
            <p className="fine">© {new Date().getFullYear()} RGR</p>
          </div>
        </footer>
      </main>
    </>
  );
}
