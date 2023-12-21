import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((it) => it.AboutComponent),
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
