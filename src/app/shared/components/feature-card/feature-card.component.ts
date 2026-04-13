import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  template: `
    <div class="feature-card h-full flex flex-col gap-4 group cursor-pointer">
      <h3 class="font-headline font-semibold text-xl text-primary">{{ title() }}</h3>
      <p class="font-body text-on-surface-variant flex-1">{{ description() }}</p>
    </div>
  `
})
export class FeatureCardComponent {
  title = input.required<string>();
  description = input.required<string>();
}
