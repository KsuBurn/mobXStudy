(this.webpackJsonpmobxstudy=this.webpackJsonpmobxstudy||[]).push([[10],{139:function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return j})),t.d(r,"b",(function(){return c})),t.d(r,"c",(function(){return w}));var n=t(10),o=t(0),i=t.n(o);if(!o.useState)throw new Error("mobx-react-lite requires React with Hooks support");if(!n.p)throw new Error("mobx-react-lite requires mobx at least version 4 to be available");var a=!1;function c(){return a}function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(){var e=Object(o.useState)(0)[1];return Object(o.useCallback)((function(){e((function(e){return e+1}))}),[])}function f(e){return Object(n.j)(e)}var l,p=1e4,d=new Set;function b(){void 0===l&&(l=setTimeout(h,1e4))}function h(){l=void 0;var e=Date.now();d.forEach((function(r){var t=r.current;t&&e>=t.cleanAt&&(t.reaction.dispose(),r.current=null,d.delete(r))})),d.size>0&&b()}var v={};function m(e){return"observer"+e}function y(e,r,t){if(void 0===r&&(r="observed"),void 0===t&&(t=v),c())return e();var o,a=(t.useForceUpdate||s)(),u=i.a.useRef(null);if(!u.current){var l=new n.b(m(r),(function(){h.mounted?a():(l.dispose(),u.current=null)})),h=function(e){return{cleanAt:Date.now()+p,reaction:e}}(l);u.current=h,o=u,d.add(o),b()}var y,w,O=u.current.reaction;if(i.a.useDebugValue(O,f),i.a.useEffect((function(){var e;return e=u,d.delete(e),u.current?u.current.mounted=!0:(u.current={reaction:new n.b(m(r),(function(){a()})),cleanAt:1/0},a()),function(){u.current.reaction.dispose(),u.current=null}}),[]),O.track((function(){try{y=e()}catch(r){w=r}})),w)throw w;return y}function w(e,r){if(c())return e;var t,n,i,a=u({forwardRef:!1},r),s=e.displayName||e.name,f=function(r,t){return y((function(){return e(r,t)}),s)};return f.displayName=s,t=a.forwardRef?Object(o.memo)(Object(o.forwardRef)(f)):Object(o.memo)(f),n=e,i=t,Object.keys(n).forEach((function(e){O[e]||Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))})),t.displayName=s,t}var O={$$typeof:!0,render:!0,compare:!0,type:!0};function j(e){var r=e.children,t=e.render,n=r||t;return"function"!==typeof n?null:y(n)}function g(e,r,t,n,o){var i="children"===r?"render":"children",a="function"===typeof e[r],c="function"===typeof e[i];return a&&c?new Error("MobX Observer: Do not use children and render in the same time in`"+t):a||c?null:new Error("Invalid prop `"+o+"` of type `"+typeof e[r]+"` supplied to `"+t+"`, expected `function`.")}j.propTypes={children:g,render:g},j.displayName="Observer"}).call(this,t(53))},285:function(e,r,t){"use strict";t.d(r,"a",(function(){return _}));var n=t(10),o=t(0),i=t(139),a=0;var c={};function u(e){return c[e]||(c[e]=function(e){if("function"===typeof Symbol)return Symbol(e);var r="__$mobx-react "+e+" ("+a+")";return a++,r}(e)),c[e]}function s(e,r){if(f(e,r))return!0;if("object"!==typeof e||null===e||"object"!==typeof r||null===r)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var o=0;o<t.length;o++)if(!Object.hasOwnProperty.call(r,t[o])||!f(e[t[o]],r[t[o]]))return!1;return!0}function f(e,r){return e===r?0!==e||1/e===1/r:e!==e&&r!==r}function l(e,r,t){Object.hasOwnProperty.call(e,r)?e[r]=t:Object.defineProperty(e,r,{enumerable:!1,configurable:!0,writable:!0,value:t})}var p=u("patchMixins"),d=u("patchedDefinition");function b(e,r){for(var t=this,n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];r.locks++;try{var a;return void 0!==e&&null!==e&&(a=e.apply(this,o)),a}finally{r.locks--,0===r.locks&&r.methods.forEach((function(e){e.apply(t,o)}))}}function h(e,r){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];b.call.apply(b,[this,e,r].concat(n))}}function v(e,r,t){var n=function(e,r){var t=e[p]=e[p]||{},n=t[r]=t[r]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}(e,r);n.methods.indexOf(t)<0&&n.methods.push(t);var o=Object.getOwnPropertyDescriptor(e,r);if(!o||!o[d]){var i=e[r],a=function e(r,t,n,o,i){var a,c=h(i,o);return(a={})[d]=!0,a.get=function(){return c},a.set=function(i){if(this===r)c=h(i,o);else{var a=e(this,t,n,o,i);Object.defineProperty(this,t,a)}},a.configurable=!0,a.enumerable=n,a}(e,r,o?o.enumerable:void 0,n,i);Object.defineProperty(e,r,a)}}var m=n.a||"$mobx",y=u("isMobXReactObserver"),w=u("isUnmounted"),O=u("skipRender"),j=u("isForcingUpdate");function g(e){var r=e.prototype;if(e[y]){var t=R(r);console.warn("The provided component class ("+t+") \n                has already been declared as an observer component.")}else e[y]=!0;if(r.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==o.PureComponent)if(r.shouldComponentUpdate){if(r.shouldComponentUpdate!==x)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else r.shouldComponentUpdate=x;P(r,"props"),P(r,"state");var n=r.render;return r.render=function(){return k.call(this,n)},v(r,"componentWillUnmount",(function(){var e;if(!0!==Object(i.b)()&&(null===(e=this.render[m])||void 0===e||e.dispose(),this[w]=!0,!this.render[m])){var r=R(this);console.warn("The reactive render of an observer class component ("+r+") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.")}})),e}function R(e){return e.displayName||e.name||e.constructor&&(e.constructor.displayName||e.constructor.name)||"<component>"}function k(e){var r=this;if(!0===Object(i.b)())return e.call(this);l(this,O,!1),l(this,j,!1);var t=R(this),a=e.bind(this),c=!1,u=new n.b(t+".render()",(function(){if(!c&&(c=!0,!0!==r[w])){var e=!0;try{l(r,j,!0),r[O]||o.Component.prototype.forceUpdate.call(r),e=!1}finally{l(r,j,!1),e&&u.dispose()}}}));function s(){c=!1;var e=void 0,r=void 0;if(u.track((function(){try{r=Object(n.c)(!1,a)}catch(t){e=t}})),e)throw e;return r}return u.reactComponent=this,s[m]=u,this.render=s,s.call(this)}function x(e,r){return Object(i.b)()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==r||!s(this.props,e)}function P(e,r){var t=u("reactProp_"+r+"_valueHolder"),o=u("reactProp_"+r+"_atomHolder");function i(){return this[o]||l(this,o,Object(n.i)("reactive "+r)),this[o]}Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get:function(){var e=!1;return n.e&&n.d&&(e=Object(n.e)(!0)),i.call(this).reportObserved(),n.e&&n.d&&Object(n.d)(e),this[t]},set:function(e){this[j]||s(this[t],e)?l(this,t,e):(l(this,t,e),l(this,O,!0),i.call(this).reportChanged(),l(this,O,!1))}})}var E="function"===typeof Symbol&&Symbol.for,C=E?Symbol.for("react.forward_ref"):"function"===typeof o.forwardRef&&Object(o.forwardRef)((function(e){return null})).$$typeof,$=E?Symbol.for("react.memo"):"function"===typeof o.memo&&Object(o.memo)((function(e){return null})).$$typeof;function _(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),$&&e.$$typeof===$)throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(C&&e.$$typeof===C){var r=e.render;if("function"!==typeof r)throw new Error("render property of ForwardRef was not a function");return Object(o.forwardRef)((function(){var e=arguments;return Object(o.createElement)(i.a,null,(function(){return r.apply(void 0,e)}))}))}return"function"!==typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(o.Component,e)?g(e):Object(i.c)(e)}if(!o.Component)throw new Error("mobx-react requires React to be available");if(!n.n)throw new Error("mobx-react requires mobx to be available")}}]);
//# sourceMappingURL=10.20402d13.chunk.js.map