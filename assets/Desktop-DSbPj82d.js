import{b as Be,B as ue}from"./Button-ObfEle_A.js";import{j as Te,aL as je,aM as Fe,an as Me,aH as J,aN as Le,ad as ee,a5 as ve,r as j,p as N,aq as ne,q as k,s as R,K,d as A,h as u,y as ke,am as Ee,X as qe,aG as H,aa as be,aO as te,a7 as W,x as Se,aP as He,aQ as We,aR as Ge,aS as Ue,aT as _e,B as y,ag as oe,aU as we,F as Ve,v as Xe,aV as Qe,aW as Ye,aX as Ze,aY as Je,aZ as eo,a_ as oo,a$ as no,af as to,ae as D,b0 as ro,z as Ne,b1 as io,G as L,C as ao,a3 as ce,b2 as Pe,b3 as ge,c as lo,o as so,w as E,a as q,u as z,N as ye,e as pe,t as fe,_ as uo}from"./app-Dg-DLcSn.js";import{N as co}from"./Icon-Bp6zuP3u.js";import{C as po}from"./ChevronRight-D9G0nPIu.js";import{N as fo}from"./Image-DHaoB8Zx.js";function ho(e={},o){const t=Te({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,n=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}r!==void 0&&Object.keys(r).forEach(x=>{if(x!==a.key)return;const v=r[x];if(typeof v=="function")v(a);else{const{stop:S=!1,prevent:P=!1}=v;S&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},c=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}i!==void 0&&Object.keys(i).forEach(x=>{if(x!==a.key)return;const v=i[x];if(typeof v=="function")v(a);else{const{stop:S=!1,prevent:P=!1}=v;S&&a.stopPropagation(),P&&a.preventDefault(),v.handler(a)}})},l=()=>{(o===void 0||o.value)&&(ee("keydown",document,n),ee("keyup",document,c)),o!==void 0&&ve(o,a=>{a?(ee("keydown",document,n),ee("keyup",document,c)):(J("keydown",document,n),J("keyup",document,c))})};return je()?(Fe(l),Me(()=>{(o===void 0||o.value)&&(J("keydown",document,n),J("keyup",document,c))})):l(),Le(t)}function vo(e,o,t){const r=j(e.value);let i=null;return ve(e,n=>{i!==null&&window.clearTimeout(i),n===!0?t&&!t.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function bo(e){return o=>{o?e.value=o.$el:e.value=null}}const h="0!important",Re="-1px!important";function V(e){return k(`${e}-type`,[R("& +",[N("button",{},[k(`${e}-type`,[K("border",{borderLeftWidth:h}),K("state-border",{left:Re})])])])])}function X(e){return k(`${e}-type`,[R("& +",[N("button",[k(`${e}-type`,[K("border",{borderTopWidth:h}),K("state-border",{top:Re})])])])])}const mo=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[N("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${h};
 border-top-right-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${h};
 border-top-left-radius: ${h};
 border-bottom-left-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${h};
 margin-right: ${h};
 border-radius: ${h};
 `),V("default"),k("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),k("vertical",{flexDirection:"column"},[N("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-bottom-left-radius: ${h};
 border-bottom-right-radius: ${h};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${h};
 margin-left: ${h};
 margin-right: ${h};
 border-top-left-radius: ${h};
 border-top-right-radius: ${h};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${h};
 border-radius: ${h};
 `),X("default"),k("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},go=A({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:t}=ke(e);return Ee("-button-group",mo,o),H(Be,e),{rtlEnabled:qe("ButtonGroup",t,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),me=be("n-dropdown-menu"),re=be("n-dropdown"),xe=be("n-dropdown-option"),$e=A({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),yo=A({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=W(me),{renderLabelRef:t,labelFieldRef:r,nodePropsRef:i,renderOptionRef:n}=W(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:t,nodeProps:i,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:t,showIcon:r,nodeProps:i,renderLabel:n,renderOption:c}=this,{rawNode:l}=this.tmNode,a=u("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(l)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(l.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(l):te((e=l.title)!==null&&e!==void 0?e:l[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,t&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:a,option:l}):a}});function he(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xo(e){return e.type==="group"}function Ie(e){return e.type==="divider"}function ko(e){return e.type==="render"}const Ke=A({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=W(re),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:n,activeKeyPathRef:c,animatedRef:l,mergedShowRef:a,renderLabelRef:x,renderIconRef:v,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:C,nodePropsRef:m,menuPropsRef:$}=o,_=W(xe,null),B=W(me),Q=W(_e),ie=y(()=>e.tmNode.rawNode),Y=y(()=>{const{value:s}=P;return he(e.tmNode.rawNode,s)}),ae=y(()=>{const{disabled:s}=e.tmNode;return s}),de=y(()=>{if(!Y.value)return!1;const{key:s,disabled:g}=e.tmNode;if(g)return!1;const{value:O}=t,{value:F}=r,{value:se}=i,{value:M}=n;return O!==null?M.includes(s):F!==null?M.includes(s)&&M[M.length-1]!==s:se!==null?M.includes(s):!1}),le=y(()=>r.value===null&&!l.value),Z=vo(de,300,le),G=y(()=>!!(_!=null&&_.enteringSubmenuRef.value)),U=j(!1);H(xe,{enteringSubmenuRef:U});function T(){U.value=!0}function d(){U.value=!1}function w(){const{parentKey:s,tmNode:g}=e;g.disabled||a.value&&(i.value=s,r.value=null,t.value=g.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&t.value!==s.key&&w()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:g}=s;g&&!we({target:g},"dropdownOption")&&!we({target:g},"scrollbarRail")&&(t.value=null)}function I(){const{value:s}=Y,{tmNode:g}=e;a.value&&!s&&!g.disabled&&(o.doSelect(g.key,g.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:x,renderIcon:v,siblingHasIcon:B.showIconRef,siblingHasSubmenu:B.hasSubmenuRef,menuProps:$,popoverBody:Q,animated:l,mergedShowSubmenu:y(()=>Z.value&&!G.value),rawNode:ie,hasSubmenu:Y,pending:oe(()=>{const{value:s}=n,{key:g}=e.tmNode;return s.includes(g)}),childActive:oe(()=>{const{value:s}=c,{key:g}=e.tmNode,O=s.findIndex(F=>g===F);return O===-1?!1:O<s.length-1}),active:oe(()=>{const{value:s}=c,{key:g}=e.tmNode,O=s.findIndex(F=>g===F);return O===-1?!1:O===s.length-1}),mergedDisabled:ae,renderOption:C,nodeProps:m,handleClick:I,handleMouseMove:f,handleMouseEnter:w,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:n,siblingHasIcon:c,siblingHasSubmenu:l,renderLabel:a,renderIcon:x,renderOption:v,nodeProps:S,props:P,scrollable:C}=this;let m=null;if(i){const Q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);m=u(Ce,Object.assign({},Q,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const $={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},_=S==null?void 0:S(r),B=u("div",Object.assign({class:[`${n}-dropdown-option`,_==null?void 0:_.class],"data-dropdown-option":!0},_),u("div",Se($,P),[u("div",{class:[`${n}-dropdown-option-body__prefix`,c&&`${n}-dropdown-option-body__prefix--show-icon`]},[x?x(r):te(r.icon)]),u("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),u("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,l&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(co,null,{default:()=>u(po,null)}):null)]),this.hasSubmenu?u(He,null,{default:()=>[u(We,null,{default:()=>u("div",{class:`${n}-dropdown-offset-container`},u(Ge,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>u("div",{class:`${n}-dropdown-menu-wrapper`},t?u(Ue,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>m}):m)}))})]}):null);return v?v({node:B,option:r}):B}}),So=A({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:t}=this,{children:r}=e;return u(Ve,null,u(yo,{clsPrefix:t,tmNode:e,key:e.key}),r==null?void 0:r.map(i=>{const{rawNode:n}=i;return n.show===!1?null:Ie(n)?u($e,{clsPrefix:t,key:i.key}):i.isGroup?(Xe("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Ke,{clsPrefix:t,tmNode:i,parentKey:o,key:i.key})}))}}),_o=A({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Ce=A({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:t}=W(re);H(me,{showIconRef:y(()=>{const i=o.value;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>i?i(a):a.icon);const{rawNode:l}=n;return i?i(l):l.icon})}),hasSubmenuRef:y(()=>{const{value:i}=t;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>he(a,i));const{rawNode:l}=n;return he(l,i)})})});const r=j(null);return H(Ze,null),H(Je,null),H(_e,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:t}=this,r=this.tmNodes.map(i=>{const{rawNode:n}=i;return n.show===!1?null:ko(n)?u(_o,{tmNode:i,key:i.key}):Ie(n)?u($e,{clsPrefix:o,key:i.key}):xo(n)?u(So,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):u(Ke,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:n.props,scrollable:t})});return u("div",{class:[`${o}-dropdown-menu`,t&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},t?u(Qe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ye({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),No=N("dropdown-menu",`
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
 `)])]),Po={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Pe),$o=Object.assign(Object.assign(Object.assign({},Pe),Po),Ne.props),Io=A({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=j(!1),t=to(D(e,"show"),o),r=y(()=>{const{keyField:d,childrenField:w}=e;return ro(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[w]}})}),i=y(()=>r.value.treeNodes),n=j(null),c=j(null),l=j(null),a=y(()=>{var d,w,f;return(f=(w=(d=n.value)!==null&&d!==void 0?d:c.value)!==null&&w!==void 0?w:l.value)!==null&&f!==void 0?f:null}),x=y(()=>r.value.getPath(a.value).keyPath),v=y(()=>r.value.getPath(e.value).keyPath),S=oe(()=>e.keyboard&&t.value);ho({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:Y},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:Q}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:C}=ke(e),m=Ne("Dropdown","-dropdown",No,io,e,P);H(re,{labelFieldRef:D(e,"labelField"),childrenFieldRef:D(e,"childrenField"),renderLabelRef:D(e,"renderLabel"),renderIconRef:D(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:c,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:x,activeKeyPathRef:v,animatedRef:D(e,"animated"),mergedShowRef:t,nodePropsRef:D(e,"nodeProps"),renderOptionRef:D(e,"renderOption"),menuPropsRef:D(e,"menuProps"),doSelect:$,doUpdateShow:_}),ve(t,d=>{!e.animated&&!d&&B()});function $(d,w){const{onSelect:f}=e;f&&ce(f,d,w)}function _(d){const{"onUpdate:show":w,onUpdateShow:f}=e;w&&ce(w,d),f&&ce(f,d),o.value=d}function B(){n.value=null,c.value=null,l.value=null}function Q(){_(!1)}function ie(){G("left")}function Y(){G("right")}function ae(){G("up")}function de(){G("down")}function le(){const d=Z();d!=null&&d.isLeaf&&t.value&&($(d.key,d.rawNode),_(!1))}function Z(){var d;const{value:w}=r,{value:f}=a;return!w||f===null?null:(d=w.getNode(f))!==null&&d!==void 0?d:null}function G(d){const{value:w}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(w===null){const I=f();I!==null&&(p=I.key)}else{const I=Z();if(I){let s;switch(d){case"down":s=I.getNext();break;case"up":s=I.getPrev();break;case"right":s=I.getChild();break;case"left":s=I.getParent();break}s&&(p=s.key)}}p!==null&&(n.value=null,c.value=p)}const U=y(()=>{const{size:d,inverted:w}=e,{common:{cubicBezierEaseInOut:f},self:p}=m.value,{padding:I,dividerColor:s,borderRadius:g,optionOpacityDisabled:O,[L("optionIconSuffixWidth",d)]:F,[L("optionSuffixWidth",d)]:se,[L("optionIconPrefixWidth",d)]:M,[L("optionPrefixWidth",d)]:ze,[L("fontSize",d)]:Oe,[L("optionHeight",d)]:De,[L("optionIconSize",d)]:Ae}=p,b={"--n-bezier":f,"--n-font-size":Oe,"--n-padding":I,"--n-border-radius":g,"--n-option-height":De,"--n-option-prefix-width":ze,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":F,"--n-option-icon-size":Ae,"--n-divider-color":s,"--n-option-opacity-disabled":O};return w?(b["--n-color"]=p.colorInverted,b["--n-option-color-hover"]=p.optionColorHoverInverted,b["--n-option-color-active"]=p.optionColorActiveInverted,b["--n-option-text-color"]=p.optionTextColorInverted,b["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,b["--n-option-text-color-active"]=p.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,b["--n-prefix-color"]=p.prefixColorInverted,b["--n-suffix-color"]=p.suffixColorInverted,b["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(b["--n-color"]=p.color,b["--n-option-color-hover"]=p.optionColorHover,b["--n-option-color-active"]=p.optionColorActive,b["--n-option-text-color"]=p.optionTextColor,b["--n-option-text-color-hover"]=p.optionTextColorHover,b["--n-option-text-color-active"]=p.optionTextColorActive,b["--n-option-text-color-child-active"]=p.optionTextColorChildActive,b["--n-prefix-color"]=p.prefixColor,b["--n-suffix-color"]=p.suffixColor,b["--n-group-header-text-color"]=p.groupHeaderTextColor),b}),T=C?ao("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:P,mergedTheme:m,tmNodes:i,mergedShow:t,handleAfterLeave:()=>{e.animated&&B()},doUpdateShow:_,cssVars:C?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,i,n,c,l)=>{var a;const{mergedClsPrefix:x,menuProps:v}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(v==null?void 0:v(void 0,this.tmNodes.map(C=>C.rawNode)))||{},P={ref:bo(i),class:[r,`${x}-dropdown`,this.themeClass],clsPrefix:x,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:l};return u(Ce,Se(this.$attrs,P,S))},{mergedTheme:o}=this,t={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(no,Object.assign({},oo(this.$props,Ro),t),{trigger:()=>{var r,i;return(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)}})}}),Bo="/img/desktop/logIn_mbd.png",To="/img/desktop/key_lemonsqueezy.png",jo="/img/desktop/login_lemonsqueezy.png",Fo="/img/desktop/mianbaoduo.png",Mo="/img/desktop/lemonsqueezy.png",Ko=A({__name:"Desktop",async setup(e){let o,t;const r=([o,t]=ge(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),o=await o,t(),o);([o,t]=ge(()=>r.json()),o=await o,t(),o).version;const n=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_aarch64.dmg"},{key:"mac_x64",label:"MacOS (Intel)",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_x64.dmg"},{key:"win_x64",label:"Windows (X64)",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_x64-setup.exe"},{key:"win_arm64",label:"Windows (ARM64)",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_arm64-setup.exe"},{key:"linux",label:"Linux",url:"https://bugo-1301111475.cos.ap-guangzhou.myqcloud.com/Alist/alist-desktop_amd64.deb"}],c=navigator.platform.toLowerCase(),l=j("win_x64");c.includes("win")?l.value="win_x64":c.includes("linux")?l.value="linux":c.includes("mac")&&(l.value="mac_arm64"),console.log(l.value);let a={down:"Download",website:"Website"};const x=y(()=>{var m;return(m=n.find($=>$.key===l.value))==null?void 0:m.label}),v=y(()=>n.map(m=>({...m,label:`${m.label} ${l.value===m.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(a={down:"下载",website:"官网"});function S(){var $;const m=($=n.find(_=>_.key===l.value))==null?void 0:$.url;window.open(`${m}`,"_blank")}function P(m){l.value=m}function C(){window.open("https://desktop.alistgo.com/zh","_blank")}return(m,$)=>(so(),lo(z(ye),{align:"center",vertical:"",size:"large"},{default:E(()=>[q(z(ye),{class:"btn"},{default:E(()=>[q(z(ue),{size:"large",type:"info",onClick:C,tertiary:""},{default:E(()=>[pe(fe(z(a).website),1)]),_:1}),q(z(go),null,{default:E(()=>[q(z(Io),{trigger:"hover",options:v.value,onSelect:P,size:"large"},{default:E(()=>[q(z(ue),{size:"large",type:"primary",tertiary:""},{default:E(()=>[pe("💻"+fe(x.value),1)]),_:1})]),_:1},8,["options"]),q(z(ue),{size:"large",onClick:S,type:"info",secondary:""},{default:E(()=>[pe(fe(z(a).down),1)]),_:1})]),_:1})]),_:1}),q(z(fo),{src:"/img/guide/desktop.png"})]),_:1}))}}),Lo=uo(Ko,[["__scopeId","data-v-bb7cce38"]]);export{Lo as D,To as _,jo as a,Bo as b,Mo as c,Fo as d};
