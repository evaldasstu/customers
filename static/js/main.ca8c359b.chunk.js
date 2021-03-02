(this.webpackJsonpcustomers=this.webpackJsonpcustomers||[]).push([[0],{55:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(11),o=n.n(a),l=n(13),s=n(9),i=n(42),u=n(7),d="LOAD_CUSTOMER",j="UPDATE_CUSTOMER",b="DELETE_CUSTOMER",O="[ADD_CUSTOMER",h="SELECT_CUSTOMER",f=function(e,t){return Object(u.a)(Object(u.a)({},e),{},{data:e.data.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),t):e}))})},m=Object(s.c)({customers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)({},e);case j:return f(e,t.payload);case b:return Object(u.a)(Object(u.a)({},e),{},{data:e.data.filter((function(e){return e!==t.payload}))});case O:return Object(u.a)(Object(u.a)({},e),{},{data:[].concat(Object(i.a)(e.data),[Object(u.a)({},t.payload)])});default:return e}},selectedCustomer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload?Object(u.a)({},t.payload):null;default:return e}}}),x=n(8),p=n(41),C=n(80),g=n(83),v=n(36),y=n(25),k=n(1),S=function(e){var t=e.column;return Object(k.jsx)("th",Object(u.a)(Object(u.a)({},t.getHeaderProps(t.getSortByToggleProps())),{},{className:"text-nowrap px-2",children:Object(k.jsxs)("div",{className:"d-flex align-items-center",children:[t.render("Header"),t.canSort&&Object(k.jsx)("div",{className:"sort-indicator text-right small ".concat(t.isSorted?t.isSortedDesc?"sort-indicator--desc":"sort-indicator--asc":"sort-indicator--unsorted")})]})}))},E=function(e){return Object(k.jsx)("tr",{children:e.children})},w=function(e){var t=e.cell;return Object(k.jsx)("td",Object(u.a)(Object(u.a)({},t.getCellProps()),{},{className:"p-2",children:t.render("Cell")}))},D=function(e,t){return Object(k.jsx)("span",{className:t&&"flex-grow-1 text-right",children:e.children})},N=function(e,t){var n="";return e.bold&&(n+="font-weight-bolder "),e.alignRight&&(n+="d-inline-block w-100 text-right"),e.truncate&&(n+="cell-text--truncate "),Object(k.jsx)("span",{className:n,children:e.children})},T=function(e){var t=e.lat,n=e.lng;return Object(k.jsx)(k.Fragment,{children:t&&Object(k.jsxs)("a",{href:"https://www.google.com/maps/place/".concat(t,",").concat(n),target:"_blank",rel:"noopener noreferrer",children:[t,", ",n]})})},H=function(e){var t=e.onEditClicked,n=e.onDeleteClicked,c=e.customer;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("span",{className:"btn btn-link align-baseline p-0 mr-3",onClick:function(){return t(c)},role:"link",tabIndex:"0",children:"Edit"}),Object(k.jsx)("span",{className:"btn btn-link align-baseline p-0 text-danger",onClick:function(){return n(c)},role:"link",tabIndex:"0",children:"Delete"})]})},R=function(e,t){var n=e&&e.toLowerCase()||"",c=t&&t.toLowerCase()||"";return n<c?-1:n>c?1:0},I=(n(55),function(e){var t=e.customers,n=e.onEditClicked,r=e.onDeleteClicked,a=Object(c.useMemo)((function(){return t}),[t]),o=Object(c.useMemo)((function(){return function(e){var t=e.onEditClicked,n=e.onDeleteClicked;return[{accessor:"name",Header:"Full name"},{accessor:"email",Header:"Email",Cell:function(e){var t=e.value;return Object(k.jsx)(N,{truncate:!0,children:Object(k.jsx)("a",{href:"mailto:".concat(t),children:t})})}},{accessor:"city",Header:"City"},{accessor:"street",Header:"Street"},{accessor:"house",Header:function(){return Object(k.jsx)(D,{alignRight:!0,children:"House"})},Cell:function(e){var t=e.value;return Object(k.jsx)(N,{alignRight:!0,children:t})}},{accessor:"zip",Header:function(){return Object(k.jsx)(D,{alignRight:!0,children:"Zip"})},Cell:function(e){var t=e.value;return Object(k.jsx)(N,{alignRight:!0,children:t})}},{accessor:"coordinates",Header:function(){return Object(k.jsx)(D,{alignRight:!0,children:"Location"})},Cell:function(e){var t=e.row;return Object(k.jsx)(N,{alignRight:!0,children:Object(k.jsx)(T,{lat:t.original.lat,lng:t.original.lng})})}},{accessor:"actions",disableSortBy:!0,Cell:function(e){var c=e.row;return Object(k.jsx)(H,{customer:c.original,onEditClicked:t,onDeleteClicked:n})}}]}({onEditClicked:n,onDeleteClicked:r})}),[n,r]),l=Object(y.useTable)({columns:o,data:a,sortTypes:{alphanumeric:function(e,t,n){return R(e.values[n],t.values[n])}}},y.useSortBy),s=l.headers,i=l.rows,u=l.prepareRow;return Object(k.jsxs)(v.a,{children:[Object(k.jsx)("thead",{children:Object(k.jsx)("tr",{children:s.map((function(e){return Object(c.createElement)(S,{column:e,key:e.id})}))})}),Object(k.jsx)("tbody",{children:i.map((function(e){return u(e),Object(c.createElement)(E,{row:e,key:e.id},e.cells.map((function(e){return Object(c.createElement)(w,{cell:e,key:e.column.id})})))}))}),!a.length&&Object(k.jsx)("tfoot",{children:Object(k.jsx)("tr",{children:Object(k.jsx)("td",{colSpan:"8",children:" No registered customers"})})})]})}),M=n(81),L=n(82),B=n(40),F=n(16),P=n.n(F),G=n(37),A=n(84),J=n(38),U=n.n(J),_=function(e){var t=e.customer,n=Object(c.useState)(null),r=Object(x.a)(n,2),a=r[0],o=r[1],l=Object(c.useState)(null),s=Object(x.a)(l,2),i=s[0],u=s[1],d=Object(c.useState)(null),j=Object(x.a)(d,2),b=j[0],O=j[1],h=Object(c.useState)(null),f=Object(x.a)(h,2),m=f[0],p=f[1],C=Object(c.useState)(null),g=Object(x.a)(C,2),v=g[0],y=g[1],k=Object(c.useState)(null),S=Object(x.a)(k,2),E=S[0],w=S[1],D=Object(c.useState)(!1),N=Object(x.a)(D,2),T=N[0],H=N[1],R=Object(A.a)(v,500),I=Object(x.a)(R,1)[0];return Object(c.useEffect)((function(){t&&(o(t.house),u(t.street),O(t.city),p(t.zip))}),[t]),Object(c.useEffect)((function(){var e="";a&&(e=" "+a),i&&(e=e.concat(" "+i)),m&&(e=e.concat(" "+m)),b&&(e=e.concat(" "+b)),i&&i.length>2||b&&b.length>2?y(e.slice(1,e.length)):w(null)}),[a,i,b,m]),Object(c.useEffect)((function(){var e;I&&(e="https://api.mapbox.com/geocoding/v5/mapbox.places/"+I+".json?limit=1&access_token=pk.eyJ1IjoiZXZhbGRhc3MiLCJhIjoiY2thNW4wN2h1MDFtcTNlbXcyeHM3eDBzOSJ9.gd3KHHhN8UTrW89BVA3Z6g",function(){var t=Object(G.a)(P.a.mark((function t(){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(null),H(!1),t.next=5,U()(e);case 5:n=t.sent,w([n.data.features[0].center[1].toPrecision(7),n.data.features[0].center[0].toPrecision(7)]),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),H(!0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()())}),[t.lat,I]),[{coordinates:E,isError:T}]},z=function(e){var t=e.selectedCustomer,n=e.action,r=e.onSaveConfirmed,a=e.onModalClosed,o=Object(c.useState)(t),l=Object(x.a)(o,2),s=l[0],i=l[1],d=Object(c.useState)(!1),j=Object(x.a)(d,2),b=j[0],O=j[1],h=_({customer:s}),f=Object(x.a)(h,1)[0],m=f.coordinates,p=f.isError;Object(c.useEffect)((function(){i(t)}),[t]),Object(c.useEffect)((function(){var e=s;m&&(e.lat=m[0],e.lng=m[1]),i(e)}),[s,m]);var C=function(){a(),O(!1)},v=Object(c.useRef)();Object(c.useEffect)((function(){"add"!==n&&"update"!==n||v.current.focus()}),[n]);return Object(k.jsxs)(M.a,{show:"add"===n||"update"===n,animation:!1,backdrop:"static",onHide:C,centered:!0,children:[Object(k.jsx)(M.a.Header,{closeButton:!0,children:"add"===n?Object(k.jsx)(M.a.Title,{children:"New customer"}):Object(k.jsx)(M.a.Title,{children:"Edit customer"})}),Object(k.jsxs)(L.a,{noValidate:!0,validated:b,onSubmit:function(e){O(!0),!1===e.currentTarget.checkValidity()?(e.preventDefault(),e.stopPropagation()):(r(s),a(),e.preventDefault(),O(!1))},children:[Object(k.jsxs)(M.a.Body,{children:[Object(k.jsxs)(L.a.Group,{controlId:"name",children:[Object(k.jsxs)(L.a.Label,{children:["Full name ",Object(k.jsx)("span",{className:"text-danger",children:"*"})]}),Object(k.jsx)(L.a.Control,{value:s.name||"",onChange:function(e){i(Object(u.a)(Object(u.a)({},s),{},{name:e.target.value}))},ref:v,required:!0}),Object(k.jsx)(L.a.Control.Feedback,{type:"invalid",children:"Please enter the customer name."})]}),Object(k.jsxs)(L.a.Group,{controlId:"email",children:[Object(k.jsx)(L.a.Label,{children:"Email"}),Object(k.jsx)(L.a.Control,{type:"email",value:s.email||"",onChange:function(e){i(Object(u.a)(Object(u.a)({},s),{},{email:e.target.value}))}}),Object(k.jsx)(L.a.Control.Feedback,{type:"invalid",children:"Invalid email format."})]}),Object(k.jsxs)(L.a.Row,{children:[Object(k.jsxs)(L.a.Group,{as:B.a,controlId:"city",children:[Object(k.jsx)(L.a.Label,{children:"City"}),Object(k.jsx)(L.a.Control,{value:s.city||"",onChange:function(e){return i(Object(u.a)(Object(u.a)({},s),{},{city:e.target.value}))}})]}),Object(k.jsxs)(L.a.Group,{as:B.a,controlId:"street",children:[Object(k.jsx)(L.a.Label,{children:"Street"}),Object(k.jsx)(L.a.Control,{value:s.street||"",onChange:function(e){return i(Object(u.a)(Object(u.a)({},s),{},{street:e.target.value}))}})]})]}),Object(k.jsxs)(L.a.Row,{children:[Object(k.jsxs)(L.a.Group,{as:B.a,controlId:"house",children:[Object(k.jsx)(L.a.Label,{children:"House number"}),Object(k.jsx)(L.a.Control,{value:s.house||"",onChange:function(e){return i(Object(u.a)(Object(u.a)({},s),{},{house:e.target.value}))}})]}),Object(k.jsxs)(L.a.Group,{as:B.a,controlId:"zip",children:[Object(k.jsx)(L.a.Label,{children:"Zip code"}),Object(k.jsx)(L.a.Control,{value:s.zip||"",onChange:function(e){return i(Object(u.a)(Object(u.a)({},s),{},{zip:e.target.value}))}})]})]}),Object(k.jsxs)(L.a.Group,{controlId:"coordinates",children:[Object(k.jsx)(L.a.Label,{children:"Predicted location"}),Object(k.jsx)(L.a.Control,{value:m?"".concat(m[0],", ").concat(m[1]):"",placeholder:p?"Could not fetch coordinates":"",disabled:!0})]})]}),Object(k.jsxs)(M.a.Footer,{children:[Object(k.jsx)(g.a,{variant:"secondary",onClick:C,children:"Cancel"}),Object(k.jsx)(g.a,{variant:"primary",type:"submit",children:"Save customer"})]})]})]})},Z=function(e){var t=e.customerToDelete,n=e.action,c=e.onDeleteConfirmed,r=e.onModalClosed;return Object(k.jsxs)(M.a,{show:"delete"===n,onHide:r,animation:!1,centered:!0,children:[Object(k.jsx)(M.a.Header,{closeButton:!0,children:Object(k.jsx)(M.a.Title,{children:"Delete customer"})}),Object(k.jsxs)(M.a.Body,{children:["Are you sure you want to delete customer"," ",Object(k.jsx)("strong",{children:t?t.name:""}),"?"]}),Object(k.jsxs)(M.a.Footer,{children:[Object(k.jsx)(g.a,{variant:"secondary",onClick:r,children:"Cancel"}),Object(k.jsx)(g.a,{variant:"danger",onClick:c,children:"Delete customer"})]})]})};var V=function(){var e=Object(l.b)();return{customers:Object(l.c)((function(e){return e.customers.data})),selectedCustomer:Object(l.c)((function(e){return e.selectedCustomer})),addCustomer:function(t){return e(function(e){return{type:O,payload:e}}(t))},deleteCustomer:function(t){return e(function(e){return{type:b,payload:e}}(t))},getCustomers:Object(c.useCallback)((function(){return e({type:d})}),[e]),selectCustomer:function(t){return e(function(e){return{type:h,payload:e}}(t))},updateCustomer:function(t){return e(function(e){return{type:j,payload:e}}(t))}}};var W=function(){var e=Object(c.useState)(null),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),o=Object(x.a)(a,2),l=o[0],s=o[1],i=V(),u=i.addCustomer,d=i.deleteCustomer,j=i.getCustomers,b=i.customers,O=i.selectCustomer,h=i.selectedCustomer,f=i.updateCustomer,m=function(){j(),O(null),r(null),s(null)};return Object(c.useEffect)((function(){j()}),[j]),Object(k.jsxs)(C.a,{fluid:"xl",children:[Object(k.jsxs)("div",{className:"d-flex justify-content-between align-items-center my-5",children:[Object(k.jsx)("h1",{className:"mb-0",children:"Customers"}),Object(k.jsx)(g.a,{variant:"primary",onClick:function(){O({}),s("add")},children:"New customer"})]}),Object(k.jsx)(I,{customers:b,onEditClicked:function(e){O(e),s("update")},onDeleteClicked:function(e){r(e),s("delete")}}),Object(k.jsx)(Z,{customerToDelete:n,action:l,onDeleteConfirmed:function(){d(n),m()},onModalClosed:m}),h&&Object(k.jsx)(z,{selectedCustomer:h,action:l,onSaveConfirmed:function(e){"add"===l?(e.id=Object(p.a)(),u(e)):f(e),m()},onModalClosed:m})]})},X=(n(75),n(76),function(){try{var e=localStorage.getItem("customersDemoApp");if(null===e)return;return JSON.parse(e)}catch(t){return}}()),q=Object(s.e)(m,X);q.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("customersDemoApp",t)}catch(n){}}({customers:q.getState().customers})})),o.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(l.a,{store:q,children:Object(k.jsx)(W,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.ca8c359b.chunk.js.map