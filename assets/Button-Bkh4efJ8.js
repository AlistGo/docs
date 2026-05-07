import{p as E,d as Z,h as p,al as ze,ah as $e,r as S,am as Be,an as Se,s as b,ao as Te,ap as ee,ab as Pe,q as x,aq as A,K as l,i as ke,ac as Re,T as X,U as He,ar as Ie,ad as Ee,as as Oe,ag as De,a6 as Fe,af as je,B as R,y as Ne,z as oe,at as _e,X as Ke,G as r,au as H,C as Ge,av as J,a2 as Me}from"./app-BPY7lyif.js";import{i as qe}from"./browser-11U00kyq.js";const Ve=E("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),We=Z({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ze("-base-wave",Ve,$e(e,"clsPrefix"));const f=S(null),h=S(!1);let u=null;return Be(()=>{u!==null&&window.clearTimeout(u)}),{active:h,selfRef:f,play(){u!==null&&(window.clearTimeout(u),h.value=!1,u=null),Se(()=>{var v;(v=f.value)===null||v===void 0||v.offsetHeight,h.value=!0,u=window.setTimeout(()=>{h.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:C}=Te;function Qe({duration:e=".2s",delay:f=".1s"}={}){return[b("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),b("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),b("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C},
 max-width ${e} ${C} ${f},
 margin-left ${e} ${C} ${f},
 margin-right ${e} ${C} ${f};
 `),b("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C} ${f},
 max-width ${e} ${C},
 margin-left ${e} ${C},
 margin-right ${e} ${C};
 `)]}function $(e){return ee(e,[255,255,255,.16])}function I(e){return ee(e,[0,0,0,.12])}const Le=Pe("n-button-group"),Ue=b([E("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("color",[l("border",{borderColor:"var(--n-border-color)"}),x("disabled",[l("border",{borderColor:"var(--n-border-color-disabled)"})]),A("disabled",[b("&:focus",[l("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[l("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[l("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[l("border",{border:"var(--n-border-disabled)"})]),A("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[l("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[l("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[l("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),E("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ke&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,l("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),l("border",{border:"var(--n-border)"}),l("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),l("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[E("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Re({top:"50%",originalTransform:"translateY(-50%)"})]),Qe()]),l("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[b("~",[l("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[l("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Ye=Object.assign(Object.assign({},oe.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!qe}}),Je=Z({name:"Button",props:Ye,setup(e){const f=S(null),h=S(null),u=S(!1),v=De(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),re=Fe(Le,{}),{mergedSizeRef:O}=je({},{defaultSize:"medium",mergedSize:t=>{const{size:d}=e;if(d)return d;const{size:m}=re;if(m)return m;const{mergedSize:o}=t||{};return o?o.value:"medium"}}),D=R(()=>e.focusable&&!e.disabled),te=t=>{var d;D.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&D.value&&((d=f.value)===null||d===void 0||d.focus({preventScroll:!0})))},ne=t=>{var d;if(!e.disabled&&!e.loading){const{onClick:m}=e;m&&Me(m,t),e.text||(d=h.value)===null||d===void 0||d.play()}},ae=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;u.value=!1}},ie=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}u.value=!0}},se=()=>{u.value=!1},{inlineThemeDisabled:W,mergedClsPrefixRef:F,mergedRtlRef:le}=Ne(e),de=oe("Button","-button",Ue,_e,e,F),ce=Ke("Button",le,F),Q=R(()=>{const t=de.value,{common:{cubicBezierEaseInOut:d,cubicBezierEaseOut:m},self:o}=t,{rippleDuration:j,opacityDisabled:T,fontWeight:N,fontWeightStrong:_}=o,y=O.value,{dashed:K,type:w,ghost:G,text:g,color:a,round:L,circle:M,textColor:z,secondary:ue,tertiary:U,quaternary:be,strong:fe}=e,he={"font-weight":fe?_:N};let i={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const P=w==="tertiary",Y=w==="default",n=P?"default":w;if(g){const s=z||a;i={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":s||o[r("textColorText",n)],"--n-text-color-hover":s?$(s):o[r("textColorTextHover",n)],"--n-text-color-pressed":s?I(s):o[r("textColorTextPressed",n)],"--n-text-color-focus":s?$(s):o[r("textColorTextHover",n)],"--n-text-color-disabled":s||o[r("textColorTextDisabled",n)]}}else if(G||K){const s=z||a;i={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":a||o[r("rippleColor",n)],"--n-text-color":s||o[r("textColorGhost",n)],"--n-text-color-hover":s?$(s):o[r("textColorGhostHover",n)],"--n-text-color-pressed":s?I(s):o[r("textColorGhostPressed",n)],"--n-text-color-focus":s?$(s):o[r("textColorGhostHover",n)],"--n-text-color-disabled":s||o[r("textColorGhostDisabled",n)]}}else if(ue){const s=Y?o.textColor:P?o.textColorTertiary:o[r("color",n)],c=a||s,k=w!=="default"&&w!=="tertiary";i={"--n-color":k?H(c,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":k?H(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":k?H(c,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":k?H(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":c,"--n-text-color-hover":c,"--n-text-color-pressed":c,"--n-text-color-focus":c,"--n-text-color-disabled":c}}else if(U||be){const s=Y?o.textColor:P?o.textColorTertiary:o[r("color",n)],c=a||s;U?(i["--n-color"]=o.colorTertiary,i["--n-color-hover"]=o.colorTertiaryHover,i["--n-color-pressed"]=o.colorTertiaryPressed,i["--n-color-focus"]=o.colorSecondaryHover,i["--n-color-disabled"]=o.colorTertiary):(i["--n-color"]=o.colorQuaternary,i["--n-color-hover"]=o.colorQuaternaryHover,i["--n-color-pressed"]=o.colorQuaternaryPressed,i["--n-color-focus"]=o.colorQuaternaryHover,i["--n-color-disabled"]=o.colorQuaternary),i["--n-ripple-color"]="#0000",i["--n-text-color"]=c,i["--n-text-color-hover"]=c,i["--n-text-color-pressed"]=c,i["--n-text-color-focus"]=c,i["--n-text-color-disabled"]=c}else i={"--n-color":a||o[r("color",n)],"--n-color-hover":a?$(a):o[r("colorHover",n)],"--n-color-pressed":a?I(a):o[r("colorPressed",n)],"--n-color-focus":a?$(a):o[r("colorFocus",n)],"--n-color-disabled":a||o[r("colorDisabled",n)],"--n-ripple-color":a||o[r("rippleColor",n)],"--n-text-color":z||(a?o.textColorPrimary:P?o.textColorTertiary:o[r("textColor",n)]),"--n-text-color-hover":z||(a?o.textColorHoverPrimary:o[r("textColorHover",n)]),"--n-text-color-pressed":z||(a?o.textColorPressedPrimary:o[r("textColorPressed",n)]),"--n-text-color-focus":z||(a?o.textColorFocusPrimary:o[r("textColorFocus",n)]),"--n-text-color-disabled":z||(a?o.textColorDisabledPrimary:o[r("textColorDisabled",n)])};let q={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};g?q={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:q={"--n-border":o[r("border",n)],"--n-border-hover":o[r("borderHover",n)],"--n-border-pressed":o[r("borderPressed",n)],"--n-border-focus":o[r("borderFocus",n)],"--n-border-disabled":o[r("borderDisabled",n)]};const{[r("height",y)]:V,[r("fontSize",y)]:ve,[r("padding",y)]:pe,[r("paddingRound",y)]:ye,[r("iconSize",y)]:xe,[r("borderRadius",y)]:me,[r("iconMargin",y)]:ge,waveOpacity:Ce}=o,we={"--n-width":M&&!g?V:"initial","--n-height":g?"initial":V,"--n-font-size":ve,"--n-padding":M||g?"initial":L?ye:pe,"--n-icon-size":xe,"--n-icon-margin":ge,"--n-border-radius":g?"initial":M||L?V:me};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":d,"--n-bezier-ease-out":m,"--n-ripple-duration":j,"--n-opacity-disabled":T,"--n-wave-opacity":Ce},he),i),q),we)}),B=W?Ge("button",R(()=>{let t="";const{dashed:d,type:m,ghost:o,text:j,color:T,round:N,circle:_,textColor:y,secondary:K,tertiary:w,quaternary:G,strong:g}=e;d&&(t+="a"),o&&(t+="b"),j&&(t+="c"),N&&(t+="d"),_&&(t+="e"),K&&(t+="f"),w&&(t+="g"),G&&(t+="h"),g&&(t+="i"),T&&(t+="j"+J(T)),y&&(t+="k"+J(y));const{value:a}=O;return t+="l"+a[0],t+="m"+m[0],t}),Q,e):void 0;return{selfElRef:f,waveElRef:h,mergedClsPrefix:F,mergedFocusable:D,mergedSize:O,showBorder:v,enterPressed:u,rtlEnabled:ce,handleMousedown:te,handleKeydown:ie,handleBlur:se,handleKeyup:ae,handleClick:ne,customColorCssVars:R(()=>{const{color:t}=e;if(!t)return null;const d=$(t);return{"--n-border-color":t,"--n-border-color-hover":d,"--n-border-color-pressed":I(t),"--n-border-color-focus":d,"--n-border-color-disabled":t}}),cssVars:W?void 0:Q,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const{mergedClsPrefix:e,tag:f,onRender:h}=this;h==null||h();const u=X(this.$slots.default,v=>v&&p("span",{class:`${e}-button__content`},v));return p(f,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,p(He,{width:!0},{default:()=>X(this.$slots.icon,v=>(this.loading||this.renderIcon||v)&&p("span",{class:`${e}-button__icon`,style:{margin:Ie(this.$slots.default)?"0":""}},p(Ee,null,{default:()=>this.loading?p(Oe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():v)})))}),this.iconPlacement==="left"&&u,this.text?null:p(We,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});export{Je as B,Le as b};
