import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as a,c as s,b as e,d as c,w as d,a as i,e as r}from"./app-JabzxadU.js";const l={},m=e("h3",{id:"chown-所属组",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#chown-所属组"},[e("span",null,"chown 所属组")])],-1),p=i(`<p>①、命令名称：</p><p>②、英文原意：</p><p>③、命令所在路径：</p><p>④、执行权限：所有用户</p><p>⑤、功能描述：</p><p>⑥、语法：</p><p>chown 【选项】 【所属用户：所属组】 【文件目录】</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#将demo文件所属的用户为 root，组为 kong。
chown -R root:kong demo.txt
#修改 demo 文件夹所属的组为 root
chown -R :root demo.txt
chgrp –R root demo.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function u(h,_){const t=o("RouterLink");return a(),s("div",null,[m,e("ul",null,[e("li",null,[c(t,{to:"/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:d(()=>[r("返回命令大全列表")]),_:1})])]),p])}const b=n(l,[["render",u],["__file","chown.html.vue"]]);export{b as default};
