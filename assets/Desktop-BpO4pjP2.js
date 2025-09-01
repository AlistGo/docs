import{b as Be,B as ue}from"./Button-DClLL-N7.js";import{j as Te,aK as Fe,aL as je,an as Me,aG as J,aM as Le,ae as ee,a6 as ve,r as F,p as N,aq as ne,q as k,s as $,K,d as D,h as u,y as ke,am as Ee,X as We,aF as H,ab as be,aN as te,a8 as G,x as Se,aO as He,aP as Ge,aQ as qe,aR as Ue,aS as _e,B as g,ah as oe,aT as we,F as Ve,v as Xe,aU as Qe,aV as Ye,aW as Ze,aX as Je,aY as eo,aZ as oo,a_ as no,ag as to,af as O,a$ as ro,z as Ne,b0 as io,G as L,C as ao,a3 as ce,b1 as Pe,b2 as ye,c as lo,o as so,w as E,a as W,u as C,N as ge,e as pe,t as fe,_ as uo}from"./app-Cnv635yE.js";import{N as co}from"./Icon-BJyYaU8M.js";import{C as po}from"./ChevronRight-BQDnuuIR.js";import{N as fo}from"./Image-u1WuijPR.js";function ho(e={},o){const i=Te({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:r}=e,t=a=>{switch(a.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}n!==void 0&&Object.keys(n).forEach(x=>{if(x!==a.key)return;const b=n[x];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},d=a=>{switch(a.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}r!==void 0&&Object.keys(r).forEach(x=>{if(x!==a.key)return;const b=r[x];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},c=()=>{(o===void 0||o.value)&&(ee("keydown",document,t),ee("keyup",document,d)),o!==void 0&&ve(o,a=>{a?(ee("keydown",document,t),ee("keyup",document,d)):(J("keydown",document,t),J("keyup",document,d))})};return Fe()?(je(c),Me(()=>{(o===void 0||o.value)&&(J("keydown",document,t),J("keyup",document,d))})):c(),Le(i)}function vo(e,o,i){const n=F(e.value);let r=null;return ve(e,t=>{r!==null&&window.clearTimeout(r),t===!0?i&&!i.value?n.value=!0:r=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function bo(e){return o=>{o?e.value=o.$el:e.value=null}}const v="0!important",$e="-1px!important";function V(e){return k(`${e}-type`,[$("& +",[N("button",{},[k(`${e}-type`,[K("border",{borderLeftWidth:v}),K("state-border",{left:$e})])])])])}function X(e){return k(`${e}-type`,[$("& +",[N("button",[k(`${e}-type`,[K("border",{borderTopWidth:v}),K("state-border",{top:$e})])])])])}const mo=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[N("button",[$("&:first-child:not(:last-child)",`
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
 `),X("default"),k("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},yo=D({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i}=ke(e);return Ee("-button-group",mo,o),H(Be,e),{rtlEnabled:We("ButtonGroup",i,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),me=be("n-dropdown-menu"),re=be("n-dropdown"),xe=be("n-dropdown-option"),Re=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),go=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=G(me),{renderLabelRef:i,labelFieldRef:n,nodePropsRef:r,renderOptionRef:t}=G(re);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:r,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:n,nodeProps:r,renderLabel:t,renderOption:d}=this,{rawNode:c}=this.tmNode,a=u("div",Object.assign({class:`${o}-dropdown-option`},r==null?void 0:r(c)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},te(c.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(c):te((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:a,option:c}):a}});function he(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Ke=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=G(re),{hoverKeyRef:i,keyboardKeyRef:n,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:t,activeKeyPathRef:d,animatedRef:c,mergedShowRef:a,renderLabelRef:x,renderIconRef:b,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:h,nodePropsRef:_,menuPropsRef:A}=o,R=G(xe,null),B=G(me),Q=G(_e),ie=g(()=>e.tmNode.rawNode),Y=g(()=>{const{value:s}=P;return he(e.tmNode.rawNode,s)}),ae=g(()=>{const{disabled:s}=e.tmNode;return s}),de=g(()=>{if(!Y.value)return!1;const{key:s,disabled:y}=e.tmNode;if(y)return!1;const{value:z}=i,{value:j}=n,{value:se}=r,{value:M}=t;return z!==null?M.includes(s):j!==null?M.includes(s)&&M[M.length-1]!==s:se!==null?M.includes(s):!1}),le=g(()=>n.value===null&&!c.value),Z=vo(de,300,le),q=g(()=>!!(R!=null&&R.enteringSubmenuRef.value)),U=F(!1);H(xe,{enteringSubmenuRef:U});function T(){U.value=!0}function l(){U.value=!1}function w(){const{parentKey:s,tmNode:y}=e;y.disabled||a.value&&(r.value=s,n.value=null,i.value=y.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&i.value!==s.key&&w()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:y}=s;y&&!we({target:y},"dropdownOption")&&!we({target:y},"scrollbarRail")&&(i.value=null)}function I(){const{value:s}=Y,{tmNode:y}=e;a.value&&!s&&!y.disabled&&(o.doSelect(y.key,y.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:x,renderIcon:b,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:A,popoverBody:Q,animated:c,mergedShowSubmenu:g(()=>Z.value&&!q.value),rawNode:ie,hasSubmenu:Y,pending:oe(()=>{const{value:s}=t,{key:y}=e.tmNode;return s.includes(y)}),childActive:oe(()=>{const{value:s}=d,{key:y}=e.tmNode,z=s.findIndex(j=>y===j);return z===-1?!1:z<s.length-1}),active:oe(()=>{const{value:s}=d,{key:y}=e.tmNode,z=s.findIndex(j=>y===j);return z===-1?!1:z===s.length-1}),mergedDisabled:ae,renderOption:h,nodeProps:_,handleClick:I,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:n,mergedShowSubmenu:r,clsPrefix:t,siblingHasIcon:d,siblingHasSubmenu:c,renderLabel:a,renderIcon:x,renderOption:b,nodeProps:S,props:P,scrollable:h}=this;let _=null;if(r){const Q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);_=u(Ce,Object.assign({},Q,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const A={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},R=S==null?void 0:S(n),B=u("div",Object.assign({class:[`${t}-dropdown-option`,R==null?void 0:R.class],"data-dropdown-option":!0},R),u("div",Se(A,P),[u("div",{class:[`${t}-dropdown-option-body__prefix`,d&&`${t}-dropdown-option-body__prefix--show-icon`]},[x?x(n):te(n.icon)]),u("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(n):te((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,c&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(co,null,{default:()=>u(po,null)}):null)]),this.hasSubmenu?u(He,null,{default:()=>[u(Ge,null,{default:()=>u("div",{class:`${t}-dropdown-offset-container`},u(qe,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>u("div",{class:`${t}-dropdown-menu-wrapper`},i?u(Ue,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return b?b({node:B,option:n}):B}}),So=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:n}=e;return u(Ve,null,u(go,{clsPrefix:i,tmNode:e,key:e.key}),n==null?void 0:n.map(r=>{const{rawNode:t}=r;return t.show===!1?null:Ie(t)?u(Re,{clsPrefix:i,key:r.key}):r.isGroup?(Xe("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Ke,{clsPrefix:i,tmNode:r,parentKey:o,key:r.key})}))}}),_o=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Ce=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=G(re);H(me,{showIconRef:g(()=>{const r=o.value;return e.tmNodes.some(t=>{var d;if(t.isGroup)return(d=t.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>r?r(a):a.icon);const{rawNode:c}=t;return r?r(c):c.icon})}),hasSubmenuRef:g(()=>{const{value:r}=i;return e.tmNodes.some(t=>{var d;if(t.isGroup)return(d=t.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>he(a,r));const{rawNode:c}=t;return he(c,r)})})});const n=F(null);return H(Ze,null),H(Je,null),H(_e,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,n=this.tmNodes.map(r=>{const{rawNode:t}=r;return t.show===!1?null:ko(t)?u(_o,{tmNode:r,key:r.key}):Ie(t)?u(Re,{clsPrefix:o,key:r.key}):xo(t)?u(So,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):u(Ke,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:t.props,scrollable:i})});return u("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?u(Qe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Ye({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),No=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[eo(),N("dropdown-option",`
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
 `),ne("disabled",[k("pending",`
 color: var(--n-option-text-color-hover);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),$("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),$("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),k("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),k("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[K("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[k("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),K("prefix",`
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
 `)]),K("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),K("suffix",`
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
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[K("content",`
 padding: var(--n-padding);
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},$o=Object.keys(Pe),Ro=Object.assign(Object.assign(Object.assign({},Pe),Po),Ne.props),Io=D({name:"Dropdown",inheritAttrs:!1,props:Ro,setup(e){const o=F(!1),i=to(O(e,"show"),o),n=g(()=>{const{keyField:l,childrenField:w}=e;return ro(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),r=g(()=>n.value.treeNodes),t=F(null),d=F(null),c=F(null),a=g(()=>{var l,w,f;return(f=(w=(l=t.value)!==null&&l!==void 0?l:d.value)!==null&&w!==void 0?w:c.value)!==null&&f!==void 0?f:null}),x=g(()=>n.value.getPath(a.value).keyPath),b=g(()=>n.value.getPath(e.value).keyPath),S=oe(()=>e.keyboard&&i.value);ho({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:Y},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:Q}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:h}=ke(e),_=Ne("Dropdown","-dropdown",No,io,e,P);H(re,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:d,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:x,activeKeyPathRef:b,animatedRef:O(e,"animated"),mergedShowRef:i,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:A,doUpdateShow:R}),ve(i,l=>{!e.animated&&!l&&B()});function A(l,w){const{onSelect:f}=e;f&&ce(f,l,w)}function R(l){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&ce(w,l),f&&ce(f,l),o.value=l}function B(){t.value=null,d.value=null,c.value=null}function Q(){R(!1)}function ie(){q("left")}function Y(){q("right")}function ae(){q("up")}function de(){q("down")}function le(){const l=Z();l!=null&&l.isLeaf&&i.value&&(A(l.key,l.rawNode),R(!1))}function Z(){var l;const{value:w}=n,{value:f}=a;return!w||f===null?null:(l=w.getNode(f))!==null&&l!==void 0?l:null}function q(l){const{value:w}=a,{value:{getFirstAvailableNode:f}}=n;let p=null;if(w===null){const I=f();I!==null&&(p=I.key)}else{const I=Z();if(I){let s;switch(l){case"down":s=I.getNext();break;case"up":s=I.getPrev();break;case"right":s=I.getChild();break;case"left":s=I.getParent();break}s&&(p=s.key)}}p!==null&&(t.value=null,d.value=p)}const U=g(()=>{const{size:l,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=_.value,{padding:I,dividerColor:s,borderRadius:y,optionOpacityDisabled:z,[L("optionIconSuffixWidth",l)]:j,[L("optionSuffixWidth",l)]:se,[L("optionIconPrefixWidth",l)]:M,[L("optionPrefixWidth",l)]:ze,[L("fontSize",l)]:Oe,[L("optionHeight",l)]:De,[L("optionIconSize",l)]:Ae}=p,m={"--n-bezier":f,"--n-font-size":Oe,"--n-padding":I,"--n-border-radius":y,"--n-option-height":De,"--n-option-prefix-width":ze,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":j,"--n-option-icon-size":Ae,"--n-divider-color":s,"--n-option-opacity-disabled":z};return w?(m["--n-color"]=p.colorInverted,m["--n-option-color-hover"]=p.optionColorHoverInverted,m["--n-option-color-active"]=p.optionColorActiveInverted,m["--n-option-text-color"]=p.optionTextColorInverted,m["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,m["--n-option-text-color-active"]=p.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,m["--n-prefix-color"]=p.prefixColorInverted,m["--n-suffix-color"]=p.suffixColorInverted,m["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(m["--n-color"]=p.color,m["--n-option-color-hover"]=p.optionColorHover,m["--n-option-color-active"]=p.optionColorActive,m["--n-option-text-color"]=p.optionTextColor,m["--n-option-text-color-hover"]=p.optionTextColorHover,m["--n-option-text-color-active"]=p.optionTextColorActive,m["--n-option-text-color-child-active"]=p.optionTextColorChildActive,m["--n-prefix-color"]=p.prefixColor,m["--n-suffix-color"]=p.suffixColor,m["--n-group-header-text-color"]=p.groupHeaderTextColor),m}),T=h?ao("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:P,mergedTheme:_,tmNodes:r,mergedShow:i,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:R,cssVars:h?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(n,r,t,d,c)=>{var a;const{mergedClsPrefix:x,menuProps:b}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(b==null?void 0:b(void 0,this.tmNodes.map(h=>h.rawNode)))||{},P={ref:bo(r),class:[n,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[...t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:c};return u(Ce,Se(this.$attrs,P,S))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(no,Object.assign({},oo(this.$props,$o),i),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),Bo="/img/desktop/logIn_mbd.png",To="/img/desktop/key_lemonsqueezy.png",Fo="/img/desktop/login_lemonsqueezy.png",jo="/img/desktop/mianbaoduo.png",Mo="/img/desktop/lemonsqueezy.png",Ko=D({__name:"Desktop",async setup(e){let o,i,n;try{const h=([o,i]=ye(()=>fetch("https://dapi.alistgo.com/v0/version/latest")),o=await o,i(),o);h.ok&&(n=([o,i]=ye(()=>h.json()),o=await o,i(),o).version)}catch(h){console.warn("Failed to fetch version:",h)}const r=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_x64-setup.exe`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://alistgo.com/download/Alist/desktop-v${n}/alist-desktop_${n}_amd64.deb`}],t=navigator.platform.toLowerCase(),d=F("win_x64");t.includes("win")?d.value="win_x64":t.includes("linux")?d.value="linux":t.includes("mac")&&(d.value="mac_arm64"),console.log(d.value);let c={down:"Download",website:"Website"};const a=g(()=>{var h;return(h=r.find(_=>_.key===d.value))==null?void 0:h.label}),x=g(()=>r.map(h=>({...h,label:`${h.label} ${d.value===h.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(c={down:"下载",website:"官网"});function b(){var _;const h=(_=r.find(A=>A.key===d.value))==null?void 0:_.url;window.open(`${h}`,"_blank")}function S(h){d.value=h}function P(){window.open("https://desktop.alistgo.com/zh","_blank")}return(h,_)=>(so(),lo(C(ge),{align:"center",vertical:"",size:"large"},{default:E(()=>[W(C(ge),{class:"btn"},{default:E(()=>[W(C(ue),{size:"large",type:"info",onClick:P,tertiary:""},{default:E(()=>[pe(fe(C(c).website),1)]),_:1}),W(C(yo),null,{default:E(()=>[W(C(Io),{trigger:"hover",options:x.value,onSelect:S,size:"large"},{default:E(()=>[W(C(ue),{size:"large",type:"primary",tertiary:""},{default:E(()=>[pe("💻"+fe(a.value),1)]),_:1})]),_:1},8,["options"]),W(C(ue),{size:"large",onClick:b,type:"info",secondary:""},{default:E(()=>[pe(fe(C(c).down),1)]),_:1})]),_:1})]),_:1}),W(C(fo),{src:"/img/guide/desktop.png"})]),_:1}))}}),Lo=uo(Ko,[["__scopeId","data-v-b00e20d4"]]);export{Lo as D,To as _,Fo as a,Bo as b,Mo as c,jo as d};
