"use strict";(self.webpackChunknocoder_blog=self.webpackChunknocoder_blog||[]).push([[351],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,o=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,o=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,s=o,o=!0,l++):o&&s&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=o,o=!1,i=!0):(i=r(c)===c&&n(c)!==c,s=o,o=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(o,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return k},P:function(){return w},S:function(){return W},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),i=a.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=s(e,g);return r.createElement(r.Fragment,null,r.createElement(m,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=s(e,f);return r.createElement("img",o({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,h);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,o({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=s(e,E);return t?r.createElement(v,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(v,o({},e)),r.createElement("noscript",null,r.createElement(v,o({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:N},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],O=new Set;let j,M;const R=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:g,onStartLoad:m,onLoad:p,onError:f}=e,h=s(e,T);const{width:y,height:v,layout:b}=n,E=c(y,v,b),{style:w,className:k}=E,S=s(E,I),L=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);g&&(d=g);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,v);return(0,r.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return M=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void O.add(C);if(M&&O.has(C))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;L.current&&(L.current.innerHTML=a(o({isLoading:!0,isLoaded:O.has(C),image:n},h)),O.has(C)||(t=requestAnimationFrame((()=>{L.current&&(r=s(L.current,C,O,i,m,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{O.has(C)&&M&&(L.current.innerHTML=M(o({isLoading:O.has(C),isLoaded:O.has(C),image:n},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,o({},S,{style:o({},w,i,{backgroundColor:u}),className:k+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(R,e):null}));_.propTypes=x,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=s(t,q);return i&&console.warn(i),n?r.createElement(e,o({image:n},l)):(console.warn("Image not loaded",a),null)}}const A=P((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:g="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=s(e,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=o({objectFit:y,objectPosition:v,backgroundColor:h},f);const{width:E,height:N,layout:x,images:T,placeholder:I,backgroundColor:O}=l,j=c(E,N,x),{style:M,className:R}=j,_=s(j,L),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=o({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>o({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,o({},_,{style:o({},M,i,{backgroundColor:h}),className:R+(a?" "+a:"")}),r.createElement(p,{layout:x,width:E,height:N},r.createElement(w,o({},d(I,!1,x,E,N,O,y,v))),r.createElement(k,o({"data-gatsby-image-ssr":"",className:m},b,u("eager"===g,!1,q,g,f)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},D=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:N,width:z,height:z,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=F;const W=P(_);W.displayName="StaticImage",W.propTypes=F},9116:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(7294),n=a(1883);var i=e=>{let{checked:t,onChange:a}=e;return r.createElement("span",{className:"toggle-control"},r.createElement("input",{className:"dmcheck",type:"checkbox",checked:t,onChange:a,id:"dmcheck",display:"none"}),r.createElement("label",{htmlFor:"dmcheck"}))};function o(e,t,n,i){void 0===n&&(n=a.g),void 0===i&&(i={});var o=(0,r.useRef)(),s=i.capture,l=i.passive,c=i.once;(0,r.useEffect)((function(){o.current=t}),[t]),(0,r.useEffect)((function(){if(a.g&&a.g.addEventListener){var t=function(e){return o.current(e)},r={capture:s,passive:l,once:c};return a.g.addEventListener(e,t,r),function(){a.g.removeEventListener(e,t,r)}}}),[e,a.g,s,l,c])}var s={},l=function(e,t,a){return s[e]||(s[e]={callbacks:[],value:a}),s[e].callbacks.push(t),{deregister:function(){var a=s[e].callbacks,r=a.indexOf(t);r>-1&&a.splice(r,1)},emit:function(a){s[e].value!==a&&(s[e].value=a,s[e].callbacks.forEach((function(e){t!==e&&e(a)})))}}};function c(e,t){if(void 0===t&&(t=void 0!==a.g&&a.g.localStorage?a.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var n=(i=t,{get:function(e,t){var a=i.getItem(e);return null==a?"function"==typeof t?t():t:JSON.parse(a)},set:function(e,t){i.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,a){var n=a.get,i=a.set,s=(0,r.useRef)(null),c=(0,r.useState)((function(){return n(t,e)})),u=c[0],d=c[1];o("storage",(function(e){if(e.key===t){var a=JSON.parse(e.newValue);u!==a&&d(a)}})),(0,r.useEffect)((function(){return s.current=l(t,d,e),function(){s.current.deregister()}}),[e,t]);var g=(0,r.useCallback)((function(e){var a="function"==typeof e?e(u):e;i(t,a),d(a),s.current.emit(e)}),[u,i,t]);return[u,g]}(t,e,n)}}var i;return r.useState}var u=function(){},d={classList:{add:u,remove:u}},g=function(e,t,n){void 0===n&&(n=a.g);var i=e?c(e,t):r.useState,o=a.g.matchMedia?a.g.matchMedia("(prefers-color-scheme: dark)"):{},s={addEventListener:function(e,t){return o.addListener&&o.addListener(t)},removeEventListener:function(e,t){return o.removeListener&&o.removeListener(t)}},l="(prefers-color-scheme: dark)"===o.media,u=a.g.document&&a.g.document.body||d;return{usePersistedDarkModeState:i,getDefaultOnChange:function(e,t,a){return void 0===e&&(e=u),void 0===t&&(t="dark-mode"),void 0===a&&(a="light-mode"),function(r){e.classList.add(r?t:a),e.classList.remove(r?a:t)}},mediaQueryEventTarget:s,getInitialValue:function(e){return l?o.matches:e}}};var m=()=>{const e=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var a=t.element,n=t.classNameDark,i=t.classNameLight,s=t.onChange,l=t.storageKey;void 0===l&&(l="darkMode");var c=t.storageProvider,u=t.global,d=(0,r.useMemo)((function(){return g(l,c,u)}),[l,c,u]),m=d.getDefaultOnChange,p=d.mediaQueryEventTarget,f=(0,d.usePersistedDarkModeState)((0,d.getInitialValue)(e)),h=f[0],y=f[1],v=(0,r.useMemo)((function(){return s||m(a,n,i)}),[s,a,n,i,m]);return(0,r.useEffect)((function(){v(h)}),[v,h]),o("change",(function(e){return y(e.matches)}),p),{value:h,enable:(0,r.useCallback)((function(){return y(!0)}),[y]),disable:(0,r.useCallback)((function(){return y(!1)}),[y]),toggle:(0,r.useCallback)((function(){return y((function(e){return!e}))}),[y])}}(!1);return r.createElement("div",{className:"dark-mode-toggle"},r.createElement("a",{href:"javascript:void(0);",onClick:e.disable},"☀"),"  ",r.createElement(i,{checked:e.value,onChange:e.toggle}),"  ",r.createElement("a",{href:"javascript:void(0)",onClick:e.enable},"☾"))},p=a(8032);var f=e=>{let{location:t,title:i,children:o}=e;const s="/"===t.pathname;let l;return l=r.createElement("div",{className:"navbar"},r.createElement(n.Link,{className:"header-link-home",to:"/"},r.createElement(p.S,{layout:"fixed",formats:["auto"],src:"../images/title-logo.png",height:32,quality:100,alt:"Jason Yang's Blog",__imageData:a(2943)})),r.createElement(m,null)),r.createElement("div",{className:"global-wrapper","data-is-root-path":s},r.createElement("header",{className:"global-header"},l),r.createElement("main",null,o),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,a){var r=a(7294),n=a(1883);t.Z=e=>{var t;let{description:a,title:i,children:o}=e;const{site:s}=(0,n.useStaticQuery)("3589320610"),l=a||s.siteMetadata.description,c=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,c?i+" | "+c:i),r.createElement("meta",{name:"description",content:l}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:l}),r.createElement("meta",{property:"og:type",content:"website"}),o)}},2943:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#081818","images":{"fallback":{"src":"/static/d35fc0dedd655f97391d859ec843373f/6f253/title-logo.png","srcSet":"/static/d35fc0dedd655f97391d859ec843373f/6f253/title-logo.png 248w","sizes":"248px"},"sources":[]},"width":248,"height":32}')}}]);
//# sourceMappingURL=commons-52d47fa71f03717b0b6f.js.map