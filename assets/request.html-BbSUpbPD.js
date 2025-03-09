import{B as b}from"./Button-BwwjmgQe.js";import{d as y,O as u,$ as k,_ as g,a0 as m,o as i,g as s,a as n,c as h,a1 as _,f as c,e as f,af as x,r as N}from"./app-DQ_iLqVF.js";import{N as v}from"./Checkbox-KHYZfYbO.js";import{N as w}from"./Input-PJtdS9Oh.js";import"./browser-CDtCWR8e.js";const C=y({__name:"Request",setup(l,{expose:e}){e();const r=u({id:"76lrwrklhdn1icb",secret:""}),t=u(!1),o={client:r,useMyOwn:t,createClient:()=>{window.open("https://dropbox.com/developers/apps","_blank")},getToken:()=>{const a=new URL("https://www.dropbox.com/oauth2/authorize");a.searchParams.set("client_id",r.value.id),a.searchParams.set("response_type","code"),a.searchParams.set("redirect_uri",`${location.origin}/tool/dropbox/callback`),a.searchParams.set("token_access_type","offline"),a.searchParams.set("state",window.btoa(`${r.value.id}::${r.value.secret}`)),window.open(a.toString(),"_self")},get NInput(){return w},get NButton(){return b},get NSpace(){return k},get NCheckbox(){return v}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function T(l,e,r,t,p,d){return i(),m(t.NSpace,{vertical:"",size:"large"},{default:s(()=>[n(t.NCheckbox,{checked:t.useMyOwn,"onUpdate:checked":e[0]||(e[0]=o=>t.useMyOwn=o),size:"large"},{default:s(()=>e[3]||(e[3]=[c("Use my own client")])),_:1},8,["checked"]),t.useMyOwn?(i(),h(x,{key:0},[e[4]||(e[4]=f("h4",null,"client_id",-1)),n(t.NInput,{size:"large",value:t.client.id,"onUpdate:value":e[1]||(e[1]=o=>t.client.id=o)},null,8,["value"]),e[5]||(e[5]=f("h4",null,"client_secret",-1)),n(t.NInput,{size:"large",value:t.client.secret,"onUpdate:value":e[2]||(e[2]=o=>t.client.secret=o),placeholder:"keep it empty if you don't have one"},null,8,["value"])],64)):_("",!0),n(t.NSpace,{justify:"center"},{default:s(()=>[t.useMyOwn?(i(),m(t.NButton,{key:0,size:"large",secondary:"",onClick:t.createClient},{default:s(()=>e[6]||(e[6]=[c("Create client")])),_:1})):_("",!0),n(t.NButton,{size:"large",type:"info",onClick:t.getToken},{default:s(()=>e[7]||(e[7]=[c("Get Refresh Token")])),_:1})]),_:1})]),_:1})}const S=g(C,[["render",T],["__scopeId","data-v-73e0c62b"],["__file","Request.vue"]]),B=y({__name:"request.html",setup(l,{expose:e}){e();const r={get Dropbox(){return S}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function D(l,e,r,t,p,d){const o=N("NaiveClient");return i(),h("div",null,[n(o,null,{default:s(()=>[n(t.Dropbox)]),_:1})])}const U=g(B,[["render",D],["__file","request.html.vue"]]),A=JSON.parse('{"path":"/tool/dropbox/request.html","title":"Get Dropbox Refresh Token","lang":"en-US","frontmatter":{"title":"Get Dropbox Refresh Token","toc":false,"head":[["meta",{"property":"og:url","content":"https://alist.nn.ci/tool/dropbox/request.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"Get Dropbox Refresh Token"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-19T15:02:49.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-19T15:02:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Get Dropbox Refresh Token\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-19T15:02:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[],"git":{"createdTime":1687186969000,"updatedTime":1687186969000,"contributors":[{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":1,"url":"https://github.com/Andy Hsu"}]},"readingTime":{"minutes":0.07,"words":20},"filePathRelative":"tool/dropbox/request.md","localizedDate":"June 19, 2023"}');export{U as comp,A as data};
