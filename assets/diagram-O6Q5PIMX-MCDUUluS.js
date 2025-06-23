import{c as v}from"./chunk-4KE642ED-BiTzzP40.js";import{p as B}from"./radar-VG2SY3DT-YD637NEH-CkSdmidb.js";import{m as n,B as F,F as P,c as S,L as z,w as T,v as W,n as m,aN as E,T as L,j as A,E as D,p as R,t as $}from"./mermaid.esm.min-CrlrEHnU.js";import"./chunk-5ZJXQJOJ-6vNeZQC7.js";import"./app-D259G7rw.js";var x={packet:[]},w=structuredClone(x),Y=R.packet,H=n(()=>{let t=m({...Y,...D().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),M=n(()=>w.packet,"getPacket"),N=n(t=>{t.length>0&&w.packet.push(t)},"pushWord"),I=n(()=>{A(),w=structuredClone(x)},"clear"),u={pushWord:N,getPacket:M,getConfig:H,clear:I,setAccTitle:W,getAccTitle:T,setDiagramTitle:z,getDiagramTitle:S,getAccDescription:P,setAccDescription:F},X=1e4,j=n(t=>{v(t,u);let e=-1,l=[],o=1,{bitsPerRow:i}=u.getConfig();for(let{start:a,end:r,bits:d,label:k}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(d??1)-1),d??(d=r-a+1),e=r,$.debug(`Packet block ${a} - ${e} with label ${k}`);l.length<=i+1&&u.getPacket().length<X;){let[c,p]=q({start:a,end:r,bits:d,label:k},o,i);if(l.push(c),c.end+1===o*i&&(u.pushWord(l),l=[],o++),!p)break;({start:a,end:r,bits:d,label:k}=p)}}u.pushWord(l)},"populate"),q=n((t,e,l)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*l)return[t,void 0];let o=e*l-1,i=e*l;return[{start:t.start,end:o,label:t.label,bits:o-t.start},{start:i,end:t.end,label:t.label,bits:t.end-i}]},"getNextFittingBlock"),G={parse:n(async t=>{let e=await B("packet",t);$.debug(e),j(e)},"parse")},K=n((t,e,l,o)=>{let i=o.db,a=i.getConfig(),{rowHeight:r,paddingY:d,bitWidth:k,bitsPerRow:c}=a,p=i.getPacket(),s=i.getDiagramTitle(),f=r+d,b=f*(p.length+1)-(s?0:r),h=k*c+2,g=E(e);g.attr("viewbox",`0 0 ${h} ${b}`),L(g,b,h,a.useMaxWidth);for(let[y,C]of p.entries())O(g,C,y,a);g.append("text").text(s).attr("x",h/2).attr("y",b-f/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),O=n((t,e,l,{rowHeight:o,paddingX:i,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:k})=>{let c=t.append("g"),p=l*(o+a)+a;for(let s of e){let f=s.start%d*r+1,b=(s.end-s.start+1)*r-i;if(c.append("rect").attr("x",f).attr("y",p).attr("width",b).attr("height",o).attr("class","packetBlock"),c.append("text").attr("x",f+b/2).attr("y",p+o/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(s.label),!k)continue;let h=s.end===s.start,g=p-2;c.append("text").attr("x",f+(h?b/2:0)).attr("y",g).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",h?"middle":"start").text(s.start),h||c.append("text").attr("x",f+b).attr("y",g).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(s.end)}},"drawWord"),U={draw:K},V={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},_=n(({packet:t}={})=>{let e=m(V,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),at={parser:G,db:u,renderer:U,styles:_};export{at as diagram};
