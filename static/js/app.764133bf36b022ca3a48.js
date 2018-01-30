webpackJsonp([1],{L7Qk:function(e,t){},"LLW/":function(e,t){},MBUy:function(e,t){},MESr:function(e,t){},fXXc:function(e,t){},g9po:function(e,t){},mUtA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s=n("r2wC"),r=n.n(s),a=n("8U58"),l=n.n(a),o=n("O4Lo"),h=n.n(o),u=(n("f6fj"),n("hKnC"),n("afnM"),n("7Xsf"),{name:"editor",props:{value:{type:String,default:""},show:{type:Boolean,default:!0}},data:function(){return{editor:null}},mounted:function(){this.init(),this.setValue()},watch:{value:function(){this.setValue()}},methods:{init:function(){this.editor=l()(this.$refs.editor,{mode:"text/x-markdown",theme:"xq-light",indentUnit:2,smartIndent:!0,tabSize:4,indentWithTabs:!0,keyMap:"sublime",lineWrapping:!0,scrollbarStyle:"overlay",inputStyle:"contenteditable",showCursorWhenSelecting:!0,placeholder:"输入markdown",lineWiseCopyCut:!0,autofocus:!0,resetSelectionOnContextMenu:!0}),this.editor.on("change",this.change)},change:h()(function(){var e=this.editor.getValue();this.value!==e&&this.$emit("input",e)},700),setValue:function(){this.editor.getValue()!==this.value&&this.editor.setValue(this.value)}}}),c=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"editor"},[t("div",{staticClass:"editor-title"},[this._v("编辑器")]),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],ref:"editor",staticClass:"editor-container"})])],1)};c._withStripped=!0;var d={render:c,staticRenderFns:[]},p=d;var f=!1;var g=n("VU/8")(u,p,!1,function(e){f||n("fXXc")},null,null);g.options.__file="examples/components/editor.vue";var v=g.exports,m=n("V8mf"),b=n.n(m),k=n("Zrlr"),x=n.n(k),w=n("wxAW"),y=n.n(w),$=n("Dd8w"),_=n.n($),S=function(e,t){return e=e.source,t=t||"",function n(i,s){return i?(s=(s=s.source||s).replace(/(^|[^[])\^/g,"$1"),e=e.replace(i,s),n):new RegExp(e,t)}},E=function(){};E.exec=E;var C=function(e){return void 0===e||null===e},L=function(e){return void 0!==e&&null!==e},M=function(e,t){return t.indexOf("/")&&t.indexOf("http://")&&t.indexOf("https://")?e+t:t},A={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:E,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:E,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:E,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/,bullet:/(?:[*+-]|\d+\.)/,item:/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/};A.item=S(A.item,"gm")(/bull/g,A.bullet)(),A.list=S(A.list)(/bull/g,A.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+A.def.source+")")(),A.blockquote=S(A.blockquote)("def",A.def)(),A._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",A.html=S(A.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,A._tag)(),A.paragraph=S(A.paragraph)("hr",A.hr)("heading",A.heading)("lheading",A.lheading)("blockquote",A.blockquote)("tag","<"+A._tag)("def",A.def)(),A.normal=_()({},A),A.gfm=_()({},A.normal,{fences:/^ *(`{3,}|~{3,})[ .]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),A.gfm.paragraph=S(A.paragraph)("(?!","(?!"+A.gfm.fences.source.replace("\\1","\\2")+"|"+A.list.source.replace("\\1","\\3")+"|")(),A.tables=_()({},A.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});var q=A,I=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.$el,i=void 0===n?null:n,s=t.tag,r=void 0===s?null:s,a=t.type,l=void 0===a?"node":a,o=t.parent,h=void 0===o?null:o,u=t.children,c=void 0===u?[]:u,d=t.attributes,p=void 0===d?{}:d,f=t.text,g=void 0===f?null:f,v=t.source,m=void 0===v?null:v;x()(this,e),this.uid=e.uid++,this.$el=i,this.tag=r,this.type=l,this.parent=h,this.children=c,this.attributes=p,this.text=g,this.source=m};I.vision="0.2.0",I.uid=0;var V=I,B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.$el,n=void 0===t?null:t,i=e.tag,s=void 0===i?null:i,r=e.type,a=void 0===r?"node":r,l=e.parent,o=void 0===l?null:l,h=e.children,u=void 0===h?[]:h,c=e.attributes,d=void 0===c?{}:c,p=e.text,f=void 0===p?"":p,g=e.source,v=new V({$el:n,tag:s,type:a,parent:o,children:u,attributes:d,text:f,source:void 0===g?null:g});return v.children.forEach(function(e){e.parent=v}),v},T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.gfm,i=void 0===n||n,s=t.tables,r=void 0===s||s,a=t.pedantic,l=void 0!==a&&a;x()(this,e),this.options={gfm:i,tables:r,pedantic:l},this.rules=q.normal,this.links={},this.vnode=[],this.options.gfm&&(this.options.tables?this.rules=q.tables:this.rules=q.gfm)}return y()(e,null,[{key:"lex",value:function(t,n){return new e(n).parser(t)}}]),y()(e,[{key:"parser",value:function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.vnode=this.lex(e,!0),{vnode:this.vnode,links:this.links}}},{key:"lex",value:function(e,t,n){e=e.replace(/^ +$/gm,"");for(var i=[],s=void 0,r=void 0;e;)if((s=this.rules.newline.exec(e))&&(e=e.substring(s[0].length)),s=this.rules.code.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ {4}/gm,""),r=B({tag:"pre",children:[B({tag:"code",children:[B({type:"",text:this.options.pedantic?s:s.replace(/\n+$/,"")})]})]}),i.push(r);else if(s=this.rules.fences.exec(e)){e=e.substring(s[0].length);var a={};L(s[2])&&(a.class="lang-"+s[2]),r=B({tag:"pre",children:[B({tag:"code",children:[B({type:"text",text:s[3]||""})],attributes:a})]}),i.push(r)}else if(s=this.rules.heading.exec(e))e=e.substring(s[0].length),r=B({tag:"h"+s[1].length,source:s[2]}),i.push(r);else if(t&&(s=this.rules.nptable.exec(e))){e=e.substring(s[0].length);var l=s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),o=s[2].replace(/^ *|\| *$/g,"").split(/ *\| */).map(function(e){return/^ *-+: *$/.test(e)?"right":/^ *:-+: *$/.test(e)?"center":/^ *:-+ *$/.test(e)?"left":null}),h=s[3].replace(/\n$/,"").split("\n").map(function(e){return e.split(/ *\| */)});i.push(this.lexTable(l,h,o))}else if(s=this.rules.lheading.exec(e))e=e.substring(s[0].length),r=B({tag:"h"+("="===s[2]?1:2),source:s[1]}),i.push(r);else if(s=this.rules.hr.exec(e))e=e.substring(s[0].length),r=B({tag:"hr"}),i.push(r);else if(s=this.rules.blockquote.exec(e))e=e.substring(s[0].length),s=s[0].replace(/^ *> ?/gm,""),r=B({tag:"blockquote",children:this.lex(s,t,!0)}),i.push(r);else if(s=this.rules.list.exec(e)){e=e.substring(s[0].length);for(var u=s[2],c=0,d=(s=s[0].match(this.rules.item)).length,p=[];c<d;c++){var f=s[c],g=f.length;if(~(f=f.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(g-=f.length,f=this.options.pedantic?f.replace(/^ {1,4}/gm,""):f.replace(new RegExp("^ {1,"+g+"}","gm"),"")),c!==d-1){var v=q.bullet.exec(s[c+1])[0];u===v||u.length>1&&v.length>1||(e=s.slice(c+1).join("\n")+e,c=d-1)}p.push(this.lex(f,!1,n))}r=B({tag:u.length>1?"ol":"ul",children:p.map(function(e){return B({tag:"li",children:e})})}),i.push(r)}else if(s=this.rules.html.exec(e))e=e.substring(s[0].length),r=B({type:"html",text:s[0]}),i.push(r);else if(!n&&t&&(s=this.rules.def.exec(e)))e=e.substring(s[0].length),this.links[s[1].toLowerCase()]={href:s[2],title:s[3]};else if(t&&(s=this.rules.table.exec(e))){e=e.substring(s[0].length);var m=s[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),b=s[2].replace(/^ *|\| *$/g,"").split(/ *\| */).map(function(e){return/^ *-+: *$/.test(e)?"right":/^ *:-+: *$/.test(e)?"center":/^ *:-+ *$/.test(e)?"left":null}),k=s[3].replace(/(?: *\| *)?\n$/,"").split("\n").map(function(e){return e.replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)});i.push(this.lexTable(m,k,b))}else if(t&&(s=this.rules.paragraph.exec(e)))e=e.substring(s[0].length),r=B({tag:"p",source:"\n"===s[1].charAt(s[1].length-1)?s[1].slice(0,-1):s[1]}),i.push(r);else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),r=B({type:t?"node":"text",tag:t?"p":null,source:s[0]}),i.push(r);else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return i}},{key:"lexTable",value:function(e,t,n){return B({tag:"table",children:[B({tag:"thead",children:[B({tag:"tr",children:e.map(function(e,t){var i={};return L(n[t])&&(i.align=n[t]),B({tag:"th",attributes:i,source:e})})})]}),B({tag:"tbody",children:t.map(function(e){return B({tag:"tr",children:e.map(function(e,t){var i={};return L(n[t])&&(i.align=n[t]),B({tag:"td",attributes:i,source:e})})})})})]})}}]),e}();T.vision="0.2.0",T.rules=q;var U=T,N=n("pFYg"),F=n.n(N),G={escape:/^\\([\\`*{}[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:E,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,tasklist:/^ *\[( |x)\] +/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:E,text:/^[\s\S]+?(?=[\\<![_*`]| {2,}\n|$)/,_inside:/(?:\[[^\]]*\]|[^[\]]|\](?=[^[]*\]))*/,_href:/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/};G.link=S(G.link)("inside",G._inside)("href",G._href)(),G.reflink=S(G.reflink)("inside",G._inside)(),G.normal=_()({},G),G.pedantic=_()({},G.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),G.gfm=_()({},G.normal,{escape:S(G.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:S(G.text)("]|","~]|")("|","|https?://|")()}),G.breaks=_()({},G.gfm,{br:S(G.br)("{2,}","*")(),text:S(G.gfm.text)("{2,}","*")()});var R=G,j=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.gfm,i=void 0===n||n,s=t.breaks,r=void 0!==s&&s,a=t.pedantic,l=void 0!==a&&a,o=t.smartypants,h=void 0!==o&&o,u=t.base,c=void 0===u?"":u,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};x()(this,e),this.options={gfm:i,breaks:r,pedantic:l,smartypants:h,base:c},this.rules=R.normal,this.options.gfm?this.options.breaks?this.rules=R.breaks:this.rules=R.gfm:this.options.pedantic&&(this.rules=R.pedantic),this.setLinks(d)}return y()(e,null,[{key:"lex",value:function(t,n,i){return new e(i,n).parser(t)}}]),y()(e,[{key:"setLinks",value:function(e){if("object"!==(void 0===e?"undefined":F()(e)))throw new TypeError("`links` isn't a object.");this.links=e}},{key:"parser",value:function(e){return this.lex(e.source,e.parent)}},{key:"lex",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[],i=void 0,s=void 0,r=void 0,a=void 0,l=void 0;e;)if(a=this.rules.escape.exec(e))e=e.substring(a[0].length),l=B({text:a[1],type:"text"}),n.push(l);else if(a=this.rules.autolink.exec(e)){e=e.substring(a[0].length),"@"===a[2]?r="mailto:"+(s=":"===a[1].charAt(6)?a[1].substring(7):a[1]):(s=a[1],r=M(this.options.base,s));var o={};L(r)&&(o.href=r),l=B({tag:"a",children:[B({text:s,type:"text"})],attributes:o}),n.push(l)}else if(this.inLink||!(a=this.rules.url.exec(e))){if(a=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),e=e.substring(a[0].length),l=B({text:a[0],type:"html"}),n.push(l);else if(a=this.rules.link.exec(e))e=e.substring(a[0].length),this.inLink=!0,l=this.lexLink(a,{href:a[2],title:a[3]}),n.push(l),this.inLink=!1;else if(!n.length&&t&&"li"===t.tag&&(a=this.rules.tasklist.exec(e))){e=e.substring(a[0].length);var h={type:"checkbox",disabled:"disabled"};"x"===a[1]&&(h.checked="checked"),l=B({tag:"input",attributes:h}),n.push(l)}else if((a=this.rules.reflink.exec(e))||(a=this.rules.nolink.exec(e))){if(e=e.substring(a[0].length),i=(a[2]||a[1]).replace(/\s+/g," "),!(i=this.links[i.toLowerCase()])||!i.href){l=B({text:a[0].charAt(0),type:"text"}),n.push(l),e=a[0].substring(1)+e;continue}this.inLink=!0,l=this.lexLink(a,i),n.push(l),this.inLink=!1}else if(a=this.rules.strong.exec(e))e=e.substring(a[0].length),l=B({tag:"strong",children:this.lex(a[2]||a[1])}),n.push(l);else if(a=this.rules.em.exec(e))e=e.substring(a[0].length),l=B({tag:"em",children:this.lex(a[2]||a[1])}),n.push(l);else if(a=this.rules.code.exec(e))e=e.substring(a[0].length),l=B({tag:"code",children:[B({text:a[2],type:"text"})]}),n.push(l);else if(a=this.rules.br.exec(e))e=e.substring(a[0].length),l=B({tag:"br"}),n.push(l);else if(a=this.rules.del.exec(e))e=e.substring(a[0].length),l=B({tag:"del",children:this.lex(a[1])}),n.push(l);else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),l=B({text:this.smartypants(a[0]),type:"text"}),n.push(l);else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else{e=e.substring(a[0].length),s=a[1];var u={};L(r=s)&&(u.href=M(this.options.base,r)),l=B({tag:"a",children:[B({text:s,type:"text"})],attributes:u}),n.push(l)}return n}},{key:"lexLink",value:function(e,t){var n=t.href,i=t.title?t.title:null,s={};if(L(i)&&(s.title=i),"!"!==e[0].charAt(0))return L(n)&&(s.href=M(this.options.base,n)),B({tag:"a",children:this.lex(e[1]),attributes:s});var r=e[1];return L(n)&&(s.src=M(this.options.base,n)),L(r)&&(s.alt=r),B({tag:"img",attributes:s})}},{key:"smartypants",value:function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/([{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/([{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}}]),e}();j.vision="0.2.0",j.rules=R;var W=j,Y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.gfm,i=void 0===n||n,s=t.tables,r=void 0===s||s,a=t.pedantic,l=void 0!==a&&a,o=t.breaks,h=void 0!==o&&o,u=t.smartypants,c=void 0!==u&&u,d=t.base,p=void 0===d?"":d;x()(this,e),this.options={gfm:i,tables:r,pedantic:l,breaks:h,smartypants:c,base:p},this.blockLexer=new U(this.options),this.inlineLexer=new W(this.options),this.vnode=[]}return y()(e,null,[{key:"lex",value:function(t,n){return new e(n).lex(t)}}]),y()(e,[{key:"lex",value:function(e){var t=this.lexBlock(e),n=t.vnode,i=t.links;return this.inlineLexer.setLinks(i),this.vnode=this.lexInline(n),this.vnode}},{key:"lexBlock",value:function(e){return this.blockLexer.parser(e)}},{key:"lexInline",value:function(e){for(var t=0,n=e[t];n;){if(n.source){if("text"===n.type){for(var i=this.inlineLexer.parser(n),s=t;i.length;){var r=i.shift();s!==t&&"text"===e[t].type&&"text"===r.type?e[t].text+=r.text:(r.parent=n.parent,e.splice(++t,0,r))}t--,e.splice(s,1)}else n.children=this.inlineLexer.parser(n).map(function(e){return e.parent=n,e});n.source=null}else this.lexInline(n.children);n=e[++t]}return e}}]),e}();Y.vision="0.2.0";var O=Y,H=n("fZjL"),X=n.n(H),z=function(){function e(){x()(this,e)}return y()(e,[{key:"patch",value:function(e,t){if(C(e))this.removeEl(t);else if(C(t)){for(var n=e.parent?e.parent.children:[],i=0;i<n.length;i++)if(e.uid===n[i].uid){this.insert(e.parent,this.create(e),n[i+1]);break}}else"node"===e.type?e.tag===t.tag?(e.$el=t.$el,this.patchAttributes(e,t),this.patchChildren(e.children,t.children)):this.replace(e.parent,this.create(e),t):(e.type,e.text===t.text?e.$el=t.$el:this.replace(e.parent,this.create(e),t))}},{key:"patchAttributes",value:function(e,t){var n=_()({},t.attributes,e.attributes);X()(n).forEach(function(n){if(C(e.attributes[n]))return e.$el.removeAttribute(n);e.attributes[n]!==t.attributes[n]&&L(e.attributes[n])&&e.$el.setAttribute(n,e.attributes[n])})}},{key:"patchChildren",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=0,i=0,s=t.length-1,r=t[0],a=t[s],l=e.length-1,o=e[0],h=e[l];n<=s&&i<=l;)r.tag===o.tag?(this.patch(o,r),r=t[++n],o=e[++i]):a.tag===h.tag?(this.patch(h,a),a=t[--s],h=e[--l]):r.tag===h.tag?(this.patch(h,r),this.insert(a.parent,r,t[s+1]),r=t[++n],h=e[--l]):a.tag===o.tag?(this.patch(o,a),this.insert(r.parent,a,r),a=t[--s],o=e[++i]):(this.replace(o.parent,this.create(o),r),r=t[++n],o=e[++i]);if(n>s)for(;i<=l;++i)this.insert(e[i].parent,this.create(e[i]),e[l+1]);else if(i>l)for(;n<=s;++n)this.removeEl(t[n])}},{key:"create",value:function(e){var t=this;if("node"===e.type)e.$el||(e.$el=document.createElement(e.tag)),X()(e.attributes).forEach(function(t){L(e.attributes[t])&&e.$el.setAttribute(t,e.attributes[t])}),e.children.forEach(function(n){e.$el.appendChild(t.create(n).$el)});else if("html"===e.type){var n=document.createElement("div");n.innerHTML=e.text,e.$el=n.children[0]}else e.$el=document.createTextNode(e.text);return e}},{key:"append",value:function(e,t){e.$el.appendChild(t.$el)}},{key:"insert",value:function(e,t,n){n&&n.$el?e.$el.insertBefore(t.$el,n.$el):this.append(e,t)}},{key:"removeEl",value:function(e){e.$el.parentElement&&e.parent.$el.removeChild(e.$el)}},{key:"replace",value:function(e,t,n){L(e)&&(n&&L(n.$el)&&n.parent.$el===e.$el&&n.$el.parentElement?e.$el.replaceChild(t.$el,n.$el):e.$el.appendChild(t.$el))}}],[{key:"render",value:function(t,n){return(new e).patch(t,n)}}]),e}();z.vision="0.2.0";var J=z,P=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.gfm,i=void 0===n||n,s=t.tables,r=void 0===s||s,a=t.pedantic,l=void 0!==a&&a,o=t.breaks,h=void 0!==o&&o,u=t.smartypants,c=void 0!==u&&u,d=t.base,p=void 0===d?"":d,f=t.$el,g=void 0===f?null:f;x()(this,e),this.options={gfm:i,tables:r,pedantic:l,breaks:h,smartypants:c,base:p,$el:g},this.lexer=new O(this.options),this.renderer=new J(this.options),this.vnode=B({$el:g,tag:g.tagName.toLowerCase(),type:"node",children:[]})}return y()(e,null,[{key:"parse",value:function(t,n){return new e(n).parse(t)}}]),y()(e,[{key:"parse",value:function(e){var t=B({$el:this.vnode.$el,tag:this.vnode.tag,type:"node",children:this.lex(e)});return this.render(t),this.vnode=t,this}},{key:"lex",value:function(e){return this.lexer.lex(e)}},{key:"render",value:function(e){try{this.renderer.patch(e,this.vnode)}catch(t){e.$el.innerHTML="",this.renderer.patch(e,{}),console.warn("[markdown365-parser]:"+t)}}}]),e}();P.vision="0.2.0";var Q=P,Z={name:"viewer",props:{value:{type:String,default:""},full:{type:Boolean,default:!0}},mounted:function(){this.parser=new Q({gfm:!0,tables:!0,breaks:!0,pedantic:!1,smartypants:!1,base:"",$el:this.$refs.view}),this.render(),console.log(this.parser)},watch:{value:function(){this.render()}},methods:{render:function(){this.parser&&(this.parser.parse(this.value),this.$refs.view.querySelectorAll("pre code").forEach(function(e){return b.a.highlightBlock(e)}))}}},D=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"viewer",class:this.full&&"viewer-full"},[t("div",{staticClass:"viewer-title"},[this._v("Markdown365-parser渲染效果")]),t("div",{ref:"view",staticClass:"viewer-container markdown-body"})])};D._withStripped=!0;var K={render:D,staticRenderFns:[]},ee=K;var te=!1;var ne=n("VU/8")(Z,ee,!1,function(e){te||n("g9po")},null,null);ne.options.__file="examples/components/viewer.vue";var ie=ne.exports,se=function(){var e=this.$createElement;this._self._c;return this._m(0)};se._withStripped=!0;var re={render:se,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"github"},[t("a",{attrs:{href:"https://github.com/markdown365/markdown365-parser"}},[t("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"}})])])}]},ae=re;var le=!1;var oe=n("VU/8")({name:"github"},ae,!1,function(e){le||n("LLW/")},null,null);oe.options.__file="examples/components/github.vue";var he=oe.exports,ue={name:"nav-bar",props:{showEditor:{type:Boolean,default:!0},showMarked:{type:Boolean,default:!1}},methods:{retweet:function(){this.$emit("toggleMarked",!this.showMarked)},toggleEditor:function(){this.$emit("toggleEditor",!this.showEditor)}}},ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("ul",{staticClass:"nav-bar-list"},[n("li",[n("button",{staticClass:"nav-bar-list-button",class:e.showMarked&&"nav-bar-list-button-active",attrs:{type:"button",title:"对比"},on:{click:e.retweet}},[n("i",{staticClass:"fa fa-retweet"})])]),n("li",[n("button",{staticClass:"nav-bar-list-button",class:e.showEditor&&"nav-bar-list-button-active",attrs:{type:"button",title:"源码"},on:{click:e.toggleEditor}},[n("i",{staticClass:"fa fa-code"})])])])])};ce._withStripped=!0;var de={render:ce,staticRenderFns:[]},pe=de;var fe=!1;var ge=n("VU/8")(ue,pe,!1,function(e){fe||n("MBUy")},null,null);ge.options.__file="examples/components/navbar.vue";var ve=ge.exports,me=n("EFqf"),be=n.n(me),ke={name:"marked",props:{value:{tyep:String,default:""},show:{type:Boolean,default:!1}},computed:{html:function(){return be()(this.value)},getStyle:function(){return this.show?"":"visibility: hidden;"}},watch:{value:"highlight",show:"highlight"},methods:{highlight:function(){var e=this;this.$nextTick(function(){e.$refs.view&&e.$refs.view.querySelectorAll("pre code").forEach(function(e){return b.a.highlightBlock(e)})})}}},xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"marked",style:e.getStyle},[n("div",{staticClass:"marked-title"},[e._v("Marked渲染效果")]),n("transition",{attrs:{name:"fade"}},[e.show?n("div",{ref:"view",staticClass:"marked-container markdown-body",domProps:{innerHTML:e._s(e.html)}}):e._e()])],1)};xe._withStripped=!0;var we={render:xe,staticRenderFns:[]},ye=we;var $e=!1;var _e=n("VU/8")(ke,ye,!1,function(e){$e||n("L7Qk")},null,null);_e.options.__file="examples/components/marked.vue";var Se={name:"App",components:{Editor:v,Viewer:ie,Github:he,Navbar:ve,Marked:_e.exports},data:function(){return{value:r.a,showEditor:!0,showMarked:!1}},computed:{full:function(){return!this.showEditor&&!this.showMarked}},methods:{toggleEditor:function(e){this.showEditor=e,e&&(this.showMarked=!1)},toggleMarked:function(e){this.showMarked=e,e&&(this.showEditor=!1)}}},Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("editor",{attrs:{show:e.showEditor},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("marked",{attrs:{value:e.value,show:e.showMarked}}),n("viewer",{attrs:{value:e.value,full:e.full}}),n("github"),n("navbar",{attrs:{showEditor:e.showEditor,showMarked:e.showMarked},on:{toggleEditor:e.toggleEditor,toggleMarked:e.toggleMarked}})],1)};Ee._withStripped=!0;var Ce={render:Ee,staticRenderFns:[]},Le=Ce;var Me=!1;var Ae=n("VU/8")(Se,Le,!1,function(e){Me||n("MESr")},null,null);Ae.options.__file="examples/App.vue";var qe=Ae.exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:qe},template:"<App/>"})},r2wC:function(e,t){e.exports='# 语法\n\n## 标题\n\n# header 1\nheader 1\n======\n## header 2\nheader 2\n-----\n### header 3\n#### header 4\n##### header 5\n###### header 6\n\n## 复选列表\n- [x] checklist 1\n- [x] checklist 2\n- [x] checklist 3\n- [x] checklist 4\n\n## 表格\n\n| name | gender | age | height | weight |\n| :--- | :---: | ---: | :---: | :---: |\n| **Jack** | male | 20 | 175 | 70 |\n| **Rose** | female | 18 | 168 | 55 |\n\n## 链接\n\n* 行内式\n  1. I get 10 times more traffic from [Google](http://google.com/) than from [Yahoo](http://search.yahoo.com/) or [MSN](http://search.msn.com/).\n\n  2. I get 10 times more traffic from [Google](http://google.com/ "Google") than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or [MSN](http://search.msn.com/ "MSN Search").\n\n  3. 相对路径链接[链接到图片](./static/markdown365.png)\n\n* 参考式：\n  1. I get 10 times more traffic from [Google] [1] than from [Yahoo] [2] or [MSN] [3].\n\n  2. I get 10 times more traffic from [Google][] than from [Yahoo][] or [MSN][].\n\n  [1]: https://google.com/        "Google"\n  [2]: https://search.yahoo.com/  "Yahoo Search"\n  [3]: https://search.msn.com/    "MSN Search"\n  [google]: https://www.google.com/    "Google"\n  [yahoo]:  https://search.yahoo.com/  "Yahoo Search"\n  [msn]:    https://search.msn.com/    "MSN Search"\n\n\n## 图片\n\n* 行内式\n\n![markdown365](./static/markdown365.png)\n\n* 参考式\n\n![markdown365][1].\n\n[1]: https://markdown365.github.io/markdown365-parser/static/markdown365.png\n\n## 无序列表\n\n- li [-]\n+ li [+]\n* li [*]\n\n## 有序列表\n\n1. li 1\n2. li 2\n3. li 3\n\n## 嵌套列表\n\n1. ol list 1\n  * ol list 1\n  * ol list 2\n2. checklist\n  - [ ] checklist 1\n  - [ ] checklist 2\n  - [x] checklist 3\n3. three layers\n  1. ul list 1\n    - ol list 1\n    - [ ] checklist\n    1. ul list 1\n  2. ul list 2\n\n## 引用块\n\n> quote 1\n>> quote 2\n* ol list 1\n* ol list 2\n```js\nconsole.log(\'code block in quote\')\n```\n\n## 代码块\n\n```js\nconst reduce = a => a !== undefined\n  ? b => b !== undefined\n    ? reduce(a + b)\n    : a\n  : a\nconst b = reduce(1)(2)(3)(4)()\n```\n\n## 粗体和斜体\n\nI am **bold**\n\nI am __bold__\n\nI am *italic*\n\nI am _italic_\n\nI am ***bold and italic***\n\n## 下划线\n\n这是一个下划线\n******\n\n## 行内代码\n\n我想要标记一下`console.log(\'Hello\')`\n\n代码中有反引号：``There is a literal backtick (`) here.``\n\n## 自动链接\n\n<http://example.com/>\n\n<address@example.com>\n\n## html\n\n<h5>我是h5标签</h5>\n\n<img src="./static/markdown365.png" width="200px" title="markdown365" />\n\n'}},["mUtA"]);
//# sourceMappingURL=app.764133bf36b022ca3a48.js.map