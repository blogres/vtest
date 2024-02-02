import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as p,c as o,b as n,e as s,d as t,a as e}from"./app-JabzxadU.js";const c={},r=n("h2",{id:"安装与配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装与配置"},[n("span",null,"安装与配置")])],-1),u=n("p",null,"Windows、Linux 配置 Maven3.6、gradle 阿里下载源",-1),d={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mirrors.bfsu.edu.cn/apache/maven/",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"pom依赖查询地址：",-1),g={href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.aliyun.com/mvn/search",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="win10" tabindex="-1"><a class="header-anchor" href="#win10"><span>win10</span></a></h2><h3 id="自定义本地仓库存储地址" tabindex="-1"><a class="header-anchor" href="#自定义本地仓库存储地址"><span>自定义本地仓库存储地址</span></a></h3><p>1、打开配置文件：apache-maven-3.6.3 -&gt; conf -&gt; settings.xml</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!-- localRepository
   | The path to the local repository maven will use to store artifacts.
   | Default: \${user.home}/.m2/repository
  &lt;localRepository&gt;/path/to/local/repo&lt;/localRepository&gt;
  --&gt;</span>
  <span class="token comment">&lt;!-- 自定义本地仓库存储地址 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localRepository</span><span class="token punctuation">&gt;</span></span>D:\\GZRJ\\apache-maven-3.6.3\\repositorys<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localRepository</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置阿里仓库下载源" tabindex="-1"><a class="header-anchor" href="#配置阿里仓库下载源"><span>配置阿里仓库下载源</span></a></h3>`,5),h={href:"https://developer.aliyun.com/mvn/guide",target:"_blank",rel:"noopener noreferrer"},f=e(`<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!-- 设置下载源：aliyun --&gt;</span>
 <span class="token comment">&lt;!-- 设置下载源：Nexus aliyun 老版本 --&gt;</span>
  <span class="token comment">&lt;!--    &lt;mirror&gt;
		&lt;id&gt;nexus-aliyun&lt;/id&gt;
		&lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
		&lt;name&gt;Nexus aliyun&lt;/name&gt;
		&lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;
	&lt;/mirror&gt;--&gt;</span>
 <span class="token comment">&lt;!-- 设置下载源：aliyun 新版本--&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>aliyunmaven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>阿里云公共仓库<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://maven.aliyun.com/repository/public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!-- 设置下载源：华为 --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>huaweicloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://repo.huaweicloud.com/repository/maven/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- ##################jdk###############--&gt;</span>
<span class="token comment">&lt;!-- &lt;profiles&gt;
		&lt;profile&gt;
            &lt;id&gt;jdk-1.8&lt;/id&gt;
            &lt;activation&gt;
                &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
                &lt;jdk&gt;1.8&lt;/jdk&gt;
            &lt;/activation&gt;
            &lt;properties&gt;
                &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.gource&gt;
                &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
                &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt;
            &lt;/properties&gt;
        &lt;/profile&gt;
&lt;/profiles&gt;--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一步：环境配置，在里省略</p><h2 id="linux环境" tabindex="-1"><a class="header-anchor" href="#linux环境"><span>linux环境</span></a></h2><h3 id="环境配置sudo-vim-etc-profile" tabindex="-1"><a class="header-anchor" href="#环境配置sudo-vim-etc-profile"><span>环境配置sudo vim /etc/profile</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#jdk环境</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/data/rj/jdk
<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2_HOME</span><span class="token operator">=</span>/data/rj/maven363
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">\${JAVA_HOME}</span>/jre/lib/rt.jar:<span class="token variable">\${JAVA_HOME}</span>/lib/dt.jar:<span class="token variable">\${JAVA_HOME}</span>/lib/tools.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">\${JAVA_HOME}</span>/bin:<span class="token variable">\${JAVA_HOME}</span>/jre/bin:<span class="token variable">\${M2_HOME}</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@kong:/<span class="token comment"># source /etc/profile</span>
root@kong:/<span class="token comment"># mvn -v</span>
Apache Maven <span class="token number">3.6</span>.3 <span class="token punctuation">(</span>cecedd343002696d0abb50b32b541b8a6ba2883f<span class="token punctuation">)</span>
Maven home: /data/rj/maven363
Java version: <span class="token number">1.8</span>.0_261, vendor: Oracle Corporation, runtime: /data/rj/jdk/jre
Default locale: zh_CN, platform encoding: UTF-8
OS name: <span class="token string">&quot;linux&quot;</span>, version: <span class="token string">&quot;5.4.50-amd64-desktop&quot;</span>, arch: <span class="token string">&quot;amd64&quot;</span>, family: <span class="token string">&quot;unix&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><p>清空文件：mvn clean</p><p>编译项目：mvn compile</p><p>打包jar：mvn package</p><p>打包并部署到本地maven目录里：mvn install</p><p><code>.jar.original</code> 结尾文件</p><blockquote><p>.jar.original 是普通 jar 包，不包含依赖</p><p>.jar 是可执行 jar 包，包含了 pom 中的所有依赖，可以直接用 <code>java -jar</code> 命令执行</p><p>如果是部署，就用 .jar</p><p>如果是给别的项目用，就要给 <code>.jar.original</code> 这个包</p></blockquote>`,14);function _(x,j){const a=i("ExternalLinkIcon");return p(),o("div",null,[r,u,n("ul",null,[n("li",null,[n("a",d,[s("Maven3.X 下载地址"),t(a)])]),n("li",null,[n("a",m,[s("maven nginx导航资源"),t(a)])])]),v,n("ul",null,[n("li",null,[n("a",g,[s("maven 官网 仓库"),t(a)])]),n("li",null,[n("a",k,[s("maven 阿里云 仓库"),t(a)])])]),b,n("p",null,[n("a",h,[s("maven | gradle 阿里云官网配置指南"),t(a)])]),f])}const O=l(c,[["render",_],["__file","maven.html.vue"]]);export{O as default};
