"use strict";(self.webpackChunkFunnyEagle=self.webpackChunkFunnyEagle||[]).push([[678],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,a=!1;for(let r=0;r<e.length;r++){const s=e[r];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,a=n,n=!0,r++):n&&a&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,r-1)+"-"+e.slice(r-1),a=n,n=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,a=n,n=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},8032:function(e,t,n){n.d(t,{G:function(){return F},L:function(){return h},M:function(){return j},P:function(){return x},_:function(){return o},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return l}});var a=n(7294),r=(n(3204),n(5697)),s=n.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t.indexOf(n=s[a])>=0||(r[n]=e[n]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const a={};let r="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,n,a,r){return void 0===r&&(r={}),i({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,n,a,r,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===n?(c.width=a,c.height=r,c.backgroundColor=s,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],g=function(e){let{layout:t,width:n,height:r}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,n=o(e,m);return a.createElement(a.Fragment,null,a.createElement(g,i({},n)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:r,alt:s="",shouldLoad:l}=e,c=o(e,p);return a.createElement("img",i({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:s}))},w=function(e){let{fallback:t,sources:n=[],shouldLoad:r=!0}=e,s=o(e,f);const l=s.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,i({},s,t,{sizes:l,shouldLoad:r}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:s}=e;return a.createElement("source",{key:t+"-"+s+"-"+n,type:s,media:t,srcSet:r?n:void 0,"data-srcset":r?void 0:n,sizes:l})})),c):c};var b;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},w.displayName="Picture",w.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],x=function(e){let{fallback:t}=e,n=o(e,v);return t?a.createElement(w,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},n))};x.displayName="Placeholder",x.propTypes={fallback:r.string,sources:null==(b=w.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const j=function(e){return a.createElement(a.Fragment,null,a.createElement(w,i({},e)),a.createElement("noscript",null,a.createElement(w,i({},e,{shouldLoad:!0}))))};j.displayName="MainImage",j.propTypes=w.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],E=e=>e.replace(/\n/g,""),S=function(e,t,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),i=3;i<a;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:s().object.isRequired,alt:S},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],I=new Set;let _,M;const A=function(e){let{as:t="div",image:r,style:s,backgroundColor:d,className:u,class:m,onStartLoad:g,onLoad:h,onError:p}=e,f=o(e,L);const{width:y,height:w,layout:b}=r,v=c(y,w,b),{style:x,className:j}=v,k=o(v,T),C=(0,a.useRef)(),E=(0,a.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(u=m);const S=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,y,w);return(0,a.useEffect)((()=>{_||(_=Promise.all([n.e(774),n.e(731)]).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return M=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(E);if(M&&I.has(E))return;let t,a;return _.then((e=>{let{renderImageToString:n,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=n(i({isLoading:!0,isLoaded:I.has(E),image:r},f)),I.has(E)||(t=requestAnimationFrame((()=>{C.current&&(a=o(C.current,E,I,s,g,h,p))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[r]),(0,a.useLayoutEffect)((()=>{I.has(E)&&M&&(C.current.innerHTML=M(i({isLoading:I.has(E),isLoaded:I.has(E),image:r},f)),null==g||g({wasCached:!0}),null==h||h({wasCached:!0}))}),[r]),(0,a.createElement)(t,i({},k,{style:i({},x,s,{backgroundColor:d}),className:j+(u?" "+u:""),ref:C,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},F=(0,a.memo)((function(e){return e.image?(0,a.createElement)(A,e):null}));F.propTypes=N,F.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:n,__imageData:r,__error:s}=t,l=o(t,O);return s&&console.warn(s),r?a.createElement(e,i({image:r},l)):(console.warn("Image not loaded",n),null)}}const P=q((function(e){let{as:t="div",className:n,class:r,style:s,image:l,loading:m="lazy",imgClassName:g,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:w}=e,b=o(e,k);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(n=r),p=i({objectFit:y,objectPosition:w,backgroundColor:f},p);const{width:v,height:S,layout:N,images:L,placeholder:T,backgroundColor:I}=l,_=c(v,S,N),{style:M,className:A}=_,F=o(_,C),O={fallback:void 0,sources:[]};return L.fallback&&(O.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?E(L.fallback.srcSet):void 0})),L.sources&&(O.sources=L.sources.map((e=>i({},e,{srcSet:E(e.srcSet)})))),a.createElement(t,i({},F,{style:i({},M,s,{backgroundColor:f}),className:A+(n?" "+n:"")}),a.createElement(h,{layout:N,width:v,height:S},a.createElement(x,i({},u(T,!1,N,v,S,I,y,w))),a.createElement(j,i({"data-gatsby-image-ssr":"",className:g},b,d("eager"===m,!1,O,m,p)))))})),z=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:S,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=W;const D=q(F);D.displayName="StaticImage",D.propTypes=W},4186:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(4578),r=n(7294),s=n(1883),i=n(2441),o=n(5893);let l=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return(0,o.jsx)("div",{className:"css-menu "+("column"===this.props.direction?"column":"row"),children:i.GI.map((e=>(0,o.jsxs)("a",{target:e.target,href:e.href,children:[(0,o.jsx)("i",{className:"iconfont icon-"+e.icon}),e.name]},e.name)))})},t}(r.Component),c={marginBottom:"1rem"},d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuState:!1,keyword:"",animation:[],year:"",days:"",theme:"",logo:"/funny-eagle-light.jpg"},t.toggleTheme=()=>{"light"===t.state.theme?t.setTheme("dark"):t.setTheme("light")},t.setTheme=e=>{localStorage.setItem("theme",e),document.documentElement.className=e+"-theme",t.setState({theme:e})},t.toggleMenuState=()=>{t.setState({menuState:!t.state.menuState})},t.change=e=>{t.setState({keyword:e.target.value})},t.search=()=>{window.open("https://cn.bing.com/search?q=site%3Afunnyeagle.cn%20"+t.state.keyword)},t.formatTime=e=>{const t=e/1e3;return" "+Math.floor(t/60/60/24)+" 天"},t.handleEnter=e=>{13===e.keyCode&&t.search()},t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({theme:window.theme,year:(new Date).getFullYear(),logo:"/funny-eagle-light.jpg"});window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{e.matches?this.setTheme("dark"):this.setTheme("light")}))},n.render=function(){const{menuState:e,days:t,year:n,theme:a,logo:d}=this.state,{pageName:u,pageDescript:m,children:g,aside:h,className:p}=this.props,f=(0,o.jsxs)("div",{children:[(0,o.jsx)(s.rU,{style:{boxShadow:"none",textDecoration:"none",fontWeight:200},className:"usubeni",to:"/archive",children:(0,o.jsx)("span",{className:"logo-mobile",children:i.aD})}),u?(0,o.jsx)("div",{className:"page-name",children:"#"+u}):null]});return(0,o.jsxs)("div",{className:p,children:[(0,o.jsxs)("div",{className:"css-main",children:[(0,o.jsxs)("aside",{className:"css-aside "+(e?"open":"close"),children:[(0,o.jsxs)("header",{className:"css-header",children:[f,(0,o.jsx)("div",{className:"menu-button",onClick:this.toggleMenuState,children:(0,o.jsx)("i",{className:"iconfont icon-"+(e?"close":"menu")})})]}),h?(0,o.jsx)("div",{className:"css-toc",onClick:this.toggleMenuState,dangerouslySetInnerHTML:{__html:h}}):(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(l,{direction:"column"}),(0,o.jsx)("div",{style:{textAlign:"center",marginBottom:"20px"},children:(0,o.jsx)("input",{placeholder:"关键字，然后 Enter",onChange:this.change,onKeyUp:this.handleEnter})})]})]}),(0,o.jsx)("article",{className:"css-post",children:g})]}),(0,o.jsxs)("footer",{children:[(0,o.jsx)("div",{className:"social-media",style:c,children:i.LF.map((e=>(0,o.jsx)("a",{target:"_blank",href:e.href,children:(0,o.jsx)("i",{className:"iconfont icon-"+e.icon})},e.icon)))}),(0,o.jsxs)("div",{style:c,children:["© ",n," funnyeagle.cn • Theme"," ",(0,o.jsx)("a",{className:"usubeni",target:"_blank",href:"https://github.com/ssshooter/gatsby-theme-usubeni",children:"usubeni"})," ","• Powered by"," ",(0,o.jsx)("a",{className:"usubeni",target:"_blank",href:"https://www.gatsbyjs.org/",children:"Gatsbyjs"}),(0,o.jsx)("br",{}),(0,o.jsx)("a",{href:"https://beian.miit.gov.cn",children:"蜀ICP备2023036051号-1"})]})]}),(0,o.jsx)("div",{className:"theme-toggle",onClick:this.toggleTheme,children:"light"===a?"☀":"☾"})]})},t}(r.Component);var u=d},5049:function(e,t,n){n.d(t,{Z:function(){return s}});n(7294);var a=n(1883);var r=n(5893);var s=function(e){let{description:t,keywords:n,image:s,title:i,pathname:o}=e;const l=(0,a.K2)("2052298874").site.siteMetadata,c={title:i+" | "+l.title,url:""+l.siteUrl+(o||""),description:t||l.description,keywords:n||l.keywords,author:l.author,image:s};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:c.title}),(0,r.jsx)("link",{rel:"canonical",href:c.url}),(0,r.jsx)("meta",{name:"keywords",content:c.keywords.join(",")}),(0,r.jsx)("meta",{name:"description",content:c.description}),(0,r.jsx)("meta",{property:"og:title",content:c.title}),(0,r.jsx)("meta",{property:"og:description",content:c.description}),(0,r.jsx)("meta",{name:"twitter:title",content:c.title}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:url",content:c.url}),(0,r.jsx)("meta",{name:"twitter:description",content:c.description}),(0,r.jsx)("meta",{name:"twitter:creator",content:c.author}),c.img?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image",content:c.image.src}),(0,r.jsx)("meta",{name:"image",content:c.image.src}),(0,r.jsx)("meta",{property:"og:image:width",content:c.image.width}),(0,r.jsx)("meta",{property:"og:image:height",content:c.image.height})]}):null]})}},6558:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});n(7294);var a=n(4186),r=n(8032),s=n(5049),i=n(5893);t.default=function(e){let{data:t}=e;return(0,i.jsx)(a.Z,{children:(0,i.jsx)(r.G,{alt:t.file.name,style:{marginTop:"30px"},image:t.file.childImageSharp.gatsbyImageData})})};const o=e=>{let{location:t}=e;return(0,i.jsx)(s.Z,{title:"主页",pathname:t.pathname})}},2441:function(e,t,n){n.d(t,{GI:function(){return s},JW:function(){return r},LF:function(){return i},Vs:function(){return l},aD:function(){return a},l8:function(){return o}});const a="Funny Eagle",r="https://funnyeagle.cn",s=[{icon:"coding",name:"编程",href:"/tag/coding/"},{icon:"music",name:"音乐",href:"/tag/music/"},{icon:"life",name:"生活",href:"/tag/life/"},{icon:"tag",name:"标签",href:"/tags"},{icon:"archive",name:"归档",href:"/archive"},{icon:"person",name:"关于",href:"/about"}],i=[{icon:"weibo",href:"https://weibo.com/227307890"},{icon:"github-fill",href:"https://github.com/funny-eagle"},{icon:"twitter",href:"https://twitter.com/yangjinlong86"},{icon:"rss",href:"http://funnyeagle.cn/rss.xml"}],o=[{title:"ECMA-262, 9th edition",description:"ECMAScript 语言规范",href:"https://www.ecma-international.org/ecma-262/9.0/index.html",img:"https://www.ecma-international.org/ecma-262/9.0/img/ecma-logo.svg"}],l=[{title:"FunnyEagle",description:"老鹰的博客",href:"http://funnyeagle.cn",img:"http://funnyeagle.cn/static/df1082d3ffc5b1288b5e7e78fe346036/ee81f/profile-pic.avif"}]}}]);
//# sourceMappingURL=component---src-pages-index-js-03dff12640c42a375801.js.map