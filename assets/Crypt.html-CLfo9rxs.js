import{_ as p,a}from"./crypt-demo2-CvFALHBT.js";import{_ as u,c as f,b as r,e as t,a as o,f as n,g as y,r as l,o as m}from"./app-K34Aos0E.js";const c={},g={class:"hint-container warning"};function h(b,e){const i=l("Badge"),s=l("RouteLink"),d=l("Mermaid");return m(),f("div",null,[e[51]||(e[51]=r('<h1 id="crypt" tabindex="-1"><a class="header-anchor" href="#crypt"><span>Crypt</span></a></h1><h2 id="introduce" tabindex="-1"><a class="header-anchor" href="#introduce"><span><strong>introduce</strong></span></a></h2><p>What is <code>Crypt</code>?</p><p>In simple words, it&#39;s a two-password-protected safe. No one can open it without the key. The password and the salt in the configuration form the key.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><ol><li>If you don’t know how to use this encryption/decryption driver, please read this guide carefully</li><li>Please test it locally to understand it fully before use in the production environment.</li><li>The data loss is 100% caused by configuration change. If data has been stored within Crypt, change configuration won&#39;t re-encrypt data, those data will be inaccessible to Crypt!</li></ol><p><mark>Remind again, please read the document carefully, otherwise the data may be lost！</mark></p></div><h2 id="instruction" tabindex="-1"><a class="header-anchor" href="#instruction"><span><strong>Instruction</strong></span></a></h2><p>We need to build a new <strong>empty folder</strong> in the driver (network disk) that has been mounted now.</p><p>Then fill in the name of our new empty folder to the <code>Remote path</code> <code>Crypt</code> driver configuration</p><p>E.g:</p><ul><li>Our original driving path was <code>/123</code>, we built a new <code>air</code> empty folder in the &#39;123&#39; directory</li><li>Fill <code>Remote Path</code> option in <code>Crypt</code> config page with <code>/123/air</code></li><li>To encrypt files, you need to upload them to the newly created &quot;Crypt&quot; drive. Encryption will only be applied when files are uploaded to this driver. <ul><li>Encrypted files are stored in <strong><code>remote path</code></strong> , and they can&#39;t be opened normally due to the encryption</li><li>If you want to open them, you need to view them in the <code>Crypt</code> Driver Folder</li></ul></li></ul><h2 id="config-example" tabindex="-1"><a class="header-anchor" href="#config-example"><span><strong>Config Example</strong></span></a></h2><p>If you don’t know how to configure, you can use the simpler default configuration as follows. The role of each configuration will be explained in detail below</p><p><img src="'+p+'" alt="image-20230721230425597" loading="lazy"></p><div class="hint-container caution"><p class="hint-container-title">Please read carefully --- very important</p><p>Once the configuration is set and started using, do not modify it, do not modify it, do not modify it!</p><p>The original <a href="#password"><strong>Password</strong></a> and <a href="#salt"><strong>Salt</strong></a> should be kept in other places. These two options will be encrypted and can&#39;t be reveled after saving.</p><ul><li><strong>If you forget the password before uploading any file, you can modify and re-fill in the password configuration</strong></li></ul><hr><p>If you have not uploaded any file in the Crypt, you may modify the configuration, otherwise do not modify it!!!</p><p>If you have data in Crypt, and changed the configuration, <code>Crypt</code> will try to filter out illegal files/folders, but the illegal data still exist in the remote storage</p><ul><li><strong>Illegal means data that is encrypted by another config</strong></li></ul></div>',14)),t("div",g,[e[24]||(e[24]=t("p",{class:"hint-container-title"},"Warning",-1)),e[25]||(e[25]=t("p",null,[n("There are 5 methods for the encryption combination, (in fact 6 types) Because only the "),t("strong",null,"folder encryption is turned on, the file name is not encrypted"),n(" and the configuration does not take effect (the first one of the example below)")],-1)),t("ol",null,[t("li",null,[o(i,{text:"invalid",color:"red",vertical:"middle"}),e[0]||(e[0]=n(" Filename ")),e[1]||(e[1]=t("code",null,"Off",-1)),e[2]||(e[2]=n("，Directory ")),e[3]||(e[3]=t("code",null,"true",-1))]),t("li",null,[o(i,{text:"valid",type:"tip",vertical:"middle"}),e[4]||(e[4]=n(" Filename ")),e[5]||(e[5]=t("code",null,"Off",-1)),e[6]||(e[6]=n("，Directory ")),e[7]||(e[7]=t("code",null,"false",-1))]),t("li",null,[o(i,{text:"valid",type:"tip",vertical:"middle"}),e[8]||(e[8]=n(" Filename ")),e[9]||(e[9]=t("code",null,"Standard",-1)),e[10]||(e[10]=n("，Directory ")),e[11]||(e[11]=t("code",null,"false",-1))]),t("li",null,[o(i,{text:"valid",type:"tip",vertical:"middle"}),e[12]||(e[12]=n(" Filename ")),e[13]||(e[13]=t("code",null,"Standard",-1)),e[14]||(e[14]=n("，Directory ")),e[15]||(e[15]=t("code",null,"true",-1))]),t("li",null,[o(i,{text:"valid",type:"tip",vertical:"middle"}),e[16]||(e[16]=n(" Filename ")),e[17]||(e[17]=t("code",null,"Obfuscate",-1)),e[18]||(e[18]=n("，Directory ")),e[19]||(e[19]=t("code",null,"false",-1))]),t("li",null,[o(i,{text:"valid",type:"tip",vertical:"middle"}),e[20]||(e[20]=n(" Filename ")),e[21]||(e[21]=t("code",null,"Obfuscate",-1)),e[22]||(e[22]=n("，Directory ")),e[23]||(e[23]=t("code",null,"true",-1))])])]),e[52]||(e[52]=t("br",null,null,-1)),e[53]||(e[53]=t("h3",{id:"filename-encryption",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#filename-encryption"},[t("span",null,[t("i",{class:"fa-solid fa-files",style:{color:"#409eff"}}),n(),t("strong",null,"Filename encryption")])])],-1)),e[54]||(e[54]=t("p",null,"If you don’t understand, you can use the default configuration",-1)),t("ul",null,[e[38]||(e[38]=r("<li><p>1.<strong>The default is <code>off</code> state</strong></p><ul><li>Whether the file name needs to be encrypted, and the file name is encrypted after uploading</li></ul></li><li><p>2.<strong>Standard Encryption</strong></p><ul><li>Standard encryption safety level high<sup>(recommended)</sup></li></ul></li><li><p>3.<strong>Simple Obfuscate</strong></p><ul><li>The security level is very low, but friendly to long file name. Note: for the Chinese file name, special characters will be generated. Some network disk storage may not support them</li></ul></li>",3)),t("li",null,[e[37]||(e[37]=t("p",null,[n("The left side of the figure below is encrypted "),t("a",{href:"#remote-path"},[t("strong",null,"Remote path")]),n("，On the right is the decrypted 'crypt` driver to view the file")],-1)),t("ul",null,[t("li",null,[e[26]||(e[26]=n("If not enabled ")),o(i,{text:"Filename",type:"tip",vertical:"middle"}),e[27]||(e[27]=n(" encryption，It will be like ")),o(i,{text:"Upper left corner pic",color:"rgb(216,100,69)",vertical:"middle"}),e[28]||(e[28]=n(" A new encrypted suffix is added behind the source file（xxxxx.xxx ")),e[29]||(e[29]=t("strong",null,".bin",-1)),e[30]||(e[30]=n(" ）(The suffix name can be customized)"))]),t("li",null,[e[31]||(e[31]=n("If you enabled ")),o(i,{text:"Filename",type:"tip",vertical:"middle"}),e[32]||(e[32]=n(" encryption，It will be like ")),o(i,{text:"Lower left corner pic",color:"rgb(78,130,184)",vertical:"middle"}),e[33]||(e[33]=n(" In this way, the file name is also confused with encryption, no suffix and the original file name，others can't know what it is, but it can be viewed in ")),e[34]||(e[34]=t("code",null,"crypt",-1)),e[35]||(e[35]=n("（")),o(i,{text:"The folder displayed on the right",color:"rgb(0.0.0.0)",vertical:"middle"}),e[36]||(e[36]=n("）"))])])])]),e[55]||(e[55]=r('<p><img src="'+a+'" alt="image-20230721230425597" loading="lazy"></p><br><h3 id="directory-name-encryption" tabindex="-1"><a class="header-anchor" href="#directory-name-encryption"><span><i class="fa-solid fa-folder-open" style="color:#409eff;"></i> <strong>Directory name encryption</strong></span></a></h3><p>default is <code>false</code>, i.e disabled. don&#39;t use it if you don&#39;t understand below description</p><p>When you turn on the folder encryption, you must select a <strong>filename encryption</strong> type. Otherwise, the folder encryption will not take effect</p>',5)),t("ul",null,[t("li",null,[e[45]||(e[45]=n("The left side of the figure below is encrypted ")),e[46]||(e[46]=t("a",{href:"#remote-path"},[t("strong",null,"Remote path")],-1)),e[47]||(e[47]=n("，On the right is the decrypted 'crypt` driver to view the file ")),t("ul",null,[t("li",null,[e[39]||(e[39]=n("If disabled ")),o(i,{text:"Directory",type:"tip",vertical:"middle"}),e[40]||(e[40]=n(" encryption，It will be like")),o(i,{text:"Upper left corner pic",color:"rgb(216,100,69)",vertical:"middle"}),e[41]||(e[41]=n(" No change to folder name"))]),t("li",null,[e[42]||(e[42]=n("If enabled ")),o(i,{text:"Directory",type:"tip",vertical:"middle"}),e[43]||(e[43]=n(" encryption，It will be displayed")),o(i,{text:"Lower left corner pic",color:"rgb(78,130,184)",vertical:"middle"}),e[44]||(e[44]=n(" folder name is encrypted"))])])])]),e[56]||(e[56]=r('<p><img src="'+a+'" alt="image-20230721230425597" loading="lazy"></p><br><h3 id="remote-path" tabindex="-1"><a class="header-anchor" href="#remote-path"><span><i class="fa-solid fa-cloud-binary" style="color:#409eff;"></i> <strong>Remote path</strong></span></a></h3><p>It is the storage and encrypted file, which can be any driver in the driver that can be mounted</p><br><h3 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span><i class="fa-solid fa-lock-keyhole" style="color:#409eff;"></i> <strong>Password</strong></span></a></h3><p>Just literally meaning password</p><h3 id="salt" tabindex="-1"><a class="header-anchor" href="#salt"><span><i class="fa-solid fa-lock-keyhole" style="color:#409eff;"></i> <strong>Salt</strong></span></a></h3><p>It can be treated as the second password if you don&#39;t understand it</p><br><h3 id="encrypted-suffix" tabindex="-1"><a class="header-anchor" href="#encrypted-suffix"><span><strong>Encrypted suffix</strong></span></a></h3><p>Advanced options,The default is <code>.bin</code>, the custom must start with<code> .</code>, such as .abc .aaa .Psd.</p><p>If the file name is encrypted, the encryption suffix `will not be used</p><br><h3 id="filename-encoding" tabindex="-1"><a class="header-anchor" href="#filename-encoding"><span><strong>Filename encoding</strong></span></a></h3><p>Advanced options, non -professionals, please do not modify it. The default is <strong><code>base64</code></strong>, but the options other than <strong><code>base64</code></strong> are not tested. If you encounter problems, you need to solve it yourself.</p><p>-Dy reference <a href="https://github.com/alist-org/alist/issues/5109" target="_blank" rel="noopener noreferrer">#5109</a>，<a href="https://github.com/alist-org/alist/issues/5080" target="_blank" rel="noopener noreferrer">#5080</a></p><br><h2 id="advanced-usage" tabindex="-1"><a class="header-anchor" href="#advanced-usage"><span><strong>Advanced usage</strong></span></a></h2><p>Advanced usage is only applicable to those who know about <strong><code>rclone</code></strong></p><p>If you know the <strong><code>rclone</code></strong> very well, you can check 👉 <a href="https://rclone.org/crypt" target="_blank" rel="noopener noreferrer"><strong>rclone crypt document</strong></a> Currently fully compatible</p><p>Note: <code>Alist Crypt</code> used <code>filename_encoding = base64</code> in default. If you want to use Rclone, please config it in the advanced config. (Reason: more friendly to long filename)</p><p>Since Alist does not consider any case-insensitive internally, you may encounter problems when remote storage is case-insensitive. e.g.: use alist local driver on Windows, then use Crypt on it.</p><br><h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span><strong>Precautions</strong></span></a></h2>',25)),t("p",null,[e[49]||(e[49]=n("When starting alist, I found that the Crypt prompts errors because Crypt can not find the relevant path when starting, You can fill in the Crypt ")),o(s,{to:"/guide/drivers/common.html#order"},{default:y(()=>e[48]||(e[48]=[n("order")])),_:1}),e[50]||(e[50]=n(" to make Crypt start slowly"))]),e[57]||(e[57]=t("br",null,null,-1)),e[58]||(e[58]=t("h2",{id:"the-default-download-method-used",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#the-default-download-method-used"},[t("span",null,[t("strong",null,"The default download method used")])])],-1)),o(d,{id:"mermaid-308",code:"eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="})])}const x=u(c,[["render",h],["__file","Crypt.html.vue"]]),k=JSON.parse(`{"path":"/guide/drivers/Crypt.html","title":"Crypt","lang":"en-US","frontmatter":{"icon":"iconfont icon-state","order":12,"category":["Guide"],"tag":["Storage","Guide","Native Rroxy"],"sticky":true,"star":true,"description":"Crypt introduce What is Crypt? In simple words, it's a two-password-protected safe. No one can open it without the key. The password and the salt in the configuration form the k...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://alist.nn.ci/zh/guide/drivers/Crypt.html"}],["meta",{"property":"og:url","content":"https://alist.nn.ci/guide/drivers/Crypt.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"Crypt"}],["meta",{"property":"og:description","content":"Crypt introduce What is Crypt? In simple words, it's a two-password-protected safe. No one can open it without the key. The password and the salt in the configuration form the k..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alist.nn.ci/img/drivers/crypt/crypt-demo1.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T07:18:16.000Z"}],["meta",{"property":"article:tag","content":"Storage"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:tag","content":"Native Rroxy"}],["meta",{"property":"article:modified_time","content":"2024-05-26T07:18:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Crypt\\",\\"image\\":[\\"https://alist.nn.ci/img/drivers/crypt/crypt-demo1.png\\",\\"https://alist.nn.ci/img/drivers/crypt/crypt-demo2.png\\",\\"https://alist.nn.ci/img/drivers/crypt/crypt-demo2.png\\"],\\"dateModified\\":\\"2024-05-26T07:18:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[{"level":2,"title":"introduce","slug":"introduce","link":"#introduce","children":[]},{"level":2,"title":"Instruction","slug":"instruction","link":"#instruction","children":[]},{"level":2,"title":"Config Example","slug":"config-example","link":"#config-example","children":[{"level":3,"title":"Filename encryption","slug":"filename-encryption","link":"#filename-encryption","children":[]},{"level":3,"title":"Directory name encryption","slug":"directory-name-encryption","link":"#directory-name-encryption","children":[]},{"level":3,"title":"Remote path","slug":"remote-path","link":"#remote-path","children":[]},{"level":3,"title":"Password","slug":"password","link":"#password","children":[]},{"level":3,"title":"Salt","slug":"salt","link":"#salt","children":[]},{"level":3,"title":"Encrypted suffix","slug":"encrypted-suffix","link":"#encrypted-suffix","children":[]},{"level":3,"title":"Filename encoding","slug":"filename-encoding","link":"#filename-encoding","children":[]}]},{"level":2,"title":"Advanced usage","slug":"advanced-usage","link":"#advanced-usage","children":[]},{"level":2,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]},{"level":2,"title":"The default download method used","slug":"the-default-download-method-used","link":"#the-default-download-method-used","children":[]}],"git":{"createdTime":1691397217000,"updatedTime":1716707896000,"contributors":[{"name":"安稳","username":"安稳","email":"56105412+anwen-anyi@users.noreply.github.com","commits":1,"url":"https://github.com/安稳"},{"name":"Sean","username":"Sean","email":"866155+SeanHeuc@users.noreply.github.com","commits":2,"url":"https://github.com/Sean"},{"name":"安稳","username":"安稳","email":"anwen_anyi@foxmail.com","commits":4,"url":"https://github.com/安稳"}]},"readingTime":{"minutes":4.38,"words":1314},"filePathRelative":"guide/drivers/Crypt.md","localizedDate":"August 7, 2023","autoDesc":true}`);export{x as comp,k as data};
