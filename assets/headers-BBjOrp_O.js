import{j as y,v as d,k as h,d as w,h as z,u as $,l as f,m as c,n as T,t as R,q as a}from"./app-K34Aos0E.js";const B=y("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("&:first-child",{marginTop:0}),h("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[h("align-text",{paddingLeft:0},[d("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),d("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),P=Object.assign(Object.assign({},f.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),W=r=>w({name:`H${r}`,props:P,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=$(e),n=f("Typography","-h",B,R,e,i),s=c(()=>{const{type:l}=e,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:m,headerTextColor:b,[a("headerPrefixWidth",r)]:p,[a("headerFontSize",r)]:u,[a("headerMargin",r)]:x,[a("headerBarWidth",r)]:v,[a("headerBarColor",l)]:C}}=n.value;return{"--n-bezier":g,"--n-font-size":u,"--n-margin":x,"--n-bar-color":C,"--n-bar-width":v,"--n-font-weight":m,"--n-text-color":b,"--n-prefix-width":p}}),t=o?T(`h${r}`,c(()=>e.type[0]),s,e):void 0;return{mergedClsPrefix:i,cssVars:o?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:i,alignText:o,mergedClsPrefix:n,cssVars:s,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),z(`h${r}`,{class:[`${n}-h`,`${n}-h${r}`,this.themeClass,{[`${n}-h--prefix-bar`]:i,[`${n}-h--align-text`]:o}],style:s},t)}}),S=W("1");export{S as N};
