(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[1,39],{1251:function(e,n,t){"use strict";t(0);var a=t(83),o=t(35),c=t(91),l=t(53),r=t(550),i=t(1),s=function(e){var n=e.isClickable,t=e.isLarge,s=e.link,d=e.title,u=e.description,b=e.buttonText,m=e.buttonIcon,j=e.children,p=e.onClickHandler,f=Object(r.b)(),h=Object(a.h)(),O=function(e){return e?(h.push(e),!0):p()};return n?Object(i.jsxs)(c.a,{onClick:function(){return O(s)},className:"".concat(f.placeholderContainer," ").concat(t&&f.placeholderLarge),children:[d&&Object(i.jsx)(l.a,{component:"h3",variant:"body1",className:f.placeholderTitle,children:d}),u&&Object(i.jsx)(l.a,{component:"p",variant:"body1",className:f.placeholderDescription,children:u}),b&&Object(i.jsx)(l.a,{component:"p",variant:"body1",className:f.placeholderButtonText,children:b}),m&&m,j]}):Object(i.jsxs)(o.a,{className:"".concat(f.placeholderContainer," ").concat(t&&f.placeholderLarge),children:[d&&Object(i.jsx)(l.a,{component:"h3",variant:"body1",className:f.placeholderTitle,children:d}),u&&Object(i.jsx)(l.a,{component:"p",variant:"body1",className:f.placeholderDescription,children:u}),b&&Object(i.jsx)(c.a,{onClick:function(){return O(s)},className:f.placeholderButtonText,children:b}),m&&Object(i.jsx)(c.a,{onClick:function(){return O(s)},className:f.placeholderButtonText,children:m})]})};s.defaultProps={isClickable:!1,isLarge:!1,link:null,title:null,description:null,buttonText:null,children:null,onClickHandler:null,buttonIcon:null},n.a=s},1258:function(e,n,t){"use strict";t(0);var a=t(91),o=t(19),c=t(92),l=t(1),r=function(e){var n,t,r=e.link,i=e.profileType,s=e.colorCode,d=e.color,u=e.platform,b=e.countClicks,m=e.defaultLinksToTheme,j=Object(c.n)(),p="social"===i||"business"===i?"tiktokSocial":"tiktok",f="#fff",h="";"social"!==i&&"basic"!==i||(m?(n=s,p="tiktok"):n=d),"business"===i&&(m?(t=s,n="transparent",f=s,p="tiktok"):(t="transparent",n=d)),"social"===i?h=j.largeSocialLink:"basic"===i?h=j.basicSocialLink:"business"===i&&(h=j.businessSocialLink);return Object(l.jsx)(a.a,{onClick:function(){return b(r),void window.open(r,"_blank")},className:"".concat(j.socialLink," ").concat(h),style:{color:"social"===i||"basic"===i||"business"===i?"#ffffff":s,borderColor:t,background:n,borderWidth:"social"===i||"basic"===i?0:1},children:Object(o.e)("tiktok"===u?p:u,"primary","small",null,{color:f,fontSize:"social"===i||"basic"===i?40:20,stroke:"snapchat"===u?"#272727":"none"})})};r.defaultProps={link:null,profileType:null,colorCode:null,platform:null,color:null,defaultLinksToTheme:!1},n.a=r},1262:function(e,n,t){"use strict";t(0);var a=t(28),o=t(35),c=t(91),l=t(755),r=t(1276),i=t.n(r),s=t(1271),d=t(20),u=t(32),b=t(92),m=t(1),j=function(e){var n,t,a=e.colorCode,r=e.cardClickedHandler,j=e.profileType,p=e.userId,f=e.defaultId,h=e.connectDialogOpen,O=e.openConnectDialog,g=e.closeConnectDialog,k=e.userName,x=(e.canFollow,e.isFollowed,e.userType),C=e.activeForm,v=e.connectionSettings,y=e.isEmbedForm,N=e.connectionTags,w=Object(b.a)(),T=Object(u.a)(),F=Object(d.b)().languageVars.pages.connections;return n=v&&v.buttonTitle?v.buttonTitle:F.data.titles.defaultButtonTitle,t="social"===j?30:"basic"===j?16:8,Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(o.a,{className:w.viewCardActionsContainer,children:[Object(m.jsx)(o.a,{className:"".concat(w.actionButtonContainer),children:Object(m.jsxs)(c.a,{className:"".concat(T.defaultButton," ").concat(w.viewActionButton),style:{backgroundColor:a,borderRadius:t},onClick:function(){return O()},children:[n,!C&&Object(m.jsx)(l.a,{color:"secondary",size:20})]})}),Object(m.jsx)(o.a,{className:"".concat(w.actionButtonContainer," ").concat("basic"===j?w.basicActionButtonContainer:""),children:Object(m.jsx)(c.a,{className:"".concat(T.outlineButton," ").concat(w.viewActionButtonIcon),style:{color:a,borderColor:a,borderRadius:t,paddingTop:10,paddingBottom:10},onClick:function(){return r()},disabled:!1,children:Object(m.jsx)(i.a,{})})})]}),Object(m.jsx)(s.default,{open:h,onClose:g,userId:p,userName:k,color:a,userType:x,activeForm:C,connectionSettings:v,isEmbedForm:y,connectionTags:N,defaultId:f})]})};j.defaultProps={colorCode:null,profileType:null,userName:null,connectDialogOpen:!1,canFollow:!1,isFollowed:!1,userId:null,defaultId:null,userType:null,activeForm:null,connectionSettings:null,isEmbedForm:!1,connectionTags:null},n.a=Object(a.b)((function(e){return{userId:e.cards.userId,defaultId:e.cards.defaultId}}),null)(j)},1263:function(e,n,t){"use strict";t(0);var a=t(91),o=t(1277),c=t.n(o),l=t(20),r=t(32),i=t(92),s=t(1),d=function(e){var n=e.showInfoDialogHandler,t=e.colorCode,o=e.bioVideo,d=Object(r.a)(),u=Object(i.h)(),b=Object(l.b)().languageVars.pages.viewProfile;return Object(s.jsxs)(a.a,{className:"".concat(d.defaultButton," ").concat(u.infoButton),onClick:function(){return n()},style:{backgroundColor:t},children:[Object(s.jsx)(c.a,{className:u.infoButtonIcon}),Object(s.jsx)("span",{children:o?b.buttons.drawerText:b.buttons.drawerTextNoVideo})]})};d.defaultProps={colorCode:null,bioVideo:null},n.a=d},1264:function(e,n,t){"use strict";t(0);var a=t(35),o=t(495),c=t(91),l=t(496),r=t(1165),i=t(1278),s=t.n(i),d=t(92),u=t(1),b=function(e){var n=e.links,t=e.profileType,i=e.countClicks,b=e.colorCode,m=Object(d.d)();return Object(u.jsx)(a.a,{className:m.viewCardData,children:Object(u.jsx)(o.a,{className:"".concat(m.linksContainer," ").concat("business"===t?m.linksContainerBusiness:""),children:n.filter((function(e){return"custom"===e.platform})).map((function(e){return Object(u.jsx)(c.a,{onClick:function(){return function(e){i(e),window.open(e,"_blank")}(e.link)},className:"".concat(m.link," ").concat("social"===t&&m.socialLink," ").concat("business"===t?m.businessLink:""," ").concat("basic"===t?m.basicLink:""),style:{borderColor:b,color:b},children:Object(u.jsxs)(l.a,{className:m.linkItem,children:[Object(u.jsx)(r.a,{id:"switchListLabel_".concat(e.linkType),primary:""!==e.linkTitle?e.linkTitle:e.linkType}),Object(u.jsx)(a.a,{className:m.linkArrow,children:Object(u.jsx)(s.a,{style:{color:b}})})]})},e.key)}))})})};b.defaultProps={links:null,profileType:null,colorCode:null},n.a=b},1265:function(e,n,t){"use strict";t(0);var a=t(35),o=t(1258),c=t(14),l=t(92),r=t(1),i=function(e){var n=e.socialLinksOrder,t=e.links,i=e.colorCode,s=e.profileType,d=e.countClicks,u=e.defaultLinksToTheme,b=Object(l.n)(),m=t.filter((function(e){return"custom"!==e.platform&&e.active})).length;return Object(r.jsx)(a.a,{className:"".concat(b.viewCardLinksContainer,"\n         ").concat(m<7&&b.socialViewCardLinksContainerCentered,"\n         ").concat("social"===s&&b.socialViewCardLinksContainer,"\n         ").concat("basic"===s&&b.basicViewCardLinksContainer),children:n?n.map((function(e){return t.filter((function(n){return n.platform===e.platform&&"custom"!==n.platform&&n.active})).map((function(n){return Object(r.jsx)(o.a,{link:n.link,profileType:s,colorCode:i,color:c.E.find((function(n){return n.platform===e.platform})).iconColor,platform:n.platform,countClicks:d,defaultLinksToTheme:u},n.key)}))})):c.E.map((function(e){return t.filter((function(n){return n.platform===e.platform&&"custom"!==n.platform&&n.active})).map((function(n){return Object(r.jsx)(o.a,{link:n.link,profileType:s,colorCode:i,color:e.color,platform:n.platform,countClicks:d,defaultLinksToTheme:u},n.key)}))}))})};i.defaultProps={links:null,socialLinksOrder:null,colorCode:null,profileType:null,defaultLinksToTheme:!1},n.a=i},1268:function(e,n,t){"use strict";t(0);var a=t(83),o=t(546),c=t.n(o),l=t(35),r=t(91),i=t(1251),s=t(160),d=t(20),u=t(227),b=t(515),m=t(53),j=t(331),p=t.n(j),f=t(92),h=t(14),O=t(1),g=function(e){var n=e.workPhone,t=e.email,a=e.address,o=e.homePhone,c=e.workFax,r=e.note,i=e.marker,s=Object(f.h)(),u=Object(d.b)(),j=u.languageVars.pages.viewProfile;return Object(O.jsxs)(l.a,{className:s.viewCardData,children:[r&&Object(O.jsx)(l.a,{className:s.notesContainer,children:Object(O.jsx)(m.a,{className:s.notes,component:"p",variant:"body1",children:Object(O.jsx)("span",{children:r})})}),n&&Object(O.jsxs)(m.a,{component:"p",variant:"body1",children:["".concat(j.data.userInfo.workPhone,":"),Object(O.jsx)("span",{children:n})]}),o&&Object(O.jsxs)(m.a,{component:"p",variant:"body1",className:n?"":s.viewCardEmail,children:[n&&"".concat(j.data.userInfo.homePhone,":"),Object(O.jsx)("span",{children:o})]}),c&&Object(O.jsxs)(m.a,{component:"p",variant:"body1",children:["".concat(u.languageVars.pages.viewProfile.data.userInfo.workFax,":"),Object(O.jsx)("span",{children:c})]}),t&&Object(O.jsx)(m.a,{component:"p",variant:"body1",className:s.viewCardEmail,children:Object(O.jsx)("span",{children:Object(O.jsx)("a",{href:"mailto:".concat(t),style:{wordBreak:"break-all"},children:t})})}),a&&Object(O.jsx)(m.a,{component:"p",variant:"body1",className:s.viewCardEmail,children:Object(O.jsx)("span",{children:a})}),i&&Object(O.jsx)(l.a,{className:s.mapContainer,children:Object(O.jsx)(b.a,{bootstrapURLKeys:{key:h.m},yesIWantToUseGoogleMapApiInternals:!0,defaultCenter:i,defaultZoom:15,children:Object(O.jsx)(p.a,{style:{color:"#272727",fontSize:36},className:s.mapMarker,lat:i.lat,lng:i.lng})})})]})};g.defaultProps={workPhone:null,email:null,address:null,homePhone:null,workFax:null,note:null,marker:null};var k=g,x=t(32),C=function(e){var n=e.closeDialog,t=e.dialogOpen,o=e.userName,b=e.firstName,m=e.middleName,j=e.lastName,p=e.email,h=e.colorCode,g=e.gender,C=e.nickname,v=e.career,y=e.organization,N=e.title,w=e.workPhone,T=e.workFax,F=e.homePhone,L=e.homeFax,P=e.birthday,I=e.note,S=e.bioVideo,B=e.authUser,V=e.showHelperButtons,E=e.marker,D=e.address,A=Object(f.e)(),M=Object(x.a)(),z=Object(a.h)(),_=Object(u.b)(),H=Object(d.b)(),R=H.languageVars.pages.viewProfile;return Object(O.jsx)(s.a,{open:t,onClose:n,title:"".concat(o," info"),titleBackground:h,noSidePadding:!0,loading:!1,children:Object(O.jsxs)(l.a,{children:[S&&Object(O.jsxs)(O.Fragment,{children:["edit"===_.mode&&Object(O.jsx)(l.a,{mt:1,mb:2,children:Object(O.jsx)(r.a,{color:"secondary",onClick:function(){z.push("/bio")},className:M.editModeButton,children:"Change video"})}),Object(O.jsx)(l.a,{className:A.videoContainer,children:Object(O.jsx)(c.a,{controls:!0,url:S,width:"100%",height:"100%"})})]}),!S&&B&&V&&"edit"===_.mode&&Object(O.jsx)(l.a,{className:A.placeholderContainer,children:Object(O.jsx)(i.a,{title:R.data.videoPlaceholder.title,description:R.data.videoPlaceholder.description,buttonText:R.data.videoPlaceholder.button,isClickable:!0,isLarge:!0,link:"/bio"})}),Object(O.jsx)(k,{firstName:b,email:p,middleName:m,lastName:j,gender:g,nickname:C,career:v,organization:y,title:N,workPhone:w,workFax:T,homePhone:F,homeFax:L,birthday:P,note:I,address:D,marker:E}),"edit"===_.mode&&(w||p)&&Object(O.jsx)(l.a,{mt:5,mb:2,children:Object(O.jsx)(r.a,{color:"secondary",onClick:function(){z.push("/contact")},className:M.editModeButton,children:"Add / Edit contact info"})}),Object(O.jsx)(l.a,{className:A.poweredByContainer,children:Object(O.jsx)("a",{href:H.languageVars.appParentDomain,target:"_blank",rel:"noreferrer",style:{color:h},className:A.poweredByLink,children:"".concat(H.languageVars.appStamp)})})]})})};C.defaultProps={dialogOpen:!1,firstName:null,lastName:null,userName:null,middleName:null,gender:null,nickname:null,organization:null,title:null,workPhone:null,homePhone:null,workFax:null,homeFax:null,birthday:null,note:null,bioVideo:null,authUser:null,showHelperButtons:!1,career:null,email:null,colorCode:null,marker:null,address:null};n.a=C},1271:function(e,n,t){"use strict";t.r(n);var a=t(12),o=t(8),c=t(3),l=t(4),r=t(6),i=t(2),s=t.n(i),d=t(0),u=t(28),b=t(77),m=t(1272),j=t(35),p=t(127),f=t(91),h=t(53),O=t(755),g=t(62),k=t(160),x=t(23),C=t(17),v=t(20),y=t(33),N=t(75),w=t(138),T=t(32),F=t(16),L=t(1),P=function(e){var n=e.open,t=e.onClose,i=e.onSetNotification,u=e.userId,F=e.color,P=e.activeForm,I=e.connectionSettings,S=e.onAddConnection,B=e.isEmbedForm,V=e.defaultId,E=Object(w.a)(),D=Object(T.a)(),A=Object(y.b)(),M=Object(v.b)().languageVars.pages.connections,z=A&&A.user&&A.user.uid===V,_=P&&!B&&P.fields?P.fields.reduce((function(e,n){return Object(r.a)(Object(r.a)({},e),{},Object(l.a)({},n.name,Object(C.b)(n.type,"".concat(n.label).concat(n.validationRules.required?"*":""),{type:n.inputOptions.type,name:n.name,placeholder:"".concat(n.label).concat(n.validationRules.required?"*":"")},n.value,n.selectOptions,n.validationRules,n.isValid,n.grid)))}),{}):null,H=I&&I.formTitle?I.formTitle:M.data.titles.defaultFormTitle,R=I&&I.formDescription?I.formDescription:M.data.description.defaultFormDescription,U=Object(d.useState)(!1),W=Object(c.a)(U,2),q=W[0],J=W[1],G=Object(d.useState)(!1),K=Object(c.a)(G,2),Q=K[0],Z=K[1],X=Object(d.useState)(!1),Y=Object(c.a)(X,2),$=Y[0],ee=Y[1],ne=Object(d.useState)(A.user?M.messages.loading.addingConnection:M.messages.loading.sendingContactInfo),te=Object(c.a)(ne,2),ae=te[0],oe=te[1],ce=Object(d.useState)(!1),le=Object(c.a)(ce,2),re=le[0],ie=le[1],se=Object(d.useState)(!1),de=Object(c.a)(se,2),ue=de[0],be=de[1],me=Object(d.useState)(Object(r.a)({},_)),je=Object(c.a)(me,2),pe=je[0],fe=je[1];Object(d.useEffect)((function(){P&&fe(Object(r.a)({},_))}),[P]);var he=function(){var e=Object(o.a)(s.a.mark((function e(n){var o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),oe(M.messages.loading.addingConnection),be(!0),ie(!1),o=Object(C.c)(pe),""!==(c=o.workPhone).trim()&&"+"!==c.trim()){e.next=10;break}return be(!1),Z(!1),e.abrupt("return");case 10:return e.prev=10,o.addedOn=new Date,o.userName="".concat(o.firstName||""," ").concat(o.lastName||""),o.tags=P.tags&&P.tags.tags&&P.tags.tags.length>0?Object(a.a)(P.tags.tags):null,o.tagsDisplay=P.tags&&P.tags.tagsDisplay&&P.tags.tagsDisplay.length>0?Object(a.a)(P.tags.tagsDisplay):null,e.next=17,Object(N.c)(u,o);case 17:A.user&&z&&S(o),fe(_),Z(!1),ie(!0),setTimeout((function(){return be(!1)}),1e3),setTimeout((function(){return t()}),1100),oe(A.user?M.messages.loading.addingConnection:M.messages.loading.sendingContactInfo),i({message:A.user?M.messages.notifications.connectAddedSuccess:M.messages.notifications.connectSentSuccess,type:"success"}),e.next=33;break;case 27:throw e.prev=27,e.t0=e.catch(10),be(!1),i({message:A.user?M.messages.notifications.connectAddedError:M.messages.notifications.connectSentError,type:"error"}),t(),new Error(e.t0);case 33:case"end":return e.stop()}}),e,null,[[10,27]])})));return function(n){return e.apply(this,arguments)}}(),Oe=function(){t()},ge=$||Q&&!q||!Q||ue,ke=I&&I.embedForm?I.embedForm.formType:null;return Object(L.jsx)(k.a,{title:H,open:n,onClose:function(){return Oe()},titleBackground:F,actionButtonOne:B?null:Object(L.jsx)(f.a,{color:"secondary",onClick:function(e){return he(e)},disabled:ge,className:D.defaultButton,style:{backgroundColor:!ge&&F},children:A.user&&z?M.buttons.addNewContact:M.buttons.sendContactInfo}),children:Object(L.jsxs)(j.a,{className:"".concat(E.dialogContent),children:[ue&&Object(L.jsx)(x.a,{done:re,loadingText:"".concat(Q?ae:M.messages.loading.addingConnection),boxed:!0}),P?Object(L.jsx)(L.Fragment,{children:B?Object(L.jsxs)(j.a,{className:E.embedFormContainer,children:[Object(L.jsx)(j.a,{mb:2,children:Object(L.jsx)(h.a,{variant:"body1",component:"p",align:"center",children:R})}),I&&"typeform"===ke&&Object(L.jsx)(m.Widget,{id:P.embedCode,style:{width:"100%",height:"100%"},className:"my-form"}),I&&("google"===ke||"microsoft"===ke||"jotform"===ke)&&Object(b.a)(I.embedForm.embedCode)]}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(j.a,{mb:2,children:Object(L.jsx)(h.a,{variant:"body1",component:"p",align:"center",children:R})}),Object(L.jsx)(p.a,{container:!0,spacing:3,children:P&&Object.keys(pe).map((function(e,n){return Object(L.jsx)(g.a,{elementType:pe[e].elementType,label:pe[e].elementLabel,value:pe[e].value,elementOptions:pe[e].elementOptions,touched:pe[e].touched,valid:pe[e].isValid,shouldValidate:pe[e].validtationRules,elementSetup:pe[e].elementSetup,errorMessage:pe[e].errorMessage,changed:function(n){return function(e,n){var t;t=Array.isArray(e)?e.join():Number.isInteger(e)?String(e):e;var a=Object(C.a)(pe,t,n);fe(a.adjustedForm),J(a.formValid),Z(!0),ee(!1)}(n,e)},grid:pe[e].grid,disabled:ue},e+n)}))})]})}):Object(L.jsx)(j.a,{className:E.connectFormLoadingContainer,children:Object(L.jsx)(O.a,{color:"secondary",size:20})})]})})};P.defaultProps={open:!1,userId:null,color:null,activeForm:null,connectionSettings:null,isEmbedForm:!1,defaultId:null},n.default=Object(u.b)(null,(function(e){return{onAddConnection:function(n){return e(F.f(n))},onSetNotification:function(n){return e(F.Q(n))}}}))(P)},1276:function(e,n,t){"use strict";var a=t(31),o=t(42);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=o(t(0)),l=(0,a(t(43)).default)(c.createElement("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall");n.default=l},1277:function(e,n,t){"use strict";var a=t(31),o=t(42);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=o(t(0)),l=(0,a(t(43)).default)(c.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");n.default=l},1278:function(e,n,t){"use strict";var a=t(31),o=t(42);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=o(t(0)),l=(0,a(t(43)).default)(c.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");n.default=l}}]);