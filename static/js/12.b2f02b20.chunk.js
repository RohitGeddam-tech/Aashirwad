(this.webpackJsonpaashirwad=this.webpackJsonpaashirwad||[]).push([[12],{39:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n(0),r=n.n(o),i=(n(9),n(16)),a=function(){return(a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};var c="",s=null,l=null,u=null;function d(){c="",null!==s&&s.disconnect(),null!==l&&(window.clearTimeout(l),l=null)}function b(t){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(t.tagName)&&!t.hasAttribute("disabled")||["A","AREA"].includes(t.tagName)&&t.hasAttribute("href")}function f(){var t=null;if("#"===c)t=document.body;else{var e=c.replace("#","");null===(t=document.getElementById(e))&&"#top"===c&&(t=document.body)}if(null!==t){u(t);var n=t.getAttribute("tabindex");return null!==n||b(t)||t.setAttribute("tabindex",-1),t.focus({preventScroll:!0}),null!==n||b(t)||(t.blur(),t.removeAttribute("tabindex")),d(),!0}return!1}function m(t){return r.a.forwardRef((function(e,n){var o="";"string"===typeof e.to&&e.to.includes("#")?o="#"+e.to.split("#").slice(1).join("#"):"object"===typeof e.to&&"string"===typeof e.to.hash&&(o=e.to.hash);var b={};t===i.c&&(b.isActive=function(t,e){return t&&t.isExact&&e.hash===o});var m=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(e,["scroll","smooth","timeout","elementId"]);return r.a.createElement(t,a({},b,m,{onClick:function(t){var n;d(),c=e.elementId?"#"+e.elementId:o,e.onClick&&e.onClick(t),""!==c&&(u=e.scroll||function(t){return e.smooth?t.scrollIntoView({behavior:"smooth"}):t.scrollIntoView()},n=e.timeout,window.setTimeout((function(){!1===f()&&(null===s&&(s=new MutationObserver(f)),s.observe(document,{attributes:!0,childList:!0,subtree:!0}),l=window.setTimeout((function(){d()}),n||1e4))}),0))},ref:n}),e.children)}))}m(i.b);var h=m(i.c)},43:function(t,e,n){"use strict";e.a=n.p+"static/media/logo.ccd99cbf.svg"},44:function(t,e,n){"use strict";e.a=n.p+"static/media/fb.cffc8dd1.svg"},45:function(t,e,n){"use strict";e.a=n.p+"static/media/Linkedin.90d11229.svg"},46:function(t,e,n){"use strict";e.a=n.p+"static/media/instagram.5a86ce7b.svg"},47:function(t,e,n){"use strict";e.a=n.p+"static/media/copy.e82d5d3c.svg"},48:function(t,e,n){"use strict";n(0);var o=n(1);e.a=function(t){var e=t.text;return Object(o.jsx)("button",{className:"button",children:e})}},50:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return i}))},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(39),a=n(44),c=n(45),s=n(46),l=n(47),u=(n(68),n(1)),d=function(){return Object(u.jsx)("div",{className:"mobFooter",children:Object(u.jsxs)("div",{className:"mobFooterContainer",children:[Object(u.jsxs)("div",{className:"mobFooterLinks",children:[Object(u.jsx)(i.a,{to:"/Aashirwad/About#top",children:"ABOUT US"}),Object(u.jsx)(i.a,{to:"/Aashirwad/Path#top",children:"PATHOLOGICAL EQUIPMENTS"}),Object(u.jsx)(i.a,{to:"/#contact",children:"CONTACT US"}),Object(u.jsx)(i.a,{to:"/#contact",children:"PRIVACY POLICY"}),Object(u.jsx)(i.a,{to:"/#contact",children:"TERMS & CONDITIONS"})]}),Object(u.jsxs)("div",{className:"mobFooterIcons",children:[Object(u.jsx)("img",{src:a.a,alt:"fb"}),Object(u.jsx)("img",{src:s.a,alt:"insta"}),Object(u.jsx)("img",{src:c.a,alt:"linkedin"})]}),Object(u.jsx)("div",{className:"mobFooterCopy",children:Object(u.jsx)("img",{src:l.a,alt:"copyright"})})]})})},b=n(7),f=n(50),m=function(t){var e=t.color,n=void 0===e?"currentColor":e,r=t.direction,i=void 0===r?"left":r,a=t.distance,c=void 0===a?"md":a,s=t.duration,l=void 0===s?.4:s,u=t.easing,d=void 0===u?"cubic-bezier(0, 0, 0, 1)":u,f=t.hideOutline,m=void 0===f||f,h=t.label,p=t.lines,j=void 0===p?3:p,g=t.onToggle,O=t.render,v=t.rounded,x=void 0!==v&&v,y=t.size,w=void 0===y?32:y,E=t.toggle,A=t.toggled,N=Object(o.useState)(!1),T=Object(b.a)(N,2),C=T[0],S=T[1],P=Math.max(12,Math.min(48,w)),I=Math.round((48-P)/2),k=P/12,L=Math.round(k),M=P/(j*(("lg"===c?.25:"sm"===c?.75:.5)+(3===j?1:1.25))),H=Math.round(M),R=L*j+H*(j-1),D=Math.round((48-R)/2),F=parseFloat((P/(3===j?"lg"===c?4.0425:"sm"===c?5.1625:4.6325:"lg"===c?6.7875:"sm"===c?8.4875:7.6675)-(k-L+(M-H))/(3===j?1:2)/(4/3)).toFixed(2)),U=Math.max(0,l),B={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(U,"s ").concat(d),userSelect:"none",width:"".concat(48,"px")},V={background:n,height:"".concat(L,"px"),left:"".concat(I,"px"),position:"absolute"};m&&(B.outline="none"),x&&(V.borderRadius="9em");var z=E||S,J=A||C;return O({barHeight:L,barStyles:V,burgerStyles:B,easing:d,handler:function(){z(!J),"function"===typeof g&&g(!J)},isLeft:"left"===i,isToggled:J,label:h,margin:H,move:F,time:U,topOffset:D,width:P})};function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var p=function(t){return r.a.createElement(m,h({},t,{render:function(t){return r.a.createElement("div",{className:"hamburger-react","aria-label":t.label,onClick:t.handler,onKeyUp:function(e){return"Enter"===e.key&&t.handler()},role:"button",style:Object(f.a)(Object(f.a)({},t.burgerStyles),{},{transform:"".concat(t.isToggled?"rotate(".concat(90*(t.isLeft?-1:1),"deg)"):"none")}),tabIndex:0},r.a.createElement("div",{style:Object(f.a)(Object(f.a)({},t.barStyles),{},{width:"".concat(t.width,"px"),top:"".concat(t.topOffset,"px"),transition:"".concat(t.time,"s ").concat(t.easing),transform:"".concat(t.isToggled?"rotate(".concat(45*(t.isLeft?-1:1),"deg) translate(").concat(t.move*(t.isLeft?-1:1),"px, ").concat(t.move,"px)"):"none")})}),r.a.createElement("div",{style:Object(f.a)(Object(f.a)({},t.barStyles),{},{width:"".concat(t.width,"px"),top:"".concat(t.topOffset+t.barHeight+t.margin,"px"),transition:"".concat(t.time,"s ").concat(t.easing),transform:"".concat(t.isToggled?"scaleX(0)":"none")})}),r.a.createElement("div",{style:Object(f.a)(Object(f.a)({},t.barStyles),{},{width:"".concat(t.width,"px"),top:"".concat(t.topOffset+2*t.barHeight+2*t.margin,"px"),transition:"".concat(t.time,"s ").concat(t.easing),transform:"".concat(t.isToggled?"rotate(".concat(45*(t.isLeft?1:-1),"deg) translate(").concat(t.move*(t.isLeft?-1:1),"px, ").concat(-1*t.move,"px)"):"none")})}))}}))},j=n(43),g=(n(69),n(3)),O=n(72),v=n(38),x=n(41),y=(n(9),n(202)),w=n(42),E=n(76),A=n(78),N=n(67),T=n(51),C=o.forwardRef((function(t,e){var n=t.children,r=t.classes,i=t.className,a=t.collapsedHeight,c=void 0===a?"0px":a,s=t.component,l=void 0===s?"div":s,u=t.disableStrictModeCompat,d=void 0!==u&&u,b=t.in,f=t.onEnter,m=t.onEntered,h=t.onEntering,p=t.onExit,j=t.onExited,w=t.onExiting,C=t.style,S=t.timeout,P=void 0===S?E.b.standard:S,I=t.TransitionComponent,k=void 0===I?y.a:I,L=Object(v.a)(t,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),M=Object(N.a)(),H=o.useRef(),R=o.useRef(null),D=o.useRef(),F="number"===typeof c?"".concat(c,"px"):c;o.useEffect((function(){return function(){clearTimeout(H.current)}}),[]);var U=M.unstable_strictMode&&!d,B=o.useRef(null),V=Object(T.a)(e,U?B:void 0),z=function(t){return function(e,n){if(t){var o=U?[B.current,e]:[e,n],r=Object(O.a)(o,2),i=r[0],a=r[1];void 0===a?t(i):t(i,a)}}},J=z((function(t,e){t.style.height=F,f&&f(t,e)})),X=z((function(t,e){var n=R.current?R.current.clientHeight:0,o=Object(A.a)({style:C,timeout:P},{mode:"enter"}).duration;if("auto"===P){var r=M.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(r,"ms"),D.current=r}else t.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");t.style.height="".concat(n,"px"),h&&h(t,e)})),Y=z((function(t,e){t.style.height="auto",m&&m(t,e)})),q=z((function(t){var e=R.current?R.current.clientHeight:0;t.style.height="".concat(e,"px"),p&&p(t)})),G=z(j),K=z((function(t){var e=R.current?R.current.clientHeight:0,n=Object(A.a)({style:C,timeout:P},{mode:"exit"}).duration;if("auto"===P){var o=M.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(o,"ms"),D.current=o}else t.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");t.style.height=F,w&&w(t)}));return o.createElement(k,Object(g.a)({in:b,onEnter:J,onEntered:Y,onEntering:X,onExit:q,onExited:G,onExiting:K,addEndListener:function(t,e){var n=U?t:e;"auto"===P&&(H.current=setTimeout(n,D.current||0))},nodeRef:U?B:void 0,timeout:"auto"===P?null:P},L),(function(t,e){return o.createElement(l,Object(g.a)({className:Object(x.a)(r.container,i,{entered:r.entered,exited:!b&&"0px"===F&&r.hidden}[t]),style:Object(g.a)({minHeight:F},C),ref:V},e),o.createElement("div",{className:r.wrapper,ref:R},o.createElement("div",{className:r.wrapperInner},n)))}))}));C.muiSupportAuto=!0;var S=Object(w.a)((function(t){return{container:{height:0,overflow:"hidden",transition:t.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(C),P=n(48),I=function(){var t=Object(o.useState)(!1),e=Object(b.a)(t,2),n=e[0],r=e[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsxs)("nav",{className:"containerNav",children:[Object(u.jsx)("div",{className:"start"}),Object(u.jsx)("div",{className:"navImage",children:Object(u.jsx)(i.a,{to:"/Aashirwad#top",onClick:function(){r(!1)},children:Object(u.jsx)("img",{src:j.a,alt:"logo"})})}),Object(u.jsx)("button",{onClick:function(){r(!n)},children:Object(u.jsx)(p,{direction:"left",className:"ham",duration:.2,color:"black",toggled:n,toggle:r})})]}),Object(u.jsxs)(S,{in:n,className:"colapse",children:[Object(u.jsx)(i.a,{to:"/Aashirwad/About#top",className:"navfade",children:"About Us"}),Object(u.jsx)(i.a,{to:"/Aashirwad/Path#top",className:"navfade",children:"Pathology Equipments"}),Object(u.jsx)(i.a,{onClick:function(){r(!n)},to:"/Aashirwad#contact",className:"navfade",children:"Contact Us"}),Object(u.jsx)("div",{className:"mobbuttonAlign",children:Object(u.jsx)(i.a,{to:"/Aashirwad/Form",children:Object(u.jsx)(P.a,{text:"book an Appointment"})})})]})]})})};e.default=function(t){var e=t.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(I,{}),e,Object(u.jsx)(d,{})]})}}}]);
//# sourceMappingURL=12.b2f02b20.chunk.js.map