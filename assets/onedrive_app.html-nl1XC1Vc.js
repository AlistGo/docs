import{_ as k,a as u,b as g,c as m,d as y,e as v,f as A,g as f,h as b,i as w}from"./onedrive_app_user-DuUqhwaY.js";import{_ as B,c as E,b as o,e as i,a as n,f as s,g as t,r as p,o as F}from"./app-K34Aos0E.js";const C={};function x(z,e){const r=p("Badge"),h=p("Tabs"),d=p("BiliBili"),c=p("Mermaid");return F(),E("div",null,[e[27]||(e[27]=o('<h1 id="onedrive-app" tabindex="-1"><a class="header-anchor" href="#onedrive-app"><span>OneDrive APP</span></a></h1><h2 id="benefits-and-precautions" tabindex="-1"><a class="header-anchor" href="#benefits-and-precautions"><span><strong>Benefits and Precautions</strong></span></a></h2><ol><li><p>The advantage is that the administrator is only authorized to log in once, and the same is used when adding parameters later. When adding, everything is the same except for the mailbox.</p><ul><li>For example, E5 has 25 5T accounts. After you log in and initialize in advance, you can directly use the parameters before the CV. You don’t have to get the refresh token every time as before, and it will expire after a long time</li><li>A1, A1P, etc. can distribute more accounts (500 - <strong>unlimited</strong>)</li></ul></li><li><p>After the administrator authorizes in this way, he can view the account of each member in the organization at will, which will leak his own files</p><ul><li>It is recommended to apply for OneDrive E5 to get better</li></ul></li></ol><hr><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>It is not applicable to the home version. If you are in the configuration process, it does not match the options that appear in the tutorial. It may not be supported</p></div><p>First log in with your personal or organizational account</p><p><strong><a href="https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true" target="_blank" rel="noopener noreferrer">https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview.ReactView?Microsoft_AAD_IAM_legacyAADRedirect=true</a></strong></p>',7)),i("p",null,[e[0]||(e[0]=s("Login to get our")),n(r,{text:"tenant ID",type:"info",vertical:"middle"})]),e[28]||(e[28]=o('<p><img src="'+u+'" alt="onedriveapp" loading="lazy"></p><h2 id="create-process" tabindex="-1"><a class="header-anchor" href="#create-process"><span><strong>Create process</strong></span></a></h2><div class="hint-container caution"><p class="hint-container-title">Read the precautions carefully</p><p>Please read carefully the following <strong><code>serial numbers , view in sequence</code></strong> , if there is any error, please feedback in time</p></div>',3)),n(h,{id:"63",data:[{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"}],"tab-id":"onedrive_app"},{title0:t(({value:a,isActive:l})=>e[1]||(e[1]=[s("1")])),title1:t(({value:a,isActive:l})=>e[2]||(e[2]=[s("2")])),title2:t(({value:a,isActive:l})=>e[3]||(e[3]=[s("3")])),title3:t(({value:a,isActive:l})=>e[4]||(e[4]=[s("4")])),title4:t(({value:a,isActive:l})=>e[5]||(e[5]=[s("5")])),tab0:t(({value:a,isActive:l})=>[i("ol",null,[e[7]||(e[7]=i("li",null,[i("p",null,"Register an application, choose the type yourself, it is recommended to choose the third")],-1)),e[8]||(e[8]=i("li",null,[i("p",null,[s("Redirect URL (callback parameter), select Web as the type, and fill in the parameters "),i("strong",null,[i("a",{href:"https://entra.microsoft.com/TokenAuthorize",target:"_blank",rel:"noopener noreferrer"},"https://entra.microsoft.com/TokenAuthorize")]),s(" ,Otherwise, it will not be able to authorize later")])],-1)),i("li",null,[i("p",null,[e[6]||(e[6]=s("After filling out, click on the registration below and you can see it after jumping")),n(r,{text:"client ID",type:"info",vertical:"middle"})])])]),e[9]||(e[9]=i("p",null,[i("img",{src:b,alt:"onedriveapp",loading:"lazy"})],-1))]),tab1:t(({value:a,isActive:l})=>[i("p",null,[e[10]||(e[10]=s("Let's get a client secret key, just get it as shown in the figure below, remember")),n(r,{text:"secret key",type:"info",vertical:"middle"}),e[11]||(e[11]=s("save in time, it will only appear once"))]),e[12]||(e[12]=i("p",null,[i("img",{src:f,alt:"onedriveapp",loading:"lazy"})],-1))]),tab2:t(({value:a,isActive:l})=>e[13]||(e[13]=[i("p",null,[s("Once you have obtained the client secret key, go to authorize the "),i("strong",null,[i("code",null,"API")]),s(" to be used, and follow the picture below to get it")],-1),i("p",null,[i("img",{src:A,alt:"onedriveapp",loading:"lazy"})],-1)])),tab3:t(({value:a,isActive:l})=>e[14]||(e[14]=[i("p",null,"After the API is authorized, we go to authorize the organization application",-1),i("ul",null,[i("li",null,[s("Left sidebar ---> Enterprise applications ---> All applications ---> "),i("strong",null,"{choose which application name we started to create}"),s(" ---> Permissions ---> Click for "),i("code",null,"xxxx "),s("Grant admin consent")])],-1),i("p",null,[i("img",{src:y,alt:"onedriveapp",loading:"lazy"})],-1),i("p",null,"matters needing attention",-1),i("ul",null,[i("li",null,"If you start to register the application, the callback parameters are not the same, you may get an error when you click Authorization, remember to write the same"),i("li",null,[s("How to check whether the authorization is successful. If it is not authorized, the page will prompt "),i("code",null,"The application has not been found to have the authorization of the administrator's permission"),s(". After the authorization is successful, refresh the page and you will see three API permissions, as shown in the figure below "),i("ul",null,[i("li",null,"The above is what it looks like when it is not authorized, and the following is what it looks like after authorization (just refresh the page after authorization)")])])],-1),i("p",null,[i("img",{src:v,alt:"onedriveapp",loading:"lazy"})],-1)])),tab4:t(({value:a,isActive:l})=>[e[17]||(e[17]=i("p",null,[s("From the beginning to the present, we have obtained the following parameters: tenant ID"),i("sup",null,"1"),s(", registered application"),i("sup",null,"2"),s(", client ID/secret key"),i("sup",null,"3"),s(", authorization API/administrator API"),i("sup",null,"4")],-1)),i("p",null,[e[15]||(e[15]=s("Then open the browser and finally authorize it through the following format, which are")),n(r,{text:"tenant ID",type:"info",vertical:"middle"}),n(r,{text:"client ID",type:"info",vertical:"middle"}),n(r,{text:"Callback URL",type:"info",vertical:"middle"}),e[16]||(e[16]=s("Change to your own final login to receive"))]),e[18]||(e[18]=i("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"https://login.microsoftonline.com/{tenant ID or common}/adminConsent?client_id={client ID}&redirect_uri={Callback URL}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1)),e[19]||(e[19]=i("p",null,[i("img",{src:g,alt:"onedriveapp",loading:"lazy"})],-1)),e[20]||(e[20]=i("p",null,"If you log in according to the spelled link and find that you are redirected to a blank page, such as the sample code and picture below, the authorization is successful, don’t worry",-1)),e[21]||(e[21]=i("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"","data-title":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",null,"https://entra.microsoft.com/TokenAuthorize?admin_consent=True&tenant={Tenant ID}#")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1)),e[22]||(e[22]=i("p",null,[i("img",{src:m,alt:"onedriveapp",loading:"lazy"})],-1))]),_:1}),e[29]||(e[29]=i("h2",{id:"fill-in-the-example",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#fill-in-the-example"},[i("span",null,[i("strong",null,"Fill in the example")])])],-1)),e[30]||(e[30]=i("p",null,[s("Fill in the values obtained in the above process one by one. If you don’t know which email address it is, you can find it by "),i("a",{href:"#view-all-users-of-the-organization"},[i("strong",null,"view all users of the organization")])],-1)),e[31]||(e[31]=i("p",null,[i("img",{src:k,alt:"onedriveapp",loading:"lazy"})],-1)),n(d,{bvid:"BV1Ro4y1s725",ratio:"16:9","low-quality":"","no-danmaku":""}),e[32]||(e[32]=o('<h2 id="view-all-users-of-the-organization" tabindex="-1"><a class="header-anchor" href="#view-all-users-of-the-organization"><span><strong>View all users of the organization</strong></span></a></h2><p>If you don&#39;t know how many users there are in your OneDrive organization, you can go to the link below to log in to the <code>admin</code> account to view</p><p><strong><a href="https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users" target="_blank" rel="noopener noreferrer">https://admin.microsoft.com/Adminportal/Home?source=applauncher#/users</a></strong></p><p><img src="'+w+'" alt="onedriveapp" loading="lazy"></p><h2 id="error-message" tabindex="-1"><a class="header-anchor" href="#error-message"><span><strong>Error message</strong></span></a></h2><ul><li>Tips：<strong>Either scp or roles claim need to be present in the token</strong> Error</li></ul>',6)),i("p",null,[e[23]||(e[23]=s("because you didn't do it in step ")),e[24]||(e[24]=i("code",null,"4",-1)),e[25]||(e[25]=s()),n(r,{text:"grant xxx administrator consent",type:"info",vertical:"middle"}),e[26]||(e[26]=s(" caused by,Pay attention to the tips below the fourth step"))]),e[33]||(e[33]=o(`<ul><li>Tips：<strong>failed get objs: failed to list objs: Unable to retrieve user&#39;s mysite URL</strong> Error</li></ul><p>The newly created <code>OneDrive</code> user account does not take effect in real time, Delay takes effect, wait for a few hours and try again <a href="https://github.com/alist-org/docs/discussions/189#discussioncomment-5928892" target="_blank" rel="noopener noreferrer"><strong>Case</strong></a></p><h2 id="add-onedrive-app-accounts-in-batches" tabindex="-1"><a class="header-anchor" href="#add-onedrive-app-accounts-in-batches"><span><strong>Add OneDrive_App accounts in batches</strong></span></a></h2><p>software used：<strong><a href="https://github.com/yzbtdiy/alist_batch" target="_blank" rel="noopener noreferrer">https://github.com/yzbtdiy/alist_batch</a></strong></p><details class="hint-container details"><summary>Fill in the parameters. If you don’t understand, you can watch the video below.</summary><p>Do not leave blank lines in the two configuration files, as this will also report an error</p><p><strong>config.yaml</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Your own AList site, which can be local or remote server IP or domain name, but cannot have &quot;/&quot; at the end</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALIST_URL</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># The three parameters of auth are your AList administrator account password and refresh token</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">auth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">USERNAME</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALIST_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># enable Turn on whichever option you need, and turn off the one you don’t need</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">aliyun</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    refresh_token</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ALI_YUNPAN_REFRESH_TOKEN</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">pikpak</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PIKPAK_EMAIL</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PIKPAK_PASSWORD</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># What we need here is onedrive_app, turn this on</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">onedrive_app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># global is global, such as E5 A1 A1P, Vianet is cn, German version is de, American version is us</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    region</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">global</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    tenants</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          client_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">client_id</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          client_secret</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">client_secret</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          tenant_id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tenant_id</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Here you can mount different domains and different accounts at the same time, each domain can be written according to the above configuration</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Client ID Client Secret Key Tenant ID Needless to say?</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>onedrive_app.yaml</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Category 1 Mount x can be changed at will, which is equivalent to the mount path when adding storage</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 1 This refers to which domain/organization configuration in the above configuration file is to be used</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># What follows is your email account~ If you don&#39;t write &quot;:/folder1&quot;, the root directory will be mounted, and if you write it, you will mount this directory</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># Anyway, the format is: Mount path: domain/organization: email account: / folder directory (optional)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Category</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    mount</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user1@xxx.onmicrosoft.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    mount2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user2@xxx.onmicrosoft.com:/folder1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    mount3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user2@xxx.onmicrosoft.com:/folder2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># You can mount it in multiple different lists, and write according to the format</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Category2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    mount11</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user1@xxx.onmicrosoft.com</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    mount22</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user2@xxx.onmicrosoft.com:/folder1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    mount33</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1:user2@xxx.onmicrosoft.com:/folder2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,5)),n(d,{bvid:"BV1vc411V78S",ratio:"16:9","low-quality":"","no-danmaku":""}),e[34]||(e[34]=i("h3",{id:"the-default-download-method-used",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#the-default-download-method-used"},[i("span",null,[i("strong",null,"The default download method used")])])],-1)),n(c,{id:"mermaid-232",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}const I=B(C,[["render",x],["__file","onedrive_app.html.vue"]]),P=JSON.parse('{"path":"/guide/drivers/onedrive_app.html","title":"OneDrive APP","lang":"en-US","frontmatter":{"icon":"iconfont icon-state","order":5,"category":["Guide"],"tag":["Storage","Guide","302"],"sticky":true,"star":true,"description":"OneDrive APP Benefits and Precautions The advantage is that the administrator is only authorized to log in once, and the same is used when adding parameters later. When adding, ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://alist.nn.ci/zh/guide/drivers/onedrive_app.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/guide/drivers/onedrive_app.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"OneDrive APP"}],["meta",{"property":"og:description","content":"OneDrive APP Benefits and Precautions The advantage is that the administrator is only authorized to log in once, and the same is used when adding parameters later. When adding, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app0.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-27T08:56:01.000Z"}],["meta",{"property":"article:tag","content":"Storage"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:tag","content":"302"}],["meta",{"property":"article:modified_time","content":"2024-01-27T08:56:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OneDrive APP\\",\\"image\\":[\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app0.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app1.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app3.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app4.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app5.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app7.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app6.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/od_app_ok.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app_Denmo.png\\",\\"https://alist.nn.ci/img/drivers/onedrive_app/onedrive_app_user.png\\"],\\"dateModified\\":\\"2024-01-27T08:56:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"Benefits and Precautions","slug":"benefits-and-precautions","link":"#benefits-and-precautions","children":[]},{"level":2,"title":"Create process","slug":"create-process","link":"#create-process","children":[]},{"level":2,"title":"Fill in the example","slug":"fill-in-the-example","link":"#fill-in-the-example","children":[]},{"level":2,"title":"View all users of the organization","slug":"view-all-users-of-the-organization","link":"#view-all-users-of-the-organization","children":[]},{"level":2,"title":"Error message","slug":"error-message","link":"#error-message","children":[]},{"level":2,"title":"Add OneDrive_App accounts in batches","slug":"add-onedrive-app-accounts-in-batches","link":"#add-onedrive-app-accounts-in-batches","children":[{"level":3,"title":"The default download method used","slug":"the-default-download-method-used","link":"#the-default-download-method-used","children":[]}]}],"git":{"createdTime":1679551253000,"updatedTime":1706345761000,"contributors":[{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":7,"url":"https://github.com/安稳"},{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":2,"url":"https://github.com/Andy Hsu"},{"name":"Andy Hsu","username":"Andy Hsu","email":"xhofe@qq.com","commits":1,"url":"https://github.com/Andy Hsu"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":1,"url":"https://github.com/安稳"}]},"readingTime":{"minutes":4.29,"words":1288},"filePathRelative":"guide/drivers/onedrive_app.md","localizedDate":"March 23, 2023","autoDesc":true}');export{I as comp,P as data};
