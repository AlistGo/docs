import{d as g,r as w,c as n,u as e,o as s,w as p,b as l,t as c,f as a,a as x,e as h,N as m,a4 as C,_ as P}from"./app-6tkzNA5U.js";import{N as k}from"./Alert-C4_HXL4O.js";import{N as S}from"./Input-B_b6baF4.js";const y="a78d5a69054042fa936f6c77f9a0ae8b",v="9c119bbb04b346d2a52aa64401936b2b",T="https://alist.nn.ci/tool/yandex/callback",V=g({__name:"Callback",setup(z){const d=new URL(window.location.href),u=d.searchParams.get("code"),_=d.searchParams.get("error"),N=d.searchParams.get("error_description"),r=w();return u&&!_&&(async()=>{const o=new URLSearchParams;o.append("grant_type","authorization_code"),o.append("client_id",y),o.append("client_secret",v),o.append("code",u||"");const i=await(await fetch("https://oauth.yandex.com/token",{method:"POST",body:o})).json();r.value=i})(),(o,t)=>!e(u)||e(_)?(s(),n(e(k),{key:0,title:e(_)||"Error",type:"error"},{default:p(()=>[l(c(e(N)),1)]),_:1},8,["title"])):(s(),n(e(m),{key:1,vertical:"",size:"large"},{default:p(()=>{var i,f,b;return[a("p",null,[t[0]||(t[0]=a("b",null,"client_id: ",-1)),l(c(y))]),a("p",null,[t[1]||(t[1]=a("b",null,"client_secret: ",-1)),l(c(v))]),a("p",null,[t[2]||(t[2]=a("b",null,"redirect_uri: ",-1)),l(c(T))]),(i=r.value)!=null&&i.error||(f=r.value)!=null&&f.error_description?(s(),n(e(k),{key:0,title:(b=r.value)==null?void 0:b.error,type:"error"},{default:p(()=>[l(c(r.value.error_description),1)]),_:1},8,["title"])):x("",!0),h(e(m),{vertical:""},{default:p(()=>[t[3]||(t[3]=a("b",null,"refresh_token:",-1)),r.value?(s(),n(e(S),{key:1,type:"textarea",autosize:"",readonly:"",value:r.value.refresh_token},null,8,["value"])):(s(),n(e(C),{key:0}))]),_:1})]}),_:1}))}}),U=P(V,[["__scopeId","data-v-ceb76725"]]);export{U as C};
