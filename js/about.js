$(document).ready(function(){

  var topBar = $(".top-bar");
  var linkHome = $("#linkHome");
  var linkQuick = $("#linkQuick");
  var linkNews = $("#linkNews");
  var linkCalendar = $("#linkCalendar");
  var linkResources = $("#linkResources");
  var linkFaculty = $("#linkFaculty");
  var linkAbout = $("#linkAbout");
  var linkContactAb = $("#linkContactAb");
  var about = $("#aboutHome");
  var footerAb = $("#footerAb");



  /*ANCHOR LINK SCROLLING*/
	jQuery(function()
	{
		jQuery('a[href*=#]:not([href=#])').click(function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
			{
				var target = jQuery(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length)
				{
					jQuery('html,body').animate({scrollTop: target.offset().top}, 2000);
					return false;
				}
			}
		});
	});



  linkFaculty.mouseenter(function(){
    $("#header1 ul li ul").css("display", "block").stop().animate({"opacity": "1", "margin-top": "2%"}, 200);
  });

  linkFaculty.mouseleave(function(){
    $("#header1 ul li ul").stop().animate({"opacity": "0", "margin-top": "-6%"}, 200,
    function(){
      $("#header1 ul li ul").css("display", "none");
    });
  });



  if ($(window).width() <= 641) {
    linkFaculty.mouseenter(function(){
      dropdown.css("display", "block").stop().animate({"opacity": "1", "margin-top": "-98%"}, 200);
    });

    linkFaculty.mouseleave(function(){
      dropdown.stop().animate({"opacity": "0", "margin-top": "-100%"}, 200,
      function(){
        dropdown.css("display", "none");
      });
    });
  }



  /*LINKS IN MENU BAR ARE ACTIVE WHEN SCROLLED TO THEIR ANCHOR*/
	$(window).scroll(function(event)
	{
		if(about.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkAbout.addClass("currentLink underLine");
			linkContactAb.removeClass("currentLink underLine");
		}

		if(footerAb.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkContactAb.addClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");
		}
	});
	/**/



	/*MAKE LINK ACTIVE WHEN CLICKED*/
	linkAbout.click(function()
	{
		linkAbout.addClass("currentLink underLine");
		linkAbout.removeClass("slideUnder");
		linkContactAb.removeClass("currentLink underLine");
	});

	linkContactAb.click(function()
	{
    linkContactAb.addClass("currentLink underLine");
		linkContactAb.removeClass("slideUnder");
    linkAbout.removeClass("currentLink underLine");
	});



  /*TARGET CSS IN SAFARI BROWSER*/
  if (navigator.userAgent.indexOf('Safari') != -1 && !navigator.userAgent.indexOf('Chrome') == -1)
	{
    topBar.css({"width": "1150px", "margin-left": "1%"});

    if ($(window).width() <= 1584 && $(window).width() >= 1530) {
      topBar.css({"width": "1200px !important", "margin-left": "8% !important"});
    }

    // if ($(window).width() <= 1428 && $(window).width() >= 1357) {
    //   topBar.css({"width": "1250px !important", "margin-left": "4%"});
    // }
	}



  /*MOVE SCROLL BAR TO TOP OF PAGE WHEN PAGE RELOADS*/
  if ($("html, body").scrollTop() > 0)
  {
    $("html, body").stop().animate({ scrollTop: about.offset().top }, 5);
    return false;
  }
});
