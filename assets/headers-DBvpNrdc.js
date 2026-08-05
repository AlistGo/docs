import{s as y,x as d,v as h,d as w,h as z,A as $,B as f,G as T,j as c,H as a,D as B}from"./app-CQU-P_J5.js";const R=y("h",`
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
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),H=Object.assign(Object.assign({},f.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),P=r=>w({name:`H${r}`,props:H,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=$(e),n=f("Typography","-h",R,T,e,i),s=c(()=>{const{type:l}=e,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:b,headerTextColor:m,[a("headerPrefixWidth",r)]:p,[a("headerFontSize",r)]:u,[a("headerMargin",r)]:x,[a("headerBarWidth",r)]:v,[a("headerBarColor",l)]:C}}=n.value;return{"--n-bezier":g,"--n-font-size":u,"--n-margin":x,"--n-bar-color":C,"--n-bar-width":v,"--n-font-weight":b,"--n-text-color":m,"--n-prefix-width":p}}),t=o?B(`h${r}`,c(()=>e.type[0]),s,e):void 0;return{mergedClsPrefix:i,cssVars:o?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:i,alignText:o,mergedClsPrefix:n,cssVars:s,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),z(`h${r}`,{class:[`${n}-h`,`${n}-h${r}`,this.themeClass,{[`${n}-h--prefix-bar`]:i,[`${n}-h--align-text`]:o}],style:s},t)}}),S=P("1");export{S as N};
