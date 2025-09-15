import{i as tr}from"./browser-C_p2sqKv.js";import{d as Z,h as a,ab as nr,r as w,a4 as ue,a6 as ar,B as _,aw as ir,p as b,K as l,q as z,aq as j,s as C,T as J,ax as pe,O as se,ay as lr,F as sr,az as cr,aA as ur,P as ge,y as dr,z as Se,aB as hr,al as fr,aC as vr,ah as be,ai as pr,af as gr,ag as xe,aD as br,aE as xr,aF as me,a8 as mr,X as wr,G as ce,Y as yr,C as Cr,an as we,ae as ye,a2 as y,aG as Ce}from"./app-DJTAUbGk.js";const zr=Z({name:"Eye",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),a("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Sr=Z({name:"EyeOff",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),a("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),a("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),a("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),a("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Ae=nr("n-input");function Ar(r){let x=0;for(const n of r)x++;return x}function Q(r){return r===""||r==null}function Rr(r){const x=w(null);function n(){const{value:g}=r;if(!(g!=null&&g.focus)){R();return}const{selectionStart:d,selectionEnd:s,value:u}=g;if(d==null||s==null){R();return}x.value={start:d,end:s,beforeText:u.slice(0,d),afterText:u.slice(s)}}function A(){var g;const{value:d}=x,{value:s}=r;if(!d||!s)return;const{value:u}=s,{start:c,beforeText:i,afterText:v}=d;let m=u.length;if(u.endsWith(v))m=u.length-v.length;else if(u.startsWith(i))m=i.length;else{const T=i[c-1],S=u.indexOf(T,c-1);S!==-1&&(m=S+1)}(g=s.setSelectionRange)===null||g===void 0||g.call(s,m,m)}function R(){x.value=null}return ue(r,R),{recordCursor:n,restoreCursor:A}}const ze=Z({name:"InputWordCount",setup(r,{slots:x}){const{mergedValueRef:n,maxlengthRef:A,mergedClsPrefixRef:R,countGraphemesRef:g}=ar(Ae),d=_(()=>{const{value:s}=n;return s===null||Array.isArray(s)?0:(g.value||Ar)(s)});return()=>{const{value:s}=A,{value:u}=n;return a("span",{class:`${R.value}-input-word-count`},ir(x.default,{value:u===null||Array.isArray(u)?"":u},()=>[s===void 0?d.value:`${d.value} / ${s}`]))}}}),Fr=b("input",`
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
 `),C("&:-webkit-autofill ~",[l("placeholder","display: none;")])]),z("round",[j("textarea","border-radius: calc(var(--n-height) / 2);")]),l("placeholder",`
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
 `)]),z("textarea",[l("placeholder","overflow: visible;")]),j("autosize","width: 100%;"),z("autosize",[l("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),b("input-wrapper",`
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
 `,[C("+",[l("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),j("textarea",[l("placeholder","white-space: nowrap;")]),l("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),z("textarea","width: 100%;",[b("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),z("resizable",[b("input-wrapper",`
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
 `,[b("icon",`
 color: var(--n-icon-color);
 `),b("base-icon",`
 color: var(--n-icon-color);
 `)])]),z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[l("border","border: var(--n-border-disabled);"),l("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),l("placeholder","color: var(--n-placeholder-color-disabled);"),l("separator","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),b("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),l("suffix, prefix","color: var(--n-text-color-disabled);",[b("icon",`
 color: var(--n-icon-color-disabled);
 `),b("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),j("disabled",[l("eye",`
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
 `,[b("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),b("base-clear",`
 font-size: var(--n-icon-size);
 `,[l("placeholder",[b("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[b("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),b("base-icon",`
 font-size: var(--n-icon-size);
 `)]),b("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>z(`${r}-status`,[j("disabled",[b("base-loading",`
 color: var(--n-loading-color-${r})
 `),l("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),l("state-border",`
 border: var(--n-border-${r});
 `),C("&:hover",[l("state-border",`
 border: var(--n-border-hover-${r});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),z("focus",`
 background-color: var(--n-color-focus-${r});
 `,[l("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),_r=b("input",[z("disabled",[l("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),Br=Object.assign(Object.assign({},Se.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),$r=Z({name:"Input",props:Br,setup(r){const{mergedClsPrefixRef:x,mergedBorderedRef:n,inlineThemeDisabled:A,mergedRtlRef:R}=dr(r),g=Se("Input","-input",Fr,hr,r,x);tr&&fr("-input-safari",_r,x);const d=w(null),s=w(null),u=w(null),c=w(null),i=w(null),v=w(null),m=w(null),T=Rr(m),S=w(null),{localeRef:Re}=vr("Input"),K=w(r.defaultValue),Fe=be(r,"value"),F=pr(Fe,K),V=gr(r),{mergedSizeRef:ee,mergedDisabledRef:I,mergedStatusRef:_e}=V,k=w(!1),D=w(!1),B=w(!1),W=w(!1);let oe=null;const re=_(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[Re.value.placeholder]:[e]}),Be=_(()=>{const{value:e}=B,{value:o}=F,{value:t}=re;return!e&&(Q(o)||Array.isArray(o)&&Q(o[0]))&&t[0]}),Ee=_(()=>{const{value:e}=B,{value:o}=F,{value:t}=re;return!e&&t[1]&&(Q(o)||Array.isArray(o)&&Q(o[1]))}),te=xe(()=>r.internalForceFocus||k.value),Pe=xe(()=>{if(I.value||r.readonly||!r.clearable||!te.value&&!D.value)return!1;const{value:e}=F,{value:o}=te;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(D.value||o):!!e&&(D.value||o)}),ne=_(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),O=w(!1),$e=_(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),de=w(void 0),Te=()=>{var e,o;if(r.type==="textarea"){const{autosize:t}=r;if(t&&(de.value=(o=(e=S.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!s.value||typeof t=="boolean")return;const{paddingTop:f,paddingBottom:p,lineHeight:h}=window.getComputedStyle(s.value),E=Number(f.slice(0,-2)),P=Number(p.slice(0,-2)),$=Number(h.slice(0,-2)),{value:N}=u;if(!N)return;if(t.minRows){const H=Math.max(t.minRows,1),le=`${E+P+$*H}px`;N.style.minHeight=le}if(t.maxRows){const H=`${E+P+$*t.maxRows}px`;N.style.maxHeight=H}}},Ie=_(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});br(()=>{const{value:e}=F;Array.isArray(e)||ie(e)});const ke=xr().proxy;function U(e){const{onUpdateValue:o,"onUpdate:value":t,onInput:f}=r,{nTriggerFormInput:p}=V;o&&y(o,e),t&&y(t,e),f&&y(f,e),K.value=e,p()}function L(e){const{onChange:o}=r,{nTriggerFormChange:t}=V;o&&y(o,e),K.value=e,t()}function Me(e){const{onBlur:o}=r,{nTriggerFormBlur:t}=V;o&&y(o,e),t()}function Ve(e){const{onFocus:o}=r,{nTriggerFormFocus:t}=V;o&&y(o,e),t()}function De(e){const{onClear:o}=r;o&&y(o,e)}function We(e){const{onInputBlur:o}=r;o&&y(o,e)}function Oe(e){const{onInputFocus:o}=r;o&&y(o,e)}function Ne(){const{onDeactivate:e}=r;e&&y(e)}function He(){const{onActivate:e}=r;e&&y(e)}function je(e){const{onClick:o}=r;o&&y(o,e)}function Ke(e){const{onWrapperFocus:o}=r;o&&y(o,e)}function Ue(e){const{onWrapperBlur:o}=r;o&&y(o,e)}function Le(){B.value=!0}function Ge(e){B.value=!1,e.target===v.value?G(e,1):G(e,0)}function G(e,o=0,t="input"){const f=e.target.value;if(ie(f),e instanceof InputEvent&&!e.isComposing&&(B.value=!1),r.type==="textarea"){const{value:h}=S;h&&h.syncUnifiedContainer()}if(oe=f,B.value)return;T.recordCursor();const p=Xe(f);if(p)if(!r.pair)t==="input"?U(f):L(f);else{let{value:h}=F;Array.isArray(h)?h=[h[0],h[1]]:h=["",""],h[o]=f,t==="input"?U(h):L(h)}ke.$forceUpdate(),p||we(T.restoreCursor)}function Xe(e){const{countGraphemes:o,maxlength:t,minlength:f}=r;if(o){let h;if(t!==void 0&&(h===void 0&&(h=o(e)),h>Number(t))||f!==void 0&&(h===void 0&&(h=o(e)),h<Number(t)))return!1}const{allowInput:p}=r;return typeof p=="function"?p(e):!0}function Ye(e){We(e),e.relatedTarget===d.value&&Ne(),e.relatedTarget!==null&&(e.relatedTarget===i.value||e.relatedTarget===v.value||e.relatedTarget===s.value)||(W.value=!1),X(e,"blur"),m.value=null}function qe(e,o){Oe(e),k.value=!0,W.value=!0,He(),X(e,"focus"),o===0?m.value=i.value:o===1?m.value=v.value:o===2&&(m.value=s.value)}function Je(e){r.passivelyActivated&&(Ue(e),X(e,"blur"))}function Qe(e){r.passivelyActivated&&(k.value=!0,Ke(e),X(e,"focus"))}function X(e,o){e.relatedTarget!==null&&(e.relatedTarget===i.value||e.relatedTarget===v.value||e.relatedTarget===s.value||e.relatedTarget===d.value)||(o==="focus"?(Ve(e),k.value=!0):o==="blur"&&(Me(e),k.value=!1))}function Ze(e,o){G(e,o,"change")}function eo(e){je(e)}function oo(e){De(e),r.pair?(U(["",""]),L(["",""])):(U(""),L(""))}function ro(e){const{onMousedown:o}=r;o&&o(e);const{tagName:t}=e.target;if(t!=="INPUT"&&t!=="TEXTAREA"){if(r.resizable){const{value:f}=d;if(f){const{left:p,top:h,width:E,height:P}=f.getBoundingClientRect(),$=14;if(p+E-$<e.clientX&&e.clientX<p+E&&h+P-$<e.clientY&&e.clientY<h+P)return}}e.preventDefault(),k.value||he()}}function to(){var e;D.value=!0,r.type==="textarea"&&((e=S.value)===null||e===void 0||e.handleMouseEnterWrapper())}function no(){var e;D.value=!1,r.type==="textarea"&&((e=S.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function ao(){I.value||ne.value==="click"&&(O.value=!O.value)}function io(e){if(I.value)return;e.preventDefault();const o=f=>{f.preventDefault(),Ce("mouseup",document,o)};if(ye("mouseup",document,o),ne.value!=="mousedown")return;O.value=!0;const t=()=>{O.value=!1,Ce("mouseup",document,t)};ye("mouseup",document,t)}function lo(e){var o;switch((o=r.onKeydown)===null||o===void 0||o.call(r,e),e.key){case"Escape":ae();break;case"Enter":so(e);break}}function so(e){var o,t;if(r.passivelyActivated){const{value:f}=W;if(f){r.internalDeactivateOnEnter&&ae();return}e.preventDefault(),r.type==="textarea"?(o=s.value)===null||o===void 0||o.focus():(t=i.value)===null||t===void 0||t.focus()}}function ae(){r.passivelyActivated&&(W.value=!1,we(()=>{var e;(e=d.value)===null||e===void 0||e.focus()}))}function he(){var e,o,t;I.value||(r.passivelyActivated?(e=d.value)===null||e===void 0||e.focus():((o=s.value)===null||o===void 0||o.focus(),(t=i.value)===null||t===void 0||t.focus()))}function co(){var e;!((e=d.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function uo(){var e,o;(e=s.value)===null||e===void 0||e.select(),(o=i.value)===null||o===void 0||o.select()}function ho(){I.value||(s.value?s.value.focus():i.value&&i.value.focus())}function fo(){const{value:e}=d;e!=null&&e.contains(document.activeElement)&&e!==document.activeElement&&ae()}function vo(e){if(r.type==="textarea"){const{value:o}=s;o==null||o.scrollTo(e)}else{const{value:o}=i;o==null||o.scrollTo(e)}}function ie(e){const{type:o,pair:t,autosize:f}=r;if(!t&&f)if(o==="textarea"){const{value:p}=u;p&&(p.textContent=(e??"")+`\r
`)}else{const{value:p}=c;p&&(e?p.textContent=e:p.innerHTML="&nbsp;")}}function po(){Te()}const fe=w({top:"0"});function go(e){var o;const{scrollTop:t}=e.target;fe.value.top=`${-t}px`,(o=S.value)===null||o===void 0||o.syncUnifiedContainer()}let Y=null;me(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?Y=ue(F,t=>{!Array.isArray(t)&&t!==oe&&ie(t)}):Y==null||Y()});let q=null;me(()=>{r.type==="textarea"?q=ue(F,e=>{var o;!Array.isArray(e)&&e!==oe&&((o=S.value)===null||o===void 0||o.syncUnifiedContainer())}):q==null||q()}),mr(Ae,{mergedValueRef:F,maxlengthRef:Ie,mergedClsPrefixRef:x,countGraphemesRef:be(r,"countGraphemes")});const bo={wrapperElRef:d,inputElRef:i,textareaElRef:s,isCompositing:B,focus:he,blur:co,select:uo,deactivate:fo,activate:ho,scrollTo:vo},xo=wr("Input",R,x),ve=_(()=>{const{value:e}=ee,{common:{cubicBezierEaseInOut:o},self:{color:t,borderRadius:f,textColor:p,caretColor:h,caretColorError:E,caretColorWarning:P,textDecorationColor:$,border:N,borderDisabled:H,borderHover:le,borderFocus:mo,placeholderColor:wo,placeholderColorDisabled:yo,lineHeightTextarea:Co,colorDisabled:zo,colorFocus:So,textColorDisabled:Ao,boxShadowFocus:Ro,iconSize:Fo,colorFocusWarning:_o,boxShadowFocusWarning:Bo,borderWarning:Eo,borderFocusWarning:Po,borderHoverWarning:$o,colorFocusError:To,boxShadowFocusError:Io,borderError:ko,borderFocusError:Mo,borderHoverError:Vo,clearSize:Do,clearColor:Wo,clearColorHover:Oo,clearColorPressed:No,iconColor:Ho,iconColorDisabled:jo,suffixTextColor:Ko,countTextColor:Uo,countTextColorDisabled:Lo,iconColorHover:Go,iconColorPressed:Xo,loadingColor:Yo,loadingColorError:qo,loadingColorWarning:Jo,[ce("padding",e)]:Qo,[ce("fontSize",e)]:Zo,[ce("height",e)]:er}}=g.value,{left:or,right:rr}=yr(Qo);return{"--n-bezier":o,"--n-count-text-color":Uo,"--n-count-text-color-disabled":Lo,"--n-color":t,"--n-font-size":Zo,"--n-border-radius":f,"--n-height":er,"--n-padding-left":or,"--n-padding-right":rr,"--n-text-color":p,"--n-caret-color":h,"--n-text-decoration-color":$,"--n-border":N,"--n-border-disabled":H,"--n-border-hover":le,"--n-border-focus":mo,"--n-placeholder-color":wo,"--n-placeholder-color-disabled":yo,"--n-icon-size":Fo,"--n-line-height-textarea":Co,"--n-color-disabled":zo,"--n-color-focus":So,"--n-text-color-disabled":Ao,"--n-box-shadow-focus":Ro,"--n-loading-color":Yo,"--n-caret-color-warning":P,"--n-color-focus-warning":_o,"--n-box-shadow-focus-warning":Bo,"--n-border-warning":Eo,"--n-border-focus-warning":Po,"--n-border-hover-warning":$o,"--n-loading-color-warning":Jo,"--n-caret-color-error":E,"--n-color-focus-error":To,"--n-box-shadow-focus-error":Io,"--n-border-error":ko,"--n-border-focus-error":Mo,"--n-border-hover-error":Vo,"--n-loading-color-error":qo,"--n-clear-color":Wo,"--n-clear-size":Do,"--n-clear-color-hover":Oo,"--n-clear-color-pressed":No,"--n-icon-color":Ho,"--n-icon-color-hover":Go,"--n-icon-color-pressed":Xo,"--n-icon-color-disabled":jo,"--n-suffix-text-color":Ko}}),M=A?Cr("input",_(()=>{const{value:e}=ee;return e[0]}),ve,r):void 0;return Object.assign(Object.assign({},bo),{wrapperElRef:d,inputElRef:i,inputMirrorElRef:c,inputEl2Ref:v,textareaElRef:s,textareaMirrorElRef:u,textareaScrollbarInstRef:S,rtlEnabled:xo,uncontrolledValue:K,mergedValue:F,passwordVisible:O,mergedPlaceholder:re,showPlaceholder1:Be,showPlaceholder2:Ee,mergedFocus:te,isComposing:B,activated:W,showClearButton:Pe,mergedSize:ee,mergedDisabled:I,textDecorationStyle:$e,mergedClsPrefix:x,mergedBordered:n,mergedShowPasswordOn:ne,placeholderStyle:fe,mergedStatus:_e,textAreaScrollContainerWidth:de,handleTextAreaScroll:go,handleCompositionStart:Le,handleCompositionEnd:Ge,handleInput:G,handleInputBlur:Ye,handleInputFocus:qe,handleWrapperBlur:Je,handleWrapperFocus:Qe,handleMouseEnter:to,handleMouseLeave:no,handleMouseDown:ro,handleChange:Ze,handleClick:eo,handleClear:oo,handlePasswordToggleClick:ao,handlePasswordToggleMousedown:io,handleWrapperKeydown:lo,handleTextAreaMirrorResize:po,getTextareaScrollContainer:()=>s.value,mergedTheme:g,cssVars:A?void 0:ve,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender})},render(){var r,x;const{mergedClsPrefix:n,mergedStatus:A,themeClass:R,type:g,countGraphemes:d,onRender:s}=this,u=this.$slots;return s==null||s(),a("div",{ref:"wrapperElRef",class:[`${n}-input`,R,A&&`${n}-input--${A}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:g==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&g!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},a("div",{class:`${n}-input-wrapper`},J(u.prefix,c=>c&&a("div",{class:`${n}-input__prefix`},c)),g==="textarea"?a(lr,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,i;const{textAreaScrollContainerWidth:v}=this,m={width:this.autosize&&v&&`${v}px`};return a(sr,null,a("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:d?void 0:this.maxlength,minlength:d?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(i=this.inputProps)===null||i===void 0?void 0:i.style,m],onBlur:this.handleInputBlur,onFocus:T=>{this.handleInputFocus(T,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?a("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,m],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?a(cr,{onResize:this.handleTextAreaMirrorResize},{default:()=>a("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):a("div",{class:`${n}-input__input`},a("input",Object.assign({type:g==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":g},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(x=this.inputProps)===null||x===void 0?void 0:x.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:d?void 0:this.maxlength,minlength:d?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,0)},onInput:c=>{this.handleInput(c,0)},onChange:c=>{this.handleChange(c,0)}})),this.showPlaceholder1?a("div",{class:`${n}-input__placeholder`},a("span",null,this.mergedPlaceholder[0])):null,this.autosize?a("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&J(u.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?a("div",{class:`${n}-input__suffix`},[J(u["clear-icon-placeholder"],i=>(this.clearable||i)&&a(pe,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>i,icon:()=>{var v,m;return(m=(v=this.$slots)["clear-icon"])===null||m===void 0?void 0:m.call(v)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?a(ur,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?a(ze,null,{default:i=>{var v;return(v=u.count)===null||v===void 0?void 0:v.call(u,i)}}):null,this.mergedShowPasswordOn&&this.type==="password"?a("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?se(u["password-visible-icon"],()=>[a(ge,{clsPrefix:n},{default:()=>a(zr,null)})]):se(u["password-invisible-icon"],()=>[a(ge,{clsPrefix:n},{default:()=>a(Sr,null)})])):null]):null)),this.pair?a("span",{class:`${n}-input__separator`},se(u.separator,()=>[this.separator])):null,this.pair?a("div",{class:`${n}-input-wrapper`},a("div",{class:`${n}-input__input`},a("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:d?void 0:this.maxlength,minlength:d?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,1)},onInput:c=>{this.handleInput(c,1)},onChange:c=>{this.handleChange(c,1)}}),this.showPlaceholder2?a("div",{class:`${n}-input__placeholder`},a("span",null,this.mergedPlaceholder[1])):null),J(u.suffix,c=>(this.clearable||c)&&a("div",{class:`${n}-input__suffix`},[this.clearable&&a(pe,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var i;return(i=u["clear-icon"])===null||i===void 0?void 0:i.call(u)},placeholder:()=>{var i;return(i=u["clear-icon-placeholder"])===null||i===void 0?void 0:i.call(u)}}),c]))):null,this.mergedBordered?a("div",{class:`${n}-input__border`}):null,this.mergedBordered?a("div",{class:`${n}-input__state-border`}):null,this.showCount&&g==="textarea"?a(ze,null,{default:c=>{var i;const{renderCount:v}=this;return v?v(c):(i=u.count)===null||i===void 0?void 0:i.call(u,c)}}):null)}});export{$r as N};
