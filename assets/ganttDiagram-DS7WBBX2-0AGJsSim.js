import{m as l,F as ce,B as ue,c as de,L as he,w as fe,v as ke,H as ot,i as Tt,aq as ye,ar as me,as as pe,T as ge,at as be,au as Te,q as ut,t as wt,av as ve,aw as Ht,ax as qt,ay as xe,az as we,aA as _e,aB as $e,aC as De,aD as Se,aE as Ce,aF as Ut,aG as Zt,aH as Rt,aI as Xt,aJ as Kt,aK as Ee,g as Me,j as Ae,aL as te,f as Le,b as Ye,aM as Lt}from"./mermaid.esm.min-DHfQU9M_.js";import"./app-B4cX6APU.js";var Ie=Lt((e,n)=>{(function(i,s){typeof e=="object"&&typeof n<"u"?n.exports=s():typeof define=="function"&&define.amd?define(s):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_isoWeek=s()})(e,function(){var i="day";return function(s,a,d){var k=l(function(D){return D.add(4-D.isoWeekday(),i)},"a"),$=a.prototype;$.isoWeekYear=function(){return k(this).year()},$.isoWeek=function(D){if(!this.$utils().u(D))return this.add(7*(D-this.isoWeek()),i);var x,E,F,j,z=k(this),S=(x=this.isoWeekYear(),E=this.$u,F=(E?d.utc:d)().year(x).startOf("year"),j=4-F.isoWeekday(),F.isoWeekday()>4&&(j+=7),F.add(j,i));return z.diff(S,"week")+1},$.isoWeekday=function(D){return this.$utils().u(D)?this.day()||7:this.day(this.day()%7?D:D-7)};var Y=$.startOf;$.startOf=function(D,x){var E=this.$utils(),F=!!E.u(x)||x;return E.p(D)==="isoweek"?F?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)(D,x)}}})}),Fe=Lt((e,n)=>{(function(i,s){typeof e=="object"&&typeof n<"u"?n.exports=s():typeof define=="function"&&define.amd?define(s):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_customParseFormat=s()})(e,function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,d=/\d\d/,k=/\d\d?/,$=/\d*[^-_:/,()\s\d]+/,Y={},D=l(function(g){return(g=+g)+(g>68?1900:2e3)},"a"),x=l(function(g){return function(C){this[g]=+C}},"f"),E=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(C){if(!C||C==="Z")return 0;var M=C.match(/([+-]|\d\d)/g),A=60*M[1]+(+M[2]||0);return A===0?0:M[0]==="+"?-A:A}(g)}],F=l(function(g){var C=Y[g];return C&&(C.indexOf?C:C.s.concat(C.f))},"u"),j=l(function(g,C){var M,A=Y.meridiem;if(A){for(var G=1;G<=24;G+=1)if(g.indexOf(A(G,0,C))>-1){M=G>12;break}}else M=g===(C?"pm":"PM");return M},"d"),z={A:[$,function(g){this.afternoon=j(g,!1)}],a:[$,function(g){this.afternoon=j(g,!0)}],Q:[a,function(g){this.month=3*(g-1)+1}],S:[a,function(g){this.milliseconds=100*+g}],SS:[d,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[k,x("seconds")],ss:[k,x("seconds")],m:[k,x("minutes")],mm:[k,x("minutes")],H:[k,x("hours")],h:[k,x("hours")],HH:[k,x("hours")],hh:[k,x("hours")],D:[k,x("day")],DD:[d,x("day")],Do:[$,function(g){var C=Y.ordinal,M=g.match(/\d+/);if(this.day=M[0],C)for(var A=1;A<=31;A+=1)C(A).replace(/\[|\]/g,"")===g&&(this.day=A)}],w:[k,x("week")],ww:[d,x("week")],M:[k,x("month")],MM:[d,x("month")],MMM:[$,function(g){var C=F("months"),M=(F("monthsShort")||C.map(function(A){return A.slice(0,3)})).indexOf(g)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[$,function(g){var C=F("months").indexOf(g)+1;if(C<1)throw new Error;this.month=C%12||C}],Y:[/[+-]?\d+/,x("year")],YY:[d,function(g){this.year=D(g)}],YYYY:[/\d{4}/,x("year")],Z:E,ZZ:E};function S(g){var C,M;C=g,M=Y&&Y.formats;for(var A=(g=C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,b,h){var m=h&&h.toUpperCase();return b||M[h]||i[h]||M[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(r,u,c){return u||c.slice(1)})})).match(s),G=A.length,N=0;N<G;N+=1){var Z=A[N],H=z[Z],y=H&&H[0],T=H&&H[1];A[N]=T?{regex:y,parser:T}:Z.replace(/^\[|\]$/g,"")}return function(v){for(var b={},h=0,m=0;h<G;h+=1){var r=A[h];if(typeof r=="string")m+=r.length;else{var u=r.regex,c=r.parser,p=v.slice(m),t=u.exec(p)[0];c.call(b,t),v=v.replace(t,"")}}return function(f){var o=f.afternoon;if(o!==void 0){var _=f.hours;o?_<12&&(f.hours+=12):_===12&&(f.hours=0),delete f.afternoon}}(b),b}}return l(S,"l"),function(g,C,M){M.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(D=g.parseTwoDigitYear);var A=C.prototype,G=A.parse;A.parse=function(N){var Z=N.date,H=N.utc,y=N.args;this.$u=H;var T=y[1];if(typeof T=="string"){var v=y[2]===!0,b=y[3]===!0,h=v||b,m=y[2];b&&(m=y[2]),Y=this.$locale(),!v&&m&&(Y=M.Ls[m]),this.$d=function(p,t,f,o){try{if(["x","X"].indexOf(t)>-1)return new Date((t==="X"?1e3:1)*p);var _=S(t)(p),w=_.year,L=_.month,I=_.day,it=_.hours,dt=_.minutes,W=_.seconds,K=_.milliseconds,nt=_.zone,st=_.week,ht=new Date,ft=I||(w||L?1:ht.getDate()),at=w||ht.getFullYear(),O=0;w&&!L||(O=L>0?L-1:ht.getMonth());var V,R=it||0,B=dt||0,pt=W||0,tt=K||0;return nt?new Date(Date.UTC(at,O,ft,R,B,pt,tt+60*nt.offset*1e3)):f?new Date(Date.UTC(at,O,ft,R,B,pt,tt)):(V=new Date(at,O,ft,R,B,pt,tt),st&&(V=o(V).week(st).toDate()),V)}catch{return new Date("")}}(Z,T,H,M),this.init(),m&&m!==!0&&(this.$L=this.locale(m).$L),h&&Z!=this.format(T)&&(this.$d=new Date("")),Y={}}else if(T instanceof Array)for(var r=T.length,u=1;u<=r;u+=1){y[1]=T[u-1];var c=M.apply(this,y);if(c.isValid()){this.$d=c.$d,this.$L=c.$L,this.init();break}u===r&&(this.$d=new Date(""))}else G.call(this,N)}}})}),We=Lt((e,n)=>{(function(i,s){typeof e=="object"&&typeof n<"u"?n.exports=s():typeof define=="function"&&define.amd?define(s):(i=typeof globalThis<"u"?globalThis:i||self).dayjs_plugin_advancedFormat=s()})(e,function(){return function(i,s){var a=s.prototype,d=a.format;a.format=function(k){var $=this,Y=this.$locale();if(!this.isValid())return d.bind(this)(k);var D=this.$utils(),x=(k||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(E){switch(E){case"Q":return Math.ceil(($.$M+1)/3);case"Do":return Y.ordinal($.$D);case"gggg":return $.weekYear();case"GGGG":return $.isoWeekYear();case"wo":return Y.ordinal($.week(),"W");case"w":case"ww":return D.s($.week(),E==="w"?1:2,"0");case"W":case"WW":return D.s($.isoWeek(),E==="W"?1:2,"0");case"k":case"kk":return D.s(String($.$H===0?24:$.$H),E==="k"?1:2,"0");case"X":return Math.floor($.$d.getTime()/1e3);case"x":return $.$d.getTime();case"z":return"["+$.offsetName()+"]";case"zzz":return"["+$.offsetName("long")+"]";default:return E}});return d.bind(this)(x)}}})}),Ct=function(){var e=l(function(m,r,u,c){for(u=u||{},c=m.length;c--;u[m[c]]=r);return u},"o"),n=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],s=[1,27],a=[1,28],d=[1,29],k=[1,30],$=[1,31],Y=[1,32],D=[1,33],x=[1,34],E=[1,9],F=[1,10],j=[1,11],z=[1,12],S=[1,13],g=[1,14],C=[1,15],M=[1,16],A=[1,19],G=[1,20],N=[1,21],Z=[1,22],H=[1,23],y=[1,25],T=[1,35],v={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(m,r,u,c,p,t,f){var o=t.length-1;switch(p){case 1:return t[o-1];case 2:this.$=[];break;case 3:t[o-1].push(t[o]),this.$=t[o-1];break;case 4:case 5:this.$=t[o];break;case 6:case 7:this.$=[];break;case 8:c.setWeekday("monday");break;case 9:c.setWeekday("tuesday");break;case 10:c.setWeekday("wednesday");break;case 11:c.setWeekday("thursday");break;case 12:c.setWeekday("friday");break;case 13:c.setWeekday("saturday");break;case 14:c.setWeekday("sunday");break;case 15:c.setWeekend("friday");break;case 16:c.setWeekend("saturday");break;case 17:c.setDateFormat(t[o].substr(11)),this.$=t[o].substr(11);break;case 18:c.enableInclusiveEndDates(),this.$=t[o].substr(18);break;case 19:c.TopAxis(),this.$=t[o].substr(8);break;case 20:c.setAxisFormat(t[o].substr(11)),this.$=t[o].substr(11);break;case 21:c.setTickInterval(t[o].substr(13)),this.$=t[o].substr(13);break;case 22:c.setExcludes(t[o].substr(9)),this.$=t[o].substr(9);break;case 23:c.setIncludes(t[o].substr(9)),this.$=t[o].substr(9);break;case 24:c.setTodayMarker(t[o].substr(12)),this.$=t[o].substr(12);break;case 27:c.setDiagramTitle(t[o].substr(6)),this.$=t[o].substr(6);break;case 28:this.$=t[o].trim(),c.setAccTitle(this.$);break;case 29:case 30:this.$=t[o].trim(),c.setAccDescription(this.$);break;case 31:c.addSection(t[o].substr(8)),this.$=t[o].substr(8);break;case 33:c.addTask(t[o-1],t[o]),this.$="task";break;case 34:this.$=t[o-1],c.setClickEvent(t[o-1],t[o],null);break;case 35:this.$=t[o-2],c.setClickEvent(t[o-2],t[o-1],t[o]);break;case 36:this.$=t[o-2],c.setClickEvent(t[o-2],t[o-1],null),c.setLink(t[o-2],t[o]);break;case 37:this.$=t[o-3],c.setClickEvent(t[o-3],t[o-2],t[o-1]),c.setLink(t[o-3],t[o]);break;case 38:this.$=t[o-2],c.setClickEvent(t[o-2],t[o],null),c.setLink(t[o-2],t[o-1]);break;case 39:this.$=t[o-3],c.setClickEvent(t[o-3],t[o-1],t[o]),c.setLink(t[o-3],t[o-2]);break;case 40:this.$=t[o-1],c.setLink(t[o-1],t[o]);break;case 41:case 47:this.$=t[o-1]+" "+t[o];break;case 42:case 43:case 45:this.$=t[o-2]+" "+t[o-1]+" "+t[o];break;case 44:case 46:this.$=t[o-3]+" "+t[o-2]+" "+t[o-1]+" "+t[o];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(n,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:s,14:a,15:d,16:k,17:$,18:Y,19:18,20:D,21:x,22:E,23:F,24:j,25:z,26:S,27:g,28:C,29:M,30:A,31:G,33:N,35:Z,36:H,37:24,38:y,40:T},e(n,[2,7],{1:[2,1]}),e(n,[2,3]),{9:36,11:17,12:i,13:s,14:a,15:d,16:k,17:$,18:Y,19:18,20:D,21:x,22:E,23:F,24:j,25:z,26:S,27:g,28:C,29:M,30:A,31:G,33:N,35:Z,36:H,37:24,38:y,40:T},e(n,[2,5]),e(n,[2,6]),e(n,[2,17]),e(n,[2,18]),e(n,[2,19]),e(n,[2,20]),e(n,[2,21]),e(n,[2,22]),e(n,[2,23]),e(n,[2,24]),e(n,[2,25]),e(n,[2,26]),e(n,[2,27]),{32:[1,37]},{34:[1,38]},e(n,[2,30]),e(n,[2,31]),e(n,[2,32]),{39:[1,39]},e(n,[2,8]),e(n,[2,9]),e(n,[2,10]),e(n,[2,11]),e(n,[2,12]),e(n,[2,13]),e(n,[2,14]),e(n,[2,15]),e(n,[2,16]),{41:[1,40],43:[1,41]},e(n,[2,4]),e(n,[2,28]),e(n,[2,29]),e(n,[2,33]),e(n,[2,34],{42:[1,42],43:[1,43]}),e(n,[2,40],{41:[1,44]}),e(n,[2,35],{43:[1,45]}),e(n,[2,36]),e(n,[2,38],{42:[1,46]}),e(n,[2,37]),e(n,[2,39])],defaultActions:{},parseError:l(function(m,r){if(r.recoverable)this.trace(m);else{var u=new Error(m);throw u.hash=r,u}},"parseError"),parse:l(function(m){var r=this,u=[0],c=[],p=[null],t=[],f=this.table,o="",_=0,w=0,L=0,I=2,it=1,dt=t.slice.call(arguments,1),W=Object.create(this.lexer),K={yy:{}};for(var nt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,nt)&&(K.yy[nt]=this.yy[nt]);W.setInput(m,K.yy),K.yy.lexer=W,K.yy.parser=this,typeof W.yylloc>"u"&&(W.yylloc={});var st=W.yylloc;t.push(st);var ht=W.options&&W.options.ranges;typeof K.yy.parseError=="function"?this.parseError=K.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ft(q){u.length=u.length-2*q,p.length=p.length-q,t.length=t.length-q}l(ft,"popStack");function at(){var q;return q=c.pop()||W.lex()||it,typeof q!="number"&&(q instanceof Array&&(c=q,q=c.pop()),q=r.symbols_[q]||q),q}l(at,"lex");for(var O,V,R,B,pt,tt,rt={},gt,Q,Nt,bt;;){if(R=u[u.length-1],this.defaultActions[R]?B=this.defaultActions[R]:((O===null||typeof O>"u")&&(O=at()),B=f[R]&&f[R][O]),typeof B>"u"||!B.length||!B[0]){var Dt="";bt=[];for(gt in f[R])this.terminals_[gt]&&gt>I&&bt.push("'"+this.terminals_[gt]+"'");W.showPosition?Dt="Parse error on line "+(_+1)+`:
`+W.showPosition()+`
Expecting `+bt.join(", ")+", got '"+(this.terminals_[O]||O)+"'":Dt="Parse error on line "+(_+1)+": Unexpected "+(O==it?"end of input":"'"+(this.terminals_[O]||O)+"'"),this.parseError(Dt,{text:W.match,token:this.terminals_[O]||O,line:W.yylineno,loc:st,expected:bt})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+R+", token: "+O);switch(B[0]){case 1:u.push(O),p.push(W.yytext),t.push(W.yylloc),u.push(B[1]),O=null,V?(O=V,V=null):(w=W.yyleng,o=W.yytext,_=W.yylineno,st=W.yylloc,L>0);break;case 2:if(Q=this.productions_[B[1]][1],rt.$=p[p.length-Q],rt._$={first_line:t[t.length-(Q||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(Q||1)].first_column,last_column:t[t.length-1].last_column},ht&&(rt._$.range=[t[t.length-(Q||1)].range[0],t[t.length-1].range[1]]),tt=this.performAction.apply(rt,[o,w,_,K.yy,B[1],p,t].concat(dt)),typeof tt<"u")return tt;Q&&(u=u.slice(0,-1*Q*2),p=p.slice(0,-1*Q),t=t.slice(0,-1*Q)),u.push(this.productions_[B[1]][0]),p.push(rt.$),t.push(rt._$),Nt=f[u[u.length-2]][u[u.length-1]],u.push(Nt);break;case 3:return!0}}return!0},"parse")},b=function(){var m={EOF:1,parseError:l(function(r,u){if(this.yy.parser)this.yy.parser.parseError(r,u);else throw new Error(r)},"parseError"),setInput:l(function(r,u){return this.yy=u||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var u=r.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:l(function(r){var u=r.length,c=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var t=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===p.length?this.yylloc.first_column:0)+p[p.length-c.length].length-c[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[t[0],t[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(r){this.unput(this.match.slice(r))},"less"),pastInput:l(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var r=this.pastInput(),u=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:l(function(r,u){var c,p,t;if(this.options.backtrack_lexer&&(t={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(t.yylloc.range=this.yylloc.range.slice(0))),p=r[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],c=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var f in t)this[f]=t[f];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,u,c,p;this._more||(this.yytext="",this.match="");for(var t=this._currentRules(),f=0;f<t.length;f++)if(c=this._input.match(this.rules[t[f]]),c&&(!u||c[0].length>u[0].length)){if(u=c,p=f,this.options.backtrack_lexer){if(r=this.test_match(c,t[f]),r!==!1)return r;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(r=this.test_match(u,t[p]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var r=this.next();return r||this.lex()},"lex"),begin:l(function(r){this.conditionStack.push(r)},"begin"),popState:l(function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},"topState"),pushState:l(function(r){this.begin(r)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(r,u,c,p){switch(c){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return m}();v.lexer=b;function h(){this.yy={}}return l(h,"Parser"),h.prototype=v,v.Parser=h,new h}();Ct.parser=Ct;var Oe=Ct,Pe=ut(Le()),U=ut(te()),ze=ut(Ie()),Be=ut(Fe()),je=ut(We());U.default.extend(ze.default);U.default.extend(Be.default);U.default.extend(je.default);var Qt={friday:5,saturday:6},X="",Yt="",It,Ft="",kt=[],yt=[],Wt=new Map,Ot=[],_t=[],ct="",Pt="",ee=["active","done","crit","milestone","vert"],zt=[],mt=!1,Bt=!1,jt="sunday",$t="saturday",Et=0,Ge=l(function(){Ot=[],_t=[],ct="",zt=[],vt=0,At=void 0,xt=void 0,P=[],X="",Yt="",Pt="",It=void 0,Ft="",kt=[],yt=[],mt=!1,Bt=!1,Et=0,Wt=new Map,Ae(),jt="sunday",$t="saturday"},"clear"),Ne=l(function(e){Yt=e},"setAxisFormat"),He=l(function(){return Yt},"getAxisFormat"),qe=l(function(e){It=e},"setTickInterval"),Ue=l(function(){return It},"getTickInterval"),Ze=l(function(e){Ft=e},"setTodayMarker"),Re=l(function(){return Ft},"getTodayMarker"),Xe=l(function(e){X=e},"setDateFormat"),Ke=l(function(){mt=!0},"enableInclusiveEndDates"),Qe=l(function(){return mt},"endDatesAreInclusive"),Je=l(function(){Bt=!0},"enableTopAxis"),Ve=l(function(){return Bt},"topAxisEnabled"),ti=l(function(e){Pt=e},"setDisplayMode"),ei=l(function(){return Pt},"getDisplayMode"),ii=l(function(){return X},"getDateFormat"),ni=l(function(e){kt=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),si=l(function(){return kt},"getIncludes"),ai=l(function(e){yt=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),ri=l(function(){return yt},"getExcludes"),oi=l(function(){return Wt},"getLinks"),li=l(function(e){ct=e,Ot.push(e)},"addSection"),ci=l(function(){return Ot},"getSections"),ui=l(function(){let e=Jt(),n=10,i=0;for(;!e&&i<n;)e=Jt(),i++;return _t=P,_t},"getTasks"),ie=l(function(e,n,i,s){return s.includes(e.format(n.trim()))?!1:i.includes("weekends")&&(e.isoWeekday()===Qt[$t]||e.isoWeekday()===Qt[$t]+1)||i.includes(e.format("dddd").toLowerCase())?!0:i.includes(e.format(n.trim()))},"isInvalidDate"),di=l(function(e){jt=e},"setWeekday"),hi=l(function(){return jt},"getWeekday"),fi=l(function(e){$t=e},"setWeekend"),ne=l(function(e,n,i,s){if(!i.length||e.manualEndTime)return;let a;e.startTime instanceof Date?a=(0,U.default)(e.startTime):a=(0,U.default)(e.startTime,n,!0),a=a.add(1,"d");let d;e.endTime instanceof Date?d=(0,U.default)(e.endTime):d=(0,U.default)(e.endTime,n,!0);let[k,$]=ki(a,d,n,i,s);e.endTime=k.toDate(),e.renderEndTime=$},"checkTaskDates"),ki=l(function(e,n,i,s,a){let d=!1,k=null;for(;e<=n;)d||(k=n.toDate()),d=ie(e,i,s,a),d&&(n=n.add(1,"d")),e=e.add(1,"d");return[n,k]},"fixTaskDates"),Mt=l(function(e,n,i){i=i.trim();let s=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(s!==null){let d=null;for(let $ of s.groups.ids.split(" ")){let Y=et($);Y!==void 0&&(!d||Y.endTime>d.endTime)&&(d=Y)}if(d)return d.endTime;let k=new Date;return k.setHours(0,0,0,0),k}let a=(0,U.default)(i,n.trim(),!0);if(a.isValid())return a.toDate();{wt.debug("Invalid date:"+i),wt.debug("With date format:"+n.trim());let d=new Date(i);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+i);return d}},"getStartDate"),se=l(function(e){let n=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return n!==null?[Number.parseFloat(n[1]),n[2]]:[NaN,"ms"]},"parseDuration"),ae=l(function(e,n,i,s=!1){i=i.trim();let a=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(a!==null){let D=null;for(let E of a.groups.ids.split(" ")){let F=et(E);F!==void 0&&(!D||F.startTime<D.startTime)&&(D=F)}if(D)return D.startTime;let x=new Date;return x.setHours(0,0,0,0),x}let d=(0,U.default)(i,n.trim(),!0);if(d.isValid())return s&&(d=d.add(1,"d")),d.toDate();let k=(0,U.default)(e),[$,Y]=se(i);if(!Number.isNaN($)){let D=k.add($,Y);D.isValid()&&(k=D)}return k.toDate()},"getEndDate"),vt=0,lt=l(function(e){return e===void 0?(vt=vt+1,"task"+vt):e},"parseId"),yi=l(function(e,n){let i;n.substr(0,1)===":"?i=n.substr(1,n.length):i=n;let s=i.split(","),a={};Gt(s,a,ee);for(let k=0;k<s.length;k++)s[k]=s[k].trim();let d="";switch(s.length){case 1:a.id=lt(),a.startTime=e.endTime,d=s[0];break;case 2:a.id=lt(),a.startTime=Mt(void 0,X,s[0]),d=s[1];break;case 3:a.id=lt(s[0]),a.startTime=Mt(void 0,X,s[1]),d=s[2];break}return d&&(a.endTime=ae(a.startTime,X,d,mt),a.manualEndTime=(0,U.default)(d,"YYYY-MM-DD",!0).isValid(),ne(a,X,yt,kt)),a},"compileData"),mi=l(function(e,n){let i;n.substr(0,1)===":"?i=n.substr(1,n.length):i=n;let s=i.split(","),a={};Gt(s,a,ee);for(let d=0;d<s.length;d++)s[d]=s[d].trim();switch(s.length){case 1:a.id=lt(),a.startTime={type:"prevTaskEnd",id:e},a.endTime={data:s[0]};break;case 2:a.id=lt(),a.startTime={type:"getStartDate",startData:s[0]},a.endTime={data:s[1]};break;case 3:a.id=lt(s[0]),a.startTime={type:"getStartDate",startData:s[1]},a.endTime={data:s[2]};break}return a},"parseData"),At,xt,P=[],re={},pi=l(function(e,n){let i={section:ct,type:ct,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:n},task:e,classes:[]},s=mi(xt,n);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=xt,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,i.order=Et,Et++;let a=P.push(i);xt=i.id,re[i.id]=a-1},"addTask"),et=l(function(e){let n=re[e];return P[n]},"findTaskById"),gi=l(function(e,n){let i={section:ct,type:ct,description:e,task:e,classes:[]},s=yi(At,n);i.startTime=s.startTime,i.endTime=s.endTime,i.id=s.id,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.vert=s.vert,At=i,_t.push(i)},"addTaskOrg"),Jt=l(function(){let e=l(function(i){let s=P[i],a="";switch(P[i].raw.startTime.type){case"prevTaskEnd":{let d=et(s.prevTaskId);s.startTime=d.endTime;break}case"getStartDate":a=Mt(void 0,X,P[i].raw.startTime.startData),a&&(P[i].startTime=a);break}return P[i].startTime&&(P[i].endTime=ae(P[i].startTime,X,P[i].raw.endTime.data,mt),P[i].endTime&&(P[i].processed=!0,P[i].manualEndTime=(0,U.default)(P[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),ne(P[i],X,yt,kt))),P[i].processed},"compileTask"),n=!0;for(let[i,s]of P.entries())e(i),n=n&&s.processed;return n},"compileTasks"),bi=l(function(e,n){let i=n;ot().securityLevel!=="loose"&&(i=(0,Pe.sanitizeUrl)(n)),e.split(",").forEach(function(s){et(s)!==void 0&&(le(s,()=>{window.open(i,"_self")}),Wt.set(s,i))}),oe(e,"clickable")},"setLink"),oe=l(function(e,n){e.split(",").forEach(function(i){let s=et(i);s!==void 0&&s.classes.push(n)})},"setClass"),Ti=l(function(e,n,i){if(ot().securityLevel!=="loose"||n===void 0)return;let s=[];if(typeof i=="string"){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let a=0;a<s.length;a++){let d=s[a].trim();d.startsWith('"')&&d.endsWith('"')&&(d=d.substr(1,d.length-2)),s[a]=d}}s.length===0&&s.push(e),et(e)!==void 0&&le(e,()=>{Ye.runFunc(n,...s)})},"setClickFun"),le=l(function(e,n){zt.push(function(){let i=document.querySelector(`[id="${e}"]`);i!==null&&i.addEventListener("click",function(){n()})},function(){let i=document.querySelector(`[id="${e}-text"]`);i!==null&&i.addEventListener("click",function(){n()})})},"pushFun"),vi=l(function(e,n,i){e.split(",").forEach(function(s){Ti(s,n,i)}),oe(e,"clickable")},"setClickEvent"),xi=l(function(e){zt.forEach(function(n){n(e)})},"bindFunctions"),wi={getConfig:l(()=>ot().gantt,"getConfig"),clear:Ge,setDateFormat:Xe,getDateFormat:ii,enableInclusiveEndDates:Ke,endDatesAreInclusive:Qe,enableTopAxis:Je,topAxisEnabled:Ve,setAxisFormat:Ne,getAxisFormat:He,setTickInterval:qe,getTickInterval:Ue,setTodayMarker:Ze,getTodayMarker:Re,setAccTitle:ke,getAccTitle:fe,setDiagramTitle:he,getDiagramTitle:de,setDisplayMode:ti,getDisplayMode:ei,setAccDescription:ue,getAccDescription:ce,addSection:li,getSections:ci,getTasks:ui,addTask:pi,findTaskById:et,addTaskOrg:gi,setIncludes:ni,getIncludes:si,setExcludes:ai,getExcludes:ri,setClickEvent:vi,setLink:bi,getLinks:oi,bindFunctions:xi,parseDuration:se,isInvalidDate:ie,setWeekday:di,getWeekday:hi,setWeekend:fi};function Gt(e,n,i){let s=!0;for(;s;)s=!1,i.forEach(function(a){let d="^\\s*"+a+"\\s*$",k=new RegExp(d);e[0].match(k)&&(n[a]=!0,e.shift(1),s=!0)})}l(Gt,"getTaskTags");var St=ut(te()),_i=l(function(){wt.debug("Something is calling, setConf, remove the call")},"setConf"),Vt={monday:Ce,tuesday:Se,wednesday:De,thursday:$e,friday:_e,saturday:we,sunday:xe},$i=l((e,n)=>{let i=[...e].map(()=>-1/0),s=[...e].sort((d,k)=>d.startTime-k.startTime||d.order-k.order),a=0;for(let d of s)for(let k=0;k<i.length;k++)if(d.startTime>=i[k]){i[k]=d.endTime,d.order=k+n,k>a&&(a=k);break}return a},"getMaxIntersections"),J,Di=l(function(e,n,i,s){let a=ot().gantt,d=ot().securityLevel,k;d==="sandbox"&&(k=Tt("#i"+n));let $=d==="sandbox"?Tt(k.nodes()[0].contentDocument.body):Tt("body"),Y=d==="sandbox"?k.nodes()[0].contentDocument:document,D=Y.getElementById(n);J=D.parentElement.offsetWidth,J===void 0&&(J=1200),a.useWidth!==void 0&&(J=a.useWidth);let x=s.db.getTasks(),E=[];for(let y of x)E.push(y.type);E=H(E);let F={},j=2*a.topPadding;if(s.db.getDisplayMode()==="compact"||a.displayMode==="compact"){let y={};for(let v of x)y[v.section]===void 0?y[v.section]=[v]:y[v.section].push(v);let T=0;for(let v of Object.keys(y)){let b=$i(y[v],T)+1;T+=b,j+=b*(a.barHeight+a.barGap),F[v]=b}}else{j+=x.length*(a.barHeight+a.barGap);for(let y of E)F[y]=x.filter(T=>T.type===y).length}D.setAttribute("viewBox","0 0 "+J+" "+j);let z=$.select(`[id="${n}"]`),S=ye().domain([me(x,function(y){return y.startTime}),pe(x,function(y){return y.endTime})]).rangeRound([0,J-a.leftPadding-a.rightPadding]);function g(y,T){let v=y.startTime,b=T.startTime,h=0;return v>b?h=1:v<b&&(h=-1),h}l(g,"taskCompare"),x.sort(g),C(x,J,j),ge(z,j,J,a.useMaxWidth),z.append("text").text(s.db.getDiagramTitle()).attr("x",J/2).attr("y",a.titleTopMargin).attr("class","titleText");function C(y,T,v){let b=a.barHeight,h=b+a.barGap,m=a.topPadding,r=a.leftPadding,u=be().domain([0,E.length]).range(["#00B9FA","#F95002"]).interpolate(Te);A(h,m,r,T,v,y,s.db.getExcludes(),s.db.getIncludes()),G(r,m,T,v),M(y,h,m,r,b,u,T),N(h,m),Z(r,m,T,v)}l(C,"makeGantt");function M(y,T,v,b,h,m,r){y.sort((t,f)=>t.vert===f.vert?0:t.vert?1:-1);let u=[...new Set(y.map(t=>t.order))].map(t=>y.find(f=>f.order===t));z.append("g").selectAll("rect").data(u).enter().append("rect").attr("x",0).attr("y",function(t,f){return f=t.order,f*T+v-2}).attr("width",function(){return r-a.rightPadding/2}).attr("height",T).attr("class",function(t){for(let[f,o]of E.entries())if(t.type===o)return"section section"+f%a.numberSectionStyles;return"section section0"}).enter();let c=z.append("g").selectAll("rect").data(y).enter(),p=s.db.getLinks();if(c.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?S(t.startTime)+b+.5*(S(t.endTime)-S(t.startTime))-.5*h:S(t.startTime)+b}).attr("y",function(t,f){return f=t.order,t.vert?a.gridLineStartPadding:f*T+v}).attr("width",function(t){return t.milestone?h:t.vert?.08*h:S(t.renderEndTime||t.endTime)-S(t.startTime)}).attr("height",function(t){return t.vert?x.length*(a.barHeight+a.barGap)+a.barHeight*2:h}).attr("transform-origin",function(t,f){return f=t.order,(S(t.startTime)+b+.5*(S(t.endTime)-S(t.startTime))).toString()+"px "+(f*T+v+.5*h).toString()+"px"}).attr("class",function(t){let f="task",o="";t.classes.length>0&&(o=t.classes.join(" "));let _=0;for(let[L,I]of E.entries())t.type===I&&(_=L%a.numberSectionStyles);let w="";return t.active?t.crit?w+=" activeCrit":w=" active":t.done?t.crit?w=" doneCrit":w=" done":t.crit&&(w+=" crit"),w.length===0&&(w=" task"),t.milestone&&(w=" milestone "+w),t.vert&&(w=" vert "+w),w+=_,w+=" "+o,f+w}),c.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",a.fontSize).attr("x",function(t){let f=S(t.startTime),o=S(t.renderEndTime||t.endTime);if(t.milestone&&(f+=.5*(S(t.endTime)-S(t.startTime))-.5*h,o=f+h),t.vert)return S(t.startTime)+b;let _=this.getBBox().width;return _>o-f?o+_+1.5*a.leftPadding>r?f+b-5:o+b+5:(o-f)/2+f+b}).attr("y",function(t,f){return t.vert?a.gridLineStartPadding+x.length*(a.barHeight+a.barGap)+60:(f=t.order,f*T+a.barHeight/2+(a.fontSize/2-2)+v)}).attr("text-height",h).attr("class",function(t){let f=S(t.startTime),o=S(t.endTime);t.milestone&&(o=f+h);let _=this.getBBox().width,w="";t.classes.length>0&&(w=t.classes.join(" "));let L=0;for(let[it,dt]of E.entries())t.type===dt&&(L=it%a.numberSectionStyles);let I="";return t.active&&(t.crit?I="activeCritText"+L:I="activeText"+L),t.done?t.crit?I=I+" doneCritText"+L:I=I+" doneText"+L:t.crit&&(I=I+" critText"+L),t.milestone&&(I+=" milestoneText"),t.vert&&(I+=" vertText"),_>o-f?o+_+1.5*a.leftPadding>r?w+" taskTextOutsideLeft taskTextOutside"+L+" "+I:w+" taskTextOutsideRight taskTextOutside"+L+" "+I+" width-"+_:w+" taskText taskText"+L+" "+I+" width-"+_}),ot().securityLevel==="sandbox"){let t;t=Tt("#i"+n);let f=t.nodes()[0].contentDocument;c.filter(function(o){return p.has(o.id)}).each(function(o){var _=f.querySelector("#"+o.id),w=f.querySelector("#"+o.id+"-text");let L=_.parentNode;var I=f.createElement("a");I.setAttribute("xlink:href",p.get(o.id)),I.setAttribute("target","_top"),L.appendChild(I),I.appendChild(_),I.appendChild(w)})}}l(M,"drawRects");function A(y,T,v,b,h,m,r,u){if(r.length===0&&u.length===0)return;let c,p;for(let{startTime:w,endTime:L}of m)(c===void 0||w<c)&&(c=w),(p===void 0||L>p)&&(p=L);if(!c||!p)return;if((0,St.default)(p).diff((0,St.default)(c),"year")>5){wt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let t=s.db.getDateFormat(),f=[],o=null,_=(0,St.default)(c);for(;_.valueOf()<=p;)s.db.isInvalidDate(_,t,r,u)?o?o.end=_:o={start:_,end:_}:o&&(f.push(o),o=null),_=_.add(1,"d");z.append("g").selectAll("rect").data(f).enter().append("rect").attr("id",function(w){return"exclude-"+w.start.format("YYYY-MM-DD")}).attr("x",function(w){return S(w.start)+v}).attr("y",a.gridLineStartPadding).attr("width",function(w){let L=w.end.add(1,"day");return S(L)-S(w.start)}).attr("height",h-T-a.gridLineStartPadding).attr("transform-origin",function(w,L){return(S(w.start)+v+.5*(S(w.end)-S(w.start))).toString()+"px "+(L*y+.5*h).toString()+"px"}).attr("class","exclude-range")}l(A,"drawExcludeDays");function G(y,T,v,b){let h=ve(S).tickSize(-b+T+a.gridLineStartPadding).tickFormat(Ht(s.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d")),m=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||a.tickInterval);if(m!==null){let r=m[1],u=m[2],c=s.db.getWeekday()||a.weekday;switch(u){case"millisecond":h.ticks(Kt.every(r));break;case"second":h.ticks(Xt.every(r));break;case"minute":h.ticks(Rt.every(r));break;case"hour":h.ticks(Zt.every(r));break;case"day":h.ticks(Ut.every(r));break;case"week":h.ticks(Vt[c].every(r));break;case"month":h.ticks(qt.every(r));break}}if(z.append("g").attr("class","grid").attr("transform","translate("+y+", "+(b-50)+")").call(h).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||a.topAxis){let r=Ee(S).tickSize(-b+T+a.gridLineStartPadding).tickFormat(Ht(s.db.getAxisFormat()||a.axisFormat||"%Y-%m-%d"));if(m!==null){let u=m[1],c=m[2],p=s.db.getWeekday()||a.weekday;switch(c){case"millisecond":r.ticks(Kt.every(u));break;case"second":r.ticks(Xt.every(u));break;case"minute":r.ticks(Rt.every(u));break;case"hour":r.ticks(Zt.every(u));break;case"day":r.ticks(Ut.every(u));break;case"week":r.ticks(Vt[p].every(u));break;case"month":r.ticks(qt.every(u));break}}z.append("g").attr("class","grid").attr("transform","translate("+y+", "+T+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(G,"makeGrid");function N(y,T){let v=0,b=Object.keys(F).map(h=>[h,F[h]]);z.append("g").selectAll("text").data(b).enter().append(function(h){let m=h[0].split(Me.lineBreakRegex),r=-(m.length-1)/2,u=Y.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",r+"em");for(let[c,p]of m.entries()){let t=Y.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttribute("alignment-baseline","central"),t.setAttribute("x","10"),c>0&&t.setAttribute("dy","1em"),t.textContent=p,u.appendChild(t)}return u}).attr("x",10).attr("y",function(h,m){if(m>0)for(let r=0;r<m;r++)return v+=b[m-1][1],h[1]*y/2+v*y+T;else return h[1]*y/2+T}).attr("font-size",a.sectionFontSize).attr("class",function(h){for(let[m,r]of E.entries())if(h[0]===r)return"sectionTitle sectionTitle"+m%a.numberSectionStyles;return"sectionTitle"})}l(N,"vertLabels");function Z(y,T,v,b){let h=s.db.getTodayMarker();if(h==="off")return;let m=z.append("g").attr("class","today"),r=new Date,u=m.append("line");u.attr("x1",S(r)+y).attr("x2",S(r)+y).attr("y1",a.titleTopMargin).attr("y2",b-a.titleTopMargin).attr("class","today"),h!==""&&u.attr("style",h.replace(/,/g,";"))}l(Z,"drawToday");function H(y){let T={},v=[];for(let b=0,h=y.length;b<h;++b)Object.prototype.hasOwnProperty.call(T,y[b])||(T[y[b]]=!0,v.push(y[b]));return v}l(H,"checkUnique")},"draw"),Si={setConf:_i,draw:Di},Ci=l(e=>`
  .mermaid-main-font {
        font-family: ${e.fontFamily};
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${e.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: ${e.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${e.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${e.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: ${e.fontFamily};
  }
`,"getStyles"),Ei=Ci,Li={parser:Oe,db:wi,renderer:Si,styles:Ei};export{Li as diagram};
