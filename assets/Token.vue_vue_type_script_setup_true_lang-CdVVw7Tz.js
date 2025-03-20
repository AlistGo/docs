import{d as V,r as a,c as l,o as s,w as r,a as o,b as u,u as t,e as n,t as b,N as c,f as P,g as N}from"./app-CxziT0xt.js";import{N as w}from"./Input-DiKc-3Nd.js";import{B}from"./Button-DkKb5spW.js";import{N as x}from"./Alert-uLzPuiYE.js";import{N as q}from"./Image-BXwMYZ5-.js";const E=V({__name:"Token",setup(z){const p=a(""),k=a(""),y=a({uid:"",time:0,qrcode:"",sign:""}),i=a(""),m=a(""),_=a(!1);async function S(){_.value=!0,i.value="";const e=await(await fetch(N(`/alist/115/auth_device_code?app_id=${p.value}`))).json();if(_.value=!1,e.error){i.value=e.error;return}k.value=e.code_verifier,y.value=e.resp;const f=new URL(N("/qr"));f.searchParams.set("text",y.value.qrcode),m.value=f.toString()}const g=a(!1),d=a(""),v=a({access_token:"",refresh_token:"",expires_in:0});async function T(){g.value=!0,d.value="";const e=await(await fetch(N("/alist/115/get_token"),{method:"POST",body:JSON.stringify({code_verifier:k.value,uid:y.value.uid})})).json();if(g.value=!1,e.error){d.value=e.error;return}v.value=e.resp}return(C,e)=>(s(),l(t(c),{vertical:"",size:"large"},{default:r(()=>[o(t(w),{value:p.value,"onUpdate:value":e[0]||(e[0]=f=>p.value=f),placeholder:"APP ID, 不填则使用 Alist 默认提供"},null,8,["value"]),k.value?u("",!0):(s(),l(t(B),{key:0,block:"",type:"primary",onClick:S,loading:_.value},{default:r(()=>e[1]||(e[1]=[n("生成二维码")])),_:1},8,["loading"])),i.value?(s(),l(t(x),{key:1,title:"Error",type:"error"},{default:r(()=>[n(b(i.value),1)]),_:1})):u("",!0),m.value?(s(),l(t(c),{key:2,vertical:""},{default:r(()=>[o(t(c),{justify:"center"},{default:r(()=>[o(t(q),{width:"300",src:m.value},null,8,["src"])]),_:1}),o(t(x),{title:"扫描二维码",type:"info"},{default:r(()=>e[2]||(e[2]=[n("使用 115 APP 扫描二维码，然后点击下方按钮")])),_:1}),o(t(B),{size:"large",onClick:T,type:"info",block:"",loading:g.value},{default:r(()=>e[3]||(e[3]=[n("已扫码")])),_:1},8,["loading"]),d.value?(s(),l(t(x),{key:0,title:"Error",type:"error"},{default:r(()=>[n(b(d.value),1)]),_:1})):u("",!0)]),_:1})):u("",!0),v.value.refresh_token?(s(),l(t(c),{key:3,vertical:""},{default:r(()=>[e[4]||(e[4]=P("b",null,"refresh_token:",-1)),o(t(w),{type:"textarea",autosize:"",readonly:"",value:v.value.refresh_token},null,8,["value"]),e[5]||(e[5]=P("b",null,"access_token:",-1)),o(t(w),{type:"textarea",autosize:"",readonly:"",value:v.value.access_token},null,8,["value"])]),_:1})):u("",!0)]),_:1}))}});export{E as _};
