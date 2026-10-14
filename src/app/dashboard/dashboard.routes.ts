import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { dashboardFeature } from './shared/store/dashboard-store';

export default [
  {
    path: '',
    loadComponent: () => import('./dashboard'),
    providers: [provideState(dashboardFeature)],
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
