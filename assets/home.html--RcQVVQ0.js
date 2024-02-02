import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,a as n}from"./app-JabzxadU.js";const r={},s=n(`<h2 id="提交规范" tabindex="-1"><a class="header-anchor" href="#提交规范"><span>提交规范</span></a></h2><p><em>注意</em> ：</p><ul><li><p><strong>测试</strong> 时设置提交消息为 <code>test</code> 开头；</p></li><li><p><strong>Build部署文档</strong> 时设置提交消息为 <code>docs</code> 开头，如（<code>docs add linux</code>）等；</p></li><li><p><strong>升级依赖版本</strong> 时设置提交消息为 <code>new</code> 开头。</p></li></ul><h2 id="md文件模板" tabindex="-1"><a class="header-anchor" href="#md文件模板"><span>md文件模板</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>---
title: 
icon: 
category: 
- H
headerDepth: 5
date: 2024-01-06
order: 1
tag:
  - H
---

摘要描述信息

&lt;!-- more --&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="md文件设置frontmatter" tabindex="-1"><a class="header-anchor" href="#md文件设置frontmatter"><span>md文件设置frontmatter</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 顶置，你可以将sticky设置为number来设置它们的顺序。数值大的文章会排列在前面。
sticky: true
# 收藏
star: true
# 是否是文章，或者 plugins.blog.filter 自定义哪些页面是文章。
article: false
# 是否显示在时间线
timeline: false
# 不希望页面被侧边栏收录
index: false
# 控制侧边栏的排序方式（当你设置为正数时，【MIN：1】越小的越靠前；当你设置为负数时，【MAX：-1】越大的越靠后:）
order: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置侧边栏目录" tabindex="-1"><a class="header-anchor" href="#配置侧边栏目录"><span>配置侧边栏目录</span></a></h2><p>自动读取md文件并配置侧边栏目录</p><blockquote><p>children: &quot;structure&quot;,</p><p>sidebar -&gt; <code>&quot;/foo/&quot;: &quot;structure&quot;,</code></p></blockquote><h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型"><span>技术选型</span></a></h2><ul><li>技术版本列表</li></ul><table><thead><tr><th>技术</th><th>地址</th></tr></thead><tbody><tr><td>node</td><td><a href="https://www.npmjs.com/package/node" target="_blank">20.x</a>，<a href="https://npmmirror.com/package/node/versions?tags=all" target="_blank">npmmirror</a></td></tr><tr><td>npm</td><td><a href="https://www.npmjs.com/package/npm" target="_blank">9.x</a>，<a href="https://npmmirror.com/package/npm/versions?tags=all" target="_blank">npmmirror</a></td></tr><tr><td>pnpm</td><td><a href="https://www.npmjs.com/package/pnpm" target="_blank">8.x</a>，<a href="https://npmmirror.com/package/pnpm/versions?tags=all" target="_blank">npmmirror</a></td></tr><tr><td>vue</td><td><a href="https://www.npmjs.com/package/vue" target="_blank">3.x</a>，<a href="https://npmmirror.com/package/vue/versions?tags=all" target="_blank">npmmirror</a></td></tr><tr><td>vuepress-theme-hope</td><td><a href="https://www.npmjs.com/package/vuepress-theme-hope" target="_blank">2.0.0-rc.x</a>，<a href="https://npmmirror.com/package/vuepress-theme-hope/versions?tags=all" target="_blank">npmmirror</a></td></tr><tr><td>vuepress</td><td><a href="https://www.npmjs.com/package/vuepress" target="_blank">2.0.0-rc.x</a>，<a href="https://npmmirror.com/package/vuepress/versions?tags=all" target="_blank">npmmirror</a></td></tr></tbody></table>`,13),i=[s];function d(l,c){return a(),t("div",null,i)}const p=e(r,[["render",d],["__file","home.html.vue"]]);export{p as default};
