import Site from "../../components/Site";

export type Lang = "pt" | "en" | "es";

export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }, { lang: "es" }];
}

export default function LangPage({
  params,
}: {
  params: { lang: Lang };
}) {
  const lang: Lang = ["pt", "en", "es"].includes(params.lang)
    ? params.lang
    : "pt";

  return (
    <html lang={lang === "pt" ? "pt-BR" : lang}>
      <body>
        <Site lang={lang} />
      </body>
    </html>
  );
}
