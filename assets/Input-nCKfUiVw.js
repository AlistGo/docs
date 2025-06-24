import{d as Z,h as a,aa as ln,p as m,K as l,q as z,ar as K,s as C,r as w,a5 as ce,a7 as sn,B as _,ax as un,T as J,ay as ge,O as se,az as cn,F as dn,aA as fn,aB as hn,P as be,y as vn,z as Se,aC as pn,an as gn,aD as bn,ae as me,af as mn,ah as xn,ag as xe,ak as wn,aE as yn,aF as we,aG as Cn,X as zn,G as ue,Y as An,C as Sn,ap as ye,ad as Ce,a3 as y,aH as ze}from"./app-S_qofRqu.js";import{i as Rn}from"./browser-CXQUKHhT.js";const Fn=Z({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),_n=Z({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Re=ln("n-input"),Bn=m("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[l("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),l("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),l("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),C("&:-webkit-autofill ~",[l("placeholder","display: none;")])]),z("round",[K("textarea","border-radius: calc(var(--n-height) / 2);")]),l("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),z("textarea",[l("placeholder","overflow: visible;")]),K("autosize","width: 100%;"),z("autosize",[l("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),m("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),l("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),l("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("&[type=password]::-ms-reveal","display: none;"),C("+",[l("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),K("textarea",[l("placeholder","white-space: nowrap;")]),l("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),z("textarea","width: 100%;",[m("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),z("resizable",[m("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),l("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),l("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),z("pair",[l("input-el, placeholder","text-align: center;"),l("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[m("icon",`
 color: var(--n-icon-color);
 `),m("base-icon",`
 color: var(--n-icon-color);
 `)])]),z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[l("border","border: var(--n-border-disabled);"),l("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),l("placeholder","color: var(--n-placeholder-color-disabled);"),l("separator","color: var(--n-text-color-disabled);",[m("icon",`
 color: var(--n-icon-color-disabled);
 `),m("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),m("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),l("suffix, prefix","color: var(--n-text-color-disabled);",[m("icon",`
 color: var(--n-icon-color-disabled);
 `),m("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),K("disabled",[l("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[l("state-border","border: var(--n-border-hover);")]),z("focus","background-color: var(--n-color-focus);",[l("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),l("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),l("state-border",`
 border-color: #0000;
 z-index: 1;
 `),l("prefix","margin-right: 4px;"),l("suffix",`
 margin-left: 4px;
 `),l("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[m("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),m("base-clear",`
 font-size: var(--n-icon-size);
 `,[l("placeholder",[m("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[m("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),m("base-icon",`
 font-size: var(--n-icon-size);
 `)]),m("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(n=>z(`${n}-status`,[K("disabled",[m("base-loading",`
 color: var(--n-loading-color-${n})
 `),l("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${n});
 `),l("state-border",`
 border: var(--n-border-${n});
 `),C("&:hover",[l("state-border",`
 border: var(--n-border-hover-${n});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${n});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${n});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),En=m("input",[z("disabled",[l("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function Pn(n){let x=0;for(const t of n)x++;return x}function Q(n){return n===""||n==null}function $n(n){const x=w(null);function t(){const{value:b}=n;if(!(b!=null&&b.focus)){R();return}const{selectionStart:f,selectionEnd:s,value:c}=b;if(f==null||s==null){R();return}x.value={start:f,end:s,beforeText:c.slice(0,f),afterText:c.slice(s)}}function S(){var b;const{value:f}=x,{value:s}=n;if(!f||!s)return;const{value:c}=s,{start:u,beforeText:i,afterText:p}=f;let g=c.length;if(c.endsWith(p))g=c.length-p.length;else if(c.startsWith(i))g=i.length;else{const T=i[u-1],A=c.indexOf(T,u-1);A!==-1&&(g=A+1)}(b=s.setSelectionRange)===null||b===void 0||b.call(s,g,g)}function R(){x.value=null}return ce(n,R),{recordCursor:t,restoreCursor:S}}const Ae=Z({name:"InputWordCount",setup(n,{slots:x}){const{mergedValueRef:t,maxlengthRef:S,mergedClsPrefixRef:R,countGraphemesRef:b}=sn(Re),f=_(()=>{const{value:s}=t;return s===null||Array.isArray(s)?0:(b.value||Pn)(s)});return()=>{const{value:s}=S,{value:c}=t;return a("span",{class:`${R.value}-input-word-count`},un(x.default,{value:c===null||Array.isArray(c)?"":c},()=>[s===void 0?f.value:`${f.value} / ${s}`]))}}}),Tn=Object.assign(Object.assign({},Se.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Mn=Z({name:"Input",props:Tn,slots:Object,setup(n){const{mergedClsPrefixRef:x,mergedBorderedRef:t,inlineThemeDisabled:S,mergedRtlRef:R}=vn(n),b=Se("Input","-input",Bn,pn,n,x);Rn&&gn("-input-safari",En,x);const f=w(null),s=w(null),c=w(null),u=w(null),i=w(null),p=w(null),g=w(null),T=$n(g),A=w(null),{localeRef:Fe}=bn("Input"),j=w(n.defaultValue),_e=me(n,"value"),F=mn(_e,j),V=xn(n),{mergedSizeRef:ee,mergedDisabledRef:k,mergedStatusRef:Be}=V,I=w(!1),W=w(!1),B=w(!1),D=w(!1);let oe=null;const ne=_(()=>{const{placeholder:e,pair:o}=n;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[Fe.value.placeholder]:[e]}),Ee=_(()=>{const{value:e}=B,{value:o}=F,{value:r}=ne;return!e&&(Q(o)||Array.isArray(o)&&Q(o[0]))&&r[0]}),Pe=_(()=>{const{value:e}=B,{value:o}=F,{value:r}=ne;return!e&&r[1]&&(Q(o)||Array.isArray(o)&&Q(o[1]))}),re=xe(()=>n.internalForceFocus||I.value),$e=xe(()=>{if(k.value||n.readonly||!n.clearable||!re.value&&!W.value)return!1;const{value:e}=F,{value:o}=re;return n.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(W.value||o):!!e&&(W.value||o)}),te=_(()=>{const{showPasswordOn:e}=n;if(e)return e;if(n.showPasswordToggle)return"click"}),O=w(!1),Te=_(()=>{const{textDecoration:e}=n;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),de=w(void 0),ke=()=>{var e,o;if(n.type==="textarea"){const{autosize:r}=n;if(r&&(de.value=(o=(e=A.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!s.value||typeof r=="boolean")return;const{paddingTop:h,paddingBottom:v,lineHeight:d}=window.getComputedStyle(s.value),E=Number(h.slice(0,-2)),P=Number(v.slice(0,-2)),$=Number(d.slice(0,-2)),{value:N}=c;if(!N)return;if(r.minRows){const H=Math.max(r.minRows,1),le=`${E+P+$*H}px`;N.style.minHeight=le}if(r.maxRows){const H=`${E+P+$*r.maxRows}px`;N.style.maxHeight=H}}},Ie=_(()=>{const{maxlength:e}=n;return e===void 0?void 0:Number(e)});wn(()=>{const{value:e}=F;Array.isArray(e)||ie(e)});const Me=yn().proxy;function U(e,o){const{onUpdateValue:r,"onUpdate:value":h,onInput:v}=n,{nTriggerFormInput:d}=V;r&&y(r,e,o),h&&y(h,e,o),v&&y(v,e,o),j.value=e,d()}function L(e,o){const{onChange:r}=n,{nTriggerFormChange:h}=V;r&&y(r,e,o),j.value=e,h()}function Ve(e){const{onBlur:o}=n,{nTriggerFormBlur:r}=V;o&&y(o,e),r()}function We(e){const{onFocus:o}=n,{nTriggerFormFocus:r}=V;o&&y(o,e),r()}function De(e){const{onClear:o}=n;o&&y(o,e)}function Oe(e){const{onInputBlur:o}=n;o&&y(o,e)}function Ne(e){const{onInputFocus:o}=n;o&&y(o,e)}function He(){const{onDeactivate:e}=n;e&&y(e)}function Ke(){const{onActivate:e}=n;e&&y(e)}function je(e){const{onClick:o}=n;o&&y(o,e)}function Ue(e){const{onWrapperFocus:o}=n;o&&y(o,e)}function Le(e){const{onWrapperBlur:o}=n;o&&y(o,e)}function Ge(){B.value=!0}function Xe(e){B.value=!1,e.target===p.value?G(e,1):G(e,0)}function G(e,o=0,r="input"){const h=e.target.value;if(ie(h),e instanceof InputEvent&&!e.isComposing&&(B.value=!1),n.type==="textarea"){const{value:d}=A;d&&d.syncUnifiedContainer()}if(oe=h,B.value)return;T.recordCursor();const v=Ye(h);if(v)if(!n.pair)r==="input"?U(h,{source:o}):L(h,{source:o});else{let{value:d}=F;Array.isArray(d)?d=[d[0],d[1]]:d=["",""],d[o]=h,r==="input"?U(d,{source:o}):L(d,{source:o})}Me.$forceUpdate(),v||ye(T.restoreCursor)}function Ye(e){const{countGraphemes:o,maxlength:r,minlength:h}=n;if(o){let d;if(r!==void 0&&(d===void 0&&(d=o(e)),d>Number(r))||h!==void 0&&(d===void 0&&(d=o(e)),d<Number(r)))return!1}const{allowInput:v}=n;return typeof v=="function"?v(e):!0}function qe(e){Oe(e),e.relatedTarget===f.value&&He(),e.relatedTarget!==null&&(e.relatedTarget===i.value||e.relatedTarget===p.value||e.relatedTarget===s.value)||(D.value=!1),X(e,"blur"),g.value=null}function Je(e,o){Ne(e),I.value=!0,D.value=!0,Ke(),X(e,"focus"),o===0?g.value=i.value:o===1?g.value=p.value:o===2&&(g.value=s.value)}function Qe(e){n.passivelyActivated&&(Le(e),X(e,"blur"))}function Ze(e){n.passivelyActivated&&(I.value=!0,Ue(e),X(e,"focus"))}function X(e,o){e.relatedTarget!==null&&(e.relatedTarget===i.value||e.relatedTarget===p.value||e.relatedTarget===s.value||e.relatedTarget===f.value)||(o==="focus"?(We(e),I.value=!0):o==="blur"&&(Ve(e),I.value=!1))}function eo(e,o){G(e,o,"change")}function oo(e){je(e)}function no(e){De(e),fe()}function fe(){n.pair?(U(["",""],{source:"clear"}),L(["",""],{source:"clear"})):(U("",{source:"clear"}),L("",{source:"clear"}))}function ro(e){const{onMousedown:o}=n;o&&o(e);const{tagName:r}=e.target;if(r!=="INPUT"&&r!=="TEXTAREA"){if(n.resizable){const{value:h}=f;if(h){const{left:v,top:d,width:E,height:P}=h.getBoundingClientRect(),$=14;if(v+E-$<e.clientX&&e.clientX<v+E&&d+P-$<e.clientY&&e.clientY<d+P)return}}e.preventDefault(),I.value||he()}}function to(){var e;W.value=!0,n.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseEnterWrapper())}function ao(){var e;W.value=!1,n.type==="textarea"&&((e=A.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function io(){k.value||te.value==="click"&&(O.value=!O.value)}function lo(e){if(k.value)return;e.preventDefault();const o=h=>{h.preventDefault(),ze("mouseup",document,o)};if(Ce("mouseup",document,o),te.value!=="mousedown")return;O.value=!0;const r=()=>{O.value=!1,ze("mouseup",document,r)};Ce("mouseup",document,r)}function so(e){n.onKeyup&&y(n.onKeyup,e)}function uo(e){switch(n.onKeydown&&y(n.onKeydown,e),e.key){case"Escape":ae();break;case"Enter":co(e);break}}function co(e){var o,r;if(n.passivelyActivated){const{value:h}=D;if(h){n.internalDeactivateOnEnter&&ae();return}e.preventDefault(),n.type==="textarea"?(o=s.value)===null||o===void 0||o.focus():(r=i.value)===null||r===void 0||r.focus()}}function ae(){n.passivelyActivated&&(D.value=!1,ye(()=>{var e;(e=f.value)===null||e===void 0||e.focus()}))}function he(){var e,o,r;k.value||(n.passivelyActivated?(e=f.value)===null||e===void 0||e.focus():((o=s.value)===null||o===void 0||o.focus(),(r=i.value)===null||r===void 0||r.focus()))}function fo(){var e;!((e=f.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function ho(){var e,o;(e=s.value)===null||e===void 0||e.select(),(o=i.value)===null||o===void 0||o.select()}function vo(){k.value||(s.value?s.value.focus():i.value&&i.value.focus())}function po(){const{value:e}=f;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ae()}function go(e){if(n.type==="textarea"){const{value:o}=s;o==null||o.scrollTo(e)}else{const{value:o}=i;o==null||o.scrollTo(e)}}function ie(e){const{type:o,pair:r,autosize:h}=n;if(!r&&h)if(o==="textarea"){const{value:v}=c;v&&(v.textContent=`${e??""}\r
`)}else{const{value:v}=u;v&&(e?v.textContent=e:v.innerHTML="&nbsp;")}}function bo(){ke()}const ve=w({top:"0"});function mo(e){var o;const{scrollTop:r}=e.target;ve.value.top=`${-r}px`,(o=A.value)===null||o===void 0||o.syncUnifiedContainer()}let Y=null;we(()=>{const{autosize:e,type:o}=n;e&&o==="textarea"?Y=ce(F,r=>{!Array.isArray(r)&&r!==oe&&ie(r)}):Y==null||Y()});let q=null;we(()=>{n.type==="textarea"?q=ce(F,e=>{var o;!Array.isArray(e)&&e!==oe&&((o=A.value)===null||o===void 0||o.syncUnifiedContainer())}):q==null||q()}),Cn(Re,{mergedValueRef:F,maxlengthRef:Ie,mergedClsPrefixRef:x,countGraphemesRef:me(n,"countGraphemes")});const xo={wrapperElRef:f,inputElRef:i,textareaElRef:s,isCompositing:B,clear:fe,focus:he,blur:fo,select:ho,deactivate:po,activate:vo,scrollTo:go},wo=zn("Input",R,x),pe=_(()=>{const{value:e}=ee,{common:{cubicBezierEaseInOut:o},self:{color:r,borderRadius:h,textColor:v,caretColor:d,caretColorError:E,caretColorWarning:P,textDecorationColor:$,border:N,borderDisabled:H,borderHover:le,borderFocus:yo,placeholderColor:Co,placeholderColorDisabled:zo,lineHeightTextarea:Ao,colorDisabled:So,colorFocus:Ro,textColorDisabled:Fo,boxShadowFocus:_o,iconSize:Bo,colorFocusWarning:Eo,boxShadowFocusWarning:Po,borderWarning:$o,borderFocusWarning:To,borderHoverWarning:ko,colorFocusError:Io,boxShadowFocusError:Mo,borderError:Vo,borderFocusError:Wo,borderHoverError:Do,clearSize:Oo,clearColor:No,clearColorHover:Ho,clearColorPressed:Ko,iconColor:jo,iconColorDisabled:Uo,suffixTextColor:Lo,countTextColor:Go,countTextColorDisabled:Xo,iconColorHover:Yo,iconColorPressed:qo,loadingColor:Jo,loadingColorError:Qo,loadingColorWarning:Zo,fontWeight:en,[ue("padding",e)]:on,[ue("fontSize",e)]:nn,[ue("height",e)]:rn}}=b.value,{left:tn,right:an}=An(on);return{"--n-bezier":o,"--n-count-text-color":Go,"--n-count-text-color-disabled":Xo,"--n-color":r,"--n-font-size":nn,"--n-font-weight":en,"--n-border-radius":h,"--n-height":rn,"--n-padding-left":tn,"--n-padding-right":an,"--n-text-color":v,"--n-caret-color":d,"--n-text-decoration-color":$,"--n-border":N,"--n-border-disabled":H,"--n-border-hover":le,"--n-border-focus":yo,"--n-placeholder-color":Co,"--n-placeholder-color-disabled":zo,"--n-icon-size":Bo,"--n-line-height-textarea":Ao,"--n-color-disabled":So,"--n-color-focus":Ro,"--n-text-color-disabled":Fo,"--n-box-shadow-focus":_o,"--n-loading-color":Jo,"--n-caret-color-warning":P,"--n-color-focus-warning":Eo,"--n-box-shadow-focus-warning":Po,"--n-border-warning":$o,"--n-border-focus-warning":To,"--n-border-hover-warning":ko,"--n-loading-color-warning":Zo,"--n-caret-color-error":E,"--n-color-focus-error":Io,"--n-box-shadow-focus-error":Mo,"--n-border-error":Vo,"--n-border-focus-error":Wo,"--n-border-hover-error":Do,"--n-loading-color-error":Qo,"--n-clear-color":No,"--n-clear-size":Oo,"--n-clear-color-hover":Ho,"--n-clear-color-pressed":Ko,"--n-icon-color":jo,"--n-icon-color-hover":Yo,"--n-icon-color-pressed":qo,"--n-icon-color-disabled":Uo,"--n-suffix-text-color":Lo}}),M=S?Sn("input",_(()=>{const{value:e}=ee;return e[0]}),pe,n):void 0;return Object.assign(Object.assign({},xo),{wrapperElRef:f,inputElRef:i,inputMirrorElRef:u,inputEl2Ref:p,textareaElRef:s,textareaMirrorElRef:c,textareaScrollbarInstRef:A,rtlEnabled:wo,uncontrolledValue:j,mergedValue:F,passwordVisible:O,mergedPlaceholder:ne,showPlaceholder1:Ee,showPlaceholder2:Pe,mergedFocus:re,isComposing:B,activated:D,showClearButton:$e,mergedSize:ee,mergedDisabled:k,textDecorationStyle:Te,mergedClsPrefix:x,mergedBordered:t,mergedShowPasswordOn:te,placeholderStyle:ve,mergedStatus:Be,textAreaScrollContainerWidth:de,handleTextAreaScroll:mo,handleCompositionStart:Ge,handleCompositionEnd:Xe,handleInput:G,handleInputBlur:qe,handleInputFocus:Je,handleWrapperBlur:Qe,handleWrapperFocus:Ze,handleMouseEnter:to,handleMouseLeave:ao,handleMouseDown:ro,handleChange:eo,handleClick:oo,handleClear:no,handlePasswordToggleClick:io,handlePasswordToggleMousedown:lo,handleWrapperKeydown:uo,handleWrapperKeyup:so,handleTextAreaMirrorResize:bo,getTextareaScrollContainer:()=>s.value,mergedTheme:b,cssVars:S?void 0:pe,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender})},render(){var n,x;const{mergedClsPrefix:t,mergedStatus:S,themeClass:R,type:b,countGraphemes:f,onRender:s}=this,c=this.$slots;return s==null||s(),a("div",{ref:"wrapperElRef",class:[`${t}-input`,R,S&&`${t}-input--${S}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:b==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&b!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${t}-input-wrapper`},J(c.prefix,u=>u&&a("div",{class:`${t}-input__prefix`},u)),b==="textarea"?a(cn,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var u,i;const{textAreaScrollContainerWidth:p}=this,g={width:this.autosize&&p&&`${p}px`};return a(dn,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(u=this.inputProps)===null||u===void 0?void 0:u.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(i=this.inputProps)===null||i===void 0?void 0:i.style,g],onBlur:this.handleInputBlur,onFocus:T=>{this.handleInputFocus(T,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,g],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(fn,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${t}-input__input`},a("input",Object.assign({type:b==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":b},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(n=this.inputProps)===null||n===void 0?void 0:n.class],style:[this.textDecorationStyle[0],(x=this.inputProps)===null||x===void 0?void 0:x.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,0)},onInput:u=>{this.handleInput(u,0)},onChange:u=>{this.handleChange(u,0)}})),this.showPlaceholder1?a("div",{class:`${t}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&J(c.suffix,u=>u||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${t}-input__suffix`},[J(c["clear-icon-placeholder"],i=>(this.clearable||i)&&a(ge,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>i,icon:()=>{var p,g;return(g=(p=this.$slots)["clear-icon"])===null||g===void 0?void 0:g.call(p)}})),this.internalLoadingBeforeSuffix?null:u,this.loading!==void 0?a(hn,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?u:null,this.showCount&&this.type!=="textarea"?a(Ae,null,{default:i=>{var p;const{renderCount:g}=this;return g?g(i):(p=c.count)===null||p===void 0?void 0:p.call(c,i)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?se(c["password-visible-icon"],()=>[a(be,{clsPrefix:t},{default:()=>a(Fn,null)})]):se(c["password-invisible-icon"],()=>[a(be,{clsPrefix:t},{default:()=>a(_n,null)})])):null]):null)),this.pair?a("span",{class:`${t}-input__separator`},se(c.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${t}-input-wrapper`},a("div",{class:`${t}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:f?void 0:this.maxlength,minlength:f?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:u=>{this.handleInputFocus(u,1)},onInput:u=>{this.handleInput(u,1)},onChange:u=>{this.handleChange(u,1)}}),this.showPlaceholder2?a("div",{class:`${t}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),J(c.suffix,u=>(this.clearable||u)&&a("div",{class:`${t}-input__suffix`},[this.clearable&&a(ge,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var i;return(i=c["clear-icon"])===null||i===void 0?void 0:i.call(c)},placeholder:()=>{var i;return(i=c["clear-icon-placeholder"])===null||i===void 0?void 0:i.call(c)}}),u]))):null,this.mergedBordered?a("div",{class:`${t}-input__border`}):null,this.mergedBordered?a("div",{class:`${t}-input__state-border`}):null,this.showCount&&b==="textarea"?a(Ae,null,{default:u=>{var i;const{renderCount:p}=this;return p?p(u):(i=c.count)===null||i===void 0?void 0:i.call(c,u)}}):null)}});export{Mn as N};
