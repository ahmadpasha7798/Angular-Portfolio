import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-surface-container-low py-16 mt-24 border-t border-surface-container-high">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-on-surface font-display font-bold tracking-tight text-xl">ALEX<span class="text-secondary">.DEV</span></div>
        <p class="font-body text-sm text-on-surface-variant">
          High-Tech Editorial Portfolio Built with Angular 18 & Signals.
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
