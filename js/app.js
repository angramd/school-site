$(document).ready(function(){
  var topBar = $(".top-bar");
  var linkHome = $("#linkHome");
  var linkQuick = $("#linkQuick");
  var linkNews = $("#linkNews");
  var linkCalendar = $("#linkCalendar");
  var linkResources = $("#linkResources");
  var linkFaculty = $("#linkFaculty");
  var linkAbout = $("#linkAbout");
  var linkContact = $("#linkContact");
  var dropdownFa = $("#header1 ul #linkFaculty ul");
  var dropdownAb = $("#header1 ul #linkAbout ul");
  var homePage = $("#home");
  var scrollWrap = $(".scrollWrap");
  var mission = $("#mission");
  var quickLink = $("#quickLink");
  var quickLinkDiv = $("#quickLink > div > div");
  var newsEvents = $(".news-events");
  var article1 = $(".news-events #article1");
  var article2 = $(".news-events #article2");
  var imgSlide = $(".imgSlide");
  var annBTN = $(".moreann");
  var calBTN = $(".viewcalendar");
  var globalSec = $("#global");
  var globalIcon = $("#global div .icons");
  var globalHead = $("#global div h1");
  var globalGraphic = $("#global .graphicEle");
  var resource_twit = $("#resource-twit");
  var footer = $("#footerMain");



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



  /*LINKS IN MENU BAR ARE ACTIVE WHEN SCROLLED TO THEIR ANCHOR*/
	$(window).scroll(function(event)
	{
		if(homePage.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{

      if(homePage.css("opacity", "1")){
        linkHome.addClass("currentLink underLine");
        linkQuick.removeClass("currentLink underLine");
      }

			linkHome.addClass("currentLink underLine");
      linkQuick.removeClass("currentLink underLine");
      linkNews.removeClass("currentLink underLine");
      linkCalendar.removeClass("currentLink underLine");
      linkResources.removeClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");
			linkContact.removeClass("currentLink underLine");
      homePage.stop().animate({"opacity": "1"}, 200);


		}

    if(mission.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkQuick.addClass("currentLink underLine");
			linkHome.removeClass("currentLink underLine");
      linkNews.removeClass("currentLink underLine");
      linkCalendar.removeClass("currentLink underLine");
      linkResources.removeClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");
			linkContact.removeClass("currentLink underLine");

      if(homePage.css("opacity", "0")){
        homePage.css("opacity", "0");
      }
		}

    if(article1.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkNews.addClass("currentLink underLine");
			linkHome.removeClass("currentLink underLine");
      linkQuick.removeClass("currentLink underLine");
      linkCalendar.removeClass("currentLink underLine");
      linkResources.removeClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");
			linkContact.removeClass("currentLink underLine");

      if(homePage.css("opacity", "0")){
        homePage.css("opacity", "0");
      }
		}

    if(article2.offset().top < $(window).scrollTop() + $(window).outerHeight() && $(window).width() > 641)
    {
      linkCalendar.addClass("currentLink underLine");
      linkHome.removeClass("currentLink underLine");
      linkQuick.removeClass("currentLink underLine");
      linkNews.removeClass("currentLink underLine");
      linkResources.removeClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");
      linkContact.removeClass("currentLink underLine");

      if(homePage.css("opacity", "0")){
        homePage.css("opacity", "0");
      }
    }

    if(article2.offset().top < $(window).scrollTop() + $(window).outerHeight() && $(window).width() <= 641)
    {
      linkCalendar.addClass("currentLink underLine");
      linkHome.removeClass("currentLink underLine");
      linkQuick.removeClass("currentLink underLine");
      linkNews.removeClass("currentLink underLine");
      linkResources.removeClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");
      linkContact.removeClass("currentLink underLine");

      if(homePage.css("opacity", "0")){
        homePage.css("opacity", "0");
      }
    }

    if ($(window).width() <= 641) {
      linkFaculty.mouseenter(function(){
        dropdownFa.css("display", "block").stop().animate({"opacity": "1", "margin-top": "-98%"}, 200);
      });

      linkFaculty.mouseleave(function(){
        dropdown.stop().animate({"opacity": "0", "margin-top": "-100%"}, 200,
        function(){
          dropdownFa.css("display", "none");
        });
      });

      linkAbout.mouseenter(function(){
        dropdownAb.css("display", "block").stop().animate({"opacity": "1", "margin-top": "-6%"}, 200);
      });

      linkAbout.mouseleave(function(){
        dropdownAb.stop().animate({"opacity": "0", "margin-top": "-5%"}, 200,
        function(){
          dropdownAb.css("display", "none");
        });
      });

      annBTN.click(function()
      {
        jQuery('html,body').stop().animate({scrollTop: newsEvents.offset().top}, 2000);

        $(".article1Container > div:first").stop().fadeOut(200,
        function(){
          $(".article1Container > div:first").next().stop().fadeIn(1500).end().appendTo(".article1Container");
        });
      });

      calBTN.click(function()
      {
        jQuery('html,body').stop().animate({scrollTop: article2.offset().top}, 2000);

        $(".article2Container > div:first").stop().fadeOut(200,
        function(){
          $(".article2Container > div:first").next().stop().fadeIn(1500).end().appendTo(".article2Container");
        });
      });
    }

    if(globalSec.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkCalendar.addClass("currentLink underLine");
			linkHome.removeClass("currentLink underLine");
      linkNews.removeClass("currentLink underLine");
      linkResources.removeClass("currentLink underLine");
      linkQuick.removeClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");
			linkContact.removeClass("currentLink underLine");

      if(homePage.css("opacity", "0")){
        homePage.css("opacity", "0");
      }

      if ($(window).width() >= 1861) {
        globalSec.stop().animate({"padding-top": "13%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1860 && $(window).width() >= 1712) {
        globalSec.stop().animate({"padding-top": "16%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1711 && $(window).width() >= 1531) {
        globalSec.stop().animate({"padding-top": "17%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1530 && $(window).width() >= 1429) {
        globalSec.stop().animate({"padding-top": "18%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1428 && $(window).width() >= 1357) {
        globalSec.stop().animate({"padding-top": "20%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1356 && $(window).width() >= 1277) {
        globalSec.stop().animate({"padding-top": "21%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1276 && $(window).width() >= 1227) {
        globalSec.stop().animate({"padding-top": "22%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1226 && $(window).width() >= 1218) {
        globalSec.stop().animate({"padding-top": "22%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1217 && $(window).width() >= 1170) {
        globalSec.stop().animate({"padding-top": "24%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1169 && $(window).width() >= 1147) {
        globalSec.stop().animate({"padding-top": "24%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1146 && $(window).width() >= 1134) {
        globalSec.stop().animate({"padding-top": "25%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1133 && $(window).width() >= 1098) {
        globalSec.stop().animate({"padding-top": "25%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1097 && $(window).width() >= 1013) {
        globalSec.stop().animate({"padding-top": "25%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 1012 && $(window).width() >= 974) {
        globalSec.stop().animate({"padding-top": "26%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 973 && $(window).width() >= 904) {
        globalSec.stop().animate({"padding-top": "27%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 903 && $(window).width() >= 883) {
        globalSec.stop().animate({"padding-top": "29%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 882 && $(window).width() >= 809) {
        globalSec.stop().animate({"padding-top": "30%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 808 && $(window).width() >= 777) {
        globalSec.stop().animate({"padding-top": "31%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 776 && $(window).width() >= 741) {
        globalSec.stop().animate({"padding-top": "31%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 740 && $(window).width() >= 686) {
        globalSec.stop().animate({"padding-top": "36%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 685 && $(window).width() >= 657) {
        globalSec.stop().animate({"padding-top": "38%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 656 && $(window).width() >= 642) {
        globalSec.stop().animate({"padding-top": "40%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 641 && $(window).width() >= 635) {
        globalSec.stop().animate({"padding-top": "43%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 634 && $(window).width() >= 588) {
        globalSec.stop().animate({"padding-top": "43%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 587 && $(window).width() >= 555) {
        globalSec.stop().animate({"padding-top": "45%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 554 && $(window).width() >= 480) {
        globalSec.stop().animate({"padding-top": "48%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 479 && $(window).width() >= 442) {
        globalSec.stop().animate({"padding-top": "61%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 441 && $(window).width() >= 390) {
        globalSec.stop().animate({"padding-top": "65%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }

      if ($(window).width() <= 389 && $(window).width() >= 320) {
        globalSec.stop().animate({"padding-top": "90%"}, 500);
        globalIcon.stop().animate({"opacity": "1"}, 500);
        globalHead.stop().animate({"opacity": "1"}, 500);
        globalGraphic.stop().animate({"opacity": "1"}, 500);
      }
		}

    if(resource_twit.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkResources.addClass("currentLink underLine");
      linkHome.removeClass("currentLink underLine");
      linkQuick.removeClass("currentLink underLine");
      linkNews.removeClass("currentLink underLine");
      linkCalendar.removeClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");
      linkContact.removeClass("currentLink underLine");

      if(homePage.css("opacity", "0")){
        homePage.css("opacity", "0");
      }
		}

		if(footer.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkContact.addClass("currentLink underLine");
      linkHome.removeClass("currentLink underLine");
      linkQuick.removeClass("currentLink underLine");
      linkNews.removeClass("currentLink underLine");
      linkCalendar.removeClass("currentLink underLine");
      linkResources.removeClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
      linkAbout.removeClass("currentLink underLine");

      if(homePage.css("opacity", "0")){
        homePage.css("opacity", "0");
      }
		}
	});
	/**/



	/*MAKE LINK ACTIVE WHEN CLICKED*/
	linkHome.click(function()
	{
		linkHome.addClass("currentLink underLine");
		linkHome.removeClass("slideUnder");
    linkQuick.removeClass("currentLink underLine");
    linkNews.removeClass("currentLink underLine");
    linkResources.removeClass("currentLink underLine");
    linkFaculty.removeClass("currentLink underLine");
    linkAbout.removeClass("currentLink underLine");
		linkContact.removeClass("currentLink underLine");
    homePage.css("opacity", "1");
	});



  $(window).scroll(function(){
    if ($(window).scrollTop() >= 50)
    {
      scrollWrap.css("visibility", "visible");
      scrollWrap.stop().animate({"opacity": "1"}, 50);
      scrollWrap.click(function()
    	{
        $("html, body").stop().animate({ scrollTop: homePage.offset().top }, 1000);
        return false;
    	});
    }

    if ($(window).scrollTop() <= 50)
    {
      scrollWrap.stop().animate({"opacity": "0"}, 50);
      scrollWrap.css("visibility", "hidden");
    }
  });



  linkQuick.click(function()
	{
    linkQuick.addClass("currentLink underLine");
		linkQuick.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkNews.removeClass("currentLink underLine");
    linkResources.removeClass("currentLink underLine");
    linkFaculty.removeClass("currentLink underLine");
    linkAbout.removeClass("currentLink underLine");
    linkContact.removeClass("currentLink underLine");

    if(homePage.css("opacity", "0")){
      homePage.css("opacity", "0");
    }
	});

  linkNews.click(function()
	{
    linkNews.addClass("currentLink underLine");
		linkNews.removeClass("slideUnder");
    linkQuick.removeClass("currentLink underLine");
    linkHome.removeClass("currentLink underLine");
    linkCalendar.removeClass("currentLink underLine");
    linkResources.removeClass("currentLink underLine");
    linkFaculty.removeClass("currentLink underLine");
    linkAbout.removeClass("currentLink underLine");
		linkContact.removeClass("currentLink underLine");

    if(homePage.css("opacity", "0")){
      homePage.css("opacity", "0");
    }
	});

  linkCalendar.click(function()
	{
		linkCalendar.addClass("currentLink underLine");
		linkCalendar.removeClass("slideUnder");
    linkQuick.removeClass("currentLink underLine");
    linkHome.removeClass("currentLink underLine");
    linkNews.removeClass("currentLink underLine");
    linkResources.removeClass("currentLink underLine");
    linkFaculty.removeClass("currentLink underLine");
    linkAbout.removeClass("currentLink underLine");
		linkContact.removeClass("currentLink underLine");

    if(homePage.css("opacity", "0")){
      homePage.css("opacity", "0");
    }
	});

	linkResources.click(function()
	{
		linkResources.addClass("currentLink underLine");
		linkResources.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkQuick.removeClass("currentLink underLine");
    linkNews.removeClass("currentLink underLine");
		linkCalendar.removeClass("currentLink underLine");
    linkFaculty.removeClass("currentLink underLine");
    linkAbout.removeClass("currentLink underLine");
    linkContact.removeClass("currentLink underLine");

    if(homePage.css("opacity", "0")){
      homePage.css("opacity", "0");
    }
	});

	linkContact.click(function()
	{
    linkContact.addClass("currentLink underLine");
		linkContact.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkQuick.removeClass("currentLink underLine");
    linkNews.removeClass("currentLink underLine");
    linkResources.removeClass("currentLink underLine");
    linkFaculty.removeClass("currentLink underLine");
    linkAbout.removeClass("currentLink underLine");

    if(homePage.css("opacity", "0")){
      homePage.css("opacity", "0");
    }
	});



  /*TARGET CSS IN SAFARI BROWSER*/
  if (navigator.userAgent.indexOf('Safari') != -1 && !navigator.userAgent.indexOf('Chrome') == -1)
	{
    topBar.css({"width": "1150px", "margin-left": "1%"});
    mission.css("margin-top", "10%");
    quickLinkDiv.css("padding-bottom", "2%");

    if ($(window).width() <= 1584 && $(window).width() >= 1530) {
      topBar.css({"width": "1200px !important", "margin-left": "8% !important"});
    }
	}



  /*ROTATING BACKGROUND IMAGE*/
  $("#bckRotate li:gt(0)").hide();
	setInterval(function(){
		$("#bckRotate li:first").stop().fadeOut(1000).next().stop().fadeIn(1000).end().appendTo("#bckRotate");
	}, 5000);



  /*MOVE SCROLLBAR TO TOP OF PAGE WHEN PAGE RELOADS*/
  if ($("html, body").scrollTop() > 0)
  {
    $("html, body").stop().animate({ scrollTop: homePage.offset().top }, 5);
    return false;
  }
});
