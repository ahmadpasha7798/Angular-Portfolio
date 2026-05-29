import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#fdfdfd]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-20">
          <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">TEMPLATE BEHAVIOR</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
            Structural &amp;<br><span class="bg-gradient-to-r from-[#005faf] to-[#cc002b] bg-clip-text text-transparent">Attribute Directives.</span>
          </h1>
          <p class="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
            Directives extend HTML with custom behavior. Structural directives reshape the DOM; attribute directives modify element appearance or behavior. Angular 17+ introduces a cleaner built-in control flow syntax.
          </p>
        </div>

        <!-- Control Flow Comparison -->
        <div class="mb-24">
          <div class="mb-12">
            <h2 class="font-display text-3xl font-bold text-on-surface mb-2">Modern Control Flow</h2>
            <p class="font-body text-sm text-on-surface-variant">Angular 17+ replaces <span class="font-mono bg-surface-container-lowest px-1 rounded">*ngIf</span> and <span class="font-mono bg-surface-container-lowest px-1 rounded">*ngFor</span> with built-in template syntax — no imports required.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Old -->
            <div class="bg-[#f8f9fa] border border-surface-container-lowest rounded-sm p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-6">
                <div class="font-mono text-[10px] bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded-sm tracking-widest border border-surface-container-high">BEFORE Angular 17</div>
              </div>
              <div class="bg-[#11131e] rounded-sm p-5 font-mono text-[10px] text-[#c1c6e5] leading-loose">
                <span class="text-[#6e7681]">&lt;!-- Structural directives --&gt;</span><br>
                &lt;<span class="text-[#79c0ff]">div</span> <span class="text-[#cc002b]">*ngIf</span>=<span class="text-[#a5d6ff]">"isLoggedIn"</span>&gt;<br>
                &nbsp;&nbsp;Welcome back!<br>
                &lt;/<span class="text-[#79c0ff]">div</span>&gt;<br><br>
                &lt;<span class="text-[#79c0ff]">li</span> <span class="text-[#cc002b]">*ngFor</span>=<br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#a5d6ff]">"let item of items; let i = index"</span>&gt;<br>
                &nbsp;&nbsp;{{ '{' }}{{ '{' }} i {{ '}' }}{{ '}' }}: {{ '{' }}{{ '{' }} item.name {{ '}' }}{{ '}' }}<br>
                &lt;/<span class="text-[#79c0ff]">li</span>&gt;
              </div>
            </div>
            <!-- New -->
            <div class="bg-gradient-to-br from-[#11131e] to-[#1e2235] rounded-sm p-8 shadow-2xl border border-[#cc002b]/20 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-[#cc002b]/5 rounded-bl-full"></div>
              <div class="flex items-center gap-3 mb-6 relative z-10">
                <div class="font-mono text-[10px] bg-[#cc002b] text-white px-2 py-1 rounded-sm tracking-widest">Angular 17+ Built-in</div>
              </div>
              <div class="font-mono text-[10px] text-[#c1c6e5] leading-loose relative z-10">
                <span class="text-[#6e7681]">&lt;!-- Built-in control flow --&gt;</span><br>
                <span class="text-[#ff7b72]">&#64;if</span> (isLoggedIn) &#123;<br>
                &nbsp;&nbsp;<span class="text-[#79c0ff]">&lt;p&gt;</span>Welcome back!<span class="text-[#79c0ff]">&lt;/p&gt;</span><br>
                &#125; <span class="text-[#ff7b72]">&#64;else</span> &#123;<br>
                &nbsp;&nbsp;<span class="text-[#79c0ff]">&lt;p&gt;</span>Please log in.<span class="text-[#79c0ff]">&lt;/p&gt;</span><br>
                &#125;<br><br>
                <span class="text-[#ff7b72]">&#64;for</span> (item <span class="text-[#ff7b72]">of</span> items; <span class="text-[#ff7b72]">track</span> item.id) &#123;<br>
                &nbsp;&nbsp;<span class="text-[#79c0ff]">&lt;li&gt;</span>{{ '{' }}{{ '{' }} item.name {{ '}' }}{{ '}' }}<span class="text-[#79c0ff]">&lt;/li&gt;</span><br>
                &#125; <span class="text-[#ff7b72]">&#64;empty</span> &#123;<br>
                &nbsp;&nbsp;<span class="text-[#79c0ff]">&lt;li&gt;</span>No items found.<span class="text-[#79c0ff]">&lt;/li&gt;</span><br>
                &#125;
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Attribute Directive -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          <div class="bg-[#11131e] rounded-sm shadow-2xl overflow-hidden border border-[#2d3142] p-8">
            <div class="flex gap-2 mb-4 pb-4 border-b border-white/10">
              <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">highlight.directive.ts</span>
            </div>
            <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">@Directive</span>(&#123;
  selector: <span class="text-[#a5d6ff]">'[appHighlight]'</span>,
  standalone: <span class="text-[#79c0ff]">true</span>,
