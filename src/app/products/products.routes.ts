import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./products').then(m => m.Products),
  },
  {
    path: 'create',
    loadComponent: () => import('./product-create/product-create').then(m => m.ProductCreate),
  },
  {
    path: ':id',
    loadComponent: () => import('./product-details/product-details').then(m => m.ProductDetails),
  }
] satisfies Routes;
