import { Component } from '@angular/core';

@Component({
  selector: 'app-guards',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#f8f9fa]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-[#cc002b] uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-[#cc002b]/10 shadow-sm">ROUTE PROTECTION</span>
            <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
              Guards &amp;<br><span class="text-[#cc002b]">Authorization.</span>
            </h1>
            <p class="font-body text-base text-on-surface-variant leading-relaxed max-w-md">
              Route guards are functional gatekeepers. They intercept navigation events and allow, redirect, or block access — keeping your application's entry points secure.
            </p>
          </div>
          <div class="bg-[#11131e] rounded-sm p-8 border border-[#2d3142] shadow-2xl">
            <div class="flex gap-2 mb-4">
              <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">auth.guard.ts</span>
            </div>
            <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export const</span> <span class="text-[#79c0ff]">authGuard</span>: <span class="text-[#d2a8ff]">CanActivateFn</span> <span class="text-[#e39400]">=</span>
  (<span class="text-[#79c0ff]">route</span>, <span class="text-[#79c0ff]">state</span>) <span class="text-[#ff7b72]">=&gt;</span> &#123;
    <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">auth</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">inject</span>(AuthService);
    <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">router</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">inject</span>(Router);

    <span class="text-[#ff7b72]">return</span> auth.<span class="text-[#d2a8ff]">isLoggedIn</span>()
      ? <span class="text-[#79c0ff]">true</span>
      : router.<span class="text-[#d2a8ff]">createUrlTree</span>([<span class="text-[#a5d6ff]">'/login'</span>], &#123;
          queryParams: &#123; returnUrl: state.url &#125;
        &#125;);
  &#125;;</code></pre>
          </div>
        </div>

        <!-- Guard Types -->
        <div class="mb-24">
          <div class="mb-12">
            <h2 class="font-display text-3xl font-bold text-on-surface mb-2">Guard Types</h2>
            <p class="font-body text-sm text-on-surface-variant">Four functional interfaces, each intercepting navigation at a different lifecycle stage.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <!-- CanActivateFn -->
            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 relative overflow-hidden group hover:border-[#cc002b]/30 transition-colors">
              <div class="absolute inset-y-0 left-0 w-1 bg-[#cc002b]"></div>
              <div class="pl-4">
                <div class="flex items-center gap-3 mb-4">
                  <span class="font-mono text-[10px] bg-[#cc002b]/10 text-[#cc002b] px-2 py-1 rounded-sm font-bold">CanActivateFn</span>
                </div>
                <h3 class="font-display text-lg font-bold text-on-surface mb-3">Route Entry Guard</h3>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-4">Determines whether a route can be activated. The primary auth checkpoint — runs before the component is created.</p>
                <div class="bg-[#f8f9fa] rounded-sm p-3 font-mono text-[9px] text-on-surface-variant border border-surface-container-high">
                  Apply in: <span class="text-[#cc002b]">canActivate: [authGuard]</span>
                </div>
              </div>
            </div>

            <!-- CanDeactivateFn -->
            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 relative overflow-hidden group hover:border-[#005faf]/30 transition-colors">
              <div class="absolute inset-y-0 left-0 w-1 bg-[#005faf]"></div>
              <div class="pl-4">
                <div class="flex items-center gap-3 mb-4">
                  <span class="font-mono text-[10px] bg-[#005faf]/10 text-[#005faf] px-2 py-1 rounded-sm font-bold">CanDeactivateFn</span>
                </div>
                <h3 class="font-display text-lg font-bold text-on-surface mb-3">Unsaved Changes Guard</h3>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-4">Runs before leaving a route. Ideal for prompting users about unsaved form data before navigation completes.</p>
                <div class="bg-[#f8f9fa] rounded-sm p-3 font-mono text-[9px] text-on-surface-variant border border-surface-container-high">
                  Apply in: <span class="text-[#005faf]">canDeactivate: [pendingChangesGuard]</span>
                </div>
              </div>
            </div>

            <!-- CanMatchFn -->
            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 relative overflow-hidden group hover:border-[#005e73]/30 transition-colors">
              <div class="absolute inset-y-0 left-0 w-1 bg-[#005e73]"></div>
              <div class="pl-4">
                <div class="flex items-center gap-3 mb-4">
                  <span class="font-mono text-[10px] bg-[#005e73]/10 text-[#005e73] px-2 py-1 rounded-sm font-bold">CanMatchFn</span>
                </div>
                <h3 class="font-display text-lg font-bold text-on-surface mb-3">Lazy Load Guard</h3>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-4">Determines if a route's lazy-loaded bundle should even be fetched. Prevents downloading code for unauthorized users.</p>
                <div class="bg-[#f8f9fa] rounded-sm p-3 font-mono text-[9px] text-on-surface-variant border border-surface-container-high">
                  Apply in: <span class="text-[#005e73]">canMatch: [featureFlagGuard]</span>
                </div>
              </div>
            </div>

            <!-- ResolveFn -->
            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 relative overflow-hidden group hover:border-[#191c1d]/20 transition-colors">
              <div class="absolute inset-y-0 left-0 w-1 bg-[#191c1d]"></div>
              <div class="pl-4">
                <div class="flex items-center gap-3 mb-4">
                  <span class="font-mono text-[10px] bg-[#191c1d]/10 text-[#191c1d] px-2 py-1 rounded-sm font-bold">ResolveFn</span>
                </div>
                <h3 class="font-display text-lg font-bold text-on-surface mb-3">Data Pre-fetcher</h3>
                <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-4">Fetches data before the route activates. The resolved value is injected into the component via <span class="font-mono">ActivatedRoute.data</span>.</p>
                <div class="bg-[#f8f9fa] rounded-sm p-3 font-mono text-[9px] text-on-surface-variant border border-surface-container-high">
                  Apply in: <span class="text-[#191c1d]">resolve: &#123; user: userResolver &#125;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Full Width Dark: Route Config Example -->
        <section class="bg-[#11131e] py-16 px-8 md:px-16 rounded-sm border border-[#2d3142] mb-24">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 class="font-display text-3xl font-bold text-white mb-6">Route Configuration</h2>
              <p class="font-body text-sm text-white/70 leading-relaxed mb-8">Composing multiple guards on a single route. Guards execute in array order — the first falsy result short-circuits the chain.</p>
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-[#cc002b] flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <div class="font-display text-sm font-bold text-white mb-1">canMatch evaluates first</div>
                    <div class="font-body text-xs text-white/50">Bundle won't download unless this passes</div>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-[#005faf] flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <div class="font-display text-sm font-bold text-white mb-1">canActivate runs next</div>
                    <div class="font-body text-xs text-white/50">Auth check before component creation</div>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-[#005e73] flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <div class="font-display text-sm font-bold text-white mb-1">resolve pre-fetches data</div>
                    <div class="font-body text-xs text-white/50">Component always has data on init</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-black/40 rounded-sm p-6 border border-white/5">
              <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]">&#123;
  path: <span class="text-[#a5d6ff]">'admin/dashboard'</span>,
  canMatch: [<span class="text-[#d2a8ff]">featureFlagGuard</span>],
  canActivate: [<span class="text-[#d2a8ff]">authGuard</span>, <span class="text-[#d2a8ff]">roleGuard</span>],
  resolve: &#123;
    stats: <span class="text-[#d2a8ff]">dashboardResolver</span>
  &#125;,
  canDeactivate: [<span class="text-[#d2a8ff]">pendingChangesGuard</span>],
  loadComponent: () <span class="text-[#ff7b72]">=&gt;</span>
    <span class="text-[#d2a8ff]">import</span>(<span class="text-[#a5d6ff]">'./admin/dashboard.component'</span>)
    .<span class="text-[#d2a8ff]">then</span>(m <span class="text-[#ff7b72]">=&gt;</span> m.<span class="text-[#d2a8ff]">DashboardComponent</span>)
&#125;</code></pre>
            </div>
          </div>
        </section>

        <!-- CanDeactivate Pattern -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
          <div class="bg-[#11131e] rounded-sm p-8 border border-[#2d3142] shadow-xl">
            <div class="flex gap-2 mb-4">
              <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">pending-changes.guard.ts</span>
            </div>
            <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export interface</span> <span class="text-[#d2a8ff]">CanDeactivateComponent</span> &#123;
  <span class="text-[#d2a8ff]">hasUnsavedChanges</span>(): <span class="text-[#79c0ff]">boolean</span>;
&#125;

<span class="text-[#ff7b72]">export const</span> <span class="text-[#79c0ff]">pendingChangesGuard</span>:
  <span class="text-[#d2a8ff]">CanDeactivateFn</span>&lt;<span class="text-[#d2a8ff]">CanDeactivateComponent</span>&gt; <span class="text-[#e39400]">=</span>
  (<span class="text-[#79c0ff]">component</span>) <span class="text-[#ff7b72]">=&gt;</span> &#123;
    <span class="text-[#ff7b72]">if</span> (!component.<span class="text-[#d2a8ff]">hasUnsavedChanges</span>()) &#123;
      <span class="text-[#ff7b72]">return true</span>;
    &#125;
    <span class="text-[#ff7b72]">return</span> <span class="text-[#d2a8ff]">confirm</span>(
      <span class="text-[#a5d6ff]">'Discard unsaved changes?'</span>
    );
  &#125;;</code></pre>
          </div>
          <div>
            <span class="font-label text-xs text-[#005faf] uppercase tracking-widest font-bold mb-4 block">DEACTIVATION PATTERN</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-6">Unsaved Changes Protection</h2>
            <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
              Use an interface contract between guard and component. The component implements <span class="font-mono text-[#cc002b] bg-[#cc002b]/5 px-1 rounded">hasUnsavedChanges()</span>, and the guard calls it — no tight coupling, fully testable.
            </p>
            <div class="space-y-3 font-body text-xs text-on-surface-variant">
              <div class="flex items-center gap-3 bg-white border border-surface-container-lowest rounded-sm p-3 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#27c93f] flex-shrink-0"></div>
                No direct component reference in guard
              </div>
              <div class="flex items-center gap-3 bg-white border border-surface-container-lowest rounded-sm p-3 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#27c93f] flex-shrink-0"></div>
                Observable and Promise return values supported
              </div>
              <div class="flex items-center gap-3 bg-white border border-surface-container-lowest rounded-sm p-3 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#27c93f] flex-shrink-0"></div>
                UrlTree return redirects instead of blocking
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class GuardsComponent {}
