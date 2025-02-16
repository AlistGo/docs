import{_ as g,a as m,b as u,c,d as v,e as A,f as y,g as b,h as B,i as f}from"./onedrive_app_user-DuUqhwaY.js";import{_ as E,c as F,b as p,e as i,a as e,f as n,g as a,r as d,o as C}from"./app-K34Aos0E.js";const x={};function D(_,s){const r=d("Badge"),h=d("Tabs"),o=d("BiliBili"),k=d("Mermaid");return C(),F("div",null,[s[27]||(s[27]=p('<h1 id="onedrive-app" tabindex="-1"><a class="header-anchor" href="#onedrive-app"><span>OneDrive APP</span></a></h1><h2 id="好处以及注意事项" tabindex="-1"><a class="header-anchor" href="#好处以及注意事项"><span><strong>好处以及注意事项</strong></span></a></h2><ol><li><p>好处是只授权一次管理员登录，后续添加参数时用一样的，在添加时除了邮箱哪里不同，别的都一样</p><ul><li>例如E5 25个5T的账号，你提前登录初始化完毕后，直接CV之前的参数即可，不用像以前一样每次都得去获取刷新令牌时间一长还失效</li><li>A1 A1P等可以分发的账号更多(500 - <strong>无限</strong>)</li></ul></li><li><p>这样的方式管理员授权后，可以随意查看组织中每个成员的账号，泄露了自己的文件</p><ul><li>建议自己申请 OneDrive E5 去好一些</li></ul></li></ol><hr><div class="hint-container tip"><p class="hint-container-title">提示</p><p>不适用于家庭版，如果你在配置过程中，与教程中出现的选项不符可能是不支持</p></div><p>首先使用个人或者组织账号登录</p><p><strong><a href="https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true" target="_blank" rel="noopener noreferrer">https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true</a></strong></p>',7)),i("p",null,[s[0]||(s[0]=n("登录后获取我们的")),e(r,{text:"租户ID",type:"info",vertical:"middle"})]),s[28]||(s[28]=p('<p><img src="'+m+'" alt="onedriveapp" loading="lazy"></p><h2 id="新建过程" tabindex="-1"><a class="header-anchor" href="#新建过程"><span><strong>新建过程</strong></span></a></h2><div class="hint-container caution"><p class="hint-container-title">请仔细阅读注意事项</p><p>请仔细阅读下面的 <strong><code>序号，依次查看</code></strong> ，如有错误可及时反馈</p></div>',3)),e(h,{id:"63",data:[{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"}],"tab-id":"onedrive_app"},{title0:a(({value:l,isActive:t})=>s[1]||(s[1]=[n("1")])),title1:a(({value:l,isActive:t})=>s[2]||(s[2]=[n("2")])),title2:a(({value:l,isActive:t})=>s[3]||(s[3]=[n("3")])),title3:a(({value:l,isActive:t})=>s[4]||(s[4]=[n("4")])),title4:a(({value:l,isActive:t})=>s[5]||(s[5]=[n("5")])),tab0:a(({value:l,isActive:t})=>[i("ol",null,[s[7]||(s[7]=i("li",null,[i("p",null,"注册一个应用，类型自己选，建议选第三吧")],-1)),s[8]||(s[8]=i("li",null,[i("p",null,[n("重定向URL(回调参数)，类型选择Web，参数填写： "),i("strong",null,[i("a",{href:"https://entra.microsoft.com/TokenAuthorize",target:"_blank",rel:"noopener noreferrer"},"https://entra.microsoft.com/TokenAuthorize")]),n(" ，否则后面授权时无法授权")])],-1)),i("li",null,[i("p",null,[s[6]||(s[6]=n("填好后点击下方的注册 跳转后就可以看到")),e(r,{text:"客户端ID",type:"info",vertical:"middle"})])])]),s[9]||(s[9]=i("p",null,[i("img",{src:B,alt:"onedriveapp",loading:"lazy"})],-1))]),tab1:a(({value:l,isActive:t})=>[i("p",null,[s[10]||(s[10]=n("我们去获取一个客户端秘钥，按照下图获取即可，记得")),e(r,{text:"客户端秘钥",type:"info",vertical:"middle"}),s[11]||(s[11]=n("要及时保存，只会出现一次"))]),s[12]||(s[12]=i("p",null,[i("img",{src:b,alt:"onedriveapp",loading:"lazy"})],-1))]),tab2:a(({value:l,isActive:t})=>s[13]||(s[13]=[i("p",null,[n("客户端秘钥拿到了，去授权一下使用的 "),i("strong",null,[i("code",null,"API")]),n("，依旧跟着下图获取即可")],-1),i("p",null,[i("img",{src:y,alt:"onedriveapp",loading:"lazy"})],-1)])),tab3:a(({value:l,isActive:t})=>s[14]||(s[14]=[i("p",null,"API授权后，我们去授权组织应用",-1),i("ul",null,[i("li",null,[n("左侧侧边栏 ---> 企业应用程序 ---> 所有应用程序 ---> "),i("strong",null,"{选择我们开始新建的那个应用名称}"),n(" ---> 权限 ---> 点击 代表"),i("code",null,"xxxx"),n("授予管理员同意")])],-1),i("p",null,[i("img",{src:v,alt:"onedriveapp",loading:"lazy"})],-1),i("p",null,"注意事项",-1),i("ul",null,[i("li",null,"如果你在开始注册应用时，回调参数不是一样的可能点击授权时会报错，记得写一样的"),i("li",null,[n("如何查看是否授权成功，未授权时页面是提示"),i("code",null,"未发现该应用程序具有管理员许可的授权"),n("，授权成功后刷新一下页面会看到三条API权限如下图所示 "),i("ul",null,[i("li",null,"上面是未授权时的样子，下面是授权后的样子（授权后刷新页面即可）")])])],-1),i("p",null,[i("img",{src:A,alt:"onedriveapp",loading:"lazy"})],-1)])),tab4:a(({value:l,isActive:t})=>[s[17]||(s[17]=i("p",null,[n("通过开始到现在 我们分别拿到了如下参数：租户ID"),i("sup",null,"1"),n("，注册应用"),i("sup",null,"2"),n("，拿到客户端ID/秘钥"),i("sup",null,"3"),n("，授权API/管理员API"),i("sup",null,"4")],-1)),i("p",null,[s[15]||(s[15]=n("然后通过下面的格式最终授权一下即可，分别是")),e(r,{text:"租户ID",type:"info",vertical:"middle"}),e(r,{text:"客户端ID",type:"info",vertical:"middle"}),e(r,{text:"回调参数URL",type:"info",vertical:"middle"}),s[16]||(s[16]=n("改成自己的最终登录收取即可"))]),s[18]||(s[18]=i("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"https://login.microsoftonline.com/{租户ID或者common}/adminConsent?client_id={客户端ID}&redirect_uri={注册应用时的回调URL}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1)),s[19]||(s[19]=i("p",null,[i("img",{src:u,alt:"onedriveapp",loading:"lazy"})],-1)),s[20]||(s[20]=i("p",null,"如果你按照拼写好后的链接也登录了发现跳转到了一个空白页面，例如下面示例代码和图片中的就是授权成功了不用担心",-1)),s[21]||(s[21]=i("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",null,"https://entra.microsoft.com/TokenAuthorize?admin_consent=True&tenant={租户ID}#")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1)),s[22]||(s[22]=i("p",null,[i("img",{src:c,alt:"onedriveapp",loading:"lazy"})],-1))]),_:1}),s[29]||(s[29]=i("h2",{id:"填写示例",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#填写示例"},[i("span",null,[i("strong",null,"填写示例")])])],-1)),s[30]||(s[30]=i("p",null,[n("将上述过程中获取得到的值依次填入即可，如果哪个邮箱你不知道是什么了 可以通过"),i("a",{href:"#%E6%9F%A5%E7%9C%8B%E7%BB%84%E7%BB%87%E6%89%80%E6%9C%89%E7%94%A8%E6%88%B7"},[i("strong",null,"查看组织所有用户")]),n("来查找")],-1)),s[31]||(s[31]=i("p",null,[i("img",{src:g,alt:"onedriveapp",loading:"lazy"})],-1)),e(o,{bvid:"BV1Ro4y1s725",ratio:"16:9","low-quality":"","no-danmaku":""}),s[32]||(s[32]=p('<h2 id="查看组织所有用户" tabindex="-1"><a class="header-anchor" href="#查看组织所有用户"><span><strong>查看组织所有用户</strong></span></a></h2><p>如果不知道自己的OneDrive组织有多少用户可以前往下面的链接登录 <code>admin</code>账号查看</p><p><strong><a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noopener noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a></strong></p><p><img src="'+f+'" alt="onedriveapp" loading="lazy"></p><h2 id="错误提示" tabindex="-1"><a class="header-anchor" href="#错误提示"><span><strong>错误提示</strong></span></a></h2><ul><li>提示：<strong>Either scp or roles claim need to be present in the token</strong> 错误</li></ul>',6)),i("p",null,[s[23]||(s[23]=n("是因为你没有在第")),s[24]||(s[24]=i("code",null,"4",-1)),s[25]||(s[25]=n("步的时候进行 ")),e(r,{text:"代表xxxx授予管理员同意",type:"info",vertical:"middle"}),s[26]||(s[26]=n(" 导致的，注意查看第四步下面的提示"))]),s[33]||(s[33]=p(`<ul><li>提示：<strong>failed get objs: failed to list objs: Unable to retrieve user&#39;s mysite URL</strong> 错误</li></ul><p>新建的 <code>OneDrive</code>用户账号不是实时生效，会延时生效等待几小时后试试看 <a href="https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892" target="_blank" rel="noopener noreferrer"><strong>案例</strong></a></p><h2 id="批量添加onedrive-app账号" tabindex="-1"><a class="header-anchor" href="#批量添加onedrive-app账号"><span><strong>批量添加OneDrive_App账号</strong></span></a></h2><p>使用的软件：<strong><a href="https://github.com/yzbtdiy/alist_batch" target="_blank" rel="noopener noreferrer">https://github.com/yzbtdiy/alist_batch</a></strong></p><details class="hint-container details"><summary>参数填写，看不懂可以看下方的视频</summary><p>两个配置文件不要留空白空行哦，那样也会报错的</p><p><strong>config.yaml</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 自己的AList站点，可以是本地也可以是远程服务器IP或者域名，但是结尾不能带 &quot;/&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALIST_URL</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># auth的三个参数是你AList管理员账号密码和刷新令牌</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">auth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">USERNAME</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALIST_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># enable选项你需要哪个就开启哪个，不需要的关闭</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">aliyun</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    refresh_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALI_YUNPAN_REFRESH_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pikpak</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PIKPAK_EMAIL</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PIKPAK_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 我们这里需要的是 onedrive_app，把这个开启</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">onedrive_app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># global是全局例如E5 A1 A1P, 世纪互联是cn 德国版是de 美国版是us</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    region</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">global</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    tenants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          client_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">客户端ID</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          client_secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">客户端秘钥</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          tenant_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">租户ID</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 这里可以同时挂载不同域和不同账号，每个域照着上面的配置写即可</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 客户端ID 客户端秘钥 租户ID 就不用说了吧？</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>onedrive_app.yaml</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 分类1 挂载x 可以自己随便改，相当于添加存储时候的挂载路径</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1 这里指的是要使用上面配置文件里面的哪个域/组织的配置</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 后面的就是自己的邮箱账号啦~如果不写 &quot;:/folder1&quot;,挂载的是根目录 写了就是挂载这个目录</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 反正格式就是： 挂载路径:域/组织:邮箱账号:/文件夹目录(可选)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">分类1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    挂载1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user1@xxx.onmicrosoft.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    挂载2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user2@xxx.onmicrosoft.com:/folder1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    挂载3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user2@xxx.onmicrosoft.com:/folder2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 你可以分多个不同的列表挂载也行，照着格式写</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">分类2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    挂载11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user1@xxx.onmicrosoft.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    挂载22</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user2@xxx.onmicrosoft.com:/folder1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    挂载33</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user2@xxx.onmicrosoft.com:/folder2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5)),e(o,{bvid:"BV1vc411V78S",ratio:"16:9","low-quality":"","no-danmaku":""}),s[34]||(s[34]=i("h3",{id:"默认使用的下载方式",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#默认使用的下载方式"},[i("span",null,[i("strong",null,"默认使用的下载方式")])])],-1)),e(k,{id:"mermaid-232",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}const I=E(x,[["render",D],["__file","onedrive_app.html.vue"]]),R=JSON.parse('{"path":"/zh/guide/drivers/onedrive_app.html","title":"OneDrive APP","lang":"zh-CN","frontmatter":{"icon":"iconfont icon-state","order":5,"category":["Guide"],"tag":["Storage","Guide","302"],"sticky":true,"star":true,"description":"OneDrive APP 好处以及注意事项 好处是只授权一次管理员登录，后续添加参数时用一样的，在添加时除了邮箱哪里不同，别的都一样 例如E5 25个5T的账号，你提前登录初始化完毕后，直接CV之前的参数即可，不用像以前一样每次都得去获取刷新令牌时间一长还失效 A1 A1P等可以分发的账号更多(500 - 无限) 这样的方式管理员授权后，可以随意查看组...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://alist.nn.ci/guide/drivers/onedrive_app.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/zh/guide/drivers/onedrive_app.html"}],["meta",{"property":"og:site_name","content":"AList文档"}],["meta",{"property":"og:title","content":"OneDrive APP"}],["meta",{"property":"og:description","content":"OneDrive APP 好处以及注意事项 好处是只授权一次管理员登录，后续添加参数时用一样的，在添加时除了邮箱哪里不同，别的都一样 例如E5 25个5T的账号，你提前登录初始化完毕后，直接CV之前的参数即可，不用像以前一样每次都得去获取刷新令牌时间一长还失效 A1 A1P等可以分发的账号更多(500 - 无限) 这样的方式管理员授权后，可以随意查看组..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-07T13:09:44.000Z"}],["meta",{"property":"article:tag","content":"Storage"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:tag","content":"302"}],["meta",{"property":"article:modified_time","content":"2025-02-07T13:09:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OneDrive APP\\",\\"image\\":[\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app0.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app1.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app3.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app4.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app5.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app7.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app6.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/od_app_ok.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app_Denmo.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app_user.png\\"],\\"dateModified\\":\\"2025-02-07T13:09:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"好处以及注意事项","slug":"好处以及注意事项","link":"#好处以及注意事项","children":[]},{"level":2,"title":"新建过程","slug":"新建过程","link":"#新建过程","children":[]},{"level":2,"title":"填写示例","slug":"填写示例","link":"#填写示例","children":[]},{"level":2,"title":"查看组织所有用户","slug":"查看组织所有用户","link":"#查看组织所有用户","children":[]},{"level":2,"title":"错误提示","slug":"错误提示","link":"#错误提示","children":[]},{"level":2,"title":"批量添加OneDrive_App账号","slug":"批量添加onedrive-app账号","link":"#批量添加onedrive-app账号","children":[{"level":3,"title":"默认使用的下载方式","slug":"默认使用的下载方式","link":"#默认使用的下载方式","children":[]}]}],"git":{"createdTime":1679551253000,"updatedTime":1738933784000,"contributors":[{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":7,"url":"https://github.com/安稳"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":2,"url":"https://github.com/Andy Hsu"},{"name":"Andy Hsu","username":"Andy Hsu","email":"xhofe@qq.com","commits":1,"url":"https://github.com/Andy Hsu"},{"name":"Patrick-Ze","username":"Patrick-Ze","email":"19711799+Patrick-Ze@users.noreply.github.com","commits":1,"url":"https://github.com/Patrick-Ze"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":1,"url":"https://github.com/安稳"},{"name":"ASKLL","username":"ASKLL","email":"askll520@outlook.com","commits":1,"url":"https://github.com/ASKLL"}]},"readingTime":{"minutes":5.61,"words":1683},"filePathRelative":"zh/guide/drivers/onedrive_app.md","localizedDate":"2023年3月23日","autoDesc":true}');export{I as comp,R as data};
