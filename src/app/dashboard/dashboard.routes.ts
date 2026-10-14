import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./dashboard'),
    children: [
      {
        path: '',
        loadComponent: () => import('./core/home/home'),
      },
      {
        path: 'users',
        loadComponent: () => import('./user-management/user-management'),
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings'),
      }
    ]
  },
] satisfies Routes;
