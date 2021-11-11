(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(e,t,n){},2:function(e,t,n){e.exports={newContacsForm:"ContactForm_newContacsForm__W1unk",title:"ContactForm_title__2nTeS",label:"ContactForm_label__fEBi3",labelTitle:"ContactForm_labelTitle__2AXDp",button:"ContactForm_button__2W2GF"}},20:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(11),r=n.n(o),l=(n(19),n(13)),i=n(5),u=n(6),b=n(8),m=n(7),h=n(12),d=n(2),j=n.n(d),p=n(22),_=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;e.checkContacts(e.props.contacts,a)?alert("".concat(a," is already in contacts.")):(e.props.onSubmit({id:Object(p.a)(),name:a,number:c}),e.reset())},e.checkContacts=function(e,t){return e.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},e.changeInput=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(h.a)({},a,c))},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{className:j.a.newContacsForm,onSubmit:this.handleSubmit,children:[Object(a.jsx)("h2",{className:j.a.title,children:"Add new contacts:"}),Object(a.jsxs)("label",{className:j.a.label,children:[Object(a.jsx)("span",{className:j.a.labelTitle,children:"Name:"}),Object(a.jsx)("input",{type:"text",onChange:this.changeInput,value:t,name:"name",placeholder:"Name",required:!0})]}),Object(a.jsxs)("label",{className:j.a.label,children:[Object(a.jsx)("span",{className:j.a.labelTitle,children:"Phone:"}),Object(a.jsx)("input",{type:"text",onChange:this.changeInput,value:n,name:"number",placeholder:"Phone number",required:!0})]}),Object(a.jsx)("button",{type:"submit",className:j.a.button,children:"Add"})]})}}]),n}(c.Component),f=n(3),O=n.n(f),x=function(e){var t=e.contacts,n=e.onDelete;return Object(a.jsx)("ul",{className:O.a.contacsList,children:t.map((function(e){var t=e.id,c=e.name,s=e.number;return Object(a.jsxs)("li",{className:O.a.item,children:[Object(a.jsx)("span",{className:O.a.name,children:c}),": ",s,Object(a.jsx)("button",{type:"button",className:O.a.close,onClick:function(){return n(t)},children:"X"})]},t)}))})},C=n(4),v=n.n(C),g=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("div",{className:v.a.findForm,children:[Object(a.jsx)("h2",{className:v.a.title,children:"Find contacts:"}),Object(a.jsxs)("label",{className:v.a.label,children:[Object(a.jsx)("span",{className:v.a.labelTitle,children:"find:"}),Object(a.jsx)("input",{type:"text",onChange:n,value:t,name:"filter",placeholder:"Find name"})]})]})},N=n(9),F=n.n(N),y=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:""},e.handleSubmit=function(t){var n=t.id,a=t.name,c=t.number;e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[{id:n,name:a,number:c}])}}))},e.getVisibleContacts=function(){var t=e.state.filter;return e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},e.changeInput=function(t){e.setState({filter:t.target.value})},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:F.a.myPhonebook,children:[Object(a.jsx)("h2",{className:F.a.bigHeader,children:"My phonebook"}),Object(a.jsx)(_,{onSubmit:this.handleSubmit,contacts:t}),Object(a.jsx)(g,{value:n,onChange:this.changeInput}),Object(a.jsx)("h2",{className:F.a.smallHeader,children:"My contacts:"}),Object(a.jsx)(x,{contacts:this.getVisibleContacts(),onDelete:this.deleteContact})]})})}}]),n}(c.Component);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={contacsList:"ContactList_contacsList__24sYQ",item:"ContactList_item__2EBOn",name:"ContactList_name__DTCzg",close:"ContactList_close__3dnin"}},4:function(e,t,n){e.exports={findForm:"Filter_findForm__2Q5_P",title:"Filter_title__f2NXJ",label:"Filter_label__R8qap",labelTitle:"Filter_labelTitle__2M9Ip"}},9:function(e,t,n){e.exports={header:"App_header__RoiFC",myPhonebook:"App_myPhonebook__1ovnM",bigHeader:"App_bigHeader__p0EcG",smallHeader:"App_smallHeader__1pCHu"}}},[[20,1,2]]]);
//# sourceMappingURL=main.a95c885c.chunk.js.map