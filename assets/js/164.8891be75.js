(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{708:function(t,e,n){"use strict";n.r(e);var r=n(11),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"k3s启动apiserver-agent的环境准备"}},[t._v("K3S启动APIServer/Agent的环境准备")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("入口："),n("code",[t._v("cmd/server/main.go::main()")])]),t._v(" "),n("ol",[n("li",[t._v("注册了containerd\\kubectl\\crictl\\ctr四个reexec启动函数，对应了四个同名的以及agent启动子命令。")]),t._v(" "),n("li",[t._v("由于传入参数是server，由urfave cli执行server::Run函数。")])])]),t._v(" "),n("li",[n("p",[t._v("处理命令行参数："),n("code",[t._v("pkg/cli/server/server.go::Run()")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("重设进程的命令行参数，以避免参数中存在敏感信息泄漏的风险（譬如被ps命令列出）")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hide process arguments from ps output, since they may contain")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// database credentials or other secrets.")]),t._v("\ngspt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetProcTitle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" server"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("命令行中传入的参数，会在urfave cli支持下，写入到全局变量ServerConfig中（NewServerCommand方法），在"),n("code",[t._v("Run()")]),t._v("方法中，将名为"),n("code",[t._v("ServerConfig")]),t._v("的"),n("code",[t._v("Server struct")]),t._v("转换为带层次结构的"),n("code",[t._v("server.Config struct")]),t._v("。命令行中可接受的参数如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\tClusterCIDR    string\n\tAgentToken     string\n\tAgentTokenFile string\n\tToken          string\n\tTokenFile      string\n\tClusterSecret  string\n\tServiceCIDR    string\n\tClusterDNS     string\n\tClusterDomain  string\n\t// The port which kubectl clients can access k8s\n\tHTTPSPort int\n\t// The port which custom k3s API runs on\n\tSupervisorPort int\n\t// The port which kube-apiserver runs on\n\tAPIServerPort            int\n\tAPIServerBindAddress     string\n\tDataDir                  string\n\tDisableAgent             bool\n\tKubeConfigOutput         string\n\tKubeConfigMode           string\n\tTLSSan                   cli.StringSlice\n\tBindAddress              string\n\tExtraAPIArgs             cli.StringSlice\n\tExtraSchedulerArgs       cli.StringSlice\n\tExtraControllerArgs      cli.StringSlice\n\tExtraCloudControllerArgs cli.StringSlice\n\tRootless                 bool\n\tDatastoreEndpoint        string\n\tDatastoreCAFile          string\n\tDatastoreCertFile        string\n\tDatastoreKeyFile         string\n\tAdvertiseIP              string\n\tAdvertisePort            int\n\tDisableScheduler         bool\n\tServerURL                string\n\tFlannelBackend           string\n\tDefaultLocalStoragePath  string\n\tDisableCCM               bool\n\tDisableNPC               bool\n\tDisableKubeProxy         bool\n\tClusterInit              bool\n\tClusterReset             bool\n\tClusterResetRestorePath  string\n\tEncryptSecrets           bool\n\tStartupHooks             []func(context.Context, <-chan struct{}, string) error\n\tEtcdDisableSnapshots     bool\n\tEtcdSnapshotDir          string\n\tEtcdSnapshotCron         string\n\tEtcdSnapshotRetention    int\n")])])])]),t._v(" "),n("li",[n("p",[t._v("命令行参数（也包含一些Agent Node等默认参数）初始化结束后，以"),n("code",[t._v("server.Config")]),t._v("结构传递给"),n("code",[t._v("pkg/server/server.go::StartServer()")]),t._v("方法。")])]),t._v(" "),n("li",[n("p",[t._v("建立一条goroutine，等待"),n("code",[t._v("serverConfig.ControlConfig.Runtime.APIServerReady")]),t._v("通道的信号。")])]),t._v(" "),n("li",[n("p",[t._v("启动Agent，转入"),n("code",[t._v("pkg/agent/run.go::Run()")]),t._v("，详见“"),n("a",{attrs:{href:""}},[t._v("K3S启动Agent的环境准备")]),t._v("”")])])])]),t._v(" "),n("li",[n("p",[t._v("启动服务器的环境准备："),n("code",[t._v("pkg/server/server.go::StartServer()")]),t._v("，这里要包括 Etcd（或基于Kine包装的代替品）、APIServer等一系列服务。")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("建立临时目录，以及设定对K3S管理的地址加入NOPROXY环境变量，避免受外部代理的干扰")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setupDataDirAndChdir")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ControlConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNoProxyEnv")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ControlConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("调用"),n("code",[t._v("pkg/daemons/control/server.go::Server()")]),t._v("，启动APIServer服务器：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("设置默认值，在"),n("code",[t._v("defaults()")]),t._v("方法中初始化"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",target:"_blank",rel:"noopener noreferrer"}},[t._v("CIDR"),n("OutboundLink")],1),t._v("范围、APIServer默认端口（"),n("code",[t._v("6443")]),t._v("/"),n("code",[t._v("6444")]),t._v("）、默认的数据目录（"),n("code",[t._v("/var/lib/rancher/k3s/server")]),t._v("）的默认值。")])]),t._v(" "),n("li",[n("p",[t._v("在"),n("code",[t._v("prepare()")]),t._v("方法开始准备服务器环境，包括：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("设置默认证书，初始化Client（Admin、Controller、CloudController、Scheduler、KubeAPI、KuberPorxy、K3SController、Etcd）、Server、RequestHeader等的CA、Key文件路径（只是路径，不包括内容）。")])]),t._v(" "),n("li",[n("p",[t._v("调用"),n("code",[t._v("cluster.Bootstrap()")]),t._v("方法（"),n("code",[t._v("pkg/cluster/bootstrap.go")]),t._v("），初始化集群后端存储。Rancher提供的cluster包解耦了Kubernetes对Etcd的直接依赖，使得K3S既可以使用内嵌的托管数据库模式，也可以使用SQLite、MySQL、PGSQL等非托管数据库模式。")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("managed database")]),t._v(" is one whose lifecycle we control - initializing the cluster, adding/removing members, taking snapshots, etc")])])]),t._v(" "),n("li",[n("p",[t._v("初始化证书、ServiceAccount、Users（即Server和Node的Password）、EncryptedNetworkInfo（即IPSEC Key）、EncryptionConfig、Tokens信息")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("genCerts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("genServiceAccount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("genUsers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("genEncryptedNetworkInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("genEncryptionConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readTokens")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("runtime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("调用"),n("code",[t._v("cluster.Start()")]),t._v("方法，启动集群后端存储。对于托管数据库，会在此时进行启动和测试工作，而非托管数据库，则只会在"),n("code",[t._v("startStorage()")]),t._v("方法中启动"),n("a",{attrs:{href:"https://github.com/k3s-io/kine",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kine"),n("OutboundLink")],1),t._v("的监听器，开放一个默认名为"),n("code",[t._v("unix://kine.sock")]),t._v("的UDS地址。")])])])]),t._v(" "),n("li",[n("p",[t._v("通过"),n("code",[t._v("setupTunnel()")]),t._v("方法，调用Rancher的"),n("a",{attrs:{href:"https://github.com/rancher/remotedialer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remote Dialer"),n("OutboundLink")],1),t._v("创建了一条通信隧道，并将它赋值给"),n("code",[t._v("k8s.io/kubernetes/cmd/kube-apiserver/app.DefaultProxyDialerFn")]),t._v("，因此后续K8S将能够使用到它来进行通信。")])]),t._v(" "),n("li",[n("p",[t._v("通过"),n("code",[t._v("apiServer()")]),t._v("方法，将"),n("code",[t._v("config.Control")]),t._v("中的一批参数，又重新转换成kube-apiserver的命令行参数。这里调用了"),n("code",[t._v("executor.APIServer")]),t._v("，真正从K3S的包装代码过度到K8S里。调用的方式不是fork子进程，而是通过启动一条新的goroutine，直接在进程内调用"),n("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cobra"),n("OutboundLink")],1),t._v("（Kubernetes所采用的命令行框架）中的Command，具体Command的启动函数位于"),n("code",[t._v("k8s.io/kubernetes/cmd/kube-apiserver/app/server.go::Run()")]),t._v("方法。这部分的具体分析见："),n("RouterLink",{attrs:{to:"/tricks/2021/k3s/apiserver/bootstrap.html"}},[t._v("K8S-APIServer启动过程")]),t._v("。")],1)])])]),t._v(" "),n("li",[n("p",[t._v("在"),n("code",[t._v("router()")]),t._v("方法中，将"),n("code",[t._v("prepare()")]),t._v("方法里生成的一系列证书、serverConfig的配置信息、数据库信息、静态资源、ping地址等设置好HTTP Endpoint，并以"),n("a",{attrs:{href:"https://github.com/gorilla/mux",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gorilla Mux Router"),n("OutboundLink")],1),t._v("的形式返回。这一步相当于建立了一个内置的HTTP服务器。")])]),t._v(" "),n("li",[n("p",[t._v("等待"),n("code",[t._v("config.ControlConfig.Runtime.APIServerReady")]),t._v("信号，收到后启动"),n("code",[t._v("runControllers()")]),t._v("方法。")])]),t._v(" "),n("li",[n("p",[t._v("打印Agent加入Server的命令地址，如：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Node token is available at /var/lib/rancher/k3s/server/token\nTo join node to cluster: k3s agent -s https://172.19.45.5:6443 -t ${NODE_TOKEN}\n")])])])]),t._v(" "),n("li",[n("p",[t._v("将ServerCA、ClientAdminCert、ClientAdminKey以YAML格式写入磁盘，默认位置是"),n("code",[t._v("/etc/rancher/k3s/k3s.yaml")]),t._v("。")])])])]),t._v(" "),n("li",[n("p",[t._v("与构建serverConfig类似，构建agentConfig对象，调用"),n("code",[t._v("pkg/agent/run.go::Run()")]),t._v("方法，创建Node Agent：")]),t._v(" "),n("ol",[n("li",[t._v("在"),n("code",[t._v("syssetup.Configure()")]),t._v("方法中对系统运行Agent的条件进行检查，确认Linux Kernel的驱动模块（在"),n("code",[t._v("/sys/module/")]),t._v("下存在）和Kernel的内核信息映射 （在"),n("code",[t._v("/proc/sys/")]),t._v("下可读写）。")]),t._v(" "),n("li",[t._v("在"),n("code",[t._v("pkg/agent/proxy/apiproxy.go::NewAPIProxy()")]),t._v("方法创建proxy对象（仅仅是初始化了对象），在"),n("code",[t._v("clientaccess.ParseAndValidateTokenForUser()")]),t._v("创建客户端访问令牌。")]),t._v(" "),n("li",[t._v("转入"),n("code",[t._v("run()")]),t._v("方法，开始Node Agent运行\n"),n("ol",[n("li",[n("code",[t._v("setupCriCtlConfig()")]),t._v("及"),n("code",[t._v("containerd.Run()")]),t._v("：建立CRI配置信息，K3S默认的CRI是containerd，可以在配置中要求使用DockerShim。后续会以默认为"),n("code",[t._v("unix:///run/k3s/containerd/containerd.sock")]),t._v("的UDS地址与CRI框架通讯，这个地址会写入到"),n("code",[t._v("/var/lib/rancher/k3s/agent/etc/crictl.yaml")]),t._v("中，配置会写入"),n("code",[t._v("/var/lib/rancher/k3s/agent/etc/containerd/config.toml")]),t._v("，然后以exec.Command的形式fork一个containerd的子进程，如果数据目录里面的"),n("code",[t._v("/images")]),t._v("目录存在（默认不存在），还会自动预载里面的镜像到CRI框架中。")]),t._v(" "),n("li",[n("code",[t._v("flannel.Prepare()")]),t._v("建立CNI网络信息，K3S默认的CNI插件是Flannel VXLAN，可以在配置中设置NoFlanel然后自己安装网络插件。默认网络信息会写到"),n("code",[t._v("/var/lib/rancher/k3s/agent/etc/cni/net.d/10-flannel.conflist")]),t._v("和"),n("code",[t._v("/var/lib/rancher/k3s/agent/etc/flannel/net-conf.json")])]),t._v(" "),n("li",[n("code",[t._v("tunnel.Setup()")]),t._v("Agent获得与Kube-APIServer的通讯Endpoint、证书，并建立连接。证书等信息是默认从"),n("code",[t._v("/var/lib/rancher/k3s/agent/k3scontroller.kubeconfig")]),t._v("文件中读取得到的，然后访问"),n("code",[t._v("GET https://master-ip:6443/api/v1/namespaces/default/endpoints/kubernetes")]),t._v("，确认通信是否成功（只要通信成功，不在乎返回值是403），成功后通过"),n("code",[t._v("proxy.Update()")]),t._v("更新至Remotedialer Proxy对象。同时也会生成WebSockets连接："),n("code",[t._v("wss://master-ip:6443/v1-k3s/connect")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("agent.Agent()")]),t._v("调用Kubelet进程，从环境上下文中收集参数，转换形成kubelet命令行参数格式，然后同样是在进程内调用Cobra的Command，这部分内容在：“"),n("RouterLink",{attrs:{to:"/tricks/2021/k3s/kubelet/bootstrap.html"}},[t._v("Kubelet启动过程")]),t._v("”中分析。")],1),t._v(" "),n("li",[n("code",[t._v("configureNode()")])])])])])]),t._v(" "),n("li",[n("p",[t._v("等待ctx.Done()，持续运行。")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);