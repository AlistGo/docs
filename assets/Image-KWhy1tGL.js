import{aV as pe,aW as j,m as n,d as $,z as Je,q as J,R as _,aX as qe,h as M,g as we,aS as Qe,aT as et,k as me,J as U,K as k,aY as se,aP as tt,a4 as ot,y as xe,aZ as nt,a_ as it,ax as rt,aD as Y,aB as H,j as be,l as Ce,W as at,a$ as st,b0 as lt,an as le,b1 as ut,aH as X,H as ue,ar as P,v as ct,b2 as dt,B as ft,t as ce,b3 as de,x as ht}from"./app-tD6g-nN9.js";import{a as vt}from"./arrayReduce-3kzx2or8.js";function gt(e){return function(a){return e==null?void 0:e[a]}}var pt={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},wt=gt(pt);const mt=wt;var xt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,bt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",Ot="\\u20d0-\\u20ff",St=bt+Ct+Ot,Mt="["+St+"]",Rt=RegExp(Mt,"g");function Lt(e){return e=pe(e),e&&e.replace(xt,mt).replace(Rt,"")}var Pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function yt(e){return e.match(Pt)||[]}var kt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function It(e){return kt.test(e)}var Oe="\\ud800-\\udfff",zt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",Et="\\u20d0-\\u20ff",At=zt+Tt+Et,Se="\\u2700-\\u27bf",Me="a-z\\xdf-\\xf6\\xf8-\\xff",Ht="\\xac\\xb1\\xd7\\xf7",Dt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",jt="\\u2000-\\u206f",$t=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Re="A-Z\\xc0-\\xd6\\xd8-\\xde",_t="\\ufe0e\\ufe0f",Le=Ht+Dt+jt+$t,Pe="['’]",fe="["+Le+"]",Zt="["+At+"]",ye="\\d+",Bt="["+Se+"]",ke="["+Me+"]",Ie="[^"+Oe+Le+ye+Se+Me+Re+"]",Wt="\\ud83c[\\udffb-\\udfff]",Nt="(?:"+Zt+"|"+Wt+")",Vt="[^"+Oe+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Te="[\\ud800-\\udbff][\\udc00-\\udfff]",A="["+Re+"]",Ut="\\u200d",he="(?:"+ke+"|"+Ie+")",Yt="(?:"+A+"|"+Ie+")",ve="(?:"+Pe+"(?:d|ll|m|re|s|t|ve))?",ge="(?:"+Pe+"(?:D|LL|M|RE|S|T|VE))?",Ee=Nt+"?",Ae="["+_t+"]?",Xt="(?:"+Ut+"(?:"+[Vt,ze,Te].join("|")+")"+Ae+Ee+")*",Ft="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Kt=Ae+Ee+Xt,Jt="(?:"+[Bt,ze,Te].join("|")+")"+Kt,qt=RegExp([A+"?"+ke+"+"+ve+"(?="+[fe,A,"$"].join("|")+")",Yt+"+"+ge+"(?="+[fe,A+he,"$"].join("|")+")",A+"?"+he+"+"+ve,A+"+"+ge,Gt,Ft,ye,Jt].join("|"),"g");function Qt(e){return e.match(qt)||[]}function eo(e,a,i){return e=pe(e),a=i?void 0:a,a===void 0?It(e)?Qt(e):yt(e):e.match(a)||[]}var to="['’]",oo=RegExp(to,"g");function no(e){return function(a){return vt(eo(Lt(a).replace(oo,"")),e,"")}}var io=no(function(e,a,i){return e+(i?"-":"")+a.toLowerCase()});const ro=io,ao=j("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",fill:"currentColor"}),n("path",{d:"M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",fill:"currentColor"}))),so=j("rotateClockwise",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",fill:"currentColor"}),n("path",{d:"M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",fill:"currentColor"}))),lo=j("zoomIn",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",fill:"currentColor"}),n("path",{d:"M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",fill:"currentColor"}))),uo=j("zoomOut",n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",fill:"currentColor"}),n("path",{d:"M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",fill:"currentColor"}))),co=$({name:"ResizeSmall",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},n("g",{fill:"none"},n("path",{d:"M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",fill:"currentColor"})))}}),fo=Je&&"loading"in document.createElement("img"),ho=(e={})=>{var a;const{root:i=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof i=="string"?document.querySelector(i):i)||document.documentElement})}},F=new WeakMap,G=new WeakMap,K=new WeakMap,vo=(e,a,i)=>{if(!e)return()=>{};const u=ho(a),{root:s}=u.options;let h;const b=F.get(s);b?h=b:(h=new Map,F.set(s,h));let g,v;h.has(u.hash)?(v=h.get(u.hash),v[1].has(e)||(g=v[0],v[1].add(e),g.observe(e))):(g=new IntersectionObserver(p=>{p.forEach(I=>{if(I.isIntersecting){const R=G.get(I.target),L=K.get(I.target);R&&R(),L&&(L.value=!0)}})},u.options),g.observe(e),v=[g,new Set([e])],h.set(u.hash,v));let l=!1;const c=()=>{l||(G.delete(e),K.delete(e),l=!0,v[1].has(e)&&(v[0].unobserve(e),v[1].delete(e)),v[1].size<=0&&h.delete(u.hash),h.size||F.delete(s))};return G.set(e,c),K.set(e,i),c},go=Object.assign(Object.assign({},et),_.props),po=$({name:"Tooltip",props:go,__popover__:!0,setup(e){const{mergedClsPrefixRef:a}=J(e),i=_("Tooltip","-tooltip",void 0,qe,e,a),u=M(null);return Object.assign(Object.assign({},{syncPosition(){u.value.syncPosition()},setShow(h){u.value.setShow(h)}}),{popoverRef:u,mergedTheme:i,popoverThemeOverrides:we(()=>i.value.self)})},render(){const{mergedTheme:e,internalExtraClass:a}=this;return n(Qe,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:a.concat("tooltip"),ref:"popoverRef"}),this.$slots)}}),He=Object.assign(Object.assign({},_.props),{onPreviewPrev:Function,onPreviewNext:Function,showToolbar:{type:Boolean,default:!0},showToolbarTooltip:Boolean}),De=me("n-image"),wo=(e,a)=>{if(!e)return;const i=document.createElement("a");i.href=e,a!==void 0&&(i.download=a),document.body.appendChild(i),i.click(),document.body.removeChild(i)},mo=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",fill:"currentColor"})),xo=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",fill:"currentColor"})),bo=n("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",fill:"currentColor"})),Co=n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 1024 1024"},n("path",{fill:"currentColor",d:"M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"})),Oo=U([U("body >",[k("image-container","position: fixed;")]),k("image-preview-container",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `),k("image-preview-overlay",`
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `,[se()]),k("image-preview-toolbar",`
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[k("base-icon",`
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `),se()]),k("image-preview-wrapper",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `,[tt()]),k("image-preview",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `),k("image",`
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `,[ot("preview-disabled",`
 cursor: pointer;
 `),U("img",`
 border-radius: inherit;
 `)])]),D=32,So=$({name:"ImagePreview",props:Object.assign(Object.assign({},He),{onNext:Function,onPrev:Function,clsPrefix:{type:String,required:!0}}),setup(e){const a=_("Image","-image",Oo,nt,e,xe(e,"clsPrefix"));let i=null;const u=M(null),s=M(null),h=M(void 0),b=M(!1),g=M(!1),{localeRef:v}=it("Image");function l(){const{value:t}=s;if(!i||!t)return;const{style:r}=t,o=i.getBoundingClientRect(),d=o.left+o.width/2,f=o.top+o.height/2;r.transformOrigin=`${d}px ${f}px`}function c(t){var r,o;switch(t.key){case" ":t.preventDefault();break;case"ArrowLeft":(r=e.onPrev)===null||r===void 0||r.call(e);break;case"ArrowRight":(o=e.onNext)===null||o===void 0||o.call(e);break;case"Escape":ie();break}}rt(b,t=>{t?Y("keydown",document,c):H("keydown",document,c)}),be(()=>{H("keydown",document,c)});let p=0,I=0,R=0,L=0,Z=0,B=0,q=0,Q=0,W=!1;function ee(t){const{clientX:r,clientY:o}=t;R=r-p,L=o-I,ft(O)}function je(t){const{mouseUpClientX:r,mouseUpClientY:o,mouseDownClientX:d,mouseDownClientY:f}=t,x=d-r,C=f-o,S=`vertical${C>0?"Top":"Bottom"}`,y=`horizontal${x>0?"Left":"Right"}`;return{moveVerticalDirection:S,moveHorizontalDirection:y,deltaHorizontal:x,deltaVertical:C}}function te(t){const{value:r}=u;if(!r)return{offsetX:0,offsetY:0};const o=r.getBoundingClientRect(),{moveVerticalDirection:d,moveHorizontalDirection:f,deltaHorizontal:x,deltaVertical:C}=t||{};let S=0,y=0;return o.width<=window.innerWidth?S=0:o.left>0?S=(o.width-window.innerWidth)/2:o.right<window.innerWidth?S=-(o.width-window.innerWidth)/2:f==="horizontalRight"?S=Math.min((o.width-window.innerWidth)/2,Z-(x??0)):S=Math.max(-((o.width-window.innerWidth)/2),Z-(x??0)),o.height<=window.innerHeight?y=0:o.top>0?y=(o.height-window.innerHeight)/2:o.bottom<window.innerHeight?y=-(o.height-window.innerHeight)/2:d==="verticalBottom"?y=Math.min((o.height-window.innerHeight)/2,B-(C??0)):y=Math.max(-((o.height-window.innerHeight)/2),B-(C??0)),{offsetX:S,offsetY:y}}function oe(t){H("mousemove",document,ee),H("mouseup",document,oe);const{clientX:r,clientY:o}=t;W=!1;const d=je({mouseUpClientX:r,mouseUpClientY:o,mouseDownClientX:q,mouseDownClientY:Q}),f=te(d);R=f.offsetX,L=f.offsetY,O()}const w=Ce(De,null);function $e(t){var r,o;if((o=(r=w==null?void 0:w.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onMousedown)===null||o===void 0||o.call(r,t),t.button!==0)return;const{clientX:d,clientY:f}=t;W=!0,p=d-R,I=f-L,Z=R,B=L,q=d,Q=f,O(),Y("mousemove",document,ee),Y("mouseup",document,oe)}function _e(t){var r,o;(o=(r=w==null?void 0:w.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onDblclick)===null||o===void 0||o.call(r,t);const d=ne();m=m===d?1:d,O()}const N=1.5;let z=0,m=1,T=0;function V(){m=1,z=0}function Ze(){var t;V(),T=0,(t=e.onPrev)===null||t===void 0||t.call(e)}function Be(){var t;V(),T=0,(t=e.onNext)===null||t===void 0||t.call(e)}function We(){T-=90,O()}function Ne(){T+=90,O()}function Ve(){const{value:t}=u;if(!t)return 1;const{innerWidth:r,innerHeight:o}=window,d=Math.max(1,t.naturalHeight/(o-D)),f=Math.max(1,t.naturalWidth/(r-D));return Math.max(3,d*2,f*2)}function ne(){const{value:t}=u;if(!t)return 1;const{innerWidth:r,innerHeight:o}=window,d=t.naturalHeight/(o-D),f=t.naturalWidth/(r-D);return d<1&&f<1?1:Math.max(d,f)}function Ue(){const t=Ve();m<t&&(z+=1,m=Math.min(t,Math.pow(N,z)),O())}function Ye(){if(m>.5){const t=m;z-=1,m=Math.max(.5,Math.pow(N,z));const r=t-m;O(!1);const o=te();m+=r,O(!1),m-=r,R=o.offsetX,L=o.offsetY,O()}}function Xe(){const t=h.value;t&&wo(t,void 0)}function O(t=!0){var r;const{value:o}=u;if(!o)return;const{style:d}=o,f=dt((r=w==null?void 0:w.previewedImgPropsRef.value)===null||r===void 0?void 0:r.style);let x="";if(typeof f=="string")x=f+";";else for(const S in f)x+=`${ro(S)}: ${f[S]};`;const C=`transform-origin: center; transform: translateX(${R}px) translateY(${L}px) rotate(${T}deg) scale(${m});`;W?d.cssText=x+"cursor: grabbing; transition: none;"+C:d.cssText=x+"cursor: grab;"+C+(t?"":"transition: none;"),t||o.offsetHeight}function ie(){b.value=!b.value,g.value=!0}function Fe(){m=ne(),z=Math.ceil(Math.log(m)/Math.log(N)),R=0,L=0,O()}const Ge={setPreviewSrc:t=>{h.value=t},setThumbnailEl:t=>{i=t},toggleShow:ie};function Ke(t,r){if(e.showToolbarTooltip){const{value:o}=a;return n(po,{to:!1,theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,keepAliveOnHover:!1},{default:()=>v.value[r],trigger:()=>t})}else return t}const re=we(()=>{const{common:{cubicBezierEaseInOut:t},self:{toolbarIconColor:r,toolbarBorderRadius:o,toolbarBoxShadow:d,toolbarColor:f}}=a.value;return{"--n-bezier":t,"--n-toolbar-icon-color":r,"--n-toolbar-color":f,"--n-toolbar-border-radius":o,"--n-toolbar-box-shadow":d}}),{inlineThemeDisabled:ae}=J(),E=ae?at("image-preview",void 0,re,e):void 0;return Object.assign({previewRef:u,previewWrapperRef:s,previewSrc:h,show:b,appear:st(),displayed:g,previewedImgProps:w==null?void 0:w.previewedImgPropsRef,handleWheel(t){t.preventDefault()},handlePreviewMousedown:$e,handlePreviewDblclick:_e,syncTransformOrigin:l,handleAfterLeave:()=>{V(),T=0,g.value=!1},handleDragStart:t=>{var r,o;(o=(r=w==null?void 0:w.previewedImgPropsRef.value)===null||r===void 0?void 0:r.onDragstart)===null||o===void 0||o.call(r,t),t.preventDefault()},zoomIn:Ue,zoomOut:Ye,handleDownloadClick:Xe,rotateCounterclockwise:We,rotateClockwise:Ne,handleSwitchPrev:Ze,handleSwitchNext:Be,withTooltip:Ke,resizeToOrignalImageSize:Fe,cssVars:ae?void 0:re,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender},Ge)},render(){var e,a;const{clsPrefix:i}=this;return n(ue,null,(a=(e=this.$slots).default)===null||a===void 0?void 0:a.call(e),n(lt,{show:this.show},{default:()=>{var u;return this.show||this.displayed?((u=this.onRender)===null||u===void 0||u.call(this),le(n("div",{class:[`${i}-image-preview-container`,this.themeClass],style:this.cssVars,onWheel:this.handleWheel},n(X,{name:"fade-in-transition",appear:this.appear},{default:()=>this.show?n("div",{class:`${i}-image-preview-overlay`,onClick:this.toggleShow}):null}),this.showToolbar?n(X,{name:"fade-in-transition",appear:this.appear},{default:()=>{if(!this.show)return null;const{withTooltip:s}=this;return n("div",{class:`${i}-image-preview-toolbar`},this.onPrev?n(ue,null,s(n(P,{clsPrefix:i,onClick:this.handleSwitchPrev},{default:()=>mo}),"tipPrevious"),s(n(P,{clsPrefix:i,onClick:this.handleSwitchNext},{default:()=>xo}),"tipNext")):null,s(n(P,{clsPrefix:i,onClick:this.rotateCounterclockwise},{default:()=>n(so,null)}),"tipCounterclockwise"),s(n(P,{clsPrefix:i,onClick:this.rotateClockwise},{default:()=>n(ao,null)}),"tipClockwise"),s(n(P,{clsPrefix:i,onClick:this.resizeToOrignalImageSize},{default:()=>n(co,null)}),"tipOriginalSize"),s(n(P,{clsPrefix:i,onClick:this.zoomOut},{default:()=>n(uo,null)}),"tipZoomOut"),s(n(P,{clsPrefix:i,onClick:this.zoomIn},{default:()=>n(lo,null)}),"tipZoomIn"),s(n(P,{clsPrefix:i,onClick:this.handleDownloadClick},{default:()=>Co}),"tipDownload"),s(n(P,{clsPrefix:i,onClick:this.toggleShow},{default:()=>bo}),"tipClose"))}}):null,n(X,{name:"fade-in-scale-up-transition",onAfterLeave:this.handleAfterLeave,appear:this.appear,onEnter:this.syncTransformOrigin,onBeforeLeave:this.syncTransformOrigin},{default:()=>{const{previewedImgProps:s={}}=this;return le(n("div",{class:`${i}-image-preview-wrapper`,ref:"previewWrapperRef"},n("img",Object.assign({},s,{draggable:!1,onMousedown:this.handlePreviewMousedown,onDblclick:this.handlePreviewDblclick,class:[`${i}-image-preview`,s.class],key:this.previewSrc,src:this.previewSrc,ref:"previewRef",onDragstart:this.handleDragStart}))),[[ct,this.show]])}})),[[ut,{enabled:this.show}]])):null}}))}}),Mo=me("n-image-group"),Ro=Object.assign({alt:String,height:[String,Number],imgProps:Object,previewedImgProps:Object,lazy:Boolean,intersectionObserverOptions:Object,objectFit:{type:String,default:"fill"},previewSrc:String,fallbackSrc:String,width:[String,Number],src:String,previewDisabled:Boolean,loadDescription:String,onError:Function,onLoad:Function},He),yo=$({name:"Image",props:Ro,inheritAttrs:!1,setup(e){const a=M(null),i=M(!1),u=M(null),s=Ce(Mo,null),{mergedClsPrefixRef:h}=s||J(e),b={click:()=>{if(e.previewDisabled||i.value)return;const l=e.previewSrc||e.src;if(s){s.setPreviewSrc(l),s.setThumbnailEl(a.value),s.toggleShow();return}const{value:c}=u;c&&(c.setPreviewSrc(l),c.setThumbnailEl(a.value),c.toggleShow())}},g=M(!e.lazy);ce(()=>{var l;(l=a.value)===null||l===void 0||l.setAttribute("data-group-id",(s==null?void 0:s.groupId)||"")}),ce(()=>{if(e.lazy&&e.intersectionObserverOptions){let l;const c=de(()=>{l==null||l(),l=void 0,l=vo(a.value,e.intersectionObserverOptions,g)});be(()=>{c(),l==null||l()})}}),de(()=>{var l;e.src,(l=e.imgProps)===null||l===void 0||l.src,i.value=!1});const v=M(!1);return ht(De,{previewedImgPropsRef:xe(e,"previewedImgProps")}),Object.assign({mergedClsPrefix:h,groupId:s==null?void 0:s.groupId,previewInstRef:u,imageRef:a,showError:i,shouldStartLoading:g,loaded:v,mergedOnClick:l=>{var c,p;b.click(),(p=(c=e.imgProps)===null||c===void 0?void 0:c.onClick)===null||p===void 0||p.call(c,l)},mergedOnError:l=>{if(!g.value)return;i.value=!0;const{onError:c,imgProps:{onError:p}={}}=e;c==null||c(l),p==null||p(l)},mergedOnLoad:l=>{const{onLoad:c,imgProps:{onLoad:p}={}}=e;c==null||c(l),p==null||p(l),v.value=!0}},b)},render(){var e,a;const{mergedClsPrefix:i,imgProps:u={},loaded:s,$attrs:h,lazy:b}=this,g=(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e),v=this.src||u.src,l=n("img",Object.assign(Object.assign({},u),{ref:"imageRef",width:this.width||u.width,height:this.height||u.height,src:this.showError?this.fallbackSrc:b&&this.intersectionObserverOptions?this.shouldStartLoading?v:void 0:v,alt:this.alt||u.alt,"aria-label":this.alt||u.alt,onClick:this.mergedOnClick,onError:this.mergedOnError,onLoad:this.mergedOnLoad,loading:fo&&b&&!this.intersectionObserverOptions?"lazy":"eager",style:[u.style||"",g&&!s?{height:"0",width:"0",visibility:"hidden"}:"",{objectFit:this.objectFit}],"data-error":this.showError,"data-preview-src":this.previewSrc||this.src}));return n("div",Object.assign({},h,{role:"none",class:[h.class,`${i}-image`,(this.previewDisabled||this.showError)&&`${i}-image--preview-disabled`]}),this.groupId?l:n(So,{theme:this.theme,themeOverrides:this.themeOverrides,clsPrefix:i,ref:"previewInstRef",showToolbar:this.showToolbar,showToolbarTooltip:this.showToolbarTooltip},{default:()=>l}),!s&&g)}});export{yo as N};