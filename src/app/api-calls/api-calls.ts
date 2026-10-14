import { Component, computed, model, ChangeDetectionStrategy } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-api-calls',
  imports: [
    FormsModule
  ],
  templateUrl: './api-calls.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './api-calls.scss',
})
export default class ApiCalls {
  protected readonly filter = model<string>();

  // Angular 21
  protected readonly productsResource = httpResource<{ products: Product[] }>(computed(() => {
    const filter = this.filter()?.trim();
    return `https://dummyjson.com/products/search${filter ? `?q=${filter}` : '' }`;
  }));

  // protected readonly productsResource = httpResource<{ products: Product[] }>({
  //   url: () => 'https://dummyjson.com/products/search',
  //   params: {
  //
  //   }
  // });
}
