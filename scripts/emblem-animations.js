Promise.all([System.import("jquery"),System.import("enquire"),System.import("scripts/breakpoints.js"),System.import("gsap/TweenLite.min.js"),System.import("gsap/TimelineLite.min.js"),System.import("gsap/easing/EasePack.min.js"),System.import("gsap/plugins/CSSPlugin.min.js"),System.import("gsap/plugins/AttrPlugin.min.js")]).then(function(e){function t(e,t){var n=new c;return n.set(e,{scale:1,opacity:1}),n.to(e,2,{scale:0,opacity:0,ease:Expo.easeOut}),n.to(e,1,{scale:1,opacity:1,ease:Elastic.easeOut.config(1.2,.5)}),n.call(function(){t&&t()}),n}function n(e,t){var n=new c;return n.add("start",0),n.add("allInTheAir",1),n.add("end",2.5),n.set(e,{yPercent:0,rotationY:0}),n.to(e,1,{yPercent:-50,ease:Expo.easeOut},"start"),n.to(e,1,{rotationY:1440,ease:Power2.easeOut},"start"),n.to(e,1.5,{yPercent:0,rotationY:-1440,ease:Bounce.easeOut},"allInTheAir"),n.to(e,1,{rotationY:0,ease:Power2.easeInOut},"allInTheAir"),n.call(function(){t&&t()}),n}function o(e,t){var n=new c,o=15,a=18,r=5,s=20;return n.set(e,{yPercent:0,xPercent:0,rotationZ:0}),n.to(e,.5,{yPercent:-r,xPercent:-o,rotationZ:-a,ease:Power1.easeInOut}),n.to(e,.5,{yPercent:-s,xPercent:0,rotationZ:0,ease:Circ.easeIn}),n.to(e,.5,{yPercent:-r,xPercent:o,rotationZ:a,ease:Circ.easeOut}),n.to(e,.5,{yPercent:-s,xPercent:0,rotationZ:0,ease:Circ.easeIn}),n.to(e,.5,{yPercent:-r,xPercent:-o,rotationZ:-a,ease:Circ.easeOut}),n.to(e,.5,{yPercent:-s,xPercent:0,rotationZ:0,ease:Circ.easeIn}),n.to(e,.5,{yPercent:-r,xPercent:o,rotationZ:a,ease:Circ.easeOut}),n.to(e,.5,{yPercent:0,xPercent:0,rotationZ:0,ease:Power1.easeInOut}),n.call(function(){t&&t()}),n}function a(e,t){var n=new c;n.add("start",0),n.add("coverTransitionComplete",2.5),n.add("end",5.5);var o=(r(e),r(e).find("defs #logo").get(0)),a=r(e).find(".emblem-and-logo-group use.logo").get(0),s=r(e).find(".emblem-and-logo-group use.emblem-cover").get(0),i=o.getTotalLength(),u=.66*i;return n.set(a,{attr:{"stroke-opacity":0,"stroke-dasharray":u,"stroke-dashoffset":u}}),n.set(s,{opacity:1,scale:1,transformOrigin:"50% 50%"}),n.to(s,1,{opacity:0,scale:.5,transformOrigin:"50% 50%",ease:Power1.easeInOut}),n.to(s,1,{delay:1,opacity:1,scale:1,yPercent:0,transformOrigin:"50% 50%",ease:Power1.easeInOut}),n.to(a,.5,{attr:{"stroke-opacity":1},ease:Power1.easeInOut},"coverTransitionComplete"),n.to(a,2,{attr:{"stroke-dashoffset":0},ease:Power1.easeInOut},"coverTransitionComplete"),n.call(function(){t&&t()}),n}var r=e[0],s=e[1],i=e[2],c=(e[3],e[4]),u=5e3,l=[t,n,o,a],m=r(".tanmay-patel-emblem"),P=!1,p=null,y=!1;s.register(i.SCREEN_SM_MAX,{match:function(){y=!0,P&&(P.seek(P.totalDuration(),!1),P=null)},unmatch:function(){y=!1,g()}});var f=function(){var e=l[Math.floor(Math.random()*l.length)];P?g():(p&&clearTimeout(p),P=e(m,function(){P=null,g()}))},g=function(){p=setTimeout(f,u)};r(document).on("delight-the-visitor",f),m.on("mouseenter",function(){P||f()})});