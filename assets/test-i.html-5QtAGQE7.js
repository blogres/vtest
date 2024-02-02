import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as i,a}from"./app-JabzxadU.js";const d={},l=a(`<h2 id="导入文件测试" tabindex="-1"><a class="header-anchor" href="#导入文件测试"><span>导入文件测试</span></a></h2><p>使用 <code>&lt;!-- @include: filename --&gt;</code> 导入文件。</p><p>如果要部分导入文件，你可以指定导入的行数</p><ul><li><code>&lt;!-- @include: filename{start-end} --&gt;</code></li><li><code>&lt;!-- @include: filename{start-} --&gt;</code></li><li><code>&lt;!-- @include: filename{-end}--&gt;</code></li></ul><p>同时你也可以导入文件区域:</p><p><code>&lt;!-- @include: filename#snippet-data --&gt;</code></p><p>域内容被 <code>#region</code> 和 <code>#endregion</code> 注释包围。</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
<span class="token title important"><span class="token punctuation">##</span> Hello world</span>

<span class="token comment">&lt;!-- #region snippet-data --&gt;</span>

Lorem ipsum dolor sit amet consectetur adipisicing 

<span class="token comment">&lt;!-- #endregion snippet-data --&gt;</span>

Veniam harum illum 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能让你热闹热闹如</p><p>能让你热闹热闹如</p>`,10),s=[l];function t(c,o){return n(),i("div",null,s)}const p=e(d,[["render",t],["__file","test-i.html.vue"]]);export{p as default};
