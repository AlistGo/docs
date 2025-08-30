import{_ as n,a,b as e}from"./bd_share_test-DB4S70R2.js";import{_ as i,k as l,n as t,o as p}from"./app-8JY7cr0S.js";const r={};function d(c,s){return p(),l("div",null,[...s[0]||(s[0]=[t('<h1 id="百度分享" tabindex="-1"><a class="header-anchor" href="#百度分享"><span>百度分享</span></a></h1><p>挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span><strong>配置</strong></span></a></h2><p>百度网盘分享链接：surl，百度网盘分享密码：pwd</p><ol><li><p>浏览目录需设置<strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>，下载还需设置BDUSS。</p></li><li><p><strong>百度网盘分享链接</strong>即为分享地址<code>pan.baidu.com/s/</code>后<code>?</code>前部分，<strong>百度网盘分享密码</strong>填4位提取码，无提取码留空。</p></li><li><p><strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>可以随意账号填写，但是 <strong><code>BDUSS</code></strong> 参数的账号 必须使用 <mark><strong>百度超级SVIP会员</strong></mark> 才可以</p></li></ol><p><img src="'+n+'" alt="" loading="lazy"></p><p>BDUSS由cookie中提取</p><ul><li><p>方法1：<a href="http://pandownload.net/faq/cookie.html" target="_blank" rel="noopener noreferrer">参考教程</a>(本项目中无需前缀<code>BDUSS=</code>)。</p></li><li><p>方法2<sup>荐</sup>：</p><ul><li><img src="'+a+'" alt="1" style="zoom:30%;"></li></ul></li></ul><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2><p>要挂载的根文件夹，默认为<code>/</code></p><p>如果要写文件夹內其他的 请看下方的例子</p><p><img src="'+e+`" alt="" loading="lazy"></p><h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa"><span><strong>QA</strong></span></a></h2><table><thead><tr><th style="text-align:center;">出错配置</th><th style="text-align:left;">典型报错</th><th style="text-align:left;">修复说明</th></tr></thead><tbody><tr><td style="text-align:center;">surl</td><td style="text-align:left;"><code>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td><td style="text-align:left;">分享链接可能失效, 检查链接状态</td></tr><tr><td style="text-align:center;">pwd</td><td style="text-align:left;"><code>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td><td style="text-align:left;">分享密码错误</td></tr><tr><td style="text-align:center;">BDUSS</td><td style="text-align:left;"><code>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td><td style="text-align:left;">BDUSS无效</td></tr><tr><td style="text-align:center;">UA</td><td style="text-align:left;"><code>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td><td style="text-align:left;">user-agent违反百度限制, 访问端需设置非浏览器UA(如netdisk)或开启Web代理</td></tr><tr><td style="text-align:center;">下载</td><td style="text-align:left;">Failed init storage: 200 OK; {&quot;errno&quot;:-130,&quot;</td><td style="text-align:left;">此链接分享内容可能因为涉及侵权、色情、低俗等信息，无法访问！</td></tr></tbody></table><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发"><span><strong>开发</strong></span></a></h2><p>接口来自<a href="https://github.com/yuantuo666/baiduwp-php" target="_blank" rel="noopener noreferrer">github.com/yuantuo666/baiduwp-php</a>项目，非官方api。</p><p>当前仅移植目录浏览和普通下载功能，欢迎继续开发。</p><p>因缺失官方文档，不排除存在一些兼容问题，可至github反馈，建议提供复现链接以供调试。</p><p>不能突破速度限制，请合理使用。</p><br><p>}</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;br/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>### **添加 &quot;User-Agent&quot; 使用示例**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>::::danger 如果你不会设置 &quot;User-Agent&quot; 请看这里</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ==以下方法仅限于有百度超级会员用户使用== </span></span>
<span class="line"><span></span></span>
<span class="line"><span> ==再次提示 以下方法仅限于有百度超级会员用户使用== </span></span>
<span class="line"><span></span></span>
<span class="line"><span>有会员改完 **\`&quot;User-Agent&quot;\`** 才会有用（选择官方和302）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果不改 **\`&quot;User-Agent&quot;\`**，可以开启 ==Web代理==，缺点是需要你搭建AList的机器中转，也就是说你需要大宽带帮你中转</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;p style=&quot;text-align: center;&quot;&gt;&lt;span&gt;网页302模式修改UA教程 : &lt;br/&gt;&lt;/span&gt;左侧为&lt;span style=&quot;color:red;font-weight: bold;font-size: xx-large;&quot;&gt;『官方』&lt;/span&gt;接口，右侧为&lt;span style=&quot;color:blue;font-weight: bold;font-size: xx-large;&quot;&gt;『非官方-已无法使用』&lt;/span&gt;接口&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;image-preview&quot;&gt;</span></span>
<span class="line"><span>        &lt;video width=&quot;360&quot; height=&quot;240&quot; controls&gt;</span></span>
<span class="line"><span>            &lt;source src=&quot;https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4&quot; type=&quot;video/mp4&quot;&gt;</span></span>
<span class="line"><span>        &lt;/video&gt;</span></span>
<span class="line"><span>        &lt;video width=&quot;360&quot; height=&quot;240&quot; controls&gt;</span></span>
<span class="line"><span>            &lt;source src=&quot;https://r2.izyt.cc/alist/baidu/%E7%99%BE%E5%BA%A6%E9%9D%9E%E5%AE%98%E6%96%B9%E6%8E%A5%E5%8F%A3.mp4&quot; type=&quot;video/mp4&quot;&gt;</span></span>
<span class="line"><span>        &lt;/video&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::tabs#ua</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab 网页插件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 使用浏览器插件修改的好处是 可以直接在线播放，当然了下载也是可以的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例&lt;Badge text=&quot;1&quot; type=&quot;info&quot; vertical=&quot;middle&quot; /&gt;：实在不会的可以看看一个Web网页端的例子： **https://www.bilibili.com/video/BV1UA4y1X7J8**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例&lt;Badge text=&quot;2&quot; type=&quot;info&quot; vertical=&quot;middle&quot; /&gt;：另一款插件方法涵盖360，Chrome，Edge： **https://youtu.be/PP6b0WSzYMc**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![alist](/img/drivers/baidu/bdUA.png)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab Aria2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 先照着下图设置好 **\`&quot;User-Agent&quot;\`**，然后在**右下角**的按钮选项，点击**齿轮**(本地设置)，配置好参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 然后在右下角打开第三个按钮选项（**打开复选框**），打开后去列表选择我们要下载的文件，</span></span>
<span class="line"><span>3. 把我们需要下载的文件**进行勾选**，勾选好后下方会出现**一排按钮**，选择右侧第二个选项下载里面有一个**发送到Aria2**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你使用了网页修改 **\`&quot;User-Agent&quot;\`**，可以不配置 ==**Aria2**== 的\`UA\`，直接推送到Aria2也能下载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>![alist](/img/drivers/baidu/aria2-ua.png)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@tab Motrix</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 先照着下图设置好 **\`&quot;User-Agent&quot;\`**，然后在**右下角**的按钮选项，点击**齿轮**(本地设置)，配置好参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 然后在右下角打开第三个按钮选项（**打开复选框**），打开后去列表选择我们要下载的文件，</span></span>
<span class="line"><span>3. 把我们需要下载的文件**进行勾选**，勾选好后下方会出现**一排按钮**，选择右侧第二个选项下载里面有一个**发送到Aria2**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你使用了网页修改 **\`&quot;User-Agent&quot;\`**，可以不配置 ==**Motrix**== 的\`UA\`，直接推送到Aria2也能下载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- #include-env-end --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### **默认使用的下载方式**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`mermaid</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>title: 默认使用的哪种下载方式？</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>flowchart TB</span></span>
<span class="line"><span>    style a1 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff</span></span>
<span class="line"><span>    style a2 fill:#ff7575,stroke:#333,stroke-width:4px</span></span>
<span class="line"><span>    subgraph ide1 [ ]</span></span>
<span class="line"><span>    a1</span></span>
<span class="line"><span>    end</span></span>
<span class="line"><span>    a1[302]:::someclass====|默认|a2[用户设备]</span></span>
<span class="line"><span>    classDef someclass fill:#f96</span></span>
<span class="line"><span>    c1[本机代理]-.备选.-&gt;a2[用户设备]</span></span>
<span class="line"><span>    b1[代理URL]-.备选.-&gt;a2[用户设备]</span></span>
<span class="line"><span>    click a1 &quot;../drivers/common.html#webdav-策略&quot;</span></span>
<span class="line"><span>    click b1 &quot;../drivers/common.html#webdav-策略&quot;</span></span>
<span class="line"><span>    click c1 &quot;../drivers/common.html#webdav-策略&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22)])])}const m=i(r,[["render",d]]),v=JSON.parse('{"path":"/zh/guide/drivers/baidu_share.html","title":"百度分享","lang":"zh-CN","frontmatter":{"icon":"iconfont icon-state","order":71,"category":["Guide"],"tag":["Storage","Guide","302"],"sticky":true,"star":true,"description":"百度分享 挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。 配置 百度网盘分享链接：surl，百度网盘分享密码：pwd 浏览目录需设置百度网盘分享链接和百度网盘分享密码，下载还需设置BDUSS。 百度网盘分享链接即为分享地址pan.baidu.com/s/后?前部分，百度网盘分享密码填4位提取码，无提取码留空。 百度网盘分享链接和百度网...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://alistgo.com/guide/drivers/baidu_share.html"}],["meta",{"property":"og:url","content":"https://alistgo.com/zh/guide/drivers/baidu_share.html"}],["meta",{"property":"og:site_name","content":"AList文档"}],["meta",{"property":"og:title","content":"百度分享"}],["meta",{"property":"og:description","content":"百度分享 挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。 配置 百度网盘分享链接：surl，百度网盘分享密码：pwd 浏览目录需设置百度网盘分享链接和百度网盘分享密码，下载还需设置BDUSS。 百度网盘分享链接即为分享地址pan.baidu.com/s/后?前部分，百度网盘分享密码填4位提取码，无提取码留空。 百度网盘分享链接和百度网..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alistgo.com/img/drivers/baidu/add_bd_share.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-23T16:39:23.000Z"}],["meta",{"property":"article:tag","content":"Storage"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:tag","content":"302"}],["meta",{"property":"article:modified_time","content":"2025-04-23T16:39:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"百度分享\\",\\"image\\":[\\"https://alistgo.com/img/drivers/baidu/add_bd_share.png\\",\\"https://alistgo.com/img/drivers/baidu/bd_share_test.png\\"],\\"dateModified\\":\\"2025-04-23T16:39:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"根文件夹ID","slug":"根文件夹id","link":"#根文件夹id","children":[]},{"level":2,"title":"QA","slug":"qa","link":"#qa","children":[]},{"level":2,"title":"开发","slug":"开发","link":"#开发","children":[]}],"git":{"createdTime":1678632140000,"updatedTime":1745426363000,"contributors":[{"name":"Brian","username":"Brian","email":"126593039+Rektyfikowany@users.noreply.github.com","commits":3,"url":"https://github.com/Brian"},{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":5,"url":"https://github.com/安稳"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":2,"url":"https://github.com/Andy Hsu"},{"name":"Andy Hsu","username":"Andy Hsu","email":"xhofe@qq.com","commits":1,"url":"https://github.com/Andy Hsu"},{"name":"Patrick-Ze","username":"Patrick-Ze","email":"19711799+Patrick-Ze@users.noreply.github.com","commits":1,"url":"https://github.com/Patrick-Ze"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":3,"url":"https://github.com/安稳"},{"name":"anwen","username":"anwen","email":"anwen_anyi@foxmail.com","commits":1,"url":"https://github.com/anwen"}]},"readingTime":{"minutes":2.07,"words":621},"filePathRelative":"zh/guide/drivers/baidu_share.md","localizedDate":"2023年3月12日","autoDesc":true}');export{m as comp,v as data};
