### nodeJS的优势

NodeJS的作者说，他创造NodeJS的目的是为了实现高性能Web服务器，他首先看重的是事件机制和异步IO模型的优越性，而不是JS。但是他需要选择一种编程语言实现他的想法，这种编程语言不能自带IO功能，并且需要能良好支持事件机制。JS没有自带IO功能，天生就用于处理浏览器中的DOM事件，并且拥有一大群程序员，因此就成为了天然的选择。

如他所愿，NodeJS在服务端活跃起来，出现了大批基于NodeJS的Web服务。而另一方面，NodeJS让前端众如获神器，终于可以让自己的能力覆盖范围跳出浏览器窗口，更大批的前端工具如雨后春笋。

因此，对于前端而言，虽然不是人人都要拿NodeJS写一个服务器程序，但简单可至使用命令交互模式调试JS代码片段，复杂可至编写工具提升工作效率。

NodeJS生态圈正欣欣向荣。





### nodeJS的生态圈

- **`webpack`**：Node.js`遵循`commonJS`规范，要说它的生态圈，第一个肯定是`webpack
- express、koa、koa2、egg等一系列**`NodeJS框架`**
- **`GraphQL`**：GraphQL` 是一种 API 所使用的查询语言,不止`Node.js`有，其他语言也有，不止可以查询，还可以多数据库`CRUD`操作，解决了一部分`RestFul`架构带来的问题
- **`mongodb`**：非关系型数据库，轻量级别数据库，目前`Node.js`配合使用的比较多的数据库,在`Node.js`中我们一般使用 `mongoose`这个库来配合使用
- **`sqlite`**：SQLite是一个进程内的库，实现了自给自足的、无服务器的、零配置的、事务性的 SQL 数据库引擎。它是一个零配置的数据库，这意味着与其他数据库一样，您不需要在系统中配置。就像其他数据库，SQLite 引擎不是一个独立的进程，可以按应用程序需求进行静态或动态连接。SQLite 直接访问其存储文件。
- **`Electron`**：跨平台桌面开发，可以使用`Node.js`的API，V8的环境也被打包在内。
- **`C++插件`**：`Node.js`的V8环境就是C++写的，自然也是可以使用C++插件
- **`Redis`**：数据缓存层，Redis支持主从同步。数据可以从主服务器向任意数量的从服务器上同步，从服务器可以是关联其他从服务器的主服务器。这使得Redis可执行单层树复制。存盘可以有意无意的对数据进行写操作。由于完全实现了发布/订阅机制，使得从数据库在任何地方同步树时，可订阅一个频道并接收主服务器完整的消息发布记录。同步对读取操作的可扩展性和数据冗余很有帮助。
- **`SSR`**：以`React`为例，在中间层对代码进行注水，在客户端对代码脱水，实现部分首屏`SSR`，优化首屏渲染时间。
- **`websocket`**通讯等
- **`puppeteer`**爬虫



### 关于如何系统学习 NodeJS

[知乎](https://www.zhihu.com/question/21567720)【阿里云云栖号的回答】

**关注 Github 仓库 Wiki 和产品榜单**

我们上 Github 的时候，往往会很关注热门的框架库，那么这些框架库里往往蕴含着更有参考价值的宝藏，那就是 Wiki，比如 [Express](https://link.zhihu.com/?target=https%3A//github.com/expressjs/express%3Fspm%3D5176.100239.blogcont72940.20.UGCrj0)，在它的 [Wiki](https://link.zhihu.com/?target=https%3A//github.com/expressjs/express/wiki%3Fspm%3D5176.100239.blogcont72940.21.UGCrj0) 里面，除了有 Express 的升级指南，中间件列表之外，还有一个 [Frameworks built with Express](https://link.zhihu.com/?target=https%3A//github.com/expressjs/express/wiki%3Fspm%3D5176.100239.blogcont72940.22.UGCrj0%23frameworks-built-with-express)，什么意思呢，就是很多团队或者个人对 Express 不够满意，或者自己的场景更特殊，Express 不能满足，他们都基于 Express 这个框架基础或者思想来构建了一个新的框架，这些新的框架，都的基于他们的需求或者他们认为合理的方向来实现的，这些框架的源代码包括文档，大家在学习 Nodejs 的时候，可以好好研究一下，能学习到更多他人在设计框架时候考虑的方向，实现的方式，比如这些：

- Feathers -- 一个迷你的数据驱动的框架
- Monorail.js -- 一个极轻量级的 MVC 框架
- Locomotive -- 受 Ruby on Rails 启发而开发的强大的 MVC 框架
- CompoundJS -- 同样是受 Ruby on Rails 启发的高水平 MVC 框架
- Calipso -- 基于 Express/Mongoose 的内容管理系统
- Derby -- 一个实时的协作应用框架
- Bones -- 基于 Express/Backbone 实现的 CS 应用框架
- Matador -- Twitter 工程师开发的 MVC 框架
- Lemmy -- 一个不可描述（爆粗口）的神秘框架
- Mojito -- Yahoo 开发的 MVC 框架

综合比较一下，就能找出更适合自己用的框架，等到对框架足够熟悉的时候，就可以去阅读他们的 issues 甚至是源代码，看的多了想的多了，就越来越上道了。

**全栈的最后一公里**

全栈这个词很敏感，有人不认同有人无所谓，对我而言，它就像是一个 H5 工程师一样，只是表述了一种印象或者概念，具体严谨与否不重要，因为跟人沟通，心领神会即可不必强究细节。

那么在学习 Nodejs 的过程中，有一道门槛是无论如何也逃不过去的，那就是 服务器的选购配置，域名的解析指向，Nodejs 项目的部署等这些偏运维方向，这些让很多新人甚至是已经工作的工程师困扰，自己去琢磨太花费时间，不去琢磨，始终没有能力凭自己双手，让一个产品上线或者让自己的一个想法实现到互联网上，不论是成为独立站长，还是只是让朋友同学访问，于是我把这些总结了一下，以以上几个项目为例，大概分为如下几个步骤：

- 部署方案规划
- 待部署项目分析
- 选购及备案域名
- 厂商对比与选配阿里云服务器
- 初步 SSH 无密码登录连接和配置
- 搭建 Nodejs/MongoDB/Nginx 环境
- 配置 IPTables/Fail2Ban 防火墙及主动防御
- 域名 DNS 转移及 A 记录/CNAME 解析配置
- MongoDB 角色配置与安全规则设置
- 线上 MongoDB 单表单库导入导出与跨机迁移备份上传
- PM2 发布环境配置
- 服务器与 Git 仓库读写配置
- PM2 一键部署线上 Nodejs 项目
- 电影网站/ReactNative App 后台/微信公众号/微信小程序后台等项目实战部署
- SSL 证书申请及 Nginx 证书集成提供 HTTPS 协议
- 上线方案复盘总结