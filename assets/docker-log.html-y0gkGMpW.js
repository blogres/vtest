import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as o,b as n,e as s,d as c,a as d}from"./app-JabzxadU.js";const t={},r=d(`<p>docker容器日志占用磁盘空间过大问题，查看docker容器日志大小，清理docker容器日志。</p><h2 id="查询占用磁盘较大的文件-升序" tabindex="-1"><a class="header-anchor" href="#查询占用磁盘较大的文件-升序"><span>查询占用磁盘较大的文件-升序</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-d1</span> <span class="token parameter variable">-h</span> /var/lib/docker/containers <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看docker容器日志大小脚本" tabindex="-1"><a class="header-anchor" href="#查看docker容器日志大小脚本"><span>查看docker容器日志大小脚本</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">####################################</span>
<span class="token comment"># @description 查看docker容器日志大小</span>
<span class="token comment"># @params $? =&gt; 代表上一个命令执行后的退出状态: 0-&gt;成功,1-&gt;失败</span>
<span class="token comment"># @example =&gt; sh docker_log_size_show.sh</span>
<span class="token comment"># @author zhengqingya</span>
<span class="token comment"># @date 2021/9/29 17:30</span>
<span class="token comment">####################################</span>

<span class="token comment"># 在执行过程中若遇到使用了未定义的变量或命令返回值为非零，将直接报错退出</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-eu</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;================== ↓↓↓ 查询docker容器日志大小 ↓↓↓ ================&quot;</span>

<span class="token assign-left variable">logs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> /var/lib/docker/containers/ <span class="token parameter variable">-name</span> <span class="token string">&#39;*-json.log*&#39;</span><span class="token variable">)</span></span>

<span class="token keyword">for</span> <span class="token for-or-select variable">log</span> <span class="token keyword">in</span> <span class="token variable">$logs</span>
<span class="token keyword">do</span>
    <span class="token function">ls</span> <span class="token parameter variable">-lh</span> <span class="token variable">$log</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;================================================================&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="清理docker容器日志脚本" tabindex="-1"><a class="header-anchor" href="#清理docker容器日志脚本"><span>清理docker容器日志脚本</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">####################################</span>
<span class="token comment"># @description 清理docker容器日志</span>
<span class="token comment"># @params $? =&gt; 代表上一个命令执行后的退出状态: 0-&gt;成功,1-&gt;失败</span>
<span class="token comment"># @example =&gt; sh docker_log_clean.sh</span>
<span class="token comment"># @author zhengqingya</span>
<span class="token comment"># @date 2021/9/29 17:30</span>
<span class="token comment">####################################</span>

<span class="token comment"># 在执行过程中若遇到使用了未定义的变量或命令返回值为非零，将直接报错退出</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-eu</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;================== ↓↓↓ 清理docker容器日志 ↓↓↓ ==================&quot;</span>

<span class="token assign-left variable">logs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> /var/lib/docker/containers/ <span class="token parameter variable">-name</span> <span class="token string">&#39;*-json.log*&#39;</span><span class="token variable">)</span></span>

<span class="token keyword">for</span> <span class="token for-or-select variable">log</span> <span class="token keyword">in</span> <span class="token variable">$logs</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;clean log: <span class="token variable">$log</span>&quot;</span>
    <span class="token function">cat</span> /dev/null <span class="token operator">&gt;</span> <span class="token variable">$log</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;==================================================================&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制容器日志大小" tabindex="-1"><a class="header-anchor" href="#控制容器日志大小"><span>控制容器日志大小</span></a></h2><h3 id="法一-运行时控制" tabindex="-1"><a class="header-anchor" href="#法一-运行时控制"><span>法一：运行时控制</span></a></h3><ul><li>docker</li></ul><p><em>max-size</em>：容器日志最大15M</p><p><em>max-file</em>：最大日志数20个（ ex: <code>*-json.log, *-json.log.1, *-json.log.2</code> ）</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> --log-opt max-size<span class="token operator">=</span>15m --log-opt max-file<span class="token operator">=</span><span class="token number">20</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>日志目录 <code>/var/lib/docker/containers</code></p><p>观察日志的增长，你会发现当<code>xxx.log</code>日志文件到达设置的最大日志量后，会变成<code>xxx.log.1，xxx.log.2</code>文件...</p><ul><li>docker-compose</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>version: &#39;3&#39;

services:
  test:
    image: xxx
    # 日志
    logging:
      driver: &quot;json-file&quot;   # 默认的文件日志驱动
      options:
        max-size: &quot;15m&quot;    # 单个日志文件大小为100m
        max-file: &quot;20&quot;       # 最多3个日志文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="法二-全局配置" tabindex="-1"><a class="header-anchor" href="#法二-全局配置"><span>法二：全局配置</span></a></h3><p><em>温馨小提示：新容器生效</em></p><p><strong>创建或修改<code>daemon.json</code>文件</strong></p><p><code>vim /etc/docker/daemon.json</code></p><p><strong>新增如下配置</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
    &quot;log-driver&quot;: &quot;json-file&quot;,
    &quot;log-opts&quot;: {
        &quot;max-size&quot;:&quot;15m&quot;, 
        &quot;max-file&quot;:&quot;20&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重启docker服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,25),p={href:"https://gitee.com/zhengqingya/docker-compose/tree/master/Docker/docker%E5%AE%B9%E5%99%A8%E6%97%A5%E5%BF%97%E5%8D%A0%E7%94%A8%E7%A3%81%E7%9B%98%E7%A9%BA%E9%97%B4%E8%BF%87%E5%A4%A7%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"};function v(m,u){const a=i("ExternalLinkIcon");return l(),o("div",null,[r,n("p",null,[s("以上内容来自："),n("a",p,[s("zhengqingya/docker-compose"),c(a)]),s(" 改编。")])])}const g=e(t,[["render",v],["__file","docker-log.html.vue"]]);export{g as default};
