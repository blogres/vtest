import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o,c as i,b as s,e as a,d as e,a as t}from"./app-JabzxadU.js";const r="/vtest/assets/true-image-20220829202242469-altd54IT.png",c="/vtest/assets/true-image-20220829203553915-PD-FR5By.png",u="/vtest/assets/true-image-20220829211901869-jxJqNx4r.png",k={},d=s("h1",{id:"k8s-可视化管理工具-kubeoperator",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#k8s-可视化管理工具-kubeoperator"},[s("span",null,"k8s-可视化管理工具-KubeOperator")])],-1),v={href:"https://kubeoperator.io/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/kubeoperator/kubeoperator/",target:"_blank",rel:"noopener noreferrer"},m=s("strong",null,"star:4.4K",-1),g={href:"https://gitee.com/k8s_s/KubeOperator",target:"_blank",rel:"noopener noreferrer"},h=t('<figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>第一步：准备一台主机</p><hr><p>准备一台不小于 8 G内存且可以访问互联网的 64位 Linux 主机。</p><p>第二步：执行一键安装命令</p><hr><p>以 root 用户执行如下命令一键安装 KubeOperator</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://github.com/KubeOperator/KubeOperator/releases/latest/download/quick_start.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://github.com/KubeOperator/KubeOperator/releases/latest/download/quick_start.sh <span class="token parameter variable">-o</span> quick_start.sh
<span class="token function">bash</span> quick_start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>quick_start.sh</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment">#Install Latest Stable KubeOperator Release</span>

<span class="token comment">#  定义离线文件下载地址</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CURRENT_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">KO_VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://api.github.com/repos/KubeOperator/KubeOperator/releases/latest <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;tag_name&quot;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\&quot;//g;s/,//g;s/ //g&#39;</span><span class="token variable">)</span></span>

<span class="token assign-left variable">nexus_download_url</span><span class="token operator">=</span><span class="token string">&quot;https://kubeoperator.fit2cloud.com/nexus/nexus-<span class="token variable">\${KO_VERSION}</span>.tar.gz&quot;</span>
<span class="token assign-left variable">ansible_download_url</span><span class="token operator">=</span><span class="token string">&quot;https://github.com/KubeOperator/KubeOperator/releases/latest/download/ansible-<span class="token variable">\${KO_VERSION}</span>.tar.gz&quot;</span>
<span class="token assign-left variable">kubeoperator_download_url</span><span class="token operator">=</span><span class="token string">&quot;https://github.com/KubeOperator/KubeOperator/releases/latest/download/installer-<span class="token variable">\${KO_VERSION}</span>.tar.gz&quot;</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>
<span class="token comment"># 判断 wget 命令是否安装</span>
<span class="token keyword">if</span> <span class="token function">which</span> <span class="token function">wget</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;开始下载离线包&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;wget 未安装，即将安装 wget&quot;</span>
  yum <span class="token function">install</span> <span class="token function">wget</span> <span class="token parameter variable">-y</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;wget 安装成功&quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;wget 安装失败，请手动安装后再次执行脚本&quot;</span>
  <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token comment"># 判断文件是否存在</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>
<span class="token keyword">else</span>
  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>/*
<span class="token keyword">fi</span>

<span class="token comment"># 下载离线包</span>
<span class="token function">wget</span> --no-check-certificate <span class="token variable">$nexus_download_url</span> <span class="token parameter variable">-P</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>
<span class="token function">wget</span> --no-check-certificate <span class="token variable">$ansible_download_url</span> <span class="token parameter variable">-P</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>
<span class="token function">wget</span> --no-check-certificate <span class="token variable">$kubeoperator_download_url</span> <span class="token parameter variable">-P</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>

<span class="token comment"># 解压离线包</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>/installer-<span class="token variable">\${KO_VERSION}</span>.tar.gz <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">tar</span> zxf <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>/installer-<span class="token variable">\${KO_VERSION}</span>.tar.gz <span class="token parameter variable">-C</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>/installer <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token builtin class-name">cd</span> <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>/installer/
  /bin/bash install.sh
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装失败: <span class="token variable">\${CURRENT_DIR}</span>/kubeoperator-release-<span class="token variable">\${KO_VERSION}</span>/installer 不存在&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> KubeOperator 安装完成 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>

请开放防火墙或安全组的80,8081-8083端口,通过以下方式访问:
 URL:  http://<span class="token variable">$LOCAL_IP</span>:80
 用户名:  admin
 初始密码:  kubeoperator@admin123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ingress-规则设置" tabindex="-1"><a class="header-anchor" href="#ingress-规则设置"><span>Ingress 规则设置</span></a></h2><p>vim ingress-operator.yaml</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>kubeoperator
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token comment"># 重写配置 # </span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/rewrite-target</span><span class="token punctuation">:</span> /$2
    <span class="token comment"># 限流</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/limit-rps</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span>
    <span class="token comment"># 跨域</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/enable-cors</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> <span class="token string">&quot;ko.k8s.com&quot;</span>
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动：<code>kaf ingress-operator.yaml</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kaf ingress-operator.yaml</span>
ingress.networking.k8s.io/ingress-kubeoperator created
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kgingress</span>
NAME                   CLASS   HOSTS                         ADDRESS           PORTS   AGE
ingress-kubeoperator   nginx   ko.k8s.com                    <span class="token number">192.168</span>.100.131   <span class="token number">80</span>      84s
ingress-nginx          nginx   nginx.k8s.com,nginx.k8s.com   <span class="token number">192.168</span>.100.131   <span class="token number">80</span>      2d3h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问" tabindex="-1"><a class="header-anchor" href="#访问"><span>访问</span></a></h2>`,19),_={href:"http://192.168.100.130:80",target:"_blank",rel:"noopener noreferrer"},f={href:"http://ko.k8s.com/",target:"_blank",rel:"noopener noreferrer"},R=t('<figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载"><span>卸载</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>koctl uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function y(O,x){const n=l("ExternalLinkIcon");return o(),i("div",null,[d,s("p",null,[s("a",v,[a("https://kubeoperator.io/"),e(n)])]),s("p",null,[s("a",b,[a("https://github.com/kubeoperator/kubeoperator/"),e(n)]),a(),m]),s("p",null,[s("a",g,[a("https://gitee.com/k8s_s/KubeOperator"),e(n)])]),h,s("p",null,[s("a",_,[a("http://192.168.100.130:80"),e(n)]),a("、"),s("a",f,[a("通过 ingress 访问 ko.k8s.com"),e(n)])]),R])}const q=p(k,[["render",y],["__file","kubeoperator.html.vue"]]);export{q as default};
