import { Component, inject, signal } from '@angular/core';
import { ProductApi } from './shared/services/product.api';
import { MoveOnClick } from '../shared/directives/move-on-click';
import { PluralSingularPipe } from '../shared/pipes/plural-singular.pipe';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [
    MoveOnClick,
    PluralSingularPipe,
    DecimalPipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  // providers: [ProductApi],
})
export class Products {
  readonly #api = inject(ProductApi);

  protected disabled = signal(false);
  protected closed = signal(false);
}
