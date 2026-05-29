import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#f8f9fa]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-16">
          <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">COMPONENT LIFECYCLE</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
            Angular Lifecycle <span class="text-[#cc002b]">Hooks.</span>
          </h1>
          <p class="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Every Angular component has a precisely defined lifecycle. Understanding when each hook fires allows fine-grained control over initialization, change detection, and teardown.
          </p>
        </div>

        <!-- Lifecycle Sequence -->
        <div class="mb-24">
          <div class="mb-10">
            <span class="font-label text-[10px] text-[#cc002b] uppercase tracking-widest font-bold mb-4 block">EXECUTION ORDER</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-4">Lifecycle Sequence</h2>
            <p class="font-body text-sm text-on-surface-variant max-w-xl leading-relaxed">Hooks execute in this exact order. Understanding the sequence prevents initialization bugs and ensures proper resource management.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- constructor -->
            <div class="bg-white border-l-4 border-[#cc002b] shadow-sm p-6 rounded-sm">
              <div class="font-label text-[9px] uppercase tracking-widest text-[#cc002b] font-bold mb-2">Phase 01</div>
              <div class="font-mono text-sm font-bold text-on-surface mb-3">constructor()</div>
              <p class="font-body text-[11px] text-on-surface-variant leading-relaxed">Class is instantiated. Inject services here — no bindings or child views available yet.</p>
            </div>

            <!-- ngOnChanges -->
            <div class="bg-white border-l-4 border-[#005faf] shadow-sm p-6 rounded-sm">
              <div class="font-label text-[9px] uppercase tracking-widest text-[#005faf] font-bold mb-2">Phase 02</div>
              <div class="font-mono text-sm font-bold text-on-surface mb-3">ngOnChanges()</div>
              <p class="font-body text-[11px] text-on-surface-variant leading-relaxed">Called when <code class="text-[#cc002b] font-mono text-[10px]">&#64;Input()</code> values change. Fires before ngOnInit and on every subsequent input change.</p>
            </div>

            <!-- ngOnInit -->
            <div class="bg-white border-l-4 border-[#27c93f] shadow-sm p-6 rounded-sm relative">
              <div class="absolute top-3 right-3 bg-[#27c93f] text-white font-label text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-sm">KEY HOOK</div>
              <div class="font-label text-[9px] uppercase tracking-widest text-[#27c93f] font-bold mb-2">Phase 03</div>
              <div class="font-mono text-sm font-bold text-on-surface mb-3">ngOnInit()</div>
              <p class="font-body text-[11px] text-on-surface-variant leading-relaxed">Inputs are set. Ideal for data fetching, service calls, and all initialization logic.</p>
            </div>

            <!-- ngDoCheck -->
            <div class="bg-white border-l-4 border-[#ffbd2e] shadow-sm p-6 rounded-sm">
              <div class="font-label text-[9px] uppercase tracking-widest text-[#ffbd2e] font-bold mb-2">Phase 04</div>
              <div class="font-mono text-sm font-bold text-on-surface mb-3">ngDoCheck()</div>
              <p class="font-body text-[11px] text-on-surface-variant leading-relaxed">Fires every change detection cycle. Use sparingly — runs very frequently in Default strategy.</p>
            </div>

            <!-- ngAfterContentInit -->
            <div class="bg-white border-l-4 border-[#005e73] shadow-sm p-6 rounded-sm">
              <div class="font-label text-[9px] uppercase tracking-widest text-[#005e73] font-bold mb-2">Phase 05</div>
              <div class="font-mono text-sm font-bold text-on-surface mb-3">ngAfterContentInit()</div>
              <p class="font-body text-[11px] text-on-surface-variant leading-relaxed">Called once after <code class="text-[#cc002b] font-mono text-[10px]">ng-content</code> is projected into the component.</p>
            </div>

            <!-- ngAfterContentChecked -->
            <div class="bg-white border-l-4 border-[#005e73]/40 shadow-sm p-6 rounded-sm">
              <div class="font-label text-[9px] uppercase tracking-widest text-[#005e73]/60 font-bold mb-2">Phase 06</div>
              <div class="font-mono text-sm font-bold text-on-surface mb-3">ngAfterContentChecked()</div>
              <p class="font-body text-[11px] text-on-surface-variant leading-relaxed">After every check of projected content. Runs after ngDoCheck.</p>
            </div>

            <!-- ngAfterViewInit -->
            <div class="bg-white border-l-4 border-[#cc002b] shadow-sm p-6 rounded-sm relative">
              <div class="absolute top-3 right-3 bg-[#cc002b] text-white font-label text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-sm">KEY HOOK</div>
              <div class="font-label text-[9px] uppercase tracking-widest text-[#cc002b] font-bold mb-2">Phase 07</div>
              <div class="font-mono text-sm font-bold text-on-surface mb-3">ngAfterViewInit()</div>
              <p class="font-body text-[11px] text-on-surface-variant leading-relaxed">View and child views fully initialized. Access <code class="text-[#cc002b] font-mono text-[10px]">&#64;ViewChild</code> refs here.</p>
            </div>

            <!-- ngOnDestroy -->
            <div class="bg-white border-l-4 border-[#ff7b72] shadow-sm p-6 rounded-sm relative">
              <div class="absolute top-3 right-3 bg-[#ff7b72] text-white font-label text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-sm">CLEANUP</div>
              <div class="font-label text-[9px] uppercase tracking-widest text-[#ff7b72] font-bold mb-2">Phase 08</div>
              <div class="font-mono text-sm font-bold text-on-surface mb-3">ngOnDestroy()</div>
              <p class="font-body text-[11px] text-on-surface-variant leading-relaxed">Component removed from DOM. Unsubscribe Observables and clear timers here.</p>
            </div>
          </div>
        </div>

        <!-- Key Hooks Deep Dive -->
        <div class="mb-16">
          <div class="mb-10">
            <span class="font-label text-[10px] text-[#005faf] uppercase tracking-widest font-bold mb-4 block">IMPLEMENTATION PATTERNS</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-4">Key Hooks in Practice</h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- ngOnInit -->
            <div class="bg-[#11131e] rounded-sm border border-[#2d3142] overflow-hidden">
              <div class="p-6 border-b border-[#2d3142] flex items-center justify-between">
                <div class="font-mono text-sm text-[#27c93f] font-bold">ngOnInit()</div>
                <span class="font-label text-[9px] uppercase tracking-widest text-white/40 font-bold">INITIALIZATION</span>
              </div>
              <pre class="p-6 text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">UserProfileComponent</span>
  <span class="text-[#ff7b72]">implements</span> <span class="text-[#d2a8ff]">OnInit</span> &#123;

  <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">user</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">signal</span>&lt;<span class="text-[#79c0ff]">User</span> | <span class="text-[#ff7b72]">null</span>&gt;(<span class="text-[#ff7b72]">null</span>);
  <span class="text-[#d2a8ff]">&#64;Input</span>() <span class="text-[#79c0ff]">id</span>!: <span class="text-[#79c0ff]">string</span>;

  <span class="text-[#ff7b72]">constructor</span>(<span class="text-[#ff7b72]">private</span> <span class="text-[#79c0ff]">svc</span>: <span class="text-[#d2a8ff]">UserService</span>) &#125;

  <span class="text-[#d2a8ff]">ngOnInit</span>() &#123;
    <span class="text-[#6b7280]">// ✓ Inputs are bound — safe to read</span>
    <span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">svc</span>.<span class="text-[#d2a8ff]">getUser</span>(<span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">id</span>)
      .<span class="text-[#d2a8ff]">subscribe</span>(<span class="text-[#79c0ff]">u</span> <span class="text-[#ff7b72]">=></span> <span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">user</span>.<span class="text-[#d2a8ff]">set</span>(<span class="text-[#79c0ff]">u</span>));
  &#125;
&#125;</code></pre>
            </div>

            <!-- ngOnChanges -->
            <div class="bg-[#11131e] rounded-sm border border-[#2d3142] overflow-hidden">
              <div class="p-6 border-b border-[#2d3142] flex items-center justify-between">
                <div class="font-mono text-sm text-[#a5d6ff] font-bold">ngOnChanges()</div>
                <span class="font-label text-[9px] uppercase tracking-widest text-white/40 font-bold">INPUT CHANGES</span>
              </div>
              <pre class="p-6 text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">ChartComponent</span>
  <span class="text-[#ff7b72]">implements</span> <span class="text-[#d2a8ff]">OnChanges</span> &#123;

  <span class="text-[#d2a8ff]">&#64;Input</span>() <span class="text-[#79c0ff]">data</span>: <span class="text-[#79c0ff]">number</span>[] <span class="text-[#e39400]">=</span> [];

  <span class="text-[#d2a8ff]">ngOnChanges</span>(<span class="text-[#79c0ff]">changes</span>: <span class="text-[#d2a8ff]">SimpleChanges</span>) &#123;
    <span class="text-[#ff7b72]">if</span> (<span class="text-[#79c0ff]">changes</span>[<span class="text-[#a5d6ff]">'data'</span>]?.<span class="text-[#79c0ff]">currentValue</span>) &#123;
      <span class="text-[#6b7280]">// Only re-render when data changes</span>
      <span class="text-[#79c0ff]">this</span>.<span class="text-[#d2a8ff]">renderChart</span>(
        <span class="text-[#79c0ff]">changes</span>[<span class="text-[#a5d6ff]">'data'</span>].<span class="text-[#79c0ff]">currentValue</span>
      );
    &#125;
  &#125;
&#125;</code></pre>
            </div>

            <!-- ngAfterViewInit -->
            <div class="bg-[#11131e] rounded-sm border border-[#2d3142] overflow-hidden">
              <div class="p-6 border-b border-[#2d3142] flex items-center justify-between">
                <div class="font-mono text-sm text-[#ffd580] font-bold">ngAfterViewInit()</div>
                <span class="font-label text-[9px] uppercase tracking-widest text-white/40 font-bold">DOM ACCESS</span>
              </div>
              <pre class="p-6 text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">EditorComponent</span>
  <span class="text-[#ff7b72]">implements</span> <span class="text-[#d2a8ff]">AfterViewInit</span> &#123;

  <span class="text-[#d2a8ff]">&#64;ViewChild</span>(<span class="text-[#a5d6ff]">'canvasRef'</span>) <span class="text-[#79c0ff]">canvas</span>!: <span class="text-[#d2a8ff]">ElementRef</span>;

  <span class="text-[#d2a8ff]">ngAfterViewInit</span>() &#123;
    <span class="text-[#6b7280]">// ✓ @ViewChild is now available</span>
    <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">ctx</span> <span class="text-[#e39400]">=</span> <span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">canvas</span>.<span class="text-[#79c0ff]">nativeElement</span>
      .<span class="text-[#d2a8ff]">getContext</span>(<span class="text-[#a5d6ff]">'2d'</span>);
    <span class="text-[#79c0ff]">this</span>.<span class="text-[#d2a8ff]">initializeCanvas</span>(<span class="text-[#79c0ff]">ctx</span>);
  &#125;
&#125;</code></pre>
            </div>

            <!-- DestroyRef modern cleanup -->
            <div class="bg-[#11131e] rounded-sm border border-[#2d3142] overflow-hidden">
              <div class="p-6 border-b border-[#2d3142] flex items-center justify-between">
                <div class="font-mono text-sm text-[#ff7b72] font-bold">DestroyRef (Modern)</div>
                <span class="font-label text-[9px] uppercase tracking-widest text-white/40 font-bold">ANGULAR 16+</span>
              </div>
              <pre class="p-6 text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">TimerComponent</span> &#123;
  <span class="text-[#ff7b72]">private</span> <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">destroyRef</span>
    <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">inject</span>(<span class="text-[#d2a8ff]">DestroyRef</span>);

  <span class="text-[#ff7b72]">constructor</span>() &#123;
    <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">id</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">setInterval</span>(() <span class="text-[#ff7b72]">=></span> &#123; ... &#125;, <span class="text-[#79c0ff]">1000</span>);

    <span class="text-[#6b7280]">// No ngOnDestroy required</span>
    <span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">destroyRef</span>.<span class="text-[#d2a8ff]">onDestroy</span>(() <span class="text-[#ff7b72]">=></span>
      <span class="text-[#d2a8ff]">clearInterval</span>(<span class="text-[#79c0ff]">id</span>)
    );
  &#125;
&#125;</code></pre>
            </div>
          </div>
        </div>

        <!-- Best Practices -->
        <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-10">
          <h2 class="font-display text-xl font-bold text-on-surface mb-8">Best Practices Summary</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-sm bg-[#27c93f]/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-[#27c93f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <div class="font-display text-sm font-bold text-on-surface mb-2">Use inject() over constructor</div>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed">Prefer <code class="text-[#cc002b] font-mono text-[10px]">inject()</code> for cleaner, functional dependency injection. Available in Angular 14+.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-sm bg-[#005faf]/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-[#005faf]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <div class="font-display text-sm font-bold text-on-surface mb-2">Prefer takeUntilDestroyed</div>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed">Use <code class="text-[#cc002b] font-mono text-[10px]">takeUntilDestroyed()</code> inside the constructor for automatic Observable cleanup with zero boilerplate.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-sm bg-[#cc002b]/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-[#cc002b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <div>
                <div class="font-display text-sm font-bold text-on-surface mb-2">Never access DOM in constructor</div>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed">The view doesn't exist yet. Always wait for <code class="text-[#cc002b] font-mono text-[10px]">ngAfterViewInit</code> before accessing <code class="text-[#cc002b] font-mono text-[10px]">&#64;ViewChild</code> refs.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class LifecycleComponent {}
