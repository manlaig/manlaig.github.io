(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{149:function(e,t,a){"use strict";a.r(t);a(54),a(342);var n=a(0),o=a.n(n),r=a(1),i=a.n(r),l=a(167),c=a(184),s=a.n(c),m=a(344),p=a.n(m),u=a(163),d=a(349),h=a.n(d),g=a(198),E=a.n(g),f=a(347),b=a.n(f),y=a(221),v=a.n(y),M=a(200),k=a.n(M),w=a(220),x=a.n(w),j=[{title:"1",image:"",description:"first",link:"http://github.com/manlaig/AR_Draw"},{title:"2",image:"",description:"second",link:""},{title:"3",image:"",description:"third",link:""}];function C(e){var t=e.classes;return o.a.createElement(p.a,{item:!0},o.a.createElement(s.a,{className:t.paper,id:"card-projects"},o.a.createElement(b.a,{component:"img",alt:"Project Image",className:t.media,height:"150",image:"../images/gatsby-icon.png"}),o.a.createElement(E.a,null,o.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h5"},e.title),o.a.createElement(k.a,{component:"p"},e.description)),o.a.createElement(h.a,null,o.a.createElement(v.a,{size:"small",color:"primary"},"Learn More"),o.a.createElement(v.a,{size:"small",color:"primary",href:e.link},o.a.createElement(x.a,null,o.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))))))}function z(e){var t=e.classes;return o.a.createElement(u.a,{className:t.root},o.a.createElement("h1",null,"Projects"),o.a.createElement(p.a,{container:!0,justify:"center",spacing:"40"},j.map(function(e){return o.a.createElement(C,{classes:t,title:e.title,image:e.image,description:e.description,link:e.link})})))}z.propTypes={classes:i.a.object.isRequired},t.default=Object(l.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:e.spacing.unit,textAlign:"center",color:e.palette.text.secondary,maxWidth:345,marginBottom:40},media:{objectFit:"cover",marginBottom:0,paddingBottom:0}}})(z)},156:function(e,t,a){},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Michael Ganzorig"}}}}},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){"use strict";var n=a(160),o=a(0),r=a.n(o),i=a(1),l=a.n(i),c=a(165),s=a.n(c),m=a(39),p=a(6),u=a.n(p),d=(a(156),a(161),a(171)),h=a.n(d),g=a(172),E=a.n(g),f=a(173),b=a.n(f),y=a(168),v=a.n(y),M=a(170),k=a.n(M),w=a(167),x=a(174),j=a.n(x);function C(e){return r.a.createElement(m.Link,{to:e.to,style:{fontSize:"20px",textDecoration:"none",color:"rgba(255,255,255,0.75)",marginRight:"20px"}},e.title)}function z(e){return r.a.createElement(m.Link,{to:e.to,style:{textDecoration:"none"}},r.a.createElement(v.a,null,r.a.createElement("p",{style:{margin:0}},e.title)))}var A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}return u()(t,e),t.prototype.render=function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,o=Boolean(t),i=Boolean(a),l=r.a.createElement(k.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMenuClose}),c=r.a.createElement(k.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMobileMenuClose},r.a.createElement(z,{to:"/about",title:"About",icon:"<Face/>"}),r.a.createElement(z,{to:"/projects",title:"Projects"}),r.a.createElement(z,{to:"/blog",title:"Blog"}));return r.a.createElement("div",{className:n.root,class:"nav"},r.a.createElement(h.a,{position:"static",style:{background:"#363640"}},r.a.createElement(E.a,{style:{height:30}},r.a.createElement(m.Link,{to:"/",style:{textDecoration:"none",color:"#FFF"}},r.a.createElement("div",{class:"name"},"Michael Ganzorig")),r.a.createElement("div",{className:n.grow}),r.a.createElement("div",{className:n.sectionDesktop},r.a.createElement(C,{to:"/about",title:"About"}),r.a.createElement(C,{to:"/projects",title:"Projects"}),r.a.createElement(C,{to:"/blog",title:"Blog"})),r.a.createElement("div",{className:n.sectionMobile},r.a.createElement(b.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(j.a,null))))),l,c)},t}(r.a.Component);A.propTypes={classes:l.a.object.isRequired};var B=Object(w.withStyles)(function(e){var t,a,n;return{root:{width:"100%",verticalAlign:"middle"},grow:{flexGrow:1},title:(t={},t[e.breakpoints.up("sm")]={display:"block"},t),sectionDesktop:(a={display:"none"},a[e.breakpoints.up("md")]={display:"flex"},a),sectionMobile:(n={display:"flex"},n[e.breakpoints.up("md")]={display:"none"},n)}})(A),O=(a(162),function(e){var t=e.children;return r.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(B,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:110}},t))},data:n})});O.propTypes={children:l.a.node.isRequired};t.a=O}}]);
//# sourceMappingURL=component---src-pages-projects-js-50d8d7507e7bf698d086.js.map