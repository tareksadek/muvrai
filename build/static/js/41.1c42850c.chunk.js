(this["webpackJsonpONE-dbc"]=this["webpackJsonpONE-dbc"]||[]).push([[41],{1313:function(n,t,e){"use strict";e.r(t);e(0);var a=e(312),c=e(35),o=e(53),s=e(483),i=e(538),r=e.n(i),d=e(103),l=e(20),j=e(93),b=e(1),p=function(n){var t,e=n.open,i=n.onClose,p=n.connection,O=n.tags,h=Object(j.c)(),m=Object(l.b)().languageVars.pages.connections;return p&&(t=p.addedOn.seconds?p.addedOn.toDate():p.addedOn),Object(b.jsx)(d.a,{type:"custom",background:"#fff",title:"".concat(p&&p.firstName," ").concat(p&&p.lastName&&p.lastName),icon:Object(b.jsx)(r.a,{style:{color:"#272727"}}),open:e,onClose:function(){return i()},children:Object(b.jsxs)(c.a,{className:h.viewCardData,children:[p&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.addedOn,":"),Object(b.jsx)("span",{children:"".concat(p&&Object(a.a)(new Date(t),"dd-MM-yyyy h:mm a"))})]}),p&&p.firstName&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.name,":"),Object(b.jsx)("span",{children:"".concat(p.firstName," ").concat(p.lastName)})]}),p&&p.email&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.email,":"),Object(b.jsx)("span",{children:p.email})]}),p&&p.workPhone&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.workPhone,":"),Object(b.jsx)("span",{children:p.workPhone})]}),p&&p.interest&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.interest,":"),Object(b.jsx)("span",{children:p.interest})]}),p&&p.reason&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.reason,":"),Object(b.jsx)("span",{children:p.reason})]}),p&&p.period&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.period,":"),Object(b.jsx)("span",{children:p.period})]}),p&&p.mortgage&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.mortgage,":"),Object(b.jsx)("span",{children:p.mortgage})]}),p&&p.consultation&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.consultation,":"),Object(b.jsx)("span",{children:p.consultation})]}),p&&p.website&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.website,":"),Object(b.jsx)("span",{children:p.website})]}),p&&p.organization&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.organization,":"),Object(b.jsx)("span",{children:p.organization})]}),p&&p.title&&Object(b.jsxs)(o.a,{component:"p",variant:"body1",children:["".concat(m.data.connectionInfo.title,":"),Object(b.jsx)("span",{children:p.title})]}),p&&p.note&&Object(b.jsxs)(c.a,{className:h.notesContainer,children:[Object(b.jsx)(o.a,{className:h.notesTitle,component:"p",variant:"body1",children:"".concat(m.data.connectionInfo.note,":")}),Object(b.jsx)(o.a,{className:h.notes,component:"p",variant:"body1",children:Object(b.jsx)("span",{children:p.note})})]}),p&&p.tags&&p.tags.length>0&&Object(b.jsx)(c.a,{className:h.connectionTagsContainer,children:p.tags.map((function(n){var t=O.filter((function(t){return t.id===n}))[0];return!!t&&Object(b.jsx)(s.a,{label:t.display,className:h.connectionTagChip,style:{backgroundColor:t.color}},n)}))})]})})};p.defaultProps={open:!1,connection:null,tags:null},t.default=p}}]);