import { Component, inject } from '@angular/core';
import { ProductApi } from './shared/services/product.api';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  // providers: [ProductApi],
})
export class Products {
  readonly #api = inject(ProductApi);

}
