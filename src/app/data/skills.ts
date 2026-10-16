import { SkillCategory } from './models';

// Uma linha por categoria, na ordem em que aparecem. Desenvolvimento primeiro,
// segurança por último. Use level: 'estudo' para marcar uma linha como "estudando".
export const skillCategories: SkillCategory[] = [
  {
    title: 'Back-end',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA/Hibernate', 'APIs REST'],
    level: 'pratica',
  },
  {
    title: 'Front-end',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    level: 'pratica',
  },
  {
    title: 'Dados',
    skills: ['SQL Server', 'MariaDB', 'MySQL', 'Oracle (PL/SQL)', 'Oracle APEX', 'Power BI'],
    level: 'pratica',
  },
  {
    title: 'Automação',
    skills: ['Python', 'integração entre sistemas'],
    level: 'pratica',
  },
  {
    title: 'Deploy',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'VPS Linux'],
    level: 'pratica',
  },
  {
    title: 'Segurança',
    skills: [
      'Blue Team',
      'resposta a incidentes',
      'análise de vulnerabilidades',
      'OWASP Top 10',
      'MITRE ATT&CK',
    ],
    level: 'pratica',
  },
];
