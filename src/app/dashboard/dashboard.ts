import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { dashboardFeature } from './shared/store/dashboard-store';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    JsonPipe
  ],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export default class Dashboard {
  readonly #store = inject(Store);
  protected readonly state = this.#store.selectSignal(dashboardFeature.selectDashboardState);
  protected readonly hello = this.#store.selectSignal(dashboardFeature.hello);
}
