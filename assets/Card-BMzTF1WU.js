import{s as n,p as f,Z as J,$ as Q,a0 as U,q as s,K as d,d as ee,h as i,T as b,a1 as g,M as oe,y as re,z as S,a2 as te,X as ne,B as y,G as z,Y as de,C as ae,a3 as se}from"./app-8JY7cr0S.js";function ie(e){return Object.keys(e)}const le=n([f("card",`
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
 `,[U({background:"var(--n-color-modal)"}),s("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),s("content-segmented",[n(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),s("content-soft-segmented",[n(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),s("footer-segmented",[n(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),s("footer-soft-segmented",[n(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[f("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),f("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),s("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),s("action-segmented",[n(">",[d("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("content-segmented, content-soft-segmented",[n(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("footer-segmented, footer-soft-segmented",[n(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("embedded",`
 background-color: var(--n-color-embedded);
 `)]),J(f("card",`
 background: var(--n-color-modal);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Q(f("card",`
 background: var(--n-color-popover);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),k={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},ge=ie(k),ce=Object.assign(Object.assign({},S.props),k),fe=ee({name:"Card",props:ce,slots:Object,setup(e){const p=()=>{const{onClose:t}=e;t&&se(t)},{inlineThemeDisabled:h,mergedClsPrefixRef:o,mergedRtlRef:u}=re(e),c=S("Card","-card",le,te,e,o),x=ne("Card",u,o),v=y(()=>{const{size:t}=e,{self:{color:r,colorModal:l,colorTarget:C,textColor:m,titleTextColor:$,titleFontWeight:w,borderColor:E,actionColor:T,borderRadius:B,lineHeight:P,closeIconColor:R,closeIconColorHover:_,closeIconColorPressed:O,closeColorHover:F,closeColorPressed:j,closeBorderRadius:M,closeIconSize:I,closeSize:V,boxShadow:H,colorPopover:N,colorEmbedded:K,colorEmbeddedModal:L,colorEmbeddedPopover:W,[z("padding",t)]:q,[z("fontSize",t)]:A,[z("titleFontSize",t)]:D},common:{cubicBezierEaseInOut:G}}=c.value,{top:X,left:Y,bottom:Z}=de(q);return{"--n-bezier":G,"--n-border-radius":B,"--n-color":r,"--n-color-modal":l,"--n-color-popover":N,"--n-color-embedded":K,"--n-color-embedded-modal":L,"--n-color-embedded-popover":W,"--n-color-target":C,"--n-text-color":m,"--n-line-height":P,"--n-action-color":T,"--n-title-text-color":$,"--n-title-font-weight":w,"--n-close-icon-color":R,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":O,"--n-close-color-hover":F,"--n-close-color-pressed":j,"--n-border-color":E,"--n-box-shadow":H,"--n-padding-top":X,"--n-padding-bottom":Z,"--n-padding-left":Y,"--n-font-size":A,"--n-title-font-size":D,"--n-close-size":V,"--n-close-icon-size":I,"--n-close-border-radius":M}}),a=h?ae("card",y(()=>e.size[0]),v,e):void 0;return{rtlEnabled:x,mergedClsPrefix:o,mergedTheme:c,handleCloseClick:p,cssVars:h?void 0:v,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:e,bordered:p,hoverable:h,mergedClsPrefix:o,rtlEnabled:u,onRender:c,embedded:x,tag:v,$slots:a}=this;return c==null||c(),i(v,{class:[`${o}-card`,this.themeClass,x&&`${o}-card--embedded`,{[`${o}-card--rtl`]:u,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:p,[`${o}-card--hoverable`]:h}],style:this.cssVars,role:this.role},b(a.cover,t=>{const r=this.cover?g([this.cover()]):t;return r&&i("div",{class:`${o}-card-cover`,role:"none"},r)}),b(a.header,t=>{const{title:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):t;return l||this.closable?i("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},i("div",{class:`${o}-card-header__main`,role:"heading"},l),b(a["header-extra"],C=>{const m=this.headerExtra?g([this.headerExtra()]):C;return m&&i("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&i(oe,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),b(a.default,t=>{const{content:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):t;return l&&i("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),b(a.footer,t=>{const r=this.footer?g([this.footer()]):t;return r&&i("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),b(a.action,t=>{const r=this.action?g([this.action()]):t;return r&&i("div",{class:`${o}-card__action`,role:"none"},r)}))}});export{fe as N,ge as a,k as c,ie as k};
