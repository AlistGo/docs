import{d as u,L as g,M as S,a5 as h,O as b,_ as v,P as n,o as c,g as i,f as N,R as k,Q as w,a as C,e as x}from"./app-3Qodj0KA.js";import{N as P}from"./Input-m7prhmiJ.js";import{N as O}from"./Alert-Cgbv7d6K.js";const j=u({__name:"Callback",setup(m,{expose:s}){s();const r=new URL(window.location.href),e=r.searchParams.get("code"),l=r.searchParams.get("error"),_=r.searchParams.get("error_description"),t=r.searchParams.get("state")||"Ojo=",[a,o]=window.atob(t).split("::"),d=g(),p=async()=>{const y=await(await fetch(S()+"/alist/ali_open/code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e,grant_type:"authorization_code",client_id:a,client_secret:o})})).json();d.value=y};e&&!l&&p();const f={url:r,code:e,error:l,error_description:_,state:t,client_id:a,client_secret:o,token:d,getToken:p,get NAlert(){return O},get NSpace(){return b},get NSpin(){return h},get NInput(){return P}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}});function A(m,s,r,e,l,_){return!e.code||e.error?(c(),n(e.NAlert,{key:0,title:e.error||"Error",type:"error"},{default:i(()=>[N(k(e.error_description),1)]),_:1},8,["title"])):(c(),n(e.NSpace,{key:1,vertical:"",size:"large"},{default:i(()=>{var t,a,o;return[(t=e.token)!=null&&t.error||(a=e.token)!=null&&a.error?(c(),n(e.NAlert,{key:0,title:(o=e.token)==null?void 0:o.error,type:"error"},{default:i(()=>[N(k(e.token.error),1)]),_:1},8,["title"])):w("",!0),C(e.NSpace,{vertical:""},{default:i(()=>[s[0]||(s[0]=x("b",null,"refresh_token:",-1)),e.token?(c(),n(e.NInput,{key:1,type:"textarea",autosize:"",readonly:"",value:e.token.refresh_token},null,8,["value"])):(c(),n(e.NSpin,{key:0}))]),_:1})]}),_:1}))}const B=v(j,[["render",A],["__scopeId","data-v-5c4a4ac9"],["__file","Callback.vue"]]);export{B as C};
