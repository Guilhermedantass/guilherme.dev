# guilherme.dev

Portfólio de Guilherme Dantas. Angular 22 (componentes standalone, zoneless, pré-renderizado), TypeScript e SCSS.

```bash
npm start        # desenvolvimento em http://localhost:4200
npm run build    # site estático em dist/guilherme-dev/browser
npm test         # testes (Vitest)
```

## Atualizar o conteúdo

Todo o texto fica em `src/app/data/`:

- `projects.ts`: projetos. `slug` é o nome de pasta que aparece no `ls projetos/` do topo; status `em-producao`, `concluido`, `em-desenvolvimento` ou `em-breve`; `hidden: true` guarda o projeto sem mostrar no site; `repo` e `demo` só aparecem quando preenchidos.
- `skills.ts`: uma linha por categoria (Back-end, Front-end, Dados, Automação, Deploy) e, por último, Segurança, marcada como `estudo`.
- `profile.ts`: nome, apresentação do topo, texto do Sobre, experiência (`experience`), formação (`education`), e-mail e redes.

Campos ainda sem informação usam `pending('dica')` e aparecem no site com a marcação **A preencher**.
Antes de publicar, procure por `pending(` e substitua todos.

A pasta `public/info/` (currículos) fica fora do build de propósito: veja `ignore` em `angular.json`.

## Estrutura

- `src/app/sections/`: uma pasta por seção (hero, about, trajectory, skills, projects, contact).
- `src/app/shared/theme-toggle.ts`: botão de tema claro/escuro (a escolha fica salva no navegador).
- `src/app/shared/text.ts`: exibe textos e marca os provisórios.
- `src/styles.scss`: as duas paletas (escuro: preto e laranja; claro: azul) e as fontes Chivo e Chivo Mono, auto-hospedadas.
- `src/index.html`, `public/robots.txt`, `public/sitemap.xml`: SEO (assumem o domínio https://guilherme.dev).

O build gera HTML estático pronto para qualquer hospedagem (GitHub Pages, Netlify, Vercel ou Nginx numa VPS).

## Deploy

O site é publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml`, a cada push na `main`.
Ele roda os testes, faz o build com o caminho certo (`/nome-do-repo/` no github.io ou `/` com domínio próprio) e publica.

Na primeira vez: no GitHub, abra **Settings → Pages** e escolha **Source: GitHub Actions**.
