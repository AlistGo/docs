import{d as b,a0 as S,M as h,a5 as T,O as x,_ as v,P as n,o as i,g as _,f as l,R as s,e as o,Q as C,a as P}from"./app-3Qodj0KA.js";import{N as M}from"./Input-m7prhmiJ.js";import{N as w}from"./Alert-Cgbv7d6K.js";const A=b({__name:"Callback",setup(m,{expose:r}){r();const f=`${location.origin}/tool/dropbox/callback`,e=new URL(window.location.href),c=e.searchParams.get("code"),d=e.searchParams.get("state"),p=e.searchParams.get("error"),y=e.searchParams.get("error_description"),[k,g]=atob(d).split("::"),a=S({refreshToken:"",accessToken:"",error1:"",errorMessage1:""}),N=()=>{fetch(`${h()}/alist/dropbox/token`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:c,client_id:k,client_secret:g,grant_type:"authorization_code",redirect_uri:f})}).then(t=>t.json()).then(t=>{if(console.log(t),t.error){a.error1=t.error,a.errorMessage1=t.error_description;return}a.refreshToken=t.refresh_token,a.accessToken=t.access_token})};c&&d&&!p&&N();const u={redirect_uri:f,url:e,code:c,client:d,error:p,error_description:y,client_id:k,client_secret:g,data:a,getToken:N,get NAlert(){return w},get NInput(){return M},get NSpace(){return x},get NSpin(){return T}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}});function I(m,r,f,e,c,d){return!e.code||!e.client||e.error?(i(),n(e.NAlert,{key:0,title:e.error||"Error",type:"error"},{default:_(()=>[l(s(e.error_description),1)]),_:1},8,["title"])):(i(),n(e.NSpace,{key:1,vertical:"",size:"large"},{default:_(()=>[o("p",null,[r[0]||(r[0]=o("b",null,"client_id: ",-1)),l(s(e.client_id),1)]),o("p",null,[r[1]||(r[1]=o("b",null,"client_secret: ",-1)),l(s(e.client_secret),1)]),o("p",null,[r[2]||(r[2]=o("b",null,"redirect_uri: ",-1)),l(s(e.redirect_uri))]),e.data.error1||e.data.errorMessage1?(i(),n(e.NAlert,{key:0,title:e.data.error1,type:"error"},{default:_(()=>[l(s(e.data.errorMessage1),1)]),_:1},8,["title"])):C("",!0),P(e.NSpace,{vertical:""},{default:_(()=>[r[3]||(r[3]=o("b",null,"refresh_token:",-1)),!e.data.refreshToken&&!e.data.errorMessage1?(i(),n(e.NSpin,{key:0})):(i(),n(e.NInput,{key:1,type:"textarea",autosize:"",readonly:"",value:e.data.refreshToken},null,8,["value"]))]),_:1})]),_:1}))}const z=v(A,[["render",I],["__scopeId","data-v-39f0fed5"],["__file","Callback.vue"]]);export{z as C};
