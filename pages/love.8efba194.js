parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gQwr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={"么么哒":"😘","猪":["🐖","🐽","🐷","🐗"],"爱|love":["❤","💕"],"大便|粑粑|屎":"💩","恭喜发财":"💸"};exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var t=e(require("./keyword"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return i(t)||a(t)||o(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function a(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return c(t)}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var s=function(t){return document.querySelector(t)},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return t.addEventListener("click",e)},u={root:s("#root"),phone:s("#phone"),header:s("#header"),main:s("#main"),keyword:s("#keyword"),footer:s("#footer"),keywordbg:s("#main .bg"),animation:s("#animation"),message:s("#message"),send:s("#send")};l(u.send,function(){var t=u.message.value;t&&f(t,"我",!0)});var d=function(t){var e=document.createElement("div");return e.textContent?e.textContent=t:e.innerText=t,e.innerHTML},f=function(e,n,r){if(!e)return!1;var o='\n    <p class="'.concat(r?"myself":"opposite",'"\n       style="--name:\'').concat(n,"'\">").concat(d(e),"\n    </p>\n  ");u.keyword.innerHTML+=o,u.main.scrollTop=u.keyword.scrollHeight;var a=Object.keys(t.default).find(function(t){return new RegExp(t,"ig").test(e)}),i=t.default[a];i&&y(i),u.keyword.scrollTop=u.keyword.scrollHeight,u.message.placeholder=Object.keys(t.default)[Math.floor(m(0,Object.keys(t.default).length-1))],u.message.value=""},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t+1;return Math.random()*(e-t+1)+t},y=function(t){var e=u.main.getBoundingClientRect(),r=e.width,o=e.height,a=(e.top,e.bottom,Math.round(r*o/5e3)),i=Math.round(r/65),c=r/i,s=0,l=t;if(Array.isArray(t)){var d=m(0,t.length-1);l=t[Math.floor(d)]}u.animation.style.zIndex=99,n(Array(a).keys()).forEach(function(t){var e=document.createElement("i"),n=(m(1,c)+c)*(t%i)+"px";e.classList="icon-itme",e.innerText=l||"😘",e.style.left=n,e.style.position="absolute",e.style.fontSize="32px",e.style.transform="translate(".concat(n,",").concat(-50,"px)"),e.style.transition="transform ".concat(m(3,6),"s linear ").concat(m(1,2),"s"),setTimeout(function(){e.style.transform="translate(".concat(m(1,c),"px,").concat(o+50,"px) rotate(").concat(m(-90,90),"deg)")},0),e.addEventListener("transitionend",function(t){var e=t.target;e.parentNode.removeChild(e),++s>=a&&(u.animation.style.zIndex=0)}),u.animation.appendChild(e)})};window.keyword=t.default;
},{"./keyword":"gQwr"}]},{},["Focm"], null)
//# sourceMappingURL=/love.8efba194.js.map