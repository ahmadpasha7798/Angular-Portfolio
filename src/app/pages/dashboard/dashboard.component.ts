import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#f8f9fa]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="mb-16">
          <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">ARCHITECTURE DEEP-DIVE</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
            The Anatomy of <span class="text-[#cc002b]">Angular Core.</span>
          </h1>
          <p class="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Exploring the fundamental building blocks of the framework through editorialized technical patterns and architectural clarity.
          </p>
        </div>

        <!-- Mechanism 01 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-surface-container-lowest shadow-sm rounded-sm mb-8 overflow-hidden">
           <div class="p-10 lg:p-16 flex flex-col justify-center">
              <span class="text-[#cc002b] font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Mechanism 01</span>
              <h2 class="font-display text-3xl font-bold text-on-surface mb-4">Reactive Data Binding</h2>
              <p class="font-body text-sm text-on-surface-variant mb-12 leading-relaxed">
                Two-way data binding in Angular combines the simplicity of property binding with the responsiveness of event binding, creating a synchronized state between model and view.
              </p>
              
              <div class="space-y-4">
                <div class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Live Template Input</div>
                <input type="text" value="The Architectural Core" class="w-full px-4 py-3 border border-surface-container-highest rounded-sm font-body text-sm focus:outline-none focus:border-[#cc002b] transition-colors" readonly>
                <div class="bg-surface-container-lowest p-4 border-l-2 border-[#cc002b] font-body text-sm text-on-surface-variant mt-2 italic shadow-inner">
                  Preview: "The Architectural Core"
                </div>
              </div>
           </div>
           <div class="bg-[#11131e] p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
               <!-- Watermark -->
               <div class="absolute right-0 bottom-10 text-[8rem] font-display font-black text-white/5 tracking-tighter leading-none select-none pointer-events-none whitespace-nowrap">
                 SYNC
               </div>
               
               <div class="mb-4 flex gap-2">
                 <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                 <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                 <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
               </div>
               <pre class="text-sm font-mono leading-relaxed"><code class="text-[#c1c6e5]"><span class="text-[#8cd2ff]">&lt;input</span> <span class="text-[#ffd580]">[ngModel]</span><span class="text-[#e39400]">=</span><span class="text-[#a5d6ff]">"title"</span> <span class="text-[#8cd2ff]">/&gt;</span>

<span class="text-[#8cd2ff]">&lt;h3&gt;</span>{{'{'}}{{'{'}} title {{'}'}}{{'}'}}<span class="text-[#8cd2ff]">&lt;/h3&gt;</span>

