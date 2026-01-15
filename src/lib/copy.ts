import { Lang } from "./i18n";

type Copy = {
  topbar: {
    tagline: string;
    menu: {
      about: string;
      governance: string;
      scope: string;
      innovation: string;
      roadmap: string;
      contact: string;
    };
  };

  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    mini: {
      standardization: string;
      indicators: string;
      governance: string;
    };
    delivery: {
      title: string;
      items: string[];
      note: string;
    };
  };

  about: {
    title: string;
    description: string;
    cards: { title: string; description: string }[];
  };

  services: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };

  governance: {
    title: string;
    description: string;
    cards: { title: string; description: string }[];
    note: string;
  };

  challenges: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };

  scope: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };

  innovation: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };

  roadmap: {
    title: string;
    subtitle: string;
    cards: { title: string; description: string }[];
  };

  ops: {
  title: string;
  subtitle: string;
  cards: {
    title: string;
    description: string;
  }[];
};


  tips: {
    title: string;
  };

  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    form: {
      name: string;
      company: string;
      message: string;
      button: string;
    };
  };

  footer: {
    description: string;
  };
};

export const copy: Record<Lang, Copy> = {
  /* ======================= PT ======================= */
  pt: {
    topbar: {
      tagline: "MSO • Gestão em Saúde",
      menu: {
        about: "Sobre",
        governance: "Governança",
        scope: "Escopo Assistencial",
        innovation: "Inovação",
        roadmap: "Roadmap",
        contact: "Contato",
      },
    },
    hero: {
      kicker: "Gestão com excelência em saúde corporativa",
      title: "Operação, padrões e indicadores para serviços de saúde mais eficientes.",
      subtitle:
        "A RGR é uma MSO (Managed Services Organization) que estrutura e sustenta a gestão de serviços de saúde: processos, SLAs, qualidade, dados e governança.",
      ctaPrimary: "Solicitar diagnóstico",
      ctaSecondary: "Ver serviços",
      mini: {
        standardization: "Padronização",
        indicators: "Indicadores",
        governance: "Governança",
      },
      delivery: {
        title: "O que entregamos",
        items: [
          "Diagnóstico e plano por fases",
          "Processos (AS-IS/TO-BE) + POPs",
          "Painéis e ritos de gestão",
          "Qualidade, risco e melhoria contínua",
        ],
        note: "Implantação enxuta, com quick wins e sustentação mensal.",
      },
    },
    about: {
      title: "Sobre a RGR",
      description:
        "Atuamos na gestão e operação de serviços de saúde com foco em eficiência, segurança e experiência.",
      cards: [
        { title: "Excelência operacional", description: "Rotinas claras e previsíveis." },
        { title: "Gestão por dados", description: "Indicadores que geram ação." },
        { title: "Qualidade & compliance", description: "Segurança e conformidade." },
      ],
    },
    services: {
      title: "Serviços",
      subtitle: "Módulos conforme sua maturidade.",
      cards: [
        { title: "Estruturação de MSO", description: "Governança e processos." },
        { title: "Gestão de Prestadores", description: "Controle e performance." },
        { title: "Qualidade & Segurança", description: "Protocolos e auditoria." },
        { title: "Dados & BI", description: "Dashboards executivos." },
      ],
    },
    governance: {
      title: "Governança Médica",
      description:
        "Modelo MSO full-service para elevar o padrão assistencial e reduzir variabilidade.",
      cards: [
        { title: "Gestão MSO", description: "Complexidade sob controle." },
        { title: "Integração Assistencial", description: "Fluxos contínuos." },
        { title: "Excelência Assistencial", description: "Qualidade baseada em dados." },
      ],
      note: "Reposição emergencial em até 2h e escala fechada D-5.",
    },
    challenges: {
      title: "Desafios críticos",
      subtitle: "Gargalos comuns resolvidos.",
      cards: [
        { title: "Absenteísmo", description: "Reposição rápida." },
        { title: "Déficit de especialistas", description: "Rede validada." },
        { title: "Custos elevados", description: "Modelo eficiente." },
        { title: "Falta de padrão", description: "Protocolos claros." },
      ],
    },
    scope: {
      title: "Escopo assistencial",
      subtitle: "Cobertura completa.",
      cards: [
        { title: "PA & UPA", description: "Emergência." },
        { title: "UTI", description: "Alta complexidade." },
        { title: "Ambulatório", description: "Continuidade." },
        { title: "Enfermaria", description: "Eficiência." },
      ],
    },
    innovation: {
      title: "Inovação",
      subtitle: "Benchmark internacional.",
      cards: [
        { title: "Staffing preditivo", description: "Escalas inteligentes." },
        { title: "Value-Based Care", description: "Foco em valor." },
        { title: "Hospital-at-Home", description: "Modelos modernos." },
      ],
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "Implantação por fases.",
      cards: [
        { title: "Diagnóstico", description: "Auditoria inicial." },
        { title: "Onboarding", description: "Padronização." },
        { title: "Otimização", description: "KPIs." },
        { title: "Expansão", description: "Escala." },
      ],
    },
    ops: {
  title: "Operação & Indicadores",
  subtitle: "Gestão prática orientada a dados.",
  cards: [
    {
      title: "KPIs Assistenciais",
      description: "Indicadores clínicos e operacionais acionáveis."
    },
    {
      title: "SLAs e Contratos",
      description: "Acordos claros com acompanhamento contínuo."
    },
    {
      title: "Rituais de Gestão",
      description: "Reuniões, cadência e planos de ação."
    }
  ]
},

    tips: { title: "Dicas rápidas de saúde" },
    contact: {
      title: "Contato",
      subtitle: "Fale conosco.",
      emailLabel: "E-mail",
      form: { name: "Nome", company: "Empresa", message: "Mensagem", button: "Enviar" },
    },
    footer: { description: "Gestão de serviços de saúde com excelência." },
  },

  /* ======================= EN ======================= */
  en: {
    topbar: {
      tagline: "MSO • Healthcare Management",
      menu: {
        about: "About",
        governance: "Governance",
        scope: "Care Scope",
        innovation: "Innovation",
        roadmap: "Roadmap",
        contact: "Contact",
      },
    },
    hero: {
      kicker: "Excellence in corporate healthcare management",
      title: "Operations, standards and indicators for more efficient healthcare services.",
      subtitle:
        "RGR is a Managed Services Organization (MSO) that structures and sustains healthcare operations through processes, SLAs, quality, data and governance.",
      ctaPrimary: "Request assessment",
      ctaSecondary: "View services",
      mini: {
        standardization: "Standardization",
        indicators: "Indicators",
        governance: "Governance",
      },
      delivery: {
        title: "What we deliver",
        items: [
          "Assessment and phased plan",
          "Processes (AS-IS/TO-BE) + SOPs",
          "Management rituals and dashboards",
          "Quality, risk and continuous improvement",
        ],
        note: "Lean implementation with quick wins and monthly support.",
      },
    },
    about: {
      title: "About RGR",
      description:
        "We manage and operate healthcare services focusing on efficiency, safety and experience.",
      cards: [
        { title: "Operational excellence", description: "Clear and predictable routines." },
        { title: "Data-driven management", description: "KPIs that drive action." },
        { title: "Quality & compliance", description: "Safety and regulatory adherence." },
      ],
    },
    services: {
      title: "Services",
      subtitle: "Modular solutions by maturity level.",
      cards: [
        { title: "MSO Structuring", description: "Governance and processes." },
        { title: "Provider Management", description: "Performance control." },
        { title: "Quality & Safety", description: "Protocols and audits." },
        { title: "Data & BI", description: "Executive dashboards." },
      ],
    },
    governance: {
      title: "Medical Governance",
      description:
        "Full-service MSO model to raise care standards and reduce variability.",
      cards: [
        { title: "MSO Management", description: "Operational complexity handled." },
        { title: "Care Integration", description: "Seamless patient flow." },
        { title: "Clinical Excellence", description: "Data-based quality." },
      ],
      note: "Emergency replacement within 2 hours and D-5 closed schedules.",
    },
    challenges: {
      title: "Critical challenges",
      subtitle: "Common bottlenecks solved.",
      cards: [
        { title: "Absenteeism", description: "Fast replacement." },
        { title: "Specialist shortage", description: "Validated network." },
        { title: "High costs", description: "Efficient model." },
        { title: "Lack of standards", description: "Clear protocols." },
      ],
    },
    scope: {
      title: "Care scope",
      subtitle: "End-to-end coverage.",
      cards: [
        { title: "ER & Urgent Care", description: "Emergency operations." },
        { title: "ICU", description: "High complexity." },
        { title: "Outpatient", description: "Continuity of care." },
        { title: "Ward", description: "Bed efficiency." },
      ],
    },
    innovation: {
      title: "Innovation",
      subtitle: "International benchmarks.",
      cards: [
        { title: "Predictive staffing", description: "Smart scheduling." },
        { title: "Value-Based Care", description: "Outcome-focused." },
        { title: "Hospital-at-Home", description: "Modern care models." },
      ],
    },
    roadmap: {
      title: "Implementation roadmap",
      subtitle: "Phased rollout.",
      cards: [
        { title: "Assessment", description: "Initial audit." },
        { title: "Onboarding", description: "Standardization." },
        { title: "Optimization", description: "KPI tuning." },
        { title: "Expansion", description: "Scalable growth." },
      ],
    },
    ops: {
  title: "Operations & Indicators",
  subtitle: "Practical, data-driven management.",
  cards: [
    {
      title: "Care KPIs",
      description: "Clinical and operational performance indicators."
    },
    {
      title: "SLAs & Contracts",
      description: "Clear agreements with continuous monitoring."
    },
    {
      title: "Management Rituals",
      description: "Cadence, meetings and action plans."
    }
  ]
},

    tips: { title: "Quick health tips" },
    contact: {
      title: "Contact",
      subtitle: "Get in touch.",
      emailLabel: "Email",
      form: { name: "Name", company: "Company", message: "Message", button: "Send" },
    },
    footer: { description: "Healthcare services management with excellence." },
  },

  /* ======================= ES ======================= */
  es: {
    topbar: {
      tagline: "MSO • Gestión en Salud",
      menu: {
        about: "Sobre",
        governance: "Gobernanza",
        scope: "Alcance Asistencial",
        innovation: "Innovación",
        roadmap: "Roadmap",
        contact: "Contacto",
      },
    },
    hero: {
      kicker: "Excelencia en gestión de salud corporativa",
      title: "Operaciones, estándares e indicadores para servicios de salud más eficientes.",
      subtitle:
        "RGR es una MSO (Managed Services Organization) que estructura y sostiene la gestión de servicios de salud.",
      ctaPrimary: "Solicitar diagnóstico",
      ctaSecondary: "Ver servicios",
      mini: {
        standardization: "Estandarización",
        indicators: "Indicadores",
        governance: "Gobernanza",
      },
      delivery: {
        title: "Qué entregamos",
        items: [
          "Diagnóstico y plan por fases",
          "Procesos (AS-IS/TO-BE) + SOPs",
          "Paneles y rituales de gestión",
          "Calidad, riesgo y mejora continua",
        ],
        note: "Implementación ágil con quick wins.",
      },
    },
    about: {
      title: "Sobre RGR",
      description:
        "Gestionamos servicios de salud con foco en eficiencia, seguridad y experiencia.",
      cards: [
        { title: "Excelencia operativa", description: "Rutinas claras." },
        { title: "Gestión por datos", description: "Indicadores accionables." },
        { title: "Calidad y cumplimiento", description: "Seguridad asistencial." },
      ],
    },
    services: {
      title: "Servicios",
      subtitle: "Soluciones modulares.",
      cards: [
        { title: "Estructuración MSO", description: "Gobernanza y procesos." },
        { title: "Gestión de Prestadores", description: "Control y desempeño." },
        { title: "Calidad y Seguridad", description: "Protocolos y auditoría." },
        { title: "Datos y BI", description: "Dashboards ejecutivos." },
      ],
    },
    governance: {
      title: "Gobernanza Médica",
      description:
        "Modelo MSO full-service para elevar estándares asistenciales.",
      cards: [
        { title: "Gestión MSO", description: "Complejidad bajo control." },
        { title: "Integración Asistencial", description: "Flujos continuos." },
        { title: "Excelencia Clínica", description: "Calidad basada en datos." },
      ],
      note: "Reposición en hasta 2 horas y escalas cerradas D-5.",
    },
    challenges: {
      title: "Desafíos críticos",
      subtitle: "Problemas comunes resueltos.",
      cards: [
        { title: "Ausentismo", description: "Reposición rápida." },
        { title: "Falta de especialistas", description: "Red validada." },
        { title: "Costos elevados", description: "Modelo eficiente." },
        { title: "Falta de estándares", description: "Protocolos claros." },
      ],
    },
    scope: {
      title: "Alcance asistencial",
      subtitle: "Cobertura completa.",
      cards: [
        { title: "Urgencias", description: "Emergencias." },
        { title: "UCI", description: "Alta complejidad." },
        { title: "Ambulatorio", description: "Continuidad." },
        { title: "Hospitalización", description: "Eficiencia." },
      ],
    },
    innovation: {
      title: "Innovación",
      subtitle: "Referencias internacionales.",
      cards: [
        { title: "Staffing predictivo", description: "Escalas inteligentes." },
        { title: "Value-Based Care", description: "Enfoque en valor." },
        { title: "Hospital en Casa", description: "Modelos modernos." },
      ],
    },
    roadmap: {
      title: "Roadmap",
      subtitle: "Implementación por fases.",
      cards: [
        { title: "Diagnóstico", description: "Auditoría inicial." },
        { title: "Onboarding", description: "Estandarización." },
        { title: "Optimización", description: "KPIs." },
        { title: "Expansión", description: "Escalabilidad." },
      ],
    },
    ops: {
  title: "Operación e Indicadores",
  subtitle: "Gestión práctica basada en datos.",
  cards: [
    {
      title: "KPIs Asistenciales",
      description: "Indicadores clínicos y operativos accionables."
    },
    {
      title: "SLAs y Contratos",
      description: "Acuerdos claros con seguimiento continuo."
    },
    {
      title: "Rituales de Gestión",
      description: "Cadencia, reuniones y planes de acción."
    }
  ]
},

    tips: { title: "Consejos rápidos de salud" },
    contact: {
      title: "Contacto",
      subtitle: "Contáctanos.",
      emailLabel: "Correo electrónico",
      form: { name: "Nombre", company: "Empresa", message: "Mensaje", button: "Enviar" },
    },
    footer: { description: "Gestión de servicios de salud con excelencia." },
  },
};
