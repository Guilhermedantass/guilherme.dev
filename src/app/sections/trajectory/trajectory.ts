import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Milestone } from '../../data/models';
import { education, experience } from '../../data/profile';
import { TextField } from '../../shared/text';

@Component({
  selector: 'app-trajectory',
  imports: [TextField, NgTemplateOutlet],
  template: `
    <div class="column">
      <h3 class="label mono">Experiência</h3>
      <ol class="timeline">
        @for (item of experience; track $index) {
          <ng-container *ngTemplateOutlet="entry; context: { $implicit: item }" />
        }
      </ol>
    </div>
    <div class="column">
      <h3 class="label mono">Formação</h3>
      <ol class="timeline">
        @for (item of education; track $index) {
          <ng-container *ngTemplateOutlet="entry; context: { $implicit: item }" />
        }
      </ol>
    </div>

    <ng-template #entry let-item>
      <li>
        <p class="period mono"><app-text [value]="item.period" /></p>
        <h4><app-text [value]="item.title" /></h4>
        <p class="place"><app-text [value]="item.place" /></p>
        @if (item.description) {
          <p class="description"><app-text [value]="item.description" /></p>
        }
        @if (item.points?.length) {
          <ul class="points">
            @for (point of item.points; track $index) {
              <li>{{ point }}</li>
            }
          </ul>
        }
      </li>
    </ng-template>
  `,
  styles: `
    :host {
      display: grid;
      grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
      gap: 3rem clamp(2rem, 6vw, 5rem);

      @media (max-width: 52rem) {
        grid-template-columns: 1fr;
      }
    }

    .label {
      margin-bottom: 1.25rem;
      color: var(--muted);
      font-weight: 400;
    }

    .timeline {
      display: grid;
      border-left: 1px solid var(--line);
    }

    .timeline > li {
      position: relative;
      display: grid;
      gap: 0.15rem;
      padding: 0 0 2rem 1.5rem;

      &:last-child {
        padding-bottom: 0;
      }

      // Marcador na linha do tempo.
      &::before {
        content: '';
        position: absolute;
        top: 0.3rem;
        left: -0.3rem;
        width: 0.55rem;
        height: 0.55rem;
        border: 2px solid var(--accent);
        border-radius: 50%;
        background: var(--bg);
      }
    }

    .period {
      color: var(--muted);
    }

    h4 {
      margin: 0.1rem 0 0;
      font-size: var(--fs-h3);
      font-weight: 700;
      letter-spacing: -0.015em;
      line-height: 1.25;
    }

    .place {
      font-weight: 500;
    }

    .description {
      margin-top: 0.35rem;
      color: var(--muted);
    }

    .points {
      display: grid;
      gap: 0.35rem;
      margin-top: 0.75rem;
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trajectory {
  protected readonly experience: Milestone[] = experience;
  protected readonly education: Milestone[] = education;
}
