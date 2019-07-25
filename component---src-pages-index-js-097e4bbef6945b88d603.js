(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"BlogPost",function(){return d}),a.d(t,"default",function(){return f}),a.d(t,"pageQuery",function(){return E});var n=a(8),i=a.n(n),r=a(163),o=a(0),l=a.n(o),c=a(37),s=a(183),m=a.n(s),p=a(182),g=a.n(p),u=a(175),h=a.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement(c.Link,{to:this.props.path,style:{textDecoration:"none"},title:"Read Post"},l.a.createElement(h.a,{id:"card-blog"},l.a.createElement("div",{style:{flex:1}},l.a.createElement(g.a,null,l.a.createElement(m.a,{variant:"h5",color:"textPrimary"},this.props.title),l.a.createElement(m.a,{variant:"caption",color:"textSecondary",paragraph:!0},this.props.date),l.a.createElement(m.a,{variant:"subtitle2"},this.props.excerpt)))))},t}(o.Component);function f(e){var t=e.data.allMarkdownRemark.edges;return l.a.createElement(r.a,null,l.a.createElement("div",{className:"blog-posts"},l.a.createElement("h1",null,"Posts"),l.a.createElement("div",{id:"quote"},l.a.createElement("i",null,'"Men learn while they teach" - Seneca')),l.a.createElement("div",{id:"quote"},l.a.createElement("i",null,"\"If you can't explain it simply, then you don't understand it well enough\" - Albert Einstein")),t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return l.a.createElement(d,{path:t.frontmatter.path,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.frontmatter.excerpt})})))}var E="3454249631"},147:function(e,t,a){"use strict";a.r(t),a.d(t,"projects",function(){return _}),a.d(t,"ProjectCard",function(){return j}),a.d(t,"default",function(){return P});a(203);var n=a(8),i=a.n(n),r=a(0),o=a.n(r),l=a(175),c=a.n(l),s=a(204),m=a.n(s),p=a(163),g=a(231),u=a.n(g),h=a(182),d=a.n(h),f=a(230),E=a.n(f),v=a(189),b=a.n(v),y=a(183),k=a.n(y),w=a(167),M=a.n(w),x=a(168),z=a.n(x),_=[{title:"3D Graphics",image:"/static/images/graphics.gif",description:"Very, very simple rendering engine",link:"https://github.com/manlaig/3d_graphics",more:"https://manlai.me/3d_graphics/"},{title:"Game Networking API",image:"/static/images/pong_2p.gif",description:"Simple UDP networking API in C#",link:"https://github.com/manlaig/basic_multiplayer_unity",more:"https://manlai.me/basic_multiplayer_unity/"},{title:"AR Draw",image:"/static/images/ar-draw.gif",description:"Persistent Augmented Reality drawing app in Unity",link:"https://github.com/manlaig/ar_draw",more:"https://manlaig.github.io/AR_draw/"},{title:"RTS Object Placement",image:"/static/images/object_placement.gif",description:"Dynamic grid-based building placement in Unity",link:"https://github.com/manlaig/object_placement",more:"https://manlai.me/building-placement",moreTitle:"Read Post"},{title:"Pong AI",image:"/static/images/pong-bots.gif",description:"Teaching neural networks to play Pong",link:"https://github.com/manlaig/pong_bots",more:"https://manlaig.github.io/pong_bots"},{title:"Survival Rush",image:"/static/images/survival-rush.gif",description:"A fun survival game for iOS and Android",link:"https://github.com/manlaig/survival_rush",more:"https://play.google.com/store/apps/details?id=com.manlaig.SurvivalRush",moreTitle:"Play Store"},{title:"Multiplayer Chess",image:"/static/images/chess-app.png",description:"Real-time chess and messaging app",link:"https://github.com/manlaig/LiveChess",more:"http://chess-manlaig.herokuapp.com/",moreTitle:"demo"},{title:"Weather App",image:"/static/images/weather-app.gif",description:"Displaying real-time weather with React",link:"https://github.com/manlaig/weather_forecast",more:"http://weather-manlaig.herokuapp.com",moreTitle:"demo"},{title:"Sort Visualizer",image:"/static/images/merge_sort.gif",description:"Visualizing sorting algorithms in Swing",link:"https://github.com/manlaig/sort_visualizer",more:"http://manlai.me/sort_visualizer/"},{title:"Maze",image:"/static/images/maze.gif",description:"Visualizing maze algorithms in Swing",link:"https://github.com/manlaig/maze",more:"https://manlai.me/maze/"},{title:"Graph Visualization",image:"/static/images/graph_algorithms.gif",description:"Implementing and visualizing popular graph algorithms in Java Swing",link:"https://github.com/manlaig/graph_algorithms",more:"https://manlai.me/graph_algorithms/"}],j=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(m.a,{item:!0},o.a.createElement("a",{href:this.props.more,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},o.a.createElement(c.a,{style:{textAlign:"center",width:340,marginBottom:20},id:"card-projects"},this.props.showImage&&o.a.createElement(E.a,{style:{height:0,paddingTop:"56%",objectFit:"cover",marginBottom:0,paddingBottom:0},image:this.props.image}),o.a.createElement(d.a,null,o.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h5"},this.props.title),o.a.createElement(k.a,{component:"p"},this.props.description)),o.a.createElement(u.a,null,o.a.createElement(b.a,{size:"small",color:"primary",href:this.props.more,target:"_blank"},this.props.moreTitle),o.a.createElement(z.a,{size:"small",color:"primary",href:this.props.link,target:"_blank"},o.a.createElement(M.a,null,o.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"})))))))},t}(r.Component),P=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(p.a,null,o.a.createElement("h1",null,"Projects"),o.a.createElement("div",{id:"quote"},o.a.createElement("i",null,'"What I cannot create, I do not understand." - Richard Feynman')),o.a.createElement(m.a,{container:!0,justify:"center",spacing:"40"},_.map(function(e){return o.a.createElement(j,{showImage:!0,title:e.title,image:e.image,description:e.description,link:e.link,more:e.more,moreTitle:null==e.moreTitle?"Learn more":e.moreTitle})})))},t}(r.Component)},151:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h}),a.d(t,"pageQuery2",function(){return d});a(203);var n=a(0),i=a.n(n),r=a(146),o=a(147),l=a(163),c=a(189),s=a.n(c),m=a(204),p=a.n(m),g=a(37),u=[{title:"3D Graphics",image:"/static/images/graphics.gif",description:"Learning about computer graphics by implementing basic graphics algorithms",link:"https://github.com/manlaig/3d_graphics"},{title:"Graph Visualization",image:"/static/images/graph_algorithms.gif",description:"Implementing and visualizing popular graph algorithms in Java Swing",link:"https://github.com/manlaig/graph_algorithms"}];function h(e){var t=e.data.allMarkdownRemark.edges;return i.a.createElement(l.a,null,i.a.createElement("h1",null,"Projects in progress"),i.a.createElement(p.a,{container:!0,justify:"center",spacing:"40"},u.map(function(e){return i.a.createElement(o.ProjectCard,{showImage:!0,title:e.title,image:e.image,description:e.description,link:e.link,more:e.more})})),i.a.createElement(p.a,{container:!0,justify:"center"},i.a.createElement(g.Link,{to:"/projects",style:{textDecoration:"none"},title:"Go to Projects"},i.a.createElement(s.a,{variant:"contained",size:"large"},"Past projects"))),i.a.createElement("h1",{style:{marginTop:20}},"Latest Post"),t.filter(function(e){return t.indexOf(e)<1}).map(function(e){var t=e.node;return i.a.createElement(r.BlogPost,{path:t.frontmatter.path,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.frontmatter.excerpt})}),i.a.createElement(p.a,{container:!0,justify:"center"},i.a.createElement(g.Link,{to:"/blog",style:{textDecoration:"none"},title:"Go to Blog"},i.a.createElement(s.a,{variant:"contained",size:"large"},"More posts"))))}var d="533965882"},157:function(e,t,a){},163:function(e,t,a){"use strict";var n=a(165),i=a(0),r=a.n(i),o=a(1),l=a.n(o),c=a(171),s=a.n(c),m=a(37),p=a(8),g=a.n(p),u=(a(157),a(166),a(176)),h=a.n(u),d=a(177),f=a.n(d),E=a(168),v=a.n(E),b=a(172),y=a.n(b),k=a(174),w=a.n(k),M=a(179),x=a(178),z=a.n(x),_=a(167),j=a.n(_);function P(e){return r.a.createElement(m.Link,{to:e.to,style:{fontSize:"22px",textDecoration:"none",color:"rgba(255,255,255,0.75)",marginRight:"20px"}},e.title)}function S(e){return r.a.createElement(m.Link,{to:e.to,style:{textDecoration:"none"}},r.a.createElement(y.a,null,r.a.createElement("p",{style:{margin:0}},e.title)))}var A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}return g()(t,e),t.prototype.render=function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,i=Boolean(t),o=Boolean(a),l=r.a.createElement(w.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMenuClose}),c=r.a.createElement(w.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMobileMenuClose},r.a.createElement(S,{to:"/about",title:"About"}),r.a.createElement(S,{to:"/projects",title:"Projects"}),r.a.createElement(S,{to:"/blog",title:"Writing"}));return r.a.createElement("div",{className:n.root,class:"nav"},r.a.createElement(h.a,{style:{background:"#363640"}},r.a.createElement(f.a,null,r.a.createElement(m.Link,{to:"/",title:"Go to Home",style:{textDecoration:"none",color:"#FFF"}},r.a.createElement("div",{class:"name"},"Michael Ganzorig")),r.a.createElement("div",{className:n.grow}),r.a.createElement("div",{className:n.sectionDesktop},r.a.createElement(m.Link,{to:"/",style:{fontSize:"22px",textDecoration:"none",color:"rgba(255,255,255,0.75)",marginRight:"20px"}},r.a.createElement(j.a,null,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))),r.a.createElement(P,{to:"/about",title:"About"}),r.a.createElement(P,{to:"/projects",title:"Projects"}),r.a.createElement(P,{to:"/blog",title:"Writing"})),r.a.createElement("div",{className:n.sectionMobile},r.a.createElement(v.a,{color:"inherit"},r.a.createElement(m.Link,{to:"/",style:{color:"rgba(255,255,255,1)"}},r.a.createElement(j.a,null,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})))),r.a.createElement(v.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(z.a,null))))),l,c)},t}(r.a.Component);A.propTypes={classes:l.a.object.isRequired};var C=Object(M.withStyles)(function(e){var t,a,n;return{root:{width:"100%",verticalAlign:"middle"},grow:{flexGrow:1},title:(t={},t[e.breakpoints.up("sm")]={display:"block"},t),sectionDesktop:(a={display:"none"},a[e.breakpoints.up("md")]={display:"flex"},a),sectionMobile:(n={display:"flex"},n[e.breakpoints.up("md")]={display:"none"},n)}})(A),R=(a(164),function(e){var t=e.children;return r.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:e.site.siteMetadata.title},r.a.createElement("html",{lang:"en"})),r.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:100}},t))},data:n})});R.propTypes={children:l.a.node.isRequired};t.a=R},164:function(e,t,a){},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Michael Ganzorig"}}}}},166:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-097e4bbef6945b88d603.js.map