(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{7757:function(e,t,n){e.exports=n(5666)},638:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r,o,i=n(7294),a=n(7580),c=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},l=(0,a.css)(r||(r=c(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),s=((0,a.createGlobalStyle)(o||(o=c(["",""],["",""])),l),l),u=n(5444),f=a.default.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-z0o2kh-0"})(["display:flex;margin-top:7rem;margin-bottom:7rem;font-size:1rem;text-align:center;line-height:1.5;color:white;font-family:'Times New Roman',Times,serif;@media (max-width:926px){font-size:0.7rem;}"]),d=(0,a.default)(u.rU).withConfig({displayName:"Footer__DevelopText",componentId:"sc-z0o2kh-1"})(["text-decoration:none;color:#676b8e;"]),h=function(){return i.createElement(f,null,"© 2021 Developer  ",i.createElement(d,{to:"https://github.com/cmg8431"},"@cmg8431"),", Powered By Gatsby 😆")},p=function(e){var t=e.message,n=e.timeout,r=e.state,o=e.setState,a=(0,i.useRef)(null);return r?i.createElement(y,{timeout:n,ref:a,onAnimationEnd:function(){return o(!1)}},i.createElement(g,null,t),i.createElement("div",null)):i.createElement(i.Fragment,null)},m=(0,a.keyframes)([""]),y=a.default.section.withConfig({displayName:"ClipModal__Wrapper",componentId:"sc-1q8juo6-0"})(["top:1rem;right:1rem;margin-right:1rem;display:flex;position:fixed;justify-content:center;align-items:center;height:3rem;width:20rem;background-color:#5c5c5c;border-radius:0.2rem;animation-name:",";animation-duration:",";animation-iteration-count:2;animation-direction:alternate;z-index:10;::before{box-shadow:inset 0 0 0 1000px rgba(255,255,255,0.3);filter:blur(15px);}"],m,(function(e){return e.timeout/2+"s"})),g=a.default.p.withConfig({displayName:"ClipModal__Message",componentId:"sc-1q8juo6-1"})(["width:auto;font-size:1rem;"]);function v(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,o)}var b=n(7757),w=n.n(b),x=function(){var e=(0,i.useState)({value:void 0,isSuccess:void 0}),t=e[0],n=e[1],r=function(){var e,r=(e=w().mark((function e(r){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.writeText(r);case 3:return e.next=5,n({value:r,isSuccess:!0});case 5:e.next=13;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,n(Object.assign({},t,{isSuccess:!1}));case 11:console.log(e.t0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){v(i,r,o,a,c,"next",e)}function c(e){v(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}();return[t,r]},E=(n(481),a.default.div.withConfig({displayName:"HeaderItem__HeaderItemWapper",componentId:"sc-13dncf-0"})(["color:white;display:flex;height:100%;width:100%;justify-content:center;align-items:center;"])),k=a.default.div.withConfig({displayName:"HeaderItem__HeaderText",componentId:"sc-13dncf-1"})(["margin-left:2rem;@media (max-width:900px){margin-right:1rem;}"]),_=a.default.button.withConfig({displayName:"HeaderItem__ShareButton",componentId:"sc-13dncf-2"})(["padding:2px 0px 0px 0px;background-color:#ffffff00;font-size:1.1rem;border:none;color:white;"]),L=a.default.div.withConfig({displayName:"HeaderItem__HeaderSort",componentId:"sc-13dncf-3"})(["width:41.7rem;"]),I=(0,a.default)(u.rU).withConfig({displayName:"HeaderItem__HeaderLogo",componentId:"sc-13dncf-4"})(["color:white;font-size:1.5rem;font-weight:600;text-decoration:none;@media (max-width:900px){margin-left:1rem;font-size:1rem;}"]),N=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=x(),o=r[0],a=r[1],c=function(){return i.createElement(p,{message:o.isSuccess?"현재 페이지의 주소가 복사되었습니다!":"현재 페이지의 주소 복사를 실패했습니다.",timeout:2,state:t,setState:n})};return i.createElement(E,null,i.createElement(I,{to:"/"},"MinGI.tech"),i.createElement(L,null),i.createElement(_,{onClick:function(){var e=location.href;n(!0),a(e)}},"share"),i.createElement(k,null,"portfolio"),i.createElement(c,null))},j=a.default.div.withConfig({displayName:"Header__HeaderArea",componentId:"sc-1vfx1sm-0"})(["position:relative;width:100%;height:3.5rem;background-color:black;"]),q=a.default.div.withConfig({displayName:"Header__HeaderWrap",componentId:"sc-1vfx1sm-1"})(["position:fixed;display:flex;top:0;left:0;z-index:3;width:100%;height:3.5rem;transition:0.4s ease;background-color:#ffffff00;backdrop-filter:blur(20px);&.hide{transform:translateY(-80px);}"]),S=function(){return i.createElement(j,null,i.createElement(q,null,i.createElement(N,null)))},C=(0,a.createGlobalStyle)(["",' @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);html,body,#root,.App{width:100%;height:100%;min-height:100vh;font-family:"Noto Sans KR",sans-serif !important;background-color:#08080B;};button{cursor:pointer;outline:none;};input{outline:none;}'],s),H=a.default.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-ynyxaw-0"})(["display:flex;flex-direction:column;align-items:center;position:relative;"]),T=function(e){var t=e.children;return i.createElement(H,null,i.createElement(C,null),i.createElement(S,null),t,i.createElement(h,null))}},481:function(e,t,n){"use strict";n.d(t,{F:function(){return o}});var r=n(7294),o=function(e,t,n){void 0===e&&(e="up"),void 0===t&&(t=.5),void 0===n&&(n=0);var o=(0,r.useRef)(),i=(0,r.useCallback)((function(e){var r=e[0],i=o.current;r.isIntersecting&&(i.style.transitionProperty="all",i.style.transitionDuration=t+"s",i.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",i.style.transitionDelay=n+"s",i.style.opacity=1,i.style.transform="translate3d(0, 0, 0)")}),[n,t]);return(0,r.useEffect)((function(){var e,t=o.current;return t&&(e=new IntersectionObserver(i,{threshold:.7})).observe(t),function(){return e&&e.disconnect()}}),[i]),{ref:o,style:{opacity:0,transform:function(e){switch(e){case"up":case"down":return"translate3d(0, 20%, 0)";case"left":return"translate3d(20%, 0, 0)";case"right":return"translate3d(-20%, 0, 0)";default:return}}(e)}}}},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof y?t:y,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(e,t,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var l=u(e,t,n);if("normal"===l.type){if(r=n.done?p:d,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function y(){}function g(){}function v(){}var b={};l(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(q([])));x&&x!==n&&r.call(x,i)&&(b=x);var E=v.prototype=y.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(o,i,a,c){var l=u(e[o],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,c)}))}c(l.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function q(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:t,done:!0}}return g.prototype=v,l(E,"constructor",v),l(v,"constructor",g),g.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(_.prototype),l(_.prototype,a,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new _(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(E),l(E,c,"Generator"),l(E,i,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=q,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:q(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(n){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}}]);