/**
 * Campo que ainda não tem informação real.
 * Aparece no site com a marcação "A preencher" para não passar despercebido.
 */
export interface Pending {
  pending: string;
}

export type Text = string | Pending;

export const pending = (hint: string): Pending => ({ pending: hint });

export const isPending = (value: Text): value is Pending => typeof value !== 'string';

/** Nível de uma categoria de skills. */
export type SkillLevel = 'pratica' | 'estudo';

/** Uma linha da seção de skills, como Back-end ou Segurança. */
export interface SkillCategory {
  title: string;
  skills: string[];
  level: SkillLevel;
}

export type ProjectStatus = 'em-producao' | 'concluido' | 'em-desenvolvimento' | 'em-breve';

export const statusLabel: Record<ProjectStatus, string> = {
  'em-producao': 'Em produção',
  concluido: 'Concluído',
  'em-desenvolvimento': 'Em desenvolvimento',
  'em-breve': 'Em breve',
};

export interface Project {
  /** Nome de pasta mostrado no `ls projetos/` do topo. Deixe de fora em projetos sem nome. */
  slug?: string;
  title: Text;
  /** Uma linha dizendo o que é o projeto. */
  description: Text;
  /** O que o projeto faz e como foi feito, em tópicos curtos. */
  points?: string[];
  techs: string[];
  status: ProjectStatus;
  /** Preencha só quando o link existir. Links ausentes não aparecem. */
  repo?: string;
  demo?: string;
  /** Guarda o projeto nos dados sem mostrar no site (ex.: enquanto não está bom o bastante). */
  hidden?: boolean;
}

export interface Milestone {
  /** Ex.: "Formação" ou "Experiência". */
  kind: string;
  title: Text;
  place: Text;
  period: Text;
  description?: Text;
  /** Atividades, em tópicos. */
  points?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}
