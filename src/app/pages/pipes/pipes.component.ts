import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe, UpperCasePipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, DecimalPipe, UpperCasePipe, PercentPipe],
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#f8f9fa]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-20">
          <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">TEMPLATE TRANSFORMATIONS</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
            Built-in &amp;<br><span class="bg-gradient-to-r from-[#005faf] to-[#cc002b] bg-clip-text text-transparent">Custom Pipes.</span>
          </h1>
          <p class="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
            Pipes transform displayed values in templates without mutating source data. Angular ships with a rich set of built-in pipes; you can extend them with pure or impure custom implementations.
          </p>
        </div>

        <!-- Built-in Pipes Grid -->
        <div class="mb-24">
          <h2 class="font-display text-2xl font-bold text-on-surface mb-8">Built-in Pipes</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-6 hover:-translate-y-1 transition-transform">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-[10px] bg-[#005faf]/10 text-[#005faf] px-2 py-1 rounded-sm font-bold">date</span>
                <span class="font-body text-[10px] text-on-surface-variant">Locale-aware</span>
              </div>
              <div class="mb-4">
                <div class="font-body text-xs text-on-surface-variant mb-1">Input</div>
                <div class="font-mono text-xs text-on-surface bg-surface-container-lowest px-2 py-1 rounded">{{ today }}</div>
              </div>
              <div class="mb-4">
                <div class="font-body text-xs text-on-surface-variant mb-1">Output: <span class="font-mono text-[#cc002b]">{{ today | date:'longDate' }}</span></div>
              </div>
              <div class="bg-[#11131e] rounded-sm p-3 font-mono text-[9px] text-[#c1c6e5]">
                &#123;&#123; value | date:<span class="text-[#a5d6ff]">'longDate'</span> &#125;&#125;
              </div>
            </div>

            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-6 hover:-translate-y-1 transition-transform">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-[10px] bg-[#cc002b]/10 text-[#cc002b] px-2 py-1 rounded-sm font-bold">currency</span>
                <span class="font-body text-[10px] text-on-surface-variant">Financial</span>
              </div>
              <div class="mb-4">
                <div class="font-body text-xs text-on-surface-variant mb-1">Input</div>
                <div class="font-mono text-xs text-on-surface bg-surface-container-lowest px-2 py-1 rounded">12489.5</div>
              </div>
              <div class="mb-4">
                <div class="font-body text-xs text-on-surface-variant mb-1">Output: <span class="font-mono text-[#cc002b]">{{ 12489.5 | currency:'EUR':'symbol':'1.2-2' }}</span></div>
              </div>
              <div class="bg-[#11131e] rounded-sm p-3 font-mono text-[9px] text-[#c1c6e5]">
                &#123;&#123; value | currency:<span class="text-[#a5d6ff]">'EUR'</span> &#125;&#125;
              </div>
            </div>

            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-6 hover:-translate-y-1 transition-transform">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-[10px] bg-[#005e73]/10 text-[#005e73] px-2 py-1 rounded-sm font-bold">number</span>
                <span class="font-body text-[10px] text-on-surface-variant">Decimal</span>
              </div>
              <div class="mb-4">
                <div class="font-body text-xs text-on-surface-variant mb-1">Input</div>
                <div class="font-mono text-xs text-on-surface bg-surface-container-lowest px-2 py-1 rounded">3.14159265</div>
              </div>
              <div class="mb-4">
                <div class="font-body text-xs text-on-surface-variant mb-1">Output: <span class="font-mono text-[#cc002b]">{{ 3.14159265 | number:'1.2-4' }}</span></div>
              </div>
              <div class="bg-[#11131e] rounded-sm p-3 font-mono text-[9px] text-[#c1c6e5]">
                &#123;&#123; value | number:<span class="text-[#a5d6ff]">'1.2-4'</span> &#125;&#125;
              </div>
            </div>

            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-6 hover:-translate-y-1 transition-transform">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-[10px] bg-[#191c1d]/10 text-[#191c1d] px-2 py-1 rounded-sm font-bold">uppercase</span>
                <span class="font-body text-[10px] text-on-surface-variant">String</span>
              </div>
              <div class="mb-4">
                <div class="font-body text-xs text-on-surface-variant mb-1">Output: <span class="font-mono text-[#cc002b]">{{ 'angular signals' | uppercase }}</span></div>
              </div>
              <div class="bg-[#11131e] rounded-sm p-3 font-mono text-[9px] text-[#c1c6e5]">
                {{ '{' }}{{ '{' }} value | uppercase {{ '}' }}{{ '}' }}
              </div>
            </div>

            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-6 hover:-translate-y-1 transition-transform">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-[10px] bg-[#005faf]/10 text-[#005faf] px-2 py-1 rounded-sm font-bold">async</span>
                <span class="font-body text-[10px] text-on-surface-variant">Observable/Promise</span>
              </div>
              <p class="font-body text-[10px] text-on-surface-variant leading-relaxed mb-4">Auto-subscribes to an Observable or Promise and renders the latest value. Unsubscribes on destroy — no memory leaks.</p>
              <div class="bg-[#11131e] rounded-sm p-3 font-mono text-[9px] text-[#c1c6e5]">
                {{ '{' }}{{ '{' }} data$ | async {{ '}' }}{{ '}' }}
              </div>
            </div>

            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-6 hover:-translate-y-1 transition-transform">
              <div class="flex items-center justify-between mb-4">
                <span class="font-mono text-[10px] bg-[#cc002b]/10 text-[#cc002b] px-2 py-1 rounded-sm font-bold">percent</span>
                <span class="font-body text-[10px] text-on-surface-variant">Ratio</span>
              </div>
              <div class="mb-4">
                <div class="font-body text-xs text-on-surface-variant mb-1">Output: <span class="font-mono text-[#cc002b]">{{ 0.875 | percent:'1.0-1' }}</span></div>
              </div>
              <div class="bg-[#11131e] rounded-sm p-3 font-mono text-[9px] text-[#c1c6e5]">
                &#123;&#123; 0.875 | percent:<span class="text-[#a5d6ff]">'1.0-1'</span> &#125;&#125;
              </div>
            </div>

          </div>
        </div>

        <!-- Custom Pipe -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          <div>
            <span class="font-label text-xs text-[#cc002b] uppercase tracking-widest font-bold mb-4 block">CUSTOM IMPLEMENTATION</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-6">Writing a Custom Pipe</h2>
            <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
              A custom pipe implements the <span class="font-mono text-[#cc002b] bg-[#cc002b]/5 px-1 rounded">PipeTransform</span> interface. Mark it <span class="font-mono bg-surface-container-lowest px-1 rounded">pure: true</span> (default) for memoization — Angular only re-runs the transform when the input reference changes.
            </p>
            <div class="space-y-3">
              <div class="bg-white border border-surface-container-lowest rounded-sm p-4 shadow-sm">
                <div class="font-display text-xs font-bold text-on-surface mb-1">Pure Pipe (default)</div>
                <div class="font-body text-[10px] text-on-surface-variant">Only re-executes when input reference changes. Memoized and change-detection safe.</div>
              </div>
              <div class="bg-white border border-surface-container-lowest rounded-sm p-4 shadow-sm">
                <div class="font-display text-xs font-bold text-on-surface mb-1">Impure Pipe <span class="text-[#cc002b]">(pure: false)</span></div>
                <div class="font-body text-[10px] text-on-surface-variant">Re-executes on every change detection cycle. Use sparingly — impacts performance. Required for mutable array/object inputs.</div>
              </div>
            </div>
          </div>
          <div class="bg-[#11131e] rounded-sm shadow-2xl overflow-hidden border border-[#2d3142] p-8">
            <div class="flex gap-2 mb-4 pb-4 border-b border-white/10">
              <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">truncate.pipe.ts</span>
            </div>
            <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">@Pipe</span>(&#123;
  name: <span class="text-[#a5d6ff]">'truncate'</span>,
  standalone: <span class="text-[#79c0ff]">true</span>,
  pure: <span class="text-[#79c0ff]">true</span>
