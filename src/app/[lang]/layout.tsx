import { ReactNode } from "react";
import { normalizeLang, Lang } from "@/lib/i18n";
import "@/app/globals.css";

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const lang = normalizeLang(params.lang) as Lang;

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
