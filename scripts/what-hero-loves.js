Promise.all([System.import("gsap/TweenLite.min.js"),System.import("gsap/TimelineLite.min.js"),System.import("gsap/easing/EasePack.min.js")]).then(function(t){var e=(t[0],t[1]),i=document.querySelector(".about-me .about-me-bragging .things-hero-loves"),n=2500,a=null,o=["Mitali","Electronica","Trance","Tiesto","Deadmau5","Mitali","Speaker Deck","Github","Stack Overflow","Chromecast","Mornings","Walking","Beaches","Mountains","Gardens","Mitali","Mangoes","Watermelon","Coding","Animating","Cricket","Table Tennis","Badminton","Cooking","Handicrafts","Origami","Mitali","Rain","Winters","7Up","Kaju Katli","Suterfeni","Mitali"],r=function(){var t=o[Math.floor(Math.random()*o.length)],n=new e;n.set(i,{opacity:1,xPercent:0}),n.to(i,.5,{opacity:0,xPercent:10}),n.add(function(){i.textContent=t+"."}),n.to(i,.5,{opacity:1,xPercent:0}),n.call(function(){s()})},s=function(){a=setTimeout(r,n)};s()});