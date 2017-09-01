$(document).ready(function(){
  var homePage = $("#home");
  var mission = $("#mission");
  var quickLink = $("#quickLink");
  var newsEvents = $("#news-events");
  var resource_twit = $("#resource-twit");
  var footer = $("#footer");
  var linkHome = $("#linkHome");
  var linkQuick = $("#linkQuick");
  var linkNews = $("#linkNews");
  var linkResources = $("#linkResources");
  var linkContact = $("#linkContact");
  var downArr = $("#downArr");
  var globalSec = $("#global");
  var globalHead = $("#global div h1");
  var globalGraphic = $("#global .graphicEle");

  $("#header2").css("opacity", "0");

  /*MOVE SCROLL BAR TO TOP OF PAGE WHEN PAGE RELOADS*/
	$(window).scrollTop(0);



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
					jQuery('html,body').animate({scrollTop: target.offset ().top}, 2000);
					return false;
				}
			}
		});
	});



  /*LINKS IN MENU BAR ARE ACTIVE WHEN SCROLLED TO THEIR ANCHOR*/
	$(window).scroll(function(event)
	{
		if(homePage.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkHome.addClass('currentLink underLine');
      linkQuick.removeClass('currentLink underLine');
      linkNews.removeClass('currentLink underLine');
      linkResources.removeClass("currentLink underLine");
			linkContact.removeClass('currentLink underLine');
		}

    if(mission.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkQuick.addClass('currentLink underLine');
			linkHome.removeClass('currentLink underLine');
      linkNews.removeClass('currentLink underLine');
      linkResources.removeClass("currentLink underLine");
			linkContact.removeClass('currentLink underLine');
		}

    if(newsEvents.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkNews.addClass('currentLink underLine');
			linkHome.removeClass('currentLink underLine');
      linkQuick.removeClass('currentLink underLine');
      linkResources.removeClass("currentLink underLine");
			linkContact.removeClass('currentLink underLine');
		}

    if(globalSec.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkResources.addClass("currentLink underLine");
			linkHome.removeClass("currentLink underLine");
      linkNews.removeClass('currentLink underLine');
      linkQuick.removeClass('currentLink underLine');
      globalSec.stop().animate({"padding-top": "13%"}, 1500);
      globalHead.stop().animate({"opacity": "1"}, 3000);
      globalGraphic.stop().animate({"opacity": "1"}, 3000);
			linkContact.removeClass('currentLink underLine');
		}

		if(footer.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkContact.addClass('currentLink');
      linkHome.removeClass('currentLink');
      linkQuick.removeClass('currentLink underLine');
      linkNews.removeClass('currentLink underLine');
      linkResources.removeClass("currentLink underLine");
		}
	});
	/**/



	/*MAKE LINK ACTIVE WHEN CLICKED*/
	linkHome.click(function()
	{
		linkHome.addClass("currentLink underLine");
		linkHome.removeClass("slideUnder");
    linkQuick.removeClass('currentLink underLine');
    linkNews.removeClass("currentLink underLine");
    linkResources.removeClass("currentLink underLine");
		linkContact.removeClass("currentLink underLine");
		downArr.stop().fadeIn({"opacity": "1"}, 1000);
	});

  downArr.click(function()
	{
    // $("#header2").stop().animate({"opacity": "1", "z-index": "1000"}, 100);
    // $("#header1").stop().fadeOut(400);
    linkQuick.addClass('currentLink underLine');
		linkQuick.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkNews.removeClass('currentLink underLine');
    linkResources.removeClass("currentLink underLine");
    linkContact.remooveClass("currentLink underLine");
	});

	linkResources.click(function()
	{
    // $("#header2").stop().animate({"opacity": "1", "z-index": "1000"}, 100);
    // $("#header1").stop().fadeOut(400);
		linkResources.addClass("currentLink underLine");
		linkResources.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkQuick.removeClass('currentLink underLine');
    linkNews.removeClass('currentLink underLine');
    linkContact.removeClass('currentLink underLine');
		downArr.stop().fadeOut({"opacity": "0"}, 1000);
	});

	linkContact.click(function()
	{
    linkContact.addClass("currentLink");
		linkContact.removeClass("slideUnder");
		linkHome.removeClass("currentLink");
    linkQuick.removeClass('currentLink underLine');
    linkNews.removeClass('currentLink');
    linkResources.removeClass('currentLink');
		downArr.stop().fadeOut({"opacity": "0"}, 1000);
	});



	/*STICKY NAV*/
	// var navOffset = $("nav").offset().top;
  //
	// $(window).scroll(function()
	// {
	// 	var scrollPos = $(window).scrollTop();
  //
	// 	if(scrollPos >= navOffset)
	// 	{
	// 		$("#header2").stop().animate({"opacity": "1", "z-index": "1000"}, 100);
	// 		$("#header1").stop().fadeOut(400);
	// 	}
  //
	// 	else
	// 	{
  //     $("#header2").stop().animate({"opacity": "0", "z-index": "997"}, 300);
	// 		$("#header1").stop().fadeIn(100);
	// 	}
	// });
	/**/



  /*DOWN ARROW*/
	downArr.css("margin", "-5% auto 0");
  downArr.animate({"opacity": "1", "margin-top": "-2%"}, 1500,
	function()
	{
		downArr.addClass("animated css3-notification");
	});

  downArr.mouseover(function()
	{
		downArr.removeClass("animated css3-notification");
	});

	downArr.mouseout(function()
	{
		downArr.addClass("animated css3-notification");
	});
  /**/




});
