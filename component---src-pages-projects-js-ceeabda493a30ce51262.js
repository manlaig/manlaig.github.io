(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"projects",function(){return z}),a.d(t,"ProjectCard",function(){return A}),a.d(t,"default",function(){return S});a(223);var i=a(0),n=a.n(i),r=a(230),o=a.n(r),l=a(257),s=a.n(l),m=a(215),c=a(285),p=a.n(c),g=a(237),h=a.n(g),u=a(284),d=a.n(u),b=a(243),E=a.n(b),f=a(238),y=a.n(f),v=a(218),w=a.n(v),k=a(219),_=a.n(k);function M(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var z=[{title:"Snow Wars",image:"/static/images/snow_wars.gif",description:"Real-time strategy game in Unity. Inspired by Starcraft",link:"https://github.com/manlaig/snow_wars",more:"https://github.com/manlaig/snow_wars"},{title:"Survival Rush",image:"/static/images/survival-rush.gif",description:"A fun survival game for iOS and Android. Built in Unity",link:"https://github.com/manlaig/survival_rush",more:"https://play.google.com/store/apps/details?id=com.manlaig.SurvivalRush",moreTitle:"Play Store"},{title:"Game Networking API",image:"/static/images/pong_2p.gif",description:"Simple UDP networking API for Unity",link:"https://github.com/manlaig/basic_multiplayer_unity",more:"https://manlai.me/basic_multiplayer_unity/"},{title:"3D Graphics",image:"/static/images/graphics.gif",description:"Very simple rendering engine",link:"https://github.com/manlaig/3d_graphics",more:"https://manlai.me/3d_graphics/"},{title:"AR Draw",image:"/static/images/ar-draw.gif",description:"Persistent Augmented Reality drawing app in Unity",link:"https://github.com/manlaig/ar_draw",more:"https://manlaig.github.io/AR_draw/"},{title:"RTS Object Placement",image:"/static/images/object_placement.gif",description:"Dynamic grid-based building placement in Unity",link:"https://github.com/manlaig/object_placement",more:"https://manlai.me/building-placement",moreTitle:"Read Post"},{title:"Multiplayer Chess",image:"/static/images/chess-app.png",description:"Real-time chess and messaging app",link:"https://github.com/manlaig/LiveChess",more:"http://chess-manlaig.herokuapp.com/",moreTitle:"demo"},{title:"Weather App",image:"/static/images/weather-app.gif",description:"Displaying real-time weather with React",link:"https://github.com/manlaig/weather_forecast",more:"http://weather-manlaig.herokuapp.com",moreTitle:"demo"},{title:"Pong AI",image:"/static/images/pong-bots.gif",description:"Teaching neural networks to play Pong",link:"https://github.com/manlaig/pong_bots",more:"https://manlaig.github.io/pong_bots"},{title:"Sort Visualizer",image:"/static/images/merge_sort.gif",description:"Visualizing sorting algorithms in Swing",link:"https://github.com/manlaig/sort_visualizer",more:"http://manlai.me/sort_visualizer/"},{title:"Maze",image:"/static/images/maze.gif",description:"Visualizing maze generation and solving algorithms in Swing",link:"https://github.com/manlaig/maze",more:"https://manlai.me/maze/"},{title:"Graph Visualization",image:"/static/images/graph_algorithms.gif",description:"Implementing and visualizing popular graph algorithms in Java Swing",link:"https://github.com/manlaig/graph_algorithms",more:"https://manlai.me/graph_algorithms/"}],A=function(e){function t(){return e.apply(this,arguments)||this}return M(t,e),t.prototype.render=function(){return n.a.createElement(s.a,{item:!0},n.a.createElement("a",{href:this.props.more,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},n.a.createElement(o.a,{style:{textAlign:"center",width:340,marginBottom:20},id:"card-projects"},this.props.showImage&&n.a.createElement(d.a,{style:{height:0,paddingTop:"56%",objectFit:"cover",marginBottom:0,paddingBottom:0},image:this.props.image}),n.a.createElement(h.a,null,n.a.createElement(y.a,{gutterBottom:!0,variant:"h5",component:"h5"},this.props.title),n.a.createElement(y.a,{component:"p"},this.props.description)),n.a.createElement(p.a,null,n.a.createElement(E.a,{size:"small",color:"primary",href:this.props.more,target:"_blank"},this.props.moreTitle),n.a.createElement(_.a,{size:"small",color:"primary",href:this.props.link,target:"_blank"},n.a.createElement(w.a,null,n.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"})))))))},t}(i.Component),S=function(e){function t(){return e.apply(this,arguments)||this}return M(t,e),t.prototype.render=function(){return n.a.createElement(m.a,null,n.a.createElement("h1",null,"Projects"),n.a.createElement("div",{id:"quote"},n.a.createElement("i",null,'"What I cannot create, I do not understand." - Richard Feynman')),n.a.createElement(s.a,{container:!0,justify:"center",spacing:"40"},z.map(function(e){return n.a.createElement(A,{showImage:!0,title:e.title,image:e.image,description:e.description,link:e.link,more:e.more,moreTitle:null==e.moreTitle?"Learn more":e.moreTitle})})))},t}(i.Component)},215:function(e,t,a){"use strict";var i=a(217),n=a(0),r=a.n(n),o=a(222),l=a.n(o),s=a(96),m=(a(216),a(225),a(231)),c=a.n(m),p=a(232),g=a.n(p),h=a(219),u=a.n(h),d=a(226),b=a.n(d),E=a(229),f=a.n(E),y=a(234),v=a(233),w=a.n(v),k=a(218),_=a.n(k);function M(e){return r.a.createElement(s.Link,{to:e.to,style:{fontSize:"22px",textDecoration:"none",color:"rgba(255,255,255,0.75)",marginRight:"20px"}},e.title)}function z(e){return r.a.createElement(s.Link,{to:e.to,style:{textDecoration:"none"}},r.a.createElement(b.a,null,r.a.createElement("p",{style:{margin:0}},e.title)))}var A=function(e){var t,a;function i(){for(var t,a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))||this).state={anchorEl:null,mobileMoreAnchorEl:null},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.state,t=e.anchorEl,a=e.mobileMoreAnchorEl,i=this.props.classes,n=Boolean(t),o=Boolean(a),l=r.a.createElement(f.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:n,onClose:this.handleMenuClose}),m=r.a.createElement(f.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMobileMenuClose},r.a.createElement(z,{to:"/about",title:"About"}),r.a.createElement(z,{to:"/projects",title:"Projects"}),r.a.createElement(z,{to:"/blog",title:"Writing"}));return r.a.createElement("div",{className:i.root,class:"nav"},r.a.createElement(c.a,{style:{background:"#363640"}},r.a.createElement(g.a,null,r.a.createElement(s.Link,{to:"/",title:"Go to Home",style:{textDecoration:"none",color:"#FFF"}},r.a.createElement("div",{class:"name"},"Michael Ganzorig")),r.a.createElement("div",{className:i.grow}),r.a.createElement("div",{className:i.sectionDesktop},r.a.createElement(M,{to:"/about",title:"About"}),r.a.createElement(M,{to:"/projects",title:"Projects"}),r.a.createElement(M,{to:"/blog",title:"Writing"})),r.a.createElement("div",{className:i.sectionMobile},r.a.createElement(u.a,{color:"inherit"},r.a.createElement(s.Link,{to:"/",style:{color:"rgba(255,255,255,1)"}},r.a.createElement(_.a,null,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})))),r.a.createElement(u.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(w.a,null))))),l,m)},i}(r.a.Component),S=Object(y.withStyles)(function(e){var t,a,i;return{root:{width:"100%",verticalAlign:"middle"},grow:{flexGrow:1},title:(t={},t[e.breakpoints.up("sm")]={display:"block"},t),sectionDesktop:(a={display:"none"},a[e.breakpoints.up("md")]={display:"flex"},a),sectionMobile:(i={display:"flex"},i[e.breakpoints.up("md")]={display:"none"},i)}})(A);a(224),t.a=function(e){var t=e.children;return r.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title},r.a.createElement("html",{lang:"en"})),r.a.createElement(S,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:100}},t))},data:i})}},217:function(e){e.exports={data:{site:{siteMetadata:{title:"Michael Ganzorig"}}}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-ceeabda493a30ce51262.js.map