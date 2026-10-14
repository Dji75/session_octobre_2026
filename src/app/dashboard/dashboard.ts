import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { dashboardFeature } from './shared/store/dashboard-store';

@Component({
  imports: [
    RouterOutlet,
    RouterLink
  ],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  readonly #store = inject(Store);
  protected readonly name = this.#store.selectSignal(dashboardFeature.selectName);
}
