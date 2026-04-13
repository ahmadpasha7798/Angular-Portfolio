import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#fdfdfd]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="mb-16">
          <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">PRACTICAL USAGE</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
            Mastering <span class="bg-gradient-to-r from-[#005faf] to-[#cc002b] bg-clip-text text-transparent">Complex</span><br>Forms
          </h1>
          <p class="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
            A deep dive into Angular's Reactive Forms API. Exploring dynamic FormArrays, custom asynchronous validation, and architectural patterns for resilient user input.
          </p>
        </div>

        <!-- Main Form Display Row -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 relative">
           
           <!-- Dynamic FormArray Panel (Left 2 cols) -->
           <div class="lg:col-span-2 bg-[#f8f9fa] border border-surface-container-lowest shadow-sm rounded-sm p-8 md:p-12 relative overflow-hidden">
              <div class="flex flex-wrap justify-between items-end mb-10 gap-4">
                 <div>
                    <h2 class="font-display text-xl font-bold text-on-surface mb-2">Technical Skills Registry</h2>
                    <p class="font-body text-xs text-on-surface-variant">Multi-step dynamic FormArray implementation</p>
                 </div>
                 <button class="bg-white hover:bg-surface-container-lowest text-[#005faf] font-label text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-surface-container-high rounded-full shadow-sm transition-colors flex items-center gap-2">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> Add Category
                 </button>
              </div>

              <form class="space-y-6">
                 <!-- Form Group 1: Valid -->
                 <div class="bg-white border text-surface-container-highest border-surface-container-lowest p-6 rounded-sm shadow-sm relative group overflow-hidden">
                    <div class="absolute inset-y-0 left-0 w-1 bg-[#005faf]"></div>
                    <div class="flex justify-between items-center mb-6 pl-2 relative z-10">
                       <h3 class="font-display text-sm font-bold text-on-surface">1. Frontend Architecture</h3>
                       <button class="text-[#005faf] hover:text-[#005faf]/80 transition-colors w-5 h-5 bg-[#005faf]/10 rounded-full flex items-center justify-center">
                         <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                       </button>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-2 relative z-10">
                       <div>
                          <label class="block font-label xs-text text-on-surface-variant uppercase tracking-widest font-bold mb-4">Skill Name</label>
                          <input type="text" value="Angular Signals" class="w-full bg-transparent border-b-2 border-[#005faf] text-on-surface font-body text-sm py-2 focus:outline-none placeholder-surface-container-highest">
                          <div class="text-[#005faf] text-[10px] font-body mt-2 flex items-center gap-1.5 font-medium">
                             <div class="w-1.5 h-1.5 rounded-full bg-[#005faf]"></div> * This is valid
                          </div>
                       </div>
                       <div>
                          <label class="block font-label xs-text text-on-surface-variant uppercase tracking-widest font-bold mb-4">Expertise Level</label>
                          <div class="relative">
                             <select class="w-full bg-transparent border-b border-surface-container-highest text-on-surface font-body text-sm py-2 appearance-none focus:outline-none focus:border-[#005faf] transition-colors cursor-pointer pb-2.5">
                                <option>Architect</option>
                                <option>Senior</option>
                                <option>Mid-Level</option>
                             </select>
                             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-on-surface-variant">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                             </div>
                          </div>
                          <div class="w-full h-0.5 bg-gradient-to-r from-transparent via-[#005faf]/20 to-transparent mt-2"></div>
                       </div>
                    </div>
                 </div>

                 <!-- Form Group 2: Invalid -->
                 <div class="bg-white border border-surface-container-lowest p-6 rounded-sm shadow-sm relative group overflow-hidden">
                    <div class="absolute inset-y-0 left-0 w-1 bg-[#cc002b]"></div>
                    <div class="flex justify-between items-center mb-6 pl-2 relative z-10">
                       <h3 class="font-display text-sm font-bold text-on-surface">2. Infrastructure</h3>
                       <button class="text-[#cc002b] hover:text-[#cc002b]/80 transition-colors w-5 h-5 bg-[#cc002b]/10 rounded-full flex items-center justify-center">
                         <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                       </button>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-2 relative z-10">
                       <div>
                          <label class="block font-label xs-text text-on-surface-variant uppercase tracking-widest font-bold mb-4">Skill Name</label>
                          <input type="text" placeholder="e.g. Docker" class="w-full bg-transparent border-b-2 border-[#cc002b] text-on-surface font-body text-sm py-2 focus:outline-none placeholder-surface-container-highest">
                          <div class="text-[#cc002b] text-[10px] font-body mt-2 flex items-center gap-1.5 font-medium">
                             <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ! This field is required
                          </div>
                       </div>
                    </div>
                 </div>
              </form>

              <div class="mt-8 flex justify-end gap-4 border-t border-surface-container-highest pt-8 relative z-10">
                 <button class="bg-transparent text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-surface-container-lowest transition-colors">Reset Form</button>
                 <button class="bg-[#cc002b] hover:bg-[#a30022] text-white font-label text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-sm shadow-md transition-colors">Register Architecture</button>
              </div>
           </div>

           <!-- Meta Info Panel (Right Col) -->
           <div class="flex flex-col gap-8">
              
              <!-- Output Watcher -->
              <div class="bg-[#11131e] rounded-sm p-8 shadow-2xl relative overflow-hidden flex-1 border border-[#2d3142]">
                 <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2d3142] to-transparent"></div>
                 <h4 class="font-label xs-text font-bold text-white uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Form Control Status</h4>
                 
                 <div class="space-y-4 mb-8">
                    <div class="flex justify-between items-center text-[10px] font-mono font-bold tracking-widest text-white/50">
                       <span>VALID</span>
                       <div class="w-2 h-2 rounded-sm bg-transparent border border-white/20"></div>
                    </div>
                    <div class="flex justify-between items-center text-[10px] font-mono font-bold tracking-widest text-[#cc002b]">
                       <span>INVALID</span>
                       <div class="w-2 h-2 rounded-sm bg-[#cc002b] shadow-[0_0_10px_rgba(204,0,43,0.5)]"></div>
                    </div>
                    <div class="flex justify-between items-center text-[10px] font-mono font-bold tracking-widest text-[#ffbd2e]">
                       <span>PENDING</span>
                       <div class="w-2 h-2 rounded-sm bg-transparent border border-[#ffbd2e]"></div>
                    </div>
                    <div class="flex justify-between items-center text-[10px] font-mono font-bold tracking-widest text-white">
                       <span>TOUCHED</span>
                       <div class="px-2 py-0.5 bg-white/10 rounded-sm">TRUE</div>
                    </div>
                 </div>

                 <div class="bg-black/50 p-4 rounded-sm border border-white/5 h-48 overflow-y-auto">
                    <div class="font-label text-[8px] text-[#cc002b] font-bold tracking-widest mb-2 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#cc002b] animate-pulse"></span> LIVE STATE</div>
                    <pre class="font-mono text-[10px] text-[#c1c6e5] leading-relaxed"><code>{{'{'}}
  <span class="text-[#a5d6ff]">"skills"</span>: [
    {{'{'}}
      <span class="text-[#a5d6ff]">"name"</span>: <span class="text-[#a5d6ff]">"Angular Signals"</span>,
      <span class="text-[#a5d6ff]">"level"</span>: <span class="text-[#a5d6ff]">"Architect"</span>
    {{'}'}},
    {{'{'}}
      <span class="text-[#a5d6ff]">"name"</span>: <span class="text-[#a5d6ff]">""</span>,
      <span class="text-[#a5d6ff]">"level"</span>: <span class="text-[#79c0ff]">null</span>
    {{'}'}}
  ]
{{'}'}}</code></pre>
                 </div>
              </div>

              <!-- Comparison Matrix -->
              <div class="bg-[#e4e7eb] rounded-sm p-6 shadow-inner border border-surface-container-highest">
                 <h4 class="font-label text-[10px] font-bold text-on-surface uppercase tracking-widest mb-6">Comparison Matrix</h4>
                 
                 <div class="mb-5 bg-white p-3 rounded-sm shadow-sm relative overflow-hidden">
                    <div class="absolute left-0 bottom-0 top-auto h-[2px] w-full bg-[#005faf]/20">
                      <div class="h-full bg-[#005faf] w-3/4"></div>
                    </div>
                    <div class="font-display font-bold text-xs text-[#005faf] mb-1">Reactive Forms</div>
                    <p class="font-body text-[9px] text-on-surface-variant leading-relaxed">Programmatic, synchronous, predictable data flow.</p>
                 </div>
                 
                 <div class="bg-white p-3 rounded-sm shadow-sm relative overflow-hidden">
                    <div class="absolute left-0 bottom-0 top-auto h-[2px] w-full bg-[#cc002b]/20">
                      <div class="h-full bg-[#cc002b] w-1/3"></div>
                    </div>
                    <div class="font-display font-bold text-xs text-[#cc002b] mb-1">Template-Driven</div>
                    <p class="font-body text-[9px] text-on-surface-variant leading-relaxed">Declarative, asynchronous, ideal for simple UIs.</p>
                 </div>
              </div>
           </div>
        </div>

        <!-- Custom Async Section Row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
           <div>
              <span class="font-label xs-text text-[#005faf] uppercase tracking-widest font-bold mb-4 block">ARCHITECTURE LOGIC</span>
              <h2 class="font-display text-3xl font-bold text-on-surface mb-6">Custom Async Validator</h2>
              <p class="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">
                Implementation of an asynchronous validator that checks the Angular Architecture Registry for duplicate skill entries. It utilizes <span class="text-[#cc002b] font-mono bg-[#cc002b]/5 px-1 rounded">debounceTime</span> and <span class="text-[#cc002b] font-mono bg-[#cc002b]/5 px-1 rounded">switchMap</span> to prevent excessive API calls.
              </p>
              <ul class="space-y-3 font-body text-xs text-on-surface-variant">
                 <li class="flex items-center gap-3"><svg class="w-4 h-4 text-[#005faf]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> RxJS-driven reactivity</li>
                 <li class="flex items-center gap-3"><svg class="w-4 h-4 text-[#005faf]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Dependency injection support</li>
              </ul>
           </div>
           
           <!-- Async Code Box -->
           <div class="bg-[#11131e] rounded-sm shadow-2xl overflow-hidden border border-[#2d3142] p-8 -rotate-1 relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              <div class="flex items-center justify-between mb-6 border-b border-surface-container-highlight/20 pb-4">
                 <div class="flex gap-1.5">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                 </div>
                 <div class="font-mono text-[8px] text-surface-container-highlight tracking-widest">validator.service.ts</div>
              </div>
              <pre class="font-mono text-[10px] leading-relaxed"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export function</span> <span class="text-[#d2a8ff]">uniqueSkillValidator</span>(<span class="text-[#79c0ff]">service</span>: RegistryService) &#123;
  <span class="text-[#ff7b72]">return</span> (<span class="text-[#79c0ff]">control</span>: AbstractControl) <span class="text-[#ff7b72]">=&gt;</span> &#123;
    <span class="text-[#ff7b72]">return</span> service.<span class="text-[#d2a8ff]">checkSkill</span>(control.value).<span class="text-[#d2a8ff]">pipe</span>(
      <span class="text-[#d2a8ff]">map</span>(exists <span class="text-[#ff7b72]">=&gt;</span> (exists ? &#123; <span class="text-[#a5d6ff]">duplicate</span>: <span class="text-[#79c0ff]">true</span> &#125; : <span class="text-[#79c0ff]">null</span>)),
      <span class="text-[#d2a8ff]">catchError</span>(() <span class="text-[#ff7b72]">=&gt;</span> <span class="text-[#d2a8ff]">of</span>(<span class="text-[#79c0ff]">null</span>))
    );
  &#125;;
&#125;</code></pre>
           </div>
        </div>

        <!-- Architectural Decisions Grid -->
        <div class="mb-24">
           <div class="text-center mb-12">
              <h2 class="font-display text-3xl font-bold text-on-surface">Architectural Decisions</h2>
           </div>
           
           <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="group">
                 <div class="w-full h-64 bg-surface-container-highest rounded-sm mb-6 relative overflow-hidden shadow-sm">
                    <!-- Placeholder graphic mimicking dark blurry code editor -->
                    <div class="absolute inset-0 bg-[#2d3142] p-4 flex flex-col gap-2 filter opacity-90 transition-transform duration-700 group-hover:scale-105">
                       <div class="w-3/4 h-2 bg-gradient-to-r from-[#ce9178] to-transparent rounded"></div>
                       <div class="w-1/2 h-2 bg-gradient-to-r from-[#569cd6] to-transparent rounded ml-4"></div>
                       <div class="w-2/3 h-2 bg-gradient-to-r from-[#dcdcaa] to-transparent rounded ml-4"></div>
                       <div class="w-1/4 h-2 bg-gradient-to-r from-[#4fc1ff] to-transparent rounded ml-8"></div>
                       <div class="w-1/2 h-2 bg-gradient-to-r from-[#c586c0] to-transparent rounded ml-8"></div>
                       <div class="w-full h-2 bg-gradient-to-r from-[#9cdcfe] to-transparent rounded mt-4"></div>
                       <div class="w-3/4 h-2 bg-gradient-to-r from-[#569cd6] to-transparent rounded ml-4"></div>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-[#11131e]/50 to-transparent"></div>
                 </div>
                 <h3 class="font-display text-xl font-bold text-on-surface mb-3">Reactive Forms Strategy</h3>
                 <p class="font-body text-xs text-on-surface-variant leading-relaxed">When scalability is paramount, Reactive Forms provide total control over validators, easier unit testing of complex logic, and deep integration with RxJS streams.</p>
              </div>
              
              <div class="group">
                 <div class="w-full h-64 bg-surface-container-lowest rounded-sm mb-6 relative overflow-hidden shadow-sm border border-surface-container-high transition-transform duration-700 group-hover:scale-105">
                    <!-- Placeholder graphic mimicking light UI layout screen -->
                    <div class="absolute inset-0 bg-[#e4e7eb] flex items-center justify-center filter opacity-50">
                       <div class="w-48 h-32 border border-[#005faf]/30 rounded-sm bg-white/50 p-2 flex flex-col gap-2">
                           <div class="w-1/3 h-1 bg-[#005faf]/30 rounded"></div>
                           <div class="w-full h-3 border border-surface-container-highest rounded-sm"></div>
                           <div class="w-full h-3 border border-surface-container-highest rounded-sm"></div>
                           <div class="w-1/4 h-4 bg-[#cc002b]/20 rounded-sm self-end mt-auto"></div>
                       </div>
                    </div>
                    <div class="absolute inset-0 inset-shadow-sm bg-gradient-to-t from-white/20 to-transparent"></div>
                 </div>
                 <h3 class="font-display text-xl font-bold text-on-surface mb-3">Template-Driven Patterns</h3>
                 <p class="font-body text-xs text-on-surface-variant leading-relaxed">Ideal for simple data entry points. Uses <code>[(ngModel)]</code> for two-way binding. Replaces implementation blocks for standard flat inputs or dynamic arrays.</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  `
})
export class FormsComponent {}
