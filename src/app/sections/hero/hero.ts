import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly profile = profile;
  /** Saída do `ls projetos/`: cada pasta leva ao projeto na página. */
  protected readonly folders = projects.flatMap((p) => (p.slug ? [p.slug] : []));
}
