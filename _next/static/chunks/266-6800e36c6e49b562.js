(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===s)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},4266:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ie}});var r=n(4184),o=n.n(r),s=!("undefined"===typeof window||!window.document||!window.document.createElement),a=!1,i=!1;try{var l={get passive(){return a=!0},get once(){return i=a=!0}};s&&(window.addEventListener("test",l,l),window.removeEventListener("test",l,!0))}catch(Ue){}var c=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!i){var o=r.once,s=r.capture,l=n;!i&&o&&(l=n.__once||function e(r){this.removeEventListener(t,e,s),n.call(this,r)},n.__once=l),e.addEventListener(t,l,a?r:s)}e.addEventListener(t,n,r)};function u(e){return e&&e.ownerDocument||document}var d,f=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};function p(e){if((!d&&0!==d||e)&&s){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),d=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return d}var h=n(7294);var m=function(e){var t=(0,h.useRef)(e);return(0,h.useEffect)((function(){t.current=e}),[e]),t};function v(e){var t=m(e);return(0,h.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var E=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var g=function(e,t){return(0,h.useMemo)((function(){return function(e,t){var n=E(e),r=E(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};function x(e){var t=function(e){var t=(0,h.useRef)(e);return t.current=e,t}(e);(0,h.useEffect)((function(){return function(){return t.current()}}),[])}function b(e,t){return function(e){var t=u(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var y=/([A-Z])/g;var C=/^ms-/;function k(e){return function(e){return e.replace(y,"-$1").toLowerCase()}(e).replace(C,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(k(t))||b(e).getPropertyValue(k(t));Object.keys(t).forEach((function(o){var s=t[o];s||0===s?!function(e){return!(!e||!w.test(e))}(o)?n+=k(o)+": "+s+";":r+=o+"("+s+") ":e.style.removeProperty(k(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};var R=function(e,t,n,r){return c(e,t,n,r),function(){f(e,t,n,r)}};function O(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),s=R(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),s()}}function S(e,t,n,r){null==n&&(n=function(e){var t=N(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=O(e,n,r),s=R(e,"transitionend",t);return function(){o(),s()}}function T(e){void 0===e&&(e=u());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(Ue){return e.body}}function j(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var L=n(3935);const D=`data-rr-ui-${"modal-open"}`;var F=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(N(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(D,""),N(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(D),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const M=(0,h.createContext)(s?window:void 0);M.Provider;function P(){return(0,h.useContext)(M)}const A=(e,t)=>{var n;return s?null==e?(t||u()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null):null};var B=n(5893);const $=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let _;function H(e){const t=P(),n=e||function(e){return _||(_=new F({ownerDocument:null==e?void 0:e.document})),_}(t),r=(0,h.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,h.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,h.useCallback)((e=>{r.current.backdrop=e}),[])})}const W=(0,h.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:a,children:i,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,backdropTransition:p,autoFocus:m=!0,enforceFocus:E=!0,restoreFocus:g=!0,restoreFocusOptions:b,renderDialog:y,renderBackdrop:C=(e=>(0,B.jsx)("div",Object.assign({},e))),manager:k,container:w,onShow:N,onHide:O=(()=>{}),onExit:S,onExited:D,onExiting:F,onEnter:M,onEntering:_,onEntered:W}=e,I=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,$);const U=function(e,t){const n=P(),[r,o]=(0,h.useState)((()=>A(e,null==n?void 0:n.document)));if(!r){const t=A(e);t&&o(t)}return(0,h.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,h.useEffect)((()=>{const t=A(e);t!==r&&o(t)}),[e,r]),r}(w),V=H(k),K=function(){var e=(0,h.useRef)(!0),t=(0,h.useRef)((function(){return e.current}));return(0,h.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),z=function(e){var t=(0,h.useRef)(null);return(0,h.useEffect)((function(){t.current=e})),t.current}(n),[X,Z]=(0,h.useState)(!n),G=(0,h.useRef)(null);(0,h.useImperativeHandle)(t,(()=>V),[V]),s&&!z&&n&&(G.current=T()),f||n||X?n&&X&&Z(!1):Z(!0);const Y=v((()=>{if(V.add(),ne.current=R(document,"keydown",ee),te.current=R(document,"focus",(()=>setTimeout(J)),!0),N&&N(),m){const e=T(document);V.dialog&&e&&!j(V.dialog,e)&&(G.current=e,V.dialog.focus())}})),q=v((()=>{var e;(V.remove(),null==ne.current||ne.current(),null==te.current||te.current(),g)&&(null==(e=G.current)||null==e.focus||e.focus(b),G.current=null)}));(0,h.useEffect)((()=>{n&&U&&Y()}),[n,U,Y]),(0,h.useEffect)((()=>{X&&q()}),[X,q]),x((()=>{q()}));const J=v((()=>{if(!E||!K()||!V.isTopModal())return;const e=T();V.dialog&&e&&!j(V.dialog,e)&&V.dialog.focus()})),Q=v((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&O())})),ee=v((e=>{c&&27===e.keyCode&&V.isTopModal()&&(null==d||d(e),e.defaultPrevented||O())})),te=(0,h.useRef)(),ne=(0,h.useRef)(),re=(...e)=>{Z(!0),null==D||D(...e)},oe=f;if(!U||!(n||oe&&!X))return null;const se=Object.assign({role:r,ref:V.setDialogRef,"aria-modal":"dialog"===r||void 0},I,{style:a,className:o,tabIndex:-1});let ae=y?y(se):(0,B.jsx)("div",Object.assign({},se,{children:h.cloneElement(i,{role:"document"})}));oe&&(ae=(0,B.jsx)(oe,{appear:!0,unmountOnExit:!0,in:!!n,onExit:S,onExiting:F,onExited:re,onEnter:M,onEntering:_,onEntered:W,children:ae}));let ie=null;if(l){const e=p;ie=C({ref:V.setBackdropRef,onClick:Q}),e&&(ie=(0,B.jsx)(e,{appear:!0,in:!!n,children:ie}))}return(0,B.jsx)(B.Fragment,{children:L.createPortal((0,B.jsxs)(B.Fragment,{children:[ie,ae]}),U)})}));W.displayName="Modal";var I=Object.assign(W,{Manager:F});var U=Function.prototype.bind.call(Function.prototype.call,[].slice);function V(e,t){return U(e.querySelectorAll(t))}function K(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const z=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",X=".sticky-top",Z=".navbar-toggler";class G extends F{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,N(t,{[e]:`${parseFloat(N(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],N(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();var n,r;if(r="modal-open",(n=t).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)),!e.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";V(t,z).forEach((t=>this.adjustAndStore(o,t,e.scrollBarWidth))),V(t,X).forEach((t=>this.adjustAndStore(s,t,-e.scrollBarWidth))),V(t,Z).forEach((t=>this.adjustAndStore(s,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();var n,r;r="modal-open",(n=t).classList?n.classList.remove(r):"string"===typeof n.className?n.className=K(n.className,r):n.setAttribute("class",K(n.className&&n.className.baseVal||"",r));const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";V(t,z).forEach((e=>this.restore(o,e))),V(t,X).forEach((e=>this.restore(s,e))),V(t,Z).forEach((e=>this.restore(s,e)))}}let Y;function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}var J=!1,Q=h.createContext(null),ee="unmounted",te="exited",ne="entering",re="entered",oe="exiting",se=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,s=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?s?(o=te,r.appearStatus=ne):o=re:o=t.unmountOnExit||t.mountOnEnter?ee:te,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,q(t,n),r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===ee?{status:te}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==ne&&n!==re&&(t=ne):n!==ne&&n!==re||(t=oe)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===ne?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===te&&this.setState({status:ee})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[L.findDOMNode(this),r],s=o[0],a=o[1],i=this.getTimeouts(),l=r?i.appear:i.enter;!e&&!n||J?this.safeSetState({status:re},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,a),this.safeSetState({status:ne},(function(){t.props.onEntering(s,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:re},(function(){t.props.onEntered(s,a)}))}))})))},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!J?(this.props.onExit(r),this.safeSetState({status:oe},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:te},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:te},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=o[0],a=o[1];this.props.addEndListener(s,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===ee)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return h.createElement(Q.Provider,{value:null},"function"===typeof n?n(e,r):h.cloneElement(h.Children.only(n),r))},r}(h.Component);function ae(){}se.contextType=Q,se.propTypes={},se.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ae,onEntering:ae,onEntered:ae,onExit:ae,onExiting:ae,onExited:ae},se.UNMOUNTED=ee,se.EXITED=te,se.ENTERING=ne,se.ENTERED=re,se.EXITING=oe;var ie=se;function le(e,t){const n=N(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function ce(e,t){const n=le(e,"transitionDuration"),r=le(e,"transitionDelay"),o=S(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var ue=h.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:s,addEndListener:a,children:i,childRef:l,...c},u)=>{const d=(0,h.useRef)(null),f=g(d,l),p=e=>{var t;f((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},m=e=>t=>{e&&d.current&&e(d.current,t)},v=(0,h.useCallback)(m(e),[e]),E=(0,h.useCallback)(m(t),[t]),x=(0,h.useCallback)(m(n),[n]),b=(0,h.useCallback)(m(r),[r]),y=(0,h.useCallback)(m(o),[o]),C=(0,h.useCallback)(m(s),[s]),k=(0,h.useCallback)(m(a),[a]);return(0,B.jsx)(ie,{ref:u,...c,onEnter:v,onEntered:x,onEntering:E,onExit:b,onExited:C,onExiting:y,addEndListener:k,nodeRef:d,children:"function"===typeof i?(e,t)=>i(e,{...t,ref:p}):h.cloneElement(i,{ref:p})})}));const de={[ne]:"show",[re]:"show"},fe=h.forwardRef((({className:e,children:t,transitionClasses:n={},...r},s)=>{const a=(0,h.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==r.onEnter||r.onEnter(e,t)}),[r]);return(0,B.jsx)(ue,{ref:s,addEndListener:ce,...r,onEnter:a,childRef:t.ref,children:(r,s)=>h.cloneElement(t,{...s,className:o()("fade",e,t.props.className,de[r],n[r])})})}));fe.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},fe.displayName="Fade";var pe=fe,he=/-(.)/g;const me=["xxl","xl","lg","md","sm","xs"],ve=h.createContext({prefixes:{},breakpoints:me}),{Consumer:Ee,Provider:ge}=ve;function xe(e,t){const{prefixes:n}=(0,h.useContext)(ve);return e||n[t]||t}const be=e=>{return e[0].toUpperCase()+(t=e,t.replace(he,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function ye(e,{displayName:t=be(e),Component:n,defaultProps:r}={}){const s=h.forwardRef((({className:t,bsPrefix:r,as:s=n||"div",...a},i)=>{const l=xe(r,e);return(0,B.jsx)(s,{ref:i,className:o()(t,l),...a})}));return s.defaultProps=r,s.displayName=t,s}var Ce=ye("modal-body");var ke=h.createContext({onHide(){}});const we=h.forwardRef((({bsPrefix:e,className:t,contentClassName:n,centered:r,size:s,fullscreen:a,children:i,scrollable:l,...c},u)=>{const d=`${e=xe(e,"modal")}-dialog`,f="string"===typeof a?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return(0,B.jsx)("div",{...c,ref:u,className:o()(d,t,s&&`${e}-${s}`,r&&`${d}-centered`,l&&`${d}-scrollable`,a&&f),children:(0,B.jsx)("div",{className:o()(`${e}-content`,n),children:i})})}));we.displayName="ModalDialog";var Ne=we,Re=ye("modal-footer"),Oe=n(5697),Se=n.n(Oe);const Te={"aria-label":Se().string,onClick:Se().func,variant:Se().oneOf(["white"])},je=h.forwardRef((({className:e,variant:t,...n},r)=>(0,B.jsx)("button",{ref:r,type:"button",className:o()("btn-close",t&&`btn-close-${t}`,e),...n})));je.displayName="CloseButton",je.propTypes=Te,je.defaultProps={"aria-label":"Close"};var Le=je;const De=h.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:o,...s},a)=>{const i=(0,h.useContext)(ke),l=v((()=>{null==i||i.onHide(),null==r||r()}));return(0,B.jsxs)("div",{ref:a,...s,children:[o,n&&(0,B.jsx)(Le,{"aria-label":e,variant:t,onClick:l})]})}));De.defaultProps={closeLabel:"Close",closeButton:!1};var Fe=De;const Me=h.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=xe(e,"modal-header"),(0,B.jsx)(Fe,{ref:r,...n,className:o()(t,e)}))));Me.displayName="ModalHeader",Me.defaultProps={closeLabel:"Close",closeButton:!1};var Pe=Me;var Ae,Be=ye("modal-title",{Component:(Ae="h4",h.forwardRef(((e,t)=>(0,B.jsx)("div",{...e,ref:t,className:o()(e.className,Ae)}))))});const $e={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Ne};function _e(e){return(0,B.jsx)(pe,{...e,timeout:null})}function He(e){return(0,B.jsx)(pe,{...e,timeout:null})}const We=h.forwardRef((({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:a,children:i,dialogAs:l,"aria-labelledby":d,"aria-describedby":m,"aria-label":E,show:b,animation:y,backdrop:C,keyboard:k,onEscapeKeyDown:w,onShow:N,onHide:R,container:O,autoFocus:T,enforceFocus:j,restoreFocus:L,restoreFocusOptions:D,onEntered:F,onExit:M,onExiting:P,onEnter:A,onEntering:$,onExited:_,backdropClassName:H,manager:W,...U},V)=>{const[K,z]=(0,h.useState)({}),[X,Z]=(0,h.useState)(!1),q=(0,h.useRef)(!1),J=(0,h.useRef)(!1),Q=(0,h.useRef)(null),[ee,te]=(0,h.useState)(null),ne=g(V,te),re=v(R),oe=function(){const{dir:e}=(0,h.useContext)(ve);return"rtl"===e}();e=xe(e,"modal");const se=(0,h.useMemo)((()=>({onHide:re})),[re]);function ae(){return W||function(e){return Y||(Y=new G(e)),Y}({isRTL:oe})}function ie(e){if(!s)return;const t=ae().getScrollbarWidth()>0,n=e.scrollHeight>u(e).documentElement.clientHeight;z({paddingRight:t&&!n?p():void 0,paddingLeft:!t&&n?p():void 0})}const le=v((()=>{ee&&ie(ee.dialog)}));x((()=>{f(window,"resize",le),null==Q.current||Q.current()}));const ce=()=>{q.current=!0},ue=e=>{q.current&&ee&&e.target===ee.dialog&&(J.current=!0),q.current=!1},de=()=>{Z(!0),Q.current=S(ee.dialog,(()=>{Z(!1)}))},fe=e=>{"static"!==C?J.current||e.target!==e.currentTarget?J.current=!1:null==R||R():(e=>{e.target===e.currentTarget&&de()})(e)},pe=(0,h.useCallback)((t=>(0,B.jsx)("div",{...t,className:o()(`${e}-backdrop`,H,!y&&"show")})),[y,H,e]),he={...n,...K};he.display="block";return(0,B.jsx)(ke.Provider,{value:se,children:(0,B.jsx)(I,{show:b,ref:ne,backdrop:C,container:O,keyboard:!0,autoFocus:T,enforceFocus:j,restoreFocus:L,restoreFocusOptions:D,onEscapeKeyDown:e=>{k||"static"!==C?k&&w&&w(e):(e.preventDefault(),de())},onShow:N,onHide:R,onEnter:(e,t)=>{e&&ie(e),null==A||A(e,t)},onEntering:(e,t)=>{null==$||$(e,t),c(window,"resize",le)},onEntered:F,onExit:e=>{null==Q.current||Q.current(),null==M||M(e)},onExiting:P,onExited:e=>{e&&(e.style.display=""),null==_||_(e),f(window,"resize",le)},manager:ae(),transition:y?_e:void 0,backdropTransition:y?He:void 0,renderBackdrop:pe,renderDialog:n=>(0,B.jsx)("div",{role:"dialog",...n,style:he,className:o()(t,e,X&&`${e}-static`),onClick:C?fe:void 0,onMouseUp:ue,"aria-label":E,"aria-labelledby":d,"aria-describedby":m,children:(0,B.jsx)(l,{...U,onMouseDown:ce,className:r,contentClassName:a,children:i})})})})}));We.displayName="Modal",We.defaultProps=$e;var Ie=Object.assign(We,{Body:Ce,Header:Pe,Title:Be,Footer:Re,Dialog:Ne,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);