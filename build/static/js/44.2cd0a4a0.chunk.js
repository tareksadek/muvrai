(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[44],{1280:function(a,t,e){"use strict";e.r(t);var c=e(3),n=e(0),s=e(83),o=e(312),i=e(1227),r=e(1228),l=e(91),d=e(5),u=e(10),p=e(9),h=e(15),j=n.forwardRef((function(a,t){var e=a.disableSpacing,c=void 0!==e&&e,s=a.classes,o=a.className,i=Object(u.a)(a,["disableSpacing","classes","className"]);return n.createElement("div",Object(d.a)({className:Object(p.default)(s.root,o,!c&&s.spacing),ref:t},i))})),b=Object(h.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(j),m=e(53),O=e(126),f=e(356),g=e(149),v=e(241),N=e.n(v),x=e(1247),y=e(1),C=function(a){var t=a.patchInfo,e=a.openChangeStatusDialog,d=a.deletePatch,u=Object(x.a)(),p=Object(s.h)(),h=Object(n.useState)(null),j=Object(c.a)(h,2),v=j[0],C=j[1];return Object(y.jsxs)(i.a,{classes:{root:u.root},className:u.root,children:[Object(y.jsxs)(r.a,{className:u.cardContent,children:[Object(y.jsx)(m.a,{variant:"body1",component:"p",className:u.userName,children:"".concat(t.package,": ").concat(t.patchTitle||"No title")}),Object(y.jsx)(m.a,{variant:"body1",component:"p",className:u.userEmail,children:"".concat(Object(o.a)(new Date(t.createdOn.toDate()),"dd - MM - yyyy"))}),Object(y.jsx)(m.a,{variant:"body1",component:"p",className:u.userName,children:t.patchId}),Object(y.jsx)(m.a,{variant:"body1",component:"p",className:u.userEmail,children:"".concat(t.contains," Invitations")}),Object(y.jsx)("span",{className:"".concat(u.patchStatus," ").concat("china"===t.status?u.patchStatusChina:""," ").concat("usa"===t.status?u.patchStatusUsa:""),children:function(a){var t="Ready";return"china"===a?t="Sent to factory":"usa"===a&&(t="Sent to sales point"),t}(t.status)}),Object(y.jsx)(O.a,{"aria-label":"settings",className:u.menuAnchor,"aria-haspopup":"true",color:"secondary",onClick:function(a){a.stopPropagation(),C(a.currentTarget)},children:Object(y.jsx)(N.a,{})})]}),Object(y.jsx)(b,{className:u.cardActions,children:Object(y.jsx)(l.a,{color:"secondary","aria-label":"edit",onClick:function(){return a=t.patchId,void p.push("/invitationsAdmin?patchId=".concat(a));var a},children:"View invitations"})}),Object(y.jsxs)(f.a,{id:"simple-menu",anchorEl:v,keepMounted:!0,open:Boolean(v),onClose:function(a){a.stopPropagation(),C(null)},classes:{paper:u.cardMenu},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(y.jsx)(g.a,{onClick:function(){return e(t),void C(null)},className:u.cardMenuButton,children:"Change status"}),Object(y.jsx)(g.a,{onClick:function(){return d(t.patchId),void C(null)},className:u.cardMenuButton,children:"Delete patch"})]})]})};C.defaultProps={patchInfo:null};t.default=C}}]);