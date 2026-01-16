import "./globals.css";
import { Metadata } from "next";

const baseUrl = "https://rgrsaude.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "RGR Saúde — Gestão Hospitalar e MSO",
    template: "%s | RGR Saúde",
  },
  description:
    "RGR é uma MSO (Managed Services Organization) focada em eficiência operacional, governança médica, qualidade e redução de custos em serviços de saúde.",
  keywords: ["MSO", "Gestão em Saúde", "Governança Clínica", "Eficiência Hospitalar", "Saúde Corporativa"],
  authors: [{ name: "RGR Saúde" }],
  creator: "RGR Saúde",
  
  // CORREÇÃO 1: Tudo atualizado para .png
  icons: {
    icon: "/assets/logo-rgr.png", 
    shortcut: "/assets/logo-rgr.png",
    apple: "/assets/logo-rgr.png",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "RGR — MSO • Gestão em Saúde",
    description: "Operação, padrões e indicadores para serviços de saúde mais eficientes.",
    siteName: "RGR Saúde",
    images: [
      {
        // CORREÇÃO 2: Extensão .png aqui também
        url: "/assets/logo-rgr.png", 
        width: 800,
        height: 800,
        alt: "Logo RGR Saúde",
      },
    ],
  },

  // CORREÇÃO 3 (CRUCIAL): 'canonical' removido para permitir a indexação de todas as línguas
  alternates: {
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "RGR Saúde",
    "url": "https://rgrsaude.com",
    // CORREÇÃO 4: JSON-LD apontando para a imagem correta .png
    "logo": "https://rgrsaude.com/assets/logo-rgr.png",
    "description": "MSO focada em eficiência operacional, governança médica e qualidade em serviços de saúde.",
    "email": "servicosmedicosrgr@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "sameAs": []
  };

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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}