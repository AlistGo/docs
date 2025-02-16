import{_ as u}from"./ref_token-3a8nVhvM.js";import{_ as k,c as m,b as s,e,a as n,f as t,g as l,r as a,o as c}from"./app-K34Aos0E.js";const b={},y={id:"从-已挂载的存储-中引用认证、令牌等-同一个token多个网盘使用",tabindex:"-1"},A={class:"header-anchor",href:"#从-已挂载的存储-中引用认证、令牌等-同一个token多个网盘使用"};function f(v,i){const h=a("Badge"),p=a("RouteLink"),d=a("Mermaid"),g=a("Tabs");return c(),m("div",null,[i[13]||(i[13]=s('<h1 id="通用项" tabindex="-1"><a class="header-anchor" href="#通用项"><span>通用项</span></a></h1><h2 id="挂载路径" tabindex="-1"><a class="header-anchor" href="#挂载路径"><span><strong>挂载路径</strong></span></a></h2><p>唯一标识，即要挂载到的位置，如果要挂载到根目录，就是 <code>/</code></p><br><h2 id="序号" tabindex="-1"><a class="header-anchor" href="#序号"><span><strong>序号</strong></span></a></h2><p>当有多个账户时，用于排序，越小越靠前，可以填写负数</p><br><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注"><span><strong>备注</strong></span></a></h2><p>随便你想填什么，只是提醒你这个存储是什么</p>',9)),e("h3",y,[e("a",A,[e("span",null,[i[0]||(i[0]=e("strong",null,[t("从 "),e("code",null,"已挂载的存储"),t(" 中引用认证、令牌等，同一个Token多个网盘使用")],-1)),i[1]||(i[1]=t()),n(h,{text:"≥ 3.42.0",type:"info",vertical:"middle"})])])]),i[14]||(i[14]=s('<p>目前仅支持如下网盘：</p><ul><li>中国移动云盘</li><li>阿里云盘Open</li><li>天翼云盘客户端</li><li>123云盘分享（引用123云盘）</li></ul><p>在存储设置中将<code>备注(Remark)</code>的第一行设置为：<strong>ref:/挂载路径</strong></p><ul><li><a href="https://github.com/AlistGo/alist/pull/7805" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/pull/7805</a></li></ul><p><img src="'+u+'" alt="" loading="lazy"></p><br><h2 id="启用签名" tabindex="-1"><a class="header-anchor" href="#启用签名"><span><strong>启用签名</strong></span></a></h2><p>对文件进行签名加密(不会需要密码)，仅对本驱动生效，如果别的没启用签名也没设置<code>签名全部</code>和<code>元信息加密</code>其他的不会进行签名</p><p>使用场景：不想开启全部签名，也不想设置元信息加密，只想对某驱动进行签名加密防止被扫</p><p>影响范围：<code>设置--&gt;全局--&gt;签名所有</code> &gt; <code>元信息目录加密</code> &gt; <code>单驱动签名</code></p><br><h2 id="禁用索引" tabindex="-1"><a class="header-anchor" href="#禁用索引"><span><strong>禁用索引</strong></span></a></h2><p>允许用户禁用存储索引。</p><ul><li>例如索引选项中的<code>忽略索引</code>，启用<code>禁用索引</code>后不需要再去配置了，这样也更方便一些</li></ul><p><a href="https://github.com/AlistGo/alist/pull/7730" target="_blank" rel="noopener noreferrer">alist#7730</a>、<a href="https://github.com/AlistGo/alist-web/pull/219" target="_blank" rel="noopener noreferrer">alist-web#219</a></p><br><h2 id="缓存过期" tabindex="-1"><a class="header-anchor" href="#缓存过期"><span><strong>缓存过期</strong></span></a></h2><p>目录结构的缓存时间。</p><br><h2 id="web-代理" tabindex="-1"><a class="header-anchor" href="#web-代理"><span><strong>Web 代理</strong></span></a></h2>',20)),e("p",null,[i[3]||(i[3]=t("网页预览、下载和直接链接是否通过中转。如果你打开此项，建议你设置")),n(p,{to:"/zh/config/configuration.html#site_url"},{default:l(()=>i[2]||(i[2]=[t("site_url")])),_:1}),i[4]||(i[4]=t("，以帮助alist更好的工作。"))]),i[15]||(i[15]=s('<hr><ul><li>Web代理：是使用网页时候的策略，默认为本地代理，如果填写了代理URL并且启用了Web代理使用的是代理URL</li><li>WebDAV策略：是在使用WebDAV功能时候的选项， <ul><li>如果有302选项默认为302，如果没有302选项默认为本地代理，如果要使用代理URL请填写并且手动切换到代理URL策略</li></ul></li></ul><p>两者是不同的配置</p><br><h2 id="webdav-策略" tabindex="-1"><a class="header-anchor" href="#webdav-策略"><span><strong>WebDAV 策略</strong></span></a></h2><ul><li>302 重定向：重定向到真实链接</li><li>使用代理 URL：重定向到代理 URL</li><li>本机代理：直接通过本地中转返回数据（最佳兼容性）</li></ul><hr><ul><li>302重定向：虽然不会消耗流量，但是不建议共享使用，有封禁账户的风险</li><li>代理URL：会消耗搭建代理URL的流量</li><li>本地代理：会消耗搭建AList设备的流量</li></ul><h3 id="三种模式说明" tabindex="-1"><a class="header-anchor" href="#三种模式说明"><span><strong>三种模式说明</strong></span></a></h3>',9)),n(d,{id:"mermaid-173",code:"eJylUU1LAlEUXTu/YpYGDUTtggIrF4GLEFpZi4giQQpMaNEEY35nfpFlqaChaeBHimKT49SP6d03M/+i9+apuZA2DQzcd949555znyAInM/t8xyt8itLy0YkAe08pDPfkh8pFS0d3vV6SI2LTSh2GMJRyrHn7OLw5MDr4x1OzmK3atlXHH3HdwmkFm0O97lP7wQIZtvZ5vdOeb1eg1RGK8gQ6hGItaEhQR7pNatw8gVnBxDtQEZFShVGEtTjOFbXn28XOIvNZWVtC/ucZcOK1DIBN11jk04HQbcuZ21eEVtra+s28ts5nny0ErVCn8xBSpKJoVFZU56IGJJbRq6Pc2WkKEi9x4mSLuWoN7IUPaAiOa6rKlTz8NWAThcXY6wWN5i0IKyLTBFCURLVkPxUd2JO3KQNEE5o2e4U1NUmXYo53lzSzBl9xCGdXDSN0claPmhIJRjWaCOkHiDcQ8Pk9IWM6wqSJa3xhuQbRiDBxnoT5t9WcboFytB8OcLQ259QjYhbv67n3f8/wIzqTASzPzggfBpnXhDuB/KHmYI="}),i[16]||(i[16]=e("br",null,null,-1)),i[17]||(i[17]=e("h2",{id:"下载代理-url",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载代理-url"},[e("span",null,[e("strong",null,"下载代理 URL")])])],-1)),i[18]||(i[18]=e("p",null,"开启代理时不填写此字段，默认使用本机进行传输。提供了下面两种代理方式：",-1)),n(g,{id:"181",data:[{id:"cloudflare workers"},{id:"通用二进制"}]},{title0:l(({value:r,isActive:o})=>i[5]||(i[5]=[t("cloudflare workers")])),title1:l(({value:r,isActive:o})=>i[6]||(i[6]=[t("通用二进制")])),tab0:l(({value:r,isActive:o})=>i[7]||(i[7]=[e("p",null,"可以使用 Cloudflare Workers 做代理，这里填写 Workers 地址即可。",-1),e("p",null,[t("Workers 代码可以在 "),e("a",{href:"https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js",target:"_blank",rel:"noopener noreferrer"},"https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js"),t(" 找到，实际使用时需要替换其中的这两个变量：")],-1),e("ul",null,[e("li",null,[t("ADDRESS: 你的 AList 地址，必须加上协议头，后面不能跟 "),e("code",null,"/"),t("。如 "),e("code",null,"https://pan.nn.ci"),t("；")]),e("li",null,"TOKEN: 在 AList 管理页面中进入“其他设置”得到；"),e("li",null,[t("WORKER_ADDRESS: 你的 Worker 地址，通常与 "),e("strong",null,"下载代理URL"),t(" 相同。")])],-1),e("p",null,[t("⚠️ Cloudflare Workers 免费CDN支持兼容(不论国内还是国外)的只有 "),e("strong",null,"http80端口"),t(" 和 "),e("strong",null,"https443端口"),t("，来自群友测试")],-1),e("ul",null,[e("li",null,[t("在Alist后台挂载配置时 填写 "),e("strong",null,"下载代理URL"),t(" 时候的 链接结尾 不可以带 "),e("code",null,"/")])],-1),e("p",null,[t("若看不懂"),e("a",{href:"https://anwen-anyi.github.io/index/11-durl.html",target:"_blank",rel:"noopener noreferrer"},[e("strong",null,"有拆解详细")]),t("的教程")],-1),e("p",null,null,-1)])),tab1:l(({value:r,isActive:o})=>i[8]||(i[8]=[e("p",null,[t("也可以使用另一台机器进行代理，在 "),e("a",{href:"https://github.com/alist-org/alist-proxy/releases",target:"_blank",rel:"noopener noreferrer"},"https://github.com/alist-org/alist-proxy/releases"),t(" 下载程序并通过 "),e("code",null,"./alist-proxy -help"),t(" 查看使用方法。")],-1),e("p",null,[t("如果不懂有详细"),e("a",{href:"https://www.bilibili.com/video/BV17N411S7fg/",target:"_blank",rel:"noopener noreferrer"},[e("strong",null,"视频教程")])],-1)])),_:1}),i[19]||(i[19]=s('<p>你甚至可以开发自己的代理程序，一般步骤是：</p><ul><li>下载时会请求 <code>PROXY_URL/path?sign=sign_value</code></li><li>在代理程序中验证 sign，sign 的计算方法为：</li></ul><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> to_sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">expireTimeStamp</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> _sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> safeBase64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">hmac_sha256</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">to_sign</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">TOKEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> sign</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> `</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">_sign</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">${</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">expireTimeStamp</span><span style="--shiki-light:#CA1243;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3)),e("p",null,[i[10]||(i[10]=e("code",null,"TOKEN",-1)),i[11]||(i[11]=t("即管理员账户的")),n(p,{to:"/zh/config/other.html#token"},{default:l(()=>i[9]||(i[9]=[t("token")])),_:1}),i[12]||(i[12]=t("."))]),i[20]||(i[20]=s('<ul><li>验证签名正确后，请求 <code>HOST/api/fs/link</code>，可以得到文件的 URL 和要携带的请求头</li><li>使用信息请求和返回</li></ul><br><h2 id="排序相关" tabindex="-1"><a class="header-anchor" href="#排序相关"><span><strong>排序相关</strong></span></a></h2><ul><li>排序方式：按什么排序</li><li>排序方向：排序方向是升序还是降序</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>有些驱动器使用自己的排序方法，可能会有所不同。</p></div><br><h2 id="提取文件夹" tabindex="-1"><a class="header-anchor" href="#提取文件夹"><span><strong>提取文件夹</strong></span></a></h2><ul><li>提取到前面：排序时将所有文件夹放在前面</li><li>提取到后面：排序时将所有文件夹放在后面</li></ul>',8))])}const x=k(b,[["render",f],["__file","common.html.vue"]]),B=JSON.parse('{"path":"/zh/guide/drivers/common.html","title":"通用项","lang":"zh-CN","frontmatter":{"icon":"iconfont icon-state","order":1,"category":["Guide"],"tag":["Storage","Guide"],"sticky":true,"star":true,"description":"通用项 挂载路径 唯一标识，即要挂载到的位置，如果要挂载到根目录，就是 / 序号 当有多个账户时，用于排序，越小越靠前，可以填写负数 备注 随便你想填什么，只是提醒你这个存储是什么 从 已挂载的存储 中引用认证、令牌等，同一个Token多个网盘使用 目前仅支持如下网盘： 中国移动云盘 阿里云盘Open 天翼云盘客户端 123云盘分享（引用123云盘） ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://alist.nn.ci/guide/drivers/common.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/zh/guide/drivers/common.html"}],["meta",{"property":"og:site_name","content":"AList文档"}],["meta",{"property":"og:title","content":"通用项"}],["meta",{"property":"og:description","content":"通用项 挂载路径 唯一标识，即要挂载到的位置，如果要挂载到根目录，就是 / 序号 当有多个账户时，用于排序，越小越靠前，可以填写负数 备注 随便你想填什么，只是提醒你这个存储是什么 从 已挂载的存储 中引用认证、令牌等，同一个Token多个网盘使用 目前仅支持如下网盘： 中国移动云盘 阿里云盘Open 天翼云盘客户端 123云盘分享（引用123云盘） ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/drivers/ref_token.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-07T11:58:02.000Z"}],["meta",{"property":"article:tag","content":"Storage"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2025-02-07T11:58:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通用项\\",\\"image\\":[\\"https://alist.nn.ci/img/drivers/ref_token.png\\"],\\"dateModified\\":\\"2025-02-07T11:58:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"挂载路径","slug":"挂载路径","link":"#挂载路径","children":[]},{"level":2,"title":"序号","slug":"序号","link":"#序号","children":[]},{"level":2,"title":"备注","slug":"备注","link":"#备注","children":[{"level":3,"title":"从 已挂载的存储 中引用认证、令牌等，同一个Token多个网盘使用","slug":"从-已挂载的存储-中引用认证、令牌等-同一个token多个网盘使用","link":"#从-已挂载的存储-中引用认证、令牌等-同一个token多个网盘使用","children":[]}]},{"level":2,"title":"启用签名","slug":"启用签名","link":"#启用签名","children":[]},{"level":2,"title":"禁用索引","slug":"禁用索引","link":"#禁用索引","children":[]},{"level":2,"title":"缓存过期","slug":"缓存过期","link":"#缓存过期","children":[]},{"level":2,"title":"Web 代理","slug":"web-代理","link":"#web-代理","children":[]},{"level":2,"title":"WebDAV 策略","slug":"webdav-策略","link":"#webdav-策略","children":[{"level":3,"title":"三种模式说明","slug":"三种模式说明","link":"#三种模式说明","children":[]}]},{"level":2,"title":"下载代理 URL","slug":"下载代理-url","link":"#下载代理-url","children":[]},{"level":2,"title":"排序相关","slug":"排序相关","link":"#排序相关","children":[]},{"level":2,"title":"提取文件夹","slug":"提取文件夹","link":"#提取文件夹","children":[]}],"git":{"createdTime":1662881160000,"updatedTime":1738929482000,"contributors":[{"name":"Noah Hsu","username":"Noah Hsu","email":"i@nn.ci","commits":9,"url":"https://github.com/Noah Hsu"},{"name":"Chi_Tang","username":"Chi_Tang","email":"chitang@duck.com","commits":1,"url":"https://github.com/Chi_Tang"},{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":9,"url":"https://github.com/安稳"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":2,"url":"https://github.com/Andy Hsu"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":3,"url":"https://github.com/安稳"},{"name":"sigvoid","username":"sigvoid","email":"easlandll@gmail.com","commits":1,"url":"https://github.com/sigvoid"}]},"readingTime":{"minutes":4.57,"words":1372},"filePathRelative":"zh/guide/drivers/common.md","localizedDate":"2022年9月11日","autoDesc":true}');export{x as comp,B as data};
