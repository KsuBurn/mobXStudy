(this.webpackJsonpmobxstudy=this.webpackJsonpmobxstudy||[]).push([[8],{141:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(173);a.a=function(e){var a=e.buttonTitle,t=e.type,n=e.onClick,c=e.danger;return r.a.createElement(o.a,{type:t,onClick:n,danger:c},a)}},158:function(e,a,t){e.exports={form:"UserForm_form__1cE1k"}},159:function(e,a,t){"use strict";var n=t(44),r=t(45),o=t(74),c=t(0),i=t.n(c),d=t(294),l=function(e){var a=e.placeholder,t=e.addonBefore,n=e.value,r=e.onChange,o=e.name;return i.a.createElement(d.a,{placeholder:a,addonBefore:t,value:n,onChange:r,name:o})},s=t(141),u=t(158),m=t.n(u),v=t(75);a.a=function(e){var a=e.currentUserInfo,t=e.actionType,d=Object(c.useState)(),u=Object(o.a)(d,2),b=u[0],f=u[1],p=Object(v.a)().usersStore;Object(c.useEffect)((function(){f(void 0!=a?a:{address:{street:"",suite:"",city:"",zipcode:"",geo:{lat:"",lng:""}},company:{name:"",catchPhrase:"",bs:""},avatar:"",email:"",id:p.userList.length+1,name:"",phone:"",username:"",website:""})}),[]);var h=function(e){var a=e.currentTarget,t=a.value,o=a.name;switch(o){case"address.city":f((function(e){if(void 0!=e)return Object(r.a)(Object(r.a)({},e),{},{address:Object(r.a)(Object(r.a)({},null===e||void 0===e?void 0:e.address),{},{city:t})})}));break;case"address.street":f((function(e){if(void 0!=e)return Object(r.a)(Object(r.a)({},e),{},{address:Object(r.a)(Object(r.a)({},null===e||void 0===e?void 0:e.address),{},{street:t})})}));break;case"company.name":f((function(e){if(void 0!=e)return Object(r.a)(Object(r.a)({},e),{},{company:Object(r.a)(Object(r.a)({},null===e||void 0===e?void 0:e.company),{},{name:t})})}));break;default:f((function(e){if(void 0!=e)return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},o,t))}))}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:m.a.form},i.a.createElement(l,{placeholder:"Name",addonBefore:"Name: ",name:"name",value:null===b||void 0===b?void 0:b.name,onChange:h}),i.a.createElement(l,{placeholder:"Nick name",addonBefore:"Nick name: ",name:"username",value:null===b||void 0===b?void 0:b.username,onChange:h}),i.a.createElement(l,{placeholder:"Email",addonBefore:"Email: ",name:"email",value:null===b||void 0===b?void 0:b.email,onChange:h}),i.a.createElement(l,{placeholder:"City",addonBefore:"City: ",name:"address.city",value:null===b||void 0===b?void 0:b.address.city,onChange:h}),i.a.createElement(l,{placeholder:"Street",addonBefore:"Street: ",name:"address.street",value:null===b||void 0===b?void 0:b.address.street,onChange:h}),i.a.createElement(l,{placeholder:"Job",addonBefore:"Job: ",name:"company.name",value:null===b||void 0===b?void 0:b.company.name,onChange:h}),i.a.createElement(l,{placeholder:"Website",addonBefore:"Website: ",name:"website",value:null===b||void 0===b?void 0:b.website,onChange:h})),i.a.createElement(s.a,{buttonTitle:"Save",type:"primary",onClick:function(){switch(t){case"addition":f((function(e){if(void 0!=e)return Object(r.a)(Object(r.a)({},e),{},{id:p.userList.length+1})})),void 0!=b?p.addUserItem(b):console.log("\u041e\u0448\u0438\u0431\u043a\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f");break;case"editing":p.editUser(b)}}}))}},291:function(e,a,t){"use strict";t.r(a);var n=t(74),r=t(0),o=t.n(r),c=t(65),i=t(159);a.default=function(e){var a=e.match,t=Object(r.useState)(),d=Object(n.a)(t,2),l=d[0],s=d[1];return Object(r.useEffect)((function(){s(Object(c.a)("users").slice().filter((function(e){return e.id===Number(a.params.userid)}))[0])}),[]),o.a.createElement("div",null,l?o.a.createElement(i.a,{currentUserInfo:l,actionType:"editing"}):o.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."))}}}]);
//# sourceMappingURL=8.411d952f.chunk.js.map