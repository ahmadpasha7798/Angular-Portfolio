import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#f8f9fa]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-16">
          <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">REACTIVE PROGRAMMING</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
            Mastering <span class="text-[#cc002b]">RxJS.</span>
          </h1>
          <p class="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Reactive Extensions for JavaScript — the cornerstone of Angular's async architecture. Master Observables, Operators, and Subjects to build resilient, event-driven applications.
          </p>
        </div>

        <!-- Observable vs Promise -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <!-- Observable -->
          <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm overflow-hidden">
            <div class="p-8 border-b border-surface-container-lowest flex items-center justify-between">
              <div>
                <span class="text-[#cc002b] font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Pattern 01</span>
                <h2 class="font-display text-2xl font-bold text-on-surface">Observable</h2>
              </div>
              <span class="bg-[#cc002b]/10 text-[#cc002b] font-label text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">Lazy — Multi-value</span>
            </div>
            <div class="bg-[#11131e] p-8">
              <div class="mb-4 flex gap-2">
                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <pre class="text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#6b7280]">// Multiple values over time</span>
<span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">clicks$</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">fromEvent</span>(<span class="text-[#a5d6ff]">document</span>, <span class="text-[#a5d6ff]">'click'</span>);

<span class="text-[#79c0ff]">clicks$</span>.<span class="text-[#d2a8ff]">pipe</span>(
  <span class="text-[#d2a8ff]">debounceTime</span>(<span class="text-[#79c0ff]">300</span>),
  <span class="text-[#d2a8ff]">map</span>(<span class="text-[#ff7b72]">e</span> <span class="text-[#ff7b72]">=></span> e.<span class="text-[#79c0ff]">target</span>)
).<span class="text-[#d2a8ff]">subscribe</span>(
  <span class="text-[#79c0ff]">target</span> <span class="text-[#ff7b72]">=></span> <span class="text-[#d2a8ff]">console</span>.<span class="text-[#d2a8ff]">log</span>(<span class="text-[#79c0ff]">target</span>)
);</code></pre>
            </div>
            <div class="p-6 grid grid-cols-3 gap-4 text-center border-t border-surface-container-lowest">
              <div><div class="font-display text-xl font-bold text-[#cc002b] mb-1">∞</div><div class="font-label text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">Multi-emit</div></div>
              <div><div class="font-display text-xl font-bold text-[#005faf] mb-1">Lazy</div><div class="font-label text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">On Subscribe</div></div>
              <div><div class="font-display text-xl font-bold text-[#005e73] mb-1">Cancel</div><div class="font-label text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">Unsubscribe</div></div>
            </div>
          </div>

          <!-- Promise -->
          <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm overflow-hidden">
            <div class="p-8 border-b border-surface-container-lowest flex items-center justify-between">
              <div>
                <span class="text-[#005e73] font-label text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Pattern 02</span>
                <h2 class="font-display text-2xl font-bold text-on-surface">Promise</h2>
              </div>
              <span class="bg-[#005e73]/10 text-[#005e73] font-label text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">Eager — Single-value</span>
            </div>
            <div class="bg-[#11131e] p-8">
              <div class="mb-4 flex gap-2">
                <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <pre class="text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#6b7280]">// Single resolved value</span>
<span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">data</span> <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">await</span> <span class="text-[#d2a8ff]">fetch</span>(<span class="text-[#a5d6ff]">'/api/data'</span>)
  .<span class="text-[#d2a8ff]">then</span>(<span class="text-[#79c0ff]">res</span> <span class="text-[#ff7b72]">=></span> <span class="text-[#79c0ff]">res</span>.<span class="text-[#d2a8ff]">json</span>());

