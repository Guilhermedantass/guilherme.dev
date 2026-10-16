import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Text, isPending } from '../data/models';

/** Mostra um texto do conteúdo, ou a marcação "A preencher" se ele ainda for provisório. */
@Component({
  selector: 'app-text',
  template: `
    @let v = value();
    @if (pendingHint(); as hint) {
      <span class="pending" title="Campo provisório: substitua em src/app/data"
        >A preencher: {{ hint }}</span
      >
    } @else {
      {{ v }}
    }
  `,
  styles: `
    .pending {
      display: inline-block;
      padding: 0.1em 0.45em;
      border-radius: 4px;
      border: 1px dashed var(--pending);
      color: var(--pending);
      font-family: var(--mono);
      font-size: 0.8125rem;
      font-weight: 400;
      letter-spacing: 0;
      line-height: 1.5;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextField {
  readonly value = input.required<Text>();
  protected readonly pendingHint = computed(() => {
    const v = this.value();
    return isPending(v) ? v.pending : null;
  });
}
