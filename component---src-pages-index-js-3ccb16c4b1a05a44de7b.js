(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"BlogPost",function(){return g}),a.d(t,"default",function(){return E}),a.d(t,"pageQuery",function(){return f});a(79),a(54);var n=a(7),r=a.n(n),i=a(160),o=a(0),l=a.n(o),c=a(39),s=a(179),m=a.n(s),p=a(178),u=a.n(p),h=a(172),d=a.n(h),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(c.Link,{to:this.props.path,style:{textDecoration:"none"},title:"Read Post"},l.a.createElement(d.a,{id:"card-blog"},l.a.createElement("div",{style:{flex:1}},l.a.createElement(u.a,null,l.a.createElement(m.a,{variant:"h5",color:"textPrimary"},this.props.title),l.a.createElement(m.a,{variant:"caption",color:"textSecondary",paragraph:!0},this.props.date),l.a.createElement(m.a,{variant:"subtitle2"},this.props.excerpt)))))},t}(o.Component);function E(e){var t=e.data.allMarkdownRemark.edges;return l.a.createElement(i.a,null,l.a.createElement("div",{className:"blog-posts"},l.a.createElement("h1",null,"Posts"),l.a.createElement("div",{id:"quote"},l.a.createElement("i",null,'"Men learn while they teach" - Seneca')),l.a.createElement("div",{id:"quote"},l.a.createElement("i",null,"\"If you can't explain it simply, then you don't understand it well enough\" - Albert Einstein")),t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return l.a.createElement(g,{path:t.frontmatter.path,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.frontmatter.excerpt})})))}var f="3454249631"},145:function(e,t,a){"use strict";a.r(t),a.d(t,"projects",function(){return C}),a.d(t,"ProjectCard",function(){return z}),a.d(t,"default",function(){return P});a(54),a(204);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(172),c=a.n(l),s=a(205),m=a.n(s),p=a(160),u=a(227),h=a.n(u),d=a(178),g=a.n(d),E=a(226),f=a.n(E),v=a(190),b=a.n(v),y=a(179),k=a.n(y),w=a(164),M=a.n(w),x=a(165),A=a.n(x),C=[{title:"Survival Rush",image:"/static/images/survival-rush.gif",description:"A fun survival game for iOS and Android",link:"https://github.com/manlaig/survival_rush",more:"https://play.google.com/store/apps/details?id=com.manlaig.SurvivalRush"},{title:"Pong AI",image:"/static/images/pong-bots.gif",description:"A Deep Neural Network that plays Pong",link:"https://github.com/manlaig/pong_bots",more:"https://manlaig.github.io/pong_bots"},{title:"AR Draw",image:"/static/images/ar-draw.gif",description:"Persistent Augmented Reality drawing app",link:"https://github.com/manlaig/ar_draw",more:"https://manlaig.github.io/AR_draw/"},{title:"Multiplayer Chess",image:"/static/images/chess-app.png",description:"Real-time chess and messaging app on the web",link:"https://github.com/manlaig/LiveChess",more:"http://chess-manlaig.herokuapp.com/"},{title:"Weather App",image:"/static/images/weather-app.png",description:"Current weather data displayer web app",link:"https://github.com/manlaig/weather_forecast",more:"http://weather-manlaig.herokuapp.com"}],z=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(m.a,{item:!0},o.a.createElement("a",{href:this.props.more,target:"_blank",rel:"noopener noreferrer",title:"Learn More",style:{textDecoration:"none"}},o.a.createElement(c.a,{style:{textAlign:"center",maxWidth:340,marginBottom:20},id:"card-projects"},this.props.showImage&&o.a.createElement(f.a,{style:{height:0,paddingTop:"56%",objectFit:"cover",marginBottom:0,paddingBottom:0},image:this.props.image}),o.a.createElement(g.a,null,o.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h5"},this.props.title),o.a.createElement(k.a,{component:"p"},this.props.description)),o.a.createElement(h.a,null,o.a.createElement(b.a,{size:"small",color:"primary",href:this.props.more,target:"_blank"},"Learn More"),o.a.createElement(A.a,{size:"small",color:"primary",href:this.props.link,target:"_blank"},o.a.createElement(M.a,null,o.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"})))))))},t}(i.Component),P=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(p.a,null,o.a.createElement("h1",null,"Projects"),o.a.createElement("div",{id:"quote"},o.a.createElement("i",null,'"What I cannot create, I do not understand." - Richard Feynman')),o.a.createElement(m.a,{container:!0,justify:"center",spacing:"40"},C.map(function(e){return o.a.createElement(z,{showImage:!0,title:e.title,image:e.image,description:e.description,link:e.link,more:e.more})})))},t}(i.Component)},149:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"pageQuery2",function(){return g});a(204),a(81),a(79),a(54);var n=a(0),r=a.n(n),i=a(144),o=a(145),l=a(160),c=a(190),s=a.n(c),m=a(205),p=a.n(m),u=a(39),h=[{title:"Pong AI",image:"/static/images/pong-bots.gif",description:"Building a neural network to play Pong at an expert level",link:"https://github.com/manlaig/pong_bots",more:"https://manlaig.github.io/pong_bots"},{title:"Quiz Helper",image:"/",description:"A web scraper that finds answers to quiz questions",link:"https://github.com/manlaig/quiz_answer_finder",more:"https://github.com/manlaig/quiz_answer_finder"}];function d(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Latest Post"),t.filter(function(e){return t.indexOf(e)<1}).map(function(e){var t=e.node;return r.a.createElement(i.BlogPost,{path:t.frontmatter.path,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.frontmatter.excerpt})}),r.a.createElement(p.a,{container:!0,justify:"center"},r.a.createElement(u.Link,{to:"/blog",style:{textDecoration:"none"},title:"Go to Blog"},r.a.createElement(s.a,{variant:"contained",size:"large"},"More posts"))),r.a.createElement("h1",{style:{marginTop:30}},"Projects in progress"),r.a.createElement(p.a,{container:!0,justify:"center",spacing:"40"},h.map(function(e){return r.a.createElement(o.ProjectCard,{showImage:!1,title:e.title,image:e.image,description:e.description,link:e.link,more:e.more})})))}var g="533965882"},154:function(e,t,a){},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(1),l=a.n(o),c=a(167),s=a.n(c),m=a(39),p=a(7),u=a.n(p),h=(a(154),a(162),a(173)),d=a.n(h),g=a(174),E=a.n(g),f=a(165),v=a.n(f),b=a(169),y=a.n(b),k=a(171),w=a.n(k),M=a(176),x=a(175),A=a.n(x),C=a(164),z=a.n(C);function P(e){return i.a.createElement(m.Link,{to:e.to,style:{fontSize:"22px",textDecoration:"none",color:"rgba(255,255,255,0.75)",marginRight:"20px"}},e.title)}function j(e){return i.a.createElement(m.Link,{to:e.to,style:{textDecoration:"none"}},i.a.createElement(y.a,null,i.a.createElement("p",{style:{margin:0}},e.title)))}var _=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}return u()(t,e),t.prototype.render=function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,n=this.props.classes,r=Boolean(t),o=Boolean(a),l=i.a.createElement(w.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMenuClose}),c=i.a.createElement(w.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMobileMenuClose},i.a.createElement(j,{to:"/about",title:"About"}),i.a.createElement(j,{to:"/projects",title:"Projects"}),i.a.createElement(j,{to:"/blog",title:"Blog"}));return i.a.createElement("div",{className:n.root,class:"nav"},i.a.createElement(d.a,{style:{background:"#363640"}},i.a.createElement(E.a,null,i.a.createElement(m.Link,{to:"/",title:"Go to Home",style:{textDecoration:"none",color:"#FFF"}},i.a.createElement("div",{class:"name"},"Michael Ganzorig")),i.a.createElement("div",{className:n.grow}),i.a.createElement("div",{className:n.sectionDesktop},i.a.createElement(m.Link,{to:"/",style:{fontSize:"22px",textDecoration:"none",color:"rgba(255,255,255,0.75)",marginRight:"20px"}},i.a.createElement(z.a,null,i.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))),i.a.createElement(P,{to:"/about",title:"About"}),i.a.createElement(P,{to:"/projects",title:"Projects"}),i.a.createElement(P,{to:"/blog",title:"Blog"})),i.a.createElement("div",{className:n.sectionMobile},i.a.createElement(v.a,{color:"inherit"},i.a.createElement(m.Link,{to:"/",style:{color:"rgba(255,255,255,1)"}},i.a.createElement(z.a,null,i.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})))),i.a.createElement(v.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},i.a.createElement(A.a,null))))),l,c)},t}(i.a.Component);_.propTypes={classes:l.a.object.isRequired};var R=Object(M.withStyles)(function(e){var t,a,n;return{root:{width:"100%",verticalAlign:"middle"},grow:{flexGrow:1},title:(t={},t[e.breakpoints.up("sm")]={display:"block"},t),sectionDesktop:(a={display:"none"},a[e.breakpoints.up("md")]={display:"flex"},a),sectionMobile:(n={display:"flex"},n[e.breakpoints.up("md")]={display:"none"},n)}})(_),L=(a(163),function(e){var t=e.children;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title},i.a.createElement("html",{lang:"en"})),i.a.createElement(R,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:100}},t))},data:n})});L.propTypes={children:l.a.node.isRequired};t.a=L},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Michael Ganzorig"}}}}},162:function(e,t,a){},163:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-3ccb16c4b1a05a44de7b.js.map