(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(6),o=n.n(a),l=n(0),r=n.n(l),i=n(163),c=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Title"),r.a.createElement("p",null,"Write something here"))},t}(l.Component)},156:function(e,t,n){},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Michael Ganzorig"}}}}},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){"use strict";var a=n(160),o=n(0),l=n.n(o),r=n(1),i=n.n(r),c=n(165),s=n.n(c),u=n(39),p=n(6),m=n.n(p),h=(n(156),n(161),n(171)),d=n.n(h),E=n(172),g=n.n(E),f=n(173),b=n.n(f),M=n(168),y=n.n(M),v=n(170),k=n.n(v),w=n(167),x=n(174),C=n.n(x);function A(e){return l.a.createElement(u.Link,{to:e.to,style:{fontSize:"22px",textDecoration:"none",color:"rgba(255,255,255,0.75)",marginRight:"20px"}},e.title)}function z(e){return l.a.createElement(u.Link,{to:e.to,style:{textDecoration:"none"}},l.a.createElement(y.a,null,l.a.createElement("p",{style:{margin:0}},e.title)))}var O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}return m()(t,e),t.prototype.render=function(){var e=this.state,t=e.anchorEl,n=e.mobileMoreAnchorEl,a=this.props.classes,o=Boolean(t),r=Boolean(n),i=l.a.createElement(k.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMenuClose}),c=l.a.createElement(k.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMobileMenuClose},l.a.createElement(z,{to:"/about",title:"About",icon:"<Face/>"}),l.a.createElement(z,{to:"/projects",title:"Projects"}),l.a.createElement(z,{to:"/blog",title:"Blog"}));return l.a.createElement("div",{className:a.root,class:"nav"},l.a.createElement(d.a,{style:{background:"#363640"}},l.a.createElement(g.a,null,l.a.createElement(u.Link,{to:"/",style:{textDecoration:"none",color:"#FFF"}},l.a.createElement("div",{class:"name"},"Michael Ganzorig")),l.a.createElement("div",{className:a.grow}),l.a.createElement("div",{className:a.sectionDesktop},l.a.createElement(A,{to:"/about",title:"About"}),l.a.createElement(A,{to:"/projects",title:"Projects"}),l.a.createElement(A,{to:"/blog",title:"Blog"})),l.a.createElement("div",{className:a.sectionMobile},l.a.createElement(b.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},l.a.createElement(C.a,null))))),i,c)},t}(l.a.Component);O.propTypes={classes:i.a.object.isRequired};var j=Object(w.withStyles)(function(e){var t,n,a;return{root:{width:"100%",verticalAlign:"middle"},grow:{flexGrow:1},title:(t={},t[e.breakpoints.up("sm")]={display:"block"},t),sectionDesktop:(n={display:"none"},n[e.breakpoints.up("md")]={display:"flex"},n),sectionMobile:(a={display:"flex"},a[e.breakpoints.up("md")]={display:"none"},a)}})(O),S=(n(162),function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:e.site.siteMetadata.title},l.a.createElement("html",{lang:"en"})),l.a.createElement(j,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:100}},t))},data:a})});S.propTypes={children:i.a.node.isRequired};t.a=S}}]);
//# sourceMappingURL=component---src-pages-index-js-4cd30f6bcb83427613af.js.map