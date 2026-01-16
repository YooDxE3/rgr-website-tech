import "./globals.css";
import { Metadata } from "next";

// Define a URL base para o Google entender os caminhos das imagens e links
const baseUrl = "https://rgrsaude.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RGR — MSO • Gestão em Saúde",
    template: "%s | RGR Saúde",
  },
  description:
    "RGR é uma MSO (Managed Services Organization) focada em eficiência operacional, governança médica, qualidade e redução de custos em serviços de saúde.",
  keywords: ["MSO", "Gestão em Saúde", "Governança Clínica", "Eficiência Hospitalar", "Saúde Corporativa"],
  authors: [{ name: "RGR Saúde" }],
  creator: "RGR Saúde",
  
  // Configuração dos ícones (que já fizemos)
  icons: {
    icon: "/assets/logo-rgr.png",
    shortcut: "/assets/logo-rgr.png",
    apple: "/assets/logo-rgr.png",
  },

  // Configuração para Redes Sociais (Open Graph)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "RGR — MSO • Gestão em Saúde",
    description: "Operação, padrões e indicadores para serviços de saúde mais eficientes.",
    siteName: "RGR Saúde",
    images: [
      {
        url: "/assets/logo-rgr.png",
        width: 800,
        height: 800,
        alt: "Logo RGR Saúde",
      },
    ],
  },

  // Configuração para Google (SEO Multilíngue)
  alternates: {
    canonical: "/",
    languages: {
      "pt": "/pt",
      "en": "/en",
      "es": "/es",
    },
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}