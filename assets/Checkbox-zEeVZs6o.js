import{h as l,ab as ae,s as d,p as r,Z as ne,$ as le,q as x,K as t,ac as de,d as ie,ad as te,ae as se,r as B,y as be,af as he,a6 as ue,ag as ke,ah as fe,ai as ve,z as K,aj as xe,X as me,B as T,G as I,C as ge,ak as pe,a2 as M}from"./app-DINpXSHa.js";const Ce=l("svg",{viewBox:"0 0 64 64",class:"check-icon"},l("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ye=l("svg",{viewBox:"0 0 100 100",class:"line-icon"},l("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),we=ae("n-checkbox-group"),ze=d([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[d("&:hover",[r("checkbox-box",[t("border",{border:"var(--n-border-checked)"})])]),d("&:focus:not(:active)",[r("checkbox-box",[t("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),x("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),x("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[d(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),x("indeterminate",[r("checkbox-box",[r("checkbox-icon",[d(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),d(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),x("checked, indeterminate",[d("&:focus:not(:active)",[r("checkbox-box",[t("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[t("border",{border:"var(--n-border-checked)"})])]),x("disabled",{cursor:"not-allowed"},[x("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[t("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[d(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[t("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[d(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),t("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[t("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[d(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),de({left:"1px",top:"1px"})])]),t("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[d("&:empty",{display:"none"})])]),ne(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),le(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Re=Object.assign(Object.assign({},K.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),De=ie({name:"Checkbox",props:Re,setup(o){const s=B(null),{mergedClsPrefixRef:u,inlineThemeDisabled:m,mergedRtlRef:y}=be(o),g=he(o,{mergedSize(e){const{size:i}=o;if(i!==void 0)return i;if(a){const{value:n}=a.mergedSizeRef;if(n!==void 0)return n}if(e){const{mergedSize:n}=e;if(n!==void 0)return n.value}return"medium"},mergedDisabled(e){const{disabled:i}=o;if(i!==void 0)return i;if(a){if(a.disabledRef.value)return!0;const{maxRef:{value:n},checkedCountRef:h}=a;if(n!==void 0&&h.value>=n&&!b.value)return!0;const{minRef:{value:f}}=a;if(f!==void 0&&h.value<=f&&b.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:p,mergedSizeRef:C}=g,a=ue(we,null),c=B(o.defaultChecked),R=fe(o,"checked"),S=ve(R,c),b=ke(()=>{if(a){const e=a.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return S.value===o.checkedValue}),w=K("Checkbox","-checkbox",ze,xe,o,u);function z(e){if(a&&o.value!==void 0)a.toggleCheckbox(!b.value,o.value);else{const{onChange:i,"onUpdate:checked":n,onUpdateChecked:h}=o,{nTriggerFormInput:f,nTriggerFormChange:D}=g,v=b.value?o.uncheckedValue:o.checkedValue;n&&M(n,v,e),h&&M(h,v,e),i&&M(i,v,e),f(),D(),c.value=v}}function V(e){p.value||z(e)}function j(e){if(!p.value)switch(e.key){case" ":case"Enter":z(e)}}function _(e){switch(e.key){case" ":e.preventDefault()}}const F={focus:()=>{var e;(e=s.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=s.value)===null||e===void 0||e.blur()}},N=me("Checkbox",y,u),$=T(()=>{const{value:e}=C,{common:{cubicBezierEaseInOut:i},self:{borderRadius:n,color:h,colorChecked:f,colorDisabled:D,colorTableHeader:v,colorTableHeaderModal:P,colorTableHeaderPopover:U,checkMarkColor:E,checkMarkColorDisabled:H,border:L,borderFocus:O,borderDisabled:A,borderChecked:G,boxShadowFocus:q,textColor:W,textColorDisabled:X,checkMarkColorDisabledChecked:Y,colorDisabledChecked:Z,borderDisabledChecked:J,labelPadding:Q,labelLineHeight:ee,labelFontWeight:oe,[I("fontSize",e)]:re,[I("size",e)]:ce}}=w.value;return{"--n-label-line-height":ee,"--n-label-font-weight":oe,"--n-size":ce,"--n-bezier":i,"--n-border-radius":n,"--n-border":L,"--n-border-checked":G,"--n-border-focus":O,"--n-border-disabled":A,"--n-border-disabled-checked":J,"--n-box-shadow-focus":q,"--n-color":h,"--n-color-checked":f,"--n-color-table":v,"--n-color-table-modal":P,"--n-color-table-popover":U,"--n-color-disabled":D,"--n-color-disabled-checked":Z,"--n-text-color":W,"--n-text-color-disabled":X,"--n-check-mark-color":E,"--n-check-mark-color-disabled":H,"--n-check-mark-color-disabled-checked":Y,"--n-font-size":re,"--n-label-padding":Q}}),k=m?ge("checkbox",T(()=>C.value[0]),$,o):void 0;return Object.assign(g,F,{rtlEnabled:N,selfRef:s,mergedClsPrefix:u,mergedDisabled:p,renderedChecked:b,mergedTheme:w,labelId:pe(),handleClick:V,handleKeyUp:j,handleKeyDown:_,cssVars:m?void 0:$,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender})},render(){var o;const{$slots:s,renderedChecked:u,mergedDisabled:m,indeterminate:y,privateInsideTable:g,cssVars:p,labelId:C,label:a,mergedClsPrefix:c,focusable:R,handleKeyUp:S,handleKeyDown:b,handleClick:w}=this;return(o=this.onRender)===null||o===void 0||o.call(this),l("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,u&&`${c}-checkbox--checked`,m&&`${c}-checkbox--disabled`,y&&`${c}-checkbox--indeterminate`,g&&`${c}-checkbox--inside-table`],tabindex:m||!R?void 0:0,role:"checkbox","aria-checked":y?"mixed":u,"aria-labelledby":C,style:p,onKeyup:S,onKeydown:b,onClick:w,onMousedown:()=>{se("selectstart",window,z=>{z.preventDefault()},{once:!0})}},l("div",{class:`${c}-checkbox-box-wrapper`}," ",l("div",{class:`${c}-checkbox-box`},l(te,null,{default:()=>this.indeterminate?l("div",{key:"indeterminate",class:`${c}-checkbox-icon`},ye):l("div",{key:"check",class:`${c}-checkbox-icon`},Ce)}),l("div",{class:`${c}-checkbox-box__border`}))),a!==null||s.default?l("span",{class:`${c}-checkbox__label`,id:C},s.default?s.default():a):null)}});export{De as N};
