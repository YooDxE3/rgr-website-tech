export type Lang = "pt" | "en" | "es";

export const langs: Lang[] = ["pt", "en", "es"];

export function normalizeLang(lang: string): Lang {
  return langs.includes(lang as Lang) ? (lang as Lang) : "pt";
}
