import{d as N,O as b,X as m,a5 as g,Z as y,_ as v,$ as i,o as c,g as d,f as s,a1 as _,e as t,a0 as C,a as S}from"./app-BYVCkMFV.js";import{N as P}from"./Input-BPd0b8cx.js";import{N as w}from"./Alert-CJ91sK0L.js";const x="iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v",V="jXiFMOPVPCWlO2M5CwWQzffpNPaGTRBG",h="https://alist.nn.ci/tool/baidu/callback",A=N({__name:"Callback",setup(k,{expose:r}){r();const o=new URL(window.location.href),e=o.searchParams.get("code"),p=o.searchParams.get("error"),f=o.searchParams.get("error_description"),a=b(),n=async()=>{const u=await(await fetch(`${m()}/alist/baidu/get_refresh_token?code=${e}`)).json();a.value=u};e&&!p&&n();const l={client_id:x,client_secret:V,callback_uri:h,url:o,code:e,error:p,error_description:f,token:a,getToken:n,get NAlert(){return w},get NSpace(){return y},get NSpin(){return g},get NInput(){return P}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}});function B(k,r,o,e,p,f){return!e.code||e.error?(c(),i(e.NAlert,{key:0,title:e.error||"Error",type:"error"},{default:d(()=>[s(_(e.error_description),1)]),_:1},8,["title"])):(c(),i(e.NSpace,{key:1,vertical:"",size:"large"},{default:d(()=>{var a,n,l;return[t("p",null,[r[0]||(r[0]=t("b",null,"client_id: ",-1)),s(_(e.client_id))]),t("p",null,[r[1]||(r[1]=t("b",null,"client_secret: ",-1)),s(_(e.client_secret))]),t("p",null,[r[2]||(r[2]=t("b",null,"redirect_uri: ",-1)),s(_(e.callback_uri))]),(a=e.token)!=null&&a.error||(n=e.token)!=null&&n.error_description?(c(),i(e.NAlert,{key:0,title:(l=e.token)==null?void 0:l.error,type:"error"},{default:d(()=>[s(_(e.token.error_description),1)]),_:1},8,["title"])):C("",!0),S(e.NSpace,{vertical:""},{default:d(()=>[r[3]||(r[3]=t("b",null,"refresh_token:",-1)),e.token?(c(),i(e.NInput,{key:1,type:"textarea",autosize:"",readonly:"",value:e.token.refresh_token},null,8,["value"])):(c(),i(e.NSpin,{key:0}))]),_:1})]}),_:1}))}const G=v(A,[["render",B],["__scopeId","data-v-ec73cb46"],["__file","Callback.vue"]]);export{G as C};
