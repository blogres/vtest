import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o,c as t,b as n,d as c,w as p,a as l,e as i}from"./app-JabzxadU.js";const r={},d=n("h3",{id:"rm-删除文件或目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rm-删除文件或目录"},[n("span",null,"rm 删除文件或目录")])],-1),m=l(`<p>①、命令名称：rm</p><p>②、英文原意：remove</p><p>③、命令所在路径：/bin/rm</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：剪切文件、改名</p><p>⑥、语法： rm -rf 【文件或目录】</p><blockquote><p><code>-r</code> 删除目录</p><p><code>-f</code> 强制执行</p></blockquote><p>案例：</p><p>请进入/目录，然后同时删除 /home/a与b</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># ls /home/</span>
a  b  d
<span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># rm -rf /home/{a,b}</span>
<span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># ls /home/</span>
d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function u(h,_){const e=s("RouterLink");return o(),t("div",null,[d,n("ul",null,[n("li",null,[c(e,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:p(()=>[i("返回命令大全列表")]),_:1})])]),m])}const k=a(r,[["render",u],["__file","rm.html.vue"]]);export{k as default};
