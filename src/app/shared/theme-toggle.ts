import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, afterNextRender, inject, signal } from '@angular/core';

type Theme = 'escuro' | 'claro';

/**
 * Alterna entre o tema escuro e o claro e grava a escolha.
 * Sem escolha gravada, o site segue o tema do sistema (script em index.html).
 */
@Component({
  selector: 'app-theme-toggle',
  template: `
    <button type="button" class="mono" (click)="toggle()">
      {{ theme() === 'escuro' ? 'modo claro' : 'modo escuro' }}
    </button>
  `,
  styles: `
    button {
      padding: 0.3rem 0.65rem;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: transparent;
      color: var(--muted);
      cursor: pointer;
      transition:
        color 120ms ease,
        border-color 120ms ease;

      &:hover {
        color: var(--text);
        border-color: var(--muted);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  private readonly doc = inject(DOCUMENT);
  protected readonly theme = signal<Theme>('escuro');

  constructor() {
    afterNextRender(() => this.theme.set(this.current()));
  }

  protected toggle(): void {
    const next: Theme = this.current() === 'escuro' ? 'claro' : 'escuro';
    this.doc.documentElement.dataset['theme'] = next;
    try {
      localStorage.setItem('tema', next);
    } catch {
      // Sem armazenamento (navegação privada): a troca vale só nesta visita.
    }
    this.theme.set(next);
  }

  private current(): Theme {
    const chosen = this.doc.documentElement.dataset['theme'];
    if (chosen === 'claro' || chosen === 'escuro') return chosen;
    return matchMedia('(prefers-color-scheme: light)').matches ? 'claro' : 'escuro';
  }
}
