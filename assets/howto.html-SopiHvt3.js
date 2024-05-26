import{_ as d,r as l,o as r,c,b as e,e as n,a as s,w as t,f as i}from"./app-p5yD82Ir.js";const h={},u=e("h3",{id:"如何为文件-文件夹添加密码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何为文件-文件夹添加密码","aria-hidden":"true"},"#"),n(),e("strong",null,"如何为文件/文件夹添加密码？")],-1),p=e("h3",{id:"如何对子目录进行反向代理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何对子目录进行反向代理","aria-hidden":"true"},"#"),n(),e("strong",null,"如何对子目录进行反向代理？")],-1),g={href:"https://nn.ci/alist",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"正常安装",-1),_=e("code",null,"https://nn.ci/alist",-1),b=e("code",null,"/alist",-1),m=e("li",null,"在 nginx 中添加反向代理配置",-1),k=i(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /alist/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Range <span class="token variable">$http_range</span></span><span class="token punctuation">;</span>
	  <span class="token directive"><span class="token keyword">proxy_set_header</span> If-Range <span class="token variable">$http_if_range</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5244/alist/</span><span class="token punctuation">;</span>
    <span class="token comment"># the max size of file to upload</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">20000m</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="忘记密码怎么办" tabindex="-1"><a class="header-anchor" href="#忘记密码怎么办" aria-hidden="true">#</a> <strong>忘记密码怎么办？</strong></h3><p>如果您是站点的所有者，您可以通过在终端中运行 <code>./alist admin</code> 来获取管理员账号信息。</p><p>否则，您可以要求站点所有者重置密码。</p>`,4),f={class:"hint-container tip"},x=e("p",{class:"hint-container-title"},"提示",-1),w={href:"https://github.com/alist-org/alist/pull/3074",target:"_blank",rel:"noopener noreferrer"},y=i(`<h4 id="低于v3-25-0版本" tabindex="-1"><a class="header-anchor" href="#低于v3-25-0版本" aria-hidden="true">#</a> <strong>低于v3.25.0版本</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./alist admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="高于v3-25-0版本" tabindex="-1"><a class="header-anchor" href="#高于v3-25-0版本" aria-hidden="true">#</a> <strong>高于v3.25.0版本</strong></h4><p>3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 <strong><code>随机生成</code></strong> 或者 <strong><code>手动设置</code></strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 随机生成一个密码</span>
./alist admin random
<span class="token comment"># 手动设置一个密码,\`NEW_PASSWORD\`是指你需要设置的密码</span>
./alist admin <span class="token builtin class-name">set</span> NEW_PASSWORD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何修改监听端口-​" tabindex="-1"><a class="header-anchor" href="#如何修改监听端口-​" aria-hidden="true">#</a> <strong>如何修改监听端口 ​</strong></h3>`,6),L=e("h3",{id:"如何更新",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何更新","aria-hidden":"true"},"#"),n(),e("strong",null,"如何更新")],-1),q=e("p",null,"除了 changelog 中标注的不兼容版本，通常可以直接替换二进制文件进行更新。",-1),z=e("p",null,"对于 docker 用户，只需删除旧的容器并拉取新的docker image，然后运行它即可。",-1),R=e("h3",{id:"如何允许访客上传文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何允许访客上传文件","aria-hidden":"true"},"#"),n(),e("strong",null,"如何允许访客上传文件")],-1),$=i('<h3 id="如何去掉底部的-由-alist-驱动-​" tabindex="-1"><a class="header-anchor" href="#如何去掉底部的-由-alist-驱动-​" aria-hidden="true">#</a> <strong>如何去掉底部的&quot;由 AList 驱动&quot;？​</strong></h3><p>根据我们的开源许可:<br> 此最强copyleft许可的权限以在同一许可下提供许可作品和修改的完整源代码为条件，其中包括使用许可作品的较大作品。<strong>版权和许可声明必须保留</strong> 贡献者明确授予专利权。当使用修改后的版本通过网络提供服务时，必须提供修改后版本的完整源代码。</p><h3 id="添加-189-云存储时-设备-id-不存在-需要二次设备验证-​" tabindex="-1"><a class="header-anchor" href="#添加-189-云存储时-设备-id-不存在-需要二次设备验证-​" aria-hidden="true">#</a> <strong>添加 189 云存储时：设备 ID 不存在，需要二次设备验证 ​</strong></h3><p>可能是触发了风控。更改密码后，再次添加即可。</p><h3 id="添加-天翼云盘客户端-存储时-提示-need-img-validate-code-验证码" tabindex="-1"><a class="header-anchor" href="#添加-天翼云盘客户端-存储时-提示-need-img-validate-code-验证码" aria-hidden="true">#</a> <strong>添加 天翼云盘客户端 存储时：提示 need img validate code: 验证码</strong></h3>',5),B=e("li",null,"点击编辑，把刚刚看到的验证码写进配置里面点击保存",-1),C=e("li",null,[n("点击编辑，把不使用OCR 按钮打开 "),e("sup",null,"(荐)")],-1),E=e("strong",null,"Ocr接口",-1),I=e("li",null,[e("strong",null,"天翼云盘"),n("驱动因Web端登录已更换为滑动验证码，"),e("strong",null,"不再支持ocr与手动输入"),n("，若需要验证码请使用添加"),e("code",null,"Cookie进行登录"),n("或使用"),e("code",null,"天翼云盘客户端"),n("驱动("),e("sup",null,"注意看是天翼云盘驱动不是天翼云盘客户端"),n(")")],-1),N=i(`<h3 id="tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers-no-such-host" tabindex="-1"><a class="header-anchor" href="#tls-handshake-timeout-read-connection-reset-by-peer-dns-lookup-failed-connect-connection-refused-client-timeout-exceeded-while-awaiting-headers-no-such-host" aria-hidden="true">#</a> <strong>TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers? / no such host?</strong></h3><p>诸如此类的网络问题，请自行排查解决。不要为此提出任何的issue</p><h3 id="怎么添加epub阅读" tabindex="-1"><a class="header-anchor" href="#怎么添加epub阅读" aria-hidden="true">#</a> <strong>怎么添加epub阅读</strong></h3><p>后台 ——&gt;设置——&gt;预览——&gt;Iframe 预览，写在PDF后面</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>/*下面的这个逗号也是哦，这个注释就不要复制了，从第二行开始复制*/
,
  &quot;epub&quot;: {
    &quot;EPUB.js&quot;:&quot;/static/epub.js/viewer.html?url=$e_url&quot;
  }
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P=e("br",null,null,-1),S=e("br",null,null,-1),W=e("br",null,null,-1),A=i('<h3 id="如何快速定位bug" tabindex="-1"><a class="header-anchor" href="#如何快速定位bug" aria-hidden="true">#</a> <strong>如何快速定位Bug</strong></h3><p>如果发现Bug，但是<code>log.log</code>的日志不详细，可以尝试在 启动时候添加 <code>--debug</code> 参数启动</p><p>建议在使用<code>--debug</code> 参数启动之前将 <strong>AList目录下的日志文件<code>/log/log.log</code> 清空</strong>，这样方便开发者们后续快速定位问题</p><div class="hint-container danger"><p class="hint-container-title">警告</p><p>使用<code>--debug</code>参数启动时，会有一些敏感数据 例如 <strong><code>账号密码，刷新令牌</code></strong> 等，所以如果在你发给别人之前需要先处理一下脱敏</p></div><ul><li><strong>Windows</strong>：<code>alist.exe server --debug</code></li><li><strong>Linux</strong>：<code>./alist server --debug</code></li><li><strong>Mac</strong>：暂时未知，可能也是可以加 <code>--debug</code> 参数启动</li><li><strong>Docker</strong>：<code>docker exec -it alist ./alist server --debug</code></li></ul><p>启动后拿到相关日志，如何停止? <code>Ctrl+c</code> 可以使程序停止运行（或者简单粗暴直接关闭程序）</p>',6);function D(F,O){const a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),c("div",null,[u,e("p",null,[n("添加"),s(a,{to:"/zh/guide/advanced/meta.html"},{default:t(()=>[n("元信息")]),_:1})]),p,e("p",null,[n("使用 nginx 反向代理到 "),e("a",g,[n("https://nn.ci/alist"),s(o)]),n(" 的示例：")]),e("ul",null,[v,e("li",null,[n("将 "),s(a,{to:"/zh/config/configuration.html#site_url"},{default:t(()=>[n("site_url")]),_:1}),n(" 设置为 "),_,n(" 或者仅"),b,n(", 然后重启alist")]),m]),k,e("div",f,[x,e("p",null,[n("如果你使用v3.9.0及以上版本，你需要先停止alist服务因为这个pr: "),e("a",w,[n("https://github.com/alist-org/alist/pull/3074"),s(o)])])]),y,e("p",null,[n("参考"),s(a,{to:"/zh/config/configuration.html#port"},{default:t(()=>[n("config")]),_:1})]),L,q,z,R,e("p",null,[n("添加"),s(a,{to:"/zh/guide/advanced/meta.html"},{default:t(()=>[n("元信息")]),_:1}),n('，并启用"写入"')]),$,e("ul",null,[B,C,e("li",null,[n("或者自己进行搭建"),s(a,{to:"/zh/config/global.html#ocr-api"},{default:t(()=>[E]),_:1})]),I]),N,e("p",null,[n('3.7.x 版本及更高的版本已经支持 ".epub" 阅读'),P,n(" 但是需要自己手动添加(因为已经创建过数据库了 不好给你覆盖会出错)"),S,n(" 如果是第一次安装启动（3.7.x版本及更高的版本）不用手动添加"),W,n(" 如果设置了二级目录反代，请在"),s(a,{to:"/zh/config/configuration.html#site-url"},{default:t(()=>[n("site_url")]),_:1}),n("中自行添加相应前缀，然后重启AList才会生效")]),A])}const T=d(h,[["render",D],["__file","howto.html.vue"]]);export{T as default};