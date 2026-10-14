import { Routes } from '@angular/router';
// import { Home } from './core/home/home';
// import { ProductApi } from './products/shared/services/product.api';

export default [
  {
    path: '',
    // component: Home,
    loadComponent: () => import('./core/home/home').then(m => m.Home),
  },
  {
    path: 'api-calls',
    loadComponent: () => import('./api-calls/api-calls'),
    // providers: [ProductApi],
  },
  {
    path: 'products',
    // loadComponent: () => import('./products/products').then(m => m.Products),
    // providers: [ProductApi],
    loadChildren: () => import('./products/products.routes'),
  },
  { path: '**',  redirectTo: '/', pathMatch: 'full' },
] satisfies Routes;
