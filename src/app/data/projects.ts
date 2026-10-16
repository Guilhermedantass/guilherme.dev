import { Project } from './models';

// Para adicionar um projeto, inclua um objeto nesta lista.
// `description`: uma linha dizendo o que é. `points`: de 3 a 5 tópicos técnicos
// (como foi feito); trechos entre crases, como `@login_required`, aparecem como código.
// Status: 'em-producao' | 'concluido' | 'em-desenvolvimento' | 'em-breve'.
// `hidden: true` guarda o projeto aqui sem mostrar no site.
// Deixe `repo` e `demo` de fora quando o link não existir.

const github = 'https://github.com/Guilhermedantass';

export const allProjects: Project[] = [
  {
    slug: 'refund',
    title: 'Refund: sistema de reembolso',
    description:
      'Sistema web de reembolso feito como freelance, de ponta a ponta, em produção para o cliente. O código é privado.',
    points: [
      'API REST em Java com Spring Boot, atendendo dois módulos: o formulário de solicitação dos clientes e o painel administrativo.',
      'Autenticação e autorização com Spring Security e JWT.',
      'Upload de imagens como comprovante, vinculadas a cada solicitação de reembolso.',
      'Front-end em Angular com roteamento dinâmico e proteção de rotas.',
      'Pipeline de CI/CD no GitHub Actions com deploy numa VPS Linux.',
    ],
    techs: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Angular', 'GitHub Actions'],
    status: 'em-producao',
  },
  {
    slug: 'ids-network',
    title: 'IDS: detecção de intrusões em rede',
    description:
      'Estudo de detecção de intrusões com machine learning sobre o dataset CIC‑IDS‑2017, com um notebook por tipo de ataque.',
    points: [
      'Limpeza com pandas e NumPy: valores infinitos, ausentes e duplicados, e rótulos codificados com `LabelEncoder`.',
      'Normalização com `RobustScaler` e separação entre treino e teste com `train_test_split`.',
      'Comparação de Decision Tree, Random Forest, XGBoost, `LinearSVC` e MLP em port scan, DDoS e ataques web.',
      'Teste de redução de dimensionalidade com PCA no cenário de DDoS.',
      'Avaliação com `classification_report`, matriz de confusão e `permutation_importance` para achar as features mais relevantes.',
    ],
    techs: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'Jupyter'],
    status: 'em-desenvolvimento',
    repo: `${github}/IDS-Network-Intrusion-Detection`,
  },
  {
    slug: 'sigaa-scraper',
    hidden: true,
    title: 'SIGAA Web Scraper',
    description:
      'Script em Python que entra no SIGAA da UFRN e extrai as notas de cada disciplina por unidade.',
    points: [
      'Classe `SIGAAWebScraper` que controla o Chrome em modo headless com Selenium WebDriver.',
      'Login preenchendo os campos do formulário, localizados com `By.NAME`.',
      'Navegação pelos menus do portal do discente via XPath até o relatório de notas.',
      'Tratamento do texto da tabela para separar a disciplina das notas de cada unidade.',
    ],
    techs: ['Python', 'Selenium'],
    status: 'concluido',
    repo: `${github}/SIGAAWebScraper`,
  },
  {
    slug: 'notelogic',
    hidden: true,
    title: 'NoteLogic',
    description: 'Aplicação web de tarefas em Django, em que cada usuário tem a própria lista.',
    points: [
      'Modelo `Task` ligado ao `User` do Django por chave estrangeira, com texto, data e status de conclusão.',
      'Cadastro, login e logout com o sistema de autenticação do Django.',
      'Rotas protegidas com o decorator `@login_required`.',
      'Views para criar, concluir, reabrir e excluir tarefas, com templates Django e banco SQLite.',
    ],
    techs: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
    status: 'concluido',
    repo: `${github}/NoteLogic`,
  },
];

/** Projetos que aparecem no site. */
export const projects = allProjects.filter((project) => !project.hidden);
