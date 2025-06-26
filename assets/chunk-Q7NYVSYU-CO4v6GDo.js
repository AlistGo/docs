import{w as ee,$ as se}from"./chunk-NXEA5HOC-BCrJ3KPK.js";import{m as d,t as T,H as F,S as ie,b as re,w as ae,v as ne,F as oe,B as le,L as ce,c as he,b2 as de,g as K,j as ue}from"./mermaid.esm.min-yfhXgwzq.js";var xt=function(){var e=d(function(B,n,o,g){for(o=o||{},g=B.length;g--;o[B[g]]=n);return o},"o"),t=[1,2],s=[1,3],a=[1,4],i=[2,4],l=[1,9],h=[1,11],y=[1,16],u=[1,17],m=[1,18],S=[1,19],b=[1,33],C=[1,20],N=[1,21],A=[1,22],R=[1,23],E=[1,24],p=[1,26],$=[1,27],I=[1,28],w=[1,29],M=[1,30],P=[1,31],G=[1,32],it=[1,35],rt=[1,36],at=[1,37],nt=[1,38],J=[1,34],f=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],ot=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],It=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],St={trace:d(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:d(function(B,n,o,g,_,r,v){var c=r.length-1;switch(_){case 3:return g.setRootDoc(r[c]),r[c];case 4:this.$=[];break;case 5:r[c]!="nl"&&(r[c-1].push(r[c]),this.$=r[c-1]);break;case 6:case 7:this.$=r[c];break;case 8:this.$="nl";break;case 12:this.$=r[c];break;case 13:let ht=r[c-1];ht.description=g.trimColon(r[c]),this.$=ht;break;case 14:this.$={stmt:"relation",state1:r[c-2],state2:r[c]};break;case 15:let dt=g.trimColon(r[c]);this.$={stmt:"relation",state1:r[c-3],state2:r[c-1],description:dt};break;case 19:this.$={stmt:"state",id:r[c-3],type:"default",description:"",doc:r[c-1]};break;case 20:var z=r[c],q=r[c-2].trim();if(r[c].match(":")){var ct=r[c].split(":");z=ct[0],q=[q,ct[1]]}this.$={stmt:"state",id:z,type:"default",description:q};break;case 21:this.$={stmt:"state",id:r[c-3],type:"default",description:r[c-5],doc:r[c-1]};break;case 22:this.$={stmt:"state",id:r[c],type:"fork"};break;case 23:this.$={stmt:"state",id:r[c],type:"join"};break;case 24:this.$={stmt:"state",id:r[c],type:"choice"};break;case 25:this.$={stmt:"state",id:g.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[c-1].trim(),note:{position:r[c-2].trim(),text:r[c].trim()}};break;case 29:this.$=r[c].trim(),g.setAccTitle(this.$);break;case 30:case 31:this.$=r[c].trim(),g.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:r[c-3],url:r[c-2],tooltip:r[c-1]};break;case 33:this.$={stmt:"click",id:r[c-3],url:r[c-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:r[c-1].trim(),classes:r[c].trim()};break;case 36:this.$={stmt:"style",id:r[c-1].trim(),styleClass:r[c].trim()};break;case 37:this.$={stmt:"applyClass",id:r[c-1].trim(),styleClass:r[c].trim()};break;case 38:g.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:g.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:g.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:g.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:r[c].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:r[c-2].trim(),classes:[r[c].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:r[c-2].trim(),classes:[r[c].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:t,5:s,6:a},{1:[3]},{3:5,4:t,5:s,6:a},{3:6,4:t,5:s,6:a},e([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],i,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:l,5:h,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:u,19:m,22:S,24:b,25:C,26:N,27:A,28:R,29:E,32:25,33:p,35:$,37:I,38:w,41:M,45:P,48:G,51:it,52:rt,53:at,54:nt,57:J},e(f,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:y,17:u,19:m,22:S,24:b,25:C,26:N,27:A,28:R,29:E,32:25,33:p,35:$,37:I,38:w,41:M,45:P,48:G,51:it,52:rt,53:at,54:nt,57:J},e(f,[2,7]),e(f,[2,8]),e(f,[2,9]),e(f,[2,10]),e(f,[2,11]),e(f,[2,12],{14:[1,40],15:[1,41]}),e(f,[2,16]),{18:[1,42]},e(f,[2,18],{20:[1,43]}),{23:[1,44]},e(f,[2,22]),e(f,[2,23]),e(f,[2,24]),e(f,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},e(f,[2,28]),{34:[1,49]},{36:[1,50]},e(f,[2,31]),{13:51,24:b,57:J},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},e(ot,[2,44],{58:[1,56]}),e(ot,[2,45],{58:[1,57]}),e(f,[2,38]),e(f,[2,39]),e(f,[2,40]),e(f,[2,41]),e(f,[2,6]),e(f,[2,13]),{13:58,24:b,57:J},e(f,[2,17]),e(It,i,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},e(f,[2,29]),e(f,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},e(f,[2,14],{14:[1,71]}),{4:l,5:h,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:u,19:m,21:[1,72],22:S,24:b,25:C,26:N,27:A,28:R,29:E,32:25,33:p,35:$,37:I,38:w,41:M,45:P,48:G,51:it,52:rt,53:at,54:nt,57:J},e(f,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},e(f,[2,34]),e(f,[2,35]),e(f,[2,36]),e(f,[2,37]),e(ot,[2,46]),e(ot,[2,47]),e(f,[2,15]),e(f,[2,19]),e(It,i,{7:78}),e(f,[2,26]),e(f,[2,27]),{5:[1,79]},{5:[1,80]},{4:l,5:h,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:u,19:m,21:[1,81],22:S,24:b,25:C,26:N,27:A,28:R,29:E,32:25,33:p,35:$,37:I,38:w,41:M,45:P,48:G,51:it,52:rt,53:at,54:nt,57:J},e(f,[2,32]),e(f,[2,33]),e(f,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:d(function(B,n){if(n.recoverable)this.trace(B);else{var o=new Error(B);throw o.hash=n,o}},"parseError"),parse:d(function(B){var n=this,o=[0],g=[],_=[null],r=[],v=this.table,c="",z=0,q=0,ct=0,ht=2,dt=1,Qt=r.slice.call(arguments,1),k=Object.create(this.lexer),W={yy:{}};for(var mt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,mt)&&(W.yy[mt]=this.yy[mt]);k.setInput(B,W.yy),W.yy.lexer=k,W.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var _t=k.yylloc;r.push(_t);var Zt=k.options&&k.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function te(L){o.length=o.length-2*L,_.length=_.length-L,r.length=r.length-L}d(te,"popStack");function vt(){var L;return L=g.pop()||k.lex()||dt,typeof L!="number"&&(L instanceof Array&&(g=L,L=g.pop()),L=n.symbols_[L]||L),L}d(vt,"lex");for(var D,Tt,U,O,Ye,kt,H={},ut,Y,At,pt;;){if(U=o[o.length-1],this.defaultActions[U]?O=this.defaultActions[U]:((D===null||typeof D>"u")&&(D=vt()),O=v[U]&&v[U][D]),typeof O>"u"||!O.length||!O[0]){var bt="";pt=[];for(ut in v[U])this.terminals_[ut]&&ut>ht&&pt.push("'"+this.terminals_[ut]+"'");k.showPosition?bt="Parse error on line "+(z+1)+`:
`+k.showPosition()+`
Expecting `+pt.join(", ")+", got '"+(this.terminals_[D]||D)+"'":bt="Parse error on line "+(z+1)+": Unexpected "+(D==dt?"end of input":"'"+(this.terminals_[D]||D)+"'"),this.parseError(bt,{text:k.match,token:this.terminals_[D]||D,line:k.yylineno,loc:_t,expected:pt})}if(O[0]instanceof Array&&O.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+D);switch(O[0]){case 1:o.push(D),_.push(k.yytext),r.push(k.yylloc),o.push(O[1]),D=null,Tt?(D=Tt,Tt=null):(q=k.yyleng,c=k.yytext,z=k.yylineno,_t=k.yylloc,ct>0);break;case 2:if(Y=this.productions_[O[1]][1],H.$=_[_.length-Y],H._$={first_line:r[r.length-(Y||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(Y||1)].first_column,last_column:r[r.length-1].last_column},Zt&&(H._$.range=[r[r.length-(Y||1)].range[0],r[r.length-1].range[1]]),kt=this.performAction.apply(H,[c,q,z,W.yy,O[1],_,r].concat(Qt)),typeof kt<"u")return kt;Y&&(o=o.slice(0,-1*Y*2),_=_.slice(0,-1*Y),r=r.slice(0,-1*Y)),o.push(this.productions_[O[1]][0]),_.push(H.$),r.push(H._$),At=v[o[o.length-2]][o[o.length-1]],o.push(At);break;case 3:return!0}}return!0},"parse")},Xt=function(){var B={EOF:1,parseError:d(function(n,o){if(this.yy.parser)this.yy.parser.parseError(n,o);else throw new Error(n)},"parseError"),setInput:d(function(n,o){return this.yy=o||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:d(function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var o=n.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},"input"),unput:d(function(n){var o=n.length,g=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var _=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),g.length-1&&(this.yylineno-=g.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:g?(g.length===_.length?this.yylloc.first_column:0)+_[_.length-g.length].length-g[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},"unput"),more:d(function(){return this._more=!0,this},"more"),reject:d(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:d(function(n){this.unput(this.match.slice(n))},"less"),pastInput:d(function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:d(function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:d(function(){var n=this.pastInput(),o=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+o+"^"},"showPosition"),test_match:d(function(n,o){var g,_,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),_=n[0].match(/(?:\r\n?|\n).*/g),_&&(this.yylineno+=_.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:_?_[_.length-1].length-_[_.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],g=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),g)return g;if(this._backtrack){for(var v in r)this[v]=r[v];return!1}return!1},"test_match"),next:d(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,o,g,_;this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),v=0;v<r.length;v++)if(g=this._input.match(this.rules[r[v]]),g&&(!o||g[0].length>o[0].length)){if(o=g,_=v,this.options.backtrack_lexer){if(n=this.test_match(g,r[v]),n!==!1)return n;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(n=this.test_match(o,r[_]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:d(function(){var n=this.next();return n||this.lex()},"lex"),begin:d(function(n){this.conditionStack.push(n)},"begin"),popState:d(function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:d(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:d(function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:d(function(n){this.begin(n)},"pushState"),stateStackSize:d(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:d(function(n,o,g,_){switch(g){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:break;case 9:break;case 10:return 5;case 11:break;case 12:break;case 13:break;case 14:break;case 15:return this.pushState("SCALE"),17;case 16:return 18;case 17:this.popState();break;case 18:return this.begin("acc_title"),33;case 19:return this.popState(),"acc_title_value";case 20:return this.begin("acc_descr"),35;case 21:return this.popState(),"acc_descr_value";case 22:this.begin("acc_descr_multiline");break;case 23:this.popState();break;case 24:return"acc_descr_multiline_value";case 25:return this.pushState("CLASSDEF"),41;case 26:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 27:return this.popState(),this.pushState("CLASSDEFID"),42;case 28:return this.popState(),43;case 29:return this.pushState("CLASS"),48;case 30:return this.popState(),this.pushState("CLASS_STYLE"),49;case 31:return this.popState(),50;case 32:return this.pushState("STYLE"),45;case 33:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 34:return this.popState(),47;case 35:return this.pushState("SCALE"),17;case 36:return 18;case 37:this.popState();break;case 38:this.pushState("STATE");break;case 39:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;case 40:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;case 41:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;case 42:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;case 43:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;case 44:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;case 45:return 51;case 46:return 52;case 47:return 53;case 48:return 54;case 49:this.pushState("STATE_STRING");break;case 50:return this.pushState("STATE_ID"),"AS";case 51:return this.popState(),"ID";case 52:this.popState();break;case 53:return"STATE_DESCR";case 54:return 19;case 55:this.popState();break;case 56:return this.popState(),this.pushState("struct"),20;case 57:break;case 58:return this.popState(),21;case 59:break;case 60:return this.begin("NOTE"),29;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:return this.popState(),this.pushState("NOTE_ID"),60;case 63:this.popState(),this.pushState("FLOATING_NOTE");break;case 64:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 65:break;case 66:return"NOTE_TEXT";case 67:return this.popState(),"ID";case 68:return this.popState(),this.pushState("NOTE_TEXT"),24;case 69:return this.popState(),o.yytext=o.yytext.substr(2).trim(),31;case 70:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),31;case 71:return 6;case 72:return 6;case 73:return 16;case 74:return 57;case 75:return 24;case 76:return o.yytext=o.yytext.trim(),14;case 77:return 15;case 78:return 28;case 79:return 58;case 80:return 5;case 81:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[12,13],inclusive:!1},struct:{rules:[12,13,25,29,32,38,45,46,47,48,57,58,59,60,74,75,76,77,78],inclusive:!1},FLOATING_NOTE_ID:{rules:[67],inclusive:!1},FLOATING_NOTE:{rules:[64,65,66],inclusive:!1},NOTE_TEXT:{rules:[69,70],inclusive:!1},NOTE_ID:{rules:[68],inclusive:!1},NOTE:{rules:[61,62,63],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[34],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[33],inclusive:!1},CLASS_STYLE:{rules:[31],inclusive:!1},CLASS:{rules:[30],inclusive:!1},CLASSDEFID:{rules:[28],inclusive:!1},CLASSDEF:{rules:[26,27],inclusive:!1},acc_descr_multiline:{rules:[23,24],inclusive:!1},acc_descr:{rules:[21],inclusive:!1},acc_title:{rules:[19],inclusive:!1},SCALE:{rules:[16,17,36,37],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[51],inclusive:!1},STATE_STRING:{rules:[52,53],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[12,13,39,40,41,42,43,44,49,50,54,55,56],inclusive:!1},ID:{rules:[12,13],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,13,14,15,18,20,22,25,29,32,35,38,56,60,71,72,73,74,75,76,77,79,80,81],inclusive:!0}}};return B}();St.lexer=Xt;function lt(){this.yy={}}return d(lt,"Parser"),lt.prototype=St,St.Parser=lt,new lt}();xt.parser=xt;var je=xt,pe="TB",Yt="TB",Lt="dir",Q="state",X="root",Ct="relation",ye="classDef",fe="style",ge="applyClass",et="default",Pt="divider",Gt="fill:none",jt="fill: #333",Mt="c",zt="text",Wt="normal",Et="rect",Dt="rectWithTitle",Se="stateStart",me="stateEnd",Ot="divider",Nt="roundedWithTitle",_e="note",Te="noteGroup",st="statediagram",ke="state",be=`${st}-${ke}`,Ut="transition",Ee="note",De="note-edge",xe=`${Ut} ${De}`,Ce=`${st}-${Ee}`,$e="cluster",Ie=`${st}-${$e}`,ve="cluster-alt",Ae=`${st}-${ve}`,Kt="parent",Vt="note",Le="state",$t="----",Oe=`${$t}${Vt}`,Rt=`${$t}${Kt}`,Jt=d((e,t=Yt)=>{if(!e.doc)return t;let s=t;for(let a of e.doc)a.stmt==="dir"&&(s=a.value);return s},"getDir"),Ne=d(function(e,t){return t.db.getClasses()},"getClasses"),Re=d(async function(e,t,s,a){T.info("REF0:"),T.info("Drawing state diagram (v2)",t);let{securityLevel:i,state:l,layout:h}=F();a.db.extract(a.db.getRootDocV2());let y=a.db.getData(),u=ee(t,i);y.type=a.type,y.layoutAlgorithm=h,y.nodeSpacing=(l==null?void 0:l.nodeSpacing)||50,y.rankSpacing=(l==null?void 0:l.rankSpacing)||50,y.markers=["barb"],y.diagramId=t,await ie(y,u);let m=8;try{(typeof a.db.getLinks=="function"?a.db.getLinks():new Map).forEach((S,b)=>{var $;let C=typeof b=="string"?b:typeof(b==null?void 0:b.id)=="string"?b.id:"";if(!C){T.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(b));return}let N=($=u.node())==null?void 0:$.querySelectorAll("g"),A;if(N==null||N.forEach(I=>{var w;((w=I.textContent)==null?void 0:w.trim())===C&&(A=I)}),!A){T.warn("⚠️ Could not find node matching text:",C);return}let R=A.parentNode;if(!R){T.warn("⚠️ Node has no parent, cannot wrap:",C);return}let E=document.createElementNS("http://www.w3.org/2000/svg","a"),p=S.url.replace(/^"+|"+$/g,"");if(E.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",p),E.setAttribute("target","_blank"),S.tooltip){let I=S.tooltip.replace(/^"+|"+$/g,"");E.setAttribute("title",I)}R.replaceChild(E,A),E.appendChild(A),T.info("🔗 Wrapped node in <a> tag for:",C,S.url)})}catch(S){T.error("❌ Error injecting clickable links:",S)}re.insertTitle(u,"statediagramTitleText",(l==null?void 0:l.titleTopMargin)??25,a.db.getDiagramTitle()),se(u,m,st,(l==null?void 0:l.useMaxWidth)??!0)},"draw"),Me={getClasses:Ne,draw:Re,getDir:Jt},ft=new Map,j=0;function gt(e="",t=0,s="",a=$t){let i=s!==null&&s.length>0?`${a}${s}`:"";return`${Le}-${e}${i}-${t}`}d(gt,"stateDomId");var we=d((e,t,s,a,i,l,h,y)=>{T.trace("items",t),t.forEach(u=>{switch(u.stmt){case Q:tt(e,u,s,a,i,l,h,y);break;case et:tt(e,u,s,a,i,l,h,y);break;case Ct:{tt(e,u.state1,s,a,i,l,h,y),tt(e,u.state2,s,a,i,l,h,y);let m={id:"edge"+j,start:u.state1.id,end:u.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Gt,labelStyle:"",label:K.sanitizeText(u.description??"",F()),arrowheadStyle:jt,labelpos:Mt,labelType:zt,thickness:Wt,classes:Ut,look:h};i.push(m),j++}break}})},"setupDoc"),wt=d((e,t=Yt)=>{let s=t;if(e.doc)for(let a of e.doc)a.stmt==="dir"&&(s=a.value);return s},"getDir");function Z(e,t,s){if(!t.id||t.id==="</join></fork>"||t.id==="</choice>")return;t.cssClasses&&(Array.isArray(t.cssCompiledStyles)||(t.cssCompiledStyles=[]),t.cssClasses.split(" ").forEach(i=>{let l=s.get(i);l&&(t.cssCompiledStyles=[...t.cssCompiledStyles??[],...l.styles])}));let a=e.find(i=>i.id===t.id);a?Object.assign(a,t):e.push(t)}d(Z,"insertOrUpdateNode");function qt(e){var t;return((t=e==null?void 0:e.classes)==null?void 0:t.join(" "))??""}d(qt,"getClassesFromDbInfo");function Ht(e){return(e==null?void 0:e.styles)??[]}d(Ht,"getStylesFromDbInfo");var tt=d((e,t,s,a,i,l,h,y)=>{var N,A,R;let u=t.id,m=s.get(u),S=qt(m),b=Ht(m),C=F();if(T.info("dataFetcher parsedItem",t,m,b),u!=="root"){let E=Et;t.start===!0?E=Se:t.start===!1&&(E=me),t.type!==et&&(E=t.type),ft.get(u)||ft.set(u,{id:u,shape:E,description:K.sanitizeText(u,C),cssClasses:`${S} ${be}`,cssStyles:b});let p=ft.get(u);t.description&&(Array.isArray(p.description)?(p.shape=Dt,p.description.push(t.description)):(N=p.description)!=null&&N.length&&p.description.length>0?(p.shape=Dt,p.description===u?p.description=[t.description]:p.description=[p.description,t.description]):(p.shape=Et,p.description=t.description),p.description=K.sanitizeTextOrArray(p.description,C)),((A=p.description)==null?void 0:A.length)===1&&p.shape===Dt&&(p.type==="group"?p.shape=Nt:p.shape=Et),!p.type&&t.doc&&(T.info("Setting cluster for XCX",u,wt(t)),p.type="group",p.isGroup=!0,p.dir=wt(t),p.shape=t.type===Pt?Ot:Nt,p.cssClasses=`${p.cssClasses} ${Ie} ${l?Ae:""}`);let $={labelStyle:"",shape:p.shape,label:p.description,cssClasses:p.cssClasses,cssCompiledStyles:[],cssStyles:p.cssStyles,id:u,dir:p.dir,domId:gt(u,j),type:p.type,isGroup:p.type==="group",padding:8,rx:10,ry:10,look:h};if($.shape===Ot&&($.label=""),e&&e.id!=="root"&&(T.trace("Setting node ",u," to be child of its parent ",e.id),$.parentId=e.id),$.centerLabel=!0,t.note){let I={labelStyle:"",shape:_e,label:t.note.text,cssClasses:Ce,cssStyles:[],cssCompiledStyles:[],id:u+Oe+"-"+j,domId:gt(u,j,Vt),type:p.type,isGroup:p.type==="group",padding:(R=C.flowchart)==null?void 0:R.padding,look:h,position:t.note.position},w=u+Rt,M={labelStyle:"",shape:Te,label:t.note.text,cssClasses:p.cssClasses,cssStyles:[],id:u+Rt,domId:gt(u,j,Kt),type:"group",isGroup:!0,padding:16,look:h,position:t.note.position};j++,M.id=w,I.parentId=w,Z(a,M,y),Z(a,I,y),Z(a,$,y);let P=u,G=I.id;t.note.position==="left of"&&(P=I.id,G=u),i.push({id:P+"-"+G,start:P,end:G,arrowhead:"none",arrowTypeEnd:"",style:Gt,labelStyle:"",classes:xe,arrowheadStyle:jt,labelpos:Mt,labelType:zt,thickness:Wt,look:h})}else Z(a,$,y)}t.doc&&(T.trace("Adding nodes children "),we(t,t.doc,s,a,i,!l,h,y))},"dataFetcher"),Be=d(()=>{ft.clear(),j=0},"reset"),x={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Bt=d(()=>new Map,"newClassesList"),Ft=d(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),yt=d(e=>JSON.parse(JSON.stringify(e)),"clone"),V,ze=(V=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Bt(),this.documents={root:Ft()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=ae,this.setAccTitle=ne,this.getAccDescription=oe,this.setAccDescription=le,this.setDiagramTitle=ce,this.getDiagramTitle=he,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}extract(t){this.clear(!0);for(let i of Array.isArray(t)?t:t.doc)switch(i.stmt){case Q:this.addState(i.id.trim(),i.type,i.doc,i.description,i.note);break;case Ct:this.addRelation(i.state1,i.state2,i.description);break;case ye:this.addStyleClass(i.id.trim(),i.classes);break;case fe:this.handleStyleDef(i);break;case ge:this.setCssClass(i.id.trim(),i.styleClass);break;case"click":this.addLink(i.id,i.url,i.tooltip);break}let s=this.getStates(),a=F();Be(),tt(void 0,this.getRootDocV2(),s,this.nodes,this.edges,!0,a.look,this.classes);for(let i of this.nodes)if(Array.isArray(i.label)){if(i.description=i.label.slice(1),i.isGroup&&i.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${i.id}]`);i.label=i.label[0]}}handleStyleDef(t){let s=t.id.trim().split(","),a=t.styleClass.split(",");for(let i of s){let l=this.getState(i);if(!l){let h=i.trim();this.addState(h),l=this.getState(h)}l&&(l.styles=a.map(h=>{var y;return(y=h.replace(/;/g,""))==null?void 0:y.trim()}))}}setRootDoc(t){T.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,s,a){if(s.stmt===Ct){this.docTranslator(t,s.state1,!0),this.docTranslator(t,s.state2,!1);return}if(s.stmt===Q&&(s.id===x.START_NODE?(s.id=t.id+(a?"_start":"_end"),s.start=a):s.id=s.id.trim()),s.stmt!==X&&s.stmt!==Q||!s.doc)return;let i=[],l=[];for(let h of s.doc)if(h.type===Pt){let y=yt(h);y.doc=yt(l),i.push(y),l=[]}else l.push(h);if(i.length>0&&l.length>0){let h={stmt:Q,id:de(),type:"divider",doc:yt(l)};i.push(yt(h)),s.doc=i}s.doc.forEach(h=>this.docTranslator(s,h,!0))}getRootDocV2(){return this.docTranslator({id:X,stmt:X},{id:X,stmt:X,doc:this.rootDoc},!0),{id:X,doc:this.rootDoc}}addState(t,s=et,a=void 0,i=void 0,l=void 0,h=void 0,y=void 0,u=void 0){let m=t==null?void 0:t.trim();if(!this.currentDocument.states.has(m))T.info("Adding state ",m,i),this.currentDocument.states.set(m,{stmt:Q,id:m,descriptions:[],type:s,doc:a,note:l,classes:[],styles:[],textStyles:[]});else{let S=this.currentDocument.states.get(m);if(!S)throw new Error(`State not found: ${m}`);S.doc||(S.doc=a),S.type||(S.type=s)}if(i&&(T.info("Setting state description",m,i),(Array.isArray(i)?i:[i]).forEach(S=>this.addDescription(m,S.trim()))),l){let S=this.currentDocument.states.get(m);if(!S)throw new Error(`State not found: ${m}`);S.note=l,S.note.text=K.sanitizeText(S.note.text,F())}h&&(T.info("Setting state classes",m,h),(Array.isArray(h)?h:[h]).forEach(S=>this.setCssClass(m,S.trim()))),y&&(T.info("Setting state styles",m,y),(Array.isArray(y)?y:[y]).forEach(S=>this.setStyle(m,S.trim()))),u&&(T.info("Setting state styles",m,y),(Array.isArray(u)?u:[u]).forEach(S=>this.setTextStyle(m,S.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:Ft()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Bt(),t||(this.links=new Map,ue())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){T.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,s,a){this.links.set(t,{url:s,tooltip:a}),T.warn("Adding link",t,s,a)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===x.START_NODE?(this.startEndCount++,`${x.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",s=et){return t===x.START_NODE?x.START_TYPE:s}endIdIfNeeded(t=""){return t===x.END_NODE?(this.startEndCount++,`${x.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",s=et){return t===x.END_NODE?x.END_TYPE:s}addRelationObjs(t,s,a=""){let i=this.startIdIfNeeded(t.id.trim()),l=this.startTypeIfNeeded(t.id.trim(),t.type),h=this.startIdIfNeeded(s.id.trim()),y=this.startTypeIfNeeded(s.id.trim(),s.type);this.addState(i,l,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(h,y,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),this.currentDocument.relations.push({id1:i,id2:h,relationTitle:K.sanitizeText(a,F())})}addRelation(t,s,a){if(typeof t=="object"&&typeof s=="object")this.addRelationObjs(t,s,a);else if(typeof t=="string"&&typeof s=="string"){let i=this.startIdIfNeeded(t.trim()),l=this.startTypeIfNeeded(t),h=this.endIdIfNeeded(s.trim()),y=this.endTypeIfNeeded(s);this.addState(i,l),this.addState(h,y),this.currentDocument.relations.push({id1:i,id2:h,relationTitle:a?K.sanitizeText(a,F()):void 0})}}addDescription(t,s){var l;let a=this.currentDocument.states.get(t),i=s.startsWith(":")?s.replace(":","").trim():s;(l=a==null?void 0:a.descriptions)==null||l.push(K.sanitizeText(i,F()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,s=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});let a=this.classes.get(t);s&&a&&s.split(x.STYLECLASS_SEP).forEach(i=>{let l=i.replace(/([^;]*);/,"$1").trim();if(RegExp(x.COLOR_KEYWORD).exec(i)){let h=l.replace(x.FILL_KEYWORD,x.BG_FILL).replace(x.COLOR_KEYWORD,x.FILL_KEYWORD);a.textStyles.push(h)}a.styles.push(l)})}getClasses(){return this.classes}setCssClass(t,s){t.split(",").forEach(a=>{var l;let i=this.getState(a);if(!i){let h=a.trim();this.addState(h),i=this.getState(h)}(l=i==null?void 0:i.classes)==null||l.push(s)})}setStyle(t,s){var a,i;(i=(a=this.getState(t))==null?void 0:a.styles)==null||i.push(s)}setTextStyle(t,s){var a,i;(i=(a=this.getState(t))==null?void 0:a.textStyles)==null||i.push(s)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===Lt)}getDirection(){var t;return((t=this.getDirectionStatement())==null?void 0:t.value)??pe}setDirection(t){let s=this.getDirectionStatement();s?s.value=t:this.rootDoc.unshift({stmt:Lt,value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){let t=F();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Jt(this.getRootDocV2())}}getConfig(){return F().state}},d(V,"StateDB"),V.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},V),Fe=d(e=>`
defs #statediagram-barbEnd {
    fill: ${e.transitionColor};
    stroke: ${e.transitionColor};
  }
g.stateGroup text {
  fill: ${e.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${e.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${e.stateLabelColor};
}

g.stateGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.stateGroup line {
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${e.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${e.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${e.noteBorderColor};
  fill: ${e.noteBkgColor};

  text {
    fill: ${e.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${e.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${e.edgeLabelBackground};
  p {
    background-color: ${e.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${e.edgeLabelBackground};
    fill: ${e.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${e.transitionLabelColor||e.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${e.transitionLabelColor||e.tertiaryTextColor};
}

.stateLabel text {
  fill: ${e.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node .fork-join {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node circle.state-end {
  fill: ${e.innerEndBackground};
  stroke: ${e.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${e.compositeBackground||e.background};
  // stroke: ${e.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${e.stateBkg||e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${e.lineColor};
}

.statediagram-cluster rect {
  fill: ${e.compositeTitleBackground};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${e.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${e.stateBorder||e.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${e.compositeBackground||e.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${e.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${e.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${e.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${e.lineColor};
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`,"getStyles"),We=Fe;export{je as B,ze as b,We as g,Me as q};
