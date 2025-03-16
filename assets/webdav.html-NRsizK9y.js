import{_ as c,a as p,b as y,c as m,d as x,e as u,f as h,g as b}from"./nas-ygq4lLum.js";import{_ as f,c as v,e,b as d,a as i,g as n,r as o,o as w,f as a}from"./app-BYVCkMFV.js";const k={},A={class:"hint-container tip"};function D(_,t){const s=o("Badge"),g=o("Tabs");return w(),v("div",null,[t[16]||(t[16]=e("h1",{id:"webdav",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webdav"},[e("span",null,"WebDAV")])],-1)),e("div",A,[t[0]||(t[0]=e("p",{class:"hint-container-title"},"提示",-1)),i(s,{text:"≥ v3.42.0",type:"info"}),t[1]||(t[1]=d(" 以上版本需要在用户 =&gt; 权限 打开 <code>Webdav 读取</code> 和 <code>Webdav 管理</code> 这两个权限<ul><li><p>如果只读不修改则只需要打开 <code>Webdav 读取</code> 就可以</p></li><li><p>如果对文件进行增删改需要打开 <code>Webdav 管理</code>权限之外还如需要 <code>创建目录或上传</code>、<code>删除</code>、<code>重命名</code>、<code>移动</code>、<code>复制</code> 等权限，根据自己的需求选择性打开</p></li></ul>",6))]),t[17]||(t[17]=d('<br><h2 id="webdav-配置" tabindex="-1"><a class="header-anchor" href="#webdav-配置"><span><strong>WebDAV 配置</strong></span></a></h2><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Url</td><td>http[s]://domain:port/dav/</td></tr><tr><td>Host</td><td>domain</td></tr><tr><td>路径</td><td>dav</td></tr><tr><td>协议</td><td>http/https</td></tr><tr><td>端口</td><td>与网页端一致</td></tr><tr><td>WebDAV用户名</td><td>与网页端用户名一致</td></tr><tr><td>WebDAV密码</td><td>与网页端密码一致</td></tr></tbody></table><p>不会填写？<a href="#webdav-%E5%A1%AB%E5%86%99%E7%A4%BA%E4%BE%8B">点击查看填写示例</a></p><br><h2 id="webdav-存储支持" tabindex="-1"><a class="header-anchor" href="#webdav-存储支持"><span><strong>WebDAV 存储支持</strong></span></a></h2><table><thead><tr><th>存储类型</th><th style="text-align:center;">列出文件/文件夹</th><th style="text-align:center;">下载文件</th><th style="text-align:center;">创建目录</th><th style="text-align:center;">重命名</th><th style="text-align:center;">移动</th><th style="text-align:center;">复制</th><th style="text-align:center;">上传文件/文件夹</th></tr></thead><tbody><tr><td>本地存储</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>阿里云盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Onedrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>天翼云盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>GoogleDrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>123pan</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>FTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>SFTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>PikPak</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>S3</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>USS</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>WebDAV</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Teambition</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>分秒帧</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>和彩云</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>YandexDisk</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>百度网盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>夸克网盘</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>KodBox</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr></tbody></table><br><h2 id="可以用来挂载webdav的软件" tabindex="-1"><a class="header-anchor" href="#可以用来挂载webdav的软件"><span><strong>可以用来挂载WebDav的软件</strong></span></a></h2><ol><li><strong>Windows</strong><ul><li><a href="https://potplayer.daum.net/" target="_blank" rel="noopener noreferrer">Potplayer</a>，<a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>，<a href="https://www.raidrive.com/" target="_blank" rel="noopener noreferrer">RaiDrive</a>，<a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>，<a href="https://www.onecommander.com/" target="_blank" rel="noopener noreferrer">OneCommander</a>，<a href="https://mountainduck.io/" target="_blank" rel="noopener noreferrer">Mountain Duck</a>，<a href="https://www.netdrive.net/" target="_blank" rel="noopener noreferrer">netdrive</a> ❌，<a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a>，<a href="https://www.aimp.ru/" target="_blank" rel="noopener noreferrer">AIMP</a></li></ul></li><li><strong>Android</strong><ul><li><a href="https://www.alipan.com/s/cf3p39UXkxa" target="_blank" rel="noopener noreferrer">Nplayer</a>，<a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>，ES文件管理器，<a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>，<a href="https://www.alipan.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526" target="_blank" rel="noopener noreferrer">nova魔改</a>，<a href="https://www.alipan.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07" target="_blank" rel="noopener noreferrer">reex</a>，cx 文件管理器，Solid Explorer，<a href="https://www.lonelycatgames.com/apps/xplore" target="_blank" rel="noopener noreferrer">X-plore File Manager</a>，<a href="https://mixplorer.com/" target="_blank" rel="noopener noreferrer">MiXplorer</a></li></ul></li><li><strong>IOS</strong><ul><li><a href="https://zh.okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>，Nplayer，<a href="https://www.kmplayer.com/home" target="_blank" rel="noopener noreferrer">kmplayer</a>，infuse，zFuse, Fileball文件管理器</li></ul></li><li><strong>电视TV</strong><ul><li><a href="https://zh.okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>，<a href="https://www.alipan.com/s/cf3p39UXkxa" target="_blank" rel="noopener noreferrer">Nplayer</a>，<a href="https://kodi.tv/download" target="_blank" rel="noopener noreferrer">kodi</a>，<a href="https://www.alipan.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526" target="_blank" rel="noopener noreferrer">nova魔改</a></li><li>若只看阿里可以使用阿里官方合作的 <ul><li>欢视商店-阿里云盘TV版，网盘播放器-阿里云盘TV版</li></ul></li></ul></li><li><strong>Mac</strong><ul><li><a href="https://zh.okaapps.com/product/1659622164" target="_blank" rel="noopener noreferrer">VidHub</a>，IINA，<a href="https://mountainduck.io/" target="_blank" rel="noopener noreferrer">Mountain Duck</a>，infuse，<a href="https://www.netdrive.net/" target="_blank" rel="noopener noreferrer">netdrive</a>，<a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a></li></ul></li><li><strong>Linux</strong><ul><li>davfs2，<a href="https://rclone.org/" target="_blank" rel="noopener noreferrer">rclone</a></li></ul></li><li><strong>笔记软件</strong><ul><li><a href="https://joplinapp.org/" target="_blank" rel="noopener noreferrer">Joplin </a></li></ul></li></ol><p>若有合适的欢迎补充~</p><h3 id="webdav-填写示例" tabindex="-1"><a class="header-anchor" href="#webdav-填写示例"><span><strong>WebDav 填写示例</strong></span></a></h3><p>举几个填写 <strong><code>WebDav示例</code></strong> 账号密码就是你AList用户的账号密码</p><p>基本是这个写法，软件不同写法也可能不同，如果没有单独留路径选项那正常就是在 站点后面添加<code>/dav</code>选项</p><p>下方顶部不同按钮是可以点击查看的</p>',15)),i(g,{id:"743",data:[{id:"Nplayer"},{id:"reex"},{id:"ES"},{id:"Infuse"},{id:"Fileball"},{id:"Potplayer"},{id:"群辉"}],"tab-id":"WebDav"},{title0:n(({value:r,isActive:l})=>t[2]||(t[2]=[a("Nplayer")])),title1:n(({value:r,isActive:l})=>t[3]||(t[3]=[a("reex")])),title2:n(({value:r,isActive:l})=>t[4]||(t[4]=[a("ES")])),title3:n(({value:r,isActive:l})=>t[5]||(t[5]=[a("Infuse")])),title4:n(({value:r,isActive:l})=>t[6]||(t[6]=[a("Fileball")])),title5:n(({value:r,isActive:l})=>t[7]||(t[7]=[a("Potplayer")])),title6:n(({value:r,isActive:l})=>t[8]||(t[8]=[a("群辉")])),tab0:n(({value:r,isActive:l})=>t[9]||(t[9]=[e("p",null,[e("img",{src:b,alt:"webdav",loading:"lazy"})],-1)])),tab1:n(({value:r,isActive:l})=>t[10]||(t[10]=[e("p",null,[e("img",{src:h,alt:"webdav",loading:"lazy"})],-1)])),tab2:n(({value:r,isActive:l})=>t[11]||(t[11]=[e("div",{class:"image-preview"},[e("img",{src:x}),e("img",{src:u})],-1)])),tab3:n(({value:r,isActive:l})=>t[12]||(t[12]=[e("p",null,[e("img",{src:m,alt:"webdav",loading:"lazy"})],-1)])),tab4:n(({value:r,isActive:l})=>t[13]||(t[13]=[e("p",null,[e("img",{src:y,alt:"webdav",loading:"lazy"})],-1)])),tab5:n(({value:r,isActive:l})=>t[14]||(t[14]=[e("p",null,[e("img",{src:p,alt:"webdav",loading:"lazy"})],-1)])),tab6:n(({value:r,isActive:l})=>t[15]||(t[15]=[e("p",null,[e("img",{src:c,alt:"webdav",loading:"lazy"})],-1)])),_:1})])}const z=f(k,[["render",D],["__file","webdav.html.vue"]]),N=JSON.parse('{"path":"/zh/guide/webdav.html","title":"WebDAV","lang":"zh-CN","frontmatter":{"icon":"iconfont icon-waline","order":9,"category":["Guide"],"tag":["WebDAV","Guide"],"sticky":true,"star":true,"description":"WebDAV 提示 WebDAV 配置 不会填写？点击查看填写示例 WebDAV 存储支持 可以用来挂载WebDav的软件 Windows Potplayer，kmplayer，RaiDrive，kodi，OneCommander，Mountain Duck，netdrive ❌，rclone，AIMP Android Nplayer，kmplayer...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://alist.nn.ci/guide/webdav.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/zh/guide/webdav.html"}],["meta",{"property":"og:site_name","content":"AList文档"}],["meta",{"property":"og:title","content":"WebDAV"}],["meta",{"property":"og:description","content":"WebDAV 提示 WebDAV 配置 不会填写？点击查看填写示例 WebDAV 存储支持 可以用来挂载WebDav的软件 Windows Potplayer，kmplayer，RaiDrive，kodi，OneCommander，Mountain Duck，netdrive ❌，rclone，AIMP Android Nplayer，kmplayer..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/guide/webdav/nplayer.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-16T09:47:08.000Z"}],["meta",{"property":"article:tag","content":"WebDAV"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2025-03-16T09:47:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebDAV\\",\\"image\\":[\\"https://alist.nn.ci/img/guide/webdav/nplayer.png\\",\\"https://alist.nn.ci/img/guide/webdav/reex.png\\",\\"https://alist.nn.ci/img/guide/webdav/infuse.png\\",\\"https://alist.nn.ci/img/guide/webdav/fileball.png\\",\\"https://alist.nn.ci/img/guide/webdav/potplayer.png\\",\\"https://alist.nn.ci/img/guide/webdav/nas.png\\"],\\"dateModified\\":\\"2025-03-16T09:47:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"WebDAV 配置","slug":"webdav-配置","link":"#webdav-配置","children":[]},{"level":2,"title":"WebDAV 存储支持","slug":"webdav-存储支持","link":"#webdav-存储支持","children":[]},{"level":2,"title":"可以用来挂载WebDav的软件","slug":"可以用来挂载webdav的软件","link":"#可以用来挂载webdav的软件","children":[{"level":3,"title":"WebDav 填写示例","slug":"webdav-填写示例","link":"#webdav-填写示例","children":[]}]}],"git":{"createdTime":1662556125000,"updatedTime":1742118428000,"contributors":[{"name":"Noah Hsu","username":"Noah Hsu","email":"i@nn.ci","commits":5,"url":"https://github.com/Noah Hsu"},{"name":"flower_elf","username":"flower_elf","email":"47104993+flower-elf@users.noreply.github.com","commits":1,"url":"https://github.com/flower_elf"},{"name":"Chi_Tang","username":"Chi_Tang","email":"chitang@duck.com","commits":1,"url":"https://github.com/Chi_Tang"},{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":9,"url":"https://github.com/安稳"},{"name":"白隐Hakuin","username":"白隐Hakuin","email":"108911712+Hakuin123@users.noreply.github.com","commits":1,"url":"https://github.com/白隐Hakuin"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":7,"url":"https://github.com/Andy Hsu"},{"name":"Andy Hsu","username":"Andy Hsu","email":"xhofe@qq.com","commits":3,"url":"https://github.com/Andy Hsu"},{"name":"arrheni","username":"arrheni","email":"arrheni@users.noreply.github.com","commits":1,"url":"https://github.com/arrheni"},{"name":"Patrick","username":"Patrick","email":"patrick.shi89@gmail.com","commits":2,"url":"https://github.com/Patrick"},{"name":"dongqisheng520","username":"dongqisheng520","email":"dongqisheng520@gmail.com","commits":1,"url":"https://github.com/dongqisheng520"},{"name":"xixka","username":"xixka","email":"73456104+xixka@users.noreply.github.com","commits":1,"url":"https://github.com/xixka"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":3,"url":"https://github.com/安稳"},{"name":"wzyou","username":"wzyou","email":"42276148+wzyou@users.noreply.github.com","commits":1,"url":"https://github.com/wzyou"},{"name":"AngelaCooljx","username":"AngelaCooljx","email":"cool@gayhub.eu.org","commits":1,"url":"https://github.com/AngelaCooljx"},{"name":"ice yao","username":"ice yao","email":"yao3690093@gmail.com","commits":1,"url":"https://github.com/ice yao"}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"zh/guide/webdav.md","localizedDate":"2022年9月7日","autoDesc":true}');export{z as comp,N as data};
