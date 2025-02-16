import{_ as t,a as n,b as a}from"./lanzou_add-6YGtB_UJ.js";import{_ as i,c as r,b as l,a as s,r as c,o as d}from"./app-K34Aos0E.js";const p={};function h(m,e){const o=c("Mermaid");return d(),r("div",null,[e[0]||(e[0]=l('<h1 id="蓝奏云盘" tabindex="-1"><a class="header-anchor" href="#蓝奏云盘"><span>蓝奏云盘</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>蓝奏网盘挂载有三种<strong>模式（类型）</strong>，分别是 <strong>账户，cookie</strong> 和 <strong>链接</strong></p><ul><li><strong>账户</strong>：可以显示自己网盘所有文件，只需要填写帐号密码，会自动帮你刷新cookie</li><li><strong>cookie</strong>：可以显示自己网盘所有文件，但是需要提供网盘的cookie</li><li><strong>链接</strong>：只能显示链接里面的内容（不需要提供cookie就可以挂载）</li></ul><p>⚠️ 推荐使用<strong>账户</strong>的方式挂载：</p><ul><li>cookie模式需要手动更换cookie</li><li>用链接模式总是会抽风不知道怎么回事</li></ul></div><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id"><span><strong>根文件夹ID</strong></span></a></h2><p>蓝奏云盘根目录ID，默认为<code>-1</code>，如果使用<code>链接</code>类型挂载根文件夹ID请看<a href="#%E5%A1%AB%E5%86%99%E8%AF%B4%E6%98%8E">填写说明</a>的第三条</p><ul><li><strong>其他文件夹ID</strong><ul><li>两种获取方式（看下图即可）</li><li><img src="'+t+'" alt="LanZou folder_id" style="zoom:50%;"></li></ul></li></ul><h2 id="账户" tabindex="-1"><a class="header-anchor" href="#账户"><span><strong>账户</strong></span></a></h2><p>只需要填写自己的蓝奏云帐号密码</p><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h2><p>登录自己的 <a href="https://pc.woozooo.com/" target="_blank" rel="noopener noreferrer"><strong>蓝奏云盘</strong></a> 账号，然后F12打开开发者模式，就能找到 <code>Cookie</code>，没有具体的，例如图片中左侧的随便点一个然后有右图蓝色部分的 <code>Cookie</code> 即可.</p><p><img src="'+n+'" alt="lanzou" loading="lazy"></p><h2 id="分享链接和分享密码" tabindex="-1"><a class="header-anchor" href="#分享链接和分享密码"><span><strong>分享链接和分享密码</strong></span></a></h2><ul><li><strong>分享链接</strong>：在蓝奏云盘内随便生成一个分享链接 <ul><li>小提示 ：链接里面的 <strong>lanzouX</strong>，最后这个默认的 <strong>X</strong>内容有时候有些地区打不开，可以自己更换一下试试看比如换成 i,x,u,t 等等等反正好多自己试试看就行.</li></ul></li><li><strong>分享密码</strong> ：链接的密码</li></ul><h2 id="修复文件信息" tabindex="-1"><a class="header-anchor" href="#修复文件信息"><span><strong>修复文件信息</strong></span></a></h2><p>需要 <strong>WebDav</strong> 服务的，需要打开它</p><h2 id="错误信息" tabindex="-1"><a class="header-anchor" href="#错误信息"><span><strong>错误信息</strong></span></a></h2><p>使用Cookie类型或者账户类型添加提示<code>not find file page param</code>错误是因为蓝奏云更换了域名</p><ul><li>解决方案：建议使用账户类型添加 <ul><li>把分享链接改成 <code>https://wwop.lanzoul.com</code>保存即可，如果还是不可以，右下角刷新一下。</li><li>后续蓝奏可能还会更改。</li></ul></li></ul><h2 id="填写说明" tabindex="-1"><a class="header-anchor" href="#填写说明"><span><strong>填写说明</strong></span></a></h2><ol><li><p><strong>账户模式</strong>：类型选择<code>账户</code>，填写<code>账户</code>和<code>密码</code>选项，以及<code>根文件夹ID</code>(选填,默认为根目录全部文件)</p></li><li><p><strong>Cookie模式</strong>：类型选择<code>Cookie</code>，填写<code>Cookie</code>，以及<code>根文件夹ID</code>(选填,默认为根目录全部文件)</p></li><li><p><strong>链接模式</strong>：类型选择<code>链接</code>，填写<code>分享链接</code>和<code>根文件夹ID</code>以及 <code>分享密码(如果有密码)</code>两个选项就可以</p><ul><li><p>分享链接是 👉 <a href="https://xxx.lanzou.com/aaabbbccc" target="_blank" rel="noopener noreferrer">https://xxx.lanzou.com/aaabbbccc</a> 👈 这种格式的</p></li><li><p>在<code>分享链接</code>填写：<a href="https://xxx.lanzou.com" target="_blank" rel="noopener noreferrer">https://xxx.lanzou.com</a></p></li><li><p>在<code>根文件夹ID</code>填写：aaabbbccc</p></li><li><p>在<code>分享密码</code>填写：有密码就写没有就不用写</p></li></ul></li></ol><p><img src="'+a+'" alt="lanzou" loading="lazy"></p><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式"><span><strong>默认使用的下载方式</strong></span></a></h3>',21)),s(o,{id:"mermaid-179",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}const k=i(p,[["render",h],["__file","lanzou.html.vue"]]),b=JSON.parse('{"path":"/zh/guide/drivers/lanzou.html","title":"蓝奏云盘","lang":"zh-CN","frontmatter":{"icon":"iconfont icon-state","order":9,"category":["Guide"],"tag":["Storage","Guide","302"],"sticky":true,"star":true,"description":"蓝奏云盘 提示 蓝奏网盘挂载有三种模式（类型），分别是 账户，cookie 和 链接 账户：可以显示自己网盘所有文件，只需要填写帐号密码，会自动帮你刷新cookie cookie：可以显示自己网盘所有文件，但是需要提供网盘的cookie 链接：只能显示链接里面的内容（不需要提供cookie就可以挂载） ⚠️ 推荐使用账户的方式挂载： cookie模式需...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://alist.nn.ci/guide/drivers/lanzou.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/zh/guide/drivers/lanzou.html"}],["meta",{"property":"og:site_name","content":"AList文档"}],["meta",{"property":"og:title","content":"蓝奏云盘"}],["meta",{"property":"og:description","content":"蓝奏云盘 提示 蓝奏网盘挂载有三种模式（类型），分别是 账户，cookie 和 链接 账户：可以显示自己网盘所有文件，只需要填写帐号密码，会自动帮你刷新cookie cookie：可以显示自己网盘所有文件，但是需要提供网盘的cookie 链接：只能显示链接里面的内容（不需要提供cookie就可以挂载） ⚠️ 推荐使用账户的方式挂载： cookie模式需..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/drivers/lanzou/lanzou1.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-27T08:56:01.000Z"}],["meta",{"property":"article:tag","content":"Storage"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:tag","content":"302"}],["meta",{"property":"article:modified_time","content":"2024-01-27T08:56:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"蓝奏云盘\\",\\"image\\":[\\"https://alist.nn.ci/img/drivers/lanzou/lanzou1.png\\",\\"https://alist.nn.ci/img/drivers/lanzou/lanzou_add.png\\"],\\"dateModified\\":\\"2024-01-27T08:56:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"根文件夹ID","slug":"根文件夹id","link":"#根文件夹id","children":[]},{"level":2,"title":"账户","slug":"账户","link":"#账户","children":[]},{"level":2,"title":"Cookie","slug":"cookie","link":"#cookie","children":[]},{"level":2,"title":"分享链接和分享密码","slug":"分享链接和分享密码","link":"#分享链接和分享密码","children":[]},{"level":2,"title":"修复文件信息","slug":"修复文件信息","link":"#修复文件信息","children":[]},{"level":2,"title":"错误信息","slug":"错误信息","link":"#错误信息","children":[]},{"level":2,"title":"填写说明","slug":"填写说明","link":"#填写说明","children":[{"level":3,"title":"默认使用的下载方式","slug":"默认使用的下载方式","link":"#默认使用的下载方式","children":[]}]}],"git":{"createdTime":1673525121000,"updatedTime":1706345761000,"contributors":[{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":6,"url":"https://github.com/安稳"},{"name":"Noah Hsu","username":"Noah Hsu","email":"i@nn.ci","commits":2,"url":"https://github.com/Noah Hsu"},{"name":"expload","username":"expload","email":"38076731+expload233@users.noreply.github.com","commits":1,"url":"https://github.com/expload"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":1,"url":"https://github.com/Andy Hsu"},{"name":"Patrick-Ze","username":"Patrick-Ze","email":"19711799+Patrick-Ze@users.noreply.github.com","commits":1,"url":"https://github.com/Patrick-Ze"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":2,"url":"https://github.com/安稳"}]},"readingTime":{"minutes":2.77,"words":830},"filePathRelative":"zh/guide/drivers/lanzou.md","localizedDate":"2023年1月12日","autoDesc":true}');export{k as comp,b as data};
