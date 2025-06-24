import{c as Q}from"./chunk-4KE642ED-DBUnZNYo.js";import{p as V}from"./radar-VG2SY3DT-YD637NEH-CbmUbL-N.js";import{m as r,F as j,B as G,w as K,v as X,c as Y,L as q,t as y,H as I,n as J,aN as U,aP as Z,aQ as M,aR as _,T as ee,j as te,aS as ae,p as ie}from"./mermaid.esm.min-BXuuXPbt.js";import"./chunk-5ZJXQJOJ-CnKbEQ6Q.js";import"./app-DYSuT0Lh.js";var re=ie.pie,T={sections:new Map,showData:!1},u=T.sections,D=T.showData,le=structuredClone(re),se=r(()=>structuredClone(le),"getConfig"),oe=r(()=>{u=new Map,D=T.showData,te()},"clear"),ne=r(({label:e,value:a})=>{u.has(e)||(u.set(e,a),y.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),pe=r(()=>u,"getSections"),de=r(e=>{D=e},"setShowData"),ce=r(()=>D,"getShowData"),O={getConfig:se,clear:oe,setDiagramTitle:q,getDiagramTitle:Y,setAccTitle:X,getAccTitle:K,setAccDescription:G,getAccDescription:j,addSection:ne,getSections:pe,setShowData:de,getShowData:ce},fe=r((e,a)=>{Q(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ge={parse:r(async e=>{let a=await V("pie",e);y.debug(a),fe(a,O)},"parse")},me=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),ue=me,he=r(e=>{let a=[...e.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,h)=>h.value-l.value);return ae().value(l=>l.value)(a)},"createPieArcs"),Se=r((e,a,l,h)=>{y.debug(`rendering pie chart
`+e);let d=h.db,v=I(),C=J(d.getConfig(),v.pie),b=40,s=18,c=4,n=450,S=n,x=U(a),o=x.append("g");o.attr("transform","translate("+S/2+","+n/2+")");let{themeVariables:i}=v,[k]=Z(i.pieOuterStrokeWidth);k??(k=2);let A=C.textPosition,f=Math.min(S,n)/2-b,L=M().innerRadius(0).outerRadius(f),B=M().innerRadius(f*A).outerRadius(f*A);o.append("circle").attr("cx",0).attr("cy",0).attr("r",f+k/2).attr("class","pieOuterCircle");let R=d.getSections(),w=he(R),P=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],p=_(P);o.selectAll("mySlices").data(w).enter().append("path").attr("d",L).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let z=0;R.forEach(t=>{z+=t}),o.selectAll("mySlices").data(w).enter().append("text").text(t=>(t.data.value/z*100).toFixed(0)+"%").attr("transform",t=>"translate("+B.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),o.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let $=o.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,g)=>{let m=s+c,E=m*p.domain().length/2,H=12*s,N=g*m-E;return"translate("+H+","+N+")"});$.append("rect").attr("width",s).attr("height",s).style("fill",p).style("stroke",p),$.data(w).append("text").attr("x",s+c).attr("y",s-c).text(t=>{let{label:g,value:m}=t.data;return d.getShowData()?`${g} [${m}]`:g});let W=Math.max(...$.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),F=S+b+s+c+W;x.attr("viewBox",`0 0 ${F} ${n}`),ee(x,n,F,C.useMaxWidth)},"draw"),xe={draw:Se},ve={parser:ge,db:O,renderer:xe,styles:ue};export{ve as diagram};
