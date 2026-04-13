import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../../core/config/site.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="min-h-[80vh] flex flex-col justify-center gap-8 py-24 relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 bg-surface-bright opacity-50 z-[-1]" style="background-image: url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23d9dadb\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E');"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6">
        <p class="font-label text-secondary font-semibold uppercase tracking-[0.2em]">{{ config.hero.label }}</p>
        <h1 class="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight -tracking-[0.04em] text-on-surface">
          {{ config.hero.titleLine1 }} <br/>
          <span class="text-transparent bg-clip-text bg-hero-gradient">{{ config.hero.titleLine2 }}</span>
        </h1>
        <p class="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mt-6">
          {{ config.hero.description }}
        </p>
        
        <div class="pt-10 flex flex-col sm:flex-row gap-4">
          <button class="btn-primary px-8 py-4 font-label font-bold tracking-wide w-full sm:w-auto">
            EXPLORE ARCHITECTURE
          </button>
          <a [href]="config.social.github" target="_blank" rel="noopener noreferrer" class="btn-secondary px-8 py-4 font-label font-bold tracking-wide flex items-center justify-center gap-3 w-full sm:w-auto">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
            VIEW REPOSITORY
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  config = SITE_CONFIG;
}
