import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../../core/config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-surface-container-low py-16 mt-24 border-t border-surface-container-high">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-on-surface font-display font-bold tracking-tight text-xl">{{ config.personal.name }}<span class="text-secondary">{{ config.personal.domain }}</span></div>
        <p class="font-body text-sm text-on-surface-variant">
          &copy; {{ config.footer.copyrightYear }} {{ config.personal.fullName }}. {{ config.footer.description }}
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  config = SITE_CONFIG;
}
