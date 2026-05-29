import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Pasha.Dev | Angular Architecture Showcase',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'dashboard',
    title: 'Pasha.Dev | Angular Core',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'architecture',
    title: 'Pasha.Dev | Component Architecture',
    loadComponent: () => import('./pages/architecture/architecture.component').then(m => m.ArchitectureComponent)
  },
  {
    path: 'routing',
    title: 'Pasha.Dev | Routing',
    loadComponent: () => import('./pages/routing/routing.component').then(m => m.RoutingComponent)
  },
  {
    path: 'tutorial',
    title: 'Pasha.Dev | Getting Started',
    loadComponent: () => import('./pages/tutorial/tutorial.component').then(m => m.TutorialComponent)
  },
  {
    path: 'services',
    title: 'Pasha.Dev | Services & DI',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'forms',
    title: 'Pasha.Dev | Reactive Forms',
    loadComponent: () => import('./pages/forms/forms.component').then(m => m.FormsComponent)
  },
  {
    path: 'signals',
    title: 'Pasha.Dev | Angular Signals',
    loadComponent: () => import('./pages/signals/signals.component').then(m => m.SignalsComponent)
  },
  {
    path: 'guards',
    title: 'Pasha.Dev | Route Guards',
    loadComponent: () => import('./pages/guards/guards.component').then(m => m.GuardsComponent)
  },
  {
    path: 'http',
    title: 'Pasha.Dev | HTTP Client',
    loadComponent: () => import('./pages/http/http.component').then(m => m.HttpClientPageComponent)
  },
  {
    path: 'pipes',
    title: 'Pasha.Dev | Pipes',
    loadComponent: () => import('./pages/pipes/pipes.component').then(m => m.PipesComponent)
  },
  {
    path: 'directives',
    title: 'Pasha.Dev | Directives',
    loadComponent: () => import('./pages/directives/directives.component').then(m => m.DirectivesComponent)
  },
  {
    path: 'rxjs',
    title: 'Pasha.Dev | RxJS',
    loadComponent: () => import('./pages/rxjs/rxjs.component').then(m => m.RxjsComponent)
  },
  {
    path: 'lifecycle',
    title: 'Pasha.Dev | Lifecycle Hooks',
    loadComponent: () => import('./pages/lifecycle/lifecycle.component').then(m => m.LifecycleComponent)
  },
  {
    path: '**',
    title: 'Pasha.Dev | 404 Not Found',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
