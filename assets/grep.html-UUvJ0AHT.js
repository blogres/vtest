import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as i,c as l,b as n,d as t,w as o,a as p,e as c}from"./app-JabzxadU.js";const r={},d=n("h3",{id:"grep-过滤查找及-管道符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grep-过滤查找及-管道符"},[n("span",null,"grep 过滤查找及“|”管道符")])],-1),u=p(`<p>①、命令名称：grep</p><p>②、英文原意：</p><p>③、命令所在路径：/usr/bin/grep</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：搜索数据；管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理</p><p>⑥、语法：</p><p>grep [选项]... PATTERN [FILE]...</p><ul><li>-v 反向搜索</li><li>-n 显示匹配行号</li><li>-c 知道有多少行含有匹配</li><li>-e 指定多个匹配模式</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep three file1</span>
three
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep t file1</span>
two
three
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep 1 ds.log</span>
<span class="token number">1</span>
<span class="token number">10</span>
<span class="token number">100</span>
<span class="token number">145</span>
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep -v t file1</span>
one
four
five
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep -n t file1</span>
<span class="token number">2</span>:two
<span class="token number">3</span>:three
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep -e t -e f file1</span>
two
three
four
five
<span class="token punctuation">[</span>root@admin home<span class="token punctuation">]</span><span class="token comment"># grep [tf] file1</span>
two
three
four
five
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(v,b){const s=a("RouterLink");return i(),l("div",null,[d,n("ul",null,[n("li",null,[t(s,{to:"/linux/basis/command.html#"},{default:o(()=>[c("返回命令大全列表")]),_:1})])]),u])}const f=e(r,[["render",m],["__file","grep.html.vue"]]);export{f as default};
