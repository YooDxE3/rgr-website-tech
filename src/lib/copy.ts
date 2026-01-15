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
      standardization_sub: string;
      indicators: string;
      indicators_sub: string;
      governance: string;
      governance_sub: string;
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

  // Seção 'ops' removida daqui

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
        scope: "Escopo",
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
        standardization_sub: "protocolos e rotinas",
        indicators: "Indicadores",
        indicators_sub: "KPI, SLA, custos",
        governance: "Governança",
        governance_sub: "compliance e auditoria",
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
        "Atuamos na gestão e operação de serviços de saúde com foco em eficiência, segurança e experiência. Implementamos padrões que simplificam o dia a dia e aumentam previsibilidade.",
      cards: [
        { title: "Excelência operacional", description: "Fluxos claros, responsabilidades definidas e rotina bem organizada." },
        { title: "Gestão por dados", description: "Indicadores que viram ação: metas, acompanhamento e melhoria." },
        { title: "Qualidade & compliance", description: "Documentação, auditoria e segurança assistencial." },
      ],
    },
    services: {
      title: "Serviços",
      subtitle: "Escolha módulos conforme sua maturidade e momento.",
      cards: [
        { title: "Estruturação de MSO", description: "Governança, SLAs, RACI, protocolos e desenho de processos." },
        { title: "Gestão de Prestadores", description: "Scorecards, auditoria, metas e planos de ação com a rede." },
        { title: "Qualidade & Segurança", description: "Protocolos, gestão de incidentes e capacitação de equipes." },
        { title: "Dados & BI", description: "Dashboards executivos e rotina de governança de dados." },
      ],
    },
    governance: {
      title: "Governança Médica",
      description:
        "Projeto executivo de eficiência operacional e gestão de performance para elevar padrão assistencial, reduzir variabilidade e dar previsibilidade à operação — com modelo MSO full-service.",
      cards: [
        { title: "Gestão MSO (Full-Service)", description: "Absorvemos a complexidade operacional: escala, contratos, documentação, indicadores e governança." },
        { title: "Integração Assistencial", description: "Unificação de processos da porta de entrada à alta, garantindo fluidez e segurança." },
        { title: "Excelência Assistencial", description: "Solução integrada de MSO 2.0 com protocolos, supervisão e melhoria contínua." },
      ],
      note: "Metas típicas: 99% cobertura mínima, reposição emergencial em até 2h e escala fechada D-5.",
    },
    challenges: {
      title: "Desafios críticos e nossa solução",
      subtitle: "Um modelo de governança pensado para resolver gargalos frequentes de rede e operação.",
      cards: [
        { title: "Absenteísmo e gaps de escala", description: "Banco regional com reposição emergencial em até 2 horas + backup (D-5)." },
        { title: "Déficit de especialistas (RQE)", description: "Corpo clínico especializado com validação documental." },
        { title: "Passivo e custo direto elevados", description: "Modelo B2B com compliance jurídico, blindagem e SLAs claros." },
        { title: "Falta de padronização clínica", description: "Supervisão local ativa e protocolos padronizados." },
      ],
    },
    scope: {
      title: "Escopo assistencial de ponta a ponta",
      subtitle: "Cobertura modular por linhas de cuidado, com integração e governança.",
      cards: [
        { title: "PA & UPA", description: "Gestão ágil de pronto atendimento com protocolos de emergência." },
        { title: "UTI & críticos", description: "Especialistas em alta complexidade e adulto/neonatal com foco em desfecho." },
        { title: "Ambulatório", description: "Consultas em todas as especialidades com foco em continuidade." },
        { title: "Enfermaria", description: "Acompanhamento horizontal e gestão eficiente do giro de leitos." },
      ],
    },
    innovation: {
      title: "Inovação e benchmark",
      subtitle: "Práticas modernas para elevar performance clínica e eficiência operacional.",
      cards: [
        { title: "Staffing preditivo", description: "Análise de dados para prever picos de demanda e ajustar escalas." },
        { title: "Value-Based Care", description: "Foco em valor: qualidade e desfecho assistencial para reduzir desperdícios." },
        { title: "Hospital-at-Home Ops", description: "Suporte a modelos de alta com acompanhamento domiciliar." },
      ],
    },
    roadmap: {
      title: "Roadmap de implantação (piloto)",
      subtitle: "Implantação por fases para ganhar velocidade sem perder controle.",
      cards: [
        { title: "Mês 1 — Diagnóstico", description: "Auditoria de gaps, mapeamento de riscos e desenho do modelo." },
        { title: "Mês 2–3 — Onboarding", description: "Treinamento em protocolos, padronização e início da rotina MSO." },
        { title: "Mês 4 — Otimização", description: "Avaliação de performance clínica, ajuste de indicadores e planos." },
        { title: "Mês 6 — Expansão", description: "Roll-out por evidência de KPI e ROI, com governança contínua." },
      ],
    },
    // Seção 'ops' removida daqui
    tips: { title: "Dicas rápidas de saúde" },
    contact: {
      title: "Contato",
      subtitle: "Envie sua necessidade e retornaremos com um diagnóstico inicial.",
      emailLabel: "E-mail:",
      form: { name: "Nome", company: "Empresa", message: "Mensagem (Ex.: piloto, número de unidades, metas)", button: "Enviar" },
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
        scope: "Scope",
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
        standardization_sub: "protocols and routines",
        indicators: "Indicators",
        indicators_sub: "KPI, SLA, costs",
        governance: "Governance",
        governance_sub: "compliance and audit",
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
        "We manage and operate healthcare services focusing on efficiency, safety and experience. We implement standards that simplify daily routines and increase predictability.",
      cards: [
        { title: "Operational excellence", description: "Clear flows, defined responsibilities, and organized routines." },
        { title: "Data-driven management", description: "KPIs that turn into action: targets, monitoring, and improvement." },
        { title: "Quality & compliance", description: "Documentation, audit, and care safety." },
      ],
    },
    services: {
      title: "Services",
      subtitle: "Choose modules according to your maturity and moment.",
      cards: [
        { title: "MSO Structuring", description: "Governance, SLAs, RACI, protocols, and process design." },
        { title: "Provider Management", description: "Scorecards, audits, targets, and action plans with the network." },
        { title: "Quality & Safety", description: "Protocols, incident management, and team training." },
        { title: "Data & BI", description: "Executive dashboards and data governance routines." },
      ],
    },
    governance: {
      title: "Medical Governance",
      description:
        "Executive project for operational efficiency and performance management to raise care standards, reduce variability, and provide predictability — with a full-service MSO model.",
      cards: [
        { title: "MSO Management (Full-Service)", description: "We absorb operational complexity: staffing, contracts, documentation, indicators, and governance." },
        { title: "Care Integration", description: "Process unification from admission to discharge, ensuring flow and safety." },
        { title: "Clinical Excellence", description: "Integrated MSO 2.0 solution with protocols, supervision, and continuous improvement." },
      ],
      note: "Typical targets: 99% min coverage, emergency replacement within 2h, and D-5 closed schedules.",
    },
    challenges: {
      title: "Critical challenges & our solution",
      subtitle: "A governance model designed to solve frequent network and operational bottlenecks.",
      cards: [
        { title: "Absenteeism and gaps", description: "Regional bank with emergency replacement within 2 hours + backup (D-5)." },
        { title: "Specialist shortage (RQE)", description: "Specialized clinical staff with document validation." },
        { title: "High liabilities and direct costs", description: "B2B model with legal compliance, shielding, and clear SLAs." },
        { title: "Lack of clinical standards", description: "Active local supervision and standardized protocols." },
      ],
    },
    scope: {
      title: "End-to-end Care Scope",
      subtitle: "Modular coverage by care lines, with integration and governance.",
      cards: [
        { title: "ER & Urgent Care", description: "Agile emergency management with emergency protocols." },
        { title: "ICU & Critical Care", description: "High complexity specialists (adult/neonatal) focused on outcomes." },
        { title: "Outpatient", description: "Consultations in all specialties focusing on care continuity." },
        { title: "Ward", description: "Horizontal monitoring and efficient bed turnover management." },
      ],
    },
    innovation: {
      title: "Innovation and Benchmark",
      subtitle: "Modern practices to elevate clinical performance and operational efficiency.",
      cards: [
        { title: "Predictive Staffing", description: "Data analysis to predict demand peaks and adjust schedules proactively." },
        { title: "Value-Based Care", description: "Focus on value: quality and care outcomes to reduce waste." },
        { title: "Hospital-at-Home Ops", description: "Support for discharge models with home monitoring." },
      ],
    },
    roadmap: {
      title: "Implementation Roadmap (Pilot)",
      subtitle: "Phased implementation to gain speed without losing control.",
      cards: [
        { title: "Month 1 — Assessment", description: "Audit of care gaps, risk mapping, and operational model design." },
        { title: "Month 2–3 — Onboarding", description: "Training in client protocols, standardization, and start of MSO routine." },
        { title: "Month 4 — Optimization", description: "Clinical performance evaluation, indicator adjustment, and action plans." },
        { title: "Month 6 — Expansion", description: "Roll-out based on KPI and ROI evidence, with continuous governance." },
      ],
    },
    // Seção 'ops' removida daqui
    tips: { title: "Quick health tips" },
    contact: {
      title: "Contact",
      subtitle: "Send us your needs and we will return with an initial assessment.",
      emailLabel: "Email:",
      form: { name: "Name", company: "Company", message: "Message (Ex: pilot, number of units, goals)", button: "Send" },
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
        scope: "Alcance",
        innovation: "Innovación",
        roadmap: "Roadmap",
        contact: "Contacto",
      },
    },
    hero: {
      kicker: "Excelencia en gestión de salud corporativa",
      title: "Operaciones, estándares e indicadores para servicios de salud más eficientes.",
      subtitle:
        "RGR es una MSO (Managed Services Organization) que estructura y sostiene la gestión de servicios de salud: procesos, SLAs, calidad, datos y gobernanza.",
      ctaPrimary: "Solicitar diagnóstico",
      ctaSecondary: "Ver servicios",
      mini: {
        standardization: "Estandarización",
        standardization_sub: "protocolos y rutinas",
        indicators: "Indicadores",
        indicators_sub: "KPI, SLA, costos",
        governance: "Gobernanza",
        governance_sub: "compliance y auditoría",
      },
      delivery: {
        title: "Qué entregamos",
        items: [
          "Diagnóstico y plan por fases",
          "Procesos (AS-IS/TO-BE) + SOPs",
          "Paneles y rituales de gestión",
          "Calidad, riesgo y mejora continua",
        ],
        note: "Implementación ágil con quick wins y soporte mensual.",
      },
    },
    about: {
      title: "Sobre RGR",
      description:
        "Gestionamos servicios de salud con foco en eficiencia, seguridad y experiencia. Implementamos estándares que simplifican la rutina y aumentan la previsibilidad.",
      cards: [
        { title: "Excelencia operativa", description: "Flujos claros, responsabilidades definidas y rutina organizada." },
        { title: "Gestión por datos", description: "Indicadores que generan acción: metas, seguimiento y mejora." },
        { title: "Calidad y cumplimiento", description: "Documentación, auditoría y seguridad asistencial." },
      ],
    },
    services: {
      title: "Servicios",
      subtitle: "Elija módulos según su madurez y momento.",
      cards: [
        { title: "Estructuración MSO", description: "Gobernanza, SLAs, RACI, protocolos y diseño de procesos." },
        { title: "Gestión de Prestadores", description: "Scorecards, auditoría, metas y planes de acción con la red." },
        { title: "Calidad y Seguridad", description: "Protocolos, gestión de incidentes y capacitación de equipos." },
        { title: "Datos y BI", description: "Dashboards ejecutivos y rutina de gobernanza de datos." },
      ],
    },
    governance: {
      title: "Gobernanza Médica",
      description:
        "Proyecto ejecutivo de eficiencia operativa y gestión de desempeño para elevar estándares asistenciales, reducir variabilidad y dar previsibilidad — con modelo MSO full-service.",
      cards: [
        { title: "Gestión MSO (Full-Service)", description: "Absorbemos la complejidad operativa: escalas, contratos, documentación, indicadores y gobernanza." },
        { title: "Integración Asistencial", description: "Unificación de procesos desde la admisión al alta, garantizando fluidez y seguridad." },
        { title: "Excelencia Asistencial", description: "Solución integrada de MSO 2.0 con protocolos, supervisión y mejora continua." },
      ],
      note: "Metas típicas: 99% cobertura mínima, reposición en hasta 2h y escalas cerradas D-5.",
    },
    challenges: {
      title: "Desafíos críticos y nuestra solución",
      subtitle: "Un modelo de gobernanza diseñado para resolver cuellos de botella frecuentes de red y operación.",
      cards: [
        { title: "Ausentismo y gaps", description: "Banco regional con reposición de emergencia en hasta 2 horas + backup (D-5)." },
        { title: "Déficit de especialistas (RQE)", description: "Cuerpo clínico especializado con validación documental." },
        { title: "Pasivo y costos elevados", description: "Modelo B2B con compliance legal, blindaje y SLAs claros." },
        { title: "Falta de estandarización", description: "Supervisión local activa y protocolos estandarizados." },
      ],
    },
    scope: {
      title: "Alcance asistencial de punta a punta",
      subtitle: "Cobertura modular por líneas de cuidado, con integración y gobernanza.",
      cards: [
        { title: "Urgencias (PA/UPA)", description: "Gestión ágil de atención con protocolos de emergencia." },
        { title: "UCI y Críticos", description: "Especialistas en alta complejidad (adulto/neonatal) con foco en resultados." },
        { title: "Ambulatorio", description: "Consultas en todas las especialidades con foco en continuidad." },
        { title: "Hospitalización", description: "Seguimiento horizontal y gestión eficiente del giro de camas." },
      ],
    },
    innovation: {
      title: "Innovación y Benchmark",
      subtitle: "Prácticas modernas para elevar el desempeño clínico y la eficiencia operativa.",
      cards: [
        { title: "Staffing predictivo", description: "Análisis de datos para prever picos de demanda y ajustar escalas." },
        { title: "Value-Based Care", description: "Enfoque en valor: calidad y resultados asistenciales para reducir desperdicios." },
        { title: "Hospital-at-Home Ops", description: "Soporte a modelos de alta con seguimiento domiciliario." },
      ],
    },
    roadmap: {
      title: "Roadmap de implementación (Piloto)",
      subtitle: "Implementación por fases para ganar velocidad sin perder control.",
      cards: [
        { title: "Mes 1 — Diagnóstico", description: "Auditoría de gaps, mapeo de riesgos y diseño del modelo." },
        { title: "Mes 2–3 — Onboarding", description: "Entrenamiento en protocolos, estandarización e inicio de rutina MSO." },
        { title: "Mes 4 — Optimización", description: "Evaluación de desempeño clínico, ajuste de indicadores y planes." },
        { title: "Mes 6 — Expansión", description: "Roll-out por evidencia de KPI y ROI, con gobernanza continua." },
      ],
    },
    // Seção 'ops' removida daqui
    tips: { title: "Consejos rápidos de salud" },
    contact: {
      title: "Contacto",
      subtitle: "Envíe su necesidad y retornaremos con un diagnóstico inicial.",
      emailLabel: "Correo:",
      form: { name: "Nombre", company: "Empresa", message: "Mensaje (Ej: piloto, número de unidades, metas)", button: "Enviar" },
    },
    footer: { description: "Gestión de servicios de salud con excelencia." },
  },
};