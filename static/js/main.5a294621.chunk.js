(this["webpackJsonpspelling-bee"]=this["webpackJsonpspelling-bee"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(9),a=c.n(r),i=(c(14),c(15),c(7)),s=c(5),o=(c(16),c(17),c(4)),l=c.n(o),u=c(0),j=function(e){var t=e.letter,c=e.onClick,n=e.isRequired;return Object(u.jsx)("button",{className:"Letter",onClick:c,children:Object(u.jsx)("div",{className:l()("Letter-hex",{"Letter-hex--isRequired":n}),children:Object(u.jsx)("span",{className:"Letter-letter",children:t})})})},d=c(8),b=(c(19),function(e){return Object(u.jsx)("button",Object(d.a)(Object(d.a)({className:"Button"},e),{},{children:e.children}))}),h="abcdefghijklmnopqrstuvwxyz",f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),o=Object(i.a)(a,2),d=o[0],f=o[1];Object(n.useEffect)((function(){for(var e=[],t=1;t<=7;t++){var c="";do{c=h[Math.floor(Math.random()*h.length)]}while(e.includes(c));e.push(c)}f(e)}),[]);var p=function(){return r(c.slice(0,-1))};return Object(u.jsxs)("div",{className:"Board",onKeyDown:function(e){"Backspace"===e.key?p():String.fromCharCode(e.keyCode).match(/([A-Z]|[a-z])/g)&&r("".concat(c).concat(e.key))},tabIndex:"-1",children:[Object(u.jsx)("div",{className:"Board-inputWrapper",children:Object(u.jsx)("span",{className:"Board-input",children:Object(s.a)(c).map((function(e,t){return Object(u.jsx)("span",{className:l()("Board-inputLetter",{"Board-inputLetter--invalid":!d.includes(e.toLowerCase()),"Board-inputLetter--required":e===d[0]}),children:e},"".concat(e,"-").concat(t))}))})}),Object(u.jsx)("div",{className:"Board-cells",children:d.map((function(e,t){return Object(u.jsx)(j,{isRequired:0===t,letter:e,onClick:function(){return r("".concat(c).concat(e))}},"".concat(e,"-").concat(t))}))}),Object(u.jsxs)("div",{className:"Board-actions",children:[Object(u.jsx)(b,{onClick:function(){f([d[0]].concat(Object(s.a)(function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[c],e[c]=n}return Object(s.a)(e)}(d.slice(1)))))},children:"Shuffle"}),Object(u.jsx)(b,{onClick:p,children:"Delete"}),Object(u.jsx)(b,{onClick:function(){return r("")},children:"Clear"})]})]})};var p=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App-title",children:"Spelling Bee"}),Object(u.jsx)("p",{className:"App-subtitle",children:"A NYT Spelling Bee remake, just for fun!"}),Object(u.jsx)(f,{})]})},O=document.getElementById("root");a.a.render(Object(u.jsx)(n.StrictMode,{children:Object(u.jsx)(p,{})}),O)}],[[20,1,2]]]);
//# sourceMappingURL=main.5a294621.chunk.js.map