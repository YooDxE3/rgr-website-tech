import Site from "../../components/Site";
import { Lang, langs, normalizeLang } from "../../lib/i18n";

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export default function LangPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang: Lang = normalizeLang(params.lang);

  return <Site lang={lang} />;
}
