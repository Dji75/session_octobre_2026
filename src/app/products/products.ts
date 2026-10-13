import { Component, inject } from '@angular/core';
import { ProductApi } from './shared/services/product.api';
import { MoveOnClick } from '../shared/directives/move-on-click';

@Component({
  selector: 'app-products',
  imports: [
    MoveOnClick
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  // providers: [ProductApi],
})
export class Products {
  readonly #api = inject(ProductApi);

}
