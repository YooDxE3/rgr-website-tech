import "./globals.css";

export const metadata = {
  title: "RGR — Governança Médica & MSO",
  description: "B2B corporativo com automação e IA"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
