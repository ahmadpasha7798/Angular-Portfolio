import { Component } from '@angular/core';

@Component({
  selector: 'app-architecture',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#fdfdfd]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <span class="inline-block py-1 px-3 rounded-sm bg-primary/5 text-primary uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-primary/10">DEEP DIVE: 02.05</span>
            <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
              Component <br><span class="text-[#cc002b] italic pr-4">Architecture</span>
            </h1>
            <p class="font-body text-lg text-on-surface-variant leading-relaxed">
              Understanding the hierarchical nature of Angular applications through component nesting, data flow patterns, and granular lifecycle management.
            </p>
          </div>
          <div class="flex justify-start md:justify-end">
             <div class="border-l-4 border-surface-container-highest pl-6 py-2 max-w-xs">
                <p class="font-body text-xs text-on-surface-variant italic leading-relaxed">"Architecture is not about where all the files live—it's about how state ripples through the view."</p>
             </div>
          </div>
        </div>

        <!-- The Nesting Blueprint -->
        <div class="mb-24">
           <div class="flex justify-between items-end mb-8">
             <div>
               <h2 class="font-display text-2xl font-bold text-on-surface mb-2">The Nesting Blueprint</h2>
               <p class="font-body text-sm text-on-surface-variant">Visualizing a real-world component hierarchy and the runtime bridges between layers.</p>
             </div>
             <div class="hidden sm:flex items-center gap-4 font-label text-[10px] font-bold tracking-widest uppercase">
                <div class="flex items-center gap-2"><div class="w-3 h-3 bg-[#cc002b] rounded-sm"></div> Parent</div>
                <div class="flex items-center gap-2"><div class="w-3 h-3 bg-[#005faf] rounded-sm"></div> Child</div>
             </div>
           </div>
           
           <div class="bg-white border border-surface-container-highest shadow-sm rounded-sm p-4 md:p-12 relative">
             <div class="absolute inset-y-0 left-0 border-l border-surface-container-highest border-dashed opacity-50 ml-12"></div>
             <div class="absolute inset-y-0 right-0 border-r border-surface-container-highest border-dashed opacity-50 mr-12"></div>
             
             <!-- Diagram Container -->
             <div class="bg-[#f8f9fa] border border-surface-container-low rounded p-8 relative max-w-4xl mx-auto shadow-inner">
                <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#cc002b]/20 to-transparent"></div>
                <div class="text-center font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">Application Root (app.component)</div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <!-- Dashboard Node -->
                   <div class="bg-white border border-surface-container-highest rounded-sm p-6 shadow-sm relative">
                      <div class="absolute -top-3 left-6 bg-[#cc002b] text-white font-mono text-[8px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest">Parent</div>
                      <div class="font-display font-bold text-sm text-on-surface mb-6 border-b border-surface-container-lowest pb-4">dashboard.component</div>
                      
                      <!-- Child Node -->
                      <div class="bg-surface border border-[#005faf]/20 rounded-sm p-4 relative group hover:border-[#005faf]/50 transition-colors">
                         <div class="flex justify-between items-center bg-white border border-surface-container-lowest p-2 rounded-sm font-mono text-[10px] text-on-surface">
                            <span>[data]="userData"</span>
                            <span class="text-[#005faf] font-bold">@Input() data</span>
                         </div>
                         <div class="h-4 border-l border-dashed border-[#005faf]/30 mx-auto w-px"></div>
                         <div class="flex justify-between items-center bg-white border border-surface-container-lowest p-2 rounded-sm font-mono text-[10px] text-on-surface">
                            <span>(update)="save($event)"</span>
                            <span class="text-[#cc002b] font-bold">@Output() update</span>
                         </div>
                         <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span class="bg-[#005faf] text-white font-mono text-[8px] py-1 px-2 rounded-sm">CHILD : user-widget.component</span>
                         </div>
                      </div>
                   </div>
                   
                   <!-- Settings Node -->
                   <div class="bg-white border text-surface-container-highest border-dashed rounded-sm p-6 flex flex-col justify-center items-center opacity-60">
                      <div class="font-display font-bold text-sm text-on-surface mb-2">settings.component</div>
                      <div class="font-label xs-text uppercase tracking-widest text-[#005faf] font-bold">LAZY LOADED BUNDLE (4.2kb)</div>
                   </div>
                </div>
             </div>
           </div>
        </div>

        <!-- Concepts Row -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
           <!-- Concept 01 -->
           <div>
              <h3 class="font-display text-2xl font-bold text-on-surface mb-4 border-b-2 border-primary inline-block pb-2">01. Unidirectional Data</h3>
              <p class="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                Angular enforces a strict downward flow of data through <strong>@Input</strong> properties, while state changes bubble upward via <strong>@Output</strong> event emitters. This "Data Down, Actions Up" philosophy ensures predictability in complex UIs.
              </p>
              
              <div class="bg-[#11131e] rounded-sm border border-[#2d3142] p-6 font-mono text-xs overflow-x-auto shadow-2xl relative">
                  <div class="mb-4 flex gap-2">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <code class="text-[#c1c6e5] leading-loose"><span class="text-[#ff7b72]">@Component</span>({{'{'}}<br>  selector: <span class="text-[#a5d6ff]">'user-card'</span>,<br>  template: <span class="text-[#a5d6ff]">'&lt;button (click)="submit()"&gt;'</span><br>{{'}'}})<br><span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">UserCardComponent</span> {{'{'}}<br>  <span class="text-[#8cd2ff]">@Input()</span> <span class="text-[#79c0ff]">user!:</span> User;<br>  <span class="text-[#8cd2ff]">@Output()</span> <span class="text-[#79c0ff]">deleted</span> <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">new</span> EventEmitter&lt;<span class="text-[#ff7b72]">number</span>&gt;();<br><br>  <span class="text-[#6b7280] italic">// Triggered via user interaction</span><br>  <span class="text-[#d2a8ff]">submit</span>() {{'{'}} <span class="text-[#ff7b72]">this</span>.deleted.<span class="text-[#d2a8ff]">emit</span>(<span class="text-[#79c0ff]">1</span>); {{'}'}}<br>{{'}'}}</code>
              </div>
           </div>

           <!-- Concept 02 -->
           <div>
              <h3 class="font-display text-2xl font-bold text-on-surface mb-4 border-b-2 border-secondary inline-block pb-2">02. The Temporal Hook</h3>
              <p class="font-body text-sm text-on-surface-variant mb-6 leading-relaxed">
                Components aren't static; they breathe through stages. From instantiation via <strong>ngOnInit</strong> to the DOM's cleanup phase in <strong>ngOnDestroy</strong>, mastering these hooks is vital for performance.
              </p>
              
              <div class="space-y-4 pt-4 border-t border-surface-container-high">
                 <!-- Hook 1 -->
                 <div class="bg-surface-container-lowest border border-surface-container-low rounded-sm p-4 flex gap-4 items-center group hover:border-[#cc002b] hover:shadow-sm transition-all">
                    <div class="font-display text-2xl font-light text-[#cc002b]/20 group-hover:text-[#cc002b] transition-colors">01</div>
                    <div class="flex-1">
                       <div class="font-mono text-sm font-bold text-on-surface mb-1">ngOnChanges()</div>
                       <div class="font-body text-xs text-on-surface-variant">Invoked when @Input properties detect changes.</div>
                    </div>
                    <div class="text-[#cc002b]/50 group-hover:text-[#cc002b]">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </div>
                 </div>
                 
                 <!-- Hook 2 -->
                 <div class="bg-surface-container-lowest border border-surface-container-low rounded-sm p-4 flex gap-4 items-center group hover:border-[#cc002b] hover:shadow-sm transition-all">
                    <div class="font-display text-2xl font-light text-[#cc002b]/20 group-hover:text-[#cc002b] transition-colors">02</div>
                    <div class="flex-1">
                       <div class="font-mono text-sm font-bold text-on-surface mb-1">ngOnInit()</div>
                       <div class="font-body text-xs text-on-surface-variant">Main data allocation setup. Runs once upon bridge.</div>
                    </div>
                    <div class="text-[#cc002b]/50 group-hover:text-[#cc002b]">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                 </div>

                 <!-- Hook 3 -->
                 <div class="bg-surface-container-lowest border border-surface-container-low rounded-sm p-4 flex gap-4 items-center group hover:border-[#cc002b] hover:shadow-sm transition-all">
                    <div class="font-display text-2xl font-light text-[#cc002b]/20 group-hover:text-[#cc002b] transition-colors">03</div>
                    <div class="flex-1">
                       <div class="font-mono text-sm font-bold text-on-surface mb-1">ngAfterViewInit()</div>
                       <div class="font-body text-xs text-on-surface-variant">Fired after DOM layout has fully manifested.</div>
                    </div>
                    <div class="text-[#cc002b]/50 group-hover:text-[#cc002b]">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </div>
                 </div>
              </div>
           </div>
        </div>
        
        <!-- Architecture Taxonomy Grid -->
        <div class="mb-8"><span class="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Taxonomy Map</span></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
           
           <!-- Smart vs Presentational -->
           <div class="col-span-1 md:col-span-2 bg-[#f8f9fa] border border-surface-container-high p-8 rounded-sm hover:-translate-y-1 transition-transform">
              <div class="w-8 h-8 bg-[#cc002b] rounded-sm flex items-center justify-center text-white mb-6 font-mono text-xs shadow-md">O</div>
              <h4 class="font-display text-xl font-bold text-on-surface mb-4">Smart vs. Presentational</h4>
              <p class="font-body text-sm text-on-surface-variant leading-relaxed max-w-lg mb-8">
                Differentiating between "Smart" components that possess logic/services and "Presentational" (Dumb) components that purely render UI. This segregation is the cornerstone of testable architecture.
              </p>
              <div class="flex gap-2">
                 <span class="font-label xs-text uppercase bg-white border border-surface-container-highest px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[8px] tracking-[0.2em] shadow-sm">Container</span>
                 <span class="font-label xs-text uppercase bg-white border border-surface-container-highest px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[8px] tracking-[0.2em] shadow-sm">Presentational</span>
                 <span class="font-label xs-text uppercase bg-white border border-surface-container-highest px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[8px] tracking-[0.2em] shadow-sm">State Driven</span>
              </div>
           </div>
           
           <!-- Host Listeners -->
           <div class="bg-[#005faf] text-white p-8 rounded-sm shadow-md hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div class="absolute -right-10 -top-10 text-[8rem] font-bold opacity-10 font-mono">@</div>
              <div class="w-8 h-8 bg-white/20 rounded-sm flex items-center justify-center text-white mb-6 font-mono text-xs backdrop-blur-sm">^</div>
              <h4 class="font-display text-xl font-bold mb-4">Host Listeners</h4>
              <p class="font-body text-sm text-white/80 leading-relaxed mb-6">
                Intercepting DOM events at the component wrapper boundary without direct template manipulation. Keeps architecture reactive.
              </p>
              <div class="w-full h-px bg-white/20 mb-4"></div>
              <a href="#" class="font-label text-[10px] uppercase font-bold tracking-widest hover:underline flex items-center gap-1">Read Security Specs <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>
           </div>

           <!-- Element Projection -->
           <div class="bg-[#005e73] text-white p-8 rounded-sm shadow-md hover:-translate-y-1 transition-transform relative overflow-hidden">
              <div class="absolute -right-5 -bottom-5 text-[6rem] font-display font-black opacity-10">/&gt;</div>
              <div class="w-8 h-8 bg-white/20 rounded-sm flex items-center justify-center text-white mb-6 font-mono text-xs backdrop-blur-sm">[]</div>
              <h4 class="font-display text-xl font-bold mb-4">Content Projection</h4>
              <p class="font-body text-sm text-white/80 leading-relaxed mb-6">
                Using ng-content to create wrapper layout components that act purely as structural frames, accepting transcluded DOM fragments.
              </p>
              <a href="#" class="text-secondary-container font-label text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">Read More &rarr;</a>
           </div>
           
           <!-- Template Ref -->
           <div class="col-span-1 md:col-span-2 bg-surface border-2 border-dashed border-surface-container-highest p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-surface-container transition-colors">
              <div>
                <h4 class="font-display text-xl font-bold text-on-surface mb-2">Template Reference Variables</h4>
                <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                  Creating handles on DOM elements or component instances in the template view. Direct access without querying.
                </p>
                <a href="#" class="text-[#cc002b] font-label text-[10px] uppercase font-bold tracking-[0.2em] hover:underline flex items-center gap-2">View Code Snippet <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>
              </div>
              <div class="w-24 h-24 border border-[#cc002b]/30 rounded-sm bg-[#cc002b]/5 flex items-center justify-center p-2 relative shadow-inner">
                 <div class="absolute top-1 left-1 bg-[#cc002b] text-white text-[6px] font-mono px-1 rounded-sm">#inputRef</div>
                 <div class="w-full h-8 bg-white border border-surface-container-high mt-4"></div>
              </div>
           </div>
           
        </div>

        <!-- CTA Big Red Block -->
        <div class="bg-[#cc002b] rounded-sm p-12 md:p-24 text-center shadow-[0_20px_40px_rgba(204,0,43,0.3)] relative overflow-hidden">
           <div class="absolute inset-0 border-8 border-white/10 m-4 rounded-sm"></div>
           <h2 class="font-display text-4xl md:text-6xl font-black text-white mb-6 relative z-10 tracking-tight">Build the <br>Architecture <span class="font-light italic">of</span> Tomorrow</h2>
           <p class="font-body text-white/90 max-w-lg mx-auto mb-10 relative z-10">Ready to apply these architectural patterns? Join our open-source workshop and contribute to the evolution of Angular engineering.</p>
           
           <div class="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button class="bg-white text-[#cc002b] font-label text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm shadow-xl hover:bg-surface transition-colors">View Api Reference</button>
              <button class="bg-transparent border border-white text-white font-label text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-white/10 transition-colors">Download Node</button>
           </div>
        </div>

      </div>
    </div>
  `
})
export class ArchitectureComponent {}
