import{d as N,aa as C,O as d,V as k,ab as A,ac as x,_ as T,ad as f,o as p,g as i,a as n,ae as y,c as h,f as a,Y as u,e as v,af as B,r as V}from"./app-K34Aos0E.js";import{B as O}from"./Button-CkIOIhC-.js";import{N as P}from"./Alert-CKlm5BJY.js";import{N as j}from"./Input-04jHTtK1.js";import"./browser-CYFPQBQD.js";const z=N({__name:"Token",setup(m,{expose:t}){t();const r=C({phone:"",password:"",verify_code:""}),e=d(),c=d(),s=d(),o=d(),_=d();async function w(){s.value=!0;const l=await(await fetch(`${k()}/alist/wopan/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json();if(s.value=!1,l.error){e.value=l.error;return}}async function b(){o.value=!0;const l=await(await fetch(`${k()}/alist/wopan/verify_code`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json();if(o.value=!1,l.error){c.value=l.error;return}_.value=l}const g={input:r,err1:e,err2:c,loading1:s,loading2:o,token:_,getVerifyCode:w,getToken:b,get NInput(){return j},get NSpace(){return x},get NButton(){return O},get NAlert(){return P},get NTag(){return A}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}});function G(m,t,r,e,c,s){return p(),f(e.NSpace,{size:"large",vertical:""},{default:i(()=>[n(e.NInput,{size:"large",placeholder:"Phone number",value:e.input.phone,"onUpdate:value":t[0]||(t[0]=o=>e.input.phone=o)},null,8,["value"]),n(e.NInput,{size:"large",placeholder:"Password",value:e.input.password,"onUpdate:value":t[1]||(t[1]=o=>e.input.password=o),type:"password"},null,8,["value"]),n(e.NButton,{type:"primary",secondary:"",size:"large",block:"",onClick:e.getVerifyCode,loading:e.loading1},{default:i(()=>t[3]||(t[3]=[a("Get Verify Code ")])),_:1},8,["loading"]),e.err1?(p(),f(e.NAlert,{key:0,title:"Error",type:"error"},{default:i(()=>[a(u(e.err1),1)]),_:1})):y("",!0),n(e.NInput,{size:"large",placeholder:"Verify code",value:e.input.verify_code,"onUpdate:value":t[2]||(t[2]=o=>e.input.verify_code=o)},null,8,["value"]),n(e.NButton,{type:"primary",size:"large",block:"",onClick:e.getToken,loading:e.loading2},{default:i(()=>t[4]||(t[4]=[a("Get Token")])),_:1},8,["loading"]),e.err2?(p(),f(e.NAlert,{key:1,title:"Error",type:"error"},{default:i(()=>[a(u(e.err2),1)]),_:1})):y("",!0),e.token?(p(),h(B,{key:2},[v("div",null,[t[5]||(t[5]=a("refresh_token: ")),n(e.NTag,{bordered:!1,type:"info"},{default:i(()=>[a(u(e.token.refresh_token),1)]),_:1})]),v("div",null,[t[6]||(t[6]=a("access_token: ")),n(e.NTag,{bordered:!1,type:"info"},{default:i(()=>[a(u(e.token.access_token),1)]),_:1})])],64)):y("",!0)]),_:1})}const I=T(z,[["render",G],["__file","Token.vue"]]),U=N({__name:"token.html",setup(m,{expose:t}){t();const r={get Token(){return I}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function H(m,t,r,e,c,s){const o=V("NaiveClient");return p(),h("div",null,[n(o,null,{default:i(()=>[n(e.Token)]),_:1})])}const F=T(U,[["render",H],["__file","token.html.vue"]]),L=JSON.parse('{"path":"/tool/wopan/token.html","title":"Get Wopan Token","lang":"en-US","frontmatter":{"title":"Get Wopan Token","toc":false,"head":[["meta",{"property":"og:url","content":"https://alist.nn.ci/tool/wopan/token.html"}],["meta",{"property":"og:site_name","content":"AList Docs"}],["meta",{"property":"og:title","content":"Get Wopan Token"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-12T07:42:01.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-12T07:42:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Get Wopan Token\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-12T07:42:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Andy Hsu\\",\\"url\\":\\"https://i.nn.ci\\"}]}"]]},"headers":[],"git":{"createdTime":1676628274000,"updatedTime":1686555721000,"contributors":[{"name":"Andy Hsu","username":"Andy Hsu","email":"i@nn.ci","commits":2,"url":"https://github.com/Andy Hsu"}]},"readingTime":{"minutes":0.06,"words":19},"filePathRelative":"tool/wopan/token.md","localizedDate":"February 17, 2023"}');export{F as comp,L as data};
