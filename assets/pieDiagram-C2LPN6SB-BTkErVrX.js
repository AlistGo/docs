import{c as B}from"./chunk-4KE642ED-fF-pLaf9.js";import{p as I}from"./treemap-KMMF4GRG-DK74C3S3-BqWiEeiM.js";import{m as r,Q as J,K,Z as N,j as U,d as V,J as Y,t as $,h as q,L as H,aN as _,aP as ee,aQ as M,aR as te,G as ae,X as ie,aS as le,I as re}from"./mermaid.esm.min-DZwxZk-A.js";import"./chunk-5ZJXQJOJ-C2TIRckL.js";import"./app-Ch1FfIRv.js";var se=re.pie,v={sections:new Map,showData:!1},u=v.sections,y=v.showData,oe=structuredClone(se),ne=r(()=>structuredClone(oe),"getConfig"),pe=r(()=>{u=new Map,y=v.showData,ie()},"clear"),de=r(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,a),$.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=r(()=>u,"getSections"),ue=r(e=>{y=e},"setShowData"),fe=r(()=>y,"getShowData"),P={getConfig:ne,clear:pe,setDiagramTitle:Y,getDiagramTitle:V,setAccTitle:U,getAccTitle:N,setAccDescription:K,getAccDescription:J,addSection:de,getSections:ce,setShowData:ue,getShowData:fe},he=r((e,a)=>{B(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ge={parse:r(async e=>{let a=await I("pie",e);$.debug(a),he(a,P)},"parse")},me=r(e=>`
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
`,"getStyles"),xe=me,Se=r(e=>{let a=[...e.values()].reduce((l,s)=>l+s,0),T=[...e.entries()].map(([l,s])=>({label:l,value:s})).filter(l=>l.value/a*100>=1).sort((l,s)=>s.value-l.value);return le().value(l=>l.value)(T)},"createPieArcs"),we=r((e,a,T,l)=>{$.debug(`rendering pie chart
`+e);let s=l.db,D=q(),b=H(s.getConfig(),D.pie),C=40,o=18,d=4,p=450,f=p,h=_(a),n=h.append("g");n.attr("transform","translate("+f/2+","+p/2+")");let{themeVariables:i}=D,[k]=ee(i.pieOuterStrokeWidth);k??(k=2);let A=b.textPosition,c=Math.min(f,p)/2-C,L=M().innerRadius(0).outerRadius(c),W=M().innerRadius(c*A).outerRadius(c*A);n.append("circle").attr("cx",0).attr("cy",0).attr("r",c+k/2).attr("class","pieOuterCircle");let g=s.getSections(),j=Se(g),E=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],m=0;g.forEach(t=>{m+=t});let O=j.filter(t=>(t.data.value/m*100).toFixed(0)!=="0"),x=te(E);n.selectAll("mySlices").data(O).enter().append("path").attr("d",L).attr("fill",t=>x(t.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(O).enter().append("text").text(t=>(t.data.value/m*100).toFixed(0)+"%").attr("transform",t=>"translate("+W.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");let R=[...g.entries()].map(([t,w])=>({label:t,value:w})),S=n.selectAll(".legend").data(R).enter().append("g").attr("class","legend").attr("transform",(t,w)=>{let F=o+d,Q=F*R.length/2,X=12*o,Z=w*F-Q;return"translate("+X+","+Z+")"});S.append("rect").attr("width",o).attr("height",o).style("fill",t=>x(t.label)).style("stroke",t=>x(t.label)),S.append("text").attr("x",o+d).attr("y",o-d).text(t=>s.getShowData()?`${t.label} [${t.value}]`:t.label);let G=Math.max(...S.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),z=f+C+o+d+G;h.attr("viewBox",`0 0 ${z} ${p}`),ae(h,p,z,b.useMaxWidth)},"draw"),$e={draw:we},Ce={parser:ge,db:P,renderer:$e,styles:xe};export{Ce as diagram};
