$(document).ready(function(){var n=$(".top-bar"),i=$("#linkHome"),e=$("#linkQuick"),t=$("#linkNews"),a=$("#linkCalendar"),o=$("#linkResources"),s=$("#linkFaculty"),r=$("#linkAbout"),d=$("#linkContact"),c=$("#header1 ul li ul"),p=$("#downArr"),u=$("#home"),m=$(".scrollBTN"),l=$("#mission"),w=($("#quickLink"),$("#quickLink > div > div")),L=$("#news-events"),y=$("#news-events #article1"),k=$("#news-events #article2"),C=($(".imgSlide"),$("#moreArtBTN div button:nth-child(1)")),v=$(".maBTN"),h=$("#moreCalBTN div button:nth-child(1)"),f=$(".caBTN"),g=$("#global"),b=$("#global div .icons"),T=$("#global div h1"),x=$("#global .graphicEle"),H=($("#resource-twit"),$("#footerMain"));if(jQuery(function(){jQuery("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=jQuery(this.hash);if((n=n.length?n:$("[name="+this.hash.slice(1)+"]")).length)return jQuery("html,body").animate({scrollTop:n.offset().top},2e3),!1}})}),s.mouseenter(function(){$("#header1 ul li ul").css("display","block").stop().animate({opacity:"1","margin-top":"2%"},200)}),s.mouseleave(function(){$("#header1 ul li ul").stop().animate({opacity:"0","margin-top":"-6%"},200,function(){$("#header1 ul li ul").css("display","none")})}),$(window).scroll(function(n){u.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(i.addClass("currentLink underLine"),e.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.stop().animate({opacity:"1"},200),p.stop().animate({opacity:"1"},200)),l.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(e.addClass("currentLink underLine"),i.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))),y.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(t.addClass("currentLink underLine"),i.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))),k.offset().top<$(window).scrollTop()+$(window).outerHeight()&&$(window).width()>641&&(a.addClass("currentLink underLine"),t.addClass("currentLink underLine"),i.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))),k.offset().top<$(window).scrollTop()+$(window).outerHeight()&&$(window).width()<=641&&(a.addClass("currentLink underLine"),i.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))),$(window).width()<=641&&(s.mouseenter(function(){c.css("display","block").stop().animate({opacity:"1","margin-top":"-98%"},200)}),s.mouseleave(function(){c.stop().animate({opacity:"0","margin-top":"-100%"},200,function(){c.css("display","none")})}),C.css("display","none"),v.css("display","block"),v.click(function(){jQuery("html,body").stop().animate({scrollTop:L.offset().top},2e3),$(".article1Container > div:first").stop().fadeOut(200,function(){$(".article1Container > div:first").next().stop().fadeIn(1500).end().appendTo(".article1Container")})}),h.css("display","none"),f.css("display","block"),f.click(function(){jQuery("html,body").stop().animate({scrollTop:k.offset().top},2e3),$(".article2Container > div:first").stop().fadeOut(200,function(){$(".article2Container > div:first").next().stop().fadeIn(1500).end().appendTo(".article2Container")})})),g.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(o.addClass("currentLink underLine"),i.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0")),$(window).width()>=1861&&(g.stop().animate({"padding-top":"13%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1860&&$(window).width()>=1712&&(g.stop().animate({"padding-top":"16%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1711&&$(window).width()>=1531&&(g.stop().animate({"padding-top":"17%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1530&&$(window).width()>=1429&&(g.stop().animate({"padding-top":"18%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1428&&$(window).width()>=1357&&(g.stop().animate({"padding-top":"20%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1356&&$(window).width()>=1277&&(g.stop().animate({"padding-top":"21%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1276&&$(window).width()>=1227&&(g.stop().animate({"padding-top":"22%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1226&&$(window).width()>=1218&&(g.stop().animate({"padding-top":"22%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1217&&$(window).width()>=1170&&(g.stop().animate({"padding-top":"24%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1169&&$(window).width()>=1147&&(g.stop().animate({"padding-top":"24%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1146&&$(window).width()>=1134&&(g.stop().animate({"padding-top":"25%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1133&&$(window).width()>=1098&&(g.stop().animate({"padding-top":"25%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1097&&$(window).width()>=1013&&(g.stop().animate({"padding-top":"25%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=1012&&$(window).width()>=974&&(g.stop().animate({"padding-top":"26%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=973&&$(window).width()>=904&&(g.stop().animate({"padding-top":"27%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=903&&$(window).width()>=883&&(g.stop().animate({"padding-top":"29%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=882&&$(window).width()>=809&&(g.stop().animate({"padding-top":"30%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=808&&$(window).width()>=777&&(g.stop().animate({"padding-top":"31%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=776&&$(window).width()>=741&&(g.stop().animate({"padding-top":"31%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=740&&$(window).width()>=686&&(g.stop().animate({"padding-top":"36%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=685&&$(window).width()>=657&&(g.stop().animate({"padding-top":"38%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=656&&$(window).width()>=642&&(g.stop().animate({"padding-top":"40%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=641&&$(window).width()>=635&&(g.stop().animate({"padding-top":"43%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=634&&$(window).width()>=588&&(g.stop().animate({"padding-top":"43%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=587&&$(window).width()>=555&&(g.stop().animate({"padding-top":"45%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=554&&$(window).width()>=480&&(g.stop().animate({"padding-top":"48%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=479&&$(window).width()>=442&&(g.stop().animate({"padding-top":"61%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=441&&$(window).width()>=390&&(g.stop().animate({"padding-top":"65%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500)),$(window).width()<=389&&$(window).width()>=320&&(g.stop().animate({"padding-top":"90%"},500),b.stop().animate({opacity:"1"},500),T.stop().animate({opacity:"1"},500),x.stop().animate({opacity:"1"},500))),H.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(d.addClass("currentLink"),i.removeClass("currentLink"),e.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0")))}),i.click(function(){i.addClass("currentLink underLine"),i.removeClass("slideUnder"),e.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","1"),p.css("opacity","1")}),p.click(function(){e.addClass("currentLink underLine"),e.removeClass("slideUnder"),i.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))}),$(window).scroll(function(){$(window).scrollTop()>=50&&(m.css("visibility","visible"),m.stop().animate({opacity:"1"},50),m.click(function(){return $("html, body").stop().animate({scrollTop:u.offset().top},1e3),!1})),$(window).scrollTop()<=50&&(m.stop().animate({opacity:"0"},50),m.css("visibility","hidden"))}),e.click(function(){e.addClass("currentLink underLine"),e.removeClass("slideUnder"),i.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))}),t.click(function(){t.addClass("currentLink underLine"),t.removeClass("slideUnder"),e.removeClass("currentLink underLine"),i.removeClass("currentLink underLine"),a.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))}),a.click(function(){a.addClass("currentLink underLine"),a.removeClass("slideUnder"),e.removeClass("currentLink underLine"),i.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))}),o.click(function(){o.addClass("currentLink underLine"),o.removeClass("slideUnder"),i.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),d.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))}),d.click(function(){d.addClass("currentLink underLine"),d.removeClass("slideUnder"),i.removeClass("currentLink underLine"),e.removeClass("currentLink underLine"),t.removeClass("currentLink underLine"),o.removeClass("currentLink underLine"),s.removeClass("currentLink underLine"),r.removeClass("currentLink underLine"),u.css("opacity","0")&&(u.css("opacity","0"),p.css("opacity","0"))}),-1!=navigator.userAgent.indexOf("Safari")&&-1==!navigator.userAgent.indexOf("Chrome")&&(n.css({width:"1150px","margin-left":"1%"}),l.css("margin-top","10%"),w.css("padding-bottom","2%"),$(window).width()<=1584&&$(window).width()>=1530&&n.css({width:"1200px !important","margin-left":"8% !important"})),$("#bckRotate li:gt(0)").hide(),setInterval(function(){$("#bckRotate li:first").stop().fadeOut(1e3).next().stop().fadeIn(1e3).end().appendTo("#bckRotate")},5e3),p.css("margin","-8% auto 0"),p.animate({opacity:"1","margin-top":"-5%"},1500,function(){p.addClass("animated css3-notification")}),p.mouseover(function(){p.removeClass("animated css3-notification")}),p.mouseout(function(){p.addClass("animated css3-notification")}),C.click(function(){$(".article1Container > div:first").stop().fadeOut(200,function(){$(".article1Container > div:first").next().stop().fadeIn(200).end().appendTo(".article1Container")})}),h.click(function(){$(".article2Container > div:first").stop().fadeOut(200,function(){$(".article2Container > div:first").next().stop().fadeIn(200).end().appendTo(".article2Container")})}),$("html, body").scrollTop()>0)return $("html, body").stop().animate({scrollTop:u.offset().top},5),!1});