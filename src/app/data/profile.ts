import { Milestone, SocialLink, pending } from './models';

export const profile = {
  name: 'Guilherme Dantas',
  /** Linhas de apresentação do topo. */
  headline: 'Desenvolvedor full stack: Java, Spring Boot e Angular.',
  subline:
    'Estagiário de TI e formando em Ciência e Tecnologia na UFRN, com base em infraestrutura e estudando segurança (Blue Team).',
  /** Texto do Sobre: começa pelo desenvolvimento e conta a trajetória a partir dele. */
  about: [
    'Desenvolvo aplicações web com Java, Spring Boot e Angular. Meu principal projeto é um sistema de reembolso que fiz como freelance e que está em produção: clientes enviam pedidos com comprovantes e a equipe analisa tudo num painel administrativo. Fiz o sistema de ponta a ponta, das APIs REST com Spring Security e JWT ao front-end em Angular, com deploy em VPS Linux e CI/CD no GitHub Actions.',
    'Comecei a programar profissionalmente no meu primeiro estágio, na CDA Distribuidora, em 2019, desenvolvendo aplicações internas com Oracle APEX e PL/SQL para gerenciar equipamentos. Foi lá também que aprendi a base de suporte, sistemas operacionais e redes.',
    "Hoje, como estagiário de TI na L'auto Cargo, uso programação para resolver problemas do dia a dia: escrevo automações em Python, integro sistemas e faço consultas em SQL Server e MariaDB. Um desses trabalhos foi um dashboard de SLA dos chamados, que ajudou a equipe a reduzir em 25% os chamados em backlog e pausados. Também atuo com suporte, redes e monitoramento com Zabbix e Grafana.",
    'Estou terminando Ciência e Tecnologia na UFRN, com ênfase em Tecnologia da Computação, e pretendo seguir para Engenharia da Computação. Também estudo cibersegurança, com foco em Blue Team.',
  ],
  email: 'guilhermedantas.dev@gmail.com',
  /** Disponibilidade mostrada no contato. Deixe vazio ('') para esconder. */
  availability: 'Aberto a novas oportunidades em desenvolvimento',
};

// Links públicos que constam no perfil do GitHub e no currículo.
export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Guilhermedantass', handle: 'Guilhermedantass' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/guilherme-dantas-864381278/',
    handle: 'guilherme-dantas',
  },
];

export const experience: Milestone[] = [
  {
    kind: 'Estágio',
    title: 'Estagiário de Tecnologia da Informação',
    place: "L'auto Cargo",
    period: '03/2025 – atual',
    points: [
      'Automações em Python e integração entre sistemas para reduzir atividades manuais.',
      'Dashboard de SLA dos chamados de TI, que contribuiu para reduzir em 25% os chamados em backlog e pausados.',
      'Consultas em SQL Server e MariaDB para relatórios gerenciais e painéis de indicadores.',
      'Suporte técnico, administração de usuários e acessos e sistemas corporativos em ambientes Microsoft.',
      'Suporte à infraestrutura de redes, switches e firewall, e monitoramento de ativos com Zabbix e Grafana.',
    ],
  },
  {
    kind: 'Freelance',
    title: 'Desenvolvedor Full Stack (freelance)',
    place: 'Refund: sistema de reembolso',
    period: '01/2026 – 05/2026',
    points: [
      'Sistema web completo, do zero ao deploy, hoje em produção.',
      'Formulário para clientes pedirem reembolso, com upload de imagens como comprovante.',
      'Painel administrativo para a equipe analisar e aprovar as solicitações.',
      'Back-end em Java com Spring Boot, com autenticação e autorização via Spring Security e JWT.',
      'Front-end em Angular, com rotas dinâmicas e protegidas.',
      'Deploy em VPS Linux com CI/CD no GitHub Actions.',
    ],
  },
  {
    kind: 'Estágio',
    title: 'Estagiário de Tecnologia da Informação',
    place: 'CDA Distribuidora',
    period: '03/2019 – 12/2020',
    points: [
      'Desenvolvimento de aplicações internas com Oracle APEX e PL/SQL para gerenciamento de equipamentos.',
      'Suporte técnico em ambientes Windows e Linux, com manutenção de computadores e equipamentos.',
      'Instalação e configuração de softwares e suporte à infraestrutura de redes LAN e WLAN.',
    ],
  },
];

export const education: Milestone[] = [
  {
    kind: 'Próxima etapa',
    title: 'Engenharia da Computação',
    place: 'UFRN',
    period: 'próxima etapa, após o bacharelado',
  },
  {
    kind: 'Bacharelado',
    title: 'Ciência e Tecnologia',
    place: 'UFRN',
    period: 'conclusão em 2026.2',
    description: 'Ênfase em Tecnologia da Computação.',
  },
];
