(this["webpackJsonpsimple-react-project"]=this["webpackJsonpsimple-react-project"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(u.jsx)("h2",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},j=(n(15),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})}),m=(n(16),function(e){var t=e.handleOnChange,n=e.placeholder,c=void 0===n?"search monster":n;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:c,onChange:t})}),p=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleOnChange=function(t){e.setState({searchFiled:t.target.value})},e.state={monsters:[],searchFiled:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchFiled,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:" Monster Rolodex "}),Object(u.jsx)(m,{placeholder:"search monster",handleOnChange:this.handleOnChange}),Object(u.jsx)(j,{monsters:c})]})}}]),n}(s.a.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.2febd39a.chunk.js.map