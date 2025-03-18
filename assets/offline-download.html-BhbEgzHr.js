import{_ as h}from"./offline-download-BpYhJwBU.js";import{_ as c,k as i,n as r,f as e,e as n,b as o,w as u,m as s,o as l}from"./app-6tkzNA5U.js";const f={},g={class:"hint-container caution"},m={id:"_115-cloud、pikpak、thunder-pro",tabindex:"-1"},w={class:"header-anchor",href:"#_115-cloud、pikpak、thunder-pro"},b={style:{color:"rgb(24, 144, 255)"}},y={fill:"none","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css",height:"1em",width:"1em",style:{overflow:"visible"}},k={style:{color:"rgb(24, 144, 255)"}},v={fill:"currentColor","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css",tips:"offline_download",height:"1em",width:"1em",style:{overflow:"visible"}},q={style:{color:"rgb(24, 144, 255)"}},P={fill:"currentColor","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css",tips:"refresh",height:"1em",width:"1em",style:{overflow:"visible"}};function A(B,t){const a=s("RouteLink"),p=s("BiliBili"),d=s("Badge");return l(),i("div",null,[t[20]||(t[20]=r('<h1 id="offline-download" tabindex="-1"><a class="header-anchor" href="#offline-download"><span>Offline download</span></a></h1><h2 id="please-read-this-tip-before-use" tabindex="-1"><a class="header-anchor" href="#please-read-this-tip-before-use"><span><strong>Please read this tip before use</strong></span></a></h2><div class="hint-container warning"><p class="hint-container-title">Please read the following tips carefully</p><p>There are two kinds of software with offline download function</p><p>The two usages are the same, and the software configuration is set in advance (see the following instructions for specific configuration),</p><p>Then go back to the front-end interface, <mark>find the folder you want to upload offline files to, and you can manually enter the folder</mark></p><p>Then find the offline download button in the lower right corner, and choose to use Aria2 download or qBittorrent download (&gt;v 3.11.0)</p><p>If you use <strong>docker</strong>, please map the following two default paths by yourself. (mapped to the same directory on the host machine)</p><ul><li><strong>/opt/alist/data/temp/aria2</strong></li><li><strong>/opt/alist/data/temp/qBittorrent</strong></li></ul></div>',3)),e("div",g,[t[2]||(t[2]=e("p",{class:"hint-container-title"},"AList ≥ 3.42.0",-1)),e("p",null,[t[1]||(t[1]=o("AList Version ≥ 3.42.0 View ")),n(a,{to:"/config/other.html"},{default:u(()=>t[0]||(t[0]=[o("Allow all cloud disks to call other cloud disks' offline download tools")])),_:1})]),t[3]||(t[3]=r('<ul><li><p>≥ 3.42.0 If you want to use offline download, you need to configure a temporary folder in the background before you can use it (otherwise it will only show <strong>SimpleHttp</strong>)</p></li><li><p>manage ==&gt; settings ==&gt; other （ <strong><a href="https://explorer.com/@manage/settings/other" target="_blank" rel="noopener noreferrer">https://explorer.com/@manage/settings/other</a></strong> ）</p><ul><li>If you want to [use/configure] PikPak for offline downloading <ol><li>Mount PikPak storage</li><li>Set Pikpak temp dir in the background</li><li>Select any folder of this account as a temporary directory <ul><li>If multiple PikPaks are mounted and you want to use that account for offline downloading, then select the directory of that account as the temporary directory.</li></ul></li></ol></li></ul></li></ul><p><strong>The following applies only to configuration instructions</strong></p><br>',3))]),t[21]||(t[21]=e("h3",{id:"aria2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aria2"},[e("span",null,[e("strong",null,"Aria2")])])],-1)),e("p",null,[n(a,{to:"/config/other.html"},{default:u(()=>t[4]||(t[4]=[e("strong",null,"Click to view instructions for use",-1)])),_:1})]),t[22]||(t[22]=r('<br><h3 id="qbittorrent" tabindex="-1"><a class="header-anchor" href="#qbittorrent"><span><strong>qBittorrent</strong></span></a></h3><p>(Here we take the Windows side as an example, I don’t know if there is one on the Linux side)</p><p>First of all, we need to configure the default values on the client side of <strong><code>qBittorrent</code></strong></p><p>According to <a href="https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162" target="_blank" rel="noopener noreferrer">source code</a>, we know that the default values are admin:adminadmin@localhost:8080/</p><ul><li><strong>ip</strong>: localhost</li><li><strong>port</strong>: 8080</li><li><strong>user</strong>: admin</li><li><strong>password</strong>: adminadmin</li></ul><ol><li><p>We fill in the above parameters into the <strong><code>qBittorrent</code></strong> client, after configuration, we go to the Alist front end to download offline (<strong>method refer to the description at the beginning</strong>)</p><ul><li>If you are prompted after submitting the offline link: <strong>Qbittorrent not ready</strong>, try restarting both Alist and qBittorrent</li></ul></li><li><p>Default value configuration view address: (The link may also change position based on subsequent optimization)</p><ul><li><p><strong><a href="https://github.com/AlistGo/alist/blob/main/internal/offline_download/qbit/qbit.go#L28" target="_blank" rel="noopener noreferrer">https://github.com/AlistGo/alist/blob/main/internal/offline_download/qbit/qbit.go#L28</a></strong></p></li><li><p><code>{ *** Value: &quot;http://admin:adminadmin@localhost:8080/&quot;, Type: conf.TypeString, *** } </code></p></li></ul></li><li><p>Use <strong><code>qBittorrent</code></strong> to offline <code>.torrent</code> type files</p></li></ol><ul><li>Although you cannot directly add offline <code>.torrent</code> type files, you can save the country with a curve Reference: <a href="https://github.com/alist-org/alist/issues/2459#issuecomment-1354870010" target="_blank" rel="noopener noreferrer">View method</a></li></ul><ol start="4"><li>You can configure it yourself not to delete after the download is complete, but to do seeding, the default is <code>0</code>, and it will be deleted immediately after uploading</li></ol><ul><li>Modification location: <strong>Alist background</strong> --&gt; <strong>Settings</strong> --&gt; <strong>Qbittorrent seedtime</strong> option, set the time you need to configure, the unit is <code>minute</code>, after the set seeding time is reached, it will automatically delete</li></ul><ol start="5"><li><mark>We can also customize, instead of using the default presets</mark></li></ol><ul><li>Modification location: <strong>Alist Manage</strong> --&gt; <strong>Settings</strong> --&gt; <strong>Qbittorrent url</strong> option, just follow the modification</li></ul><p><img src="'+h+'" alt="Offline download" loading="lazy"></p><h4 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span><strong>Precautions</strong></span></a></h4><ol><li>Appeared in the background qBittorrent task: <strong><code>torrent parse timeout</code></strong>, parsing timed out</li><li>The torrent can be parsed, but <strong><code>The system cannot find the path specified.</code></strong> appears when uploading.</li></ol><p>The above two methods are most likely caused by the qBittorrent software itself, probably because of the green version and the modified version that have undergone some functional castration modifications. It is recommended to go to the official website to download and install it to restore it (the conclusion drawn by myself after stepping on the pit) )</p><ul><li><strong>qBittorrent</strong> official website: <strong><a href="https://www.qbittorrent.org/" target="_blank" rel="noopener noreferrer">https://www.qbittorrent.org/</a></strong></li><li><strong>qBittorrent-Enhanced-Edition</strong> GitHub: <strong><a href="https://github.com/c0re100/qBittorrent-Enhanced-Edition" target="_blank" rel="noopener noreferrer">https://github.com/c0re100/qBittorrent-Enhanced-Edition</a></strong></li></ul><ol start="3"><li>Because the <code>v2.8.3</code> API is used, the minimum version of qBittorrent should be <code>4.4.0beta2</code> or <code>4.3.8</code> official version</li><li>If <strong>qBittorrent</strong> sets the ip where alist is located to be exempt from authentication, you can directly omit the user name and password before <code>@</code> (configured on the <strong>qBittorrent</strong> client side) <ul><li>3 and 4 are not mentioned in the video.</li></ul></li></ol><p><strong>qBittorrent</strong> Video Tutorials</p>',19)),n(p,{bvid:"BV1NT411q7EN"}),t[23]||(t[23]=r('<p><strong>If the video fails, you can watch it here: <a href="https://b23.tv/J34qDiG" target="_blank" rel="noopener noreferrer">https://b23.tv/J34qDiG</a></strong></p><br><h3 id="simplehttp" tabindex="-1"><a class="header-anchor" href="#simplehttp"><span><strong>SimpleHttp</strong></span></a></h3><p>Subsequent supplement</p><br><h3 id="transmission" tabindex="-1"><a class="header-anchor" href="#transmission"><span><strong>Transmission</strong></span></a></h3><p>Subsequent supplement</p><br>',8)),e("h3",m,[e("a",w,[e("span",null,[t[5]||(t[5]=e("strong",null,"115 Cloud、PikPak、Thunder(Pro)",-1)),t[6]||(t[6]=o()),n(d,{text:"v3.42.0",type:"warning"})])])]),e("p",null,[t[7]||(t[7]=o("Versions ")),n(d,{text:"v3.42.0",type:"info",vertical:"middle"}),t[8]||(t[8]=o(" and above support calling the offline download function in AList"))]),e("p",null,[t[11]||(t[11]=o("After setting other configuration temporary directory options in the background, select the ")),e("span",b,[(l(),i("svg",y,t[9]||(t[9]=[e("path",{fill:"currentColor",d:"M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"},null,-1),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z","clip-rule":"evenodd"},null,-1)])))]),e("span",k,[(l(),i("svg",v,t[10]||(t[10]=[e("path",{fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32",d:"M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"},null,-1),e("path",{"stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"},null,-1),e("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"},null,-1)])))]),t[12]||(t[12]=o(" offline download option in the lower right corner of the front-end page to select the corresponding driver offline download function"))]),e("ul",null,[t[19]||(t[19]=e("li",null,[e("p",null,[o("Support："),e("code",null,"magne"),o(", "),e("code",null,"http"),o(", "),e("code",null,"ed2k"),o(" links")]),e("ul",null,[e("li",null,"PikPak： Also supports: X, TikTok, Facebook, TG URL links")])],-1)),e("li",null,[t[18]||(t[18]=e("p",null,"Some tips for using 115 offline downloads:",-1)),e("ol",null,[e("li",null,[t[14]||(t[14]=o("Out of sync problems may occur (manual refresh in the lower right corner ")),e("span",q,[(l(),i("svg",P,t[13]||(t[13]=[e("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),e("path",{d:"M5.463 4.433A9.961 9.961 0 0112 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 006.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0112 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0013.54 5.772l.997 1.795z"},null,-1)])))]),t[15]||(t[15]=o(")"))]),t[16]||(t[16]=e("li",null,"Currently, when the download is successful, completed tasks in the offline list are deleted.",-1)),t[17]||(t[17]=e("li",null,"115 Task URLs that are already in the offline list cannot be added again.",-1))])])]),t[24]||(t[24]=e("br",null,null,-1))])}const L=c(f,[["render",A]]),S=JSON.parse('{"path":"/guide/advanced/offline-download.html","title":"Offline download","lang":"en-US","frontmatter":{"icon":"iconfont icon-link","order":10,"category":["Guide"],"tag":["Advanced","Guide"],"sticky":true,"star":true,"description":"Offline download Please read this tip before use Please read the following tips carefully There are two kinds of software with offline download function The two usages are the s...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://alist.nn.ci/zh/guide/advanced/offline-download.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/guide/advanced/offline-download.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"Offline download"}],["meta",{"property":"og:description","content":"Offline download Please read this tip before use Please read the following tips carefully There are two kinds of software with offline download function The two usages are the s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/advanced/offline-download.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-16T09:47:36.000Z"}],["meta",{"property":"article:tag","content":"Advanced"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2025-03-16T09:47:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Offline download\\",\\"image\\":[\\"https://alist.nn.ci/img/advanced/offline-download.png\\"],\\"dateModified\\":\\"2025-03-16T09:47:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"Please read this tip before use","slug":"please-read-this-tip-before-use","link":"#please-read-this-tip-before-use","children":[{"level":3,"title":"Aria2","slug":"aria2","link":"#aria2","children":[]},{"level":3,"title":"qBittorrent","slug":"qbittorrent","link":"#qbittorrent","children":[{"level":4,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]}]},{"level":3,"title":"SimpleHttp","slug":"simplehttp","link":"#simplehttp","children":[]},{"level":3,"title":"Transmission","slug":"transmission","link":"#transmission","children":[]},{"level":3,"title":"115 Cloud、PikPak、Thunder(Pro)","slug":"_115-cloud、pikpak、thunder-pro","link":"#_115-cloud、pikpak、thunder-pro","children":[]}]}],"git":{"createdTime":1676470011000,"updatedTime":1742118456000,"contributors":[{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":11,"url":"https://github.com/安稳"},{"name":"Noah Hsu","username":"Noah Hsu","email":"i@nn.ci","commits":1,"url":"https://github.com/Noah Hsu"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":5,"url":"https://github.com/Andy Hsu"},{"name":"浮心物语","username":"浮心物语","email":"108316419+wuhang2003@users.noreply.github.com","commits":1,"url":"https://github.com/浮心物语"},{"name":"孟古一","username":"孟古一","email":"my@mengguyi.com","commits":1,"url":"https://github.com/孟古一"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":5,"url":"https://github.com/安稳"},{"name":"Shelton Zhu","username":"Shelton Zhu","email":"498220739@qq.com","commits":1,"url":"https://github.com/Shelton Zhu"},{"name":"Andy Hsu","username":"Andy Hsu","email":"xhofe@qq.com","commits":1,"url":"https://github.com/Andy Hsu"},{"name":"KirCute","username":"KirCute","email":"951206789@qq.com","commits":1,"url":"https://github.com/KirCute"}]},"readingTime":{"minutes":4.12,"words":1237},"filePathRelative":"guide/advanced/offline-download.md","localizedDate":"February 15, 2023","autoDesc":true}');export{L as comp,S as data};
