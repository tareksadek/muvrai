(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[48],{1289:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c(3),n=c(2),o=c.n(n),l=c(0),r=c(35),i=c(53),b=c(1177),d=c(91),u=c(165),j=c.n(u),f=c(514),O=c(23),m=c(160),h=c(30),x=c(19),g=c(52),k=c(14),p=c(39),N=c(80),T=c(20),C=c(29),y=c(32),S=c(27),v=c(246),w=c(1),L=function(e){var t=e.closeDialog,c=e.dialogOpen,n=e.onSetNotification,u=e.userId,L=Object(C.b)(),B=Object(v.c)(),I=Object(S.b)(),E=Object(S.a)(),D=Object(y.a)(),z=Object(T.b)().languageVars.pages.settings,P=Object(l.useState)(!1),A=Object(s.a)(P,2),F=A[0],J=A[1],U=Object(l.useState)(z.messages.loading.loadingSettings),V=Object(s.a)(U,2),q=V[0],G=V[1],H=Object(l.useState)(!1),K=Object(s.a)(H,2),M=K[0],Q=K[1],R=Object(l.useState)("#000"),W=Object(s.a)(R,2),X=W[0],Y=W[1],Z=Object(l.useState)(!1),$=Object(s.a)(Z,2),_=$[0],ee=$[1],te=Object(l.useState)(null),ce=Object(s.a)(te,2),ae=ce[0],se=ce[1],ne=Object(l.useState)(null),oe=Object(s.a)(ne,2),le=oe[0],re=oe[1],ie=Object(l.useState)(null),be=Object(s.a)(ie,2),de=be[0],ue=be[1],je=Object(l.useState)(!1),fe=Object(s.a)(je,2),Oe=fe[0],me=fe[1],he=Object(l.useState)(null),xe=Object(s.a)(he,2),ge=xe[0],ke=xe[1];Object(l.useEffect)((function(){var e=!0;return e&&u&&Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,J(!0),e.next=4,Object(p.k)(u);case 4:t=e.sent,ke(t),se(t.settings.theme),re(t.settings.layout),ue(t.settings.selectedColor),me(t.defaultLinksToTheme),J(!1),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))(),function(){e=!1}}),[u]);var pe=function(){t()},Ne=function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),J(!0),e.prev=2,G(z.messages.loading.savingSettings),e.next=6,Object(N.i)(u,{theme:ae,selectedColor:de,layout:le});case 6:return e.next=8,Object(p.t)(u,{theme:ae,selectedColor:de,layout:le},Oe);case 8:J(!1),n({message:z.messages.notifications.profileInfoUpdateSuccess,type:"success"}),pe(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),J(!1),n({message:z.messages.notifications.profileInfoUpdateError,type:"error"});case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),Te=function(){se((function(e){return"light"===e?"dark":"light"})),Q(!1)},Ce=function(e){re(e),Q(!1)},ye=ge&&ge.settings&&ge.settings.layout?ge.settings.layout:"social",Se=ge&&ge.settings&&ge.settings.selectedColor.code===L.color.code&&ge.settings.theme===ae&&ye===le&&!_,ve=ge&&!ge.settings||Se||M||F;return Object(w.jsx)(m.a,{open:c,onClose:pe,title:"".concat(ge&&ge.firstName?ge.firstName:""," ").concat(ge&&ge.lastName?ge.lastName:""," Design"),loading:!1,actionButtonOne:Object(w.jsx)(d.a,{color:"secondary",onClick:function(e){return Ne(e)},disabled:ve,className:D.defaultButton,style:{backgroundColor:!ve&&L},children:z.buttons.saveTheme}),children:Object(w.jsx)(r.a,{children:F?Object(w.jsx)(O.a,{loadingText:q}):Object(w.jsxs)(r.a,{children:[Object(w.jsxs)(r.a,{className:"".concat(I.panel),children:[Object(w.jsx)(h.a,{title:z.data.titles.profileLayout}),Object(w.jsxs)(r.a,{className:B.layoutButtonsContainer,children:[Object(w.jsxs)(d.a,{onClick:function(){return Ce("social")},className:"social"===le?B.selectedLayout:"",disabled:F,children:[Object(w.jsx)(g.w,{fill:"#bbb",background:"dark"===ae?"#272727":"#fff",backgroundrev:"dark"===ae?"#eee":"#272727",selectedcolor:de&&de.code&&"social"===le?de.code:"#bbb"}),Object(w.jsx)("span",{className:B.buttonText,children:z.buttons.socialStyleTheme})]}),Object(w.jsxs)(d.a,{onClick:function(){return Ce("basic")},className:"basic"===le?B.selectedLayout:"",disabled:F,children:[Object(w.jsx)(g.d,{fill:"#bbb",background:"dark"===ae?"#272727":"#fff",backgroundrev:"dark"===ae?"#eee":"#272727",selectedcolor:de&&de.code&&"basic"===le?de.code:"#bbb"}),Object(w.jsx)("span",{className:B.buttonText,children:z.buttons.basicStyleTheme})]}),Object(w.jsxs)(d.a,{onClick:function(){return Ce("business")},className:"business"===le?B.selectedLayout:"",disabled:F,children:[Object(w.jsx)(g.g,{fill:"#bbb",background:"dark"===ae?"#272727":"#fff",backgroundrev:"dark"===ae?"#eee":"#272727",selectedcolor:de&&de.code&&"business"===le?de.code:"#bbb"}),Object(w.jsx)("span",{className:B.buttonText,children:z.buttons.businessStyleTheme})]})]})]}),Object(w.jsxs)(r.a,{className:"".concat(I.panel),children:[Object(w.jsx)(h.a,{title:z.data.titles.defaultTheme}),Object(w.jsxs)(r.a,{className:B.themeButtonsContainer,children:[Object(w.jsx)(d.a,{className:"".concat(B.themeButton," ").concat(B.lightThemeButton," ").concat("light"===ae?B.selectedTheme:""),onClick:function(){return Te()},disabled:F,children:Object(w.jsx)(j.a,{})}),Object(w.jsx)(d.a,{className:"".concat(B.themeButton," ").concat(B.darkThemeButton," ").concat("dark"===ae?B.selectedTheme:""),onClick:function(){return Te()},disabled:F,children:Object(w.jsx)(j.a,{})})]})]}),Object(w.jsxs)(r.a,{className:"".concat(I.panel),children:[Object(w.jsx)(h.a,{title:z.data.titles.defaultColor,info:z.data.titles.defaultColorSubtitle}),Object(w.jsx)(r.a,{className:B.colorButtonsContainer,children:k.F.map((function(e){return Object(w.jsx)(d.a,{className:B.colorButton,onClick:function(){return function(e){ue(e),Q(!1)}(e)},style:{backgroundColor:e.code,border:"black"===e.name?"1px solid #fff":"none"},disabled:F,children:de&&de.name===e.name&&Object(w.jsx)(j.a,{})},e.name)}))}),Object(w.jsxs)(r.a,{className:"".concat(B.colorPicker," ").concat(F?B.colorPickerDisabled:""),children:[Object(w.jsx)(h.a,{title:"",info:z.data.titles.defaultColorSubtitleTwo}),Object(w.jsx)(f.a,{color:L.color.code||X,presetColors:k.F.map((function(e){return e.code})),disableAlpha:!0,width:"100%",onChange:function(e){return function(e){Y(e),ue({name:"picker",code:e}),Q(!1)}(e.hex)}})]})]}),Object(w.jsxs)(r.a,{className:"".concat(I.panel),children:[Object(w.jsx)(h.a,{title:z.data.titles.iconsColor}),Object(w.jsxs)(r.a,{className:E.switchContainer,children:[Object(w.jsx)(i.a,{variant:"body1",component:"p",className:E.switchLabel,children:z.forms.socialLinks.defaultLinksToTheme}),Object(w.jsx)(r.a,{className:E.formSwitch,children:Object(w.jsx)(b.a,{checked:!(!ge||!ge.defaultLinksToTheme)&&ge.defaultLinksToTheme,onChange:function(){return me((function(e){return!e})),Q(!1),void ee(!0)},name:"defaultColor",disabled:F})})]}),Object(w.jsxs)(r.a,{className:B.socialIconsContainer,children:[Object(w.jsx)(r.a,{className:B.socialIconItem,style:{background:ge&&ge.defaultLinksToTheme?L.color.code:"#3b5998"},children:Object(x.e)("facebook","primary","small",null,{color:"#ffffff",fontSize:20,stroke:"none"})}),Object(w.jsx)(r.a,{className:B.socialIconItem,style:{background:ge&&ge.defaultLinksToTheme?L.color.code:"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"},children:Object(x.e)("instagram","primary","small",null,{color:"#ffffff",fontSize:20,stroke:"none"})}),Object(w.jsx)(r.a,{className:B.socialIconItem,style:{background:ge&&ge.defaultLinksToTheme?L.color.code:"#00acee"},children:Object(x.e)("twitter","primary","small",null,{color:"#ffffff",fontSize:20,stroke:"none"})})]})]})]})})})};L.defaultProps={dialogOpen:!1,userId:null},t.default=L}}]);