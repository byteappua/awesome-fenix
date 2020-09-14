(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{553:function(e,r,t){"use strict";t.r(r);var n=t(11),o=Object(n.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"无服务时代"}},[e._v("无服务时代")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("无服务架构（Serverless）")]),e._v(" "),t("p",[e._v("如果说微服务架构是分布式系统这条路的极致，那无服务架构，也许就是“不分布式”的云端系统这条路的起点。")])]),e._v(" "),t("p",[e._v("进行分布式的目的，最初是由于单台机器的性能无法满足系统的运行需要，尽管后来架构演进过程中，容错能力、技术异构、职责划分等各方面因素都成为架构需要考虑的问题，但其中获得更好性能的需求在架构设计中比重依然很大。对软件研发而言，不去做分布式无疑是最简单的，如果单台服务器的性能可以是无限的，那架构演进的结果肯定会与今天有很大的差别，分布式也好，容器化也好，微服务也好，恐怕都未必会出现，最起码不必是如今天这个样子。")]),e._v(" "),t("p",[e._v("绝对意义上的无限性能必然是不存在的，但在云计算落地已有十年时间的今日，相对意义的无限性能已经成为了现实。在工业界，2012年，"),t("a",{attrs:{href:"https://www.iron.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iron.io公司"),t("OutboundLink")],1),e._v("率先提出了“无服务”（Serverless，应该翻译为“无服务器”才合适，但现在称“无服务”已形成习惯了）的概念，2014年开始，AWS发布了命名为Lambda的商业化无服务应用，并在后续的几年里逐步的到开发者认可，发展成目前世界上最大的无服务的运行平台；到了2018年，中国的阿里云、腾讯云等厂商也开始跟进，发布了旗下的无服务的产品，“无服务”已成了近期技术圈里的“新网红”之一。")]),e._v(" "),t("p",[e._v("在学术界，2009年，云计算概念刚提出的早期，UC Berkeley大学曾发表的论文《"),t("a",{attrs:{href:"https://www2.eecs.berkeley.edu/Pubs/TechRpts/2009/EECS-2009-28.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Above the Clouds: A Berkeley View of Cloud Computing"),t("OutboundLink")],1),e._v("》，文中预言的云计算的价值、演进和普及在过去的十年里一一得到验证。十年之后的2019年，UC Berkeley的第二篇有着相同命名风格的论文《"),t("a",{attrs:{href:"https://arxiv.org/abs/1902.03383",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Programming Simplified: A Berkeley View on Serverless Computing"),t("OutboundLink")],1),e._v("》发表，再次预言未来“无服务将会发展成为未来云计算的主要形式”，由此可见，“无服务”也同样是被主流学术界所认可发展方向（之一）。")]),e._v(" "),t("blockquote",[t("p",[e._v("We predict that serverless computing will grow to dominate the future of cloud computing")]),e._v(" "),t("p",[e._v("我们预测无服务将会发展成为未来云计算的主要形式")]),e._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[e._v("——  "),t("a",{attrs:{href:"https://arxiv.org/abs/1902.03383",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Programming Simplified: A Berkeley View on Serverless Computing"),t("OutboundLink")],1),e._v(", 2019")])])]),e._v(" "),t("p",[e._v("无服务今天还没有一个权威的“官方”定义，但它的概念并没有前面各种架构那么复杂，本来无服务也是以“简单”为主要卖点的，它只涉及两块内容：后端设施（Backend）和函数（Function）。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("后端设施")]),e._v("是指数据库、消息队列、日志、存储，等等这一类用于支撑业务逻辑运行，但本身无业务含义的技术组件，这些后端设施都运行在云中，无服务中称其为“后端即服务”（Backend as a Service，BaaS）。")]),e._v(" "),t("li",[t("strong",[e._v("函数")]),e._v("就是指的业务逻辑代码，这里函数的概念与粒度，都已经很接近于程序编码角度的函数了，其区别是无服务中的函数运行在云端，不必考虑算力问题，不必考虑容量规划（从技术角度可以不考虑，从计费的角度你的钱包够不够用还是要掂量一下的），无服务中称其为“函数即服务”（Function as a Service，FaaS）。")])]),e._v(" "),t("p",[e._v("无服务的愿景是让开发者只需要纯粹地关注业务，不需要考虑技术组件，后端的技术组件是现成的，可以直接取用，没有采购、版权和选型的烦恼；不需要考虑如何部署，部署过程完全是托管到云端的，工作由云端自动完成；不需要考虑算力，有整个数据中心支撑，算力可以认为是无限的；也不需要操心运维，维护系统持续平稳运行是云服务商的责任而不再是开发者的责任。在UC Berkeley的论文中，把无服务架构下开发者不再关心这些技术层面的细节，类比成当年软件开发从汇编语言踏进高级语言的发展过程，开发者可以不去关注寄存器、信号、中断等与机器底层相关的细节，从而令生产力得到极大地解放。")]),e._v(" "),t("p",[e._v("无服务架构的远期前景也许是很美好的，但笔者自己对无服务中短期内的发展并没有那么乐观，与单体架构、微服务架构不同，无服务架构一些天生的特点决定了它现在不是，以后如果没有重大变革的话，估计也很难成为一种普适性的架构模式，它对一些适合的应用确实能够降低开发和运维环节的成本，譬如不需要交互的离线大规模计算，又譬如多数Web资讯类网站、小程序、公共API服务、移动应用服务端等都契合于无服务架构所擅长的短链接、无状态、适合事件驱动的交互形式；但另一方面，对于那些信息管理系统、网络游戏等应用，又或者说所有具有业务逻辑复杂，依赖服务端状态，响应速度要求较高，需要长链接，等等这些特征的应用，无服务架构至少目前是相对并不合适的。这是因为无服务天生“无限算力”的假设就决定了它必须要按使用量（函数运算的时间和内存）计费以控制消耗算力的规模，因而函数不会一直以活动状态常驻服务器，请求到了才会开始运行，这导致了函数不便依赖服务端状态，也导致了函数会有冷启动时间，响应的性能不可能太好（目前无服务的冷启动过程大概是在数十到百毫秒级别，对于Java这类启动性能差的应用，甚至能到接近秒的级别）。")]),e._v(" "),t("p",[e._v("无论如何，云计算毕竟是大势所趋，今天信息系统建设的概念和观念，在（较长尺度的）明天都是会转变成适应云端的，笔者并不怀疑Serverless+API的设计方式会成为以后其中一种主流的软件形式，届时无服务还会有更广阔的应用空间。")]),e._v(" "),t("p",[e._v("如果说微服务架构是分布式系统这条路当前所能做到的极致，那无服务架构，也许就是“不分布式”的云端系统这条路的起点。虽然在顺序上笔者将“无服务”安排到了“微服务”和“云原生”时代之后，但它们两者并没有继承替代关系，强调这点是为了避免有读者从两者的名称与安排的顺序中产生“无服务就会比微服务更加先进”的错误想法。笔者相信软件开发的未来不会只存在某一种“最先进的”架构风格，多种具针对性的架构风格同时并存，是软件产业更有生命力的形态。笔者同样相信软件开发的未来，多种架构风格将会融合互补，“分布式”与“不分布式”的边界将逐渐模糊，两条路线在云端的数据中心中交汇。今天已经能初步看见一些使用无服务的云函数去实现微服务架构的苗头了，将无服务作为技术层面的架构，将微服务视为应用层面的架构，把它们组合起来使用是完全合理可行的。以后，无论是通过物理机、虚拟机、容器，抑或是无服务云函数，都会是微服务实现方案的候选项之一。")]),e._v(" "),t("p",[e._v("本节是架构演进历史的最后一篇，如引言所说，我们谈历史，重点不在考古，而是借历史之名，理解好每种架构出现的意义与淘汰的原因，为的是更好地解决今天的现实问题，寻找出未来架构演进的发展道路。对于架构演进的未来发展，2014年，Martin Fowler与James Lewis在《"),t("a",{attrs:{href:"https://martinfowler.com/articles/microservices.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microservices"),t("OutboundLink")],1),e._v("》的结束语中曾写到，他们对于微服务日后能否被大范围地推广，最多只能持有谨慎的乐观，无服务方兴未艾的今天，与那时微服务的情况十分相近，笔者对无服务日后的推广同样持乐观谨慎的乐观态度。软件开发的最大挑战就在于只能在不完备的信息下决定当前要处理的问题。时至今日，依然很难预想在架构演进之路的前方，微服务和无服务之后还会出现何种形式的架构风格，但这也契合了图灵的那句名言：尽管目光所及之处，只是不远的前方，即使如此，依然可以看到那里有许多值得去完成的工作在等待我们。")]),e._v(" "),t("blockquote",[t("p",[e._v("We can only see a short distance ahead, but we can see plenty there that needs to be done.")]),e._v(" "),t("p",[e._v("尽管目光所及之处，只是不远的前方，即使如此，依然可以看到那里有许多值得去完成的工作在等待我们。")]),e._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[e._v("—— "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Alan_Turing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alan Turing"),t("OutboundLink")],1),e._v("，"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computing_Machinery_and_Intelligence",target:"_blank",rel:"noopener noreferrer"}},[e._v("Computing Machinery and Intelligence"),t("OutboundLink")],1),e._v("，1950")])])])])}),[],!1,null,null,null);r.default=o.exports}}]);