import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as i,b as e,e as n,d as s,a as r}from"./app-JabzxadU.js";const d="/vtest/assets/true-image-20220829220406490-abzjGaFu.png",o={},h=e("h1",{id:"k8s-可视化管理工具-rancher",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#k8s-可视化管理工具-rancher"},[e("span",null,"k8s-可视化管理工具-Rancher")])],-1),p={href:"https://rancher.com/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.rancher.cn/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/rancher/rancher",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"star:19.8K",-1),b={href:"https://gitee.com/k8s_s/rancher",target:"_blank",rel:"noopener noreferrer"},g={href:"https://hub.docker.com/r/rancher/rancher/tags",target:"_blank",rel:"noopener noreferrer"},k=e("figure",null,[e("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),_=e("h2",{id:"安装-2-6-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-2-6-7"},[e("span",null,"安装 2.6.7")])],-1),f=e("p",null,"查看支持的 k8s 版本",-1),x={href:"https://github.com/rancher/rancher/releases/tag/v2.6.7",target:"_blank",rel:"noopener noreferrer"},y=r(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://github.com/rancher/rancher/releases/tag/v2.6.7
Kubernetes Versions
    v1.24.2 (Default)
    v1.23.8
    v1.22.11
    v1.21.14
    v1.20.15
    
https://github.com/rancher/rancher/releases/tag/v2.6.5
Kubernetes Versions
    v1.23.6 (Default)
    v1.22.9
    v1.21.12
    v1.20.15
    v1.19.16
    v1.18.20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker安装" tabindex="-1"><a class="header-anchor" href="#docker安装"><span>docker安装</span></a></h2><p>v2.5.15、v2.5.16、v2.6.5、v2.6.6、v2.6.7</p><p>docker pull rancher/rancher:v2.6.7</p>`,4),R={href:"http://registry.cn-chengdu.aliyuncs.com/k8sjf/rancher:v2.6.7",target:"_blank",rel:"noopener noreferrer"},E={href:"http://registry.cn-chengdu.aliyuncs.com/k8sjf/rancher:v2.6.7",target:"_blank",rel:"noopener noreferrer"},j=r(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--privileged</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped <span class="token parameter variable">-p</span> <span class="token number">8988</span>:80 <span class="token parameter variable">-p</span> <span class="token number">4430</span>:443 registry.cn-chengdu.aliyuncs.com/k8sjf/rancher:v2.6.7

<span class="token comment"># docker-compose方式</span>
<span class="token function">git</span> clone https://gitee.com/zhengqingya/docker-compose.git
<span class="token builtin class-name">cd</span> docker-compose/Liunx
<span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose-rancher.yml <span class="token parameter variable">-p</span> rancher up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker ps</p><p>docker logs cb08ec773b93 2&gt;&amp;1 | grep &quot;Bootstrap Password: &quot;</p><p><code>bd6trjjkplcx6d2lf4fxx78fpltprw5tb9n58vppjp2kkgkndk9qmt</code></p>`,4),C={href:"http://192.168.100.130:8988/",target:"_blank",rel:"noopener noreferrer"},S={href:"http://rancher.k8s.com:8988/",target:"_blank",rel:"noopener noreferrer"},A=e("h2",{id:"推荐安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#推荐安装"},[e("span",null,"推荐安装")])],-1),H={href:"https://docs.rancher.cn/docs/rancher2.5/installation/other-installation-methods/air-gap/install-rancher/_index#%E9%AB%98%E5%8F%AF%E7%94%A8%E5%AE%89%E8%A3%85%EF%BC%88%E6%8E%A8%E8%8D%90%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},w=r(`<h3 id="先决条件" tabindex="-1"><a class="header-anchor" href="#先决条件"><span>先决条件</span></a></h3><ul><li>Kubernetes 集群</li><li>CLI</li><li>Ingress Controller</li></ul><h3 id="helm-chart-安装-rancher" tabindex="-1"><a class="header-anchor" href="#helm-chart-安装-rancher"><span>Helm Chart 安装 Rancher</span></a></h3><p>1、添加 Helm Chart 仓库</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> rancher-latest https://releases.rancher.com/server-charts/latest
helm repo <span class="token function">add</span> rancher-stable https://releases.rancher.com/server-charts/stable
helm repo <span class="token function">add</span> rancher-alpha https://releases.rancher.com/server-charts/alpha

helm repo update
helm repo list
helm repo remove rancher-xx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、为 Rancher 创建 Namespace</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create namespace cattle-system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、选择你的 SSL 选项</p>`,8),q=e("thead",null,[e("tr",null,[e("th",null,"设置"),e("th",null,"Chart 选项"),e("th",null,"描述"),e("th",null,"是否需要 cert-manager")])],-1),L=e("tr",null,[e("td",null,"Rancher 生成的证书（默认）"),e("td",null,[e("code",null,"ingress.tls.source=rancher")]),e("td",null,[n("使用 Rancher 生成的 CA 签发的自签名证书此项为"),e("strong",null,"默认选项")]),e("td",null,"[是]")],-1),z=e("td",null,"Let’s Encrypt",-1),D=e("td",null,[e("code",null,"ingress.tls.source=letsEncrypt")],-1),B={href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"},N=e("td",null,"[是]",-1),V=e("tr",null,[e("td",null,"你已有的证书"),e("td",null,[e("code",null,"ingress.tls.source=secret")]),e("td",null,"使用你的自己的证书（Kubernetes 密文）"),e("td",null,"否")],-1),F=e("blockquote",null,[e("p",null,[n("Rancher 中国技术支持团队建议你使用“你已有的证书” "),e("code",null,"ingress.tls.source=secret"),n(" 这种方式，从而减少对 cert-manager 的运维成本。")])],-1),K=e("p",null,"4、安装 cert-manager",-1),T={href:"https://github.com/jetstack/cert-manager/releases",target:"_blank",rel:"noopener noreferrer"},I=r(`<p>仅在使用 Rancher 生成的证书 <code>ingress.tls.source=rancher</code> 或 Let&#39;s Encrypt 颁发的证书 <code>ingress.tls.source=letsEncrypt</code>时才需要 cert-manager。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
# 如果你手动安装了CRD，而不是在Helm安装命令中添加了\`--set installCRDs=true\`选项，你应该在升级Helm chart之前升级CRD资源。
wget https://github.com/jetstack/cert-manager/releases/download/v1.9.1/cert-manager.crds.yaml
kubectl apply -f cert-manager.crds.yaml

# 添加 Jetstack Helm 仓库

helm repo add jetstack https://charts.jetstack.io

# 更新本地 Helm chart 仓库缓存

helm repo update

# 安装 cert-manager Helm chart

helm install cert-manager jetstack/cert-manager \\
  --namespace cert-manager \\
  --create-namespace \\
  --version v1.9.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完 cert-manager 后，你可以通过检查 cert-manager 命名空间中正在运行的 Pod 来验证它是否已正确部署：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl get pods --namespace cert-manager

NAME                                       READY   STATUS    RESTARTS   AGE
cert-manager-5c6866597-zw7kh               1/1     Running   0          2m
cert-manager-cainjector-577f6d9fd7-tr77l   1/1     Running   0          2m
cert-manager-webhook-787858fcdb-nlzsq      1/1     Running   0          2m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、根据你选择的 SSL 选项，通过 Helm 安装 Rancher</p><p>因为 <code>rancher</code> 是 <code>ingress.tls.source</code> 的默认选项，所以在运行 <code>helm install</code> 命令时我们没有指定 <code>ingress.tls.source</code>。</p><ul><li>将 <code>hostname</code> 设置为解析到你的负载均衡器的 DNS 记录。Rancher HA 安装成功后，你需要通过这个域名来访问 Rancher Server。</li><li>将 <code>replicas</code> 设置为 Rancher 部署所使用的副本数量。默认为 3；如果集群中的节点少于 3 个，你应该相应地减少副本数量。</li><li>要安装一个特定的 Rancher 版本，使用 <code>--version</code> 标志，例如：<code>--version 2.3.6</code>。</li><li>如果你安装的是 alpha 版本，Helm 要求在命令中加入 <code>--devel</code> 选项。</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>helm install rancher rancher-/rancher \\
  --namespace cattle-system \\
  --set hostname=rancher.k8s.com \\
  --version 2.6.7
  --set replicas=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kubectl -n cattle-system rollout status deploy/rancher
Waiting for deployment &quot;rancher&quot; rollout to finish: 0 of 3 updated replicas are available...
deployment &quot;rancher&quot; successfully rolled out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、验证 Rancher Server 是否已成功部署</p><p>7、保存你的选项</p><p>安装完成</p><h2 id="离线安装" tabindex="-1"><a class="header-anchor" href="#离线安装"><span>离线安装</span></a></h2><h3 id="配置-helm-chart-仓库" tabindex="-1"><a class="header-anchor" href="#配置-helm-chart-仓库"><span>配置 Helm Chart 仓库</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> rancher-latest https://releases.rancher.com/server-charts/latest
helm repo <span class="token function">add</span> rancher-stable https://releases.rancher.com/server-charts/stable
helm repo <span class="token function">add</span> rancher-alpha https://releases.rancher.com/server-charts/alpha

helm repo update
helm repo list
helm repo remove rancher-xx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载tgz安装包" tabindex="-1"><a class="header-anchor" href="#下载tgz安装包"><span>下载tgz安装包</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#搜索
helm search repo rancher-latest | grep rancher
#下载指定仓库版本tgz文件
helm pull rancher-latest/rancher
#指定版本下载
helm pull rancher-latest/rancher --version=v2.6.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssl-配置" tabindex="-1"><a class="header-anchor" href="#ssl-配置"><span>SSL 配置</span></a></h3><h3 id="离线环境可用的-helm-chart-选项" tabindex="-1"><a class="header-anchor" href="#离线环境可用的-helm-chart-选项"><span>离线环境可用的 Helm Chart 选项</span></a></h3><h3 id="渲染您的-rancher-helm-模板" tabindex="-1"><a class="header-anchor" href="#渲染您的-rancher-helm-模板"><span>渲染您的 Rancher Helm 模板</span></a></h3>`,20),G={href:"https://charts.jetstack.io",target:"_blank",rel:"noopener noreferrer"},P=r(`<p>helm repo update</p><h3 id="安装-rancher" tabindex="-1"><a class="header-anchor" href="#安装-rancher"><span>安装 Rancher</span></a></h3><h2 id="使用-kubectl-安装-rancher" tabindex="-1"><a class="header-anchor" href="#使用-kubectl-安装-rancher"><span>使用 kubectl 安装 Rancher</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create namespace cattle-system
kubectl <span class="token parameter variable">-n</span> cattle-system apply <span class="token parameter variable">-R</span> <span class="token parameter variable">-f</span> ./rancher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function J(M,U){const a=l("ExternalLinkIcon");return c(),i("div",null,[h,e("p",null,[e("a",p,[n("https://rancher.com/"),s(a)])]),e("p",null,[e("a",u,[n("https://www.rancher.cn/"),s(a)])]),e("p",null,[e("a",v,[n("https://github.com/rancher/rancher"),s(a)]),n(),m]),e("p",null,[e("a",b,[n("https://gitee.com/k8s_s/rancher"),s(a)])]),e("p",null,[e("a",g,[n("https://hub.docker.com/r/rancher/rancher/tags"),s(a)])]),k,_,f,e("p",null,[e("a",x,[n("https://github.com/rancher/rancher/releases/tag/v2.6.7"),s(a)])]),y,e("p",null,[n("docker tag rancher/rancher:v2.6.7 "),e("a",R,[n("registry.cn-chengdu.aliyuncs.com/k8sjf/rancher:v2.6.7"),s(a)])]),e("p",null,[n("docker push "),e("a",E,[n("registry.cn-chengdu.aliyuncs.com/k8sjf/rancher:v2.6.7"),s(a)])]),j,e("p",null,[e("a",C,[n("http://192.168.100.130:8988/"),s(a)])]),e("p",null,[e("a",S,[n("http://rancher.k8s.com:8988/"),s(a)])]),A,e("p",null,[e("a",H,[n("高可用安装（推荐）"),s(a)])]),w,e("table",null,[q,e("tbody",null,[L,e("tr",null,[z,D,e("td",null,[n("使用"),e("a",B,[n("Let's Encrypt"),s(a)]),n("颁发的证书")]),N]),V])]),F,K,e("p",null,[e("a",T,[n("https://github.com/jetstack/cert-manager/releases"),s(a)])]),I,e("p",null,[n("helm repo add jetstack "),e("a",G,[n("https://charts.jetstack.io"),s(a)])]),P])}const O=t(o,[["render",J],["__file","rancher.html.vue"]]);export{O as default};
