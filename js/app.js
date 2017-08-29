$(document).ready(function(){
  var homePage = $("#home");
  var mission = $("#mission");
  var newsEvents = $("#news-events");
  var supply = $("#supply");
  var quick_twit = $("#quick-twit");
  var contact = $("#contact");
  var linkHome = $("#linkHome");
  var linkNews = $("#linkNews");
  var linkSupply = $("#linkSupply");
  var linkQuick = $("#linkQuick");
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
      linkNews.removeClass('currentLink underLine2');
      linkSupply.removeClass('currentLink');
      linkQuick.removeClass("currentLink underLine2");
			linkContact.removeClass('currentLink');
		}

    if(mission.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkNews.addClass('currentLink underLine2');
			linkHome.removeClass('currentLink underLine');
      linkSupply.removeClass('currentLink underLine2');
      linkQuick.removeClass("currentLink underLine2");
			linkContact.removeClass('currentLink');
		}

    if(supply.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkSupply.addClass("currentLink underLine2");
			linkHome.removeClass("currentLink underLine");
      linkNews.removeClass('currentLink underLine2');
      globalSec.stop().animate({"padding-top": "13%"}, 1500);
      globalHead.stop().animate({"opacity": "1"}, 3000);
      globalGraphic.stop().animate({"opacity": "1"}, 3000);
      linkQuick.removeClass("currentLink underLine2");
			linkContact.removeClass('currentLink');
		}

    if(quick_twit.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
      linkQuick.addClass("currentLink underLine2");
			linkHome.removeClass("currentLink underLine");
      linkNews.removeClass('currentLink underLine2');
      globalSec.stop().animate({"padding-top": "13%"}, 1500);
      globalHead.stop().animate({"opacity": "1"}, 3000);
      globalGraphic.stop().animate({"opacity": "1"}, 3000);
      linkSupply.removeClass("currentLink underLine2");
			linkContact.removeClass('currentLink');
		}



		// if(contact.offset().top < $(window).scrollTop() + $(window).outerHeight())
		// {
		// 	linkContact.addClass('currentLink');
    //   linkHome.removeClass('currentLink');
		// }
	});
	/**/



	/*MAKE LINK ACTIVE WHEN CLICKED*/
	linkHome.click(function()
	{
		linkHome.addClass("currentLink underLine");
		linkHome.removeClass("slideUnder");
    linkNews.removeClass("currentLink underLine2");
    linkSupply.removeClass('currentLink underLine2');
    linkQuick.removeClass("currentLink underLine2");
		linkContact.removeClass("currentLink");
		downArr.stop().fadeIn({"opacity": "1"}, 1000);
	});

  downArr.click(function()
	{
    $("#header2").stop().animate({"opacity": "1", "z-index": "1000"}, 100);
    $("#header1").stop().fadeOut(400);
    linkNews.addClass('currentLink underLine');
		linkNews.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkSupply.removeClass('currentLink underLine2');
    linkQuick.removeClass("currentLink underLine2");
    linkContact.remooveClass("currentLink");
	});

	linkSupply.click(function()
	{
    $("#header2").stop().animate({"opacity": "1", "z-index": "1000"}, 100);
    $("#header1").stop().fadeOut(400);
		linkSupply.addClass("currentLink underLine2");
		linkSupply.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkNews.removeClass('currentLink underLine2');
    linkQuick.removeClass("currentLink underLine2");
    linkContact.removeClass('currentLink');
		downArr.stop().fadeOut({"opacity": "0"}, 1000);
	});

	linkQuick.click(function()
	{
    $("#header2").stop().animate({"opacity": "1", "z-index": "1000"}, 100);
    $("#header1").stop().fadeOut(400);
		linkQuick.addClass("currentLink underLine2");
		linkQuick.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkNews.removeClass('currentLink underLine2');
    linkSupply.removeClass("currentLink underLine2");
    linkContact.removeClass('currentLink');
		downArr.stop().fadeOut({"opacity": "0"}, 1000);
	});

	// linkContact.click(function()
	// {
  //   $("#header2").stop().animate({"opacity": "1", "z-index": "1000"}, 100);
  //   $("#header1").stop().fadeOut(400);
	// 	linkContact.addClass("currentLink");
	// 	linkContact.removeClass("slideUnder");
	// 	linkHome.removeClass("currentLink");
  //   linkNews.removeClass('currentLink');
  //   linkSupply.removeClass('currentLink');
	// 	downArr.stop().fadeOut({"opacity": "0"}, 1000);
	// });



	/*STICKY NAV*/
	var navOffset = $("nav").offset().top;

	$(window).scroll(function()
	{
		var scrollPos = $(window).scrollTop();

		if(scrollPos >= navOffset)
		{
      // $("#home").stop().animate({"opacity": "0"}, 400);
      // downArr.stop().fadeOut({"opacity": "0"}, 400);
			$("#header2").stop().animate({"opacity": "1", "z-index": "1000"}, 100);
			$("#header1").stop().fadeOut(400);
		}

		else
		{
      // $("#home").stop().animate({"opacity": "1"}, 100);
      // downArr.stop().fadeIn({"opacity": "1"}, 100);
			$("#header2").stop().animate({"opacity": "0", "z-index": "997"}, 300);
			$("#header1").stop().fadeIn(100);
		}
	});
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
