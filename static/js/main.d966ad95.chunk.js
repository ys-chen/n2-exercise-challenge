(this["webpackJsonpn2-exercise-challenge"]=this["webpackJsonpn2-exercise-challenge"]||[]).push([[0],{26:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(17),a=c.n(s),i=(c(26),c(20)),l=c(2),o=c(0);var j=function(){return Object(o.jsx)("div",{children:"Diary"})};var u=function(){return Object(o.jsx)("div",{children:"Record"})},d=c(18),b=c(7),h=c(13),O=c.n(h),x=c(19),m=function(){var e=Object(x.a)(O.a.mark((function e(){var t,c,n,r,s=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch.apply(void 0,s);case 2:return c=e.sent,e.next=5,c.json();case 5:if("fail"!==(null===(n=e.sent)||void 0===n||null===(t=n.response)||void 0===t?void 0:t.result)){e.next=9;break}throw r=n.response.message,new Error(r);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){var t="https://script.google.com/macros/s/AKfycbwCyqKtYQLS01kuRsciL3E03-Tl-Y_0ZwDWHV_u_WuPiUllwSzpdyTC6lmovHyNAfla/exec";return e&&(t=function(e,t){for(var c=new URLSearchParams,n=0,r=Object.entries(t);n<r.length;n++){var s=Object(b.a)(r[n],2),a=s[0],i=s[1];void 0!==i&&c.set(a,i)}return"".concat(e,"?").concat(c.toString())}(t,e)),m(t,{method:"POST"})};c(29);var f=function(){return Object(o.jsx)("div",{className:"lds-dual-ring"})};c(30);var v=function(e){var t=e.modalState,c=e.closeModal,n=e.children;if("none"===t)return null;var r=!["none","loading","custome"].includes(t);return Object(o.jsxs)("div",{className:"rpgui-content fullScreen",children:[Object(o.jsx)("div",{className:"shadow"}),Object(o.jsxs)("div",{className:"rpgui-container framed modal ".concat("custome"!==t?"alignCenter":""),children:["loading"===t&&Object(o.jsx)(f,{}),"custome"===t&&n,r&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:t}),Object(o.jsx)("button",{className:"rpgui-button autoHeight",type:"button",onClick:c,children:Object(o.jsx)("p",{children:"\u78ba\u5b9a"})})]})]})]})};c(31);var g=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(b.a)(s,2),i=a[0],l=a[1],j=function(){var e=Object(n.useState)("none"),t=Object(b.a)(e,2),c=t[0],r=t[1];return[c,function(){r("none")},function(){r("loading")},function(e){r(e||"custome")}]}(),u=Object(b.a)(j,4),h=u[0],O=u[1],x=u[2],f=u[3],g=Object(n.useRef)(null);return Object(n.useEffect)((function(){m("".concat("https://script.google.com/macros/s/AKfycbwXFdcsmA5c_-O30lfN5Ks3OGYboXzrH09gdnwGUCUXXiUe_TKfPKmCYo2QZIPrO4LQ/exec","?request=memberList")).then((function(e){r(e)}))}),[]),Object(n.useEffect)((function(){c.length>0&&g&&RPGUI.create(g.current,"dropdown")}),[c.length]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("button",{className:"rpgui-button autoHeight boardMargin",type:"button",children:Object(o.jsx)("p",{children:"No Game No Life"})}),Object(o.jsxs)("div",{className:"scroll",children:[Object(o.jsx)("div",{className:"scrollHead"}),Object(o.jsx)("div",{className:"scrollMid",children:Object(o.jsxs)("form",{onSubmit:function(e){x();var t=function(e){var t,c=new FormData(e),n={},r=Object(d.a)(c.entries());try{for(r.s();!(t=r.n()).done;){var s=Object(b.a)(t.value,2),a=s[0],i=s[1];n[a]=i}}catch(l){r.e(l)}finally{r.f()}return n}(e.target);p(t).then((function(e){var c=e.result,n=e.message;l(t.username),f("success"===c?void 0:n)})).catch((function(e){f(null===e||void 0===e?void 0:e.message)})),e.preventDefault()},children:[Object(o.jsxs)("div",{className:"noRpgFont",children:[Object(o.jsx)("h1",{children:"\u5192\u96aa\u5951\u7d04"}),Object(o.jsx)("p",{children:"\u70ba\u7dad\u8b77 Habitica \u4e4b\u548c\u5e73\uff0c\u6211\u9858\u52a0\u5165\u9a0e\u58eb\u5718\u91ce\u5916\u8a13\u7df4\u968a\u3002"}),Object(o.jsx)("p",{children:"\u9810\u8a08\u8a13\u7df4\u5167\u5bb9\u70ba"}),Object(o.jsx)("textarea",{name:"exercise",placeholder:"\u6bcf\u5468\u4e00\u3001\u4e09 20:30pm \u4f7f\u7528\u5065\u8eab\u74b0\u904b\u52d5 30 \u5206\u9418",required:!0}),Object(o.jsx)("p",{children:"\u70ba\u9054\u8a13\u7df4\u76ee\u6a19\uff0c\u6211\u9810\u5148\u6e96\u5099\u7684\u884c\u52d5\u662f"}),Object(o.jsx)("textarea",{name:"prepare",placeholder:"\u5148\u5728\u65c1\u5099\u597d\u904b\u52d5\u8932\u3001\u5c07\u5065\u8eab\u74b0\u653e\u5728\u986f\u773c\u7684\u5730\u65b9",required:!0}),Object(o.jsx)("p",{children:"\u82e5\u7d00\u5f8b\u6563\u6f2b\u6216\u56e0\u4e0d\u53ef\u6297\u529b\u56e0\u7d20\uff0c\u7121\u6cd5\u9054\u6210\u8a13\u7df4\u4efb\u52d9\u6642\uff0c\u6211\u5c07\u4ee5"}),Object(o.jsx)("textarea",{name:"remedy",placeholder:"\u7761\u524d\u4f38\u5c55\u64cd 10 \u5206\u9418 (10 \u500b\u4ef0\u81e5\u8d77\u5750)",required:!0}),Object(o.jsx)("p",{children:"\u9032\u884c\u88dc\u6551\uff0c\u52d9\u5fc5\u5354\u52a9\u9a0e\u58eb\u5718\u9054\u6210\u4efb\u52d9\u3002"}),Object(o.jsx)("label",{children:Object(o.jsx)("strong",{children:"\u7f72\u540d"})})]}),Object(o.jsx)("select",{name:"username",ref:g,defaultValue:"",require:!0,children:c.map((function(e){var t=e.username;return Object(o.jsx)("option",{value:t,children:t},t)}))}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"centerBlock noRpgFont",children:Object(o.jsx)("button",{className:"rpgui-button autoHeight",type:"submit",children:Object(o.jsx)("strong",{children:"\u52a0\u5165\u9a0e\u58eb\u5718"})})})]})}),Object(o.jsx)("div",{className:"scrollFoot"})]}),Object(o.jsxs)(v,{modalState:h,closeModal:O,children:[Object(o.jsxs)("p",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:i}),Object(o.jsx)("span",{children:" \u7684\u52a0\u5165\uff0c\u5fc5\u5b9a\u6703\u6210\u70ba\u4e00\u5927\u52a9\u529b\uff01"})]}),Object(o.jsx)("div",{children:"\u671f\u5f85\u4f60\u7684\u8868\u73fe\u3002"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("div",{children:"\u5225\u5fd8\u4e86\u6bcf\u5929\u8a13\u7df4\u5f8c\u8981\u9032\u884c\u9032\u5ea6\u56de\u5831\uff0c"}),Object(o.jsx)("div",{children:"\u665a\u9ede\u6703\u518d\u767c\u5e03\u56de\u5831\u7684\u7d30\u7bc0\u3002"})]}),Object(o.jsx)("button",{className:"rpgui-button autoHeight",type:"button",onClick:O,children:Object(o.jsx)("p",{children:"\u78ba\u5b9a"})})]})]})};c(32);var N=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"oldMapBg"}),Object(o.jsx)("div",{className:"rpgui-content",children:Object(o.jsx)(i.a,{basename:"/n2-exercise-challenge",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/register",children:Object(o.jsx)(g,{})}),Object(o.jsx)(l.a,{path:"/record",children:Object(o.jsx)(u,{})}),Object(o.jsx)(l.a,{path:"/diary",children:Object(o.jsx)(j,{})})]})})})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),y()}},[[38,1,2]]]);
//# sourceMappingURL=main.d966ad95.chunk.js.map