(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{12:function(e,t,n){e.exports=n.p+"6aa43c38ff249d48b6eddd8f2fc1c6e4.webp"},13:function(e,t,n){e.exports=n.p+"a16a78add7a1c6395056cf2193ac5213.webp"},16:function(e,t,n){n(17),n(36),e.exports=n(33)},31:function(e,t,n){var a={"./190902-ginzajs/0-title.md":32,"./190902-ginzajs/01-main.mdx":37};function l(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=c,e.exports=l,l.id=31},32:function(e,t,n){"use strict";n.r(t),n.d(t,"slides",function(){return r}),n.d(t,"fusumaProps",function(){return s}),n.d(t,"default",function(){return b});var a=n(2),l=n.n(a),c=n(1);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=[function(e){return Object(c.a)(l.a.Fragment,null,Object(c.a)("h1",null,"はじめてのFigma Plugin開発"),Object(c.a)("br",null),Object(c.a)("p",null,"Ginza.js #4"),Object(c.a)("br",null),Object(c.a)("p",null,"09/02"))}],s=[{classes:"title"}],o={slides:r},m="wrapper";function b(e){var t=e.components,n=u(e,["components"]);return Object(c.a)(m,i({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h1",null,"はじめてのFigma Plugin開発"),Object(c.a)("br",null),Object(c.a)("p",null,"Ginza.js #4"),Object(c.a)("br",null),Object(c.a)("p",null,"09/02"))}b.isMDXComponent=!0},34:function(e,t,n){var a=n(35);"string"==typeof a&&(a=[[e.i,a,""]]);var l={insert:"head",singleton:!1};n(4)(a,l);a.locals&&(e.exports=a.locals)},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),c=n(14),i=function(){return l.a.createElement(c.a,{left:l.a.createElement("img",{src:"https://pbs.twimg.com/profile_images/979597254188126208/Kw_5K41V_400x400.jpg"}),right:l.a.createElement("ul",{class:"description"},l.a.createElement("li",null,"なまえ: こいでまさき"),l.a.createElement("li",null,"しごと: フロントエンドエンジニア"),l.a.createElement("li",null,"すきる: React/TypeScript"),l.a.createElement("li",null,"しゅみ: 日本語ラップ・MCバトル鑑賞"))})},u=n(1);function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"slides",function(){return o}),n.d(t,"fusumaProps",function(){return m}),n.d(t,"default",function(){return g});var o=[function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"自己紹介"),Object(u.a)(i,(a="SelfIntroduce",(n="mdxType")in(t={mdxType:"SelfIntroduce"})?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t)));var t,n,a},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"Figmaって？"),Object(u.a)("br",null),Object(u.a)("div",{className:"card-50"},Object(u.a)("img",{className:"image size-50",src:n(12)}),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"最近勢いのあるデザインツール"),Object(u.a)("li",null,"Web版・デスクトップアプリ版がある"),Object(u.a)("li",null,"リアルタイム共同編集やURL共有が強み"))))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"じゃあFigma Pluginって？"),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"これまでもブラウザの拡張機能やWeb APIはあった"),Object(u.a)("li",null,"Figmaのsandbox内で動作するのがPlugin"),Object(u.a)("li",null,"2019年8月にリリースされたばかり")))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"神々のPlugin"),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"Googleスプレッドシートのデータを一発で埋め込むやーつ",Object(u.a)("br",null),Object(u.a)("a",{href:"https://twitter.com/DavidWilliames/status/1156503669707161600"},"https://twitter.com/DavidWilliames/status/1156503669707161600")),Object(u.a)("li",null,"ディープラーニングで写真から人を消すやーつ",Object(u.a)("br",null),Object(u.a)("a",{href:"https://twitter.com/matamalaortiz/status/1163551129956954113"},"https://twitter.com/matamalaortiz/status/1163551129956954113"))))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"なんでFigma Pluginに興味を持ったか"),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"TypeScriptで書ける(型がある世界最高)👍"),Object(u.a)("li",null,"業務で使ってるし、最近勢いがある👍"),Object(u.a)("li",null,"動作の仕組みやデバッグ環境が面白い👍")))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"Pluginの仕組み"),Object(u.a)("img",{className:"image size-70",src:"https://static.figma.com/uploads/04c4c6293fce2a7fe67bccd385ee5ab998705780"}),Object(u.a)("p",null,Object(u.a)("a",s({parentName:"p"},{href:"https://www.figma.com/plugin-docs/how-plugins-run/"}),"How Plugins Run - Figma Developers")))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"ファイル構成"),Object(u.a)("br",null),Object(u.a)("p",null,"基本的に",Object(u.a)("inlineCode",{parentName:"p"},"code.ts"),"と",Object(u.a)("inlineCode",{parentName:"p"},"ui.html"),"を編集していく"),Object(u.a)("br",null),Object(u.a)("pre",null,Object(u.a)("code",s({parentName:"pre"},{}),".\n├── README.md\n├── code.js\n├── code.ts\n├── figma.d.ts\n├── manifest.json\n├── tsconfig.json\n├── ui.html\n")))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("img",{className:"image size-40",src:n(13)}))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"36行で書いたプラグイン(DEMO)"))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("pre",null,Object(u.a)("code",s({parentName:"pre"},{className:"language-javascript"}),"// ui.html\n<p><input id=\"text\" /> <button id=\"zoom\">Zoom Text</button></p>\n<p id=\"message\"></p>\n<p><button id=\"close\">Close Plugin</button></p>\n\n<script>\n  document.getElementById('zoom').onclick = () => {\n    const textbox = document.getElementById('text')\n    const query = textbox.value\n    parent.postMessage({ pluginMessage: { type: 'zoom', query } }, '*')\n  }\n  document.getElementById('close').onclick = () => {\n    parent.postMessage({ pluginMessage: { type: 'close' } }, '*')\n  }\n  onmessage = event => {\n    const message = document.getElementById('message')\n    message.textContent = event.data.pluginMessage\n  }\n<\/script>\n")))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("pre",null,Object(u.a)("code",s({parentName:"pre"},{className:"language-javascript"}),"// code.ts\nfigma.showUI(__html__)\n\nfigma.ui.onmessage = msg => {\n  if (msg.type === 'zoom') {\n    const searchNode = figma.currentPage.findOne(node => {\n      return node.type === 'TEXT' && node.characters === msg.query\n    })\n    \n    if (searchNode) {\n      figma.viewport.scrollAndZoomIntoView([searchNode])\n      figma.ui.postMessage('お探しのテキストが見つかりました👍')\n    } else {\n      figma.ui.postMessage('お探しのテキストは見つかりませんでした👎')\n    }\n  } else if (msg.type === 'close') {\n    figma.closePlugin()\n  }\n}\n")))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"発展として..."),Object(u.a)("br",null),Object(u.a)("p",null,"普段のWeb開発のスキルがゴリゴリ使えて夢が広がる✨"),Object(u.a)("br",null),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"ビルドツールを使って複数ファイル構成"),Object(u.a)("li",null,"ReactやVueで複雑なUIを構成"),Object(u.a)("li",null,"外部APIとのコラボレーション")))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"ありがとうございました"))},function(e){return Object(u.a)(l.a.Fragment,null,Object(u.a)("h1",null,"参考にさせていただいたもの"),Object(u.a)("br",null),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",s({parentName:"li"},{href:"https://www.figma.com/plugin-docs/intro/"}),"introduction - Figma Developers")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",s({parentName:"li"},{href:"https://github.com/figma/plugin-samples"}),"figma/plugin-samples")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",s({parentName:"li"},{href:"https://note.mu/fjkn/n/n125c25962ba6"}),"FigmaにPluginがついに来たのでよさそうなものをご紹介")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",s({parentName:"li"},{href:"https://speakerdeck.com/takanorip/making-figma-plugins-with-typescript"}),"Figma Pluginを作ろう！"))))}],m=[{sectionTitle:"はじめてのFigma Plugin開発"},{sectionTitle:"Figma Pluginっておいしいの？"},{},{},{},{sectionTitle:"Figma Pluginをつくってみよう"},{},{},{},{},{},{sectionTitle:"Figma Pluginの未来"},{},{}],b={slides:o},p="wrapper";function g(e){var t=e.components,a=r(e,["components"]);return Object(u.a)(p,s({},b,a,{components:t,mdxType:"MDXLayout"}),Object(u.a)("h1",null,"自己紹介"),Object(u.a)(i,{mdxType:"SelfIntroduce"}),Object(u.a)("hr",null),Object(u.a)("h1",null,"Figmaって？"),Object(u.a)("br",null),Object(u.a)("div",{className:"card-50"},Object(u.a)("img",{className:"image size-50",src:n(12)}),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"最近勢いのあるデザインツール"),Object(u.a)("li",null,"Web版・デスクトップアプリ版がある"),Object(u.a)("li",null,"リアルタイム共同編集やURL共有が強み"))),Object(u.a)("hr",null),Object(u.a)("h1",null,"じゃあFigma Pluginって？"),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"これまでもブラウザの拡張機能やWeb APIはあった"),Object(u.a)("li",null,"Figmaのsandbox内で動作するのがPlugin"),Object(u.a)("li",null,"2019年8月にリリースされたばかり")),Object(u.a)("hr",null),Object(u.a)("h1",null,"神々のPlugin"),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"Googleスプレッドシートのデータを一発で埋め込むやーつ",Object(u.a)("br",null),Object(u.a)("a",{href:"https://twitter.com/DavidWilliames/status/1156503669707161600"},"https://twitter.com/DavidWilliames/status/1156503669707161600")),Object(u.a)("li",null,"ディープラーニングで写真から人を消すやーつ",Object(u.a)("br",null),Object(u.a)("a",{href:"https://twitter.com/matamalaortiz/status/1163551129956954113"},"https://twitter.com/matamalaortiz/status/1163551129956954113"))),Object(u.a)("hr",null),Object(u.a)("h1",null,"なんでFigma Pluginに興味を持ったか"),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"TypeScriptで書ける(型がある世界最高)👍"),Object(u.a)("li",null,"業務で使ってるし、最近勢いがある👍"),Object(u.a)("li",null,"動作の仕組みやデバッグ環境が面白い👍")),Object(u.a)("hr",null),Object(u.a)("h1",null,"Pluginの仕組み"),Object(u.a)("img",{className:"image size-70",src:"https://static.figma.com/uploads/04c4c6293fce2a7fe67bccd385ee5ab998705780"}),Object(u.a)("p",null,Object(u.a)("a",s({parentName:"p"},{href:"https://www.figma.com/plugin-docs/how-plugins-run/"}),"How Plugins Run - Figma Developers")),Object(u.a)("hr",null),Object(u.a)("h1",null,"ファイル構成"),Object(u.a)("br",null),Object(u.a)("p",null,"基本的に",Object(u.a)("inlineCode",{parentName:"p"},"code.ts"),"と",Object(u.a)("inlineCode",{parentName:"p"},"ui.html"),"を編集していく"),Object(u.a)("br",null),Object(u.a)("pre",null,Object(u.a)("code",s({parentName:"pre"},{}),".\n├── README.md\n├── code.js\n├── code.ts\n├── figma.d.ts\n├── manifest.json\n├── tsconfig.json\n├── ui.html\n")),Object(u.a)("hr",null),Object(u.a)("img",{className:"image size-40",src:n(13)}),Object(u.a)("hr",null),Object(u.a)("h1",null,"36行で書いたプラグイン(DEMO)"),Object(u.a)("hr",null),Object(u.a)("pre",null,Object(u.a)("code",s({parentName:"pre"},{className:"language-javascript"}),"// ui.html\n<p><input id=\"text\" /> <button id=\"zoom\">Zoom Text</button></p>\n<p id=\"message\"></p>\n<p><button id=\"close\">Close Plugin</button></p>\n\n<script>\n  document.getElementById('zoom').onclick = () => {\n    const textbox = document.getElementById('text')\n    const query = textbox.value\n    parent.postMessage({ pluginMessage: { type: 'zoom', query } }, '*')\n  }\n  document.getElementById('close').onclick = () => {\n    parent.postMessage({ pluginMessage: { type: 'close' } }, '*')\n  }\n  onmessage = event => {\n    const message = document.getElementById('message')\n    message.textContent = event.data.pluginMessage\n  }\n<\/script>\n")),Object(u.a)("hr",null),Object(u.a)("pre",null,Object(u.a)("code",s({parentName:"pre"},{className:"language-javascript"}),"// code.ts\nfigma.showUI(__html__)\n\nfigma.ui.onmessage = msg => {\n  if (msg.type === 'zoom') {\n    const searchNode = figma.currentPage.findOne(node => {\n      return node.type === 'TEXT' && node.characters === msg.query\n    })\n    \n    if (searchNode) {\n      figma.viewport.scrollAndZoomIntoView([searchNode])\n      figma.ui.postMessage('お探しのテキストが見つかりました👍')\n    } else {\n      figma.ui.postMessage('お探しのテキストは見つかりませんでした👎')\n    }\n  } else if (msg.type === 'close') {\n    figma.closePlugin()\n  }\n}\n")),Object(u.a)("hr",null),Object(u.a)("h1",null,"発展として..."),Object(u.a)("br",null),Object(u.a)("p",null,"普段のWeb開発のスキルがゴリゴリ使えて夢が広がる✨"),Object(u.a)("br",null),Object(u.a)("ul",{className:"flexblock activity"},Object(u.a)("li",null,"ビルドツールを使って複数ファイル構成"),Object(u.a)("li",null,"ReactやVueで複雑なUIを構成"),Object(u.a)("li",null,"外部APIとのコラボレーション")),Object(u.a)("hr",null),Object(u.a)("h1",null,"ありがとうございました"),Object(u.a)("hr",null),Object(u.a)("h1",null,"参考にさせていただいたもの"),Object(u.a)("br",null),Object(u.a)("ul",null,Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",s({parentName:"li"},{href:"https://www.figma.com/plugin-docs/intro/"}),"introduction - Figma Developers")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",s({parentName:"li"},{href:"https://github.com/figma/plugin-samples"}),"figma/plugin-samples")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",s({parentName:"li"},{href:"https://note.mu/fjkn/n/n125c25962ba6"}),"FigmaにPluginがついに来たのでよさそうなものをご紹介")),Object(u.a)("li",{parentName:"ul"},Object(u.a)("a",s({parentName:"li"},{href:"https://speakerdeck.com/takanorip/making-figma-plugins-with-typescript"}),"Figma Pluginを作ろう！"))))}g.isMDXComponent=!0}},[[16,5,6]],[0,8]]);