<span class="text-[#6b7280]">// Executes immediately on creation</span>
<span class="text-[#6b7280]">// Cannot be cancelled</span>
<span class="text-[#6b7280]">// Always single emission</span></code></pre>
            </div>
            <div class="p-6 grid grid-cols-3 gap-4 text-center border-t border-surface-container-lowest">
              <div><div class="font-display text-xl font-bold text-[#cc002b] mb-1">1</div><div class="font-label text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">Single-emit</div></div>
              <div><div class="font-display text-xl font-bold text-[#005faf] mb-1">Eager</div><div class="font-label text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">On Creation</div></div>
              <div><div class="font-display text-xl font-bold text-[#005e73] mb-1">No</div><div class="font-label text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">Cancellation</div></div>
            </div>
          </div>
        </div>

        <!-- Core Operators -->
        <div class="mb-24">
          <div class="mb-12">
            <span class="font-label text-[10px] text-[#cc002b] uppercase tracking-widest font-bold mb-4 block">ESSENTIAL OPERATORS</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-4">Transformation Pipeline</h2>
            <p class="font-body text-sm text-on-surface-variant max-w-xl leading-relaxed">RxJS operators transform Observable streams. They compose inside the <code class="text-[#cc002b] font-mono bg-[#cc002b]/5 px-1 rounded">.pipe()</code> method to create declarative data flows.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- switchMap -->
            <div class="bg-[#11131e] rounded-sm border border-[#2d3142] overflow-hidden">
              <div class="p-6 border-b border-[#2d3142] flex items-center justify-between">
                <div class="font-mono text-sm text-[#d2a8ff] font-bold">switchMap()</div>
                <span class="font-label text-[9px] uppercase tracking-widest text-white/40 font-bold">CANCELS PREVIOUS</span>
              </div>
              <pre class="p-6 text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#79c0ff]">searchQuery$</span>.<span class="text-[#d2a8ff]">pipe</span>(
  <span class="text-[#d2a8ff]">debounceTime</span>(<span class="text-[#79c0ff]">300</span>),
  <span class="text-[#d2a8ff]">distinctUntilChanged</span>(),
  <span class="text-[#d2a8ff]">switchMap</span>(<span class="text-[#ff7b72]">query</span> <span class="text-[#ff7b72]">=></span>
    <span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">http</span>.<span class="text-[#d2a8ff]">get</span>(<span class="text-[#a5d6ff]">\`/search?q=\$&#123;query&#125;\`</span>)
  )
).<span class="text-[#d2a8ff]">subscribe</span>(<span class="text-[#79c0ff]">results</span> <span class="text-[#ff7b72]">=></span> &#123; ... &#125;);</code></pre>
              <div class="px-6 pb-6 font-body text-[11px] text-white/50 leading-relaxed">Cancels the previous inner Observable on each new emission. The ideal pattern for autocomplete and live search.</div>
            </div>

            <!-- combineLatest -->
            <div class="bg-[#11131e] rounded-sm border border-[#2d3142] overflow-hidden">
              <div class="p-6 border-b border-[#2d3142] flex items-center justify-between">
                <div class="font-mono text-sm text-[#ffd580] font-bold">combineLatest()</div>
                <span class="font-label text-[9px] uppercase tracking-widest text-white/40 font-bold">MERGES STREAMS</span>
              </div>
              <pre class="p-6 text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#d2a8ff]">combineLatest</span>([
  <span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">filters$</span>,
  <span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">pagination$</span>
]).<span class="text-[#d2a8ff]">pipe</span>(
  <span class="text-[#d2a8ff]">switchMap</span>(([<span class="text-[#ff7b72]">filters</span>, <span class="text-[#ff7b72]">page</span>]) <span class="text-[#ff7b72]">=></span>
    <span class="text-[#79c0ff]">this</span>.<span class="text-[#d2a8ff]">loadData</span>(<span class="text-[#79c0ff]">filters</span>, <span class="text-[#79c0ff]">page</span>)
  )
);</code></pre>
              <div class="px-6 pb-6 font-body text-[11px] text-white/50 leading-relaxed">Combines multiple Observables; emits whenever any source emits, using the latest value from each.</div>
            </div>

            <!-- catchError -->
            <div class="bg-[#11131e] rounded-sm border border-[#2d3142] overflow-hidden">
              <div class="p-6 border-b border-[#2d3142] flex items-center justify-between">
                <div class="font-mono text-sm text-[#ff7b72] font-bold">catchError()</div>
                <span class="font-label text-[9px] uppercase tracking-widest text-white/40 font-bold">ERROR HANDLING</span>
              </div>
              <pre class="p-6 text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">http</span>.<span class="text-[#d2a8ff]">get</span>(<span class="text-[#a5d6ff]">'/api/data'</span>).<span class="text-[#d2a8ff]">pipe</span>(
  <span class="text-[#d2a8ff]">retry</span>(&#123;<span class="text-[#79c0ff]">count</span>: <span class="text-[#79c0ff]">2</span>, <span class="text-[#79c0ff]">delay</span>: <span class="text-[#79c0ff]">1000</span>&#125;),
  <span class="text-[#d2a8ff]">catchError</span>(<span class="text-[#ff7b72]">err</span> <span class="text-[#ff7b72]">=></span> &#123;
    <span class="text-[#79c0ff]">this</span>.<span class="text-[#d2a8ff]">logError</span>(<span class="text-[#79c0ff]">err</span>);
    <span class="text-[#ff7b72]">return</span> <span class="text-[#d2a8ff]">of</span>([]);
  &#125;)
);</code></pre>
              <div class="px-6 pb-6 font-body text-[11px] text-white/50 leading-relaxed">Intercepts stream errors gracefully. Returns a fallback Observable to keep the stream alive.</div>
            </div>

            <!-- takeUntilDestroyed -->
            <div class="bg-[#11131e] rounded-sm border border-[#2d3142] overflow-hidden">
              <div class="p-6 border-b border-[#2d3142] flex items-center justify-between">
                <div class="font-mono text-sm text-[#a5d6ff] font-bold">takeUntilDestroyed()</div>
                <span class="font-label text-[9px] uppercase tracking-widest text-white/40 font-bold">AUTO-CLEANUP</span>
              </div>
              <pre class="p-6 text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">import</span> &#123;<span class="text-[#d2a8ff]">takeUntilDestroyed</span>&#125;
  <span class="text-[#ff7b72]">from</span> <span class="text-[#a5d6ff]">'&#64;angular/core/rxjs-interop'</span>;

<span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">MyComponent</span> &#123;
  <span class="text-[#ff7b72]">constructor</span>() &#123;
    <span class="text-[#79c0ff]">data$</span>.<span class="text-[#d2a8ff]">pipe</span>(
      <span class="text-[#d2a8ff]">takeUntilDestroyed</span>()
    ).<span class="text-[#d2a8ff]">subscribe</span>(...);
  &#125;
&#125;</code></pre>
              <div class="px-6 pb-6 font-body text-[11px] text-white/50 leading-relaxed">Angular 16+ utility that auto-unsubscribes when the component is destroyed. Eliminates memory leaks.</div>
            </div>
          </div>
        </div>

        <!-- Subjects -->
        <div class="mb-24">
          <div class="mb-12">
            <span class="font-label text-[10px] text-[#005faf] uppercase tracking-widest font-bold mb-4 block">SUBJECTS</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-4">Observable + Observer</h2>
            <p class="font-body text-sm text-on-surface-variant max-w-xl leading-relaxed">Subjects are both Observables and Observers — they can emit values and be subscribed to. Essential for bridging imperative and reactive code.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Subject -->
            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8">
              <div class="w-8 h-8 rounded-sm bg-[#cc002b]/10 flex items-center justify-center mb-6">
                <span class="font-mono text-xs font-bold text-[#cc002b]">S</span>
              </div>
              <h3 class="font-display text-lg font-bold text-on-surface mb-3">Subject</h3>
              <p class="font-body text-xs text-on-surface-variant mb-6 leading-relaxed">No initial value. Only emits to subscribers active at the time of emission. Good for event buses.</p>
              <div class="bg-[#f8f9fa] p-4 rounded-sm font-mono text-xs border border-surface-container-highest leading-relaxed">
                <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">s</span> <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">new</span> <span class="text-[#d2a8ff]">Subject</span>&lt;<span class="text-[#79c0ff]">string</span>&gt;();<br>
                <span class="text-[#79c0ff]">s</span>.<span class="text-[#d2a8ff]">next</span>(<span class="text-[#a5d6ff]">'event'</span>);
              </div>
            </div>

            <!-- BehaviorSubject -->
            <div class="bg-white border-2 border-[#005faf] shadow-sm rounded-sm p-8 relative">
              <div class="absolute top-3 right-3 bg-[#005faf] text-white font-label text-[8px] uppercase tracking-widest px-2 py-1 rounded-sm">MOST USED</div>
              <div class="w-8 h-8 rounded-sm bg-[#005faf]/10 flex items-center justify-center mb-6">
                <span class="font-mono text-xs font-bold text-[#005faf]">BS</span>
              </div>
              <h3 class="font-display text-lg font-bold text-on-surface mb-3">BehaviorSubject</h3>
              <p class="font-body text-xs text-on-surface-variant mb-6 leading-relaxed">Requires an initial value. New subscribers immediately receive the current value. Perfect for state management.</p>
              <div class="bg-[#f8f9fa] p-4 rounded-sm font-mono text-xs border border-surface-container-highest leading-relaxed">
                <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">state$</span> <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">new</span><br>
                &nbsp;<span class="text-[#d2a8ff]">BehaviorSubject</span>(<span class="text-[#79c0ff]">0</span>);<br>
                <span class="text-[#79c0ff]">state$</span>.<span class="text-[#d2a8ff]">next</span>(<span class="text-[#79c0ff]">state$</span>.<span class="text-[#79c0ff]">value</span> <span class="text-[#e39400]">+</span> <span class="text-[#79c0ff]">1</span>);
              </div>
            </div>

            <!-- ReplaySubject -->
            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8">
              <div class="w-8 h-8 rounded-sm bg-[#005e73]/10 flex items-center justify-center mb-6">
                <span class="font-mono text-xs font-bold text-[#005e73]">RS</span>
              </div>
              <h3 class="font-display text-lg font-bold text-on-surface mb-3">ReplaySubject</h3>
              <p class="font-body text-xs text-on-surface-variant mb-6 leading-relaxed">Replays N last emitted values to new subscribers. Useful for caching event history.</p>
              <div class="bg-[#f8f9fa] p-4 rounded-sm font-mono text-xs border border-surface-container-highest leading-relaxed">
                <span class="text-[#6b7280]">// Replay last 3 values</span><br>
                <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">r</span> <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">new</span><br>
                &nbsp;<span class="text-[#d2a8ff]">ReplaySubject</span>(<span class="text-[#79c0ff]">3</span>);
              </div>
            </div>
          </div>
        </div>

        <!-- Signal Bridge -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <span class="font-label text-[10px] text-[#005e73] uppercase tracking-widest font-bold mb-4 block">SIGNALS INTEGRATION</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-6">The Signal ↔ RxJS Bridge</h2>
            <p class="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">Angular 16+ ships <code class="text-[#cc002b] font-mono bg-[#cc002b]/5 px-1 rounded">toSignal()</code> and <code class="text-[#cc002b] font-mono bg-[#cc002b]/5 px-1 rounded">toObservable()</code> for seamless interoperability between the two reactive systems.</p>
            <div class="space-y-5">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#005faf] flex items-center justify-center text-white font-mono text-[10px] font-bold mt-0.5">→</div>
                <div>
                  <div class="font-display text-sm font-bold text-on-surface mb-1">toSignal(obs$)</div>
                  <p class="font-body text-xs text-on-surface-variant leading-relaxed">Subscribes to an Observable inside the injection context and exposes its value as a read-only Signal.</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-7 h-7 rounded-full bg-[#cc002b] flex items-center justify-center text-white font-mono text-[10px] font-bold mt-0.5">←</div>
                <div>
                  <div class="font-display text-sm font-bold text-on-surface mb-1">toObservable(sig)</div>
                  <p class="font-body text-xs text-on-surface-variant leading-relaxed">Converts a Signal into a cold Observable, enabling use inside existing RxJS operator chains.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#11131e] rounded-sm p-8 border border-[#2d3142]">
            <div class="mb-6 flex gap-2">
              <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <pre class="text-xs font-mono leading-relaxed overflow-x-auto"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">import</span> &#123;<span class="text-[#d2a8ff]">toSignal</span>, <span class="text-[#d2a8ff]">toObservable</span>&#125;  <span class="text-[#ff7b72]">from</span> <span class="text-[#a5d6ff]">'&#64;angular/core/rxjs-interop'</span>;

<span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">SearchComponent</span> &#123;
  <span class="text-[#6b7280]">// Signal → Observable → API → Signal</span>
  <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">query</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">signal</span>(<span class="text-[#a5d6ff]">''</span>);
  <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">results</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">toSignal</span>(
    <span class="text-[#d2a8ff]">toObservable</span>(<span class="text-[#79c0ff]">this</span>.<span class="text-[#79c0ff]">query</span>).<span class="text-[#d2a8ff]">pipe</span>(
      <span class="text-[#d2a8ff]">debounceTime</span>(<span class="text-[#79c0ff]">300</span>),
      <span class="text-[#d2a8ff]">switchMap</span>(<span class="text-[#79c0ff]">q</span> <span class="text-[#ff7b72]">=></span> <span class="text-[#79c0ff]">this</span>.<span class="text-[#d2a8ff]">search</span>(<span class="text-[#79c0ff]">q</span>))
    ), &#123;<span class="text-[#79c0ff]">initialValue</span>: []&#125;
  );
&#125;</code></pre>
          </div>
        </div>

        <!-- Operator Quick Reference -->
        <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm overflow-hidden">
          <div class="p-8 border-b border-surface-container-lowest flex items-center gap-4">
            <h2 class="font-display text-xl font-bold text-on-surface">Operator Quick Reference</h2>
            <span class="bg-[#cc002b]/10 text-[#cc002b] font-label text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">14 Essential Operators</span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-sm font-body">
              <thead class="bg-[#f8f9fa] border-b border-surface-container-lowest">
                <tr class="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  <th class="text-left px-6 py-4">Operator</th>
                  <th class="text-left px-6 py-4">Category</th>
                  <th class="text-left px-6 py-4 hidden md:table-cell">Use Case</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-surface-container-lowest">
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#cc002b] font-bold">map()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Transform</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Transform each emitted value</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#cc002b] font-bold">filter()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Filter</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Only pass values matching predicate</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#d2a8ff] font-bold">switchMap()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Flatten</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Cancel prev inner stream, switch to new</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#d2a8ff] font-bold">mergeMap()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Flatten</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Run all inner streams concurrently</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#d2a8ff] font-bold">concatMap()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Flatten</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Queue inner streams sequentially</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#ffd580] font-bold">debounceTime()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Time</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Delay emission after last source emit</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#ffd580] font-bold">throttleTime()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Time</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Rate-limit emissions to one per window</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#a5d6ff] font-bold">distinctUntilChanged()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Filter</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Only emit when value changes</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#a5d6ff] font-bold">takeUntilDestroyed()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Cleanup</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Auto-unsubscribe on component destroy</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#ff7b72] font-bold">catchError()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Error</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Handle errors, return fallback Observable</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#ff7b72] font-bold">retry()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Error</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Re-subscribe N times on error</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#79c0ff] font-bold">combineLatest()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Combine</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Emit when any source emits (with latest)</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#79c0ff] font-bold">forkJoin()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Combine</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Parallel requests, emit when all complete</td></tr>
                <tr class="hover:bg-[#f8f9fa] transition-colors"><td class="px-6 py-4 font-mono text-xs text-[#79c0ff] font-bold">shareReplay()</td><td class="px-6 py-4 text-xs text-on-surface-variant">Multicast</td><td class="px-6 py-4 text-xs text-on-surface-variant hidden md:table-cell">Share and cache one subscription for all</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  `
})
export class RxjsComponent {}
