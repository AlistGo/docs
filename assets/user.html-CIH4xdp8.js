import{_ as d,a as p}from"./user_read_archives_dark-Cg_qp2GV.js";import{_ as u}from"./user_manage-SteJpE28.js";import{_ as m,k as c,n as a,f as t,b as s,e as n,w as o,m as r,o as h}from"./app-6tkzNA5U.js";const g={};function f(w,e){const i=r("RouteLink"),l=r("Badge");return h(),c("div",null,[e[9]||(e[9]=a('<h1 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>User</span></a></h1><h2 id="username" tabindex="-1"><a class="header-anchor" href="#username"><span><strong>Username</strong></span></a></h2><p>Username for login</p><h2 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><strong>Password</strong></span></a></h2><p>Password for login</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Password is invalid for guest user.</p><p>If you enter an incorrect password 6 times in a row, the current IP will be blocked for 30 minutes and you will not be able to enter your account and password to log in. However, it will not affect other IPs. It will only target IPs that entered 6 incorrect passwords.</p><ul><li>Restarting will immediately remove the 30-minute ban time</li></ul></div><br><h2 id="base-path" tabindex="-1"><a class="header-anchor" href="#base-path"><span><strong>Base path</strong></span></a></h2><p>The root path that users see when he/she log in</p><hr><p>Q: <strong>How to allow a user to see multiple folder paths?</strong></p>',11)),t("p",null,[e[1]||(e[1]=s("A: You can create a new ")),n(i,{to:"/guide/advanced/alias.html"},{default:o(()=>e[0]||(e[0]=[s("alias")])),_:1}),e[2]||(e[2]=s(" storage, add all the paths you need to show the user to the alias, and then point to the newly created alias storage in the user path"))]),e[10]||(e[10]=a('<br><h2 id="permission" tabindex="-1"><a class="header-anchor" href="#permission"><span><strong>Permission</strong></span></a></h2><ul><li>Can see hides: Can see the hides files and folders</li><li>Access without password: Can access without password</li><li>Add offline download tasks: Add offline download tasks</li><li>Mkdir or upload: Can make directory or upload files</li><li>Rename: Can rename files and folders</li><li>Move: Can move files and folders</li><li>Copy: Can copy files and folders</li><li>Delete: Can delete files and folders</li><li>Webdav read: Can read files and folders with webdav</li><li>Webdav manage: Can manage files and folders with webdav</li><li>FTP read: Can read files and folders with FTP</li><li>FTP manage: Can manage files and folders with FTP</li><li>Read archives: Read the contents of the file in the compressed package <ul><li>After turning on this option, compressed package format files will be previewed by default (as shown in the figure below), which will consume some server traffic, but will not download them all.</li><li>If you want to turn off the preferred preview of the compressed format, <mark><strong>Manage =&gt; Setting =&gt; Preview by default when opening archives</strong></mark>, this option is turned off, and the preference is the download mode</li></ul></li><li>Decompress: Decompress compressed package files online</li></ul><p><img src="'+d+'" alt="" data-mode="lightmode-only" loading="lazy"></p><p><img src="'+p+'" alt="" data-mode="darkmode-only" loading="lazy"></p><br><h2 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span><strong>Disabled</strong></span></a></h2><p>After checking, this user will stop using it and cannot log in. The guest account is disabled by default. If you want to enable the guest account, please close it manually.</p><br><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span><strong>Tips</strong></span></a></h2>',10)),t("ol",null,[t("li",null,[t("p",null,[e[4]||(e[4]=s("Are you worried that visitors can see all files? ")),n(i,{to:"/faq/why.html#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in"},{default:o(()=>e[3]||(e[3]=[t("strong",null,"Click to see how to set it up here",-1)])),_:1})])]),e[8]||(e[8]=a("<li><p><strong><code>Guest user is disabled, login please</code></strong>: In order to protect your AList security, the guest access permission is closed, if you need guest access, open it yourself</p><ul><li>AList Manage --&gt; users --&gt; <code>guest</code> --&gt; <strong>Disable</strong> uncheck</li></ul></li><li><p>Question about <strong><code>Copy/Upload</code></strong></p><ul><li>If you upload (including offline download and upload) large files, or upload a lot of files (hundreds or thousands), it is not recommended to use AList to operate, please go to the corresponding network disk official website to operate directly</li></ul></li>",2)),t("li",null,[e[7]||(e[7]=t("p",null,"Non-admin users can manage offline download, copy, upload and other operations in the background",-1)),t("ul",null,[t("li",null,[e[5]||(e[5]=s("AList needs to be upgraded to ")),n(l,{text:"v3.39.1",type:"info",vertical:"middle"}),e[6]||(e[6]=s(" version, and admin can also view the user's task progress and operations"))])])])]),e[11]||(e[11]=t("p",null,[t("img",{src:u,alt:"",loading:"lazy"})],-1))])}const k=m(g,[["render",f]]),P=JSON.parse('{"path":"/guide/advanced/user.html","title":"User","lang":"en-US","frontmatter":{"icon":"iconfont icon-people","order":2,"category":["Guide"],"tag":["Advanced","Guide"],"sticky":true,"star":true,"description":"User Username Username for login Password Password for login Tips Password is invalid for guest user. If you enter an incorrect password 6 times in a row, the current IP will be...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://alist.nn.ci/zh/guide/advanced/user.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/guide/advanced/user.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"User"}],["meta",{"property":"og:description","content":"User Username Username for login Password Password for login Tips Password is invalid for guest user. If you enter an incorrect password 6 times in a row, the current IP will be..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/advanced/user_read_archives_light.png#light"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-16T04:27:59.000Z"}],["meta",{"property":"article:tag","content":"Advanced"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2025-02-16T04:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"User\\",\\"image\\":[\\"https://alist.nn.ci/img/advanced/user_read_archives_light.png#light\\",\\"https://alist.nn.ci/img/advanced/user_read_archives_dark.png#dark\\",\\"https://alist.nn.ci/img/advanced/user_manage.png\\"],\\"dateModified\\":\\"2025-02-16T04:27:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"Username","slug":"username","link":"#username","children":[]},{"level":2,"title":"Password","slug":"password","link":"#password","children":[]},{"level":2,"title":"Base path","slug":"base-path","link":"#base-path","children":[]},{"level":2,"title":"Permission","slug":"permission","link":"#permission","children":[]},{"level":2,"title":"Disabled","slug":"disabled","link":"#disabled","children":[]},{"level":2,"title":"Tips","slug":"tips","link":"#tips","children":[]}],"git":{"createdTime":1662556125000,"updatedTime":1739680079000,"contributors":[{"name":"Noah Hsu","username":"Noah Hsu","email":"i@nn.ci","commits":2,"url":"https://github.com/Noah Hsu"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":3,"url":"https://github.com/Andy Hsu"},{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":8,"url":"https://github.com/安稳"},{"name":"Andy Hsu","username":"Andy Hsu","email":"xhofe@qq.com","commits":2,"url":"https://github.com/Andy Hsu"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":4,"url":"https://github.com/安稳"}]},"readingTime":{"minutes":1.88,"words":564},"filePathRelative":"guide/advanced/user.md","localizedDate":"September 7, 2022","autoDesc":true}');export{k as comp,P as data};
