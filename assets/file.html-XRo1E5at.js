const e=JSON.parse('{"key":"v-08286d7b","path":"/linux/basis/commands/file.html","title":"file","lang":"zh-CN","frontmatter":{"title":"file","article":false,"timeline":false,"description":"file 查看文件类型 返回命令大全列表 ①、命令名称：file ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：查看文件类型 ⑥、语法： file 【文件】 [root@admin home]# file user1 user1: directory [root@admin home]# file demo.txt demo.txt: empty [root@admin home]# ln -s ./demo.txt ./user1/ [root@admin home]# ls -l user1/ 总用量 0 lrwxrwxrwx 1 root root 10 9月 13 15:23 demo.txt -&gt; ./demo.txt [root@admin home]# file user1/demo.txt user1/demo.txt: broken symbolic link to `./demo.txt\' [root@admin home]# file /bin/ls /bin/ls: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=c8ada1f7095f6b2bb7ddc848e088c2d615c3743e, stripped","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/vtest/linux/basis/commands/file.html"}],["meta",{"property":"og:title","content":"file"}],["meta",{"property":"og:description","content":"file 查看文件类型 返回命令大全列表 ①、命令名称：file ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：查看文件类型 ⑥、语法： file 【文件】 [root@admin home]# file user1 user1: directory [root@admin home]# file demo.txt demo.txt: empty [root@admin home]# ln -s ./demo.txt ./user1/ [root@admin home]# ls -l user1/ 总用量 0 lrwxrwxrwx 1 root root 10 9月 13 15:23 demo.txt -&gt; ./demo.txt [root@admin home]# file user1/demo.txt user1/demo.txt: broken symbolic link to `./demo.txt\' [root@admin home]# file /bin/ls /bin/ls: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=c8ada1f7095f6b2bb7ddc848e088c2d615c3743e, stripped"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T07:51:13.000Z"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:modified_time","content":"2024-02-02T07:51:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"file\\",\\"description\\":\\"file 查看文件类型 返回命令大全列表 ①、命令名称：file ②、英文原意： ③、命令所在路径： ④、执行权限：所有用户 ⑤、功能描述：查看文件类型 ⑥、语法： file 【文件】 [root@admin home]# file user1 user1: directory [root@admin home]# file demo.txt demo.txt: empty [root@admin home]# ln -s ./demo.txt ./user1/ [root@admin home]# ls -l user1/ 总用量 0 lrwxrwxrwx 1 root root 10 9月 13 15:23 demo.txt -&gt; ./demo.txt [root@admin home]# file user1/demo.txt user1/demo.txt: broken symbolic link to `./demo.txt\' [root@admin home]# file /bin/ls /bin/ls: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.32, BuildID[sha1]=c8ada1f7095f6b2bb7ddc848e088c2d615c3743e, stripped\\"}"]]},"headers":[{"level":3,"title":"file 查看文件类型","slug":"file-查看文件类型","link":"#file-查看文件类型","children":[]}],"git":{"createdTime":1706860273000,"updatedTime":1706860273000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":0.47,"words":141},"filePathRelative":"linux/basis/commands/file.md","localizedDate":"2024年2月2日","excerpt":"<h3>file 查看文件类型</h3>\\n<ul>\\n<li><a href=\\"/vtest/linux/basis/command.html#%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86\\" target=\\"blank\\">返回命令大全列表</a></li>\\n</ul>\\n<p>①、命令名称：file</p>\\n<p>②、英文原意：</p>\\n<p>③、命令所在路径：</p>\\n<p>④、执行权限：所有用户</p>\\n<p>⑤、功能描述：查看文件类型</p>\\n<p>⑥、语法：</p>\\n<p>file 【文件】</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token punctuation\\">[</span>root@admin home<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># file user1</span>\\nuser1: directory\\n<span class=\\"token punctuation\\">[</span>root@admin home<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># file demo.txt</span>\\ndemo.txt: empty\\n<span class=\\"token punctuation\\">[</span>root@admin home<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># ln -s ./demo.txt ./user1/</span>\\n<span class=\\"token punctuation\\">[</span>root@admin home<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># ls -l user1/</span>\\n总用量 <span class=\\"token number\\">0</span>\\nlrwxrwxrwx <span class=\\"token number\\">1</span> root root <span class=\\"token number\\">10</span> <span class=\\"token number\\">9</span>月  <span class=\\"token number\\">13</span> <span class=\\"token number\\">15</span>:23 demo.txt -<span class=\\"token operator\\">&gt;</span> ./demo.txt\\n<span class=\\"token punctuation\\">[</span>root@admin home<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># file user1/demo.txt</span>\\nuser1/demo.txt: broken symbolic <span class=\\"token function\\">link</span> to `./demo.txt\'\\n<span class=\\"token punctuation\\">[</span>root@admin home<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># file /bin/ls</span>\\n/bin/ls: ELF <span class=\\"token number\\">64</span>-bit LSB executable, x86-64, version <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">(</span>SYSV<span class=\\"token punctuation\\">)</span>, dynamically linked <span class=\\"token punctuation\\">(</span>uses shared libs<span class=\\"token punctuation\\">)</span>, <span class=\\"token keyword\\">for</span> GNU/Linux <span class=\\"token number\\">2.6</span>.32, BuildID<span class=\\"token punctuation\\">[</span>sha1<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">=</span>c8ada1f7095f6b2bb7ddc848e088c2d615c3743e, stripped\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
