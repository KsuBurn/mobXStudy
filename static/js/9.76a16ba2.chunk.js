(this.webpackJsonpmobxstudy=this.webpackJsonpmobxstudy||[]).push([[9],{174:function(e,a,t){e.exports={wrap:"LoginPage_wrap__1rfSN",title:"LoginPage_title__1koUF",notError:"LoginPage_notError__1gGD7",isError:"LoginPage_isError__xSU1S"}},175:function(e){e.exports=JSON.parse('[{"name":{"first":"Kseniya","last":"Burnashova"},"login":"ksu","password":"123456"}]')},295:function(e,a,t){"use strict";t.r(a);var r=t(44),n=t(45),o=t(74),s=t(0),i=t.n(s),l=t(293),c=t(294),u=t(296),m=t(173),g=t(174),p=t.n(g),f=t(8),b=t(175),d=t(2),w=t.n(d),E=function(e){return e.replace(/\s+/g,"").trim()};a.default=function(){var e,a=Object(s.useState)({login:"",password:""}),t=Object(o.a)(a,2),g=t[0],d=t[1],h=Object(s.useState)(!1),O=Object(o.a)(h,2),j=O[0],v=O[1],_=Object(f.g)(),y=l.a.useForm(),S=Object(o.a)(y,1)[0],C=function(e){var a=e.login,t=e.password;if(b.every((function(e){return e.login!==a})))return!1;for(var r=0;r<b.length;r++)if(b[r].login===a)return t===b[r].password;return!1}(g),k=function(e){return function(a){v(!1),d(Object(n.a)(Object(n.a)({},g),{},Object(r.a)({},a,E(e.value))))}},x={wrapperCol:{offset:5}};return i.a.createElement("div",{className:p.a.wrap},i.a.createElement("h3",{className:p.a.title},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),i.a.createElement(l.a,Object.assign({},{labelCol:{span:4,offset:0},wrapperCol:{span:16,offset:1}},{form:S,onFinishFailed:function(e){}}),i.a.createElement(l.a.Item,{label:"\u041b\u043e\u0433\u0438\u043d",name:"login",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u041b\u043e\u0433\u0438\u043d"}]},i.a.createElement(c.a,{name:"login",onChange:function(e){return k(e.target)(e.target.name)},value:E(g.login)})),i.a.createElement(l.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u041f\u0430\u0440\u043e\u043b\u044c"}]},i.a.createElement(c.a.Password,{name:"password",onChange:function(e){return k(e.target)(e.target.name)},value:E(g.password)})),i.a.createElement("div",{className:w()((e={},Object(r.a)(e,p.a.notError,!0),Object(r.a)(e,p.a.isError,j),e))},i.a.createElement(u.a,{message:"\u041d\u0435 \u0443\u0434\u0430\u0451\u0442\u0441\u044f \u0432\u043e\u0439\u0442\u0438",description:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",type:"error",showIcon:!0})),i.a.createElement(l.a.Item,x,i.a.createElement(m.a,{type:"primary",htmlType:"submit",onClick:function(){var e;(e=C)&&(localStorage.setItem("auth",e.toString()),_.push("/"),window.location.reload(),S.resetFields()),v(!C)}},"\u0412\u043e\u0439\u0442\u0438"))))}}}]);
//# sourceMappingURL=9.76a16ba2.chunk.js.map