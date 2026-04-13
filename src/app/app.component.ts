import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { SITE_CONFIG } from './core/config/site.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="pt-20 min-h-screen">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class App {
  constructor() {
    const titleService = inject(Title);
    titleService.setTitle(`${SITE_CONFIG.personal.fullName} | ${SITE_CONFIG.header.titlePrefix} ${SITE_CONFIG.header.titleBold} ${SITE_CONFIG.header.titleLight}`);
  }
}
