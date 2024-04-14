import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
