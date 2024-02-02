import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as t,c as l,b as s,e as a,d as e,a as o}from"./app-JabzxadU.js";const c="/vtest/assets/true-image-20220909192114370-B4i8e_cu.png",i={},k=s("h1",{id:"yum-源配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#yum-源配置"},[s("span",null,"yum 源配置")])],-1),u={href:"https://blog.csdn.net/qq_42476834/article/details/121433712",target:"_blank",rel:"noopener noreferrer"},d=o('<p><strong>查看系统的版本：</strong><code>cat /etc/redhat-release</code></p><h2 id="一、用centos镜像搭建本地yum源" tabindex="-1"><a class="header-anchor" href="#一、用centos镜像搭建本地yum源"><span>一、用Centos镜像搭建本地yum源</span></a></h2><h3 id="_1-安装centos后默认的yum源-如下" tabindex="-1"><a class="header-anchor" href="#_1-安装centos后默认的yum源-如下"><span>1.安装Centos后默认的yum源 如下</span></a></h3><blockquote><p>ll /etc/yum.repos.d/</p></blockquote><h3 id="_2-把默认yum源备份-可选" tabindex="-1"><a class="header-anchor" href="#_2-把默认yum源备份-可选"><span>2.把默认yum源备份(可选)</span></a></h3><blockquote><p>cp CentOS-Base.repo CentOS-Base-cp.repo</p></blockquote><h3 id="_3-在虚拟机上挂载centos镜像文件" tabindex="-1"><a class="header-anchor" href="#_3-在虚拟机上挂载centos镜像文件"><span>3.在虚拟机上挂载CentOS镜像文件</span></a></h3><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>(1) mount -t iso9660 /dev/sr0 /opt/centos</p><p>(2) mount /dev/cdrom /mnt/cdrom</p></blockquote><p><strong>自定义配置文件名：</strong><code>vim /etc/yum.repos.d/local.repo</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>local<span class="token punctuation">]</span>           <span class="token comment">#标签</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>local        <span class="token comment">#设置yum源名称</span>
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>file:///opt/centos  <span class="token comment">#挂载源</span>
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>         <span class="token comment">#可用性</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>        <span class="token comment">#校验</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-清除缓存" tabindex="-1"><a class="header-anchor" href="#_5-清除缓存"><span>5.清除缓存</span></a></h3><blockquote><p>yum clean all //全部消除缓存</p><p>yum makecache //把yum源缓存到本地，加快软件的搜索好安装速度</p><p>yum -y update //更新yum库存</p><p>yum repolist //列出个包</p></blockquote><h2 id="二、把默认的centos-yum源修改成国内的aliyun-yum源" tabindex="-1"><a class="header-anchor" href="#二、把默认的centos-yum源修改成国内的aliyun-yum源"><span>二、把默认的CentOS yum源修改成国内的aliyun-yum源</span></a></h2><h3 id="_1-进入yum目录" tabindex="-1"><a class="header-anchor" href="#_1-进入yum目录"><span>1.进入yum目录</span></a></h3><blockquote><p>cd /etc/yum.repos.d/</p></blockquote><h3 id="_2-把默认yum源备份-可选项" tabindex="-1"><a class="header-anchor" href="#_2-把默认yum源备份-可选项"><span>2.把默认yum源备份(可选项)</span></a></h3><blockquote><p>cp CentOS-Base.repo CentOS-Base.repo-cp</p></blockquote><h3 id="_3-下载ailiyun的yum源配置文件到-etc-yum-repos-d" tabindex="-1"><a class="header-anchor" href="#_3-下载ailiyun的yum源配置文件到-etc-yum-repos-d"><span>3.下载ailiyun的yum源配置文件到/etc/yum.repos.d/</span></a></h3>`,19),m={href:"https://developer.aliyun.com/mirror/centos?spm=a2c6h.13651102.0.0.613b1b11Q4GiOU",target:"_blank",rel:"noopener noreferrer"},h=s("p",null,[s("strong",null,"CentOS 6：")],-1),b={href:"https://mirrors.aliyun.com/repo/Centos-6.repo",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,"或者",-1),y={href:"https://mirrors.aliyun.com/repo/Centos-6.repo",target:"_blank",rel:"noopener noreferrer"},_=s("p",null,[s("strong",null,"CentOS 7：")],-1),g={href:"https://mirrors.aliyun.com/repo/Centos-7.repo",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,"或者",-1),C={href:"https://mirrors.aliyun.com/repo/Centos-7.repo",target:"_blank",rel:"noopener noreferrer"},x=s("p",null,[s("strong",null,"CentOS 8：")],-1),O={href:"https://mirrors.aliyun.com/repo/Centos-8.repo",target:"_blank",rel:"noopener noreferrer"},S=s("p",null,"或者",-1),q={href:"https://mirrors.aliyun.com/repo/Centos-8.repo",target:"_blank",rel:"noopener noreferrer"},B=o('<h3 id="_4-清除缓存" tabindex="-1"><a class="header-anchor" href="#_4-清除缓存"><span>4.清除缓存</span></a></h3><blockquote><p>yum clean all //全部消除缓存</p><p>yum makecache //把yum源缓存到本地，加快软件的搜索好安装速度</p><p>yum -y update //更新yum库存</p><p>yum repolist //列出个包</p></blockquote><h2 id="三、把默认的centos-yum源修改成国内的163源" tabindex="-1"><a class="header-anchor" href="#三、把默认的centos-yum源修改成国内的163源"><span>三、把默认的CentOS yum源修改成国内的163源</span></a></h2><h3 id="_1-安装centos后默认的yum源如下" tabindex="-1"><a class="header-anchor" href="#_1-安装centos后默认的yum源如下"><span>1.安装Centos后默认的yum源如下</span></a></h3><blockquote><p>ll /etc/yum.repos.d/</p></blockquote><h3 id="_2-把默认yum源备份-可选-1" tabindex="-1"><a class="header-anchor" href="#_2-把默认yum源备份-可选-1"><span>2.把默认yum源备份(可选)</span></a></h3><blockquote><p>cp CentOS-Base.repo CentOS-Base.repo-cp</p></blockquote><h3 id="_3-下载163-yum源repo文件" tabindex="-1"><a class="header-anchor" href="#_3-下载163-yum源repo文件"><span>3.下载163 yum源repo文件</span></a></h3><p><strong>CentOS 5：</strong></p>',9),w={href:"http://mirrors.163.com/.help/CentOS5-Base-163.repo",target:"_blank",rel:"noopener noreferrer"},M=s("p",null,[s("strong",null,"CentOS 6：")],-1),V={href:"http://mirrors.163.com/.help/CentOS6-Base-163.repo",target:"_blank",rel:"noopener noreferrer"},E=s("p",null,[s("strong",null,"CentOS 7：")],-1),I={href:"http://mirrors.163.com/.help/CentOS7-Base-163.repo",target:"_blank",rel:"noopener noreferrer"},N=s("p",null,[s("strong",null,"CentOS 8：")],-1),R={href:"http://mirrors.163.com/.help/CentOS8-Base-163.repo",target:"_blank",rel:"noopener noreferrer"},L=s("p",null,[s("em",null,"运行")],-1),z={href:"http://mirrors.163.com/.help/CentOS8-Base-163.repo",target:"_blank",rel:"noopener noreferrer"},P=o(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Saving to: ‘/etc/yum.repos.d/CentOS8-Base-163.repo’100%<span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token number">1,572</span>       --.-K/s   <span class="token keyword">in</span> 0s      <span class="token number">2017</span>-06-20 06:29:47 <span class="token punctuation">(</span><span class="token number">293</span> MB/s<span class="token punctuation">)</span> - ‘/etc/yum.repos.d/CentOS8-Base-163.repo’ saved <span class="token punctuation">[</span><span class="token number">1572</span>/1572<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-清除缓存-1" tabindex="-1"><a class="header-anchor" href="#_4-清除缓存-1"><span>4.清除缓存</span></a></h3><blockquote><p>yum clean all //全部消除缓存</p><p>yum makecache //把yum源缓存到本地，加快软件的搜索好安装速度</p><p>yum -y update //更新yum库存</p><p>yum repolist //列出个包</p></blockquote><hr><p><mark>下面可忽略</mark>：</p><h2 id="四、修改yum源的优先级" tabindex="-1"><a class="header-anchor" href="#四、修改yum源的优先级"><span>四、修改yum源的优先级</span></a></h2><h3 id="_1-查看系统是否安装了优先级的插件" tabindex="-1"><a class="header-anchor" href="#_1-查看系统是否安装了优先级的插件"><span>1.查看系统是否安装了优先级的插件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span> <span class="token function">grep</span> yum-plugin-
yum-plugin-fastestmirror-1.1.31-34.el7.noarch        
//这里看到没有安装yum-plugin-priorities.noarch这个插件

yum search yum-plugin-priorities  
      
//用search查看是否有此插件可用
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
* base: mirrors.aliyun.com
* extras: mirrors.aliyun.com
* updates: mirrors.aliyun.com
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> N/S matched: yum-plugin-priorities <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
yum-plugin-priorities.noarch <span class="token builtin class-name">:</span> plugin to give priorities to packages from different repos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-安装yum-plugin-priorities-noarch插件" tabindex="-1"><a class="header-anchor" href="#_2-安装yum-plugin-priorities-noarch插件"><span>2.安装yum-plugin-priorities.noarch插件</span></a></h3><blockquote><p>yum -y install yum-plugin-priorities.noarch</p></blockquote><h3 id="_3-查看插件是否启用" tabindex="-1"><a class="header-anchor" href="#_3-查看插件是否启用"><span>3.查看插件是否启用</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/yum/pluginconf.d/priorities.conf
<span class="token punctuation">[</span>main<span class="token punctuation">]</span>
enabled <span class="token operator">=</span> <span class="token number">1</span>   <span class="token comment">#1为启用；0为禁用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-修改本地yum源优先使用" tabindex="-1"><a class="header-anchor" href="#_4-修改本地yum源优先使用"><span>4.修改本地yum源优先使用</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ll /etc/yum.repos.d/
total <span class="token number">8</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">2573</span> May <span class="token number">15</span>  <span class="token number">2015</span> CentOS-Base.repo
-rw-r--r--. <span class="token number">1</span> root root   <span class="token number">67</span> Jun <span class="token number">20</span> 06:04 local.repo//有两个repo文件

<span class="token function">vi</span> /etc/yum.repos.d/local.repo
<span class="token punctuation">[</span>local<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>local
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>file:///opt/centos
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">priority</span><span class="token operator">=</span><span class="token number">1</span>//在原基础上加入priority<span class="token operator">=</span><span class="token number">1</span> ；数字越小优先级越高//可以继续修改其他源的priority值，经测试仅配置本地源的优先级为priority<span class="token operator">=</span><span class="token number">1</span>就会优先使用本地源了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-测试" tabindex="-1"><a class="header-anchor" href="#_5-测试"><span>5.测试</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>配置优先级前：<span class="token punctuation">(</span>使用阿里云yum源<span class="token punctuation">)</span>
<span class="token number">1</span><span class="token comment"># yum -y install vimDependencies Resolved</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>Package                            Arch                         Version                                     Repository                     Size
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
Installing:
vim-enhanced                       x86_64                       <span class="token number">2</span>:7.4.160-1.el7_3.1                         updates                       <span class="token number">1.0</span> M
Updating <span class="token keyword">for</span> dependencies:
vim-common                         x86_64                       <span class="token number">2</span>:7.4.160-1.el7_3.1                         updates                       <span class="token number">5.9</span> M
省略···
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>配置优先级后：<span class="token punctuation">(</span>使用本地yum源<span class="token punctuation">)</span>
<span class="token number">1</span><span class="token comment"># yum -y install vimDependencies Resolved</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>Package                                     Arch                        Version                                Repository                  Size
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
Installing:
vim-enhanced                                x86_64                      <span class="token number">2</span>:7.4.160-1.el7                        <span class="token builtin class-name">local</span>                      <span class="token number">1.0</span> M
Installing <span class="token keyword">for</span> dependencies:
gpm-libs                                    x86_64                      <span class="token number">1.20</span>.7-5.el7                           <span class="token builtin class-name">local</span>                       <span class="token number">32</span> k
perl                                        x86_64                      <span class="token number">4</span>:5.16.3-286.el7                       <span class="token builtin class-name">local</span>                      <span class="token number">8.0</span> M
perl-Carp                                   noarch                      <span class="token number">1.26</span>-244.el7                           <span class="token builtin class-name">local</span>                       <span class="token number">19</span> k
perl-Encode                                 x86_64                      <span class="token number">2.51</span>-7.el7                             <span class="token builtin class-name">local</span>                      <span class="token number">1.5</span> M
perl-Exporter                               noarch                      <span class="token number">5.68</span>-3.el7                             <span class="token builtin class-name">local</span>                       <span class="token number">28</span> k
perl-File-Path                              noarch                      <span class="token number">2.09</span>-2.el7                             <span class="token builtin class-name">local</span>                       <span class="token number">26</span> k
perl-File-Temp                              noarch                      <span class="token number">0.23</span>.01-3.el7                          <span class="token builtin class-name">local</span>                       <span class="token number">56</span> k
省略···
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function A(D,F){const n=r("ExternalLinkIcon");return t(),l("div",null,[k,s("p",null,[s("a",u,[a("https://blog.csdn.net/qq_42476834/article/details/121433712"),e(n)])]),d,s("p",null,[s("a",m,[a("centos-yum-阿里官网配置"),e(n)])]),h,s("blockquote",null,[s("p",null,[a("wget -O /etc/yum.repos.d/CentOS-Base.repo "),s("a",b,[a("https://mirrors.aliyun.com/repo/Centos-6.repo"),e(n)])]),v,s("p",null,[a("curl -o /etc/yum.repos.d/CentOS-Base.repo "),s("a",y,[a("https://mirrors.aliyun.com/repo/Centos-6.repo"),e(n)])])]),_,s("blockquote",null,[s("p",null,[a("wget -O /etc/yum.repos.d/CentOS-Base.repo "),s("a",g,[a("https://mirrors.aliyun.com/repo/Centos-7.repo"),e(n)])]),f,s("p",null,[a("curl -o /etc/yum.repos.d/CentOS-Base.repo "),s("a",C,[a("https://mirrors.aliyun.com/repo/Centos-7.repo"),e(n)])])]),x,s("blockquote",null,[s("p",null,[a("wget -O /etc/yum.repos.d/CentOS-Base.repo "),s("a",O,[a("https://mirrors.aliyun.com/repo/Centos-8.repo"),e(n)])]),S,s("p",null,[a("curl -o /etc/yum.repos.d/CentOS-Base.repo "),s("a",q,[a("https://mirrors.aliyun.com/repo/Centos-8.repo"),e(n)])])]),B,s("blockquote",null,[s("p",null,[a("wget "),s("a",w,[a("http://mirrors.163.com/.help/CentOS5-Base-163.repo"),e(n)])])]),M,s("blockquote",null,[s("p",null,[a("wget "),s("a",V,[a("http://mirrors.163.com/.help/CentOS6-Base-163.repo"),e(n)])])]),E,s("blockquote",null,[s("p",null,[a("wget "),s("a",I,[a("http://mirrors.163.com/.help/CentOS7-Base-163.repo"),e(n)])])]),N,s("blockquote",null,[s("p",null,[a("wget "),s("a",R,[a("http://mirrors.163.com/.help/CentOS8-Base-163.repo"),e(n)])])]),L,s("blockquote",null,[s("p",null,[a("wget -O /etc/yum.repos.d/CentOS8-Base-163.repo "),s("a",z,[a("http://mirrors.163.com/.help/CentOS8-Base-163.repo"),e(n)])])]),P])}const G=p(i,[["render",A],["__file","yum-repo.html.vue"]]);export{G as default};
