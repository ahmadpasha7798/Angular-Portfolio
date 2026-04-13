import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'architecture',
    loadComponent: () => import('./pages/architecture/architecture.component').then(m => m.ArchitectureComponent)
  },
  {
    path: 'routing',
    loadComponent: () => import('./pages/routing/routing.component').then(m => m.RoutingComponent)
  },
  {
    path: 'tutorial',
    loadComponent: () => import('./pages/tutorial/tutorial.component').then(m => m.TutorialComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'forms',
    loadComponent: () => import('./pages/forms/forms.component').then(m => m.FormsComponent)
  }
];
