import{d as C,j as M,c as i,u as r,o as n,w as l,b as a,t as d,f as o,a as c,e as k,N as y,a4 as T,k as z,g as b,_ as B}from"./app-6tkzNA5U.js";import{B as P}from"./Button-DS6bN5lU.js";import{N as m}from"./Alert-C4_HXL4O.js";import{N as h}from"./Input-B_b6baF4.js";const U={key:2},j=C({__name:"Callback",setup(w){const u=new URL(window.location.href),g=u.searchParams.get("code"),p=u.searchParams.get("state"),f=u.searchParams.get("error"),v=u.searchParams.get("error_description"),e=M({refreshToken:"",accessToken:"",error1:"",errorMessage1:"",siteUrl:"",siteId:"",error2:"",errorMessage2:"",gettingSiteId:!1});g&&p&&!f&&(()=>{fetch(`${b()}/alist/onedrive/get_refresh_token`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:g,client:p})}).then(s=>s.json()).then(s=>{if(console.log(s),s.error){e.error1=s.error,e.errorMessage1=s.error_description;return}e.refreshToken=s.refresh_token,e.accessToken=s.access_token})})();const[I,N,_]=atob(p).split("::"),S=()=>{e.gettingSiteId=!0,fetch(`${b()}/alist/onedrive/get_site_id`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({site_url:e.siteUrl,access_token:e.accessToken,zone:_})}).then(s=>(e.gettingSiteId=!1,s.json())).then(s=>{if(s.error){e.error2=s.error,e.errorMessage2=s.error.message;return}e.siteId=s.id})};return(s,t)=>!r(g)||!r(p)||r(f)?(n(),i(r(m),{key:0,title:r(f)||"Error",type:"error"},{default:l(()=>[a(d(r(v)),1)]),_:1},8,["title"])):(n(),i(r(y),{key:1,vertical:"",size:"large"},{default:l(()=>[o("p",null,[t[1]||(t[1]=o("b",null,"client_id: ",-1)),a(d(r(I)),1)]),o("p",null,[t[2]||(t[2]=o("b",null,"client_secret: ",-1)),a(d(r(N)),1)]),o("p",null,[t[3]||(t[3]=o("b",null,"zone: ",-1)),a(d(r(_)),1)]),t[8]||(t[8]=o("p",null,[o("b",null,"redirect_uri: "),a("https://alist.nn.ci/tool/onedrive/callback")],-1)),e.error1||e.errorMessage1?(n(),i(r(m),{key:0,title:e.error1,type:"error"},{default:l(()=>[a(d(e.errorMessage1),1)]),_:1},8,["title"])):c("",!0),k(r(y),{vertical:""},{default:l(()=>[t[4]||(t[4]=o("b",null,"refresh_token:",-1)),!e.refreshToken&&!e.errorMessage1?(n(),i(r(T),{key:0})):(n(),i(r(h),{key:1,type:"textarea",autosize:"",readonly:"",value:e.refreshToken},null,8,["value"]))]),_:1}),e.accessToken?(n(),i(r(y),{key:1,vertical:"",size:"large"},{default:l(()=>[t[7]||(t[7]=o("h3",null,"Get sharepoint site ID",-1)),e.error2||e.errorMessage2?(n(),i(r(m),{key:0,title:e.error2,type:"error"},{default:l(()=>[a(d(e.errorMessage2),1)]),_:1},8,["title"])):c("",!0),k(r(h),{placeholder:"input site url (https://xx.sharepoint.xx/sites/xx)",size:"large",value:e.siteUrl,"onUpdate:value":t[0]||(t[0]=x=>e.siteUrl=x)},null,8,["value"]),k(r(P),{type:"primary",size:"large",onClick:S},{default:l(()=>t[5]||(t[5]=[a("Get SiteID")])),_:1}),e.gettingSiteId?(n(),i(r(T),{key:1})):e.siteId?(n(),z("p",U,[t[6]||(t[6]=o("b",null,"site_id: ",-1)),a(d(e.siteId),1)])):c("",!0)]),_:1})):c("",!0)]),_:1}))}}),J=B(j,[["__scopeId","data-v-109d5915"]]);export{J as C};
