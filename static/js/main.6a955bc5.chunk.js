(this["webpackJsonpspelling-bee"]=this["webpackJsonpspelling-bee"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(8),r=c.n(a),l=(c(14),c(15),c(5)),s=c(6),i=(c(16),c(17),c(0)),o=function(e){var t=e.letter,c=e.onClick;return Object(i.jsx)("button",{className:"Cell plain",onClick:c,children:Object(i.jsx)("div",{className:"Cell-hex",children:Object(i.jsx)("span",{className:"Cell-letter",children:t})})})},j=c(7),u=(c(19),function(e){return Object(i.jsx)("button",Object(j.a)(Object(j.a)({className:"Button"},e),{},{children:e.children}))}),d=c(9),b=c.n(d),h=["h","e","l","l","o","w","o","r","l","d"],p=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(h),j=Object(l.a)(r,2),d=j[0],p=j[1],O=function(){return a(c.slice(0,-1))};return Object(i.jsxs)("div",{className:"Board",onKeyDown:function(e){"Backspace"===e.key?O():String.fromCharCode(e.keyCode).match(/([A-Z]|[a-z])/g)&&a("".concat(c).concat(e.key))},tabIndex:"-1",children:[Object(i.jsx)("div",{className:"Board-inputWrapper",children:Object(i.jsx)("span",{className:"Board-input",children:Object(s.a)(c).map((function(e,t){return Object(i.jsx)("span",{className:b()("Board-inputLetter",{"Board-inputLetter--invalid":!d.includes(e)}),children:e},"".concat(e,"-").concat(t))}))})}),Object(i.jsx)("div",{className:"Board-cells",children:d.map((function(e,t){return Object(i.jsx)(o,{letter:e,onClick:function(){return a("".concat(c).concat(e))}},"".concat(e,"-").concat(t))}))}),Object(i.jsxs)("div",{className:"Board-actions",children:[Object(i.jsx)(u,{onClick:function(){return p(function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[c],e[c]=n}return Object(s.a)(e)}(d))},children:"Shuffle"}),Object(i.jsx)(u,{onClick:O,children:"Delete"}),Object(i.jsx)(u,{onClick:function(){return a("")},children:"Clear"})]})]})};function O(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{className:"App-title",children:"Spelling Bee"}),Object(i.jsx)("p",{className:"App-subtitle",children:"A NYT Spelling Bee remake, just for fun!"}),Object(i.jsx)(p,{})]})}var f=document.getElementById("root");r.a.render(Object(i.jsx)(n.StrictMode,{children:Object(i.jsx)(O,{})}),f)}],[[20,1,2]]]);
//# sourceMappingURL=main.6a955bc5.chunk.js.map