&#125;)
<span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">TruncatePipe</span>
  <span class="text-[#ff7b72]">implements</span> <span class="text-[#d2a8ff]">PipeTransform</span> &#123;

  <span class="text-[#d2a8ff]">transform</span>(
    <span class="text-[#79c0ff]">value</span>: <span class="text-[#79c0ff]">string</span>,
    <span class="text-[#79c0ff]">limit</span> <span class="text-[#e39400]">=</span> <span class="text-[#a5d6ff]">100</span>,
    <span class="text-[#79c0ff]">trail</span> <span class="text-[#e39400]">=</span> <span class="text-[#a5d6ff]">'…'</span>
  ): <span class="text-[#79c0ff]">string</span> &#123;
    <span class="text-[#ff7b72]">return</span> value.length <span class="text-[#e39400]">&gt;</span> limit
      ? value.<span class="text-[#d2a8ff]">slice</span>(<span class="text-[#a5d6ff]">0</span>, limit) <span class="text-[#e39400]">+</span> trail
      : value;
  &#125;
&#125;

<span class="text-[#6e7681]">// In template:</span>
<span class="text-[#6e7681]">// {{ '{' }}{{ '{' }} bio | truncate:80 {{ '}' }}{{ '}' }}</span></code></pre>
          </div>
        </div>

        <!-- Pipe Chaining -->
        <div class="bg-[#11131e] rounded-sm py-12 px-8 md:px-16 border border-[#2d3142] mb-8">
          <h2 class="font-display text-2xl font-bold text-white mb-6">Pipe Chaining</h2>
          <p class="font-body text-sm text-white/70 mb-8 max-w-2xl">Pipes compose left-to-right. The output of each pipe becomes the input of the next — building powerful transformations inline with no intermediate variables.</p>
          <div class="bg-black/40 rounded-sm p-6 font-mono text-sm text-[#c1c6e5] border border-white/5">
            <span class="text-[#6e7681]">&lt;!-- Format, truncate, then uppercase --&gt;</span><br>
            &#123;&#123; product.description | <span class="text-[#d2a8ff]">truncate</span>:<span class="text-[#a5d6ff]">60</span> | <span class="text-[#d2a8ff]">uppercase</span> &#125;&#125;<br><br>
            <span class="text-[#6e7681]">&lt;!-- Date with locale --&gt;</span><br>
            &#123;&#123; order.date | <span class="text-[#d2a8ff]">date</span>:<span class="text-[#a5d6ff]">'mediumDate'</span>:<span class="text-[#a5d6ff]">''</span>:<span class="text-[#a5d6ff]">'fr-FR'</span> &#125;&#125;<br><br>
            <span class="text-[#6e7681]">&lt;!-- Async + transform --&gt;</span><br>
            &#123;&#123; items$ | <span class="text-[#d2a8ff]">async</span> | <span class="text-[#d2a8ff]">json</span> &#125;&#125;
          </div>
        </div>

      </div>
    </div>
  `
})
export class PipesComponent {
  today = new Date();
}
