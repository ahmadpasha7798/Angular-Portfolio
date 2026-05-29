import { Component } from '@angular/core';

@Component({
  selector: 'app-http',
  standalone: true,
  template: `
    <div class="animate-fade-in-up min-h-screen pt-32 pb-24 bg-[#fdfdfd]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Header -->
        <div class="mb-20">
          <span class="inline-block py-1 px-3 rounded-sm bg-surface-container-highest text-on-surface-variant uppercase tracking-[0.2em] text-[10px] font-bold mb-6 font-label border border-surface-container-high shadow-sm">DATA LAYER</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold text-on-surface leading-tight tracking-tight mb-6">
            HTTP Client &amp;<br><span class="bg-gradient-to-r from-[#005faf] to-[#cc002b] bg-clip-text text-transparent">Interceptors.</span>
          </h1>
          <p class="font-body text-base text-on-surface-variant leading-relaxed max-w-2xl">
            Angular's <span class="font-mono text-[#cc002b] bg-[#cc002b]/5 px-1 rounded">HttpClient</span> delivers fully typed, RxJS-powered HTTP calls. Functional interceptors wrap every request — ideal for auth headers, caching, and error transformation.
          </p>
        </div>

        <!-- HttpClient patterns -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          <div>
            <span class="font-label text-xs text-[#005faf] uppercase tracking-widest font-bold mb-4 block">TYPED REQUESTS</span>
            <h2 class="font-display text-3xl font-bold text-on-surface mb-6">Strongly-Typed HTTP</h2>
            <p class="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
              Pass a generic type to <span class="font-mono text-[#cc002b] bg-[#cc002b]/5 px-1 rounded">.get&lt;T&gt;()</span> and Angular guarantees the response shape at compile time. Combine with RxJS operators for transformation, caching, and retry logic.
            </p>
            <div class="space-y-4">
              <div class="flex items-start gap-4 bg-white border border-surface-container-lowest rounded-sm p-4 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#cc002b] flex-shrink-0 mt-1.5"></div>
                <div>
                  <div class="font-display text-xs font-bold text-on-surface mb-1">Observe: 'response'</div>
                  <div class="font-body text-[10px] text-on-surface-variant">Access status codes, headers, and the typed body in one object.</div>
                </div>
              </div>
              <div class="flex items-start gap-4 bg-white border border-surface-container-lowest rounded-sm p-4 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#005faf] flex-shrink-0 mt-1.5"></div>
                <div>
                  <div class="font-display text-xs font-bold text-on-surface mb-1">HttpParams</div>
                  <div class="font-body text-[10px] text-on-surface-variant">Immutable query string builder — safe for building complex search filters.</div>
                </div>
              </div>
              <div class="flex items-start gap-4 bg-white border border-surface-container-lowest rounded-sm p-4 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full bg-[#005e73] flex-shrink-0 mt-1.5"></div>
                <div>
                  <div class="font-display text-xs font-bold text-on-surface mb-1">reportProgress</div>
                  <div class="font-body text-[10px] text-on-surface-variant">Track upload/download progress events for file operations.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#11131e] rounded-sm shadow-2xl overflow-hidden border border-[#2d3142] p-8">
            <div class="flex gap-2 mb-4 border-b border-white/10 pb-4">
              <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">projects.service.ts</span>
            </div>
            <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">@Injectable</span>(&#123; providedIn: <span class="text-[#a5d6ff]">'root'</span> &#125;)
<span class="text-[#ff7b72]">export class</span> <span class="text-[#d2a8ff]">ProjectsService</span> &#123;
  <span class="text-[#ff7b72]">private</span> <span class="text-[#79c0ff]">http</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">inject</span>(HttpClient);
  <span class="text-[#ff7b72]">private</span> <span class="text-[#79c0ff]">base</span> <span class="text-[#e39400]">=</span> <span class="text-[#a5d6ff]">'/api/projects'</span>;

  <span class="text-[#d2a8ff]">getAll</span>() &#123;
    <span class="text-[#ff7b72]">return</span> <span class="text-[#ff7b72]">this</span>.<span class="text-[#79c0ff]">http</span>
      .<span class="text-[#d2a8ff]">get</span>&lt;<span class="text-[#d2a8ff]">Project</span>[]&gt;(<span class="text-[#ff7b72]">this</span>.<span class="text-[#79c0ff]">base</span>)
      .<span class="text-[#d2a8ff]">pipe</span>(
        <span class="text-[#d2a8ff]">retry</span>(&#123; count: <span class="text-[#a5d6ff]">2</span>, delay: <span class="text-[#a5d6ff]">1000</span> &#125;),
        <span class="text-[#d2a8ff]">catchError</span>(<span class="text-[#ff7b72]">this</span>.<span class="text-[#d2a8ff]">handleError</span>)
      );
  &#125;

  <span class="text-[#d2a8ff]">create</span>(<span class="text-[#79c0ff]">dto</span>: <span class="text-[#d2a8ff]">CreateProjectDto</span>) &#123;
    <span class="text-[#ff7b72]">return</span> <span class="text-[#ff7b72]">this</span>.<span class="text-[#79c0ff]">http</span>
      .<span class="text-[#d2a8ff]">post</span>&lt;<span class="text-[#d2a8ff]">Project</span>&gt;(<span class="text-[#ff7b72]">this</span>.<span class="text-[#79c0ff]">base</span>, dto);
  &#125;
&#125;</code></pre>
          </div>
        </div>

        <!-- Interceptors -->
        <div class="mb-24">
          <div class="mb-12">
            <h2 class="font-display text-3xl font-bold text-on-surface mb-2">Functional Interceptors</h2>
            <p class="font-body text-sm text-on-surface-variant max-w-2xl">Interceptors are middleware for HTTP. The modern functional API (<span class="font-mono text-[#cc002b] bg-[#cc002b]/5 px-1 rounded">HttpInterceptorFn</span>) requires no class, no injection, no boilerplate.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div class="bg-[#cc002b] text-white rounded-sm p-8 shadow-lg relative overflow-hidden group">
              <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <h3 class="font-display text-lg font-bold mb-2 relative z-10">Auth Interceptor</h3>
              <p class="font-body text-[10px] text-white/80 leading-relaxed relative z-10">Appends the Bearer token to every outgoing request automatically from the token store.</p>
            </div>
            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 hover:-translate-y-1 transition-transform">
              <h3 class="font-display text-lg font-bold text-on-surface mb-2">Error Interceptor</h3>
              <p class="font-body text-[10px] text-on-surface-variant leading-relaxed">Catches 401/403 responses globally and redirects to login or shows a notification without per-service handling.</p>
            </div>
            <div class="bg-white border border-surface-container-lowest shadow-sm rounded-sm p-8 hover:-translate-y-1 transition-transform">
              <h3 class="font-display text-lg font-bold text-on-surface mb-2">Caching Interceptor</h3>
              <p class="font-body text-[10px] text-on-surface-variant leading-relaxed">Returns cached responses for repeated GET requests, reducing server load and improving perceived performance.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="bg-[#11131e] rounded-sm p-8 border border-[#2d3142] shadow-xl">
              <div class="flex gap-2 mb-4 pb-4 border-b border-white/10">
                <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">auth.interceptor.ts</span>
              </div>
              <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export const</span> <span class="text-[#79c0ff]">authInterceptor</span>:
  <span class="text-[#d2a8ff]">HttpInterceptorFn</span> <span class="text-[#e39400]">=</span> (<span class="text-[#79c0ff]">req</span>, <span class="text-[#79c0ff]">next</span>) <span class="text-[#ff7b72]">=&gt;</span> &#123;
    <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">token</span> <span class="text-[#e39400]">=</span> <span class="text-[#d2a8ff]">inject</span>(TokenService).<span class="text-[#d2a8ff]">get</span>();
    <span class="text-[#ff7b72]">const</span> <span class="text-[#79c0ff]">cloned</span> <span class="text-[#e39400]">=</span> req.<span class="text-[#d2a8ff]">clone</span>(&#123;
      setHeaders: &#123;
        Authorization: <span class="text-[#a5d6ff]">\`Bearer \$&#123;token&#125;\`</span>
      &#125;
    &#125;);
    <span class="text-[#ff7b72]">return</span> <span class="text-[#d2a8ff]">next</span>(cloned);
  &#125;;</code></pre>
            </div>
            <div class="bg-[#11131e] rounded-sm p-8 border border-[#2d3142] shadow-xl">
              <div class="flex gap-2 mb-4 pb-4 border-b border-white/10">
                <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                <span class="ml-auto font-mono text-[8px] text-white/30 tracking-widest">app.config.ts</span>
              </div>
              <pre class="font-mono text-[10px] leading-loose"><code class="text-[#c1c6e5]"><span class="text-[#ff7b72]">export const</span> <span class="text-[#79c0ff]">appConfig</span>: <span class="text-[#d2a8ff]">ApplicationConfig</span> <span class="text-[#e39400]">=</span> &#123;
  providers: [
    <span class="text-[#d2a8ff]">provideHttpClient</span>(
      <span class="text-[#d2a8ff]">withInterceptors</span>([
        <span class="text-[#79c0ff]">authInterceptor</span>,
        <span class="text-[#79c0ff]">errorInterceptor</span>,
        <span class="text-[#79c0ff]">cachingInterceptor</span>,
      ])
    )
  ]
&#125;;</code></pre>
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class HttpClientPageComponent {}
