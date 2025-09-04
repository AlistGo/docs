import{b as Be,B as ue}from"./Button-CGDjliIK.js";import{r as F,a4 as ve,j as Te,aK as Fe,aL as je,am as Me,aG as J,aM as Le,ae as ee,p as _,aq as ne,q as k,s as R,K as I,d as D,h as u,y as ke,al as Ee,X as He,a8 as W,ab as be,x as Se,aN as te,aO as We,aP as Ge,aQ as Ue,aR as qe,a6 as G,aS as Ne,B as g,ag as oe,aT as we,F as Ve,v as Xe,aU as Qe,aV as Ye,aW as Ze,aX as Je,aY as eo,aZ as oo,a_ as no,ai as to,ah as z,a$ as ro,z as _e,b0 as io,G as L,C as ao,a2 as ce,b1 as Pe,b2 as ye,c as lo,o as so,w as E,a as H,u as C,N as ge,e as pe,t as fe,_ as uo}from"./app-j3xFXwuC.js";import{N as co}from"./Icon-Bphju151.js";import{C as po}from"./ChevronRight-CqZ9U_0_.js";import{N as fo}from"./Image-C75KZtr0.js";function ho(e){return o=>{o?e.value=o.$el:e.value=null}}function vo(e,o,i){const n=F(e.value);let r=null;return ve(e,t=>{r!==null&&window.clearTimeout(r),t===!0?i&&!i.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function bo(e={},o){const i=Te({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,t=a=>{switch(a.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}n!==void 0&&Object.keys(n).forEach(x=>{if(x!==a.key)return;const b=n[x];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},d=a=>{switch(a.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(x=>{if(x!==a.key)return;const b=r[x];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},c=()=>{(o===void 0||o.value)&&(ee("keydown",document,t),ee("keyup",document,d)),o!==void 0&&ve(o,a=>{a?(ee("keydown",document,t),ee("keyup",document,d)):(J("keydown",document,t),J("keyup",document,d))})};return Fe()?(je(c),Me(()=>{(o===void 0||o.value)&&(J("keydown",document,t),J("keyup",document,d))})):c(),Le(i)}const v="0!important",Re="-1px!important";function V(e){return k(e+"-type",[R("& +",[_("button",{},[k(e+"-type",[I("border",{borderLeftWidth:v}),I("state-border",{left:Re})])])])])}function X(e){return k(e+"-type",[R("& +",[_("button",[k(e+"-type",[I("border",{borderTopWidth:v}),I("state-border",{top:Re})])])])])}const mo=_("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[_("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${v};
 border-top-right-radius: ${v};
 border-bottom-right-radius: ${v};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${v};
 border-top-left-radius: ${v};
 border-bottom-left-radius: ${v};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${v};
 margin-right: ${v};
 border-radius: ${v};
 `),V("default"),k("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),k("vertical",{flexDirection:"column"},[_("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-bottom-left-radius: ${v};
 border-bottom-right-radius: ${v};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-top-left-radius: ${v};
 border-top-right-radius: ${v};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${v};
 border-radius: ${v};
 `),X("default"),k("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},yo=D({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i}=ke(e);return Ee("-button-group",mo,o),W(Be,e),{rtlEnabled:He("ButtonGroup",i,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),$e=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),me=be("n-dropdown-menu"),re=be("n-dropdown"),xe=be("n-dropdown-option");function he(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function go(e){return e.type==="group"}function Ke(e){return e.type==="divider"}function xo(e){return e.type==="render"}const Ie=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=G(re),{hoverKeyRef:i,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:t,activeKeyPathRef:d,animatedRef:c,mergedShowRef:a,renderLabelRef:x,renderIconRef:b,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:h,nodePropsRef:N,menuPropsRef:A}=o,$=G(xe,null),B=G(me),Q=G(Ne),ie=g(()=>e.tmNode.rawNode),Y=g(()=>{const{value:s}=P;return he(e.tmNode.rawNode,s)}),ae=g(()=>{const{disabled:s}=e.tmNode;return s}),de=g(()=>{if(!Y.value)return!1;const{key:s,disabled:y}=e.tmNode;if(y)return!1;const{value:O}=i,{value:j}=n,{value:se}=r,{value:M}=t;return O!==null?M.includes(s):j!==null?M.includes(s)&&M[M.length-1]!==s:se!==null?M.includes(s):!1}),le=g(()=>n.value===null&&!c.value),Z=vo(de,300,le),U=g(()=>!!($!=null&&$.enteringSubmenuRef.value)),q=F(!1);W(xe,{enteringSubmenuRef:q});function T(){q.value=!0}function l(){q.value=!1}function w(){const{parentKey:s,tmNode:y}=e;y.disabled||a.value&&(r.value=s,n.value=null,i.value=y.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&i.value!==s.key&&w()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:y}=s;y&&!we({target:y},"dropdownOption")&&!we({target:y},"scrollbarRail")&&(i.value=null)}function K(){const{value:s}=Y,{tmNode:y}=e;a.value&&!s&&!y.disabled&&(o.doSelect(y.key,y.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:x,renderIcon:b,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:A,popoverBody:Q,animated:c,mergedShowSubmenu:g(()=>Z.value&&!U.value),rawNode:ie,hasSubmenu:Y,pending:oe(()=>{const{value:s}=t,{key:y}=e.tmNode;return s.includes(y)}),childActive:oe(()=>{const{value:s}=d,{key:y}=e.tmNode,O=s.findIndex(j=>y===j);return O===-1?!1:O<s.length-1}),active:oe(()=>{const{value:s}=d,{key:y}=e.tmNode,O=s.findIndex(j=>y===j);return O===-1?!1:O===s.length-1}),mergedDisabled:ae,renderOption:h,nodeProps:N,handleClick:K,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:n,mergedShowSubmenu:r,clsPrefix:t,siblingHasIcon:d,siblingHasSubmenu:c,renderLabel:a,renderIcon:x,renderOption:b,nodeProps:S,props:P,scrollable:h}=this;let N=null;if(r){const Q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);N=u(Ce,Object.assign({},Q,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const A={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},$=S==null?void 0:S(n),B=u("div",Object.assign({class:[`${t}-dropdown-option`,$==null?void 0:$.class],"data-dropdown-option":!0},$),u("div",Se(A,P),[u("div",{class:[`${t}-dropdown-option-body__prefix`,d&&`${t}-dropdown-option-body__prefix--show-icon`]},[x?x(n):te(n.icon)]),u("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(n):te((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,c&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(co,null,{default:()=>u(po,null)}):null)]),this.hasSubmenu?u(We,null,{default:()=>[u(Ge,null,{default:()=>u("div",{class:`${t}-dropdown-offset-container`},u(Ue,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>u("div",{class:`${t}-dropdown-menu-wrapper`},i?u(qe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>N}):N)}))})]}):null);return b?b({node:B,option:n}):B}}),ko=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=G(me),{renderLabelRef:i,labelFieldRef:n,nodePropsRef:r,renderOptionRef:t}=G(re);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:r,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:n,nodeProps:r,renderLabel:t,renderOption:d}=this,{rawNode:c}=this.tmNode,a=u("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(c)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},te(c.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(c):te((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:a,option:c}):a}}),So=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:n}=e;return u(Ve,null,u(ko,{clsPrefix:i,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:t}=r;return t.show===!1?null:Ke(t)?u($e,{clsPrefix:i,key:r.key}):r.isGroup?(Xe("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Ie,{clsPrefix:i,tmNode:r,parentKey:o,key:r.key})}))}}),No=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Ce=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=G(re);W(me,{showIconRef:g(()=>{const r=o.value;return e.tmNodes.some(t=>{var d;if(t.isGroup)return(d=t.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:c}=t;return r?r(c):c.icon})}),hasSubmenuRef:g(()=>{const{value:r}=i;return e.tmNodes.some(t=>{var d;if(t.isGroup)return(d=t.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>he(a,r));const{rawNode:c}=t;return he(c,r)})})});const n=F(null);return W(Ze,null),W(Je,null),W(Ne,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,n=this.tmNodes.map(r=>{const{rawNode:t}=r;return t.show===!1?null:xo(t)?u(No,{tmNode:r,key:r.key}):Ke(t)?u($e,{clsPrefix:o,key:r.key}):go(t)?u(So,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):u(Ie,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:t.props,scrollable:i})});return u("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?u(Qe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Ye({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),_o=_("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[eo(),_("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[k("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
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
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),_("dropdown-menu","pointer-events: all;")]),_("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),_("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),_("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Pe),$o=Object.assign(Object.assign(Object.assign({},Pe),Po),_e.props),Ko=D({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=F(!1),i=to(z(e,"show"),o),n=g(()=>{const{keyField:l,childrenField:w}=e;return ro(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),r=g(()=>n.value.treeNodes),t=F(null),d=F(null),c=F(null),a=g(()=>{var l,w,f;return(f=(w=(l=t.value)!==null&&l!==void 0?l:d.value)!==null&&w!==void 0?w:c.value)!==null&&f!==void 0?f:null}),x=g(()=>n.value.getPath(a.value).keyPath),b=g(()=>n.value.getPath(e.value).keyPath),S=oe(()=>e.keyboard&&i.value);bo({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:Y},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:Q}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:h}=ke(e),N=_e("Dropdown","-dropdown",_o,io,e,P);W(re,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:d,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:x,activeKeyPathRef:b,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:A,doUpdateShow:$}),ve(i,l=>{!e.animated&&!l&&B()});function A(l,w){const{onSelect:f}=e;f&&ce(f,l,w)}function $(l){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&ce(w,l),f&&ce(f,l),o.value=l}function B(){t.value=null,d.value=null,c.value=null}function Q(){$(!1)}function ie(){U("left")}function Y(){U("right")}function ae(){U("up")}function de(){U("down")}function le(){const l=Z();l!=null&&l.isLeaf&&i.value&&(A(l.key,l.rawNode),$(!1))}function Z(){var l;const{value:w}=n,{value:f}=a;return!w||f===null?null:(l=w.getNode(f))!==null&&l!==void 0?l:null}function U(l){const{value:w}=a,{value:{getFirstAvailableNode:f}}=n;let p=null;if(w===null){const K=f();K!==null&&(p=K.key)}else{const K=Z();if(K){let s;switch(l){case"down":s=K.getNext();break;case"up":s=K.getPrev();break;case"right":s=K.getChild();break;case"left":s=K.getParent();break}s&&(p=s.key)}}p!==null&&(t.value=null,d.value=p)}const q=g(()=>{const{size:l,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=N.value,{padding:K,dividerColor:s,borderRadius:y,optionOpacityDisabled:O,[L("optionIconSuffixWidth",l)]:j,[L("optionSuffixWidth",l)]:se,[L("optionIconPrefixWidth",l)]:M,[L("optionPrefixWidth",l)]:Oe,[L("fontSize",l)]:ze,[L("optionHeight",l)]:De,[L("optionIconSize",l)]:Ae}=p,m={"--n-bezier":f,"--n-font-size":ze,"--n-padding":K,"--n-border-radius":y,"--n-option-height":De,"--n-option-prefix-width":Oe,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":j,"--n-option-icon-size":Ae,"--n-divider-color":s,"--n-option-opacity-disabled":O};return w?(m["--n-color"]=p.colorInverted,m["--n-option-color-hover"]=p.optionColorHoverInverted,m["--n-option-color-active"]=p.optionColorActiveInverted,m["--n-option-text-color"]=p.optionTextColorInverted,m["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,m["--n-option-text-color-active"]=p.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,m["--n-prefix-color"]=p.prefixColorInverted,m["--n-suffix-color"]=p.suffixColorInverted,m["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(m["--n-color"]=p.color,m["--n-option-color-hover"]=p.optionColorHover,m["--n-option-color-active"]=p.optionColorActive,m["--n-option-text-color"]=p.optionTextColor,m["--n-option-text-color-hover"]=p.optionTextColorHover,m["--n-option-text-color-active"]=p.optionTextColorActive,m["--n-option-text-color-child-active"]=p.optionTextColorChildActive,m["--n-prefix-color"]=p.prefixColor,m["--n-suffix-color"]=p.suffixColor,m["--n-group-header-text-color"]=p.groupHeaderTextColor),m}),T=h?ao("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:P,mergedTheme:N,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:$,cssVars:h?void 0:q,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(n,r,t,d,c)=>{var a;const{mergedClsPrefix:x,menuProps:b}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(b==null?void 0:b(void 0,this.tmNodes.map(h=>h.rawNode)))||{},P={ref:ho(r),class:[n,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:c};return u(Ce,Se(this.$attrs,P,S))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(no,Object.assign({},oo(this.$props,Ro),i),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Bo="/img/desktop/mianbaoduo.png",Io=D({__name:"Desktop",async setup(e){let o,i,n;try{const h=([o,i]=ye(()=>fetch("https://dapi.alistgo.com/v0/version/latest")),o=await o,i(),o);h.ok&&(n=([o,i]=ye(()=>h.json()),o=await o,i(),o).version)}catch(h){console.warn("Failed to fetch version:",h)}const r=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_x64-setup.exe`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_amd64.deb`}],t=navigator.platform.toLowerCase(),d=F("win_x64");t.includes("win")?d.value="win_x64":t.includes("linux")?d.value="linux":t.includes("mac")&&(d.value="mac_arm64"),console.log(d.value);let c={down:"Download",website:"Website"};const a=g(()=>{var h;return(h=r.find(N=>N.key===d.value))==null?void 0:h.label}),x=g(()=>r.map(h=>({...h,label:`${h.label} ${d.value===h.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(c={down:"下载",website:"官网"});function b(){var N;const h=(N=r.find(A=>A.key===d.value))==null?void 0:N.url;window.open(`${h}`,"_blank")}function S(h){d.value=h}function P(){window.open("https://desktop.alistgo.com/zh","_blank")}return(h,N)=>(so(),lo(C(ge),{align:"center",vertical:"",size:"large"},{default:E(()=>[H(C(ge),{class:"btn"},{default:E(()=>[H(C(ue),{size:"large",type:"info",onClick:P,tertiary:""},{default:E(()=>[pe(fe(C(c).website),1)]),_:1}),H(C(yo),null,{default:E(()=>[H(C(Ko),{trigger:"hover",options:x.value,onSelect:S,size:"large"},{default:E(()=>[H(C(ue),{size:"large",type:"primary",tertiary:""},{default:E(()=>[pe("💻"+fe(a.value),1)]),_:1})]),_:1},8,["options"]),H(C(ue),{size:"large",onClick:b,type:"info",secondary:""},{default:E(()=>[pe(fe(C(c).down),1)]),_:1})]),_:1})]),_:1}),H(C(fo),{src:"/img/guide/desktop.png"})]),_:1}))}}),To=uo(Io,[["__scopeId","data-v-b00e20d4"]]);export{To as D,Bo as _};
