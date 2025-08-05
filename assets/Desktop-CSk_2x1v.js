import{b as Be,B as ue}from"./Button-BYKbOoVC.js";import{j as Te,aK as Fe,aL as je,am as Me,aG as J,aM as Le,ad as ee,a5 as ve,r as F,p as N,ap as ne,q as k,s as R,K,d as D,h as u,y as ke,al as Ee,X as We,aF as H,aa as be,aN as te,a7 as G,x as Se,aO as He,aP as Ge,aQ as qe,aR as Ue,aS as _e,B as g,ag as oe,aT as we,F as Ve,v as Xe,aU as Qe,aV as Ye,aW as Ze,aX as Je,aY as eo,aZ as oo,a_ as no,af as to,ae as O,a$ as ro,z as Ne,b0 as io,G as L,C as ao,a3 as ce,b1 as Pe,b2 as ye,c as lo,o as so,w as E,a as W,u as C,N as ge,e as pe,t as fe,_ as uo}from"./app-Q9sS22GI.js";import{N as co}from"./Icon-MDPbN3gL.js";import{C as po}from"./ChevronRight-d9uuJ0Wr.js";import{N as fo}from"./Image-3qxDz5aY.js";function ho(e={},o){const r=Te({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:i,keyup:t}=e,n=a=>{switch(a.key){case"Control":r.ctrl=!0;break;case"Meta":r.command=!0,r.win=!0;break;case"Shift":r.shift=!0;break;case"Tab":r.tab=!0;break}i!==void 0&&Object.keys(i).forEach(x=>{if(x!==a.key)return;const b=i[x];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},d=a=>{switch(a.key){case"Control":r.ctrl=!1;break;case"Meta":r.command=!1,r.win=!1;break;case"Shift":r.shift=!1;break;case"Tab":r.tab=!1;break}t!==void 0&&Object.keys(t).forEach(x=>{if(x!==a.key)return;const b=t[x];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},c=()=>{(o===void 0||o.value)&&(ee("keydown",document,n),ee("keyup",document,d)),o!==void 0&&ve(o,a=>{a?(ee("keydown",document,n),ee("keyup",document,d)):(J("keydown",document,n),J("keyup",document,d))})};return Fe()?(je(c),Me(()=>{(o===void 0||o.value)&&(J("keydown",document,n),J("keyup",document,d))})):c(),Le(r)}function vo(e,o,r){const i=F(e.value);let t=null;return ve(e,n=>{t!==null&&window.clearTimeout(t),n===!0?r&&!r.value?i.value=!0:t=window.setTimeout(()=>{i.value=!0},o):i.value=!1}),i}function bo(e){return o=>{o?e.value=o.$el:e.value=null}}const v="0!important",Re="-1px!important";function V(e){return k(`${e}-type`,[R("& +",[N("button",{},[k(`${e}-type`,[K("border",{borderLeftWidth:v}),K("state-border",{left:Re})])])])])}function X(e){return k(`${e}-type`,[R("& +",[N("button",[k(`${e}-type`,[K("border",{borderTopWidth:v}),K("state-border",{top:Re})])])])])}const mo=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[N("button",[R("&:first-child:not(:last-child)",`
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
 `),V("default"),k("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),k("vertical",{flexDirection:"column"},[N("button",[R("&:first-child:not(:last-child)",`
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
 `),X("default"),k("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},yo=D({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:r}=ke(e);return Ee("-button-group",mo,o),H(Be,e),{rtlEnabled:We("ButtonGroup",r,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),me=be("n-dropdown-menu"),re=be("n-dropdown"),xe=be("n-dropdown-option"),$e=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),go=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=G(me),{renderLabelRef:r,labelFieldRef:i,nodePropsRef:t,renderOptionRef:n}=G(re);return{labelField:i,showIcon:e,hasSubmenu:o,renderLabel:r,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:r,showIcon:i,nodeProps:t,renderLabel:n,renderOption:d}=this,{rawNode:c}=this.tmNode,a=u("div",Object.assign({class:`${o}-dropdown-option`},t==null?void 0:t(c)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,i&&`${o}-dropdown-option-body__prefix--show-icon`]},te(c.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(c):te((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,r&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:a,option:c}):a}});function he(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Ke=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=G(re),{hoverKeyRef:r,keyboardKeyRef:i,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:d,animatedRef:c,mergedShowRef:a,renderLabelRef:x,renderIconRef:b,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:h,nodePropsRef:_,menuPropsRef:A}=o,$=G(xe,null),B=G(me),Q=G(_e),ie=g(()=>e.tmNode.rawNode),Y=g(()=>{const{value:s}=P;return he(e.tmNode.rawNode,s)}),ae=g(()=>{const{disabled:s}=e.tmNode;return s}),de=g(()=>{if(!Y.value)return!1;const{key:s,disabled:y}=e.tmNode;if(y)return!1;const{value:z}=r,{value:j}=i,{value:se}=t,{value:M}=n;return z!==null?M.includes(s):j!==null?M.includes(s)&&M[M.length-1]!==s:se!==null?M.includes(s):!1}),le=g(()=>i.value===null&&!c.value),Z=vo(de,300,le),q=g(()=>!!($!=null&&$.enteringSubmenuRef.value)),U=F(!1);H(xe,{enteringSubmenuRef:U});function T(){U.value=!0}function l(){U.value=!1}function w(){const{parentKey:s,tmNode:y}=e;y.disabled||a.value&&(t.value=s,i.value=null,r.value=y.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&r.value!==s.key&&w()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:y}=s;y&&!we({target:y},"dropdownOption")&&!we({target:y},"scrollbarRail")&&(r.value=null)}function I(){const{value:s}=Y,{tmNode:y}=e;a.value&&!s&&!y.disabled&&(o.doSelect(y.key,y.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:x,renderIcon:b,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:A,popoverBody:Q,animated:c,mergedShowSubmenu:g(()=>Z.value&&!q.value),rawNode:ie,hasSubmenu:Y,pending:oe(()=>{const{value:s}=n,{key:y}=e.tmNode;return s.includes(y)}),childActive:oe(()=>{const{value:s}=d,{key:y}=e.tmNode,z=s.findIndex(j=>y===j);return z===-1?!1:z<s.length-1}),active:oe(()=>{const{value:s}=d,{key:y}=e.tmNode,z=s.findIndex(j=>y===j);return z===-1?!1:z===s.length-1}),mergedDisabled:ae,renderOption:h,nodeProps:_,handleClick:I,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:r,rawNode:i,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:d,siblingHasSubmenu:c,renderLabel:a,renderIcon:x,renderOption:b,nodeProps:S,props:P,scrollable:h}=this;let _=null;if(t){const Q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,i,i.children);_=u(Ce,Object.assign({},Q,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const A={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},$=S==null?void 0:S(i),B=u("div",Object.assign({class:[`${n}-dropdown-option`,$==null?void 0:$.class],"data-dropdown-option":!0},$),u("div",Se(A,P),[u("div",{class:[`${n}-dropdown-option-body__prefix`,d&&`${n}-dropdown-option-body__prefix--show-icon`]},[x?x(i):te(i.icon)]),u("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},a?a(i):te((o=i[this.labelField])!==null&&o!==void 0?o:i.title)),u("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,c&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(co,null,{default:()=>u(po,null)}):null)]),this.hasSubmenu?u(He,null,{default:()=>[u(Ge,null,{default:()=>u("div",{class:`${n}-dropdown-offset-container`},u(qe,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>u("div",{class:`${n}-dropdown-menu-wrapper`},r?u(Ue,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>_}):_)}))})]}):null);return b?b({node:B,option:i}):B}}),So=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:r}=this,{children:i}=e;return u(Ve,null,u(go,{clsPrefix:r,tmNode:e,key:e.key}),i==null?void 0:i.map(t=>{const{rawNode:n}=t;return n.show===!1?null:Ie(n)?u($e,{clsPrefix:r,key:t.key}):t.isGroup?(Xe("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Ke,{clsPrefix:r,tmNode:t,parentKey:o,key:t.key})}))}}),_o=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Ce=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:r}=G(re);H(me,{showIconRef:g(()=>{const t=o.value;return e.tmNodes.some(n=>{var d;if(n.isGroup)return(d=n.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>t?t(a):a.icon);const{rawNode:c}=n;return t?t(c):c.icon})}),hasSubmenuRef:g(()=>{const{value:t}=r;return e.tmNodes.some(n=>{var d;if(n.isGroup)return(d=n.children)===null||d===void 0?void 0:d.some(({rawNode:a})=>he(a,t));const{rawNode:c}=n;return he(c,t)})})});const i=F(null);return H(Ze,null),H(Je,null),H(_e,i),{bodyRef:i}},render(){const{parentKey:e,clsPrefix:o,scrollable:r}=this,i=this.tmNodes.map(t=>{const{rawNode:n}=t;return n.show===!1?null:ko(n)?u(_o,{tmNode:t,key:t.key}):Ie(n)?u($e,{clsPrefix:o,key:t.key}):xo(n)?u(So,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):u(Ke,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:r})});return u("div",{class:[`${o}-dropdown-menu`,r&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},r?u(Qe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?Ye({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),No=N("dropdown-menu",`
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
 `)]),N("dropdown-option-body",`
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
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),k("active",`
 color: var(--n-option-text-color-active);
 `,[K("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),k("child-active",`
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
 `),R(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),k("scrollable",[K("content",`
 padding: var(--n-padding);
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Pe),$o=Object.assign(Object.assign(Object.assign({},Pe),Po),Ne.props),Io=D({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=F(!1),r=to(O(e,"show"),o),i=g(()=>{const{keyField:l,childrenField:w}=e;return ro(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),t=g(()=>i.value.treeNodes),n=F(null),d=F(null),c=F(null),a=g(()=>{var l,w,f;return(f=(w=(l=n.value)!==null&&l!==void 0?l:d.value)!==null&&w!==void 0?w:c.value)!==null&&f!==void 0?f:null}),x=g(()=>i.value.getPath(a.value).keyPath),b=g(()=>i.value.getPath(e.value).keyPath),S=oe(()=>e.keyboard&&r.value);ho({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:Y},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:Q}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:h}=ke(e),_=Ne("Dropdown","-dropdown",No,io,e,P);H(re,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:d,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:x,activeKeyPathRef:b,animatedRef:O(e,"animated"),mergedShowRef:r,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:A,doUpdateShow:$}),ve(r,l=>{!e.animated&&!l&&B()});function A(l,w){const{onSelect:f}=e;f&&ce(f,l,w)}function $(l){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&ce(w,l),f&&ce(f,l),o.value=l}function B(){n.value=null,d.value=null,c.value=null}function Q(){$(!1)}function ie(){q("left")}function Y(){q("right")}function ae(){q("up")}function de(){q("down")}function le(){const l=Z();l!=null&&l.isLeaf&&r.value&&(A(l.key,l.rawNode),$(!1))}function Z(){var l;const{value:w}=i,{value:f}=a;return!w||f===null?null:(l=w.getNode(f))!==null&&l!==void 0?l:null}function q(l){const{value:w}=a,{value:{getFirstAvailableNode:f}}=i;let p=null;if(w===null){const I=f();I!==null&&(p=I.key)}else{const I=Z();if(I){let s;switch(l){case"down":s=I.getNext();break;case"up":s=I.getPrev();break;case"right":s=I.getChild();break;case"left":s=I.getParent();break}s&&(p=s.key)}}p!==null&&(n.value=null,d.value=p)}const U=g(()=>{const{size:l,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=_.value,{padding:I,dividerColor:s,borderRadius:y,optionOpacityDisabled:z,[L("optionIconSuffixWidth",l)]:j,[L("optionSuffixWidth",l)]:se,[L("optionIconPrefixWidth",l)]:M,[L("optionPrefixWidth",l)]:ze,[L("fontSize",l)]:Oe,[L("optionHeight",l)]:De,[L("optionIconSize",l)]:Ae}=p,m={"--n-bezier":f,"--n-font-size":Oe,"--n-padding":I,"--n-border-radius":y,"--n-option-height":De,"--n-option-prefix-width":ze,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":j,"--n-option-icon-size":Ae,"--n-divider-color":s,"--n-option-opacity-disabled":z};return w?(m["--n-color"]=p.colorInverted,m["--n-option-color-hover"]=p.optionColorHoverInverted,m["--n-option-color-active"]=p.optionColorActiveInverted,m["--n-option-text-color"]=p.optionTextColorInverted,m["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,m["--n-option-text-color-active"]=p.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,m["--n-prefix-color"]=p.prefixColorInverted,m["--n-suffix-color"]=p.suffixColorInverted,m["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(m["--n-color"]=p.color,m["--n-option-color-hover"]=p.optionColorHover,m["--n-option-color-active"]=p.optionColorActive,m["--n-option-text-color"]=p.optionTextColor,m["--n-option-text-color-hover"]=p.optionTextColorHover,m["--n-option-text-color-active"]=p.optionTextColorActive,m["--n-option-text-color-child-active"]=p.optionTextColorChildActive,m["--n-prefix-color"]=p.prefixColor,m["--n-suffix-color"]=p.suffixColor,m["--n-group-header-text-color"]=p.groupHeaderTextColor),m}),T=h?ao("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:P,mergedTheme:_,tmNodes:t,mergedShow:r,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:$,cssVars:h?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(i,t,n,d,c)=>{var a;const{mergedClsPrefix:x,menuProps:b}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(b==null?void 0:b(void 0,this.tmNodes.map(h=>h.rawNode)))||{},P={ref:bo(t),class:[i,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:d,onMouseleave:c};return u(Ce,Se(this.$attrs,P,S))},{mergedTheme:o}=this,r={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(no,Object.assign({},oo(this.$props,Ro),r),{trigger:()=>{var i,t;return(t=(i=this.$slots).default)===null||t===void 0?void 0:t.call(i)}})}}),Bo="/img/desktop/logIn_mbd.png",To="/img/desktop/key_lemonsqueezy.png",Fo="/img/desktop/login_lemonsqueezy.png",jo="/img/desktop/mianbaoduo.png",Mo="/img/desktop/lemonsqueezy.png",Ko=D({__name:"Desktop",async setup(e){let o,r,i;try{const h=([o,r]=ye(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),o=await o,r(),o);h.ok&&(i=([o,r]=ye(()=>h.json()),o=await o,r(),o).version)}catch(h){console.warn("Failed to fetch version:",h)}const t=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:"https://alistgo.com/download/Alist/alist-desktop_aarch64.dmg"},{key:"mac_x64",label:"MacOS (Intel)",url:"https://alistgo.com/download/Alist/alist-desktop_x64.dmg"},{key:"win_x64",label:"Windows (X64)",url:"https://alistgo.com/download/Alist/alist-desktop_x64-setup.exe"},{key:"win_arm64",label:"Windows (ARM64)",url:"https://alistgo.com/download/Alist/alist-desktop_arm64-setup.exe"},{key:"linux",label:"Linux",url:"https://alistgo.com/download/Alist/alist-desktop_amd64.deb"}],n=navigator.platform.toLowerCase(),d=F("win_x64");n.includes("win")?d.value="win_x64":n.includes("linux")?d.value="linux":n.includes("mac")&&(d.value="mac_arm64"),console.log(d.value);let c={down:"Download",website:"Website"};const a=g(()=>{var h;return(h=t.find(_=>_.key===d.value))==null?void 0:h.label}),x=g(()=>t.map(h=>({...h,label:`${h.label} ${d.value===h.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(c={down:"下载",website:"官网"});function b(){var _;const h=(_=t.find(A=>A.key===d.value))==null?void 0:_.url;window.open(`${h}`,"_blank")}function S(h){d.value=h}function P(){window.open("https://desktop.alistgo.com/zh","_blank")}return(h,_)=>(so(),lo(C(ge),{align:"center",vertical:"",size:"large"},{default:E(()=>[W(C(ge),{class:"btn"},{default:E(()=>[W(C(ue),{size:"large",type:"info",onClick:P,tertiary:""},{default:E(()=>[pe(fe(C(c).website),1)]),_:1}),W(C(yo),null,{default:E(()=>[W(C(Io),{trigger:"hover",options:x.value,onSelect:S,size:"large"},{default:E(()=>[W(C(ue),{size:"large",type:"primary",tertiary:""},{default:E(()=>[pe("💻"+fe(a.value),1)]),_:1})]),_:1},8,["options"]),W(C(ue),{size:"large",onClick:b,type:"info",secondary:""},{default:E(()=>[pe(fe(C(c).down),1)]),_:1})]),_:1})]),_:1}),W(C(fo),{src:"/img/guide/desktop.png"})]),_:1}))}}),Lo=uo(Ko,[["__scopeId","data-v-13cbac8f"]]);export{Lo as D,To as _,Fo as a,Bo as b,Mo as c,jo as d};
