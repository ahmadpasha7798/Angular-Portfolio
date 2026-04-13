import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE_CONFIG } from '../../../core/config/site.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md border-b border-surface-container-low transition-all">
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a routerLink="/" class="font-display font-bold text-xl tracking-tight text-on-surface hover:text-primary transition-colors z-20 flex items-center gap-1">
          <span>{{ config.header.titlePrefix }}</span><span class="font-medium">{{ config.header.titleBold }}</span><span class="font-light">{{ config.header.titleLight }}</span>
        </a>
        <nav class="hidden lg:flex items-center gap-6 font-display text-[11px] uppercase tracking-[0.1em] font-bold text-on-surface-variant">
          <a routerLink="/" routerLinkActive="text-primary border-b-2 border-primary" [routerLinkActiveOptions]="{exact: true}" class="hover:text-primary transition-colors cursor-pointer py-2 border-b-2 border-transparent">Showcase</a>
          <a routerLink="/dashboard" routerLinkActive="text-primary border-b-2 border-primary" class="hover:text-primary transition-colors cursor-pointer py-2 border-b-2 border-transparent">Core Features</a>
          <a routerLink="/architecture" routerLinkActive="text-primary border-b-2 border-primary" class="hover:text-primary transition-colors cursor-pointer py-2 border-b-2 border-transparent">Components</a>
          <a routerLink="/routing" routerLinkActive="text-primary border-b-2 border-primary" class="hover:text-primary transition-colors cursor-pointer py-2 border-b-2 border-transparent">Routing</a>
          <a routerLink="/tutorial" routerLinkActive="text-primary border-b-2 border-primary" class="hover:text-primary transition-colors cursor-pointer py-2 border-b-2 border-transparent">Tutorial</a>
          <a routerLink="/services" routerLinkActive="text-primary border-b-2 border-primary" class="hover:text-primary transition-colors cursor-pointer py-2 border-b-2 border-transparent">Services</a>
          <a routerLink="/forms" routerLinkActive="text-primary border-b-2 border-primary" class="hover:text-primary transition-colors cursor-pointer py-2 border-b-2 border-transparent">Forms</a>
          
          <div class="h-4 w-px bg-surface-container-highest mx-2"></div>
          
          <a [href]="config.social.github" target="_blank" rel="noopener noreferrer" class="text-on-surface hover:text-primary transition-colors flex items-center" title="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">GitHub</span>
          </a>
          <a [href]="config.social.github" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-widest text-[10px] px-4 py-2 rounded transition-colors">Github</a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  config = SITE_CONFIG;
}

