(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[40],{1315:function(e,t,n){"use strict";n.r(t);var a=n(8),s=n(3),c=n(6),o=n(2),r=n.n(o),i=n(0),u=n(28),l=n(83),g=n(35),d=n(53),b=n(91),j=n(127),f=n(160),O=n(62),p=n(23),m=n(59),h=n(20),T=n(29),v=n(17),x=n(75),y=n(16),k=n(32),S=n(93),N=n(1),w=function(e){var t=e.open,n=e.onClose,o=e.tags,u=e.onSetNotification,y=e.userId,w=e.onAssignTags,C=e.connection,A=Object(S.e)(),E=Object(k.a)(),D=Object(l.h)(),B=Object(T.b)(),I=Object(h.b)().languageVars.pages.connections,V={tags:Object(v.b)("checkboxGroup","",{type:"checkbox",name:"tags",placeholder:"".concat(I.forms.assignTags.tags),tag:"text"},"",o?o.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{value:e.id})})):[],{required:!1},!0,{xs:12,sm:null,md:null,lg:null,xl:null,fullWidth:!0})},F=Object(i.useState)(!1),J=Object(s.a)(F,2),M=J[0],q=J[1],G=Object(i.useState)(!1),H=Object(s.a)(G,2),L=H[0],P=H[1],Q=Object(i.useState)(Object(c.a)({},V)),R=Object(s.a)(Q,2),W=R[0],z=R[1],K=Object(i.useState)(I.messages.loading.loadingTags),U=Object(s.a)(K,2),X=U[0],Y=U[1],Z=Object(i.useState)(!1),$=Object(s.a)(Z,2),_=$[0],ee=$[1],te=Object(i.useState)(!1),ne=Object(s.a)(te,2),ae=ne[0],se=ne[1];Object(i.useEffect)((function(){if(C&&C.tags){var e=Object(v.a)(W,C,null);z((function(t){return Object(c.a)(Object(c.a)({},t),e.adjustedForm)}))}}),[C]);var ce,oe=function(){var e=Object(a.a)(r.a.mark((function e(t,n){var a,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(s=t)||(s=""),a=Array.isArray(s)?s.join():Number.isInteger(s)?String(s):s,c=Object(v.a)(W,a,n),z(c.adjustedForm),q(!0),P(!1);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(a.a)(r.a.mark((function e(t){var a,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),Y(I.messages.loading.asigningTags),se(!0),ee(!1),a=Object(v.c)(W),s=o.filter((function(e){return a.tags.includes(e.id)})).map((function(e){return e.display})),e.prev=6,e.next=9,Object(x.a)(y,C.id,a.tags,s);case 9:w(C.id,a.tags,s),z(V),q(!1),ee(!0),setTimeout((function(){return se(!1)}),1e3),setTimeout((function(){return n()}),1100),Y(I.messages.loading.loadingTags),u({message:I.messages.notifications.assignTagsSuccess,type:"success"}),e.next=25;break;case 19:throw e.prev=19,e.t0=e.catch(6),se(!1),n(),u({message:I.messages.notifications.assignTagsError,type:"error"}),new Error(e.t0);case 25:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(t){return e.apply(this,arguments)}}(),ie=L||!M;return Object(N.jsx)(f.a,{type:"custom",titleBackground:B.color.code,title:I.data.titles.assignTagDialog,open:t,onClose:function(){return n()},actionButtonOne:Object(N.jsx)(b.a,{color:"secondary",onClick:re,className:"".concat(E.defaultButton),disabled:ie,style:{backgroundColor:B.color.code},children:I.buttons.saveTags}),children:Object(N.jsxs)(g.a,{className:A.viewCardData,children:[ae&&Object(N.jsx)(p.a,{done:_,loadingText:"".concat(M?X:I.messages.loading.loadingTags)}),Object(N.jsx)(g.a,{mb:2,children:Object(N.jsx)(d.a,{component:"p",variant:"body1",align:"center",className:A.offerClaimNote,children:I.data.description.assignTagDialog})}),Object(N.jsx)(j.a,{container:!0,spacing:3,className:A.formTagsContainer,children:o&&o.length>0?(ce=W,Object.keys(ce).map((function(e,t){return Object(N.jsx)(O.a,{elementType:ce[e].elementType,label:ce[e].elementLabel,value:ce[e].value,elementOptions:ce[e].elementOptions,touched:ce[e].touched,valid:ce[e].isValid,shouldValidate:ce[e].validtationRules,elementSetup:ce[e].elementSetup,errorMessage:ce[e].errorMessage,changed:function(t){return oe(t,e)},grid:ce[e].grid,disabled:!1},e+t)}))):Object(N.jsx)(g.a,{mt:2,children:Object(N.jsx)(m.a,{title:I.messages.notifications.noTags.title,description:I.messages.notifications.noTags.body,type:"info",onClickHandler:function(){D.push("/connectionTags")},buttonText:I.buttons.goToTags})})})]})})};w.defaultProps={open:!1,tags:null,userId:null,connection:null};t.default=Object(u.b)(null,(function(e){return{onSetNotification:function(t){return e(y.Q(t))},onAddTag:function(t){return e(y.c(t))},onAssignTags:function(t,n,a){return e(y.g(t,n,a))}}}))(w)}}]);