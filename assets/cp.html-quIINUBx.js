import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o,c,b as n,d as t,w as p,a as l,e as d}from"./app-JabzxadU.js";const i={},r=n("h3",{id:"cp-复制文件或目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cp-复制文件或目录"},[n("span",null,"cp 复制文件或目录")])],-1),m=l(`<p>①、命令名称：cp</p><p>②、英文原意：copy</p><p>③、命令所在路径：/bin/cp</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：复制文件或目录</p><p>⑥、语法： cp -rp 【原文件或目录】【目标目录】</p><blockquote><p><code>-r</code> 复制目录</p><p><code>-p</code> 保留文件属性</p></blockquote><p><strong>案例：</strong></p><p>请进入根目录，将 <code>/home</code> 目录下的所有文件和文件夹清空并删除，在根目录下 <code>copy /etc/sound/events</code> 目录下的所有文件到<code>/home</code>目录下的<code>c</code>目录中</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># rm -rf /home/*</span>
<span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># ls /home/</span>
<span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># cp -rp  /etc/samba/* /home/</span>
<span class="token punctuation">[</span>root@admin /<span class="token punctuation">]</span><span class="token comment"># ls /home/</span>
lmhosts  smb.conf  smb.conf.example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function u(h,_){const e=a("RouterLink");return o(),c("div",null,[r,n("ul",null,[n("li",null,[t(e,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:p(()=>[d("返回命令大全列表")]),_:1})])]),m])}const v=s(i,[["render",u],["__file","cp.html.vue"]]);export{v as default};
