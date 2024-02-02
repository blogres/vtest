const e=JSON.parse('{"key":"v-6d83da1c","path":"/tools/vagrant-vmware.html","title":"Vagrant_VMware虚拟机批量处理","lang":"zh-CN","frontmatter":{"icon":"edit","title":"Vagrant_VMware虚拟机批量处理","category":["开发工具"],"headerDepth":5,"date":"2020-01-01T00:00:00.000Z","tag":["VMware","Vagrant_VMware"],"description":"一、安装 centos7.9 模板 安装：略略略略 步骤 1. 查看当前系统版本 2. 设置sudo权限 3. 国内yum源 4. 升级内核 5. 关闭防火墙firewalld、关闭selinux 6. 配置网卡 7. 禁用该可预测命名规则 8. 重新生成GRUB配置并更新内核参数 1、查看当前系统版本 2、设置sudo权限 1、su root 2、c...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/vtest/tools/vagrant-vmware.html"}],["meta",{"property":"og:title","content":"Vagrant_VMware虚拟机批量处理"}],["meta",{"property":"og:description","content":"一、安装 centos7.9 模板 安装：略略略略 步骤 1. 查看当前系统版本 2. 设置sudo权限 3. 国内yum源 4. 升级内核 5. 关闭防火墙firewalld、关闭selinux 6. 配置网卡 7. 禁用该可预测命名规则 8. 重新生成GRUB配置并更新内核参数 1、查看当前系统版本 2、设置sudo权限 1、su root 2、c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blogres.github.io/vtest/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T07:51:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vagrant_VMware虚拟机批量处理"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"VMware"}],["meta",{"property":"article:tag","content":"Vagrant_VMware"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T07:51:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vagrant_VMware虚拟机批量处理\\",\\"image\\":[\\"https://blogres.github.io/vtest/\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T07:51:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"一、安装 centos7.9 模板","slug":"一、安装-centos7-9-模板","link":"#一、安装-centos7-9-模板","children":[]},{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[]},{"level":2,"title":"1、查看当前系统版本","slug":"_1、查看当前系统版本","link":"#_1、查看当前系统版本","children":[]},{"level":2,"title":"2、设置sudo权限","slug":"_2、设置sudo权限","link":"#_2、设置sudo权限","children":[]},{"level":2,"title":"3、国内yum源（使用华为）","slug":"_3、国内yum源-使用华为","link":"#_3、国内yum源-使用华为","children":[{"level":3,"title":"CentOS-Base.repo","slug":"centos-base-repo","link":"#centos-base-repo","children":[{"level":4,"title":"centos7","slug":"centos7","link":"#centos7","children":[]},{"level":4,"title":"ubuntu","slug":"ubuntu","link":"#ubuntu","children":[]}]},{"level":3,"title":"elrepo.repo","slug":"elrepo-repo","link":"#elrepo-repo","children":[{"level":4,"title":"华为","slug":"华为","link":"#华为","children":[{"level":5,"title":"epel.repo","slug":"epel-repo","link":"#epel-repo","children":[]},{"level":5,"title":"epel.repo.rpmnew 自动生成","slug":"epel-repo-rpmnew-自动生成","link":"#epel-repo-rpmnew-自动生成","children":[]}]},{"level":4,"title":"阿里","slug":"阿里","link":"#阿里","children":[]}]}]},{"level":2,"title":"4、升级内核、并删除当前无用的系统内核版本","slug":"_4、升级内核、并删除当前无用的系统内核版本","link":"#_4、升级内核、并删除当前无用的系统内核版本","children":[{"level":3,"title":"centos 内核升级","slug":"centos-内核升级","link":"#centos-内核升级","children":[]},{"level":3,"title":"并删除当前无用的系统内核版本","slug":"并删除当前无用的系统内核版本","link":"#并删除当前无用的系统内核版本","children":[]}]},{"level":2,"title":"5、关闭防火墙firewalld、关闭selinux、关闭swap、确保不休眠","slug":"_5、关闭防火墙firewalld、关闭selinux、关闭swap、确保不休眠","link":"#_5、关闭防火墙firewalld、关闭selinux、关闭swap、确保不休眠","children":[]},{"level":2,"title":"6、配置网卡","slug":"_6、配置网卡","link":"#_6、配置网卡","children":[]},{"level":2,"title":"7、编写后期需要的脚本：vim /root/first.sh","slug":"_7、编写后期需要的脚本-vim-root-first-sh","link":"#_7、编写后期需要的脚本-vim-root-first-sh","children":[]},{"level":2,"title":"8、禁用 grub 规则","slug":"_8、禁用-grub-规则","link":"#_8、禁用-grub-规则","children":[{"level":3,"title":"在 grub 文件里面的 GRUB_CMDLINE_LINUX 变量添加 net.ifnames=0 biosdevname=0","slug":"在-grub-文件里面的-grub-cmdline-linux-变量添加-net-ifnames-0-biosdevname-0","link":"#在-grub-文件里面的-grub-cmdline-linux-变量添加-net-ifnames-0-biosdevname-0","children":[]}]},{"level":2,"title":"9、安装对window格式的 sh 脚本转码 dos2unix","slug":"_9、安装对window格式的-sh-脚本转码-dos2unix","link":"#_9、安装对window格式的-sh-脚本转码-dos2unix","children":[]},{"level":2,"title":"二、Vagrant","slug":"二、vagrant","link":"#二、vagrant","children":[{"level":3,"title":"1、centos7.9 基本配置","slug":"_1、centos7-9-基本配置","link":"#_1、centos7-9-基本配置","children":[]},{"level":3,"title":"2、Vagrantfile 文件","slug":"_2、vagrantfile-文件","link":"#_2、vagrantfile-文件","children":[{"level":4,"title":"Vagrant + VirtualBox","slug":"vagrant-virtualbox","link":"#vagrant-virtualbox","children":[]},{"level":4,"title":"Vagrantfile 脚本","slug":"vagrantfile-脚本","link":"#vagrantfile-脚本","children":[]},{"level":4,"title":"Vagrant + VMware-desktop","slug":"vagrant-vmware-desktop","link":"#vagrant-vmware-desktop","children":[]}]},{"level":3,"title":"3、","slug":"_3、","link":"#_3、","children":[]},{"level":3,"title":"Vagrant Box 打包","slug":"vagrant-box-打包","link":"#vagrant-box-打包","children":[]},{"level":3,"title":"权限配置公钥","slug":"权限配置公钥","link":"#权限配置公钥","children":[]},{"level":3,"title":"配置网卡","slug":"配置网卡","link":"#配置网卡","children":[]},{"level":3,"title":"打包BOX","slug":"打包box","link":"#打包box","children":[]}]},{"level":2,"title":"二、vmrun","slug":"二、vmrun","link":"#二、vmrun","children":[{"level":3,"title":"格式：vmrun [身份验证标志] 命令 [参数]","slug":"格式-vmrun-身份验证标志-命令-参数","link":"#格式-vmrun-身份验证标志-命令-参数","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"步骤","slug":"步骤-1","link":"#步骤-1","children":[]},{"level":3,"title":"脚本：auto_VM.sh","slug":"脚本-auto-vm-sh","link":"#脚本-auto-vm-sh","children":[]},{"level":3,"title":"脚本：first.sh","slug":"脚本-first-sh","link":"#脚本-first-sh","children":[]},{"level":3,"title":"start 后，通过 嘉宾（set_ip1.bat） 的方式来设置虚拟机（ip、hostname）","slug":"start-后-通过-嘉宾-set-ip1-bat-的方式来设置虚拟机-ip、hostname","link":"#start-后-通过-嘉宾-set-ip1-bat-的方式来设置虚拟机-ip、hostname","children":[]}]},{"level":2,"title":"三、","slug":"三、","link":"#三、","children":[]},{"level":2,"title":"四、","slug":"四、","link":"#四、","children":[]},{"level":2,"title":"五、","slug":"五、","link":"#五、","children":[]},{"level":2,"title":"六、","slug":"六、","link":"#六、","children":[]}],"git":{"createdTime":1706860273000,"updatedTime":1706860273000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":23.45,"words":7034},"filePathRelative":"tools/vagrant-vmware.md","localizedDate":"2020年1月1日","excerpt":"","autoDesc":true}');export{e as data};
