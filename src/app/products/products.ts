import { afterNextRender, Component, computed, effect, inject, signal } from '@angular/core';
import { ProductApi } from './shared/services/product.api';
import { MoveOnClick } from '../shared/directives/move-on-click';
import { PluralSingularPipe } from '../shared/pipes/plural-singular.pipe';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    MoveOnClick,
    PluralSingularPipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  // providers: [ProductApi],
})
export class Products {
  readonly #api = inject(ProductApi);

  protected disabled = signal(false);
  protected closed = signal(false);

  protected prix = signal<number>(0);
  protected taux = signal<number>(0);

  protected tva = computed(() => (this.prix() * this.taux()) / 100);
  protected total = computed(() => this.prix() + this.tva());

  updatePrix(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.prix.set(value);
  }

  updateTaux(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.taux.set(value);
  }

  // possible way 1 to declare effect
  // readonly #saveInStorage = effect(() => {
  //   // stuff
  //   localStorage.setItem('total', `${this.total()}`);
  // });

  constructor() {
    // possible way 2 to declare effect
    effect(() => {
      // stuff
      localStorage.setItem('total', `${this.total()}`);
    });
  }
}
