import { ChangeDetectionStrategy, Component, computed, inject, NgZone, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Highlight } from './shared/directives/highlight';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { AuthApi } from './shared/Services/auth-api';

registerLocaleData(fr);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Highlight],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
  // changeDetection: ChangeDetectionStrategy.Eager,
})
export class App  implements OnInit {
  protected readonly title = signal('session_octobre_2026');

  readonly #authApi = inject(AuthApi);

  readonly showCount = signal(false);
  readonly count = signal(0);

  readonly conditionalCount = computed(() => {
    if (this.showCount()) {
      return `Le compteur est à ${this.count()}.`;
    }
    return 'Rien à voir ici!';
  });

  ngOnInit(): void {
    this.count.set(1000);

    setTimeout(() => {
      this.showCount.set(true);
    }, 2000)

    setTimeout(() =>{
      this.count.set(50);
    }, 5000)
  }

  fn() {
    const zone = inject(NgZone)

    zone.run(() => {
      //stuff
    });


    this.#authApi.isLoggedIn();
    // this.#authApi.isAuthenticated.set(true);
  }
}
