"use strict";(self.webpackChunknocoder=self.webpackChunknocoder||[]).push([[989],{4186:function(e,t,n){n.d(t,{Z:function(){return h}});var s=n(4578),r=n(7294),a=n(1883),i=n(2441),o=n(5893);let c=function(e){function t(){return e.apply(this,arguments)||this}return(0,s.Z)(t,e),t.prototype.render=function(){return(0,o.jsx)("div",{className:"css-menu "+("column"===this.props.direction?"column":"row"),children:i.GI.map((e=>(0,o.jsxs)("a",{target:e.target,href:e.href,children:[(0,o.jsx)("i",{className:"iconfont icon-"+e.icon}),e.name]},e.name)))})},t}(r.Component),l={marginBottom:"1rem"},m=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).state={menuState:!1,keyword:"",animation:[],year:"",days:"",theme:null},t.toggleTheme=()=>{"light"===t.state.theme?t.setTheme("dark"):t.setTheme("light")},t.setTheme=e=>{localStorage.setItem("theme",e),document.documentElement.className=e+"-theme",t.setState({theme:e})},t.toggleMenuState=()=>{t.setState({menuState:!t.state.menuState})},t.change=e=>{t.setState({keyword:e.target.value})},t.search=()=>{window.open("https://cn.bing.com/search?q=site%3Anocoder.org%20"+t.state.keyword)},t.formatTime=e=>{const t=e/1e3;return" "+Math.floor(t/60/60/24)+" 天"},t.handleEnter=e=>{13===e.keyCode&&t.search()},t}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({theme:window.theme,year:(new Date).getFullYear(),days:this.formatTime(new Date-new Date("2018-12-05T14:13:38"))});window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{e.matches?this.setTheme("dark"):this.setTheme("light")}))},n.render=function(){const{menuState:e,days:t,year:n,theme:s}=this.state,{pageName:m,pageDescript:h,children:d,aside:u,className:g}=this.props,p=(0,o.jsxs)("div",{children:[(0,o.jsxs)(a.rU,{style:{boxShadow:"none",textDecoration:"none",fontWeight:200},className:"usubeni",to:"/tag/coding/",children:[(0,o.jsx)("span",{className:"logo-mobile",children:i.aD}),(0,o.jsx)("img",{className:"logo",src:"/logo.png"})]}),m?(0,o.jsxs)("div",{className:"page-name",children:[(0,o.jsx)("i",{className:"iconfont icon-hash"})," "+m]}):null]});return(0,o.jsxs)("div",{className:g,children:[(0,o.jsxs)("div",{className:"css-main",children:[(0,o.jsx)("article",{className:"css-post",children:d}),(0,o.jsxs)("aside",{className:"css-aside "+(e?"open":"close"),children:[(0,o.jsxs)("header",{className:"css-header",children:[p,(0,o.jsx)("div",{className:"menu-button",onClick:this.toggleMenuState,children:(0,o.jsx)("i",{className:"iconfont icon-"+(e?"close1":"menu1")})})]}),u?(0,o.jsx)("div",{className:"css-toc",onClick:this.toggleMenuState,dangerouslySetInnerHTML:{__html:u}}):(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(c,{direction:"column"}),(0,o.jsx)("div",{style:{textAlign:"center",marginBottom:"20px"},children:(0,o.jsx)("input",{placeholder:"关键字，然后 Enter",onChange:this.change,onKeyUp:this.handleEnter})})]})]})]}),(0,o.jsxs)("footer",{children:[(0,o.jsx)("div",{className:"social-media",style:l,children:i.LF.map((e=>(0,o.jsx)("a",{target:"_blank",href:e.href,children:(0,o.jsx)("i",{className:"iconfont icon-"+e.icon})},e.icon)))}),(0,o.jsxs)("div",{style:l,children:["© ",n," NOCODER.ORG • Theme"," ",(0,o.jsx)("a",{className:"usubeni",target:"_blank",href:"https://github.com/ssshooter/gatsby-theme-usubeni",children:"usubeni"})," ","• powered by"," ",(0,o.jsx)("a",{style:{boxShadow:"none"},target:"_blank",href:"https://www.gatsbyjs.org/",children:"Gatsbyjs"})]})]}),(0,o.jsx)("div",{className:"theme-toggle",onClick:this.toggleTheme,children:"light"===s?"☀":"☾"})]})},t}(r.Component);var h=m},123:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(7294),r=n(1883),a=n(5893);function i(e){return(0,a.jsxs)("div",{className:"css-info",children:[(0,a.jsx)("span",{style:{paddingRight:"12px"},children:e.date}),e.tags?(0,a.jsx)(s.Fragment,{children:e.tags.map(((e,t)=>(0,a.jsx)("span",{style:{paddingRight:"8px"},children:(0,a.jsx)(r.rU,{to:"/tag/"+e,children:e})},e)))}):null]})}},5049:function(e,t,n){n.d(t,{Z:function(){return a}});n(7294);var s=n(1883);var r=n(5893);var a=function(e){let{description:t,keywords:n,image:a,title:i,pathname:o}=e;const c=(0,s.K2)("2052298874").site.siteMetadata,l={title:i+" | "+c.title,url:""+c.siteUrl+(o||""),description:t||c.description,keywords:n||c.keywords,author:c.author,image:a};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:l.title}),(0,r.jsx)("link",{rel:"canonical",href:l.url}),(0,r.jsx)("meta",{name:"keywords",content:l.keywords.join(",")}),(0,r.jsx)("meta",{name:"description",content:l.description}),(0,r.jsx)("meta",{property:"og:title",content:l.title}),(0,r.jsx)("meta",{property:"og:description",content:l.description}),(0,r.jsx)("meta",{name:"twitter:title",content:l.title}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:url",content:l.url}),(0,r.jsx)("meta",{name:"twitter:description",content:l.description}),(0,r.jsx)("meta",{name:"twitter:creator",content:l.author}),l.img?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:image",content:l.image.src}),(0,r.jsx)("meta",{name:"image",content:l.image.src}),(0,r.jsx)("meta",{property:"og:image:width",content:l.image.width}),(0,r.jsx)("meta",{property:"og:image:height",content:l.image.height})]}):null]})}},2441:function(e,t,n){n.d(t,{GI:function(){return a},JW:function(){return r},LF:function(){return i},Vs:function(){return c},aD:function(){return s},l8:function(){return o}});const s="Jason Yang's Website",r="https://wwwiki.top",a=[{icon:"electronics",name:"编程",href:"/tag/coding/"},{icon:"explain",name:"音乐",href:"/tag/music/"},{icon:"explain",name:"生活",href:"/tag/life/"},{icon:"discount",name:"标签",href:"/tags"},{icon:"save",name:"归档",href:"/archive"},{icon:"user1",name:"关于",href:"/about"}],i=[{icon:"weibo",href:"https://weibo.com/227307890"},{icon:"github-fill",href:"https://github.com/nocdr"},{icon:"twitter",href:"https://twitter.com/yangjinlong86"},{icon:"RSS",href:"https://nocoder.org/rss.xml"}],o=[{title:"ECMA-262, 9th edition",description:"ECMAScript 语言规范",href:"https://www.ecma-international.org/ecma-262/9.0/index.html",img:"https://www.ecma-international.org/ecma-262/9.0/img/ecma-logo.svg"}],c=[{title:"老鹰杰森",description:"老鹰杰森的个人网站",href:"https://nocoder.org/",img:"https://nocoder.org/static/df1082d3ffc5b1288b5e7e78fe346036/ee81f/profile-pic.avif"}]},4982:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h}});var s=n(4578),r=n(7294),a=n(1883),i=n(4186),o=n(123),c=n(5049),l=n(5893);let m=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).componentDidMount=()=>{let e=location.hash||"";e&&(document.querySelector('.css-toc a[href*="'+e+'"]').className="active");let t=document.querySelectorAll(".css-toc a");for(let n of Array.from(t))n.addEventListener("click",(t=>{if(e){document.querySelector('.css-toc a[href*="'+e+'"]').className=""}n.className="active",e=n.hash}));document.addEventListener("scroll",(()=>{let t=Array.from(document.querySelectorAll("h2,h3,h4,h5,h6"));if(0===t.length)return;let n=[];for(let e of t){e.getBoundingClientRect().top<=50&&n.push(e)}if(!n.length)return;let s=n[n.length-1];if(e!==s.hash){if(e){let t=document.querySelector('.css-toc a[href*="'+e+'"]');t&&(t.className="")}let t=document.querySelector('.css-toc a[href*="'+encodeURIComponent(s.id)+'"]');t.className="active",e=t.hash}}))},t}return(0,s.Z)(t,e),t.prototype.render=function(){const e=this.props.data.markdownRemark,{slug:t,previous:n,next:s}=this.props.pageContext;return(0,l.jsxs)(i.Z,{aside:e.tableOfContents,children:[(0,l.jsx)("h1",{children:e.frontmatter.title}),(0,l.jsx)(o.Z,{date:e.frontmatter.date,tags:e.frontmatter.tags}),(0,l.jsx)("div",{className:"css-post-main",dangerouslySetInnerHTML:{__html:e.html}}),(0,l.jsx)("hr",{}),(0,l.jsxs)("ul",{className:"button-wrapper",children:[(0,l.jsx)("li",{children:n&&(0,l.jsx)(a.rU,{to:n.fields.slug,rel:"prev",children:(0,l.jsxs)("button",{children:["Prev: ",n.frontmatter.title]})})}),(0,l.jsx)("li",{children:s&&(0,l.jsx)(a.rU,{to:s.fields.slug,rel:"next",children:(0,l.jsxs)("button",{children:["Next: ",s.frontmatter.title]})})})]})]})},t}(r.Component);t.default=m;const h=e=>{let{data:t,location:n}=e;const s=t.markdownRemark,r=n.pathname,a=s.frontmatter.description||s.excerpt;return(0,l.jsx)(c.Z,{title:s.frontmatter.title,description:a,keywords:s.frontmatter.tags,pathname:r})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-27c03bb3b76b79180f26.js.map