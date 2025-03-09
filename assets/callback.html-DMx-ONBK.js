import{B as T}from"./Button-BwwjmgQe.js";import{d as C,O as A,ag as x,$ as P,_ as S,a0 as a,o as n,g as i,f as l,Y as k,e as c,a1 as b,a as N,c as B,r as I}from"./app-DQ_iLqVF.js";import{N as R}from"./Input-PJtdS9Oh.js";import{N as D}from"./Alert-Cio5VXQ-.js";import"./browser-CDtCWR8e.js";const G=C({__name:"Callback",setup(h,{expose:t}){t();const r=new URL(window.location.href),e=r.searchParams.get("code"),f=r.searchParams.get("state"),g=r.searchParams.get("error"),s=r.searchParams.get("error_description"),[d,_,m]=atob(f).split("::"),p=A(),u=async()=>{const o=new URLSearchParams;o.append("client_id",d),o.append("client_secret",_),o.append("code",e),o.append("grant_type","authorization_code"),o.append("redirect_uri",m),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o}).then(y=>y.json()).then(y=>{console.log(y),p.value=y})};e&&!g&&u();function w(){var o;window.open(`/tool/google/album?access_token=${(o=p.value)==null?void 0:o.access_token}`,"_blank")}const v={url:r,code:e,client:f,error:g,error_description:s,client_id:d,client_secret:_,redirect_uri:m,token:p,getToken:u,getAlbumID:w,get NAlert(){return D},get NSpace(){return P},get NSpin(){return x},get NInput(){return R},get NButton(){return T}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}});function O(h,t,r,e,f,g){return!e.code||e.error?(n(),a(e.NAlert,{key:0,title:e.error||"Error",type:"error"},{default:i(()=>[l(k(e.error_description),1)]),_:1},8,["title"])):(n(),a(e.NSpace,{key:1,vertical:"",size:"large"},{default:i(()=>{var s,d,_;return[c("p",null,[t[0]||(t[0]=c("b",null,"client_id: ",-1)),l(k(e.client_id),1)]),c("p",null,[t[1]||(t[1]=c("b",null,"client_secret: ",-1)),l(k(e.client_secret),1)]),c("p",null,[t[2]||(t[2]=c("b",null,"redirect_uri: ",-1)),l(k(e.redirect_uri),1)]),(s=e.token)!=null&&s.error||(d=e.token)!=null&&d.error_description?(n(),a(e.NAlert,{key:0,title:(_=e.token)==null?void 0:_.error,type:"error"},{default:i(()=>[l(k(e.token.error_description),1)]),_:1},8,["title"])):b("",!0),N(e.NSpace,{vertical:""},{default:i(()=>{var m,p,u;return[t[5]||(t[5]=c("b",null,"refresh_token:",-1)),e.token?b("",!0):(n(),a(e.NSpin,{key:0})),(m=e.token)!=null&&m.refresh_token?(n(),a(e.NInput,{key:1,type:"textarea",autosize:"",readonly:"",value:e.token.refresh_token},null,8,["value"])):(p=e.token)!=null&&p.access_token?(n(),a(e.NAlert,{key:2,title:"Web client",type:"warning"},{default:i(()=>t[3]||(t[3]=[l(" The refresh_token is only returned once if you use a web client. ")])),_:1})):b("",!0),(u=e.token)!=null&&u.access_token?(n(),a(e.NButton,{key:3,onClick:e.getAlbumID,block:"",type:"primary"},{default:i(()=>t[4]||(t[4]=[l("Get Album ID")])),_:1})):b("",!0)]}),_:1})]}),_:1}))}const j=S(G,[["render",O],["__scopeId","data-v-18105aea"],["__file","Callback.vue"]]),z=C({__name:"callback.html",setup(h,{expose:t}){t();const r={get Callback(){return j}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function H(h,t,r,e,f,g){const s=I("NaiveClient");return n(),B("div",null,[N(s,null,{default:i(()=>[N(e.Callback)]),_:1})])}const F=S(z,[["render",H],["__file","callback.html.vue"]]),J=JSON.parse('{"path":"/tool/google/callback.html","title":"Google Refresh Token Callback","lang":"en-US","frontmatter":{"title":"Google Refresh Token Callback","toc":false,"head":[["meta",{"property":"og:url","content":"https://alist.nn.ci/tool/google/callback.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"Google Refresh Token Callback"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-02-17T10:04:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T10:04:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Google Refresh Token Callback\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-02-17T10:04:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[],"git":{"createdTime":1676541915000,"updatedTime":1676628274000,"contributors":[{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":7,"url":"https://github.com/Andy Hsu"}]},"readingTime":{"minutes":0.07,"words":20},"filePathRelative":"tool/google/callback.md","localizedDate":"February 16, 2023"}');export{F as comp,J as data};
