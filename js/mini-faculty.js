$(document).ready(function(){var n=$(".top-bar"),e=($("#linkHome"),$("#linkQuick"),$("#linkNews"),$("#linkCalendar"),$("#linkResources"),$("#linkFaculty")),i=($("#linkAbout"),$("#linkContact")),r=$("#home"),t=$("#footer");$(window).scrollTop(0),jQuery(function(){jQuery("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=jQuery(this.hash);if((n=n.length?n:$("[name="+this.hash.slice(1)+"]")).length)return jQuery("html,body").animate({scrollTop:n.offset().top},2e3),!1}})}),$(window).scroll(function(n){r.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(e.addClass("currentLink underLine"),i.removeClass("currentLink underLine")),t.offset().top<$(window).scrollTop()+$(window).outerHeight()&&(i.addClass("currentLink underLine"),e.removeClass("currentLink underLine"))}),e.click(function(){e.addClass("currentLink underLine"),e.removeClass("slideUnder"),i.removeClass("currentLink underLine")}),i.click(function(){i.addClass("currentLink underLine"),i.removeClass("slideUnder"),e.removeClass("currentLink underLine")}),-1!=navigator.userAgent.indexOf("Safari")&&-1==!navigator.userAgent.indexOf("Chrome")&&(n.css({width:"1150px","margin-left":"1%"}),mission.css("margin-top","10%"),quickLinkDiv.css("padding-bottom","2%"),$(window).width()<=1584&&$(window).width()>=1530&&n.css({width:"1200px !important","margin-left":"8% !important"}))});