const e=JSON.parse('{"key":"v-6d43fb5d","path":"/k8s/basis.html","title":"k8s 基础篇","lang":"zh-CN","frontmatter":{"icon":"/icons/k8s/k8s_16x16.png","title":"k8s 基础篇","category":["kubernetes"],"headerDepth":5,"date":"2020-04-20T00:00:00.000Z","tag":["Linux","k8s"],"description":"中文社区: 官方文档: 社区文档: 历史版本 Release History (https://kubernetes.io/releases/) 客户端下载 github (https://github.com/kubernetes/kubernetes/tree/master/CHANGELOG) 配置SSH、配置k8s环境、安装docker、安装k...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/vtest/k8s/basis.html"}],["meta",{"property":"og:title","content":"k8s 基础篇"}],["meta",{"property":"og:description","content":"中文社区: 官方文档: 社区文档: 历史版本 Release History (https://kubernetes.io/releases/) 客户端下载 github (https://github.com/kubernetes/kubernetes/tree/master/CHANGELOG) 配置SSH、配置k8s环境、安装docker、安装k..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blogres.github.io/vtest/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T07:51:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"k8s 基础篇"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2020-04-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T07:51:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"k8s 基础篇\\",\\"image\\":[\\"https://blogres.github.io/vtest/\\"],\\"datePublished\\":\\"2020-04-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T07:51:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"1）、概念","slug":"_1-、概念","link":"#_1-、概念","children":[{"level":3,"title":"为什么需要 Kubernetes，它能做什么?","slug":"为什么需要-kubernetes-它能做什么","link":"#为什么需要-kubernetes-它能做什么","children":[]},{"level":3,"title":"简介：调度、自动修复、水平伸缩","slug":"简介-调度、自动修复、水平伸缩","link":"#简介-调度、自动修复、水平伸缩","children":[]},{"level":3,"title":"组件架构","slug":"组件架构","link":"#组件架构","children":[{"level":4,"title":"kube-apiserver","slug":"kube-apiserver","link":"#kube-apiserver","children":[]},{"level":4,"title":"etcd","slug":"etcd","link":"#etcd","children":[]},{"level":4,"title":"kube-scheduler","slug":"kube-scheduler","link":"#kube-scheduler","children":[]},{"level":4,"title":"kube-controller-manager","slug":"kube-controller-manager","link":"#kube-controller-manager","children":[]},{"level":4,"title":"cloud-controller-manager","slug":"cloud-controller-manager","link":"#cloud-controller-manager","children":[]}]},{"level":3,"title":"Node 组件","slug":"node-组件","link":"#node-组件","children":[{"level":4,"title":"kubelet","slug":"kubelet","link":"#kubelet","children":[]},{"level":4,"title":"kube-proxy","slug":"kube-proxy","link":"#kube-proxy","children":[]}]}]},{"level":2,"title":"3）、集群安装+环境配置搭建","slug":"_3-、集群安装-环境配置搭建","link":"#_3-、集群安装-环境配置搭建","children":[{"level":3,"title":"kubectl 快捷键（alias）","slug":"kubectl-快捷键-alias","link":"#kubectl-快捷键-alias","children":[{"level":4,"title":"k8s","slug":"k8s","link":"#k8s","children":[]}]},{"level":3,"title":"部署步骤","slug":"部署步骤","link":"#部署步骤","children":[]},{"level":3,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[{"level":4,"title":"VMware","slug":"vmware","link":"#vmware","children":[]},{"level":4,"title":"创建虚拟机","slug":"创建虚拟机","link":"#创建虚拟机","children":[]},{"level":4,"title":"开启 ssh 远程登录","slug":"开启-ssh-远程登录","link":"#开启-ssh-远程登录","children":[]},{"level":4,"title":"开启IPVS支持","slug":"开启ipvs支持","link":"#开启ipvs支持","children":[]},{"level":4,"title":"将桥接的IPv4流量传递到iptables的链","slug":"将桥接的ipv4流量传递到iptables的链","link":"#将桥接的ipv4流量传递到iptables的链","children":[]},{"level":4,"title":"时间同步","slug":"时间同步","link":"#时间同步","children":[]}]},{"level":3,"title":"A、在所有节点上安装 Docker和 kubeadm、kubelet、kubectl","slug":"a、在所有节点上安装-docker和-kubeadm、kubelet、kubectl","link":"#a、在所有节点上安装-docker和-kubeadm、kubelet、kubectl","children":[{"level":4,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":4,"title":"1、安装docker","slug":"_1、安装docker","link":"#_1、安装docker","children":[]},{"level":4,"title":"2、添加 阿里kubernetes 仓库源（推荐）","slug":"_2、添加-阿里kubernetes-仓库源-推荐","link":"#_2、添加-阿里kubernetes-仓库源-推荐","children":[]},{"level":4,"title":"3、添加 华为kubernetes 仓库源（仓库维护太慢了）","slug":"_3、添加-华为kubernetes-仓库源-仓库维护太慢了","link":"#_3、添加-华为kubernetes-仓库源-仓库维护太慢了","children":[]},{"level":4,"title":"4、更新索引文件并安装 kubernetes","slug":"_4、更新索引文件并安装-kubernetes","link":"#_4、更新索引文件并安装-kubernetes","children":[]},{"level":4,"title":"5、master 安装","slug":"_5、master-安装","link":"#_5、master-安装","children":[]},{"level":4,"title":"5、node 节点安装","slug":"_5、node-节点安装","link":"#_5、node-节点安装","children":[]},{"level":4,"title":"6、创建k8s软连接","slug":"_6、创建k8s软连接","link":"#_6、创建k8s软连接","children":[]},{"level":4,"title":"启动 k8s","slug":"启动-k8s","link":"#启动-k8s","children":[]}]},{"level":3,"title":"B、Master 部署 Kubernetes","slug":"b、master-部署-kubernetes","link":"#b、master-部署-kubernetes","children":[{"level":4,"title":"设置k8s镜像仓库源","slug":"设置k8s镜像仓库源","link":"#设置k8s镜像仓库源","children":[]},{"level":4,"title":"master -> kubeadm 初始化","slug":"master-kubeadm-初始化","link":"#master-kubeadm-初始化","children":[]},{"level":4,"title":"得到 kubeadm join","slug":"得到-kubeadm-join","link":"#得到-kubeadm-join","children":[]},{"level":4,"title":"kubectl 命令的自动补全功能（所有的节点）","slug":"kubectl-命令的自动补全功能-所有的节点","link":"#kubectl-命令的自动补全功能-所有的节点","children":[]},{"level":4,"title":"重启后出现：The connection to the server localhost:8080 was refused - did you specify the right host or port?","slug":"重启后出现-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port","link":"#重启后出现-the-connection-to-the-server-localhost-8080-was-refused-did-you-specify-the-right-host-or-port","children":[]},{"level":4,"title":"将主节点（master）中的“/etc/kubernetes/admin.conf”文件拷贝到从节点（node）相同目录下","slug":"将主节点-master-中的-etc-kubernetes-admin-conf-文件拷贝到从节点-node-相同目录下","link":"#将主节点-master-中的-etc-kubernetes-admin-conf-文件拷贝到从节点-node-相同目录下","children":[]},{"level":4,"title":"解决端口占用：kubeadm reset","slug":"解决端口占用-kubeadm-reset","link":"#解决端口占用-kubeadm-reset","children":[]}]},{"level":3,"title":"C、将从节点（node）加入 Kubernetes （Master）集群中","slug":"c、将从节点-node-加入-kubernetes-master-集群中","link":"#c、将从节点-node-加入-kubernetes-master-集群中","children":[{"level":4,"title":"kubeadm-config（略过 嘿嘿嘿）","slug":"kubeadm-config-略过-嘿嘿嘿","link":"#kubeadm-config-略过-嘿嘿嘿","children":[]},{"level":4,"title":"token过期，重新设置","slug":"token过期-重新设置","link":"#token过期-重新设置","children":[]}]},{"level":3,"title":"D、master 部署容器网络插件 Flannel","slug":"d、master-部署容器网络插件-flannel","link":"#d、master-部署容器网络插件-flannel","children":[{"level":4,"title":"配置网络策略 Flannel","slug":"配置网络策略-flannel","link":"#配置网络策略-flannel","children":[{"level":5,"title":"kube-flannel.yml 镜像版本","slug":"kube-flannel-yml-镜像版本","link":"#kube-flannel-yml-镜像版本","children":[]}]},{"level":4,"title":"kubectl 命令基础","slug":"kubectl-命令基础","link":"#kubectl-命令基础","children":[]},{"level":4,"title":"查看","slug":"查看","link":"#查看","children":[]}]},{"level":3,"title":"E、可视化查看 Kubernetes资源","slug":"e、可视化查看-kubernetes资源","link":"#e、可视化查看-kubernetes资源","children":[{"level":4,"title":"1、dashboard（不推荐）","slug":"_1、dashboard-不推荐","link":"#_1、dashboard-不推荐","children":[]},{"level":4,"title":"2、KubeSphere（推荐）","slug":"_2、kubesphere-推荐","link":"#_2、kubesphere-推荐","children":[]},{"level":4,"title":"3、Kuboard","slug":"_3、kuboard","link":"#_3、kuboard","children":[]},{"level":4,"title":"4、KubeOperator","slug":"_4、kubeoperator","link":"#_4、kubeoperator","children":[]}]}]},{"level":2,"title":"4）、k8s 入门","slug":"_4-、k8s-入门","link":"#_4-、k8s-入门","children":[{"level":3,"title":"kubectl get po","slug":"kubectl-get-po","link":"#kubectl-get-po","children":[]},{"level":3,"title":"kubectl get svc","slug":"kubectl-get-svc","link":"#kubectl-get-svc","children":[]},{"level":3,"title":"kubectl get rc","slug":"kubectl-get-rc","link":"#kubectl-get-rc","children":[]},{"level":3,"title":"kubectl get deploy","slug":"kubectl-get-deploy","link":"#kubectl-get-deploy","children":[]},{"level":3,"title":"kubectl get rs","slug":"kubectl-get-rs","link":"#kubectl-get-rs","children":[]},{"level":3,"title":"A、基本命令","slug":"a、基本命令","link":"#a、基本命令","children":[{"level":4,"title":"1、创建apps：create deployment","slug":"_1、创建apps-create-deployment","link":"#_1、创建apps-create-deployment","children":[{"level":5,"title":"kubectl create deployment tomcat6 --image=tomcat:6.0.53-jre8","slug":"kubectl-create-deployment-tomcat6-image-tomcat-6-0-53-jre8","link":"#kubectl-create-deployment-tomcat6-image-tomcat-6-0-53-jre8","children":[]}]},{"level":4,"title":"2、查看 kg all","slug":"_2、查看-kg-all","link":"#_2、查看-kg-all","children":[]},{"level":4,"title":"3、查看详细 kg all -o wide","slug":"_3、查看详细-kg-all-o-wide","link":"#_3、查看详细-kg-all-o-wide","children":[]},{"level":4,"title":"4、查看 kg pod -o wide","slug":"_4、查看-kg-pod-o-wide","link":"#_4、查看-kg-pod-o-wide","children":[{"level":5,"title":"node02模拟宕机，看看k8s怎么处理（dkstop与node02关机）","slug":"node02模拟宕机-看看k8s怎么处理-dkstop与node02关机","link":"#node02模拟宕机-看看k8s怎么处理-dkstop与node02关机","children":[]},{"level":5,"title":"重启 node02","slug":"重启-node02","link":"#重启-node02","children":[]}]},{"level":4,"title":"5、暴露 port ：expose","slug":"_5、暴露-port-expose","link":"#_5、暴露-port-expose","children":[]},{"level":4,"title":"6、修改 port：edit","slug":"_6、修改-port-edit","link":"#_6、修改-port-edit","children":[]},{"level":4,"title":"7、扩容或缩容：scale","slug":"_7、扩容或缩容-scale","link":"#_7、扩容或缩容-scale","children":[]},{"level":4,"title":"8、删除以 create deployment 部署的(apps、service) delete","slug":"_8、删除以-create-deployment-部署的-apps、service-delete","link":"#_8、删除以-create-deployment-部署的-apps、service-delete","children":[]},{"level":4,"title":"9、部署&删除以 yaml 部署的实例","slug":"_9、部署-删除以-yaml-部署的实例","link":"#_9、部署-删除以-yaml-部署的实例","children":[{"level":5,"title":"kubectl apply -f xxx.yaml","slug":"kubectl-apply-f-xxx-yaml","link":"#kubectl-apply-f-xxx-yaml","children":[]},{"level":5,"title":"kubectl delete -f xxx.yaml","slug":"kubectl-delete-f-xxx-yaml","link":"#kubectl-delete-f-xxx-yaml","children":[]}]}]},{"level":3,"title":"B、yaml & 基本使用","slug":"b、yaml-基本使用","link":"#b、yaml-基本使用","children":[{"level":4,"title":"Pod 模版","slug":"pod-模版","link":"#pod-模版","children":[]},{"level":4,"title":"Deployment 模版","slug":"deployment-模版","link":"#deployment-模版","children":[]},{"level":4,"title":"Service 模版","slug":"service-模版","link":"#service-模版","children":[]},{"level":4,"title":"1、初级使用yaml创建apps（后期不使用这种方式）","slug":"_1、初级使用yaml创建apps-后期不使用这种方式","link":"#_1、初级使用yaml创建apps-后期不使用这种方式","children":[]},{"level":4,"title":"2、使用 [apps +暴露Service port] 的 yaml 格式（使用这个，不使用# 初级使用yaml创建apps）=推荐","slug":"_2、使用-apps-暴露service-port-的-yaml-格式-使用这个-不使用-初级使用yaml创建apps-推荐","link":"#_2、使用-apps-暴露service-port-的-yaml-格式-使用这个-不使用-初级使用yaml创建apps-推荐","children":[{"level":5,"title":"安装 Deployment（apps ）与暴露Service（expose-port ）在同一个yaml文件里设置，通过---分隔","slug":"安装-deployment-apps-与暴露service-expose-port-在同一个yaml文件里设置-通过-分隔","link":"#安装-deployment-apps-与暴露service-expose-port-在同一个yaml文件里设置-通过-分隔","children":[]}]}]},{"level":3,"title":"C、Deployment & service 概念","slug":"c、deployment-service-概念","link":"#c、deployment-service-概念","children":[{"level":4,"title":"pod & service","slug":"pod-service","link":"#pod-service","children":[]},{"level":4,"title":"ClusterIP","slug":"clusterip","link":"#clusterip","children":[]},{"level":4,"title":"label & selector","slug":"label-selector","link":"#label-selector","children":[]},{"level":4,"title":"说明","slug":"说明","link":"#说明","children":[]}]}]}],"git":{"createdTime":1706860273000,"updatedTime":1706860273000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":21.21,"words":6363},"filePathRelative":"k8s/basis.md","localizedDate":"2020年4月20日","excerpt":"","autoDesc":true}');export{e as data};