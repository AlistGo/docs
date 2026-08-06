import{x as t,s as c,$ as G,a0 as J,a1 as Q,v as a,L as n,d as X,h as s,U as i,O as ee,A as oe,B as x,a2 as re,Y as te,j as u,H as h,Z as ne,D as de,a3 as ae}from"./app-BkJISqsP.js";function se(e){return Object.keys(e)}const le=t([c("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Q({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[c("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1; min-width: 0;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),c("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),G(c("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),J(c("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),z={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},be=se(z),ie=Object.assign(Object.assign({},x.props),z),ge=X({name:"Card",props:ie,setup(e){const f=()=>{const{onClose:r}=e;r&&ae(r)},{inlineThemeDisabled:b,mergedClsPrefixRef:o,mergedRtlRef:m}=oe(e),l=x("Card","-card",le,re,e,o),p=te("Card",m,o),g=u(()=>{const{size:r}=e,{self:{color:v,colorModal:C,colorTarget:y,textColor:S,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:B,borderRadius:T,lineHeight:P,closeIconColor:R,closeIconColorHover:_,closeIconColorPressed:O,closeColorHover:E,closeColorPressed:j,closeBorderRadius:M,closeIconSize:H,closeSize:I,boxShadow:F,colorPopover:L,colorEmbedded:N,colorEmbeddedModal:V,colorEmbeddedPopover:A,[h("padding",r)]:D,[h("fontSize",r)]:K,[h("titleFontSize",r)]:W},common:{cubicBezierEaseInOut:U}}=l.value,{top:Y,left:Z,bottom:q}=ne(D);return{"--n-bezier":U,"--n-border-radius":T,"--n-color":v,"--n-color-modal":C,"--n-color-popover":L,"--n-color-embedded":N,"--n-color-embedded-modal":V,"--n-color-embedded-popover":A,"--n-color-target":y,"--n-text-color":S,"--n-line-height":P,"--n-action-color":B,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":R,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":O,"--n-close-color-hover":E,"--n-close-color-pressed":j,"--n-border-color":w,"--n-box-shadow":F,"--n-padding-top":Y,"--n-padding-bottom":q,"--n-padding-left":Z,"--n-font-size":K,"--n-title-font-size":W,"--n-close-size":I,"--n-close-icon-size":H,"--n-close-border-radius":M}}),d=b?de("card",u(()=>e.size[0]),g,e):void 0;return{rtlEnabled:p,mergedClsPrefix:o,mergedTheme:l,handleCloseClick:f,cssVars:b?void 0:g,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:e,bordered:f,hoverable:b,mergedClsPrefix:o,rtlEnabled:m,onRender:l,embedded:p,tag:g,$slots:d}=this;return l==null||l(),s(g,{class:[`${o}-card`,this.themeClass,p&&`${o}-card--embedded`,{[`${o}-card--rtl`]:m,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:f,[`${o}-card--hoverable`]:b}],style:this.cssVars,role:this.role},i(d.cover,r=>r&&s("div",{class:`${o}-card-cover`,role:"none"},r)),i(d.header,r=>r||this.title||this.closable?s("div",{class:`${o}-card-header`,style:this.headerStyle},s("div",{class:`${o}-card-header__main`,role:"heading"},r||this.title),i(d["header-extra"],v=>v&&s("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},v)),this.closable?s(ee,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),i(d.default,r=>r&&s("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),i(d.footer,r=>r&&[s("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),i(d.action,r=>r&&s("div",{class:`${o}-card__action`,role:"none"},r)))}});export{ge as N,be as a,z as c,se as k};