&#125;)
<span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">HighlightDirective</span> &#123;
  <span class="text-[#79c0ff]">color</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">input</span>(<span class="text-[#a5d6ff]">'yellow'</span>);
  <span class="text-[#ff7b72]">private</span> <span class="text-[#79c0ff]">el</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">inject</span>(ElementRef);

  <span class="text-[#ff7b72]">@HostListener</span>(<span class="text-[#a5d6ff]">'mouseenter'</span>)
  <span class="text-[#d2a8ff]">onEnter</span>() &#123;
    <span class="text-[#ff7b72]">this</span>.<span class="text-[#79c0ff]">el</span>.nativeElement.style
      .backgroundColor <span class="text-[#e39400]">=</span> <span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">color</span>();
  &#125;

  <span class="text-[#ff7b72]">@HostListener</span>(<span class="text-[#a5d6ff]">'mouseleave'</span>)
  <span class="text-[#d2a8ff]">onLeave</span>() &#123;
    <span class="text-[#ff7b72]">this</span>.<span class="text-[#79c0ff]">el</span>.nativeElement.style
      .backgroundColor <span class="text-[#e39400]">=</span> <span class="text-[#a5d6ff]">''</span>;
  &#125;
&#125;

<span class="text-[#6e7681]">// Usage:</span>
<span class="text-[#6e7681]">// &lt;p [appHighlight]="'#cc002b'"&gt;Hover me&lt;/p&gt;</span></code></pre>
          </div>
          <div>
            <span class="font-label text-xs text-[#cc002b] uppercase tracking-widest font-bold mb-4 block">ATTRIBUTE DIRECTIVES</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-6">Custom Attribute Directive</h2>
            <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
              Attribute directives modify the behavior or appearance of an element. The <span class="font-mono text-[#cc002b] bg-[#cc002b]/5 px-1 rounded">&#64;HostListener</span> decorator binds DOM events without <span class="font-mono bg-surface-container-lowest px-1 rounded">addEventListener</span> — automatically cleaned up on destroy.
            </p>
            <div class="space-y-3">
              <div class="flex items-start gap-4 bg-white border border-surface-container-lowest rounded-sm p-4 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#cc002b] flex-shrink-0 mt-1.5"></div>
                <div>
                  <div class="font-display text-xs font-bold text-on-surface mb-1">&#64;HostListener</div>
                  <div class="font-body text-[10px] text-on-surface-variant">Binds DOM events on the host element — cleaned up automatically.</div>
                </div>
              </div>
              <div class="flex items-start gap-4 bg-white border border-surface-container-lowest rounded-sm p-4 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#005faf] flex-shrink-0 mt-1.5"></div>
                <div>
                  <div class="font-display text-xs font-bold text-on-surface mb-1">&#64;HostBinding</div>
                  <div class="font-body text-[10px] text-on-surface-variant">Binds a class or style to the host element declaratively.</div>
                </div>
              </div>
              <div class="flex items-start gap-4 bg-white border border-surface-container-lowest rounded-sm p-4 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#005e73] flex-shrink-0 mt-1.5"></div>
                <div>
                  <div class="font-display text-xs font-bold text-on-surface mb-1">Signal Inputs in Directives</div>
                  <div class="font-body text-[10px] text-on-surface-variant">Use <span class="font-mono text-[#005e73]">input()</span> instead of <span class="font-mono">&#64;Input()</span> for fully reactive directive props.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- @switch block -->
        <div class="bg-[#11131e] rounded-sm py-12 px-8 md:px-16 border border-[#2d3142] mb-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 class="font-display text-2xl font-bold text-white mb-4">&#64;switch Block</h2>
              <p class="font-body text-sm text-white/70 leading-relaxed mb-6">The built-in <span class="font-mono text-[#a5d6ff]">&#64;switch</span> is a clean replacement for <span class="font-mono text-white/40">ngSwitch</span>. Each <span class="font-mono text-[#a5d6ff]">&#64;case</span> matches by strict equality — no falsy coercion.</p>
              <div class="grid grid-cols-3 gap-3">
                <div class="bg-white/5 border border-white/10 rounded-sm p-3 text-center">
                  <div class="font-mono text-[#a5d6ff] text-xs font-bold">&#64;switch</div>
                  <div class="font-body text-[9px] text-white/40 mt-1">Expression</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-sm p-3 text-center">
                  <div class="font-mono text-[#79c0ff] text-xs font-bold">&#64;case</div>
                  <div class="font-body text-[9px] text-white/40 mt-1">Match branch</div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-sm p-3 text-center">
                  <div class="font-mono text-[#d2a8ff] text-xs font-bold">&#64;default</div>
                  <div class="font-body text-[9px] text-white/40 mt-1">Fallback</div>
                </div>
              </div>
            </div>
            <div class="bg-black/40 rounded-sm p-6 border border-white/5 font-mono text-[10px] text-[#c1c6e5] leading-loose">
              <span class="text-[#ff7b72]">&#64;switch</span> (userRole) &#123;<br>
              &nbsp;&nbsp;<span class="text-[#ff7b72]">&#64;case</span> (<span class="text-[#a5d6ff]">'admin'</span>) &#123;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#79c0ff]">&lt;app-admin-panel /&gt;</span><br>
              &nbsp;&nbsp;&#125;<br>
              &nbsp;&nbsp;<span class="text-[#ff7b72]">&#64;case</span> (<span class="text-[#a5d6ff]">'editor'</span>) &#123;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#79c0ff]">&lt;app-editor-panel /&gt;</span><br>
              &nbsp;&nbsp;&#125;<br>
              &nbsp;&nbsp;<span class="text-[#ff7b72]">&#64;default</span> &#123;<br>
              &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-[#79c0ff]">&lt;app-viewer-panel /&gt;</span><br>
              &nbsp;&nbsp;&#125;<br>
              &#125;
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class DirectivesComponent {}
