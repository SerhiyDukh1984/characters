"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[706],{3323:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(3504),s="Footer_section__VNVEN",c="Footer_text__27sON",o="Footer_link__3Ie8d",r=n(184),i=function(){return(0,r.jsxs)("section",{className:s,children:[(0,r.jsx)("p",{className:c,children:"\xa9 All rights reserved, 2022"}),(0,r.jsx)(a.rU,{to:"/author",className:o,children:"Author"})]})}},6574:function(t,e,n){n.d(e,{Z:function(){return d}});var a=n(8152),s=n(6258),c=n(2791),o=n(6871),r="LoadButtons_section__6DmG8",i="LoadButtons_button__Bmwdu",u="LoadButtons_load__zLp2j",l="LoadButtons_page__7Qrn3",f=n(184),d=function(t){var e=t.setNewEpisodes,n=t.newPage,d=t.setNewLocations,h=t.setNewCharacters,_=(0,o.TH)(),m=(0,c.useState)(n),x=(0,a.Z)(m,2),g=x[0],p=x[1],j=(0,c.useState)(null),N=(0,a.Z)(j,2),v=N[0],C=N[1],k=(0,c.useState)(1),L=(0,a.Z)(k,2),Z=L[0],w=L[1];(0,c.useEffect)((function(){p(n)}),[n]);return(0,f.jsxs)("section",{className:r,children:[(0,f.jsxs)("p",{className:l,children:["Page: ",Z]}),(0,f.jsxs)("div",{className:u,children:[v&&(0,f.jsx)("button",{type:"button",className:i,onClick:function(t){t.preventDefault(),"/characters/"===_.pathname?(0,s.ql)(v).then((function(t){h(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z-1)})).catch((function(t){return console.log(t.message)})):"/locations/"===_.pathname?(0,s.JC)(v).then((function(t){d(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z-1)})).catch((function(t){return console.log(t.message)})):(0,s.Jy)(v).then((function(t){e(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z-1)})).catch((function(t){return console.log(t.message)}))},children:"Go back"}),g&&(0,f.jsx)("button",{type:"button",className:i,onClick:function(t){t.preventDefault(),"/characters/"===_.pathname?(0,s.ql)(g).then((function(t){h(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z+1)})).catch((function(t){return console.log(t.message)})):"/locations/"===_.pathname?(0,s.JC)(g).then((function(t){d(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z+1)})).catch((function(t){return console.log(t.message)})):(0,s.Jy)(g).then((function(t){e(t.data.results),p(t.data.info.next),C(t.data.info.prev),w(Z+1)})).catch((function(t){return console.log(t.message)}))},children:"Load more"})]})]})}},5706:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var a=n(3323),s=n(8152),c=n(6258),o=n(9487),r=n(1916),i=n(6574),u=n(2791),l=n(6871),f="CharacterList_section__JzXfb",d="CharacterList_list__KjlF9",h="CharacterList_image__xJYRQ",_="CharacterList_title__d6Mmc",m="CharacterList_item__qw1vt",x="CharacterList_card__WtKKA",g=n(184),p=function(){var t=(0,l.s0)(),e=(0,u.useState)({}),n=(0,s.Z)(e,2),a=n[0],p=n[1],j=(0,u.useState)(""),N=(0,s.Z)(j,2),v=N[0],C=N[1],k=(0,u.useState)({}),L=(0,s.Z)(k,2),Z=L[0],w=L[1],b=(0,u.useState)(""),F=(0,s.Z)(b,2),S=F[0],B=F[1],J=Object.keys(a);return(0,u.useEffect)((function(){(0,c.ql)().then((function(t){p(t.data.results),C(t.data.info.next)})).catch((function(t){return console.log(t.message)}))}),[Z]),(0,u.useEffect)((function(){t("/characters/".concat(S))}),[S,t]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.Z,{goBack:function(t){w(t)}}),(0,g.jsx)(r.Z,{setFilteredCharacters:function(t){p(t)}}),0!==J.length&&(0,g.jsxs)("section",{className:f,children:[(0,g.jsx)("ul",{className:d,children:a.map((function(t){return(0,g.jsx)("li",{onClick:function(){B(t.id)},className:m,children:(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)("img",{src:t.image,alt:"user",className:h}),(0,g.jsx)("h1",{className:_,children:t.name})]})},t.id)}))}),J.length>=20&&(0,g.jsx)(i.Z,{setNewCharacters:function(t){p(t)},newPage:v})]})]})},j=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{}),(0,g.jsx)(a.Z,{})]})}}}]);
//# sourceMappingURL=706.cf049ec3.chunk.js.map