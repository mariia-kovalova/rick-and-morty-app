"use strict";(self.webpackChunkrick_and_morty_app=self.webpackChunkrick_and_morty_app||[]).push([[841],{5841:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r=t(2872),o=t(7341),i=t(8683);function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c,s,u,l,d,f,p,h,g=t(168),x=t(4709),b=x.Z.button(c||(c=(0,g.Z)([""]))),m=t(3329),j=["children"],v=function(n){var e=n.children,t=a(n,j);return(0,m.jsx)(b,(0,i.Z)((0,i.Z)({type:"button"},t),{},{children:e}))},y=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(v,{children:"Random Character"})})},Z=function(){return(0,m.jsx)("div",{children:"Filter"})},w=t(9439),k=t(3515),P=t(1087),C="Alive",F="Dead",z=function(n){var e=n.theme;switch(n.marker){case C:return e.alive;case F:return e.dead;default:return e.unknown}},O=(0,x.Z)(P.rU)(s||(s=(0,g.Z)(["\n  position: relative;\n\n  display: block;\n\n  color: inherit;\n  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 6px;\n"]))),L=x.Z.div(u||(u=(0,g.Z)(["\n  position: absolute;\n  top: 26%;\n  left: 6%;\n\n  width: 12px;\n  height: 12px;\n\n  border-radius: 50%;\n  background-color: ",";\n\n  ::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 18px;\n    height: 18px;\n    background-color: ",";\n    opacity: 0.5;\n    border-radius: 50%;\n  }\n"])),z,z),A=x.Z.img(l||(l=(0,g.Z)(["\n  border-radius: inherit;\n"]))),_=x.Z.div(d||(d=(0,g.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  padding: 12px 16px;\n\n  border-radius: 0 0 6px 6px;\n  background-color: ",";\n"])),(function(n){return n.theme.accentTransparent})),E=x.Z.p(f||(f=(0,g.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1.5;\n  letter-spacing: 0.15px;\n  padding-left: 22px;\n"]))),S=x.Z.p(p||(p=(0,g.Z)(["\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: 0.25px;\n"]))),q=x.Z.div(h||(h=(0,g.Z)(["\n  position: absolute;\n  right: 5%;\n  bottom: 7%;\n  z-index: 1;\n\n  font-weight: 700;\n  font-size: 40px;\n  line-height: 1.5;\n  letter-spacing: 0.15px;\n"]))),H=t(2791),M=t(974);var $=(0,M.Z)("div",{target:"e6bfxff1"})({name:"1ixo804",styles:"position:absolute;top:-34%;left:7.5%;transform:translateX(-50%);z-index:1;background-color:#333;color:#fff;padding:8px;border-radius:4px;font-size:14px;line-height:1.4;white-space:nowrap;opacity:0;transition:opacity 0.2s ease-in-out;&::before{content:'';position:absolute;width:0;height:0;border-style:solid;border-width:6px 6px 0 6px;border-color:#333 transparent transparent transparent;top:100%;left:50%;transform:translateX(-50%);}"}),W=(0,M.Z)("div",{target:"e6bfxff0"})("&:hover+",$,"{opacity:1;}"),I=function(n){var e=n.text,t=n.children,r=(0,H.useState)(!1),o=(0,w.Z)(r,2),i=o[0],a=o[1],c=function(){a(!i)};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(W,{onMouseEnter:c,onMouseLeave:c,children:t}),i&&(0,m.jsx)($,{"aria-label":"Character name",children:e})]})},X=function(n){if(n.length<=13)return n;var e=n.slice(0,10);return"".concat(e,"...")},B=function(n){if(n.length<=10)return n;var e=n.slice(0,5);return"".concat(e,"...")},D=function(n){var e=n.id,t=n.name,r=n.species,o=n.gender,i=n.status,a=n.image;return(0,m.jsxs)(O,{to:k.LE,children:[(0,m.jsx)(A,{src:a,width:"289",height:"289",alt:t,loading:"lazy"}),(0,m.jsxs)(_,{children:[(0,m.jsx)(I,{text:i,children:(0,m.jsx)(L,{marker:i})}),(0,m.jsx)(E,{children:X(t)}),(0,m.jsxs)(S,{children:[B(r)," | ",o]}),(0,m.jsxs)(q,{children:["#",e]})]})]})},R=t(9434),T=function(n){return n.characters.info},U=function(n){return n.characters.items},G=function(n){return n.characters.isLoading},J=function(n){return n.characters.error},K=t(1989),N=t(885);var Q,V,Y=(0,M.Z)("ul",{target:"e1waeyfh3"})({name:"xb22ao",styles:"display:flex;align-items:center;justify-content:center;gap:16px"}),nn=(0,M.Z)("button",{target:"e1waeyfh2"})("position:relative;padding:16px;border-radius:50%;background-color:",(function(n){return n.theme.bgPrimary}),";transition:backgrond-color 250ms ",(function(n){return n.theme.cubic}),";&:hover,&:focus{background-color:",(function(n){return n.theme.bgcHoverFocus}),";}&:disabled:hover,&:disabled:focus{cursor:auto;background-color:transparent;}"),en=(0,M.Z)("button",{target:"e1waeyfh1"})("position:relative;z-index:1;background-color:transparent;color:",(function(n){return n.currentPage?"#fff":"inherit"}),";&:hover,&:focus{color:",(function(n){return n.theme.bgPrimary}),";}&::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);z-index:-1;padding:16px;border-radius:50%;background-color:",(function(n){var e=n.theme;return n.currentPage?e.paginationAccent:e.bgPrimary}),";transition:backgrond-color 250ms ",(function(n){return n.theme.cubic}),";}&:hover::before,&:focus::before{background-color:",(function(n){return n.theme.bgcHoverFocus}),";}"),tn=(0,M.Z)("svg",{target:"e1waeyfh0"})("position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:1px;fill:transparent;stroke:",(function(n){return n.theme.paginationAccent}),";transition:stroke 100ms ",(function(n){return n.theme.cubic}),";",nn,":disabled &{stroke:",(function(n){return n.theme.bgcHoverFocus}),";}",nn,":hover &,",nn,":focus &{stroke:",(function(n){return n.theme.bgPrimary}),";}",nn,":disabled:hover &,",nn,":disabled:focus{stroke:",(function(n){return n.theme.bgcHoverFocus}),";}"),rn=t(3433),on=function(n){var e=n.page,t=n.totalPages,r=n.onPageChange,o=(0,H.useState)([]),i=(0,w.Z)(o,2),a=i[0],c=i[1],s=function(n){n!==e&&r(n)};return(0,H.useEffect)((function(){!function(n){var e=n.setLabels,t=n.totalPages,r=n.page;t<=7?e(Array.from({length:t},(function(n,e){return e+1}))):r<=4?e([].concat((0,rn.Z)(Array.from({length:5},(function(n,e){return e+1}))),["",t])):r>t-5?e([1,""].concat((0,rn.Z)(Array.from({length:5},(function(n,e){return t-e})).reverse()))):e([1,"",r-1,r,r+1,"",t])}({setLabels:c,totalPages:t,page:e})}),[e,t]),(0,m.jsxs)(Y,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(nn,{onClick:function(){return s(e-1)},disabled:1===e,type:"button",children:(0,m.jsx)(tn,{width:"20",height:"20",children:(0,m.jsx)("use",{href:"".concat(N.Z,"#icon-arrow-left-small")})})})}),a.map((function(n,t){return(0,m.jsx)("li",{children:"number"===typeof n?(0,m.jsx)(en,{onClick:function(){return s(n)},type:"button",currentPage:e===n,children:n}):(0,m.jsx)("span",{children:"..."})},t)})),(0,m.jsx)("li",{children:(0,m.jsx)(nn,{onClick:function(){return s(e+1)},disabled:e===t,type:"button",children:(0,m.jsx)(tn,{width:"20",height:"20",children:(0,m.jsx)("use",{href:"".concat(N.Z,"#icon-arrow-right-small")})})})})]})},an=function(){return(0,m.jsx)("div",{children:"Loader"})},cn=t(3033),sn=x.Z.ul(Q||(Q=(0,g.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin: 0 auto;\n\n  display: flex;\n  flex-wrap: wrap;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n\n  @media screen and (min-width: ",") {\n    padding-top: 40px;\n    padding-bottom: 40px;\n    gap: 20px;\n  }\n"])),cn.Mq),un=x.Z.li(V||(V=(0,g.Z)(["\n  flex-basis: 100%;\n\n  @media screen and (min-width: ",") {\n    flex-basis: 289px;\n  }\n\n  @media screen and (min-width: ",") {\n    flex-basis: calc((100% - 3 * 20px) / 4);\n  }\n"])),cn.Mq,cn.gv),ln=function(n){var e=n.items,t=n.element;return(0,m.jsx)(sn,{children:e.map((function(n){return(0,m.jsx)(un,{children:(0,m.jsx)(t,(0,i.Z)({},n))},n.id)}))})},dn=function(){var n={info:(0,R.v9)(T),characters:(0,R.v9)(U),isLoading:(0,R.v9)(G),error:(0,R.v9)(J)},e=n.info,t=n.characters,r=n.isLoading,o=n.error,i=(0,H.useState)(1),a=(0,w.Z)(i,2),c=a[0],s=a[1],u=(0,R.I0)();(0,H.useEffect)((function(){u((0,K.ql)(c))}),[u,c]);var l=t.length>0&&!o,d=!r>0&&o,f=!o&&t.length>0&&null!==e&&e.pages>1;return(0,m.jsxs)(m.Fragment,{children:[r&&(0,m.jsx)(an,{}),l&&(0,m.jsx)(ln,{items:t,element:D}),f&&(0,m.jsx)(on,{totalPages:e.pages,onPageChange:s,page:c}),d&&(0,m.jsx)("div",{children:"Oops, something went wrong "})]})},fn=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.$,{children:(0,m.jsx)(o.W,{children:(0,m.jsx)(y,{})})}),(0,m.jsx)(r.$,{children:(0,m.jsx)(o.W,{children:(0,m.jsx)(Z,{})})}),(0,m.jsx)(r.$,{children:(0,m.jsx)(o.W,{children:(0,m.jsx)(dn,{})})})]})},pn=t(6907),hn=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(pn.ql,{children:(0,m.jsx)("title",{children:"Characters"})}),(0,m.jsx)(fn,{})]})}},2872:function(n,e,t){t.d(e,{$:function(){return c}});var r,o=t(168),i=t(4709),a=t(7577),c=i.Z.section(r||(r=(0,o.Z)(["\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  /* &.location-page {\n    background: url(",");\n  } */\n"])),a)},7577:function(n,e,t){n.exports=t.p+"static/media/locationPageBackground.2e23629e09f4e9c0d3f6.png"}}]);
//# sourceMappingURL=841.28f43244.chunk.js.map