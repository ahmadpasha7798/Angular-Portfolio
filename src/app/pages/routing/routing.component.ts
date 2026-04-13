import { Component } from '@angular/core';

@Component({
  selector: 'app-routing',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#f8f9fa]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <span class="inline-block py-1 text-[#005faf] uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label">NAVIGATION ARCHITECTURE</span>
            <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-4">
              Routing <br><span class="text-[#cc002b] italic pr-4">Logic</span> Maps
            </h1>
            <p class="font-body text-sm md:text-base text-on-surface-variant leading-relaxed max-w-xl">
              Deconstructing Angular's router ecosystem through structural blueprints, guard simulations, and hierarchical state management.
            </p>
          </div>
          <div class="flex items-center gap-2 font-mono text-[10px] text-on-surface-variant bg-white border border-surface-container-high px-4 py-2 rounded-sm shadow-sm">
             <span class="w-2 h-2 rounded-full bg-[#005faf]"></span> CURRENT PATH: <span class="text-[#005faf] font-bold bg-[#005faf]/10 px-2 py-0.5 rounded-sm">/routing/tree-view</span>
          </div>
        </div>

        <!-- Browser Bar Mockup -->
        <div class="bg-white border text-surface-container-highest border-surface-container-highest rounded-sm p-3 flex items-center gap-4 mb-8 shadow-sm">
           <div class="flex gap-1.5 ml-2">
              <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
           </div>
           <div class="flex-1 bg-[#f8f9fa] border border-surface-container-high rounded-sm px-4 py-1.5 font-mono text-[10px] text-on-surface-variant flex items-center justify-between">
              <div><span class="text-surface-container-highest">https://</span>editorial_engineering<span class="font-bold text-on-surface">/routing</span><span class="text-[#cc002b]">?id=x547&amp;view=blueprint&amp;auth=true</span></div>
              <svg class="w-3 h-3 text-surface-container-highest" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
           </div>
        </div>

        <!-- Layout Row -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
           
           <!-- Routing Tree -->
           <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 lg:col-span-2">
              <div class="flex justify-between items-center mb-8">
                 <div>
                   <h2 class="font-display text-xl font-bold text-on-surface mb-1">Route Hierarchy</h2>
                   <p class="font-body text-xs text-on-surface-variant">Visualizing nested tree with lazy-loaded modules</p>
                 </div>
                 <div class="text-[#005faf]">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                 </div>
              </div>
              
              <div class="space-y-2 relative">
                 <div class="absolute left-[39px] top-10 bottom-6 w-px bg-surface-container-high border-l border-dashed border-surface-container-highest"></div>
                 
                 <!-- Root Node -->
                 <div class="flex items-center gap-4 group">
                    <div class="w-6 h-6 bg-[#cc002b] rounded-sm flex items-center justify-center text-white font-mono text-[8px] font-bold">R</div>
                    <div class="flex-1 bg-[#f8f9fa] border border-surface-container-lowest px-4 py-3 rounded-sm font-mono text-xs text-on-surface flex justify-between items-center group-hover:border-[#cc002b]/30 transition-colors">
                       <span>app.routes</span>
                       <span class="text-[8px] text-surface-container-highest uppercase tracking-widest font-sans">ROOT</span>
                    </div>
                 </div>
                 
                 <!-- Child Nodes -->
                 <div class="pl-14 space-y-2">
                    <div class="flex-1 bg-white border border-surface-container-low px-4 py-3 rounded-sm font-mono text-xs text-on-surface flex justify-between items-center relative overflow-hidden">
                       <div class="absolute inset-y-0 left-0 w-1 bg-surface-container-highest"></div>
                       <span class="ml-2">auth/</span>
                       <span class="text-[8px] text-[#cc002b] font-bold uppercase tracking-widest font-sans">LAZY LOADED</span>
                    </div>
                    
                    <!-- Active Node -->
                    <div class="flex-1 bg-[#005faf] border border-[#005faf] px-4 py-3 rounded-sm font-mono text-xs text-white flex justify-between items-center shadow-md relative overflow-hidden transform -translate-x-2">
                       <span class="ml-2 font-bold">dashboard/</span>
                       <span class="text-[8px] text-white/70 font-bold uppercase tracking-widest font-sans">ACTIVE VIEW</span>
                    </div>
                    
                    <!-- Deeply nested nodes -->
                    <div class="pl-8 space-y-2 relative">
                       <div class="absolute left-[-11px] top-4 bottom-6 w-px bg-surface-container-high border-l border-dashed border-surface-container-highest"></div>
                       <div class="flex-1 bg-white border border-surface-container-low px-4 py-2 rounded-sm font-mono text-xs text-on-surface relative">
                         <div class="absolute -left-5 top-1/2 w-4 border-t border-dashed border-surface-container-high"></div>
                         users/list
                       </div>
                       <div class="flex-1 bg-white border border-surface-container-low px-4 py-2 rounded-sm font-mono text-xs text-on-surface relative">
                         <div class="absolute -left-5 top-1/2 w-4 border-t border-dashed border-surface-container-high"></div>
                         analytics/v1.0
                       </div>
                       <div class="flex-1 bg-white border border-surface-container-low px-4 py-2 rounded-sm font-mono text-xs text-on-surface relative">
                         <div class="absolute -left-5 top-1/2 w-4 border-t border-dashed border-surface-container-high"></div>
                         settings/
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           
           <!-- Guard Simulator -->
           <div class="bg-[#11131e] rounded-sm p-8 flex flex-col shadow-xl">
              <h2 class="font-display text-xl font-bold text-white mb-8 border-b border-surface-container-highlight/20 pb-4">Guard Simulator</h2>
              
              <div class="space-y-6 flex-1">
                 <!-- CanActivate -->
                 <div class="bg-surface-container-highlight/5 border border-surface-container-highlight/20 p-4 rounded-sm relative overflow-hidden group">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#cc002b]"></div>
                    <div class="pl-2">
                       <div class="flex justify-between items-center mb-2">
                          <span class="font-label xs-text font-bold text-white uppercase tracking-widest">CANACTIVATE</span>
                          <span class="w-2 h-2 rounded-full bg-[#cc002b] animate-pulse"></span>
                       </div>
                       <p class="font-body text-[10px] text-white/50 mb-3 leading-relaxed">Restricting access to Admin paths based on JWT presence and role metadata.</p>
                       <div class="w-full h-1 bg-surface-container-highest/20 rounded-full overflow-hidden">
                          <div class="w-3/4 h-full bg-[#cc002b] rounded-full"></div>
                       </div>
                    </div>
                 </div>
                 
                 <!-- CanDeactivate -->
                 <div class="bg-surface-container-highlight/5 border border-surface-container-highlight/20 p-4 rounded-sm relative overflow-hidden group">
                    <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#005faf]"></div>
                    <div class="pl-2">
                       <div class="flex justify-between items-center mb-2">
                          <span class="font-label xs-text font-bold text-white uppercase tracking-widest">CANDEACTIVATE</span>
                          <span class="w-2 h-2 rounded-full bg-[#005faf] animate-pulse"></span>
                       </div>
                       <p class="font-body text-[10px] text-white/50 mb-3 leading-relaxed">Intercepting navigation attempts when a form has unsaved state changes.</p>
                       <div class="w-full h-1 bg-surface-container-highest/20 rounded-full overflow-hidden">
                          <div class="w-[90%] h-full bg-[#005faf] rounded-full"></div>
                       </div>
                    </div>
                 </div>
              </div>
              
              <button class="w-full bg-[#1e2235] hover:bg-[#2a2f4c] text-white font-label xs-text font-bold uppercase tracking-[0.2em] py-4 rounded-sm transition-colors border border-surface-container-highlight/20 mt-6">
                Run Simulator
              </button>
           </div>
        </div>

        <!-- Middle Info Bar -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 bg-[#f8f9fa] border border-surface-container-low p-8 rounded-sm items-center shadow-inner">
           <div>
              <h3 class="font-display text-lg font-bold text-on-surface mb-2">Nav Context</h3>
              <p class="font-body text-xs text-on-surface-variant mb-6 max-w-sm leading-relaxed">Implementing breadcrumbs via route data tokens and dynamic active class injection.</p>
              
              <div class="flex justify-start gap-4 font-label text-[8px] font-bold uppercase tracking-widest text-[#005faf]">
                 <span>PathData</span>
                 <span>Angular.Core</span>
                 <span class="text-[#cc002b]">Route Factory</span>
              </div>
           </div>
           
           <div class="grid grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-sm border border-surface-container-lowest shadow-sm flex items-center justify-between">
                 <div>
                   <div class="font-label tracking-widest text-[8px] text-on-surface-variant uppercase font-bold mb-1">STATE BOUNDARY</div>
                   <div class="font-mono text-sm font-bold text-on-surface">ActiveLink[0]</div>
                 </div>
              </div>
              <div class="bg-white p-4 rounded-sm border border-surface-container-lowest shadow-sm flex items-center justify-between">
                 <div>
                   <div class="font-label tracking-widest text-[8px] text-on-surface-variant uppercase font-bold mb-1">MODULE ID</div>
                   <div class="font-mono text-sm font-bold text-on-surface">0xAF2A</div>
                 </div>
              </div>
           </div>
        </div>

        <!-- Bottom Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div class="flex flex-col justify-center">
              <h2 class="font-display text-3xl font-bold text-on-surface mb-8">Parametric Routing <br>& Deep Linking</h2>
              
              <div class="space-y-8">
                 <div class="flex gap-6 items-start">
                    <div class="w-12 h-12 bg-[#cc002b]/10 rounded-sm flex items-center justify-center text-[#cc002b] flex-shrink-0">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                    </div>
                    <div>
                       <h4 class="font-display font-bold text-on-surface mb-1">Path Parameters</h4>
                       <p class="font-body text-xs text-on-surface-variant leading-relaxed">Extracting IDs from activatedRoute.params for data fetching services.</p>
                    </div>
                 </div>
                 
                 <div class="flex gap-6 items-start">
                    <div class="w-12 h-12 bg-[#005faf]/10 rounded-sm flex items-center justify-center text-[#005faf] flex-shrink-0">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <div>
                       <h4 class="font-display font-bold text-on-surface mb-1">Query Parameters</h4>
                       <p class="font-body text-xs text-on-surface-variant leading-relaxed">Managing UI state like filters, sorts, and pagination through URL for shareable states.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <!-- The Glowing Sphere Graphic -->
           <div class="bg-[#0a0f12] rounded-sm p-4 h-[400px] relative overflow-hidden flex items-center justify-center shadow-2xl border border-[#1a252b]">
              <!-- CSS simulated sphere -->
              <div class="w-[280px] h-[280px] rounded-full relative z-10" 
                   style="background: radial-gradient(circle at 30% 30%, transparent 20%, #15cca9 40%, rgba(21,204,169,0.2) 60%, transparent 80%); box-shadow: inset 0 0 50px rgba(0,0,0,0.8), 0 0 80px rgba(21,204,169,0.3);">
                 <!-- Sphere texture overlay -->
                 <div class="absolute inset-0 rounded-full" style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(21,204,169,0.1) 2px, rgba(21,204,169,0.1) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(21,204,169,0.1) 2px, rgba(21,204,169,0.1) 4px); opacity: 0.5;"></div>
              </div>
              <div class="absolute bottom-6 left-6 flex gap-2 z-20">
                 <div class="bg-[#cc002b] text-white font-label text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">ROUTER OUTLET</div>
                 <div class="bg-[#2a353c] text-white font-label text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm border border-white/10">ACTIVE NODE</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  `
})
export class RoutingComponent {}
