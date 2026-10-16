import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { profile, socialLinks } from '../../data/profile';

type CopyState = 'idle' | 'copied' | 'failed';

@Component({
  selector: 'app-contact',
  template: `
    <div class="panel">
      <div class="lead">
        @if (availability) {
          <p class="status mono"><span class="dot" aria-hidden="true"></span>{{ availability }}</p>
        }
        <h3>Vamos conversar?</h3>
        <p class="intro">Para vagas, estágios ou projetos, me chame por e‑mail ou pelo LinkedIn.</p>
      </div>

      <div class="actions">
        <div class="email-row">
          <span class="email mono">{{ emailUser }}<wbr />&#64;{{ emailDomain }}</span>
          <button type="button" class="copy mono" (click)="copy()">
            {{ copyLabel[copyState()] }}
          </button>
        </div>
        <p class="visually-hidden" aria-live="polite">
          {{ copyState() === 'copied' ? 'E-mail copiado.' : '' }}
        </p>
        <a class="send" [href]="'mailto:' + email">Enviar e‑mail</a>

        <ul class="links mono">
          @for (link of links; track link.href) {
            <li>
              <span>{{ link.label }}</span>
              <a [href]="link.href" target="_blank" rel="noopener me">{{ link.handle }}</a>
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: `
    .panel {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 2rem clamp(2rem, 6vw, 4rem);
      padding: clamp(1.5rem, 4vw, 2.5rem);
      border: 1px solid var(--line);
      border-radius: 10px;
      background: var(--surface);

      @media (max-width: 52rem) {
        grid-template-columns: 1fr;
      }
    }

    .lead {
      display: grid;
      align-content: start;
      gap: 0.75rem;
    }

    .status {
      display: flex;
      align-items: flex-start;
      gap: 0.55rem;
      color: var(--muted);
    }

    .dot {
      flex: none;
      margin-top: 0.45em;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-soft);
    }

    h3 {
      font-size: var(--fs-h2);
      font-weight: 700;
      letter-spacing: -0.035em;
      line-height: 1.1;
    }

    .intro {
      max-width: 38ch;
      color: var(--muted);
    }

    .actions {
      display: grid;
      align-content: start;
      gap: 0.75rem;
    }

    // E-mail com botão de copiar, como um campo de texto.
    .email-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.4rem 0.4rem 0.9rem;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: var(--bg);
    }

    .email {
      flex: 1;
      min-width: 0;
      font-size: 0.9375rem;

      @media (max-width: 30rem) {
        font-size: 0.875rem;
      }
    }

    .copy {
      flex: none;
      padding: 0.4rem 0.75rem;
      border: 1px solid var(--line);
      border-radius: 4px;
      background: var(--surface);
      color: var(--text);
      cursor: pointer;
      transition:
        border-color 150ms ease,
        color 150ms ease;

      &:hover {
        border-color: var(--accent);
        color: var(--accent);
      }
    }

    .send {
      display: block;
      padding: 0.8rem 1rem;
      border-radius: 6px;
      background: var(--accent);
      color: var(--bg);
      font-weight: 600;
      text-align: center;
      text-decoration: none;
      transition: filter 150ms ease;

      &:hover {
        color: var(--bg);
        filter: brightness(1.1);
      }
    }

    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem 2.5rem;
      margin-top: 0.5rem;
    }

    .links li {
      display: grid;
    }

    .links span {
      color: var(--muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly email = profile.email;
  protected readonly emailUser = profile.email.split('@')[0];
  protected readonly emailDomain = profile.email.split('@')[1];
  protected readonly availability = profile.availability;
  protected readonly links = socialLinks;
  protected readonly copyState = signal<CopyState>('idle');
  protected readonly copyLabel: Record<CopyState, string> = {
    idle: 'Copiar',
    copied: 'Copiado',
    failed: 'Copie manualmente',
  };
  private resetTimer?: ReturnType<typeof setTimeout>;

  protected async copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copyState.set('copied');
    } catch {
      this.copyState.set('failed');
    }
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copyState.set('idle'), 2000);
  }
}
