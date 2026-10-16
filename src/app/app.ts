import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from './data/profile';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Trajectory } from './sections/trajectory/trajectory';
import { ThemeToggle } from './shared/theme-toggle';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Trajectory, Skills, Projects, Contact, ThemeToggle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly name = profile.name;
  protected readonly year = new Date().getFullYear();
  /** Ordem do menu e da página: do que o recrutador procura primeiro para o resto. */
  protected readonly sections = [
    { id: 'skills', label: 'skills' },
    { id: 'trajetoria', label: 'trajetória' },
    { id: 'projetos', label: 'projetos' },
    { id: 'sobre', label: 'sobre' },
    { id: 'contato', label: 'contato' },
  ];
}
