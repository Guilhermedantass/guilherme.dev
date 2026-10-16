import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillCategories } from '../../data/skills';

@Component({
  selector: 'app-skills',
  template: `
    <ul class="rows">
      @for (category of categories; track category.title) {
        <li [attr.data-level]="category.level">
          <h3>
            {{ category.title }}
            @if (category.level === 'estudo') {
              <span class="tag mono">estudando</span>
            }
          </h3>
          <ul class="chips mono" [attr.aria-label]="'Skills de ' + category.title">
            @for (skill of category.skills; track skill) {
              <li>{{ skill }}</li>
            }
          </ul>
        </li>
      }
    </ul>
  `,
  styles: `
    .rows > li {
      display: grid;
      grid-template-columns: 11rem minmax(0, 1fr);
      align-items: baseline;
      gap: 0.6rem 2rem;
      padding-block: 1rem;
      border-bottom: 1px solid var(--line);

      &:first-child {
        padding-top: 0;
      }

      @media (max-width: 36rem) {
        grid-template-columns: 1fr;
      }
    }

    h3 {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0.25rem 0.6rem;
      font-size: 1.0625rem;
      font-weight: 600;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;

      li {
        padding: 0.25rem 0.6rem;
        border: 1px solid var(--line);
        border-radius: 4px;
        background: var(--surface);
        color: var(--text);
        font-size: 0.875rem;
        cursor: default;
        transition:
          transform 160ms ease,
          border-color 160ms ease,
          background-color 160ms ease,
          color 160ms ease;

        // Ao passar o mouse, a skill sobe e ganha a cor de destaque.
        &:hover {
          transform: translateY(-2px);
          border-color: var(--accent);
          background: var(--accent-soft);
          color: var(--accent);
        }
      }
    }

    // O nome da categoria acende junto com a skill.
    h3 {
      transition: color 160ms ease;
    }

    .rows > li:has(.chips li:hover) h3 {
      color: var(--accent);
    }

    @media (prefers-reduced-motion: reduce) {
      .chips li:hover {
        transform: none;
      }
    }

    // Segurança fecha a lista, com um respiro antes e marcada como estudo.
    .rows > li[data-level='estudo'] {
      margin-top: 1.25rem;
      border-bottom: 0;

      .chips li {
        border-style: dashed;
        background: transparent;
      }
    }

    .tag {
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 400;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly categories = skillCategories;
}
