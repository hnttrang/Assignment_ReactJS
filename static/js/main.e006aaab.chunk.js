(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),a=c(6),i=c.n(a),s=(c(12),c(13),c.p+"static/media/logo.3cc0528b.svg"),o=c(2),r=c(3),u=c.p+"static/media/icon-dollar.9f9be353.svg",j=c.p+"static/media/icon-person.65bfd204.svg",b=(c(14),c(0)),p=function(e){var t=e.className,c=e.value,n=e.onClick;return Object(b.jsx)("button",{className:t,onClick:n,children:c})},d=c(5),O=c.n(d),h=c(7),x=Object(n.createContext)();var f=function(e){var t=e.children,c=Object(n.useState)(!1),l=Object(r.a)(c,2),a=l[0],i=l[1],s=Object(n.useState)(!1),u=Object(r.a)(s,2),j=u[0],p=u[1],d=Object(n.useState)(!1),f=Object(r.a)(d,2),m=f[0],v=(f[1],Object(n.useState)({total:"0.00",amount:"0.00"})),g=Object(r.a)(v,2),C=g[0],N=g[1],S=Object(n.useState)({tip:null,bill:null,people:null}),k=Object(r.a)(S,2),F=k[0],y=k[1];Object(n.useEffect)((function(){p(a)}),[a,F]);var I=function(){var e=Object(h.a)(O.a.mark((function e(t){var c,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("click"),e.prev=1,console.log(F),e.next=5,fetch("https://plitter-server.vercel.app/api/calculate?bill=".concat(F.bill,"&people=").concat(F.people,"&tipPercent=").concat(F.tip));case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,N({amount:n.amount.toFixed(2),total:n.total.toFixed(2)}),console.log(C),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("catch error");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),T={setValueValid:i,isCalc:j,isReset:m,setIsCalc:p,validateInput:function(e){null==e.tip||null==e.bill||e.people;i(!(null==e.tip||null==e.bill||null==e.people)),y(Object(o.a)(Object(o.a)({},F),{},{tip:e.tip,bill:e.bill,people:e.people}))},result:C,calculate:I};return Object(b.jsx)(x.Provider,{value:T,children:t})};c(17);var m=function(){var e=Object(n.useState)({tip:null,bill:null,people:null}),t=Object(r.a)(e,2),c=t[0],l=t[1],a=Object(n.useContext)(x).validateInput,i=[[5,10,15],[20,25]];return Object(n.useEffect)((function(){a(c)}),[l,c]),Object(b.jsx)("div",{className:"input",children:Object(b.jsxs)("form",{id:"input-form",onSubmit:function(e){},children:[Object(b.jsx)("p",{children:"Bill"}),Object(b.jsxs)("div",{className:"input-bar",children:[Object(b.jsx)("img",{src:u,alt:"icon-dollar"}),Object(b.jsx)("input",{type:"number",name:"bill",id:"bill",placeholder:"0",onChange:function(e){l(Object(o.a)(Object(o.a)({},c),{},{bill:parseFloat(e.target.value)}))}})]}),Object(b.jsx)("p",{children:"Select tip %"}),Object(b.jsxs)("div",{className:"tip-pad",children:[i.flat().map((function(e,t){return Object(b.jsx)(p,{className:e==c.tip?"percent-button percent-button__target":"percent-button",value:e,onClick:function(t){t.preventDefault(),l(Object(o.a)(Object(o.a)({},c),{},{tip:parseFloat(e)}))}},t)})),Object(b.jsx)("input",{id:"cus-tip",className:i.flat().includes(c.tip)?"percent-button":"percent-button percent-button__target",placeholder:"CUSTOM",type:"number",onClick:function(e){l(Object(o.a)(Object(o.a)({},c),{},{tip:parseFloat(e.target.value)}))},onChange:function(e){l(Object(o.a)(Object(o.a)({},c),{},{tip:parseFloat(e.target.value)}))}})]}),Object(b.jsx)("p",{children:"Number of People"}),Object(b.jsxs)("div",{className:"input-bar",children:[Object(b.jsx)("img",{src:j,alt:"icon-person"}),Object(b.jsx)("input",{type:"number",id:"people",placeholder:"0",onChange:function(e){l(Object(o.a)(Object(o.a)({},c),{},{people:parseInt(e.target.value)}))}})]})]})})},v=(c(18),function(e){var t=Object(n.useContext)(x),c=t.isCalc,l=(t.isReset,t.result),a=t.calculate;return Object(b.jsxs)("section",{className:"right-side",children:[Object(b.jsxs)("div",{class:"display",children:[Object(b.jsxs)("h5",{children:["Tip Amount ",Object(b.jsx)("br",{})," ",Object(b.jsx)("p",{children:"/ people"})]}),Object(b.jsx)("h1",{id:"tipAmount",children:l.amount})]}),Object(b.jsxs)("div",{className:"display",children:[Object(b.jsxs)("h5",{children:["Total ",Object(b.jsx)("br",{})," ",Object(b.jsx)("p",{children:"/ people"})]}),Object(b.jsx)("h1",{id:"total",children:l.total})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("button",{children:"RESET"}),Object(b.jsx)("button",{type:"button",disabled:!c,onClick:function(e){e.preventDefault(),a(e)},children:"CAL"})]})]})}),g="0.00",C="0.00";var N=function(){return Object(b.jsxs)("body",{children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("img",{src:s})}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(m,{}),Object(b.jsx)(v,{total:C,amount:g})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,l=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),l(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(f,{children:Object(b.jsx)(N,{})})}),document.getElementById("root")),S()}],[[19,1,2]]]);
//# sourceMappingURL=main.e006aaab.chunk.js.map