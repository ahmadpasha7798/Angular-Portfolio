import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="animate-fade-in-up">
      <!-- HERO -->
      <section class="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-gradient-to-br from-surface to-[#fdfdfd]">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-50 z-0"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="max-w-xl">
            <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-primary uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">Angular Architecture Showcase</span>
            <h1 class="font-display text-6xl md:text-7xl font-bold text-on-surface leading-tight tracking-tight mb-6">
              Mastering the <br><span class="text-primary">Angular Ecosystem</span>
            </h1>
            <p class="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              A high-performance technical editorial exploring advanced reactive patterns, signal-based state management, and enterprise-grade architecture.
            </p>
            <div class="flex flex-wrap gap-4">
              <a routerLink="/tutorial" class="bg-[#cc002b] hover:bg-primary-container text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-sm transition-colors shadow-ambient">Explore Documentation</a>
              <a routerLink="/architecture" class="bg-surface-container-highest hover:bg-surface-container-low text-on-surface text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-sm transition-colors shadow-sm">View Architecture</a>
            </div>
          </div>
          <div class="relative flex justify-center lg:justify-end">
             <div class="w-full max-w-lg aspect-square bg-white rounded-xl shadow-2xl relative overflow-hidden flex items-center justify-center p-8 border border-white">
                <!-- Mac-like Window Controls Top Right? Wait, image shows top right has faint lines. Let's replicate standard UI -->
                
                <!-- Center Red Graphic: Molecule cluster -->
                <div class="relative flex items-center justify-center">
                  <svg class="w-48 h-48 text-[#cc002b] opacity-80" viewBox="0 0 100 100" fill="currentColor">
                     <circle cx="50" cy="50" r="14" />
                     <circle cx="50" cy="20" r="6" />
                     <circle cx="20" cy="50" r="6" />
                     <circle cx="80" cy="50" r="6" />
                     <circle cx="35" cy="80" r="6" />
                     <circle cx="65" cy="80" r="6" />
                     <!-- connecting lines -->
                     <line x1="50" y1="34" x2="50" y2="26" stroke="currentColor" stroke-width="4" />
                     <line x1="36" y1="50" x2="26" y2="50" stroke="currentColor" stroke-width="4" />
                     <line x1="64" y1="50" x2="74" y2="50" stroke="currentColor" stroke-width="4" />
                     <line x1="43" y1="64" x2="38" y2="74" stroke="currentColor" stroke-width="4" />
                     <line x1="57" y1="64" x2="62" y2="74" stroke="currentColor" stroke-width="4" />
                  </svg>
                </div>
                <!-- Box borders styling (dots on corners) -->
                <div class="absolute inset-4 border border-surface-container-high rounded border-dashed opacity-50"></div>
             </div>
          </div>
        </div>
      </section>

      <!-- CORE PHILOSOPHY -->
      <section class="py-24 bg-[#f8f9fa] border-t border-surface-container-lowest relative overflow-hidden flex flex-col items-center">
        <!-- Huge Watermark -->
        <div class="absolute right-0 top-12 text-[10rem] font-display font-light text-[#cc002b]/5 tracking-tighter leading-none select-none pointer-events-none whitespace-nowrap">
          TECHNICAL CORE
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div class="mb-16">
            <h2 class="font-display text-2xl font-bold text-on-surface mb-4">Core Philosophy</h2>
            <p class="font-body text-on-surface-variant text-sm max-w-lg leading-relaxed">We prioritize maintainability and performance by leveraging the latest features of the framework, strictly beyond standard implementations.</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
             <!-- Card 1 -->
             <div class="bg-white p-8 shadow-sm border border-surface-container-lowest lg:col-span-2 flex flex-col justify-between">
                <div>
                  <div class="w-8 h-8 bg-primary/10 rounded-sm flex items-center justify-center text-primary mb-6">
                    <span class="font-mono text-xs font-bold">&lt;</span>
                  </div>
                  <h3 class="font-display text-xl font-bold text-on-surface mb-4">Advanced Reactive Patterns</h3>
                  <p class="font-body text-on-surface-variant text-sm mb-12 max-w-sm leading-relaxed">Implementation of sophisticated Signal-based state management, custom RxJS operators, and high-performance change detection strategies.</p>
                </div>
                <div class="flex gap-2">
                   <span class="font-label xs-text uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[10px]">SIGNALS</span>
                   <span class="font-label xs-text uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[10px]">RXJS</span>
                   <span class="font-label xs-text uppercase tracking-widest bg-surface-container-highest px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[10px]">ZONLESS</span>
                 </div>
             </div>

             <!-- Card 2 -->
             <div class="bg-[#e4e7eb] flex flex-col justify-between p-8 border border-surface-container-high shadow-inner relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div class="relative z-10 flex flex-col h-full">
                  <div>
                    <div class="w-8 h-8 bg-secondary/10 rounded-sm flex items-center justify-center text-secondary mb-6">
                       <span class="font-mono text-xs font-bold">&#8665;</span>
                    </div>
                    <h3 class="font-display text-xl font-bold text-on-surface mb-4">Performance First</h3>
                    <p class="font-body text-on-surface-variant text-sm mb-8 leading-relaxed">Optimization via Hydration, SSR, and deferrable views to achieve near-instant interaction times.</p>
                  </div>
                  <div class="flex items-end justify-between mt-auto">
                     <div class="font-display text-5xl font-bold text-secondary">99<span class="text-3xl font-light text-secondary/60">+</span></div>
                     <div class="font-label text-[8px] uppercase tracking-[0.2em] text-on-surface-variant font-bold pb-2">Lighthouse Score</div>
                  </div>
                </div>
             </div>
             
             <!-- Card 3 -->
             <div class="bg-white p-8 shadow-sm border border-surface-container-lowest lg:col-span-3 flex flex-col md:flex-row gap-12 items-center justify-between">
                <div class="max-w-md">
                  <div class="w-8 h-8 bg-tertiary/10 rounded-sm flex items-center justify-center text-tertiary mb-6">
                    <span class="font-mono text-xs font-bold">[]</span>
                  </div>
                  <h3 class="font-display text-xl font-bold text-on-surface mb-4">Enterprise Architecture</h3>
                  <p class="font-body text-on-surface-variant text-sm mb-8 leading-relaxed">Modular, scalable patterns using Nx workspaces, strictly typed interfaces, and clean code principles designed for large-scale engineering teams.</p>
                  <a routerLink="/architecture" class="text-secondary font-label text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2">Read Technical Blueprint <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>
                </div>
                <div class="flex-1 w-full max-w-lg flex items-center justify-end gap-2">
                   <!-- Decorative code blocks as seen in image -->
                   <div class="w-1/2 bg-gray-500 rounded p-4 h-24 shadow-inner">
                     <div class="w-full h-1 bg-white/30 rounded mb-2"></div>
                     <div class="w-3/4 h-1 bg-white/20 rounded mb-2 ml-4"></div>
                     <div class="w-1/2 h-1 bg-white/20 rounded mb-2 ml-4"></div>
                     <div class="w-full h-1 bg-white/40 rounded mt-4"></div>
                   </div>
                   <div class="w-1/2 bg-[#f8f9fa] border border-surface-container-high rounded p-4 h-24 border-dashed opacity-50 grid grid-cols-4 gap-x-2 gap-y-3">
                     <div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div>
                     <div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div>
                     <div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div><div class="w-full h-px bg-on-surface-variant/30"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <!-- TECH BANNER -->
      <section class="border-y border-surface-container-high bg-[#f8f9fa]">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-wrap justify-center sm:justify-between items-center gap-10 font-display text-[11px] font-bold text-on-surface-variant uppercase tracking-[0.2em] opacity-80">
            <span>TypeScript 5.0</span>
            <span>Nx Monorepo</span>
            <span>Angular 18</span>
            <span>Tailwind CSS</span>
            <span>Jest Testing</span>
         </div>
      </section>

      <!-- CTA -->
      <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div class="bg-[#cc002b] rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <h2 class="font-display text-4xl md:text-5xl font-bold mb-6 relative z-10 leading-tight">Ready to elevate your Angular <br>stack?</h2>
            <p class="font-body text-base text-white/90 mb-10 max-w-lg mx-auto relative z-10 leading-relaxed font-light">Join our engineering mailing list for deep dives into the latest architectural patterns and performance hacks.</p>
            
            <form class="flex flex-col sm:flex-row max-w-md mx-auto gap-4 relative z-10 justify-center">
              <input type="email" placeholder="engineer@domain.com" class="bg-[#B30025] text-white placeholder-white/50 px-6 py-4 rounded-sm font-body text-sm outline-none w-full sm:w-64">
              <button class="bg-white text-[#cc002b] font-label font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors">SUBSCRIBE</button>
            </form>
         </div>
      </section>
      
      <!-- FOOTER -->
      <footer class="border-t border-surface-container-highest py-12 bg-surface">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
               <div class="font-display font-bold text-xs text-on-surface mb-2">The Engineering Editorial</div>
               <p class="font-body text-[10px] text-on-surface-variant">&copy; 2024 The Engineering Editorial. Built with Angular & Signals.</p>
            </div>
            <div class="flex gap-8 font-body text-[10px] text-on-surface-variant">
               <a href="#" class="hover:text-primary transition-colors">Github Repository</a>
               <a href="#" class="hover:text-primary transition-colors">Technical Architecture Layout</a>
               <a href="#" class="hover:text-primary transition-colors">API Services Details</a>
            </div>
         </div>
      </footer>
    </div>
  `
})
export class HomeComponent {}
