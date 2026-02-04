import{b as je,B as pe}from"./Button-BPk2lLYw.js";import{r as M,a4 as be,j as Fe,aK as Me,aL as Le,am as Ee,aG as oe,aM as qe,ae as ne,p as N,aq as re,q as k,s as $,K as C,d as A,h as u,y as Se,al as He,X as We,a8 as H,ab as me,x as _e,aN as ie,aO as Ge,aP as Ue,aQ as Ve,aR as Xe,a6 as W,aS as Ne,B as g,ag as te,aT as ye,F as Qe,v as Ye,aU as Ze,aV as Je,aW as eo,aX as oo,aY as no,aZ as to,a_ as Pe,ai as ro,ah as z,a$ as io,z as Re,b0 as ao,G as q,C as lo,a2 as fe,b1 as $e,b2 as ge,c as so,o as uo,w as D,a as F,f as Z,u as R,N as xe,e as he,t as J,_ as co}from"./app-DINpXSHa.js";import{N as po}from"./Icon-C0Do44JD.js";import{C as fo}from"./ChevronRight-DkXZCQ8v.js";import{N as ho}from"./Image-BmOKonLa.js";function vo(e){return o=>{o?e.value=o.$el:e.value=null}}function bo(e,o,i){const n=M(e.value);let r=null;return be(e,t=>{r!==null&&window.clearTimeout(r),t===!0?i&&!i.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function mo(e={},o){const i=Fe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,t=a=>{switch(a.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}n!==void 0&&Object.keys(n).forEach(x=>{if(x!==a.key)return;const b=n[x];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},d=a=>{switch(a.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(x=>{if(x!==a.key)return;const b=r[x];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},c=()=>{(o===void 0||o.value)&&(ne("keydown",document,t),ne("keyup",document,d)),o!==void 0&&be(o,a=>{a?(ne("keydown",document,t),ne("keyup",document,d)):(oe("keydown",document,t),oe("keyup",document,d))})};return Me()?(Le(c),Ee(()=>{(o===void 0||o.value)&&(oe("keydown",document,t),oe("keyup",document,d))})):c(),qe(i)}const v="0!important",Ke="-1px!important";function V(e){return k(e+"-type",[$("& +",[N("button",{},[k(e+"-type",[C("border",{borderLeftWidth:v}),C("state-border",{left:Ke})])])])])}function X(e){return k(e+"-type",[$("& +",[N("button",[k(e+"-type",[C("border",{borderTopWidth:v}),C("state-border",{top:Ke})])])])])}const wo=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[re("vertical",{flexDirection:"row"},[re("rtl",[N("button",[$("&:first-child:not(:last-child)",`
 margin-right: ${v};
 border-top-right-radius: ${v};
 border-bottom-right-radius: ${v};
 `),$("&:last-child:not(:first-child)",`
 margin-left: ${v};
 border-top-left-radius: ${v};
 border-bottom-left-radius: ${v};
 `),$("&:not(:first-child):not(:last-child)",`
 margin-left: ${v};
 margin-right: ${v};
 border-radius: ${v};
 `),V("default"),k("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),k("vertical",{flexDirection:"column"},[N("button",[$("&:first-child:not(:last-child)",`
 margin-bottom: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-bottom-left-radius: ${v};
 border-bottom-right-radius: ${v};
 `),$("&:last-child:not(:first-child)",`
 margin-top: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-top-left-radius: ${v};
 border-top-right-radius: ${v};
 `),$("&:not(:first-child):not(:last-child)",`
 margin: ${v};
 border-radius: ${v};
 `),X("default"),k("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),yo={size:{type:String,default:void 0},vertical:Boolean},go=A({name:"ButtonGroup",props:yo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i}=Se(e);return He("-button-group",wo,o),H(je,e),{rtlEnabled:We("ButtonGroup",i,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Ie=A({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),we=me("n-dropdown-menu"),ae=me("n-dropdown"),ke=me("n-dropdown-option");function ve(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function Ce(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Oe=A({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=W(ae),{hoverKeyRef:i,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:t,activeKeyPathRef:d,animatedRef:c,mergedShowRef:a,renderLabelRef:x,renderIconRef:b,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:h,nodePropsRef:_,menuPropsRef:B}=o,K=W(ke,null),T=W(we),Q=W(Ne),de=g(()=>e.tmNode.rawNode),Y=g(()=>{const{value:s}=P;return ve(e.tmNode.rawNode,s)}),le=g(()=>{const{disabled:s}=e.tmNode;return s}),se=g(()=>{if(!Y.value)return!1;const{key:s,disabled:y}=e.tmNode;if(y)return!1;const{value:O}=i,{value:L}=n,{value:ce}=r,{value:E}=t;return O!==null?E.includes(s):L!==null?E.includes(s)&&E[E.length-1]!==s:ce!==null?E.includes(s):!1}),ue=g(()=>n.value===null&&!c.value),ee=bo(se,300,ue),G=g(()=>!!(K!=null&&K.enteringSubmenuRef.value)),U=M(!1);H(ke,{enteringSubmenuRef:U});function j(){U.value=!0}function l(){U.value=!1}function w(){const{parentKey:s,tmNode:y}=e;y.disabled||a.value&&(r.value=s,n.value=null,i.value=y.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&i.value!==s.key&&w()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:y}=s;y&&!ye({target:y},"dropdownOption")&&!ye({target:y},"scrollbarRail")&&(i.value=null)}function I(){const{value:s}=Y,{tmNode:y}=e;a.value&&!s&&!y.disabled&&(o.doSelect(y.key,y.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:x,renderIcon:b,siblingHasIcon:T.showIconRef,siblingHasSubmenu:T.hasSubmenuRef,menuProps:B,popoverBody:Q,animated:c,mergedShowSubmenu:g(()=>ee.value&&!G.value),rawNode:de,hasSubmenu:Y,pending:te(()=>{const{value:s}=t,{key:y}=e.tmNode;return s.includes(y)}),childActive:te(()=>{const{value:s}=d,{key:y}=e.tmNode,O=s.findIndex(L=>y===L);return O===-1?!1:O<s.length-1}),active:te(()=>{const{value:s}=d,{key:y}=e.tmNode,O=s.findIndex(L=>y===L);return O===-1?!1:O===s.length-1}),mergedDisabled:le,renderOption:h,nodeProps:_,handleClick:I,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:n,mergedShowSubmenu:r,clsPrefix:t,siblingHasIcon:d,siblingHasSubmenu:c,renderLabel:a,renderIcon:x,renderOption:b,nodeProps:S,props:P,scrollable:h}=this;let _=null;if(r){const Q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);_=u(ze,Object.assign({},Q,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},K=S==null?void 0:S(n),T=u("div",Object.assign({class:[`${t}-dropdown-option`,K==null?void 0:K.class],"data-dropdown-option":!0},K),u("div",_e(B,P),[u("div",{class:[`${t}-dropdown-option-body__prefix`,d&&`${t}-dropdown-option-body__prefix--show-icon`]},[x?x(n):ie(n.icon)]),u("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(n):ie((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,c&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(po,null,{default:()=>u(fo,null)}):null)]),this.hasSubmenu?u(Ge,null,{default:()=>[u(Ue,null,{default:()=>u("div",{class:`${t}-dropdown-offset-container`},u(Ve,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>u("div",{class:`${t}-dropdown-menu-wrapper`},i?u(Xe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return b?b({node:T,option:n}):T}}),So=A({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=W(we),{renderLabelRef:i,labelFieldRef:n,nodePropsRef:r,renderOptionRef:t}=W(ae);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:r,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:n,nodeProps:r,renderLabel:t,renderOption:d}=this,{rawNode:c}=this.tmNode,a=u("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(c)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},ie(c.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(c):ie((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:a,option:c}):a}}),_o=A({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:n}=e;return u(Qe,null,u(So,{clsPrefix:i,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:t}=r;return t.show===!1?null:Ce(t)?u(Ie,{clsPrefix:i,key:r.key}):r.isGroup?(Ye("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Oe,{clsPrefix:i,tmNode:r,parentKey:o,key:r.key})}))}}),No=A({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),ze=A({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=W(ae);H(we,{showIconRef:g(()=>{const r=o.value;return e.tmNodes.some(t=>{var d;if(t.isGroup)return(d=t.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:c}=t;return r?r(c):c.icon})}),hasSubmenuRef:g(()=>{const{value:r}=i;return e.tmNodes.some(t=>{var d;if(t.isGroup)return(d=t.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>ve(a,r));const{rawNode:c}=t;return ve(c,r)})})});const n=M(null);return H(eo,null),H(oo,null),H(Ne,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,n=this.tmNodes.map(r=>{const{rawNode:t}=r;return t.show===!1?null:ko(t)?u(No,{tmNode:r,key:r.key}):Ce(t)?u(Ie,{clsPrefix:o,key:r.key}):xo(t)?u(_o,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):u(Oe,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:t.props,scrollable:i})});return u("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?u(Ze,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Je({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),Po=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[no(),N("dropdown-option",`
 position: relative;
 `,[$("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[$("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[$("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),re("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),$("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),$("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[C("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),C("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),C("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[k("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),$(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),re("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[C("content",`
 padding: var(--n-padding);
 `)])]),Ro={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},$o=Object.keys($e),Ko=Object.assign(Object.assign(Object.assign({},$e),Ro),Re.props),Io=A({name:"Dropdown",inheritAttrs:!1,props:Ko,setup(e){const o=M(!1),i=ro(z(e,"show"),o),n=g(()=>{const{keyField:l,childrenField:w}=e;return io(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),r=g(()=>n.value.treeNodes),t=M(null),d=M(null),c=M(null),a=g(()=>{var l,w,f;return(f=(w=(l=t.value)!==null&&l!==void 0?l:d.value)!==null&&w!==void 0?w:c.value)!==null&&f!==void 0?f:null}),x=g(()=>n.value.getPath(a.value).keyPath),b=g(()=>n.value.getPath(e.value).keyPath),S=te(()=>e.keyboard&&i.value);mo({keydown:{ArrowUp:{prevent:!0,handler:le},ArrowRight:{prevent:!0,handler:Y},ArrowDown:{prevent:!0,handler:se},ArrowLeft:{prevent:!0,handler:de},Enter:{prevent:!0,handler:ue},Escape:Q}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:h}=Se(e),_=Re("Dropdown","-dropdown",Po,ao,e,P);H(ae,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:d,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:x,activeKeyPathRef:b,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:B,doUpdateShow:K}),be(i,l=>{!e.animated&&!l&&T()});function B(l,w){const{onSelect:f}=e;f&&fe(f,l,w)}function K(l){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&fe(w,l),f&&fe(f,l),o.value=l}function T(){t.value=null,d.value=null,c.value=null}function Q(){K(!1)}function de(){G("left")}function Y(){G("right")}function le(){G("up")}function se(){G("down")}function ue(){const l=ee();l!=null&&l.isLeaf&&i.value&&(B(l.key,l.rawNode),K(!1))}function ee(){var l;const{value:w}=n,{value:f}=a;return!w||f===null?null:(l=w.getNode(f))!==null&&l!==void 0?l:null}function G(l){const{value:w}=a,{value:{getFirstAvailableNode:f}}=n;let p=null;if(w===null){const I=f();I!==null&&(p=I.key)}else{const I=ee();if(I){let s;switch(l){case"down":s=I.getNext();break;case"up":s=I.getPrev();break;case"right":s=I.getChild();break;case"left":s=I.getParent();break}s&&(p=s.key)}}p!==null&&(t.value=null,d.value=p)}const U=g(()=>{const{size:l,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=_.value,{padding:I,dividerColor:s,borderRadius:y,optionOpacityDisabled:O,[q("optionIconSuffixWidth",l)]:L,[q("optionSuffixWidth",l)]:ce,[q("optionIconPrefixWidth",l)]:E,[q("optionPrefixWidth",l)]:De,[q("fontSize",l)]:Ae,[q("optionHeight",l)]:Be,[q("optionIconSize",l)]:Te}=p,m={"--n-bezier":f,"--n-font-size":Ae,"--n-padding":I,"--n-border-radius":y,"--n-option-height":Be,"--n-option-prefix-width":De,"--n-option-icon-prefix-width":E,"--n-option-suffix-width":ce,"--n-option-icon-suffix-width":L,"--n-option-icon-size":Te,"--n-divider-color":s,"--n-option-opacity-disabled":O};return w?(m["--n-color"]=p.colorInverted,m["--n-option-color-hover"]=p.optionColorHoverInverted,m["--n-option-color-active"]=p.optionColorActiveInverted,m["--n-option-text-color"]=p.optionTextColorInverted,m["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,m["--n-option-text-color-active"]=p.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,m["--n-prefix-color"]=p.prefixColorInverted,m["--n-suffix-color"]=p.suffixColorInverted,m["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(m["--n-color"]=p.color,m["--n-option-color-hover"]=p.optionColorHover,m["--n-option-color-active"]=p.optionColorActive,m["--n-option-text-color"]=p.optionTextColor,m["--n-option-text-color-hover"]=p.optionTextColorHover,m["--n-option-text-color-active"]=p.optionTextColorActive,m["--n-option-text-color-child-active"]=p.optionTextColorChildActive,m["--n-prefix-color"]=p.prefixColor,m["--n-suffix-color"]=p.suffixColor,m["--n-group-header-text-color"]=p.groupHeaderTextColor),m}),j=h?lo("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:P,mergedTheme:_,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&T()},doUpdateShow:K,cssVars:h?void 0:U,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const e=(n,r,t,d,c)=>{var a;const{mergedClsPrefix:x,menuProps:b}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(b==null?void 0:b(void 0,this.tmNodes.map(h=>h.rawNode)))||{},P={ref:vo(r),class:[n,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:c};return u(ze,_e(this.$attrs,P,S))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(Pe,Object.assign({},to(this.$props,$o),i),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Eo="/img/desktop/mianbaoduo.png",Co={class:"customer-service"},Oo={class:"service-link"},zo={class:"qr-code-container"},Do=["alt"],Ao={class:"qr-tip"},Bo=A({__name:"Desktop",async setup(e){let o,i,n;try{const h=([o,i]=ge(()=>fetch("https://dapi.alistgo.com/v0/version/latest")),o=await o,i(),o);h.ok&&(n=([o,i]=ge(()=>h.json()),o=await o,i(),o).version)}catch(h){console.warn("Failed to fetch version:",h)}const r=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_x64-setup.exe`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_amd64.deb`}],t=navigator.platform.toLowerCase(),d=M("win_x64");t.includes("win")?d.value="win_x64":t.includes("linux")?d.value="linux":t.includes("mac")&&(d.value="mac_arm64"),console.log(d.value);let c={down:"Download",website:"Website",service:"Contact customer service if you have any questions",qrTip:"Scan QR code to contact customer service"};const a=g(()=>{var h;return(h=r.find(_=>_.key===d.value))==null?void 0:h.label}),x=g(()=>r.map(h=>({...h,label:`${h.label} ${d.value===h.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(c={down:"下载",website:"官网",service:"如有问题联系小客服",qrTip:"扫码联系客服"});function b(){var _;const h=(_=r.find(B=>B.key===d.value))==null?void 0:_.url;window.open(`${h}`,"_blank")}function S(h){d.value=h}function P(){window.open("https://desktop.alistgo.com/zh","_blank")}return(h,_)=>(uo(),so(R(xe),{align:"center",vertical:"",size:"large"},{default:D(()=>[F(R(xe),{class:"btn"},{default:D(()=>[F(R(pe),{size:"large",type:"info",onClick:P,tertiary:""},{default:D(()=>[he(J(R(c).website),1)]),_:1}),F(R(go),null,{default:D(()=>[F(R(Io),{trigger:"hover",options:x.value,onSelect:S,size:"large"},{default:D(()=>[F(R(pe),{size:"large",type:"primary",tertiary:""},{default:D(()=>[he("💻"+J(a.value),1)]),_:1})]),_:1},8,["options"]),F(R(pe),{size:"large",onClick:b,type:"info",secondary:""},{default:D(()=>[he(J(R(c).down),1)]),_:1})]),_:1})]),_:1}),F(R(ho),{src:"/img/guide/desktop.png"}),Z("div",Co,[F(R(Pe),{trigger:"hover",placement:"top"},{trigger:D(()=>[Z("span",Oo,J(R(c).service),1)]),default:D(()=>[Z("div",zo,[Z("img",{src:"https://oss.hutool.cn/000000-hutool/upload/alist/qi%20ye.jpg",alt:R(c).qrTip,class:"qr-code"},null,8,Do),Z("p",Ao,J(R(c).qrTip),1)])]),_:1})])]),_:1}))}}),qo=co(Bo,[["__scopeId","data-v-b804bec7"]]);export{qo as D,Eo as _};
