import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen bg-[#fdfdfd] flex items-center justify-center px-4">
      <div class="text-center max-w-xl">
        <div class="font-display font-black text-[clamp(6rem,20vw,14rem)] leading-none text-[#eeeff0] select-none mb-8">404</div>
        <div class="w-16 h-0.5 bg-[#cc002b] mx-auto mb-8"></div>
        <h1 class="font-display text-3xl font-bold text-on-surface mb-4">Page Not Found</h1>
        <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-10">
          The route you requested doesn't exist in this Angular workspace. It may have been moved, renamed, or never configured.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/"
             class="bg-[#cc002b] hover:bg-[#a30022] text-white font-label text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-sm shadow-md transition-colors inline-block">
            Return Home
          </a>
          <a routerLink="/tutorial"
             class="border border-surface-container-high hover:border-[#cc002b]/40 text-on-surface-variant hover:text-on-surface font-label text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-sm transition-colors inline-block">
            View Tutorial
          </a>
        </div>
        <div class="mt-16 inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant font-mono text-[10px] tracking-widest border border-surface-container-high">
          ERROR: Cannot match routes. URL Segment: '...'
        </div>
      </div>
    </div>
  `
})
export class NotFoundComponent {}
