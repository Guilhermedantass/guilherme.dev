import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { skillCategories } from './data/skills';
import { education, experience } from './data/profile';
import { projects } from './data/projects';

describe('App', () => {
  async function render() {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  afterEach(() => {
    delete document.documentElement.dataset['theme'];
    localStorage.clear();
  });

  it('mostra o nome e todas as seções', async () => {
    const { el } = await render();
    expect(el.querySelector('h1')?.textContent).toContain('Guilherme Dantas');
    for (const id of ['sobre', 'trajetoria', 'skills', 'projetos', 'contato']) {
      expect(el.querySelector(`#${id}`)).toBeTruthy();
      expect(el.querySelector(`nav a[href="#${id}"]`)).toBeTruthy();
    }
  });

  it('liga cada pasta do "ls projetos/" ao seu projeto', async () => {
    const { el } = await render();
    const slugs = projects.flatMap((p) => (p.slug ? [p.slug] : []));
    for (const slug of slugs) {
      expect(el.querySelector(`.out a[href="#projeto-${slug}"]`)).toBeTruthy();
      expect(el.querySelector(`#projeto-${slug}`)).toBeTruthy();
    }
  });

  it('lista as skills por categoria, com segurança por último', async () => {
    const { el } = await render();
    const rows = el.querySelectorAll('#skills .rows > li');
    expect(rows.length).toBe(skillCategories.length);
    expect(rows[0].querySelector('h3')?.textContent).toContain('Back-end');
    expect(rows[rows.length - 1].querySelector('h3')?.textContent).toContain('Segurança');
  });

  it('mostra o status de cada projeto e só os links que existem', async () => {
    const { el } = await render();
    const items = el.querySelectorAll('#projetos .project');
    expect(items.length).toBe(projects.length);
    projects.forEach((project, i) => {
      expect(items[i].getAttribute('data-status')).toBe(project.status);
      expect(items[i].querySelectorAll('a').length).toBe(
        Number(!!project.repo) + Number(!!project.demo),
      );
    });
  });

  it('mostra trechos entre crases dos projetos como código', async () => {
    const { el } = await render();
    const points = el.querySelector('#projetos .points');
    expect(points?.querySelector('code')).toBeTruthy();
    expect(points?.textContent).not.toContain('`');
  });

  it('copia o e-mail do contato', async () => {
    const { fixture, el } = await render();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
    const button = el.querySelector<HTMLButtonElement>('#contato .copy')!;
    button.click();
    await fixture.whenStable();
    expect(writeText).toHaveBeenCalledWith('guilhermedantas.dev@gmail.com');
    expect(button.textContent).toContain('Copiado');
  });

  it('alterna o tema e grava a escolha', async () => {
    const { fixture, el } = await render();
    document.documentElement.dataset['theme'] = 'escuro';
    el.querySelector<HTMLButtonElement>('app-theme-toggle button')!.click();
    await fixture.whenStable();
    expect(document.documentElement.dataset['theme']).toBe('claro');
    expect(localStorage.getItem('tema')).toBe('claro');
  });

  it('mostra experiência e formação na trajetória', async () => {
    const { el } = await render();
    const items = el.querySelectorAll('#trajetoria .timeline > li');
    expect(items.length).toBe(experience.length + education.length);
    expect(el.querySelector('#trajetoria')?.textContent).toContain("L'auto Cargo");
  });
});
