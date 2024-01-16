(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[18],{1250:function(e,t,c){"use strict";var a=c(31),n=c(42);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(c(0)),s=(0,a(c(43)).default)(o.createElement("path",{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"}),"AddAPhoto");t.default=s},1309:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c(3),o=c(2),s=c.n(o),r=c(0),i=c(83),l=c(79),u=c(35),d=c(758),j=c(755),h=c(91),b=c(126),f=c(1250),O=c.n(f),m=c(505),g=c.n(m),p=c(507),x=c.n(p),v=c(513),w=c(412),C=c(506),N=c(227),k=c(33),y=c(52),L=c(14),S=c(18),z=c(92),P=c(32),E=c(1),I=function(e){var t=e.userName,c=e.image,o=e.userColor,f=e.logo,m=e.showLoginIcon,p=e.urlSuffix,I=Object(l.a)(),q=Object(N.b)(),B=Object(i.h)(),H=Object(k.b)(),M=Object(v.a)().width,V=Object(z.l)(),T=Object(P.a)(),A=Object(r.useState)(null),D=Object(n.a)(A,2),J=D[0],R=D[1],W=Object(r.useState)(!1),_=Object(n.a)(W,2),F=_[0],U=_[1],G=Object(r.useState)("#qr"===window.location.hash),K=Object(n.a)(G,2),Q=K[0],X=K[1],Y=f&&"data:".concat(f.type,";base64,").concat(f.code);Object(r.useEffect)((function(){var e=!0;return e&&c&&Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.next=3,Object(S.c)().ref("profiles/".concat(c)).getDownloadURL();case 3:t=e.sent,R(t),setTimeout((function(){return U(!1)}),1e3);case 6:case"end":return e.stop()}}),e)})))(),function(){e=!1}}),[]),Object(r.useEffect)((function(){var e=function(){X("#qr"===window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]);var Z=function(e){e.stopPropagation(),B.push("/picture")},$=function(){B.push("/logo")};return Object(E.jsxs)(u.a,{className:V.container,children:[m&&Object(E.jsxs)(u.a,{display:"flex",alignItems:"center",className:V.loggedoutRightMenu,children:[Object(E.jsx)(b.a,{edge:"end","aria-label":"account of current user","aria-controls":"qr-menu","aria-haspopup":"true",onClick:function(){window.location.hash="#qr"},color:"inherit",children:Object(E.jsx)(y.s,{fill:I.palette.background.default})}),Object(E.jsx)(b.a,{edge:"end","aria-label":"Login",onClick:function(){B.push(L.p)},color:"inherit",className:V.loginIconButton,children:Object(E.jsx)(x.a,{})})]}),Object(E.jsx)(w.a,{profileType:"social",userColor:o}),Object(E.jsxs)(u.a,{className:"".concat(V.businessContent," ").concat(c?V.headerWithImage:V.headerWithOutImage),style:{maxHeight:M/2,backgroundColor:!F&&c?"transparent":o},onClick:function(e){return"edit"!==q.mode||Z(e)},children:[J&&Object(E.jsx)("img",{src:J,alt:t,className:"".concat(V.image," ").concat(!c||c&&F?V.placeholderImage:"")}),c&&F&&Object(E.jsx)(j.a,{size:30,className:V.bannerLoadingProgress}),"edit"===q.mode&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(u.a,{className:V.placeholderContainer,children:Object(E.jsx)(h.a,{color:"secondary",onClick:function(e){return Z(e)},className:T.editModeButtonCircle,children:Object(E.jsx)(O.a,{style:{fontSize:"1.2rem"}})})}),Object(E.jsx)(u.a,{className:V.placeholderContainerTheme,children:Object(E.jsx)(h.a,{color:"secondary",onClick:function(e){return function(e){e.stopPropagation(),B.push("/settings/theme")}(e)},className:T.editModeButtonCircle,children:Object(E.jsx)(g.a,{style:{fontSize:"1.4rem"}})})})]})]}),Object(E.jsxs)(u.a,{className:V.cardLogo,onClick:function(){return"edit"!==q.mode||$()},children:[Object(E.jsx)(d.a,{alt:t,src:Y||"/assets/images/avatar.svg",className:"".concat(V.viewCardLogo," ").concat(V.viewCardBusinessLogo," ").concat(Y?"":V.logoPlaceholder," ").concat(f&&"square"===f.style?V.businessSquareLogo:"")}),"edit"===q.mode&&Object(E.jsx)(u.a,{className:V.logoPlaceholderContainer,children:Object(E.jsx)(h.a,{color:"secondary",onClick:function(){return $()},className:T.editModeButtonCircle,children:Object(E.jsx)(O.a,{style:{fontSize:"1.2rem"}})})})]}),Q&&!H.user&&Object(E.jsx)(C.a,{hideButtons:!0,closeDialog:function(){window.history.back()},dialogOpen:Q,urlSuffix:p,userColor:o})]})};I.defaultProps={userName:null,image:null,userColor:null,logo:null,showLoginIcon:!1,urlSuffix:null},t.default=I}}]);