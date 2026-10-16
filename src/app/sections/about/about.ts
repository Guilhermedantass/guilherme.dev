import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../../data/profile';

@Component({
  selector: 'app-about',
  template: `
    @for (paragraph of paragraphs; track $index) {
      <p>{{ paragraph }}</p>
    }
  `,
  styles: `
    :host {
      display: grid;
      gap: 1.25rem;
      max-width: var(--measure);
      font-size: clamp(1.0625rem, 1.6vw, 1.1875rem);
      line-height: 1.7;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly paragraphs = profile.about;
}
