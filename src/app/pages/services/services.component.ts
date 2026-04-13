import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#f8f9fa]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header Section -->
        <div class="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div>
              <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-[#cc002b] uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-[#cc002b]/10 shadow-sm">ANGULAR TECHNICAL CORE</span>
              <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
                The Art of <br><span class="text-[#cc002b]">Dependency</span><br><span class="text-[#cc002b]">Injection.</span>
              </h1>
              <p class="font-body text-base text-on-surface-variant leading-relaxed max-w-md">
                In Angular, Services are the architects of logic. Dependency Injection is the blueprint that connects them. Explore the hierarchy of technical modularity.
              </p>
           </div>
           
           <div class="bg-white border border-surface-container-lowest p-8 rounded-sm shadow-xl relative mt-8 md:mt-0">
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-[#cc002b]/5 rounded-full filter blur-xl"></div>
              <div class="flex items-center gap-4 mb-6 relative z-10">
                 <div class="w-10 h-10 bg-[#cc002b]/10 flex items-center justify-center text-[#cc002b] rounded-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                 </div>
                 <div>
                    <h3 class="font-display font-bold text-on-surface text-sm">Service Strategy</h3>
                    <div class="font-label xs-text text-on-surface-variant tracking-widest uppercase">Root level vs. Module vs. Component level</div>
                 </div>
              </div>
              
              <div class="space-y-4">
                 <div class="w-full h-1 bg-[#cc002b] rounded-full"></div>
                 <div class="flex gap-4">
                    <div class="h-8 flex-1 bg-surface-container-lowest border border-surface-container-high rounded-sm"></div>
                    <div class="h-8 flex-1 bg-surface-container-lowest border border-surface-container-high rounded-sm"></div>
                    <div class="h-8 flex-1 bg-[#cc002b]/20 border border-[#cc002b]/30 rounded-sm"></div>
                 </div>
              </div>
           </div>
        </div>

        <!-- Injection Resolution Hierarchy -->
        <div class="mb-32 flex flex-col items-center">
           <h2 class="font-display text-2xl font-bold text-on-surface mb-2 text-center">Injection Resolution Hierarchy</h2>
           <p class="font-label xs-text text-on-surface-variant uppercase tracking-[0.2em] mb-12 text-center font-bold">From global platform tokens to local view providers</p>
           
           <div class="w-full max-w-2xl relative">
              <div class="absolute inset-y-0 left-8 md:left-12 w-1 l bg-[#cc002b]/10 rounded-full z-0"></div>
              <div class="absolute inset-y-0 left-[34px] md:left-[50px] w-px border-l-2 border-dashed border-[#005faf]/20 z-0"></div>
              
              <div class="space-y-6 relative z-10 w-full flex flex-col items-center">
                 
                 <!-- Platform -->
                 <div class="w-full max-w-xl bg-white border border-surface-container-high rounded-sm p-6 flex justify-between items-center shadow-sm hover:translate-x-2 transition-transform">
                    <div class="flex items-center gap-6">
                       <div class="w-3 h-3 bg-[#005faf] rounded-full ring-4 ring-white shadow"></div>
                       <div>
                          <h4 class="font-display font-bold text-on-surface text-lg">Platform Injector</h4>
                          <p class="font-body text-xs text-on-surface-variant italic">Platform-level objects that outlive app setup</p>
                       </div>
                    </div>
                    <div class="text-[#005faf]">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                 </div>

                 <!-- Root -->
                 <div class="w-full max-w-xl bg-white border border-surface-container-high rounded-sm p-6 flex justify-between items-center shadow-sm hover:translate-x-2 transition-transform">
                    <div class="flex items-center gap-6">
                       <div class="w-3 h-3 bg-[#005faf] rounded-full ring-4 ring-white shadow"></div>
                       <div>
                          <h4 class="font-display font-bold text-on-surface text-lg">Root Injector</h4>
                          <p class="font-body text-xs text-on-surface-variant italic">providedIn: 'root' - Singletons for the entire application</p>
                       </div>
                    </div>
                    <div class="text-[#005faf]">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </div>
                 </div>

                 <!-- Module -->
                 <div class="w-full max-w-xl bg-white border border-surface-container-high rounded-sm p-6 flex justify-between items-center shadow-sm hover:translate-x-2 transition-transform">
                    <div class="flex items-center gap-6">
                       <div class="w-3 h-3 bg-[#005faf] rounded-full ring-4 ring-white shadow"></div>
                       <div>
                          <h4 class="font-display font-bold text-on-surface text-lg">Module Injector</h4>
                          <p class="font-body text-xs text-on-surface-variant italic">Lazily loaded boundaries for feature encapsulations</p>
                       </div>
                    </div>
                    <div class="text-[#005faf]">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    </div>
                 </div>

                 <!-- Component -->
                 <div class="w-full max-w-xl bg-white border border-surface-container-high rounded-sm p-6 flex justify-between items-center shadow-md relative overflow-hidden border-l-4 border-l-[#191c1d]">
                    <div class="absolute inset-y-0 left-0 bg-[#f8f9fa] w-8 border-r border-surface-container-highest"></div>
                    <div class="flex items-center gap-6 relative z-10">
                       <div class="w-3 h-3 ml-[3px] bg-[#191c1d] rounded-sm shadow rotate-45"></div>
                       <div class="pl-2">
                          <h4 class="font-display font-bold text-on-surface text-lg">Component Injector</h4>
                          <p class="font-body text-xs text-on-surface-variant italic text-[#cc002b]">Locally bound service instances at view-level lifecycle</p>
                       </div>
                    </div>
                    <div class="text-[#191c1d] relative z-10">
                       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                 </div>
                 
              </div>
           </div>
        </div>

        <!-- Reactive Data Streams -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
           <div>
              <h2 class="font-display text-3xl font-bold text-on-surface mb-6">Reactive Data Streams</h2>
              <p class="font-body text-sm text-on-surface-variant mb-10 leading-relaxed max-w-md">
                A robust Service doesn't just hold data; it manages the lifecycle. This implementation tracks upload progress, handles errors, and ensures UI glitches are eliminated via RxJS.
              </p>
              
              <div class="bg-white border border-surface-container-highest rounded-sm p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border-b-2 border-b-[#cc002b]">
                 <div class="flex justify-between items-center mb-4">
                    <span class="font-label text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Connecting to Store...</span>
                    <span class="font-display text-xs font-bold text-[#cc002b]">72%</span>
                 </div>
                 <div class="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden mb-4">
                    <div class="h-full bg-[#cc002b] w-[72%] rounded-full animate-pulse"></div>
                 </div>
                 <div class="flex items-center gap-2 text-on-surface-variant opacity-60">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <span class="font-body text-[10px] italic">Processing stream boundary updates</span>
                 </div>
              </div>
           </div>
           
           <div class="bg-[#11131e] rounded-sm shadow-2xl overflow-hidden p-8 border border-[#2d3142]">
              <div class="flex gap-2 mb-4">
                 <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                 <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                 <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <pre class="font-mono text-[11px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">@Injectable</span>(&#123; providedIn: <span class="text-[#a5d6ff]">'root'</span> &#125;)
<span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">DataService</span> &#123;
  <span class="text-[#ff7b72]">private</span> <span class="text-[#79c0ff]">http</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">inject</span>(HttpClient);

  <span class="text-[#d2a8ff]">uploadBlueprint</span>(<span class="text-[#79c0ff]">file</span>: File) &#123;
    <span class="text-[#ff7b72]">return</span> <span class="text-[#ff7b72]">this</span>.http.<span class="text-[#d2a8ff]">post</span>(<span class="text-[#a5d6ff]">'/api/blueprint'</span>, file, &#123;
      reportProgress: <span class="text-[#79c0ff]">true</span>,
      observe: <span class="text-[#a5d6ff]">'events'</span>
    &#125;).<span class="text-[#d2a8ff]">pipe</span>(
      <span class="text-[#d2a8ff]">map</span>(event <span class="text-[#ff7b72]">=&gt;</span> <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">calculateProgress</span>(event)),
      <span class="text-[#d2a8ff]">catchError</span>(err <span class="text-[#ff7b72]">=&gt;</span> <span class="text-[#d2a8ff]">of</span>(&#123; error: <span class="text-[#79c0ff]">true</span> &#125;))
    );
  &#125;
&#125;</code></pre>
           </div>
        </div>
      </div>

      <!-- Full Width Dark Section -->
      <section class="bg-[#11131e] py-24 mb-24 text-white relative">
         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
               <div class="max-w-2xl">
                  <h2 class="font-display text-4xl font-bold mb-4">State Evolution</h2>
                  <p class="font-body text-sm text-surface-container-highest leading-relaxed">
                    Moving from standard RxJS Subjects to the modern Angular Signals pattern for fine-grained reactivity.
                  </p>
               </div>
               <div class="flex gap-4 font-label text-[10px] font-bold uppercase tracking-widest text-[#a5d6ff]">
                  <span class="px-4 py-2 border border-white/10 rounded-sm hover:bg-white/5 transition-colors cursor-pointer">SUBJECTS</span>
                  <span class="px-4 py-2 bg-[#cc002b] text-white rounded-sm border border-[#cc002b] hover:bg-[#a30022] transition-colors cursor-pointer">NEW: SIGNALS</span>
               </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
               <!-- BehaviorSubject -->
               <div class="bg-[#1e2235] border border-white/5 rounded-sm p-8 group">
                  <div class="flex items-center gap-3 mb-6">
                     <svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                     <h3 class="font-display text-xl font-bold">BehaviorSubject Store</h3>
                  </div>
                  <ul class="space-y-4 font-body text-sm text-white/70 mb-8 list-none">
                     <li class="flex gap-3"><span class="text-[#005faf] font-bold">&bull;</span> Requires Async pipes or manual subscription management.</li>
                     <li class="flex gap-3"><span class="text-[#cc002b] font-bold">&bull;</span> Triggers Global change detection for whole component tree.</li>
                  </ul>
                  <div class="bg-[rgba(0,0,0,0.3)] rounded-sm p-4 font-mono text-[10px] text-[#c1c6e5] border border-white/5">
                     <span class="text-[#ff7b72]">private</span> <span class="text-[#79c0ff]">userSubject</span> <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">new</span> BehaviorSubject&lt;User&gt;(<span class="text-[#79c0ff]">null</span>);<br>
                     <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">user$</span> <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">this</span>.userSubject.<span class="text-[#d2a8ff]">asObservable</span>();
                  </div>
               </div>
               
               <!-- Signals -->
               <div class="bg-gradient-to-br from-[#1e2235] to-[#2a1b24] border border-[#cc002b]/30 rounded-sm p-8 relative overflow-hidden transform md:-translate-y-4 shadow-[0_20px_40px_rgba(204,0,43,0.15)]">
                  <div class="absolute -right-4 -top-4 text-[6rem] text-[#cc002b]/10 font-black rotate-12 rotate-180"><svg class="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg></div>
                  <div class="flex items-center gap-3 mb-6 relative z-10">
                     <svg class="w-5 h-5 text-[#cc002b]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
                     <h3 class="font-display text-xl font-bold">Signal-Based Store</h3>
                  </div>
                  <ul class="space-y-4 font-body text-sm text-white/90 mb-8 list-none relative z-10">
                     <li class="flex gap-3"><span class="text-[#a5d6ff] font-bold">&check;</span> Zero-subscription model for bindings.</li>
                     <li class="flex gap-3"><span class="text-[#a5d6ff] font-bold">&check;</span> Glitch-free execution and fine-grained UI updates.</li>
                  </ul>
                  <div class="bg-[rgba(0,0,0,0.5)] rounded-sm p-4 font-mono text-[10px] text-[#c1c6e5] border border-white/10 relative z-10 shadow-inner">
                     <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">state</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">signal</span>&lt;UIState&gt;();<br>
                     <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">status</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">computed</span>(() <span class="text-[#ff7b72]">=&gt;</span> <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">state</span>().progress);
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- The Injection Token Toolbox -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div class="mb-12">
            <h2 class="font-display text-3xl font-bold text-on-surface mb-2">The Injection Token Toolbox</h2>
            <p class="font-body text-sm text-on-surface-variant">Beyond standard classes: Configuring providers for flexibility.</p>
         </div>
         
         <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Top Wide Block -->
            <div class="md:col-span-2 bg-[#f8f9fa] border border-surface-container-lowest shadow-sm rounded-sm p-8 flex flex-col justify-between hover:border-[#cc002b]/30 transition-colors">
               <div class="flex justify-between items-start mb-6">
                  <div>
                     <h4 class="font-display text-lg font-bold text-on-surface mb-1">useValue &amp; Configuration</h4>
                     <p class="font-body text-[10px] text-on-surface-variant">Injecting environment constants and global settings.</p>
                  </div>
                  <div class="font-mono text-[#cc002b] font-bold">()</div>
               </div>
               <div class="bg-[#11131e] p-4 font-mono text-[10px] text-[#c1c6e5] rounded-sm">
                  [ {{'{'}} <span class="text-[#79c0ff]">provide</span>: API_ENDPOINT, <span class="text-[#79c0ff]">useValue</span>: <span class="text-[#a5d6ff]">'https://api.v1'</span> {{'}'}} ]
               </div>
            </div>

            <!-- useFactory Block Blue -->
            <div class="bg-[#005faf] p-8 text-white rounded-sm shadow-md flex flex-col justify-center relative overflow-hidden group">
               <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
               <svg class="w-6 h-6 mb-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
               <h4 class="font-display text-xl font-bold mb-2 relative z-10">useFactory</h4>
               <p class="font-body text-[10px] text-white/80 leading-relaxed relative z-10">Dynamic provider logic computed based on application state or runtime conditions.</p>
            </div>

            <!-- useClass Block -->
            <div class="bg-surface border border-surface-container-high p-8 rounded-sm hover:-translate-y-1 transition-transform">
               <div class="flex items-center gap-2 mb-4 text-[#191c1d]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                  <h4 class="font-display text-lg font-bold">useClass</h4>
               </div>
               <p class="font-body text-[10px] text-on-surface-variant leading-relaxed mb-6">Swap implementations for testing or multi-tenant branding without changing component logic.</p>
               <div class="w-6 h-1 bg-[#cc002b] rounded-full"></div>
            </div>

            <!-- Custom Injection Token Block -->
            <div class="bg-[#fdfdfd] border border-surface-container-lowest shadow-sm p-8 rounded-sm col-span-1 md:col-span-2 hover:-translate-y-1 transition-transform flex flex-col md:flex-row justify-between items-center gap-6">
               <div class="flex-1">
                  <h4 class="font-display text-lg font-bold text-on-surface mb-2">Custom Injection Tokens</h4>
                  <p class="font-body text-[10px] text-on-surface-variant leading-relaxed">Avoid name collisions and create strictly typed injection points for abstract interfaces.</p>
               </div>
               <div class="bg-[#11131e] p-3 font-mono text-[9px] text-[#c1c6e5] rounded-sm shadow-inner w-full md:w-auto text-center md:text-left">
                  <span class="text-[#ff7b72]">export const</span> <span class="text-[#79c0ff]">THEME_CONFIG</span> <span class="text-[#e39400]">=</span> <br><span class="text-[#ff7b72]">new</span> <span class="text-[#d2a8ff]">InjectionToken</span>&lt;Theme&gt;(<span class="text-[#a5d6ff]">'theme'</span>);
               </div>
            </div>
         </div>
      </div>

    </div>
  `
})
export class ServicesComponent {}
