import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#fdfdfd]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-20">
          <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">ANGULAR 16+ REACTIVITY</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
            The <span class="bg-gradient-to-r from-[#005faf] to-[#cc002b] bg-clip-text text-transparent">Signal</span><br>Primitive.
          </h1>
          <p class="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
            Angular Signals introduce fine-grained reactivity without zones. A signal is a reactive value that notifies consumers when it changes — glitch-free, synchronous, and dependency-tracked.
          </p>
        </div>

        <!-- Core Primitives Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <!-- signal() -->
          <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 hover:-translate-y-1 transition-transform">
            <div class="w-10 h-10 bg-[#cc002b]/10 flex items-center justify-center text-[#cc002b] rounded-sm mb-6">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 class="font-display text-xl font-bold text-on-surface mb-2">signal()</h3>
            <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">A writable reactive value. Call it as a function to read; call <code class="font-mono bg-surface-container-lowest px-1 rounded text-[#cc002b]">.set()</code> or <code class="font-mono bg-surface-container-lowest px-1 rounded text-[#cc002b]">.update()</code> to write.</p>
            <div class="bg-[#11131e] rounded-sm p-4 font-mono text-[10px] text-[#c1c6e5]">
              <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">count</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">signal</span>(<span class="text-[#a5d6ff]">0</span>);<br>
              count.<span class="text-[#d2a8ff]">set</span>(<span class="text-[#a5d6ff]">5</span>);<br>
              count.<span class="text-[#d2a8ff]">update</span>(v <span class="text-[#ff7b72]">=&gt;</span> v <span class="text-[#e39400]">+</span> <span class="text-[#a5d6ff]">1</span>);
            </div>
          </div>

          <!-- computed() -->
          <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 hover:-translate-y-1 transition-transform">
            <div class="w-10 h-10 bg-[#005faf]/10 flex items-center justify-center text-[#005faf] rounded-sm mb-6">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="font-display text-xl font-bold text-on-surface mb-2">computed()</h3>
            <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">A read-only derived signal. Automatically re-evaluates when its dependencies change. Memoized — only recalculates when needed.</p>
            <div class="bg-[#11131e] rounded-sm p-4 font-mono text-[10px] text-[#c1c6e5]">
              <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">doubled</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">computed</span>(<br>
              &nbsp;&nbsp;() <span class="text-[#ff7b72]">=&gt;</span> count() <span class="text-[#e39400]">*</span> <span class="text-[#a5d6ff]">2</span><br>
              );
            </div>
          </div>

          <!-- effect() -->
          <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 hover:-translate-y-1 transition-transform">
            <div class="w-10 h-10 bg-[#005e73]/10 flex items-center justify-center text-[#005e73] rounded-sm mb-6">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </div>
            <h3 class="font-display text-xl font-bold text-on-surface mb-2">effect()</h3>
            <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">A reactive side-effect that runs whenever its signal dependencies change. Use for DOM sync, logging, analytics — not for state derivation.</p>
            <div class="bg-[#11131e] rounded-sm p-4 font-mono text-[10px] text-[#c1c6e5]">
              <span class="text-[#d2a8ff]">effect</span>(() <span class="text-[#ff7b72]">=&gt;</span> &#123;<br>
              &nbsp;&nbsp;<span class="text-[#d2a8ff]">console</span>.<span class="text-[#d2a8ff]">log</span>(count());<br>
              &#125;);
            </div>
          </div>
        </div>

        <!-- LIVE INTERACTIVE DEMO -->
        <div class="mb-24 bg-white border border-surface-container-lowest shadow-sm rounded-sm overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Left: interactive panel -->
            <div class="p-10 lg:p-16 flex flex-col justify-center">
              <span class="font-label text-[9px] text-[#cc002b] uppercase tracking-[0.2em] font-bold mb-4 block">Live Demo — Try It</span>
              <h2 class="font-display text-3xl font-bold text-on-surface mb-3">Signal &amp; Computed<br>in Action.</h2>
              <p class="font-body text-sm text-on-surface-variant mb-10 leading-relaxed">
                The counter below is a real <span class="font-mono text-[#cc002b] bg-[#cc002b]/5 px-1 rounded">signal()</span>. The doubled value is a <span class="font-mono text-[#005faf] bg-[#005faf]/5 px-1 rounded">computed()</span> that automatically updates — no manual subscriptions.
              </p>

              <!-- Counter display -->
              <div class="flex items-end gap-8 mb-10">
                <div>
                  <div class="font-label text-[9px] uppercase tracking-widest text-on-surface-variant mb-2">count()</div>
                  <div class="font-display text-7xl font-black text-on-surface leading-none">{{ count() }}</div>
                </div>
                <div class="pb-2 text-on-surface-variant/40 text-3xl font-light">&times;2</div>
                <div>
                  <div class="font-label text-[9px] uppercase tracking-widest text-[#005faf] mb-2">computed()</div>
                  <div class="font-display text-7xl font-black text-[#005faf] leading-none">{{ doubled() }}</div>
                </div>
              </div>

              <!-- Controls -->
              <div class="flex flex-wrap gap-3">
                <button (click)="increment()"
                  class="bg-[#cc002b] hover:bg-[#a30022] text-white font-label text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-sm transition-colors">
                  + Increment
                </button>
                <button (click)="decrement()"
                  class="bg-surface-container-highest hover:bg-surface-container-high text-on-surface font-label text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-sm transition-colors">
                  − Decrement
                </button>
                <button (click)="reset()"
                  class="border border-surface-container-high hover:border-[#cc002b]/40 text-on-surface-variant font-label text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-sm transition-colors">
                  Reset
                </button>
              </div>
            </div>

            <!-- Right: code that powers this demo -->
            <div class="bg-[#11131e] p-10 lg:p-16 flex flex-col justify-center">
              <div class="flex gap-2 mb-6 border-b border-white/10 pb-4">
                <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">signals.component.ts</span>
              </div>
              <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#6b7280] italic">// This exact component</span>
<span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">SignalsComponent</span> &#123;
  <span class="text-[#79c0ff]">count</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">signal</span>(<span class="text-[#a5d6ff]">0</span>);

  <span class="text-[#79c0ff]">doubled</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">computed</span>(
    () <span class="text-[#ff7b72]">=&gt;</span> <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">count</span>() <span class="text-[#e39400]">*</span> <span class="text-[#a5d6ff]">2</span>
  );

  <span class="text-[#d2a8ff]">increment</span>() &#123;
    <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">count</span>.<span class="text-[#d2a8ff]">update</span>(
      v <span class="text-[#ff7b72]">=&gt;</span> v <span class="text-[#e39400]">+</span> <span class="text-[#a5d6ff]">1</span>
    );
  &#125;

  <span class="text-[#d2a8ff]">reset</span>() &#123;
    <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">count</span>.<span class="text-[#d2a8ff]">set</span>(<span class="text-[#a5d6ff]">0</span>);
  &#125;
&#125;</code></pre>
              <div class="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                <span class="w-2 h-2 rounded-full bg-[#27c93f]"></span>
                <span class="font-label text-[9px] text-white/40 uppercase tracking-widest">Live — powered by real Angular Signals</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Signal Inputs & Outputs -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          <div>
            <span class="font-label text-xs text-[#cc002b] uppercase tracking-widest font-bold mb-4 block">COMPONENT API EVOLUTION</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-6">Signal-Based Inputs</h2>
            <p class="font-body text-sm text-on-surface-variant mb-8 leading-relaxed">
              The new <span class="font-mono text-[#cc002b] bg-[#cc002b]/5 px-1 rounded">input()</span> function replaces the <span class="font-mono bg-surface-container-lowest px-1 rounded">&#64;Input()</span> decorator. It returns a read-only signal, enabling downstream <span class="font-mono text-[#005faf] bg-[#005faf]/5 px-1 rounded">computed()</span> chains directly from component props.
            </p>
            <ul class="space-y-3 font-body text-xs text-on-surface-variant">
              <li class="flex items-center gap-3"><svg class="w-4 h-4 text-[#005faf] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Type-safe with required() for mandatory inputs</li>
              <li class="flex items-center gap-3"><svg class="w-4 h-4 text-[#005faf] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Composable with computed() without subscriptions</li>
              <li class="flex items-center gap-3"><svg class="w-4 h-4 text-[#005faf] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Works with OnPush change detection natively</li>
            </ul>
          </div>
          <div class="bg-[#11131e] rounded-sm shadow-2xl overflow-hidden border border-[#2d3142] p-8">
            <div class="flex gap-2 mb-6 border-b border-white/10 pb-4">
              <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">product-card.component.ts</span>
            </div>
            <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">ProductCardComponent</span> &#123;
  <span class="text-[#79c0ff]">price</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">input</span>.<span class="text-[#d2a8ff]">required</span>&lt;<span class="text-[#79c0ff]">number</span>&gt;();
  <span class="text-[#79c0ff]">currency</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">input</span>(<span class="text-[#a5d6ff]">'USD'</span>);

  <span class="text-[#79c0ff]">formatted</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">computed</span>(() <span class="text-[#ff7b72]">=&gt;</span>
    <span class="text-[#ff7b72]">new</span> Intl.<span class="text-[#d2a8ff]">NumberFormat</span>(<span class="text-[#a5d6ff]">'en-US'</span>, &#123;
      style: <span class="text-[#a5d6ff]">'currency'</span>,
      currency: <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">currency</span>()
    &#125;).<span class="text-[#d2a8ff]">format</span>(<span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">price</span>())
  );

  <span class="text-[#79c0ff]">selected</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">output</span>&lt;<span class="text-[#79c0ff]">number</span>&gt;();
&#125;</code></pre>
          </div>
        </div>

        <!-- toSignal / toObservable -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl font-bold text-on-surface mb-2">Interop Layer</h2>
            <p class="font-body text-sm text-on-surface-variant">Bridging Signals and RxJS Observables seamlessly.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-[#f8f9fa] border border-surface-container-lowest rounded-sm p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="font-mono text-[10px] bg-[#005faf] text-white px-2 py-1 rounded-sm tracking-widest">Observable → Signal</div>
              </div>
              <h3 class="font-display text-lg font-bold text-on-surface mb-3">toSignal()</h3>
              <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">Converts an Observable into a Signal. Automatically subscribes and unsubscribes via the injection context.</p>
              <div class="bg-[#11131e] rounded-sm p-4 font-mono text-[10px] text-[#c1c6e5]">
                <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">route$</span> <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">this</span>.route.<span class="text-[#79c0ff]">params</span>;<br>
                <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">params</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">toSignal</span>(<span class="text-[#ff7b72]">this</span>.<span class="text-[#79c0ff]">route$</span>);
              </div>
            </div>
            <div class="bg-[#f8f9fa] border border-surface-container-lowest rounded-sm p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="font-mono text-[10px] bg-[#cc002b] text-white px-2 py-1 rounded-sm tracking-widest">Signal → Observable</div>
              </div>
              <h3 class="font-display text-lg font-bold text-on-surface mb-3">toObservable()</h3>
              <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">Converts a Signal into an Observable. Useful for feeding signal values into existing RxJS operator chains.</p>
              <div class="bg-[#11131e] rounded-sm p-4 font-mono text-[10px] text-[#c1c6e5]">
                <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">query</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">signal</span>(<span class="text-[#a5d6ff]">''</span>);<br>
                <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">query$</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">toObservable</span>(<br>
                &nbsp;&nbsp;<span class="text-[#ff7b72]">this</span>.<span class="text-[#79c0ff]">query</span><br>
                );
              </div>
            </div>
          </div>
        </div>

        <!-- Full-Width Dark: Reactive Counter Demo -->
        <section class="bg-[#11131e] rounded-sm py-16 px-8 md:px-16 relative overflow-hidden mb-24 border border-[#2d3142]">
          <div class="absolute -right-24 -top-24 w-96 h-96 bg-[#cc002b]/5 rounded-full filter blur-3xl pointer-events-none"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <span class="font-label text-[10px] font-bold tracking-widest uppercase text-[#cc002b] mb-4 block">LIVE PATTERN</span>
              <h2 class="font-display text-3xl font-bold text-white mb-6">Signal Store Pattern</h2>
              <p class="font-body text-sm text-white/70 leading-relaxed mb-8">
                A lightweight state container using only Signals. No NgRx, no BehaviorSubjects — just composable, typed reactive values with zero subscription boilerplate.
              </p>
              <div class="grid grid-cols-3 gap-4 text-center">
                <div class="bg-white/5 border border-white/10 rounded-sm p-4">
                  <div class="font-mono text-xl font-bold text-[#cc002b] mb-1">0ms</div>
                  <div class="font-label text-[9px] text-white/40 uppercase tracking-widest">Subscription Delay</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-sm p-4">
                  <div class="font-mono text-xl font-bold text-[#a5d6ff] mb-1">100%</div>
                  <div class="font-label text-[9px] text-white/40 uppercase tracking-widest">Type Safe</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-sm p-4">
                  <div class="font-mono text-xl font-bold text-[#79c0ff] mb-1">Fine</div>
                  <div class="font-label text-[9px] text-white/40 uppercase tracking-widest">Granularity</div>
                </div>
              </div>
            </div>
            <div class="bg-black/30 rounded-sm p-8 border border-white/5">
              <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">CartStore</span> &#123;
  <span class="text-[#ff7b72]">private</span> <span class="text-[#79c0ff]">items</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">signal</span>&lt;<span class="text-[#79c0ff]">CartItem</span>[]&gt;([]);

  <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">count</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">computed</span>(
    () <span class="text-[#ff7b72]">=&gt;</span> <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">items</span>().<span class="text-[#d2a8ff]">length</span>
  );
  <span class="text-[#ff7b72]">readonly</span> <span class="text-[#79c0ff]">total</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">computed</span>(
    () <span class="text-[#ff7b72]">=&gt;</span> <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">items</span>()
      .<span class="text-[#d2a8ff]">reduce</span>((s, i) <span class="text-[#ff7b72]">=&gt;</span> s <span class="text-[#e39400]">+</span> i.price, <span class="text-[#a5d6ff]">0</span>)
  );

  <span class="text-[#d2a8ff]">add</span>(<span class="text-[#79c0ff]">item</span>: CartItem) &#123;
    <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">items</span>.<span class="text-[#d2a8ff]">update</span>(
      cur <span class="text-[#ff7b72]">=&gt;</span> [...cur, item]
    );
  &#125;
&#125;</code></pre>
            </div>
          </div>
        </section>

      </div>
    </div>
  `
})
export class SignalsComponent {
  readonly count = signal(0);
  readonly doubled = computed(() => this.count() * 2);

  increment() { this.count.update(v => v + 1); }
  decrement() { this.count.update(v => v - 1); }
  reset() { this.count.set(0); }
}
