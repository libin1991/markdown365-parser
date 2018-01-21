webpackJsonp([1],{MESr:function(e,t){},fXXc:function(e,t){},g9po:function(e,t){},mUtA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};n.d(i,"default",function(){return X}),n.d(i,"Parser",function(){return U}),n.d(i,"Lexer",function(){return R}),n.d(i,"Renderer",function(){return B});var s=n("7+uW"),r={name:"editor",props:{value:{type:String,default:""}},computed:{val:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],domProps:{value:e.val},on:{input:function(t){t.target.composing||(e.val=t.target.value)}}})])};l._withStripped=!0;var a={render:l,staticRenderFns:[]},o=a;var h=!1;var u=n("VU/8")(r,o,!1,function(e){h||n("fXXc")},null,null);u.options.__file="examples/components/editor.vue";var c=u.exports,p=n("V8mf"),d=n.n(p),g=n("Zrlr"),f=n.n(g),v=n("wxAW"),m=n.n(v),b=n("Dd8w"),x=n.n(b),k=function(e,t){return e=e.source,t=t||"",function n(i,s){return i?(s=(s=s.source||s).replace(/(^|[^[])\^/g,"$1"),e=e.replace(i,s),n):new RegExp(e,t)}},y=function(){};y.exec=y;var w=function(e){return void 0===e||null===e},$=function(e){return void 0!==e&&null!==e},_=function(e,t){return t.indexOf("/")&&t.indexOf("http://")&&t.indexOf("https://")?e+t:t},S={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:y,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:y,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:y,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/,bullet:/(?:[*+-]|\d+\.)/,item:/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/};S.item=k(S.item,"gm")(/bull/g,S.bullet)(),S.list=k(S.list)(/bull/g,S.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+S.def.source+")")(),S.blockquote=k(S.blockquote)("def",S.def)(),S._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",S.html=k(S.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,S._tag)(),S.paragraph=k(S.paragraph)("hr",S.hr)("heading",S.heading)("lheading",S.lheading)("blockquote",S.blockquote)("tag","<"+S._tag)("def",S.def)(),S.normal=x()({},S),S.gfm=x()({},S.normal,{fences:/^ *(`{3,}|~{3,})[ .]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),S.gfm.paragraph=k(S.paragraph)("(?!","(?!"+S.gfm.fences.source.replace("\\1","\\2")+"|"+S.list.source.replace("\\1","\\3")+"|")(),S.tables=x()({},S.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});var L=S,z=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.$el,i=void 0===n?null:n,s=t.tag,r=void 0===s?null:s,l=t.type,a=void 0===l?"node":l,o=t.parent,h=void 0===o?null:o,u=t.children,c=void 0===u?[]:u,p=t.attributes,d=void 0===p?{}:p,g=t.text,v=void 0===g?null:g,m=t.source,b=void 0===m?null:m;f()(this,e),this.uid=e.uid++,this.$el=i,this.tag=r,this.type=a,this.parent=h,this.children=c,this.attributes=d,this.text=v,this.source=b};z.uid=0;var E=z,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.$el,n=void 0===t?null:t,i=e.tag,s=void 0===i?null:i,r=e.type,l=void 0===r?"node":r,a=e.parent,o=void 0===a?null:a,h=e.children,u=void 0===h?[]:h,c=e.attributes,p=void 0===c?{}:c,d=e.text,g=void 0===d?"":d,f=e.source,v=new E({$el:n,tag:s,type:l,parent:o,children:u,attributes:p,text:g,source:void 0===f?null:f});return v.children.forEach(function(e){e.parent=v}),v},C=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.gfm,i=void 0===n||n,s=t.tables,r=void 0===s||s,l=t.pedantic,a=void 0!==l&&l,o=t.sanitize,h=void 0!==o&&o,u=t.sanitizer,c=void 0===u?null:u,p=t.smartLists,d=void 0!==p&&p,g=t.base,v=void 0===g?"":g;f()(this,e),this.options={gfm:i,tables:r,pedantic:a,sanitize:h,sanitizer:c,smartLists:d,base:v},this.rules=L.normal,this.links={},this.vnode=[],this.options.gfm&&(this.options.tables?this.rules=L.tables:this.rules=L.gfm)}return m()(e,null,[{key:"lex",value:function(t,n){return new e(n).parser(t)}}]),m()(e,[{key:"parser",value:function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.vnode=this.lex(e,!0),{vnode:this.vnode,links:this.links}}},{key:"lex",value:function(e,t,n){e=e.replace(/^ +$/gm,"");for(var i=[],s=void 0,r=void 0;e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length)),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),r=A({tag:"pre",children:[A({tag:"code",children:[A({type:"",text:this.options.pedantic?s:s.replace(/\n+$/,"")})]})]}),i.push(r);else if(s=this.rules.fences.exec(e)){e=e.substring(s[0].length);var l={};$(s[2])&&(l.class="lang-"+s[2]),r=A({tag:"pre",children:[A({tag:"code",children:[A({type:"text",text:s[3]||""})],attributes:l})]}),i.push(r)}else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),r=A({tag:"h"+s[1].length,source:s[2]}),i.push(r);else if(t&&(s=this.rules.nptable.exec(e))){e=e.substring(s[0].length);var a=s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),o=s[2].replace(/^ *|\| *$/g,"").split(/ *\| */).map(function(e){return/^ *-+: *$/.test(e)?"right":/^ *:-+: *$/.test(e)?"center":/^ *:-+ *$/.test(e)?"left":null}),h=s[3].replace(/\n$/,"").split("\n").map(function(e){return e.split(/ *\| */)});i.push(this.lexTable(a,h,o))}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),r=A({tag:"h"+("="===s[2]?1:2),source:s[1]}),i.push(r);else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),r=A({tag:"hr"}),i.push(r);else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ *> ?/gm,""),r=A({tag:"blockquote",children:this.lex(s,t,!0)}),i.push(r);else if(s=this.rules.list.exec(e)){e=e.substring(s[0].length);for(var u=s[2],c=0,p=(s=s[0].match(this.rules.item)).length,d=[];c<p;c++){var g=s[c],f=g.length;if(~(g=g.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(f-=g.length,g=this.options.pedantic?g.replace(/^ {1,4}/gm,""):g.replace(new RegExp("^ {1,"+f+"}","gm"),"")),this.options.smartLists&&c!==p-1){var v=L.bullet.exec(s[c+1])[0];u===v||u.length>1&&v.length>1||(e=s.slice(c+1).join("\n")+e,c=p-1)}d.push(this.lex(g,!1,n))}r=A({tag:u.length>1?"ol":"ul",children:d.map(function(e){return A({tag:"li",children:e})})}),i.push(r)}else if(s=this.rules.html.exec(e)){e=e.substring(s[0].length);var m={type:this.options.sanitize?"node":"html"};m.tag="node"===m.type?"p":null,m.tag?this.options.sanitizer||"pre"!==s[1]&&"script"!==s[1]&&"style"!==s[1]?m.lex=!1:m.children=[A({type:"text",text:s[0]})]:m.text=s[0],r=A(m),i.push(r)}else if(!n&&t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),this.links[s[1].toLowerCase()]={href:s[2],title:s[3]};else if(t&&(s=this.rules.table.exec(e))){e=e.substring(s[0].length);var b=s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),x=s[2].replace(/^ *|\| *$/g,"").split(/ *\| */).map(function(e){return/^ *-+: *$/.test(e)?"right":/^ *:-+: *$/.test(e)?"center":/^ *:-+ *$/.test(e)?"left":null}),k=s[3].replace(/(?: *\| *)?\n$/,"").split("\n").map(function(e){return e.replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)});i.push(this.lexTable(b,k,x))}else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),r=A({tag:"p",source:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]}),i.push(r);else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),r=A({type:t?"node":"text",tag:t?"p":null,source:s[0]}),i.push(r);else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return i}},{key:"lexTable",value:function(e,t,n){return A({tag:"table",children:[A({tag:"thead",children:[A({tag:"tr",children:e.map(function(e,t){var i={};return $(n[t])&&(i.align=n[t]),A({tag:"th",attributes:i,source:e})})})]}),A({tag:"tbody",children:t.map(function(e){return A({tag:"tr",children:e.map(function(e,t){var i={};return $(n[t])&&(i.align=n[t]),A({tag:"td",attributes:i,source:e})})})})})]})}}]),e}();C.rules=L;var M=C,q=n("pFYg"),I=n.n(q),N={escape:/^\\([\\`*{}[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:y,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,tasklist:/^ *\[( |x)\] +/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:y,text:/^[\s\S]+?(?=[\\<![_*`]| {2,}\n|$)/,_inside:/(?:\[[^\]]*\]|[^[\]]|\](?=[^[]*\]))*/,_href:/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/};N.link=k(N.link)("inside",N._inside)("href",N._href)(),N.reflink=k(N.reflink)("inside",N._inside)(),N.normal=x()({},N),N.pedantic=x()({},N.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),N.gfm=x()({},N.normal,{escape:k(N.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:k(N.text)("]|","~]|")("|","|https?://|")()}),N.breaks=x()({},N.gfm,{br:k(N.br)("{2,}","*")(),text:k(N.gfm.text)("{2,}","*")()});var T=N,j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.gfm,i=void 0===n||n,s=t.breaks,r=void 0!==s&&s,l=t.pedantic,a=void 0!==l&&l,o=t.sanitize,h=void 0!==o&&o,u=t.sanitizer,c=void 0===u?null:u,p=t.smartypants,d=void 0!==p&&p,g=t.base,v=void 0===g?"":g,m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f()(this,e),this.options={gfm:i,breaks:r,pedantic:a,sanitize:h,sanitizer:c,smartypants:d,base:v},this.rules=T.normal,this.options.gfm?this.options.breaks?this.rules=T.breaks:this.rules=T.gfm:this.options.pedantic&&(this.rules=T.pedantic),this.setLinks(m)}return m()(e,null,[{key:"lex",value:function(t,n,i){return new e(i,n).parser(t)}}]),m()(e,[{key:"setLinks",value:function(e){if("object"!==(void 0===e?"undefined":I()(e)))throw new TypeError("`links` isn't a object.");this.links=e}},{key:"parser",value:function(e){return this.lex(e.source,e.parent)}},{key:"lex",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[],i=void 0,s=void 0,r=void 0,l=void 0,a=void 0;e;)if(l=this.rules.escape.exec(e))e=e.substring(l[0].length),a=A({text:l[1],type:"text"}),n.push(a);else if(l=this.rules.autolink.exec(e)){e=e.substring(l[0].length),"@"===l[2]?r="mailto:"+(s=":"===l[1].charAt(6)?l[1].substring(7):l[1]):(s=l[1],r=_(this.options.base,s));var o={};$(r)&&(o.href=r),a=A({tag:"a",children:[A({text:s,type:"text"})],attributes:o}),n.push(a)}else if(this.inLink||!(l=this.rules.url.exec(e))){if(l=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(l[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(l[0])&&(this.inLink=!1),e=e.substring(l[0].length),a=A({text:this.options.sanitize&&this.options.sanitizer?this.options.sanitizer(l[0]):l[0],type:"html"}),n.push(a);else if(l=this.rules.link.exec(e))e=e.substring(l[0].length),this.inLink=!0,a=this.lexLink(l,{href:l[2],title:l[3]}),n.push(a),this.inLink=!1;else if(!n.length&&t&&"li"===t.tag&&(l=this.rules.tasklist.exec(e))){e=e.substring(l[0].length);var h={type:"checkbox",disabled:"disabled"};"x"===l[1]&&(h.checked="checked"),a=A({tag:"input",attributes:h}),n.push(a)}else if((l=this.rules.reflink.exec(e))||(l=this.rules.nolink.exec(e))){if(e=e.substring(l[0].length),i=(l[2]||l[1]).replace(/\s+/g," "),!(i=this.links[i.toLowerCase()])||!i.href){a=A({text:l[0].charAt(0),type:"text"}),n.push(a),e=l[0].substring(1)+e;continue}this.inLink=!0,a=this.lexLink(l,i),n.push(a),this.inLink=!1}else if(l=this.rules.strong.exec(e))e=e.substring(l[0].length),a=A({tag:"strong",children:this.lex(l[2]||l[1])}),n.push(a);else if(l=this.rules.em.exec(e))e=e.substring(l[0].length),a=A({tag:"em",children:this.lex(l[2]||l[1])}),n.push(a);else if(l=this.rules.code.exec(e))e=e.substring(l[0].length),a=A({tag:"code",children:[A({text:l[2],type:"text"})]}),n.push(a);else if(l=this.rules.br.exec(e))e=e.substring(l[0].length),a=A({tag:"br"}),n.push(a);else if(l=this.rules.del.exec(e))e=e.substring(l[0].length),a=A({tag:"del",children:this.lex(l[1])}),n.push(a);else if(l=this.rules.text.exec(e))e=e.substring(l[0].length),a=A({text:this.smartypants(l[0]),type:"text"}),n.push(a);else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{e=e.substring(l[0].length),s=l[1];var u={};$(r=s)&&(u.href=_(this.options.base,r)),a=A({tag:"a",children:[A({text:s,type:"text"})],attributes:u}),n.push(a)}return n}},{key:"lexLink",value:function(e,t){var n=t.href,i=t.title?t.title:null,s={};if($(i)&&(s.title=i),"!"!==e[0].charAt(0))return $(n)&&(s.href=_(this.options.base,n)),A({tag:"a",children:this.lex(e[1]),attributes:s});var r=e[1];return $(n)&&(s.src=_(this.options.base,n)),$(r)&&(s.alt=r),A({tag:"img",attributes:s})}},{key:"smartypants",value:function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/([{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/([{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}}]),e}();j.rules=T;var G=j,O=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.gfm,i=void 0===n||n,s=t.tables,r=void 0===s||s,l=t.breaks,a=void 0!==l&&l,o=t.pedantic,h=void 0!==o&&o,u=t.sanitize,c=void 0!==u&&u,p=t.sanitizer,d=void 0===p?null:p,g=t.smartLists,v=void 0!==g&&g,m=t.smartypants,b=void 0!==m&&m,x=t.base,k=void 0===x?"":x;f()(this,e),this.options={gfm:i,breaks:a,tables:r,pedantic:h,sanitize:c,sanitizer:d,smartypants:b,smartLists:v,base:k},this.blockLexer=new M(this.options),this.inlineLexer=new G(this.options),this.vnode=[]}return m()(e,null,[{key:"lex",value:function(t,n){return new e(n).lex(t)}}]),m()(e,[{key:"lex",value:function(e){var t=this.lexBlock(e),n=t.vnode,i=t.links;return this.inlineLexer.setLinks(i),this.vnode=this.lexInline(n),this.vnode}},{key:"lexBlock",value:function(e){return this.blockLexer.parser(e)}},{key:"lexInline",value:function(e){for(var t=0,n=e[t];n;){if(n.source){if("text"===n.type){for(var i=this.inlineLexer.parser(n),s=t;i.length;){var r=i.shift();s!==t&&"text"===e[t].type&&"text"===r.type?e[t].text+=r.text:(r.parent=n.parent,e.splice(++t,0,r))}t--,e.splice(s,1)}else n.children=this.inlineLexer.parser(n).map(function(e){return e.parent=n,e});n.source=null}else this.lexInline(n.children);n=e[++t]}return e}}]),e}();O.BlockLexer=M,O.InlineLexer=G;var R=O,Y=n("fZjL"),V=n.n(Y),B=function(){function e(){f()(this,e)}return m()(e,[{key:"getNamespace",value:function(e){return{svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"}[e.toLowerCase()]}},{key:"isHTML",value:function(e){return-1!=="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot".split(",").indexOf(e.toLowerCase())}},{key:"isSVG",value:function(e){return-1!=="svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view".split(",").indexOf(e.toLowerCase())}},{key:"patch",value:function(e,t){if(w(e))this.removeEl(t);else if(w(t)){for(var n=e.parent?e.parent.children:[],i=0;i<n.length;i++)if(e.uid===n[i].uid){this.insert(e.parent,this.create(e),n[i+1]);break}}else"node"===e.type?e.tag===t.tag?(e.$el=t.$el,this.patchAttributes(e,t),this.patchChildren(e.children,t.children)):this.replace(e.parent,this.create(e),t):(e.type,e.text===t.text?e.$el=t.$el:this.replace(e.parent,this.create(e),t))}},{key:"patchAttributes",value:function(e,t){var n=x()({},t.attributes,e.attributes);V()(n).forEach(function(n){if(w(e.attributes[n]))return e.$el.removeAttribute(n);e.attributes[n]!==t.attributes[n]&&$(e.attributes[n])&&e.$el.setAttribute(n,e.attributes[n])})}},{key:"patchChildren",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=0,i=0,s=t.length-1,r=t[0],l=t[s],a=e.length-1,o=e[0],h=e[a];n<=s&&i<=a;)w(r)?r=t[++n]:w(l)?l=t[--s]:r.tag===o.tag?(this.patch(o,r),r=t[++n],o=e[++i]):l.tag===h.tag?(this.patch(h,l),l=t[--s],h=e[--a]):r.tag===h.tag?(this.patch(h,r),this.insert(l.parent,r,t[s+1]),r=t[++n],h=e[--a]):l.tag===o.tag?(this.patch(o,l),this.insert(r.parent,l,r),l=t[--s],o=e[++i]):(this.replace(o.parent,this.create(o),r),r=t[++n],o=e[++i]);if(n>s)for(;i<=a;++i)this.insert(e[i].parent,this.create(e[i]),e[a+1]);else if(i>a)for(;n<=s;++n)this.removeEl(t[n])}},{key:"create",value:function(e){var t=this;if("node"===e.type)e.$el||(e.$el=document.createElement(e.tag)),V()(e.attributes).forEach(function(t){$(e.attributes[t])&&e.$el.setAttribute(t,e.attributes[t])}),e.children.forEach(function(n){e.$el.appendChild(t.create(n).$el)});else if("html"===e.type){var n=document.createElement("div");n.innerHTML=e.text,e.$el=n.children[0]}else e.$el=document.createTextNode(e.text);return e}},{key:"append",value:function(e,t){e.$el.appendChild(t.$el)}},{key:"insert",value:function(e,t,n){n&&n.$el?e.$el.insertBefore(t.$el,n.$el):this.append(e,t)}},{key:"removeEl",value:function(e){e.$el.parentElement&&e.parent.$el.removeChild(e.$el)}},{key:"replace",value:function(e,t,n){$(e)&&(n&&$(n.$el)&&n.parent.$el===e.$el&&n.$el.parentElement?e.$el.replaceChild(t.$el,n.$el):e.$el.appendChild(t.$el))}}],[{key:"render",value:function(t,n){return(new e).patch(t,n)}}]),e}(),U=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.gfm,i=void 0===n||n,s=t.tables,r=void 0===s||s,l=t.breaks,a=void 0!==l&&l,o=t.pedantic,h=void 0!==o&&o,u=t.sanitize,c=void 0!==u&&u,p=t.sanitizer,d=void 0===p?null:p,g=t.smartLists,v=void 0!==g&&g,m=t.smartypants,b=void 0!==m&&m,x=t.base,k=void 0===x?"":x,y=t.$el,w=void 0===y?null:y;f()(this,e),this.options={gfm:i,tables:r,breaks:a,pedantic:h,sanitize:c,sanitizer:d,smartLists:v,smartypants:b,base:k,$el:w},this.lexer=new R(this.options),this.renderer=new B(this.options),this.vnode={}}return m()(e,null,[{key:"parse",value:function(t,n){return new e(n).parse(t)}}]),m()(e,[{key:"parse",value:function(e){var t=this.options.$el,n=A({$el:t,tag:t.tagName.toLowerCase(),type:"node",children:this.lex(e)});return this.render(n),this.vnode=n,this.vnode}},{key:"lex",value:function(e){return this.lexer.lex(e)}},{key:"render",value:function(e){try{this.renderer.patch(e,this.vnode)}catch(t){e.$el.innerHTML="",this.renderer.patch(e,{})}}}]),e}();U.Lexer=R,U.Renderer=B,U.vision="0.0.5";var X=U;console.dir(X),console.log(i);var F={name:"viewer",props:{value:{type:String,default:""}},data:function(){return{parser:null}},mounted:function(){this.parser=new X({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,smartLists:!1,smartypants:!1,base:"",$el:this.$el}),this.render()},watch:{value:function(){this.render()}},methods:{render:function(){this.parser&&(this.parser.parse(this.value),this.$el.querySelectorAll("pre code").forEach(function(e){return d.a.highlightBlock(e)}))}}},H=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"viewer markdown-body"})};H._withStripped=!0;var P={render:H,staticRenderFns:[]},J=P;var W=!1;var Z=n("VU/8")(F,J,!1,function(e){W||n("g9po")},null,null);Z.options.__file="examples/components/viewer.vue";var D=Z.exports,K=n("r2wC"),Q=n.n(K),ee={name:"App",components:{Editor:c,Viewer:D},data:function(){return{value:Q.a}}},te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("editor",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("Viewer",{attrs:{value:e.value}})],1)};te._withStripped=!0;var ne={render:te,staticRenderFns:[]},ie=ne;var se=!1;var re=n("VU/8")(ee,ie,!1,function(e){se||n("MESr")},null,null);re.options.__file="examples/App.vue";var le=re.exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:le},template:"<App/>"})},r2wC:function(e,t){e.exports='# 语法\n\n## 标题\n\n# header 1\nheader 1\n======\n## header 2\nheader 2\n-----\n### header 3\n#### header 4\n##### header 5\n###### header 6\n\n## 复选列表\n- [x] checklist 1\n- [x] checklist 2\n- [x] checklist 3\n- [x] checklist 4\n\n## 表格\n\n| name | gender | age | height | weight |\n| :--- | :---: | ---: | :---: | :---: |\n| **Jack** | male | 20 | 175 | 70 |\n| **Rose** | female | 18 | 168 | 55 |\n\n## 链接\n\n* 行内式\n  1. I get 10 times more traffic from [Google](http://google.com/) than from [Yahoo](http://search.yahoo.com/) or [MSN](http://search.msn.com/).\n\n  2. I get 10 times more traffic from [Google](http://google.com/ "Google") than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or [MSN](http://search.msn.com/ "MSN Search").\n\n  3. 相对路径链接[链接到图片](./static/markdown365.png)\n\n* 参考式：\n  1. I get 10 times more traffic from [Google] [1] than from [Yahoo] [2] or [MSN] [3].\n\n  2. I get 10 times more traffic from [Google][] than from [Yahoo][] or [MSN][].\n\n  [1]: https://google.com/        "Google"\n  [2]: https://search.yahoo.com/  "Yahoo Search"\n  [3]: https://search.msn.com/    "MSN Search"\n  [google]: https://www.google.com/    "Google"\n  [yahoo]:  https://search.yahoo.com/  "Yahoo Search"\n  [msn]:    https://search.msn.com/    "MSN Search"\n\n\n## 图片\n\n* 行内式\n\n![markdown365](/static/markdown365.png)\n\n* 参考式\n\n![markdown365][1].\n\n[1]: /static/markdown365.png\n\n## 无序列表\n\n- li [-]\n+ li [+]\n* li [*]\n\n## 有序列表\n\n1. li 1\n2. li 2\n3. li 3\n\n## 嵌套列表\n\n1. ol list 1\n  * ol list 1\n  * ol list 2\n2. checklist\n  - [ ] checklist 1\n  - [ ] checklist 2\n  - [x] checklist 3\n3. three layers\n  1. ul list 1\n    - ol list 1\n    - [ ] checklist\n    1. ul list 1\n  2. ul list 2\n\n## 引用块\n\n> quote 1\n```js\nconsole.log(\'code block in quote\')\n```\n>> quote 2\n* ol list 1\n* ol list 2\n\n## 代码块\n\n```js\nconst reduce = a => a !== undefined\n  ? b => b !== undefined\n    ? reduce(a + b)\n    : a\n  : a\nconst b = reduce(1)(2)(3)(4)()\n```\n\n## 粗体和斜体\n\nI am **bold**\n\nI am __bold__\n\nI am *italic*\n\nI am _italic_\n\nI am ***bold and italic***\n\n## 下划线\n\n这是一个下划线\n******\n\n## 行内代码\n\n我想要标记一下`console.log(\'Hello\')`\n\n代码中有反引号：``There is a literal backtick (`) here.``\n\n## 自动链接\n\n<http://example.com/>\n\n<address@example.com>\n\n'}},["mUtA"]);
//# sourceMappingURL=app.e49774a67257d8964207.js.map