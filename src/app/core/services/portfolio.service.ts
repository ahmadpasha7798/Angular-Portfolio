import { Injectable, signal, computed } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projectsSignal = signal<Project[]>([
    {
      id: '1',
      title: 'Angular SSR Platform',
      description: 'A blazing-fast server-side rendered application with advanced state management and dynamic routing.',
      technologies: ['Angular 18', 'RxJS', 'NgRx', 'Node.js'],
      imageUrl: "data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23af0025' fill-opacity='0.15'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%23f8f9fa'/%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3C/svg%3E"
    },
    {
      id: '2',
      title: 'Enterprise Architecture',
      description: 'Micro-frontend architecture using module federation with strict typing and architectural boundaries.',
      technologies: ['Webpack', 'Nx', 'TypeScript', 'Module Federation'],
      imageUrl: "data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='b' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Cpath d='M20 0L0 0 0 20' fill='none' stroke='%23005faf' stroke-width='1' stroke-opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%23f8f9fa'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)'/%3E%3C/svg%3E"
    },
    {
      id: '3',
      title: 'Real-time Trading Dashboard',
      description: 'High-frequency data visualization dashboard rendering thousands of data points at 60fps.',
      technologies: ['WebSockets', 'Canvas API', 'Signals', 'D3.js'],
      imageUrl: "data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='c' patternUnits='userSpaceOnUse' width='20' height='20'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23005e73' fill-opacity='0.3'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%23f8f9fa'/%3E%3Crect width='100%25' height='100%25' fill='url(%23c)'/%3E%3C/svg%3E"
    }
  ]);

  private featuresSignal = signal<Feature[]>([
    {
      id: 'f1',
      title: 'High-Performance Rendering',
      description: 'Optimized for 60fps scrolling and instant interaction using Angular Signals.'
    },
    {
      id: 'f2',
      title: 'Modular Design',
      description: 'Built with strict component boundaries and lazy-loaded routes for minimal initial payload.'
    },
    {
      id: 'f3',
      title: 'Accessible & Responsive',
      description: 'Fully compliant WCAG 2.1 AA architecture with seamless multi-device support.'
    }
  ]);

  projects = this.projectsSignal.asReadonly();
  features = this.featuresSignal.asReadonly();
  
  totalProjects = computed(() => this.projects().length);
  
  constructor() { }
}
