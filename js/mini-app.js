$(document).ready(function(){$("#bckRotate li:gt(0)").hide(),setInterval(function(){$("#bckRotate li:first").stop().fadeOut(1e3).next().stop().fadeIn(1e3).end().appendTo("#bckRotate")},5e3);var t=$(".top-bar"),i=$("#linkHome"),a=$("#linkQuick"),n=$("#linkNews"),e=$("#linkCalendar"),o=$("#linkResources"),s=$("#linkContact"),p=$("#downArr"),d=$("#home"),r=$("#mission"),c=($("#quickLink"),$("#quickLink > div > div")),m=$("#news-events"),w=($(".imgSlide"),$("#moreArtBTN div div.moreann")),u=$("#global"),l=$("#global div .icons"),y=$("#global div h1"),L=$("#global .graphicEle"),h=($("#resource-twit"),$("#footer"));$(window).scrollTop(0),jQuery(function(){jQuery("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=jQuery(this.hash);if((t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length)return jQuery("html,body").animate({scrollTop:t.offset().top},2e3),!1}})}),$(window).scroll(function(t){d.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(i.addClass("currentLink underLine"),a.removeClass("currentLink underLine"),n.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),d.stop().animate({opacity:"1"},500),p.stop().animate({opacity:"1"},500)),r.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(a.addClass("currentLink underLine"),i.removeClass("currentLink underLine"),n.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0")),m.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(n.addClass("currentLink underLine"),e.addClass("currentLink underLine"),i.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0")),u.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(o.addClass("currentLink underLine"),i.removeClass("currentLink underLine"),n.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0"),$(window).width()>=1861&&(u.stop().animate({"padding-top":"13%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1860&&$(window).width()>=1712&&(u.stop().animate({"padding-top":"16%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1711&&$(window).width()>=1531&&(u.stop().animate({"padding-top":"17%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1530&&$(window).width()>=1429&&(u.stop().animate({"padding-top":"18%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1428&&$(window).width()>=1357&&(u.stop().animate({"padding-top":"20%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1356&&$(window).width()>=1277&&(u.stop().animate({"padding-top":"21%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1276&&$(window).width()>=1227&&(u.stop().animate({"padding-top":"22%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1226&&$(window).width()>=1218&&(u.stop().animate({"padding-top":"22%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1217&&$(window).width()>=1170&&(u.stop().animate({"padding-top":"24%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1169&&$(window).width()>=1147&&(u.stop().animate({"padding-top":"24%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1146&&$(window).width()>=1134&&(u.stop().animate({"padding-top":"25%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1133&&$(window).width()>=1098&&(u.stop().animate({"padding-top":"25%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1097&&$(window).width()>=1013&&(u.stop().animate({"padding-top":"25%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=1012&&$(window).width()>=974&&(u.stop().animate({"padding-top":"26%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=973&&$(window).width()>=904&&(u.stop().animate({"padding-top":"27%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=903&&$(window).width()>=883&&(u.stop().animate({"padding-top":"29%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=882&&$(window).width()>=809&&(u.stop().animate({"padding-top":"30%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=808&&$(window).width()>=777&&(u.stop().animate({"padding-top":"31%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=776&&$(window).width()>=741&&(u.stop().animate({"padding-top":"31%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=740&&$(window).width()>=686&&(u.stop().animate({"padding-top":"36%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=685&&$(window).width()>=657&&(u.stop().animate({"padding-top":"38%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=656&&$(window).width()>=642&&(u.stop().animate({"padding-top":"40%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=641&&$(window).width()>=635&&(u.stop().animate({"padding-top":"43%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500),w.click(function(){window.location.href="#news-events"})),$(window).width()<=634&&$(window).width()>=588&&(u.stop().animate({"padding-top":"43%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=587&&$(window).width()>=555&&(u.stop().animate({"padding-top":"45%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=554&&$(window).width()>=480&&(u.stop().animate({"padding-top":"48%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=479&&$(window).width()>=442&&(u.stop().animate({"padding-top":"61%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=441&&$(window).width()>=390&&(u.stop().animate({"padding-top":"65%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500)),$(window).width()<=389&&$(window).width()>=320&&(u.stop().animate({"padding-top":"90%"},500),l.stop().animate({opacity:"1"},500),y.stop().animate({opacity:"1"},500),L.stop().animate({opacity:"1"},500))),h.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(s.addClass("currentLink"),i.removeClass("currentLink"),a.removeClass("currentLink underLine"),n.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0"))}),i.click(function(){i.addClass("currentLink underLine"),i.removeClass("slideUnder"),a.removeClass("currentLink underLine"),n.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),d.stop().animate({opacity:"1"},500),p.stop().animate({opacity:"1"},500)}),n.click(function(){n.addClass("currentLink underLine"),n.removeClass("slideUnder"),a.removeClass("currentLink underLine"),i.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0")}),e.click(function(){e.addClass("currentLink underLine"),e.removeClass("slideUnder"),a.removeClass("currentLink underLine"),i.removeClass("currentLink underLine"),n.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0")}),p.click(function(){a.addClass("currentLink underLine"),a.removeClass("slideUnder"),i.removeClass("currentLink underLine"),n.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.remooveClass("currentLink underLine"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0")}),o.click(function(){o.addClass("currentLink underLine"),o.removeClass("slideUnder"),i.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),n.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0")}),s.click(function(){s.addClass("currentLink"),s.removeClass("slideUnder"),i.removeClass("currentLink"),a.removeClass("currentLink underLine"),n.removeClass("currentLink"),o.removeClass("currentLink"),d.stop().animate({opacity:"0"},200),d.css("opacity","0"),p.stop().animate({opacity:"0"},200),p.css("opacity","0")}),-1!=navigator.userAgent.indexOf("Safari")&&-1==!navigator.userAgent.indexOf("Chrome")&&(t.css({width:"1150px","margin-left":"1%"}),r.css("margin-top","10%"),c.css("padding-bottom","2%"),$(window).width()<=1584&&$(window).width()>=1530&&t.css({width:"1200px !important","margin-left":"8% !important"})),p.css("margin","-5% auto 0"),p.animate({opacity:"1","margin-top":"-2%"},1500,function(){p.addClass("animated css3-notification")}),p.mouseover(function(){p.removeClass("animated css3-notification")}),p.mouseout(function(){p.addClass("animated css3-notification")}),w.click(function(){$(".article1Container > div:first").stop().fadeOut(200,function(){$(".article1Container > div:first").next().stop().fadeIn(200).end().appendTo(".article1Container")})})});