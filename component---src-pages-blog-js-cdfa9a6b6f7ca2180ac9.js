(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m}),a.d(t,"pageQuery",function(){return g});a(79),a(54);var n=a(163),r=a(166),o=a(0),l=a.n(o),i=a(39),c=a(201),s=a.n(c),p=a(199),u=a.n(p),d=a(185),h=a.n(d),y=Object(r.createMuiTheme)({typography:{fontFamily:"Georgia"}});function m(e){var t=e.data.allMarkdownRemark.edges;return l.a.createElement(r.MuiThemeProvider,{theme:y},l.a.createElement(n.a,null,l.a.createElement("div",{className:"blog-posts"},l.a.createElement("h1",null,"Posts"),t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return l.a.createElement(i.Link,{to:t.frontmatter.path,style:{textDecoration:"none"}},l.a.createElement(h.a,{id:"card-blog"},l.a.createElement("div",{style:{flex:1}},l.a.createElement(u.a,null,l.a.createElement(s.a,{variant:"h5",color:"textPrimary"},t.frontmatter.title),l.a.createElement(s.a,{variant:"caption",color:"textSecondary",paragraph:!0},t.frontmatter.date),l.a.createElement(s.a,{variant:"subtitle2"},t.frontmatter.excerpt)))))}))))}var g="1940735183"},156:function(e,t,a){},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Michael Ganzorig"}}}}},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){"use strict";var n=a(160),r=a(0),o=a.n(r),l=a(1),i=a.n(l),c=a(167),s=a.n(c),p=a(39),u=a(6),d=a.n(u),h=(a(156),a(161),a(172)),y=a.n(h),m=a(173),g=a.n(m),f=a(165),b=a.n(f),v=a(169),E=a.n(v),M=a(171),x=a.n(M),w=a(166),k=a(174),O=a.n(k);function P(e){return o.a.createElement(p.Link,{to:e.to,style:{fontSize:"22px",textDecoration:"none",color:"rgba(255,255,255,0.75)",marginRight:"20px"}},e.title)}function j(e){return o.a.createElement(p.Link,{to:e.to,style:{textDecoration:"none"}},o.a.createElement(E.a,null,o.a.createElement("p",{style:{margin:0}},e.title)))}var T=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}return d()(t,e),t.prototype.render=function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,r=Boolean(t),l=Boolean(a),i=o.a.createElement(x.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose}),c=o.a.createElement(x.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleMobileMenuClose},o.a.createElement(j,{to:"/about",title:"About",icon:"<Face/>"}),o.a.createElement(j,{to:"/projects",title:"Projects"}),o.a.createElement(j,{to:"/blog",title:"Blog"}));return o.a.createElement("div",{className:n.root,class:"nav"},o.a.createElement(y.a,{style:{background:"#363640"}},o.a.createElement(g.a,null,o.a.createElement(p.Link,{to:"/",style:{textDecoration:"none",color:"#FFF"}},o.a.createElement("div",{class:"name"},"Michael Ganzorig")),o.a.createElement("div",{className:n.grow}),o.a.createElement("div",{className:n.sectionDesktop},o.a.createElement(P,{to:"/about",title:"About"}),o.a.createElement(P,{to:"/projects",title:"Projects"}),o.a.createElement(P,{to:"/blog",title:"Blog"})),o.a.createElement("div",{className:n.sectionMobile},o.a.createElement(b.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(O.a,null))))),i,c)},t}(o.a.Component);T.propTypes={classes:i.a.object.isRequired};var B=Object(w.withStyles)(function(e){var t,a,n;return{root:{width:"100%",verticalAlign:"middle"},grow:{flexGrow:1},title:(t={},t[e.breakpoints.up("sm")]={display:"block"},t),sectionDesktop:(a={display:"none"},a[e.breakpoints.up("md")]={display:"flex"},a),sectionMobile:(n={display:"flex"},n[e.breakpoints.up("md")]={display:"none"},n)}})(T),N=(a(162),function(e){var t=e.children;return o.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:e.site.siteMetadata.title},o.a.createElement("html",{lang:"en"})),o.a.createElement(B,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:100}},t))},data:n})});N.propTypes={children:i.a.node.isRequired};t.a=N},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){return function(){return null}};t.default=n},199:function(e,t,a){"use strict";var n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(200))},200:function(e,t,a){"use strict";var n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=n(a(78)),o=n(a(151)),l=n(a(0)),i=(n(a(1)),n(a(153))),c=n(a(152)),s=function(e){return{root:e.mixins.gutters({paddingTop:16,paddingBottom:16,"&:last-child":{paddingBottom:24}})}};function p(e){var t=e.classes,a=e.className,n=e.component,c=(0,o.default)(e,["classes","className","component"]);return l.default.createElement(n,(0,r.default)({className:(0,i.default)(t.root,a)},c))}t.styles=s,p.propTypes={},p.defaultProps={component:"div"};var u=(0,c.default)(s,{name:"MuiCardContent"})(p);t.default=u},201:function(e,t,a){"use strict";var n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=n(a(202))},202:function(e,t,a){"use strict";var n=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;n(a(203));var r=n(a(78)),o=n(a(38)),l=n(a(151)),i=n(a(0)),c=(n(a(1)),n(a(153))),s=n(a(152)),p=a(168),u=(n(a(186)),function(e){return{root:{display:"block",margin:0},display4:e.typography.display4,display3:e.typography.display3,display2:e.typography.display2,display1:e.typography.display1,headline:e.typography.headline,title:e.typography.title,subheading:e.typography.subheading,body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main}}});t.styles=u;var d={display4:"h1",display3:"h2",display2:"h3",display1:"h4",headline:"h5",title:"h6",subheading:"subtitle1"};var h={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",display4:"h1",display3:"h1",display2:"h1",display1:"h1",headline:"h1",title:"h2",subheading:"h3"};function y(e){var t,a=e.align,n=e.classes,s=e.className,u=e.color,y=e.component,m=e.gutterBottom,g=e.headlineMapping,f=(e.internalDeprecatedVariant,e.noWrap),b=e.paragraph,v=e.theme,E=e.variant,M=(0,l.default)(e,["align","classes","className","color","component","gutterBottom","headlineMapping","internalDeprecatedVariant","noWrap","paragraph","theme","variant"]),x=function(e,t){var a=e.typography,n=t;return n||(n=a.useNextVariants?"body2":"body1"),a.useNextVariants&&(n=d[n]||n),n}(v,E),w=(0,c.default)(n.root,(t={},(0,o.default)(t,n[x],"inherit"!==x),(0,o.default)(t,n["color".concat((0,p.capitalize)(u))],"default"!==u),(0,o.default)(t,n.noWrap,f),(0,o.default)(t,n.gutterBottom,m),(0,o.default)(t,n.paragraph,b),(0,o.default)(t,n["align".concat((0,p.capitalize)(a))],"inherit"!==a),t),s),k=y||(b?"p":g[x]||h[x])||"span";return i.default.createElement(k,(0,r.default)({className:w},M))}y.propTypes={},y.defaultProps={align:"inherit",color:"default",gutterBottom:!1,headlineMapping:h,noWrap:!1,paragraph:!1};var m=(0,s.default)(u,{name:"MuiTypography",withTheme:!0})(y);t.default=m},203:function(e,t){e.exports=function(e){throw new Error('"'+e+'" is read-only')}}}]);
//# sourceMappingURL=component---src-pages-blog-js-cdfa9a6b6f7ca2180ac9.js.map