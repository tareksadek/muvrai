(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[49],{1284:function(e,a,l){"use strict";l.r(a);var t=l(8),n=l(6),i=l(3),r=l(2),s=l.n(r),u=l(0),c=l(35),o=l(127),d=l(91),p=l(23),m=l(160),b=l(62),f=l(17),g=l(39),j=l(20),v=l(29),y=l(27),O=l(32),h=l(1),x=function(e){var a=e.closeDialog,l=e.dialogOpen,r=e.onSetNotification,x=e.userId,N=Object(y.b)(),S=Object(O.a)(),T=Object(v.b)(),k=Object(j.b)().languageVars.pages.editProfile,w=Object(u.useState)(!1),E=Object(i.a)(w,2),M=E[0],A=E[1],F=Object(u.useState)(!1),V=Object(i.a)(F,2),q=V[0],I=V[1],W=Object(u.useState)(!1),B=Object(i.a)(W,2),P=B[0],R=B[1],z=Object(u.useState)("Loading"),C=Object(i.a)(z,2),G=C[0],H=C[1],J=Object(u.useState)(!1),L=Object(i.a)(J,2),D=L[0],U=L[1],K=Object(u.useState)(null),Q=Object(i.a)(K,2),X=Q[0],Y=Q[1],Z={firstName:Object(f.b)("input",k.forms.infoTab.firstName,{type:"text",name:"firstName",placeholder:k.forms.infoTab.firstName},"",null,{required:!1},!0,{xs:12,sm:null,md:null,lg:null,xl:null,fullWidth:!0}),middleName:Object(f.b)("input",k.forms.infoTab.middleName,{type:"text",name:"middleName",placeholder:k.forms.infoTab.middleName},"",null,{required:!1},!0,{xs:12,sm:null,md:null,lg:null,xl:null,fullWidth:!0}),lastName:Object(f.b)("input",k.forms.infoTab.lastName,{type:"text",name:"lastName",placeholder:k.forms.infoTab.lastName},"",null,{required:!1},!0,{xs:12,sm:null,md:null,lg:null,xl:null,fullWidth:!0}),organization:Object(f.b)("input",k.forms.infoTab.organization,{type:"text",name:"organization",placeholder:k.forms.infoTab.organization,disabled:!1},"",null,{required:!1},!0,{xs:12,sm:null,md:null,lg:null,xl:null,fullWidth:!0}),title:Object(f.b)("input",k.forms.infoTab.title,{type:"text",name:"title",placeholder:k.forms.infoTab.title},"",null,{required:!1},!0,{xs:12,sm:null,md:null,lg:null,xl:null,fullWidth:!0}),career:Object(f.b)("select",k.forms.infoTab.career,{name:"career",disabled:!1},"",[{value:"Accounting",display:"Accounting"},{value:"Architecture",display:"Architecture"},{value:"Automotive",display:"Automotive"},{value:"Blogging",display:"Blogging"},{value:"Education",display:"Education"},{value:"Energy",display:"Energy"},{value:"Engineering",display:"Engineering"},{value:"Entrepreneurship",display:"Entrepreneurship"},{value:"Farming",display:"Farming"},{value:"Fashion",display:"Fashion"},{value:"Filmmaking",display:"Filmmaking"},{value:"Government",display:"Government"},{value:"Graphic design",display:"Graphic design"},{value:"Health and medicine",display:"Health and medicine"},{value:"Human resources",display:"Human resources"},{value:"Journalism",display:"Journalism"},{value:"Law and public policy",display:"Law and public policy"},{value:"Marketing",display:"Marketing"},{value:"Modeling",display:"Modeling"},{value:"Multimedia",display:"Multimedia"},{value:"Music",display:"Music"},{value:"Photography",display:"Photography"},{value:"Real estate",display:"Real estate"},{value:"Repair and maintenance",display:"Repair and maintenance"},{value:"Sales",display:"Sales"},{value:"Science",display:"Science"},{value:"Software development",display:"Software development"},{value:"Technology",display:"Technology"},{value:"Videography",display:"Videography"}],{required:!1},!0,{xs:12,sm:null,md:null,lg:null,xl:null,fullWidth:!0}),note:Object(f.b)("textarea","Bio",{type:"text",name:"note",placeholder:"Bio"},"",null,{required:!1},!0,{xs:12,sm:null,md:null,lg:null,xl:null,fullWidth:!0})},$=Object(u.useState)(Object(n.a)({},Z)),_=Object(i.a)($,2),ee=_[0],ae=_[1];Object(u.useEffect)((function(){var e=!0;return e&&x&&Object(t.a)(s.a.mark((function e(){var a,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),e.next=4,Object(g.k)(x);case 4:a=e.sent,console.log(a),Y(a),l=Object(f.a)(ee,a,null),ae((function(e){return Object(n.a)(Object(n.a)({},e),l.adjustedForm)})),A(l.formValid),R(!1),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))(),function(){e=!1}}),[x]);var le,te=function(){var e=Object(t.a)(s.a.mark((function e(a,l){var t,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=a)||(n=""),t=Array.isArray(n)?n.join():Number.isInteger(n)?String(n):n,i=Object(f.a)(ee,t,l),ae(i.adjustedForm),A(i.formValid),I(!0),U(!1);case 8:case"end":return e.stop()}}),e)})));return function(a,l){return e.apply(this,arguments)}}(),ne=function(){ae(Z),a()},ie=function(){var e=Object(t.a)(s.a.mark((function e(a){var l,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),R(!0),l=Object(f.c)(ee),t=Object(n.a)(Object(n.a)({},X),l),e.prev=4,H(k.messages.loading.updatingVcard),e.next=8,Object(g.u)(x,t);case 8:U(!0),I(!1),R(!1),r({message:k.messages.notifications.profileInfoUpdateSuccess,type:"success"}),ne(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),R(!1),r({message:k.messages.notifications.profileInfoUpdateError,type:"error"});case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(a){return e.apply(this,arguments)}}(),re=D||q&&!M||!q||P;return Object(h.jsx)(m.a,{open:l,onClose:ne,title:"".concat(X&&X.firstName?X.firstName:""," ").concat(X&&X.lastName?X.lastName:""," Contacts"),loading:!1,actionButtonOne:Object(h.jsx)(d.a,{color:"secondary",onClick:function(e){return ie(e)},disabled:re,className:S.defaultButton,style:{backgroundColor:!re&&T},children:k.buttons.updateInfo}),children:Object(h.jsx)(c.a,{children:P?Object(h.jsx)(p.a,{loadingText:"".concat(q?G:k.messages.loading.loadingProfileInfo)}):Object(h.jsx)(c.a,{children:Object(h.jsx)(c.a,{className:"".concat(N.panel),children:Object(h.jsx)(o.a,{container:!0,spacing:3,children:(le=ee,Object.keys(le).map((function(e,a){return Object(h.jsx)(b.a,{elementType:le[e].elementType,label:le[e].elementLabel,value:le[e].value,elementOptions:le[e].elementOptions,touched:le[e].touched,valid:le[e].isValid,errorMessage:le[e].errorMessage,shouldValidate:le[e].validtationRules,elementSetup:le[e].elementSetup,changed:function(a){return te(a,e)},grid:le[e].grid,disabled:P},e+a)})))})})})})})};x.defaultProps={dialogOpen:!1,userId:null},a.default=x}}]);