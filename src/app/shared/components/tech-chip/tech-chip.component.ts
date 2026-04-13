import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-chip',
  standalone: true,
  template: `
    <span class="tech-chip text-on-surface-variant">
      {{ label() }}
    </span>
  `
})
export class TechChipComponent {
  label = input.required<string>();
}
