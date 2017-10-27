$(document).ready(function(){

  var topBar = $(".top-bar");
  var linkHome = $("#linkHome");
  var linkQuick = $("#linkQuick");
  var linkNews = $("#linkNews");
  var linkCalendar = $("#linkCalendar");
  var linkResources = $("#linkResources");
  var linkFaculty = $("#linkFaculty");
  var linkAbout = $("#linkAbout");
  var linkContactFa = $("#linkContactFa");
  var dropdownFa = $("#header1 ul #linkFaculty ul");
  var dropdownAb = $("#header1 ul #linkAbout ul");
  var faculty = $("#facultyHome");
  var scrollWrap = $(".scrollWrap");
  var footerFa = $("#footerFa");



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
    dropdownFa.css("display", "block").stop().animate({"opacity": "1", "margin-top": "2%"}, 200);
  });

  linkFaculty.mouseleave(function(){
    dropdownFa.stop().animate({"opacity": "0", "margin-top": "-6%"}, 200,
    function(){
      dropdownFa.css("display", "none");
    });
  });

  linkAbout.mouseenter(function(){
    dropdownAb.css("display", "block").stop().animate({"opacity": "1", "margin-top": "2%"}, 200);
  });

  linkAbout.mouseleave(function(){
    dropdownAb.stop().animate({"opacity": "0", "margin-top": "-6%"}, 200,
    function(){
      dropdownAb.css("display", "none");
    });
  });



  if ($(window).width() <= 641) {
    linkFaculty.mouseenter(function(){
      dropdownFa.css("display", "block").stop().animate({"opacity": "1", "margin-top": "-98%"}, 200);
    });

    linkFaculty.mouseleave(function(){
      dropdownFa.stop().animate({"opacity": "0", "margin-top": "-100%"}, 200,
      function(){
        dropdownFa.css("display", "none");
      });
    });

    linkAbout.mouseenter(function(){
      dropdownAb.css("display", "block").stop().animate({"opacity": "1", "margin-top": "-98%"}, 200);
    });

    linkAbout.mouseleave(function(){
      dropdownAb.stop().animate({"opacity": "0", "margin-top": "-100%"}, 200,
      function(){
        dropdownAb.css("display", "none");
      });
    });
  }



  /*LINKS IN MENU BAR ARE ACTIVE WHEN SCROLLED TO THEIR ANCHOR*/
	$(window).scroll(function(event)
	{
		if(faculty.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkFaculty.addClass("currentLink underLine");
			linkContactFa.removeClass("currentLink underLine");
		}

		if(footerFa.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkContactFa.addClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
		}
	});
	/**/



  $(window).scroll(function(){
    if ($(window).scrollTop() >= 50)
    {
      scrollWrap.css("visibility", "visible");
      scrollWrap.stop().animate({"opacity": "1"}, 50);
      scrollWrap.click(function()
    	{
        $("html, body").stop().animate({ scrollTop: faculty.offset().top }, 1000);
        return false;
    	});
    }

    if ($(window).scrollTop() <= 50)
    {
      scrollWrap.stop().animate({"opacity": "0"}, 50);
      scrollWrap.css("visibility", "hidden");
    }
  });



	/*MAKE LINK ACTIVE WHEN CLICKED*/
	linkFaculty.click(function()
	{
		linkFaculty.addClass("currentLink underLine");
		linkFaculty.removeClass("slideUnder");
		linkContactFa.removeClass("currentLink underLine");
	});

	linkContactFa.click(function()
	{
    linkContactFa.addClass("currentLink underLine");
		linkContactFa.removeClass("slideUnder");
    linkFaculty.removeClass("currentLink underLine");
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
    $("html, body").stop().animate({ scrollTop: faculty.offset().top }, 5);
    return false;
  }
});
