import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductApi } from '../../products/shared/services/product.api';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly #api = inject(ProductApi);

}
