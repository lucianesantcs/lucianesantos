import { Routes } from '@angular/router';
import { MainComponent } from './shared/layouts/pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/about/about.component').then(
            (it) => it.AboutComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
