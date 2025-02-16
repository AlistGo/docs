import{_ as o,a as l,b as a}from"./halalcloud_url-CZdSTSyx.js";import{_ as i,c as n,b as d,a as r,r as s,o as c}from"./app-K34Aos0E.js";const p={};function h(u,e){const t=s("Mermaid");return c(),n("div",null,[e[0]||(e[0]=d('<h1 id="halalcloud" tabindex="-1"><a class="header-anchor" href="#halalcloud"><span>halalcloud</span></a></h1><ul><li><p><code>6盘（halalcloud）</code> Official website：<a href="https://2dland.cn/" target="_blank" rel="noopener noreferrer">https://2dland.cn</a></p><ul><li>Cloud Login：<a href="https://drive.2dland.cn" target="_blank" rel="noopener noreferrer">https://drive.2dland.cn</a></li></ul></li><li><p>Official announcement, document address：<a href="https://2dland.yuque.com/r/organizations/homepage" target="_blank" rel="noopener noreferrer">https://2dland.yuque.com/r/organizations/homepage</a></p></li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Since <code>6盘 (halalcloud)</code> uses the <code>IPFS</code> protocol for storage, the block size is limited to <code>1MB</code>, so <strong>you can only use <code>local proxy</code> for downloading</strong>, and the single-thread speed is slow. <strong>When using it, please try to use multi-threaded download to increase the speed</strong></p></div><br><h2 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id"><span><strong>Root folder file_id</strong></span></a></h2><p>Top address bar path，Root folder file_id is：<code>/</code></p><p>Subfolder: <code>/A folder/C folder/C folder</code></p><br><h2 id="fill-in-the-example" tabindex="-1"><a class="header-anchor" href="#fill-in-the-example"><span><strong>Fill in the example</strong></span></a></h2><p>When adding a 6盘 (halalcloud) driver for the first time, the <code>Refresh token</code> can be left blank. A red error notification will pop up in the upper right corner.</p><p>Return to the storage page and click the refresh button. The previously added driver <code style="font-weight:bold;color:red;">Click Here</code> area will become clickable. Click it to jump to the 6盘(halalcloud) official website to log in.</p><p><img src="'+o+'" alt="" loading="lazy"></p><p><img src="'+l+'" alt="" loading="lazy"></p><p><strong>The webpage will be closed automatically after leaving</strong>. After logging in successfully, please copy the <code>RefreshToken</code> field parameter link in the top address bar in time.</p><ul><li><p>Or copy it to other locations and then obtain the <code>RefreshToken</code> field in the link</p></li><li><p>After copying to other locations, it will automatically be UrlEncoded. Specifically, the <code>RefreshToken</code> field is a string starting with <code>&quot;rt__</code> and ending with <code>&quot;</code><sup>(&quot;is_encoded_to_%22)</sup></p></li><li><p>You can refer to the following extraction example or borrow tools</p></li></ul><br><p>The <span style="font-weight:bold;color:blue;">blue</span> field in the link is the <code>RefreshToken</code> we need</p><div style="border:3px solid red;padding:10px;"><ul><li>Copy the link in the address bar<code>RefreshToken</code>：</li><br><ul><br><li style="font-weight:bold;">Before decoding：</li><ul><li>https%3A%2F%2Fstatic.2dland.cn%2Fuser%2Flanding%2F%3Ftype%3Doauth2-response%26payload%3D%7B%22scope%22%3A%22openid%20profile%20email%20phone%22%2C%22<span style="font-weight:bold;color:#ff00c6;">refreshToken</span>%22%3A<span style="font-weight:bold;color:red;">%22</span><span style="font-weight:bold;color:blue;">rt__2xxxx5_2xxxxxa-4xx7-4xxa-9xx3-exxxxxxxxxx4</span><span style="font-weight:bold;color:red;">%22</span>%2C%22state%22%3A%2210xxxx4d3-4cxa-4xx8-axxb-1xxxf3%22%2C%22callback%22%3A%22at_callback_d4dxxxxxxxxxxxxxxxxxxxxxxxxxef_ly8og7b8%22%7D</li></ul><br><li style="font-weight:bold;">After decoding：</li><ul><li>https://static.2dland.cn/user/landing/?type=oauth2-response&amp;payload={&quot;scope&quot;:&quot;openid profile email phone&quot;,&quot;<span style="font-weight:bold;color:#ff00c6;">refreshToken</span>&quot;:<span style="font-weight:bold;color:red;">&quot;</span><span style="font-weight:bold;color:blue;">rt__2xxxx5_2xxxxxa-4xx7-4xxa-9xx3-exxxxxxxxxx4</span><span style="font-weight:bold;color:red;">&quot;</span>,&quot;state&quot;:&quot;10xxxx4d3-4cxa-4xx8-axxb-1xxxf3&quot;,&quot;callback&quot;:&quot;at_callback_d4dxxxxxxxxxxxxxxxxxxxxxxxxxef_ly8og7b8&quot;}</li></ul><br><li style="font-weight:bold;">If you really can&#39;t see it, you can use tools to decode it.：<a href="https://tool.chinaz.com/tools/urlencode.aspx">https://tool.chinaz.com/tools/urlencode.aspx</a></li></ul></ul><img src="'+a+'"></div><br><h2 id="other-parameters" tabindex="-1"><a class="header-anchor" href="#other-parameters"><span><strong>Other parameters</strong></span></a></h2><ul><li><p><code>Upload thread</code>：upload thread (default is 3, range 1-32)</p></li><li><p><code>App id</code>：<code>Application ID</code> (default is filled, no need to fill in)</p></li><li><p><code>App version</code>：<code>Application version</code> (default is filled, no need to fill in)</p></li><li><p><code>App secret</code>：<code>Application key</code> (default is filled, no need to fill in)</p></li></ul><br><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used"><span><strong>The default download method used</strong></span></a></h3>',23)),r(t,{id:"mermaid-108",code:"eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="})])}const g=i(p,[["render",h],["__file","halalcloud.html.vue"]]),m=JSON.parse('{"path":"/guide/drivers/halalcloud.html","title":"halalcloud","lang":"en-US","frontmatter":{"icon":"iconfont icon-state","order":18,"category":["Guide"],"tag":["Storage","Guide","Native Rroxy"],"sticky":true,"star":true,"description":"halalcloud 6盘（halalcloud） Official website：https://2dland.cn Cloud Login：https://drive.2dland.cn Official announcement, document address：https://2dland.yuque.com/r/organizations...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://alist.nn.ci/zh/guide/drivers/halalcloud.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/guide/drivers/halalcloud.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"halalcloud"}],["meta",{"property":"og:description","content":"halalcloud 6盘（halalcloud） Official website：https://2dland.cn Cloud Login：https://drive.2dland.cn Official announcement, document address：https://2dland.yuque.com/r/organizations..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/drivers/halalcloud/halalcloud_add.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-16T07:50:08.000Z"}],["meta",{"property":"article:tag","content":"Storage"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:tag","content":"Native Rroxy"}],["meta",{"property":"article:modified_time","content":"2024-07-16T07:50:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"halalcloud\\",\\"image\\":[\\"https://alist.nn.ci/img/drivers/halalcloud/halalcloud_add.png\\",\\"https://alist.nn.ci/img/drivers/halalcloud/halalcloud_login.png\\"],\\"dateModified\\":\\"2024-07-16T07:50:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"Root folder file_id","slug":"root-folder-file-id","link":"#root-folder-file-id","children":[]},{"level":2,"title":"Fill in the example","slug":"fill-in-the-example","link":"#fill-in-the-example","children":[]},{"level":2,"title":"Other parameters","slug":"other-parameters","link":"#other-parameters","children":[{"level":3,"title":"The default download method used","slug":"the-default-download-method-used","link":"#the-default-download-method-used","children":[]}]}],"git":{"createdTime":1721116208000,"updatedTime":1721116208000,"contributors":[{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":1,"url":"https://github.com/安稳"}]},"readingTime":{"minutes":2.2,"words":659},"filePathRelative":"guide/drivers/halalcloud.md","localizedDate":"July 16, 2024","autoDesc":true}');export{g as comp,m as data};
