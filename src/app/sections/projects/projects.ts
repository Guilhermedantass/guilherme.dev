import { ChangeDetectionStrategy, Component } from '@angular/core';
import { statusLabel } from '../../data/models';
import { projects } from '../../data/projects';
import { TextField } from '../../shared/text';

@Component({
  selector: 'app-projects',
  imports: [TextField],
  template: `
    <ul class="list">
      @for (project of projects; track $index) {
        <li
          class="project"
          [id]="project.slug ? 'projeto-' + project.slug : null"
          [attr.data-status]="project.status"
        >
          <div class="head mono">
            <span class="folder">{{ project.slug ? project.slug + '/' : '…/' }}</span>
            <span class="status">{{ statusLabel[project.status] }}</span>
          </div>
          <h3><app-text [value]="project.title" /></h3>
          <p class="description"><app-text [value]="project.description" /></p>
          @if (project.points?.length) {
            <ul class="points">
              @for (point of project.points; track $index) {
                <li [innerHTML]="withCode(point)"></li>
              }
            </ul>
          }
          @if (project.techs.length) {
            <p class="stack mono">
              <span class="visually-hidden">Tecnologias: </span>{{ project.techs.join(', ') }}
            </p>
          }
          @if (project.repo || project.demo) {
            <p class="links">
              @if (project.demo) {
                <a [href]="project.demo" target="_blank" rel="noopener">Ver demonstração</a>
              }
              @if (project.repo) {
                <a [href]="project.repo" target="_blank" rel="noopener">Ver código no GitHub</a>
              }
            </p>
          }
        </li>
      }
    </ul>
  `,
  styles: `
    .list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;

      @media (max-width: 48rem) {
        grid-template-columns: 1fr;
      }
    }

    // Com um número ímpar de projetos, o primeiro ocupa a largura toda,
    // para nenhum cartão ficar sozinho na última linha.
    .project:first-child:nth-last-child(odd) {
      grid-column: 1 / -1;
    }

    .project {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      padding: clamp(1.25rem, 3vw, 1.75rem);
      border: 1px solid var(--line);
      border-radius: 8px;
      background: var(--surface);
      scroll-margin-top: 2rem;
      transition: border-color 150ms ease;

      &:hover,
      &:target {
        border-color: var(--muted);
      }
    }

    [data-status='em-breve'] {
      border-style: dashed;
      background: transparent;
    }

    .head {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0.25rem 1rem;
      color: var(--muted);
    }

    .status {
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    [data-status='em-desenvolvimento'] .status {
      color: var(--accent);
    }

    // Em produção: o status mais forte, com um ponto de "no ar".
    [data-status='em-producao'] .status {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      color: var(--text);

      &::before {
        content: '';
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        background: var(--accent);
      }
    }

    h3 {
      margin-top: 0.4rem;
      font-size: var(--fs-h3);
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.25;
    }

    .description {
      color: var(--text);
    }

    .points {
      display: grid;
      gap: 0.35rem;
      color: var(--muted);
      font-size: var(--fs-small);

      li {
        position: relative;
        padding-left: 1.1rem;

        &::before {
          content: '-';
          position: absolute;
          left: 0;
          color: var(--faint);
          font-family: var(--mono);
        }
      }
    }

    .stack {
      margin-top: auto;
      padding-top: 0.6rem;
      color: var(--muted);
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem 1.25rem;
      font-size: var(--fs-small);
      font-weight: 500;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly projects = projects;
  protected readonly statusLabel = statusLabel;

  /**
   * Monta o HTML de um tópico: trechos entre crases viram <code>.
   * Todo o texto é escapado antes, então nada além de <code> entra na página.
   */
  protected withCode(point: string): string {
    return point
      .split('`')
      .map((text, i) => (i % 2 === 1 ? `<code>${escapeHtml(text)}</code>` : escapeHtml(text)))
      .join('');
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
