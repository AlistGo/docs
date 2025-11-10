import{s as t,p as c,Z,$ as J,a0 as Q,q as a,K as n,d as U,h as s,T as i,M as ee,y as oe,z as x,a1 as re,X as te,B as u,G as h,Y as ne,C as de,a2 as ae}from"./app-BDiVJxue.js";function se(e){return Object.keys(e)}const le=t([c("card",`
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
 `)]),Z(c("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),J(c("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),z={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},be=se(z),ie=Object.assign(Object.assign({},x.props),z),ge=U({name:"Card",props:ie,setup(e){const f=()=>{const{onClose:r}=e;r&&ae(r)},{inlineThemeDisabled:b,mergedClsPrefixRef:o,mergedRtlRef:m}=oe(e),l=x("Card","-card",le,re,e,o),p=te("Card",m,o),g=u(()=>{const{size:r}=e,{self:{color:v,colorModal:C,colorTarget:y,textColor:S,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:T,borderRadius:B,lineHeight:P,closeIconColor:R,closeIconColorHover:_,closeIconColorPressed:E,closeColorHover:O,closeColorPressed:j,closeBorderRadius:M,closeIconSize:I,closeSize:F,boxShadow:H,colorPopover:K,colorEmbedded:N,colorEmbeddedModal:V,colorEmbeddedPopover:L,[h("padding",r)]:W,[h("fontSize",r)]:q,[h("titleFontSize",r)]:A},common:{cubicBezierEaseInOut:D}}=l.value,{top:G,left:X,bottom:Y}=ne(W);return{"--n-bezier":D,"--n-border-radius":B,"--n-color":v,"--n-color-modal":C,"--n-color-popover":K,"--n-color-embedded":N,"--n-color-embedded-modal":V,"--n-color-embedded-popover":L,"--n-color-target":y,"--n-text-color":S,"--n-line-height":P,"--n-action-color":T,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":R,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":E,"--n-close-color-hover":O,"--n-close-color-pressed":j,"--n-border-color":w,"--n-box-shadow":H,"--n-padding-top":G,"--n-padding-bottom":Y,"--n-padding-left":X,"--n-font-size":q,"--n-title-font-size":A,"--n-close-size":F,"--n-close-icon-size":I,"--n-close-border-radius":M}}),d=b?de("card",u(()=>e.size[0]),g,e):void 0;return{rtlEnabled:p,mergedClsPrefix:o,mergedTheme:l,handleCloseClick:f,cssVars:b?void 0:g,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:e,bordered:f,hoverable:b,mergedClsPrefix:o,rtlEnabled:m,onRender:l,embedded:p,tag:g,$slots:d}=this;return l==null||l(),s(g,{class:[`${o}-card`,this.themeClass,p&&`${o}-card--embedded`,{[`${o}-card--rtl`]:m,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:f,[`${o}-card--hoverable`]:b}],style:this.cssVars,role:this.role},i(d.cover,r=>r&&s("div",{class:`${o}-card-cover`,role:"none"},r)),i(d.header,r=>r||this.title||this.closable?s("div",{class:`${o}-card-header`,style:this.headerStyle},s("div",{class:`${o}-card-header__main`,role:"heading"},r||this.title),i(d["header-extra"],v=>v&&s("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},v)),this.closable?s(ee,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),i(d.default,r=>r&&s("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),i(d.footer,r=>r&&[s("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),i(d.action,r=>r&&s("div",{class:`${o}-card__action`,role:"none"},r)))}});export{ge as N,be as a,z as c,se as k};
