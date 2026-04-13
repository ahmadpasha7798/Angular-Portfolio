import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-20 bg-white">
      <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row min-h-[calc(100vh-5rem)]">
        
        <!-- Sidebar Navigation -->
        <aside class="w-full md:w-64 flex-shrink-0 py-12 md:pr-8 md:border-r border-surface-container-high relative">
           <div class="sticky top-32">
              <div class="font-display font-bold text-sm text-on-surface mb-1">Tutorial</div>
              <div class="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-8 border-b border-surface-container-highest pb-4">v18.0</div>
              
              <nav class="space-y-1 font-body text-sm">
                 <a href="#" class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span class="w-1.5 h-1.5 rounded-full bg-surface-container-highest"></span> Introduction
                 </a>
                 <a href="#" class="flex items-center gap-3 px-3 py-2 bg-surface-container-lowest text-[#cc002b] font-bold border-l-2 border-[#cc002b] -ml-px transition-colors">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#cc002b]"></span> Installation
                 </a>
                 <a href="#" class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span class="w-1.5 h-1.5 rounded-full bg-surface-container-highest"></span> CLI Tools
                 </a>
                 <a href="#" class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
                    <svg class="w-4 h-4 opacity-50 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg> Project Structure
                 </a>
                 <a href="#" class="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-primary transition-colors">
                    <svg class="w-4 h-4 opacity-50 pl-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg> Next Steps
                 </a>
              </nav>
              
              <div class="mt-12">
                 <button class="w-full bg-transparent border border-surface-container-highest font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant py-3 rounded-sm hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg> View on Github
                 </button>
              </div>
           </div>
        </aside>
        
        <!-- Main Content Area -->
        <main class="flex-1 py-12 md:pl-16 lg:pl-24 max-w-4xl">
           
           <!-- Title Block -->
           <div class="mb-16">
              <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[8px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">FOUNDATION LAYER</span>
              <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
                Getting Started <br><span class="text-[#cc002b]">with Angular CLI.</span>
              </h1>
              <p class="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
                Welcome to the architectural core of the Engineering Editorial. This guide will walk you through setting up a professional-grade Angular workspace using industry-standard patterns.
              </p>
           </div>
           
           <!-- Step 01 -->
           <div class="mb-12 relative">
              <div class="flex items-start gap-6">
                 <div class="font-display text-5xl font-light text-[#005faf]/20 pt-1">01</div>
                 <div class="flex-1">
                    <h3 class="font-display text-2xl font-bold text-on-surface mb-2">Prerequisites</h3>
                    <p class="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">Before we dive into the CLI, ensure your local development environment is configured with the following dependencies:</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div class="bg-[#f8f9fa] border-l-2 border-[#005faf] p-6 rounded-r-sm">
                          <h4 class="font-display font-bold text-on-surface mb-2">Node.js</h4>
                          <p class="font-body text-[10px] text-on-surface-variant leading-relaxed">v18.13.0 or higher. Angular requires an active LTS or maintenance LTS version.</p>
                       </div>
                       <div class="bg-[#f8f9fa] border-l-2 border-[#cc002b] p-6 rounded-r-sm">
                          <h4 class="font-display font-bold text-on-surface mb-2">Package Manager</h4>
                          <p class="font-body text-[10px] text-on-surface-variant leading-relaxed">npm (default) or yarn is required for managing framework dependencies.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <!-- Step 02 -->
           <div class="mb-12 relative">
              <div class="flex items-start gap-6">
                 <div class="font-display text-5xl font-light text-[#005faf]/20 pt-1">02</div>
                 <div class="flex-1">
                    <h3 class="font-display text-2xl font-bold text-on-surface mb-2">CLI Installation</h3>
                    <p class="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">The Angular CLI is the primary orchestration tool for your workspace. Install it globally via npm:</p>
                    
                    <div class="bg-[#11131e] rounded-sm p-4 font-mono text-sm text-white shadow-xl flex items-center gap-3">
                       <span class="text-[#cc002b] font-bold">&gt;</span>
                       <code class="text-[#e6edf3]">npm install -g @angular/cli</code>
                    </div>
                 </div>
              </div>
           </div>

           <!-- Step 03 -->
           <div class="mb-20 relative">
              <div class="flex items-start gap-6">
                 <div class="font-display text-5xl font-light text-[#005faf]/20 pt-1">03</div>
                 <div class="flex-1">
                    <h3 class="font-display text-2xl font-bold text-on-surface mb-2">Generating a New Project</h3>
                    <p class="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">Initialize a new workspace with specific flags to ensure strict typing and modern routing configurations.</p>
                    
                    <div class="bg-[#11131e] rounded-sm p-6 font-mono text-xs text-white shadow-xl space-y-3 relative overflow-hidden">
                       <div class="absolute inset-y-0 left-0 w-1 bg-[#cc002b]"></div>
                       <div class="text-[#6b7280] italic px-2">// Initialize workspace with standalone components</div>
                       <div class="flex items-center gap-3 px-2">
                          <span class="text-[#cc002b] font-bold">&gt;</span>
                          <code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">ng</span> new my-editorial-app <span class="text-[#79c0ff]">--standalone</span> <span class="text-[#79c0ff]">--routing</span> <span class="text-[#79c0ff]">--style=scss</span></code>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <!-- Anatomy of Workspace -->
           <div class="bg-[#f8f9fa] border border-surface-container-lowest rounded-xl p-8 md:p-12 mb-20 shadow-sm relative overflow-hidden">
              <div class="text-center mb-10">
                 <h2 class="font-display text-2xl font-bold text-on-surface mb-2">Anatomy of a Workspace</h2>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                 <!-- src/app/ -->
                 <div class="bg-white border border-surface-container-highest p-6 rounded-sm md:col-span-2 shadow-sm">
                    <div class="flex items-center gap-2 mb-4">
                       <svg class="w-4 h-4 text-[#cc002b]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
                       <span class="font-mono font-bold text-sm text-on-surface">src/app/</span>
                    </div>
                    <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">This is the heart of your application. It contains the business logic, UI components, and service layers that define your frontend experience.</p>
                    
                    <ul class="space-y-2 font-mono text-[10px] text-on-surface-variant">
                       <li class="flex items-center gap-2"><div class="w-1 h-1 bg-[#cc002b] rounded-full"></div> <span>app.component.ts</span> <span class="text-surface-container-highest">&mdash;</span> <span class="italic">The root shell</span></li>
                       <li class="flex items-center gap-2"><div class="w-1 h-1 bg-[#cc002b] rounded-full"></div> <span>app.config.ts</span> <span class="text-surface-container-highest">&mdash;</span> <span class="italic">Dependency injection & routing</span></li>
                    </ul>
                 </div>
                 
                 <!-- assets/ -->
                 <div class="bg-[#e4e7eb] border border-surface-container-high p-6 rounded-sm shadow-inner flex flex-col justify-between">
                    <div>
                       <div class="flex items-center gap-2 mb-4">
                          <svg class="w-4 h-4 text-[#005faf]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path></svg>
                          <span class="font-mono font-bold text-sm text-on-surface">assets/</span>
                       </div>
                       <p class="font-body text-xs text-on-surface-variant leading-relaxed">Static files like images, fonts, and localized strings (i18n).</p>
                    </div>
                    <div class="font-label text-[8px] uppercase tracking-widest text-[#005faf] font-bold opacity-50 pt-4 border-t border-surface-container-highest mt-4">STATIC RESOURCES</div>
                 </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <!-- angular.json -->
                 <div class="bg-[#11131e] p-6 rounded-sm shadow-md text-white">
                    <div class="flex items-center gap-2 mb-3 text-white">
                       <svg class="w-4 h-4 text-[#8cd2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                       <span class="font-mono font-bold text-sm">angular.json</span>
                    </div>
                    <p class="font-body text-xs text-white/70 leading-relaxed">Workspace configuration and project defaults, builder configurations and environment variables.</p>
                 </div>
                 
                 <!-- styles.scss -->
                 <div class="bg-[#005faf] p-6 rounded-sm shadow-md text-white">
                    <div class="flex items-center gap-2 mb-3 text-white">
                       <span class="font-mono font-bold text-sm">styles.scss</span>
                    </div>
                    <p class="font-body text-xs text-white/80 leading-relaxed">Global design tokens and Tailwind CLI base definitions are imported here to maintain consistent branding.</p>
                 </div>
              </div>
           </div>

           <!-- Ready to build Glow CTA -->
           <div class="bg-white rounded-[2rem] p-12 text-center shadow-[0_20px_40px_rgba(204,0,43,0.08)] border border-surface-container-lowest relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-[#cc002b]/5 via-transparent to-transparent"></div>
              
              <h2 class="font-display text-3xl font-bold text-on-surface mb-4 relative z-10">Ready to build?</h2>
              <p class="font-body text-sm text-on-surface-variant max-w-sm mx-auto mb-8 relative z-10">Now that your workspace is ready, let's explore how to create your first Standalone Component with Signals.</p>
              
              <div class="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                 <button class="w-full sm:w-auto bg-[#cc002b] hover:bg-[#a30022] text-white font-label text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm transition-colors shadow-ambient flex items-center justify-center gap-2">
                    Core Component Logic <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </button>
                 <button class="w-full sm:w-auto bg-surface-container hover:bg-surface-container-high text-on-surface font-label text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm transition-colors border border-surface-container-highest">
                    Browse Showcase
                 </button>
              </div>
           </div>
           
        </main>
      </div>
    </div>
  `
})
export class TutorialComponent {}
