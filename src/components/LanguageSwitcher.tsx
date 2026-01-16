import Link from "next/link";
import { Lang } from "@/lib/i18n";

export default function LanguageSwitcher({ current }: { current: Lang }) {
  const options: { label: string; value: Lang }[] = [
    { label: "PT", value: "pt" },
    { label: "EN", value: "en" },
    { label: "ES", value: "es" },
  ];

  return (
    <div
      className="lang-switcher"
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "1.5rem",
        fontSize: "0.85rem",
      }}
    >
      {options.map((opt, i) => (
        <span key={opt.value} style={{ display: "flex", alignItems: "center" }}>
          <Link
            href={`/${opt.value}`}
            style={{
              fontWeight: current === opt.value ? "bold" : "normal",
              opacity: current === opt.value ? 1 : 0.6,
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            {opt.label}
          </Link>
          {/* Barra separadora */}
          {i < options.length - 1 && (
            <span style={{ margin: "0 6px", opacity: 0.3 }}>|</span>
          )}
        </span>
      ))}
    </div>
  );
}
