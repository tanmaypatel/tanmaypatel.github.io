Promise.all([System.import("jquery"),System.import("gsap/TweenLite.min.js"),System.import("gsap/easing/EasePack.min.js"),System.import("gsap/plugins/ScrollToPlugin.min.js"),System.import("scrollspy")]).then(function(o){function t(o){var t=i(o);if(o&&t.size()){var s=e.offset().top,a=t.offset().top;n(a-s)}else n(0);e.scrollspy("refresh")}function n(o){s.to(a,.5,{scrollTo:{y:o},ease:Power2.easeInOut})}var i=o[0],s=o[1],a=i(window),e=i("body"),r=i(".sidebar-wrapper"),l=r.find(".navigation-bar"),f=l.find("a"),p=r.find(".btn-toggle-aside");i(document).ready(function(){if(e.scrollspy({target:".navigation-bar-wrapper",offset:e.offset().top}),window.location.hash){var o=window.location.hash;t(o)}"scrollRestoration"in history&&(history.scrollRestoration="manual",i(window).on("popstate",function(o){var n=window.location.hash;t(n)})),f.on("click",function(o){o.preventDefault();var n=i(o.target),s=n.attr("href");e.removeClass("show-navigation"),t(s),history.pushState(null,null,s)}),p.on("click",function(o){o.preventDefault(),e.toggleClass("show-navigation")})})});