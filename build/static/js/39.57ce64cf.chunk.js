(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[39],{1271:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n(8),s=n(3),o=n(4),r=n(6),i=n(2),l=n.n(i),d=n(0),u=n(28),b=n(77),m=n(1272),g=n(35),j=n(127),O=n(91),f=n(53),p=n(755),h=n(62),y=n(160),v=n(23),x=n(17),C=n(20),S=n(33),F=n(75),N=n(138),k=n(32),w=n(16),D=n(1),T=function(e){var t=e.open,n=e.onClose,i=e.onSetNotification,u=e.userId,w=e.color,T=e.activeForm,E=e.connectionSettings,I=e.onAddConnection,A=e.isEmbedForm,V=e.defaultId,R=Object(N.a)(),B=Object(k.a)(),q=Object(S.b)(),J=Object(C.b)().languageVars.pages.connections,L=q&&q.user&&q.user.uid===V,M=T&&!A&&T.fields?T.fields.reduce((function(e,t){return Object(r.a)(Object(r.a)({},e),{},Object(o.a)({},t.name,Object(x.b)(t.type,"".concat(t.label).concat(t.validationRules.required?"*":""),{type:t.inputOptions.type,name:t.name,placeholder:"".concat(t.label).concat(t.validationRules.required?"*":"")},t.value,t.selectOptions,t.validationRules,t.isValid,t.grid)))}),{}):null,P=E&&E.formTitle?E.formTitle:J.data.titles.defaultFormTitle,z=E&&E.formDescription?E.formDescription:J.data.description.defaultFormDescription,Q=Object(d.useState)(!1),W=Object(s.a)(Q,2),G=W[0],H=W[1],K=Object(d.useState)(!1),U=Object(s.a)(K,2),X=U[0],Y=U[1],Z=Object(d.useState)(!1),$=Object(s.a)(Z,2),_=$[0],ee=$[1],te=Object(d.useState)(q.user?J.messages.loading.addingConnection:J.messages.loading.sendingContactInfo),ne=Object(s.a)(te,2),ae=ne[0],ce=ne[1],se=Object(d.useState)(!1),oe=Object(s.a)(se,2),re=oe[0],ie=oe[1],le=Object(d.useState)(!1),de=Object(s.a)(le,2),ue=de[0],be=de[1],me=Object(d.useState)(Object(r.a)({},M)),ge=Object(s.a)(me,2),je=ge[0],Oe=ge[1];Object(d.useEffect)((function(){T&&Oe(Object(r.a)({},M))}),[T]);var fe=function(){var e=Object(c.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),ce(J.messages.loading.addingConnection),be(!0),ie(!1),c=Object(x.c)(je),""!==(s=c.workPhone).trim()&&"+"!==s.trim()){e.next=10;break}return be(!1),Y(!1),e.abrupt("return");case 10:return e.prev=10,c.addedOn=new Date,c.userName="".concat(c.firstName||""," ").concat(c.lastName||""),c.tags=T.tags&&T.tags.tags&&T.tags.tags.length>0?Object(a.a)(T.tags.tags):null,c.tagsDisplay=T.tags&&T.tags.tagsDisplay&&T.tags.tagsDisplay.length>0?Object(a.a)(T.tags.tagsDisplay):null,e.next=17,Object(F.c)(u,c);case 17:q.user&&L&&I(c),Oe(M),Y(!1),ie(!0),setTimeout((function(){return be(!1)}),1e3),setTimeout((function(){return n()}),1100),ce(q.user?J.messages.loading.addingConnection:J.messages.loading.sendingContactInfo),i({message:q.user?J.messages.notifications.connectAddedSuccess:J.messages.notifications.connectSentSuccess,type:"success"}),e.next=33;break;case 27:throw e.prev=27,e.t0=e.catch(10),be(!1),i({message:q.user?J.messages.notifications.connectAddedError:J.messages.notifications.connectSentError,type:"error"}),n(),new Error(e.t0);case 33:case"end":return e.stop()}}),e,null,[[10,27]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){n()},he=_||X&&!G||!X||ue,ye=E&&E.embedForm?E.embedForm.formType:null;return Object(D.jsx)(y.a,{title:P,open:t,onClose:function(){return pe()},titleBackground:w,actionButtonOne:A?null:Object(D.jsx)(O.a,{color:"secondary",onClick:function(e){return fe(e)},disabled:he,className:B.defaultButton,style:{backgroundColor:!he&&w},children:q.user&&L?J.buttons.addNewContact:J.buttons.sendContactInfo}),children:Object(D.jsxs)(g.a,{className:"".concat(R.dialogContent),children:[ue&&Object(D.jsx)(v.a,{done:re,loadingText:"".concat(X?ae:J.messages.loading.addingConnection),boxed:!0}),T?Object(D.jsx)(D.Fragment,{children:A?Object(D.jsxs)(g.a,{className:R.embedFormContainer,children:[Object(D.jsx)(g.a,{mb:2,children:Object(D.jsx)(f.a,{variant:"body1",component:"p",align:"center",children:z})}),E&&"typeform"===ye&&Object(D.jsx)(m.Widget,{id:T.embedCode,style:{width:"100%",height:"100%"},className:"my-form"}),E&&("google"===ye||"microsoft"===ye||"jotform"===ye)&&Object(b.a)(E.embedForm.embedCode)]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(g.a,{mb:2,children:Object(D.jsx)(f.a,{variant:"body1",component:"p",align:"center",children:z})}),Object(D.jsx)(j.a,{container:!0,spacing:3,children:T&&Object.keys(je).map((function(e,t){return Object(D.jsx)(h.a,{elementType:je[e].elementType,label:je[e].elementLabel,value:je[e].value,elementOptions:je[e].elementOptions,touched:je[e].touched,valid:je[e].isValid,shouldValidate:je[e].validtationRules,elementSetup:je[e].elementSetup,errorMessage:je[e].errorMessage,changed:function(t){return function(e,t){var n;n=Array.isArray(e)?e.join():Number.isInteger(e)?String(e):e;var a=Object(x.a)(je,n,t);Oe(a.adjustedForm),H(a.formValid),Y(!0),ee(!1)}(t,e)},grid:je[e].grid,disabled:ue},e+t)}))})]})}):Object(D.jsx)(g.a,{className:R.connectFormLoadingContainer,children:Object(D.jsx)(p.a,{color:"secondary",size:20})})]})})};T.defaultProps={open:!1,userId:null,color:null,activeForm:null,connectionSettings:null,isEmbedForm:!1,defaultId:null},t.default=Object(u.b)(null,(function(e){return{onAddConnection:function(t){return e(w.f(t))},onSetNotification:function(t){return e(w.Q(t))}}}))(T)}}]);