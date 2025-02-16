import{_ as e,c as o,b as a,o as n}from"./app-K34Aos0E.js";const r={};function i(c,t){return n(),o("div",null,t[0]||(t[0]=[a('<h1 id="_2fa" tabindex="-1"><a class="header-anchor" href="#_2fa"><span>2FA</span></a></h1><p>要启用双因素身份验证，需要在手机上安装支持 TOTP 的验证器，例如 <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" target="_blank" rel="noopener noreferrer">Google Authenticator</a>，<a href="https://support.microsoft.com/zh-cn/account-billing/%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85microsoft-authenticator%E5%BA%94%E7%94%A8-351498fc-850a-45da-b7b6-27e523b8702a" target="_blank" rel="noopener noreferrer">Microsoft Authenticator</a></p><p>然后登录 AList 管理并进入“个人资料”页面，点击“启用 2FA”按钮，用你的 2FA 应用扫描二维码，输入你的 2FA 应用生成的代码。</p><p>最后，单击“验证”按钮启用 2FA。</p><ul><li>每个用户都可以设置不同的&quot;2FA&quot;验证，如何解除看下面的方法</li></ul><br><h2 id="如何解除2fa验证" tabindex="-1"><a class="header-anchor" href="#如何解除2fa验证"><span><strong>如何解除2FA验证：</strong></span></a></h2><p>一、(≥ v3.15.0)</p><blockquote><p>如果你非Admin账号的2FA忘记了，可以告诉管理员帮你清除掉</p><p>进入后台 --&gt; 用户，点击 &quot;取消两步验证&quot; 即可</p><p>若admin账号的2FA丢失，请看第二步如何清除2FA</p></blockquote><p>二、</p><blockquote><p>如何进入Alist所在的文件夹</p><ol><li><strong>Windows</strong>：进入到Alist所在的文件夹输入：<strong>alist.exe cancel2fa</strong></li><li><strong>Linux</strong> ：也一样进入Alist所在的文件夹输入，<strong>./alist cancel2fa</strong></li><li><strong>docker</strong> ：docker直接输入 <strong>docker exec -it alist ./alist cancel2fa</strong></li></ol><p><strong>以上输入删除后发现还有重启即可~</strong></p></blockquote><p>三、(&gt;3.30.0)</p><blockquote><p>进入后台用户页面，可以看到 <code>取消两步验证</code> 的选项，取消后如果还有可以选择重新启动一下AList</p><ul><li>需要使用新版本，如果没有 <code>取消两步验证</code> 的选项，说明你需要更新版本</li></ul></blockquote>',13)]))}const s=e(r,[["render",i],["__file","2fa.html.vue"]]),p=JSON.parse('{"path":"/zh/guide/advanced/2fa.html","title":"2FA","lang":"zh-CN","frontmatter":{"icon":"iconfont icon-token","order":5,"category":["Guide"],"tag":["Advanced","Guide"],"sticky":true,"star":true,"description":"2FA 要启用双因素身份验证，需要在手机上安装支持 TOTP 的验证器，例如 Google Authenticator，Microsoft Authenticator 然后登录 AList 管理并进入“个人资料”页面，点击“启用 2FA”按钮，用你的 2FA 应用扫描二维码，输入你的 2FA 应用生成的代码。 最后，单击“验证”按钮启用 2FA。 每个...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://alist.nn.ci/guide/advanced/2fa.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/zh/guide/advanced/2fa.html"}],["meta",{"property":"og:site_name","content":"AList文档"}],["meta",{"property":"og:title","content":"2FA"}],["meta",{"property":"og:description","content":"2FA 要启用双因素身份验证，需要在手机上安装支持 TOTP 的验证器，例如 Google Authenticator，Microsoft Authenticator 然后登录 AList 管理并进入“个人资料”页面，点击“启用 2FA”按钮，用你的 2FA 应用扫描二维码，输入你的 2FA 应用生成的代码。 最后，单击“验证”按钮启用 2FA。 每个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-02T10:02:51.000Z"}],["meta",{"property":"article:tag","content":"Advanced"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-03-02T10:02:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2FA\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-02T10:02:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"如何解除2FA验证：","slug":"如何解除2fa验证","link":"#如何解除2fa验证","children":[]}],"git":{"createdTime":1662881160000,"updatedTime":1709373771000,"contributors":[{"name":"Noah Hsu","username":"Noah Hsu","email":"i@nn.ci","commits":3,"url":"https://github.com/Noah Hsu"},{"name":"purofle","username":"purofle","email":"purofle@gmail.com","commits":1,"url":"https://github.com/purofle"},{"name":"flower_elf","username":"flower_elf","email":"47104993+flower-elf@users.noreply.github.com","commits":1,"url":"https://github.com/flower_elf"},{"name":"Chi_Tang","username":"Chi_Tang","email":"chitang@duck.com","commits":1,"url":"https://github.com/Chi_Tang"},{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":4,"url":"https://github.com/安稳"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":1,"url":"https://github.com/安稳"}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"zh/guide/advanced/2fa.md","localizedDate":"2022年9月11日","autoDesc":true}');export{s as comp,p as data};
