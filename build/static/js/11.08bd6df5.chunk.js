(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[11],{1266:function(e,t,a){"use strict";var n=a(5),r=a(10),l=a(0),i=(a(153),a(9)),c=a(15),o=l.forwardRef((function(e,t){var a=e.active,c=void 0!==a&&a,o=e.alternativeLabel,s=e.children,d=e.classes,p=e.className,b=e.completed,m=void 0!==b&&b,v=e.connector,u=e.disabled,f=void 0!==u&&u,h=e.expanded,j=void 0!==h&&h,x=e.index,O=e.last,g=e.orientation,y=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),L=v?l.cloneElement(v,{orientation:g,alternativeLabel:o,index:x,active:c,completed:m,disabled:f}):null,N=l.createElement("div",Object(n.a)({className:Object(i.default)(d.root,d[g],p,o&&d.alternativeLabel,m&&d.completed),ref:t},y),L&&o&&0!==x?L:null,l.Children.map(s,(function(e){return l.isValidElement(e)?l.cloneElement(e,Object(n.a)({active:c,alternativeLabel:o,completed:m,disabled:f,expanded:j,last:O,icon:x+1,orientation:g},e.props)):null})));return L&&!o&&0!==x?l.createElement(l.Fragment,null,L,N):N}));t.a=Object(c.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(o)},1267:function(e,t,a){"use strict";var n=a(5),r=a(10),l=a(0),i=a(9),c=a(15),o=a(53),s=a(65),d=Object(s.a)(l.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),p=Object(s.a)(l.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),b=a(60),m=l.createElement("circle",{cx:"12",cy:"12",r:"12"}),v=l.forwardRef((function(e,t){var a=e.completed,n=void 0!==a&&a,r=e.icon,c=e.active,o=void 0!==c&&c,s=e.error,v=void 0!==s&&s,u=e.classes;if("number"===typeof r||"string"===typeof r){var f=Object(i.default)(u.root,o&&u.active,v&&u.error,n&&u.completed);return v?l.createElement(p,{className:f,ref:t}):n?l.createElement(d,{className:f,ref:t}):l.createElement(b.a,{className:f,ref:t},m,l.createElement("text",{className:u.text,x:"12",y:"16",textAnchor:"middle"},r))}return r})),u=Object(c.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(v),f=l.forwardRef((function(e,t){var a=e.active,c=void 0!==a&&a,s=e.alternativeLabel,d=void 0!==s&&s,p=e.children,b=e.classes,m=e.className,v=e.completed,f=void 0!==v&&v,h=e.disabled,j=void 0!==h&&h,x=e.error,O=void 0!==x&&x,g=(e.expanded,e.icon),y=(e.last,e.optional),L=e.orientation,N=void 0===L?"horizontal":L,S=e.StepIconComponent,E=e.StepIconProps,z=Object(r.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),C=S;return g&&!C&&(C=u),l.createElement("span",Object(n.a)({className:Object(i.default)(b.root,b[N],m,j&&b.disabled,d&&b.alternativeLabel,O&&b.error),ref:t},z),g||C?l.createElement("span",{className:Object(i.default)(b.iconContainer,d&&b.alternativeLabel)},l.createElement(C,Object(n.a)({completed:f,active:c,error:O,icon:g},E))):null,l.createElement("span",{className:b.labelContainer},p?l.createElement(o.a,{variant:"body2",component:"span",display:"block",className:Object(i.default)(b.label,d&&b.alternativeLabel,f&&b.completed,c&&b.active,O&&b.error)},p):null,y))}));f.muiName="StepLabel";t.a=Object(c.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(f)},1269:function(e,t,a){"use strict";var n=a(5),r=a(10),l=a(0),i=a(9),c=a(15),o=a(226),s=l.forwardRef((function(e,t){var a=e.active,c=e.alternativeLabel,o=void 0!==c&&c,s=e.classes,d=e.className,p=e.completed,b=e.disabled,m=(e.index,e.orientation),v=void 0===m?"horizontal":m,u=Object(r.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return l.createElement("div",Object(n.a)({className:Object(i.default)(s.root,s[v],d,o&&s.alternativeLabel,a&&s.active,p&&s.completed,b&&s.disabled),ref:t},u),l.createElement("span",{className:Object(i.default)(s.line,{horizontal:s.lineHorizontal,vertical:s.lineVertical}[v])}))})),d=Object(c.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(s),p=l.createElement(d,null),b=l.forwardRef((function(e,t){var a=e.activeStep,c=void 0===a?0:a,s=e.alternativeLabel,d=void 0!==s&&s,b=e.children,m=e.classes,v=e.className,u=e.connector,f=void 0===u?p:u,h=e.nonLinear,j=void 0!==h&&h,x=e.orientation,O=void 0===x?"horizontal":x,g=Object(r.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),y=l.isValidElement(f)?l.cloneElement(f,{orientation:O}):null,L=l.Children.toArray(b),N=L.map((function(e,t){var a={index:t,active:!1,completed:!1,disabled:!1};return c===t?a.active=!0:!j&&c>t?a.completed=!0:!j&&c<t&&(a.disabled=!0),l.cloneElement(e,Object(n.a)({alternativeLabel:d,connector:y,last:t+1===L.length,orientation:O},a,e.props))}));return l.createElement(o.a,Object(n.a)({square:!0,elevation:0,className:Object(i.default)(m.root,m[O],v,d&&m.alternativeLabel),ref:t},g),N)}));t.a=Object(c.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(b)},1319:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(2),l=a.n(r),i=(a(0),a(83)),c=a(319),o=a(35),s=a(91),d=a(53),p=a(1269),b=a(1266),m=a(1267),v=a(30),u=a(33),f=a(20),h=a(504),j=a(27),x=a(32),O=a(1);t.default=function(e){var t=e.onLoadCard,a=e.onUpdate,r=Object(h.c)(),g=Object(j.b)(),y=Object(x.a)(),L=Object(u.b)(),N=Object(i.h)(),S=Object(f.b)().languageVars.pages.onboarding,E=!!navigator.userAgent.match(/Version\/[\d.]+.*Safari/),z=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,C=Object(c.b)(),w=C.previousStep,A=C.isFirstStep,I=C.activeStep,k=function(){var e=Object(n.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a(n);case 3:return e.next=5,t(L.user.uid,L.isMaster);case 5:N.push("/".concat(L.userUrlSuffix));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(p.a,{activeStep:I,className:r.stepsBar,children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(m.a,{children:"1"})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(m.a,{children:"2"})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(m.a,{children:"3"})}),Object(O.jsx)(b.a,{children:Object(O.jsx)(m.a,{children:"4"})})]}),Object(O.jsxs)(o.a,{className:"".concat(g.panel," ").concat(g.transPanel," ").concat(g.onboardingPanel),children:[Object(O.jsx)(v.a,{title:"".concat(I+1,". ").concat(S.data.titles.stepAddToHomeScreen)}),Object(O.jsx)(o.a,{mb:2,children:Object(O.jsx)(d.a,{variant:"body1",align:"left",component:"p",className:g.panelText,children:S.data.description.stepAddToHomeScreen.first})}),Object(O.jsx)(o.a,{display:"flex",justifyContent:"center",alignItems:"center",children:E||z?Object(O.jsx)("video",{src:"/assets/images/add_to_home_screen_iphone.mp4",height:"480",width:"270",controls:!0,playsInline:!0,children:S.data.installPWA.first}):Object(O.jsx)("video",{src:"/assets/images/add_to_home_screen_android.webm",height:"480",width:"270",preload:"auto",controls:!0,playsInline:!0,muted:!0,loop:!0,children:S.data.installPWA.first})}),Object(O.jsx)(o.a,{mb:2,mt:2,children:Object(O.jsx)(d.a,{variant:"body1",align:"center",component:"p",className:g.panelText,style:{textAlign:"center"},children:S.data.description.stepAddToHomeScreen.second})})]}),Object(O.jsxs)(o.a,{className:r.stepbuttonsContainer,children:[Object(O.jsx)(s.a,{onClick:function(){return w()},disabled:A,className:"".concat(y.defaultButton," ").concat(r.prevButton),children:S.buttons.prevStep}),Object(O.jsx)(s.a,{onClick:function(e){return k(e)},className:"".concat(y.defaultButton," ").concat(r.nextButton),children:S.buttons.lastStep})]})]})}}}]);