<span class="text-[#6b7280] italic">// TypeScript Controller</span>
<span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">ShadowComponent</span> {{'{'}}
  <span class="text-[#79c0ff]">title</span>: <span class="text-[#ff7b72]">string</span> <span class="text-[#e39400]">=</span> <span class="text-[#a5d6ff]">'The Architectural Core'</span>;
{{'}'}}</code></pre>
           </div>
        </div>

        <!-- Row 2: Mechanisms 02 & 03 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
           <!-- Mechanism 02 -->
           <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-10 flex flex-col">
              <span class="text-[#005faf] font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Mechanism 02</span>
              <h2 class="font-display text-2xl font-bold text-on-surface mb-4">Structural Directives</h2>
              <p class="font-body text-sm text-on-surface-variant mb-10 leading-relaxed">
                Modify the DOM's structure layout by adding, removing, or manipulating elements with *ngIf and *ngFor.
              </p>
              
              <div class="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#f8f9fa] rounded-sm border border-surface-container-highest overflow-hidden">
                 <div class="bg-[#11131e] p-6 font-mono text-xs">
                    <div class="text-[#6b7280] italic mb-4">// TEMPLATE VIEW RENDERER</div>
                    <code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">*ngIf=</span><span class="text-[#a5d6ff]">"isVisible"</span><br><br><span class="text-[#ff7b72]">*ngFor=</span><span class="text-[#a5d6ff]">"let item of features"</span><br><br>  <span class="text-[#8cd2ff]">&lt;div class=</span><span class="text-[#a5d6ff]">"card"</span><span class="text-[#8cd2ff]">&gt;</span><br>    {{'{'}}{{'{'}} item.label {{'}'}}{{'}'}}<br>  <span class="text-[#8cd2ff]">&lt;/div&gt;</span></code>
                 </div>
                 <div class="p-6">
                    <div class="flex justify-between items-center mb-6">
                       <span class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Live Render</span>
                       <div class="w-8 h-4 bg-[#cc002b] rounded-full relative"><div class="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div></div>
                    </div>
                    <div class="space-y-2">
                       <div class="flex items-center gap-3 bg-white border border-surface-container-highest p-2 rounded-sm text-sm font-body text-on-surface-variant"><svg class="w-4 h-4 text-[#005faf]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Dependency Injection</div>
                       <div class="flex items-center gap-3 bg-white border border-surface-container-highest p-2 rounded-sm text-sm font-body text-on-surface-variant"><svg class="w-4 h-4 text-[#005faf]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Change Detection</div>
                       <div class="flex items-center gap-3 bg-white border border-surface-container-highest p-2 rounded-sm text-sm font-body text-on-surface-variant"><svg class="w-4 h-4 text-[#005faf]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Zone.js Execution</div>
                       <div class="flex items-center gap-3 bg-transparent p-2 rounded-sm text-sm font-body text-on-surface-variant/40 italic pl-8 border border-transparent">+ Pending Feature...</div>
                    </div>
                 </div>
              </div>
           </div>

           <!-- Mechanism 03 -->
           <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-10 flex flex-col">
              <span class="text-[#005e73] font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Mechanism 03</span>
              <h2 class="font-display text-2xl font-bold text-on-surface mb-4">Pure Transformation</h2>
              <p class="font-body text-sm text-on-surface-variant mb-10 leading-relaxed">
                Pipes allow you to transform displayed values seamlessly without mutating the original data source.
              </p>
              
              <div class="mt-auto">
                 <div class="flex items-center justify-between font-label text-[8px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">
                    <span>Input Data</span>
                    <span>Pipe Output</span>
                 </div>
                 
                 <div class="space-y-4 mb-8">
                    <!-- Row 1 -->
                    <div class="flex items-center justify-between gap-4">
                       <div class="flex-1 border border-surface-container-highest rounded-sm p-3 text-sm font-mono text-on-surface-variant">"architect"</div>
                       <div class="text-surface-container-highest"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div>
                       <div class="flex-1 bg-[#005e73]/10 border border-transparent rounded-sm p-3 text-sm font-mono text-[#005e73] font-bold tracking-widest">ARCHITECT</div>
                    </div>
                    <!-- Row 2 -->
                    <div class="flex items-center justify-between gap-4">
                       <div class="flex-1 border border-surface-container-highest rounded-sm p-3 text-sm font-mono text-on-surface-variant">1249.99</div>
                       <div class="text-surface-container-highest"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div>
                       <div class="flex-1 bg-[#005e73]/10 border border-transparent rounded-sm p-3 text-sm font-mono text-[#005e73] font-bold tracking-widest">$1,249.99</div>
                    </div>
                    <!-- Row 3 -->
                    <div class="flex items-center justify-between gap-4">
                       <div class="flex-1 border border-surface-container-highest rounded-sm p-3 text-sm font-mono text-on-surface-variant">2024-05-12</div>
                       <div class="text-surface-container-highest"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div>
                       <div class="flex-1 bg-[#005e73]/10 border border-transparent rounded-sm p-3 text-sm font-mono text-[#005e73] font-bold tracking-widest">May 12, 2024</div>
                    </div>
                 </div>
                 
                 <div class="bg-[#11131e] p-4 font-mono text-xs rounded-sm">
                    <code class="text-[#c1c6e5]">{{'{'}}{{'{'}} value | <span class="text-[#8cd2ff]">uppercase</span> {{'}'}}{{'}'}}<br>{{'{'}}{{'{'}} amount | <span class="text-[#8cd2ff]">currency:'USD'</span> {{'}'}}{{'}'}}<br>{{'{'}}{{'{'}} date | <span class="text-[#8cd2ff]">date:'mediumDate'</span> {{'}'}}{{'}'}}</code>
                 </div>
              </div>
           </div>
        </div>
        
        <!-- Bottom Banner -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div>
              <h2 class="font-display text-4xl font-bold text-on-surface mb-2 leading-tight">Built for Scale,</h2>
              <h2 class="font-display text-4xl font-bold text-[#005faf] mb-6 leading-tight">Designed for Precision.</h2>
              <p class="font-body text-on-surface-variant mb-8 leading-relaxed">
                The Editorial system treats architectural components as first-class citizens. Every signal, every observable, and every pipe is tuned for high-performance enterprise delivery.
              </p>
              <div class="flex gap-2">
                 <span class="font-label xs-text bg-surface-container-high px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[10px]">Signals</span>
                 <span class="font-label xs-text bg-surface-container-high px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[10px]">SSR</span>
                 <span class="font-label xs-text bg-surface-container-high px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[10px]">Hydration</span>
                 <span class="font-label xs-text bg-surface-container-high px-3 py-1 rounded-sm text-on-surface-variant font-bold text-[10px]">RxJS</span>
              </div>
           </div>
           
           <div class="bg-[#3e4a50] rounded-xl p-8 relative overflow-hidden shadow-2xl h-64 flex items-end">
              <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-10"></div>
              <!-- Abstract blurry code background graphic -->
              <div class="absolute inset-0 opacity-20 filter blur-sm">
                 <div class="p-8 font-mono text-[6px] text-white leading-loose whitespace-pre">
import {{'{'}} Component, ChangeDetectionStrategy {{'}'}} from '@angular/core';

@Component({{'{'}}
  selector: 'app-performance-widget',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    &lt;div class="metrics"&gt;
      ...
    &lt;/div&gt;
  \`
{{'}'}})
export class PerformanceWidgetComponent {{'{'}}
  // implementation details
{{'}'}}
                 </div>
              </div>
              
              <div class="bg-white/90 backdrop-blur rounded-sm p-4 flex gap-4 items-center w-full relative z-10 shadow-lg border border-white/40">
                 <div class="w-10 h-10 bg-[#cc002b] rounded-sm flex items-center justify-center text-white">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                 </div>
                 <div>
                    <div class="font-label text-[8px] uppercase tracking-widest font-bold text-on-surface-variant">Benchmark Result</div>
                    <div class="font-display font-bold text-on-surface text-lg">98/100 Core Web Vitals</div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  `
})
export class DashboardComponent {}
