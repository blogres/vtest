import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as l,c as i,b as a,e as r,d as p,a as e}from"./app-JabzxadU.js";const o="/vtest/assets/true-image-20220710150404550-7WxKz44z.png",d="/vtest/assets/true-image-20220710150516799-9apay2aN.png",c="/vtest/assets/true-image-20220710140953152-1Gptcrrm.png",u="/vtest/assets/true-image-20220710154305711-rAs-zLlV.png",v="/vtest/assets/true-640-RKZovxnE.png",m="/vtest/assets/true-image-20220710144146973-6u351aUE.png",g="/vtest/assets/true-image-20220710143607023-G9ZtwQ2l.png",k="/vtest/assets/true-image-20220710143759660-zXgGr4KC.png",b={},y=e('<h1 id="gradle-使用笔记" tabindex="-1"><a class="header-anchor" href="#gradle-使用笔记"><span>gradle 使用笔记</span></a></h1><h2 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型"><span>技术选型</span></a></h2><table><thead><tr><th>名称</th><th>版本</th></tr></thead><tbody><tr><td>JDK</td><td>21.x</td></tr><tr><td>Gradle</td><td>8.5，<a target="_blank" href="https://docs.gradle.org/8.5/userguide/userguide.pdf">PDF文档</a></td></tr><tr><td>Groovy</td><td>1.5.8 - 4.0.0</td></tr><tr><td>Kotlin</td><td>1.6.10 - 1.9.20</td></tr></tbody></table><h2 id="jdk对应版本" tabindex="-1"><a class="header-anchor" href="#jdk对应版本"><span>jdk对应版本</span></a></h2>',4),h={href:"https://docs.gradle.org/current/userguide/compatibility.html#java",target:"_blank",rel:"noopener noreferrer"},f=e('<table><thead><tr><th style="text-align:left;">Java version</th><th style="text-align:left;">Support for compiling/testing/…</th><th style="text-align:left;">Support for running Gradle</th></tr></thead><tbody><tr><td style="text-align:left;">8</td><td style="text-align:left;">N/A</td><td style="text-align:left;">2.0</td></tr><tr><td style="text-align:left;">9</td><td style="text-align:left;">N/A</td><td style="text-align:left;">4.3</td></tr><tr><td style="text-align:left;">10</td><td style="text-align:left;">N/A</td><td style="text-align:left;">4.7</td></tr><tr><td style="text-align:left;">11</td><td style="text-align:left;">N/A</td><td style="text-align:left;">5.0</td></tr><tr><td style="text-align:left;">12</td><td style="text-align:left;">N/A</td><td style="text-align:left;">5.4</td></tr><tr><td style="text-align:left;">13</td><td style="text-align:left;">N/A</td><td style="text-align:left;">6.0</td></tr><tr><td style="text-align:left;">14</td><td style="text-align:left;">N/A</td><td style="text-align:left;">6.3</td></tr><tr><td style="text-align:left;">15</td><td style="text-align:left;">6.7</td><td style="text-align:left;">6.7</td></tr><tr><td style="text-align:left;">16</td><td style="text-align:left;">7.0</td><td style="text-align:left;">7.0</td></tr><tr><td style="text-align:left;">17</td><td style="text-align:left;">7.3</td><td style="text-align:left;">7.3</td></tr><tr><td style="text-align:left;">18</td><td style="text-align:left;">7.5</td><td style="text-align:left;">7.5</td></tr><tr><td style="text-align:left;">19</td><td style="text-align:left;">7.6</td><td style="text-align:left;">7.6</td></tr><tr><td style="text-align:left;">20</td><td style="text-align:left;">8.1</td><td style="text-align:left;">8.3</td></tr><tr><td style="text-align:left;">21</td><td style="text-align:left;">8.4</td><td style="text-align:left;">8.5</td></tr></tbody></table><h2 id="下载与配置" tabindex="-1"><a class="header-anchor" href="#下载与配置"><span>下载与配置</span></a></h2><p><a target="_blank" href="https://gradle.org">首页</a>、<a target="_blank" href="https://gradle.org/releases/">下载页</a></p><p>选择 <code>7.4.2</code> 版本</p><figure><img src="'+o+'" alt="image-20220710150404550" tabindex="0" loading="lazy"><figcaption>image-20220710150404550</figcaption></figure><p>window配置</p><p>新建<code>系统环境变量</code></p><figure><img src="'+d+'" alt="image-20220710150516799" tabindex="0" loading="lazy"><figcaption>image-20220710150516799</figcaption></figure><figure><img src="'+c+`" alt="image-20220710140953152" tabindex="0" loading="lazy"><figcaption>image-20220710140953152</figcaption></figure><p>配置gradle本地仓库：<code>D:\\rj-win\\gradle-7.4.2\\init.d\\init.gradle</code></p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">allprojects</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    repositories</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;file:///D:/rj-win/gradle-7.4.2/repositorys&#39;}</span>
        mavenLocal()
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/public&#39; }</span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/spring&#39; }</span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/spring-plugin&#39; }       </span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/gradle-plugin&#39; }      </span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/google&#39; }</span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/grails-core&#39; }       </span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/apache-snapshots&#39; }</span>
<span class="token key attr-name">        maven</span> <span class="token value attr-value">{ url &#39;http://nexus.bsdn.org/content/groups/public/&#39; }</span>
        mavenCentral()
    }

<span class="token key attr-name">    buildscript</span> <span class="token value attr-value">{ </span>
<span class="token key attr-name">        repositories</span> <span class="token value attr-value">{ </span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/public&#39; }</span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/jcenter&#39; }</span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/spring&#39; }</span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/spring-plugin&#39; }       </span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/gradle-plugin&#39; }      </span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/google&#39; }</span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/grails-core&#39; }       </span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;https://maven.aliyun.com/repository/apache-snapshots&#39; }</span>
<span class="token key attr-name">   maven</span> <span class="token value attr-value">{ url &#39;http://nexus.bsdn.org/content/groups/public/&#39; }</span>
<span class="token key attr-name">            maven</span> <span class="token value attr-value">{ url &#39;https://plugins.gradle.org/m2/&#39; }</span>
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启系统并校验 CMD：gradle -v</p><figure><img src="`+u+'" alt="image-20220710154305711" tabindex="0" loading="lazy"><figcaption>image-20220710154305711</figcaption></figure><h2 id="与maven比较" tabindex="-1"><a class="header-anchor" href="#与maven比较"><span>与maven比较</span></a></h2><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>图中是大型多模块项目Maven和Gradle编译时间的对比，来自gradle官网</code></p><p>Gradle是：</p><ul><li>大型项目更快</li><li>无限制可定制 <code>==</code> 更陡峭的学习曲线</li><li>使用Groovy或Kotlin代替XML</li></ul><p>而Maven是：</p><ul><li>普遍采用</li><li>对于较小项目更简单</li><li>带有XML和尖括号</li></ul><h2 id="groovy-的优点" tabindex="-1"><a class="header-anchor" href="#groovy-的优点"><span>Groovy 的优点</span></a></h2><p>简要介绍一下Groovy。Groovy是一种JVM语言，它可以编译为与Java相同的字节码，并且可以与Java类无缝地互操作。Groovy是Java的向后兼容超集，这意味着Groovy可以透明地与Java库和代码交互。但是，它还增加了许多新功能：可选的键入，函数式编程，运行时灵活性以及许多元编程内容。它还极大地清理了Java中许多冗长的代码格式。Groovy尚未成为主流的开发语言，但是它已经在测试（由于其简化的语法和元编程功能）和构建系统中占据了一席之地。</p><h2 id="创建项目-gradle-java" tabindex="-1"><a class="header-anchor" href="#创建项目-gradle-java"><span>创建项目 Gradle+Java</span></a></h2><figure><img src="'+m+'" alt="image-20220710144146973" tabindex="0" loading="lazy"><figcaption>image-20220710144146973</figcaption></figure><figure><img src="'+g+'" alt="image-20220710143607023" tabindex="0" loading="lazy"><figcaption>image-20220710143607023</figcaption></figure><p>选择 <code>是</code></p><p>下一步，设置 <code>组</code>、<code>工件</code>、<code>版本</code></p><figure><img src="'+k+`" alt="image-20220710143759660" tabindex="0" loading="lazy"><figcaption>image-20220710143759660</figcaption></figure><h3 id="报错" tabindex="-1"><a class="header-anchor" href="#报错"><span>报错</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Unsupported Java. 
Your build is currently configured to use Java <span class="token number">17.0</span>.3 and Gradle <span class="token number">7.1</span>.

Possible solution:
 - Use Java <span class="token number">16</span> as Gradle JVM: Open Gradle settings 
 - Open Gradle wrapper settings, change <span class="token variable"><span class="token variable">\`</span>distributionUrl<span class="token variable">\`</span></span> property to use compatible Gradle version and reload the project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重新修改gradle版本" tabindex="-1"><a class="header-anchor" href="#重新修改gradle版本"><span>重新修改gradle版本</span></a></h3><p><code>gradle -&gt; wrapper -&gt; gradle-wrapper.properties</code></p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">https\\://services.gradle.org/distributions/gradle-7.1-bin.zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改为：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">https\\://services.gradle.org/distributions/gradle-7.4.2-bin.zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建项目-gradle-groovy" tabindex="-1"><a class="header-anchor" href="#创建项目-gradle-groovy"><span>创建项目 Gradle+Groovy</span></a></h2><h3 id="为什么使用-groovy" tabindex="-1"><a class="header-anchor" href="#为什么使用-groovy"><span>为什么使用 Groovy?</span></a></h3><p>答案在于 Gradle 内部的运行环境。 虽然 Gradle 核心目的是作为通用构建工具，但它还是主要面向 Java 项目。 这些项目的团队成员显然熟悉 Java。我们认为一个构建工具应该尽可能地对所有团队成员透明。</p><h2 id="创建项目-gradle-kotlin" tabindex="-1"><a class="header-anchor" href="#创建项目-gradle-kotlin"><span>创建项目 Gradle+Kotlin</span></a></h2><h2 id="核心文件" tabindex="-1"><a class="header-anchor" href="#核心文件"><span>核心文件</span></a></h2><h3 id="build-gradle" tabindex="-1"><a class="header-anchor" href="#build-gradle"><span>build.gradle</span></a></h3><p>类似于maven的pom文件、依赖配置</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>//添加构建插件
plugins <span class="token punctuation">{</span>
    id &#39;java&#39;
<span class="token punctuation">}</span>

group &#39;org.jf&#39;
version &#39;1.0.0&#39;

//项目依赖关系的仓库地址
repositories <span class="token punctuation">{</span>
    maven <span class="token punctuation">{</span> url &#39;file<span class="token punctuation">:</span>///D<span class="token punctuation">:</span>/rj<span class="token punctuation">-</span>win/gradle<span class="token punctuation">-</span>7.4.2/repositorys&#39; <span class="token punctuation">}</span>
    mavenLocal()
    maven <span class="token punctuation">{</span> url(&#39;https<span class="token punctuation">:</span>//maven.aliyun.com/repository/public&#39;) <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url &#39;https<span class="token punctuation">:</span>//maven.aliyun.com/repository/jcenter&#39; <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url &#39;https<span class="token punctuation">:</span>//maven.aliyun.com/repository/spring&#39; <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url &#39;https<span class="token punctuation">:</span>//maven.aliyun.com/repository/spring<span class="token punctuation">-</span>plugin&#39; <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url &#39;https<span class="token punctuation">:</span>//maven.aliyun.com/repository/gradle<span class="token punctuation">-</span>plugin&#39; <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url &#39;https<span class="token punctuation">:</span>//maven.aliyun.com/repository/google&#39; <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url &#39;https<span class="token punctuation">:</span>//maven.aliyun.com/repository/grails<span class="token punctuation">-</span>core&#39; <span class="token punctuation">}</span>
    maven <span class="token punctuation">{</span> url &#39;https<span class="token punctuation">:</span>//maven.aliyun.com/repository/apache<span class="token punctuation">-</span>snapshots&#39; <span class="token punctuation">}</span>
    mavenCentral()
<span class="token punctuation">}</span>

//项目依赖
dependencies <span class="token punctuation">{</span>
    testImplementation &#39;org.junit.jupiter<span class="token punctuation">:</span>junit<span class="token punctuation">-</span>jupiter<span class="token punctuation">-</span>api<span class="token punctuation">:</span>5.7.0&#39;
    testRuntimeOnly &#39;org.junit.jupiter<span class="token punctuation">:</span>junit<span class="token punctuation">-</span>jupiter<span class="token punctuation">-</span>engine<span class="token punctuation">:</span>5.7.0&#39;
<span class="token punctuation">}</span>

//测试依赖
test <span class="token punctuation">{</span>
    useJUnitPlatform()
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="settings-gradle" tabindex="-1"><a class="header-anchor" href="#settings-gradle"><span>settings.gradle</span></a></h3><p>项目的gradle配置，里面包含了创建的各子模块.</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">rootProject.name</span> <span class="token punctuation">=</span> <span class="token value attr-value">&#39;gradle-demo&#39;</span>
<span class="token key attr-name">include</span> <span class="token value attr-value">&#39;gradle-demo-pro1&#39;</span>
<span class="token key attr-name">include</span> <span class="token value attr-value">&#39;gradle-demo-mybatis-plus&#39;</span>
<span class="token key attr-name">include</span> <span class="token value attr-value">&#39;gradle-demo-jdbc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gradle-wrapper-gradle-wrapper-properties" tabindex="-1"><a class="header-anchor" href="#gradle-wrapper-gradle-wrapper-properties"><span>gradle -&gt; wrapper -&gt; gradle-wrapper.properties</span></a></h3><p>gradle服务核心配置</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">distributionBase</span><span class="token punctuation">=</span><span class="token value attr-value">GRADLE_USER_HOME</span>
<span class="token key attr-name">distributionPath</span><span class="token punctuation">=</span><span class="token value attr-value">wrapper/dists</span>
<span class="token key attr-name">distributionUrl</span><span class="token punctuation">=</span><span class="token value attr-value">https\\://services.gradle.org/distributions/gradle-7.4.2-bin.zip</span>
<span class="token key attr-name">zipStoreBase</span><span class="token punctuation">=</span><span class="token value attr-value">GRADLE_USER_HOME</span>
<span class="token key attr-name">zipStorePath</span><span class="token punctuation">=</span><span class="token value attr-value">wrapper/dists</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gradle-properties" tabindex="-1"><a class="header-anchor" href="#gradle-properties"><span>gradle.properties</span></a></h3><p>gradle环境参数配置</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">version</span><span class="token punctuation">=</span><span class="token value attr-value">1.0.0</span>

<span class="token key attr-name">org.gradle.caching</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">org.gradle.parallel</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">org.gradle.jvmargs</span><span class="token punctuation">=</span><span class="token value attr-value">-Xmx2g -Dfile.encoding=UTF-8</span>
<span class="token comment">#org.gradle.jvmargs=-Xmx4g -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8systemProp.http.proxyHost=127.0.0.1systemProp.http.proxyPort=10800systemProp.https.proxyHost=127.0.0.1systemProp.https.proxyPort=10800systemProp.file.encoding=UTF-8org.gradle.warning.mode=all</span>

<span class="token comment">#groovyVersion=xxx</span>
<span class="token key attr-name">kotlinVersion</span><span class="token punctuation">=</span><span class="token value attr-value">xxx</span>
<span class="token key attr-name">tomcatVersion</span><span class="token punctuation">=</span><span class="token value attr-value">10.0.22</span>

<span class="token key attr-name">kotlin.stdlib.default.dependency</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="build-gradle-配置信息格式" tabindex="-1"><a class="header-anchor" href="#build-gradle-配置信息格式"><span>build.gradle 配置信息格式</span></a></h3><p>Groovy</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">implementation</span> <span class="token value attr-value">&#39;org.codehaus.groovy:groovy-all:2.4.15&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Kotlin</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">implementation(&quot;org.codehaus.groovy</span><span class="token punctuation">:</span><span class="token value attr-value">groovy-all:2.4.15&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="依赖管理" tabindex="-1"><a class="header-anchor" href="#依赖管理"><span>依赖管理</span></a></h3><p>gradle依赖的粒度控制相较于Maven也更加精细，maven只有compile、provided、test、runtime四种scope，而gradle有以下几种scope：</p><p>1、implementation，默认的scope。implementation的作用域会让依赖在编译和运行时均包含在内，但是不会暴露在类库使用者的编译时。举例，如果我们的类库包含了gson，那么其他人使用我们的类库时，编译时不会出现gson的依赖。</p><p>2、api，和implementation类似，都是编译和运行时都可见的依赖。但是api允许我们将自己类库的依赖暴露给我们类库的使用者。</p><p>3、compileOnly和runtimeOnly，这两种顾名思义，一种只在编译时可见，一种只在运行时可见。而runtimeOnly和Maven的provided比较接近。</p><p>4、testImplementation，这种依赖在测试编译时和运行时可见，类似于Maven的test作用域。</p><p>5、testCompileOnly和testRuntimeOnly，这两种类似于compileOnly和runtimeOnly，但是作用于测试编译时和运行时。</p><p>通过简短精悍的依赖配置和多种多样的作用与选择，Gradle可以为我们提供比Maven更加优秀的依赖管理功能。</p><h2 id="发布到-maven-仓库" tabindex="-1"><a class="header-anchor" href="#发布到-maven-仓库"><span>发布到 Maven 仓库</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>plugin: &#39;maven&#39;
uploadArchives {
    repositories {
        mavenDeployer {
            repository(url: &quot;file://localhost/tmp/myRepo/&quot;)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,68);function x(_,G){const n=t("ExternalLinkIcon");return l(),i("div",null,[y,a("p",null,[a("a",h,[r("对应版本关系"),p(n)])]),f])}const z=s(b,[["render",x],["__file","gradle.html.vue"]]);export{z as default};
