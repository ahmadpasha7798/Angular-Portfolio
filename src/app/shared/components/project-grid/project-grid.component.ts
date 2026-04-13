import { Component, input } from '@angular/core';
import { Project } from '../../../core/services/portfolio.service';
import { TechChipComponent } from '../tech-chip/tech-chip.component';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [TechChipComponent],
  template: `
    <section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 class="font-display text-4xl font-bold mb-12 text-on-surface">Architectural Implementations</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
        @for (project of projects(); track project.id) {
          <article class="glass rounded-xl hover:shadow-ambient hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group bg-surface-container-lowest/80 relative overflow-hidden border border-surface-container-low">
            <div class="h-48 w-full overflow-hidden relative border-b border-surface-container-high">
              <img [src]="project.imageUrl" alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            
            <div class="p-8 flex flex-col flex-1 relative z-10">
              <h3 class="font-headline text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="font-body text-on-surface-variant flex-1 mb-8 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mt-auto">
                @for (tech of project.technologies; track tech) {
                  <app-tech-chip [label]="tech"></app-tech-chip>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `
})
export class ProjectGridComponent {
  projects = input.required<Project[]>();
}
