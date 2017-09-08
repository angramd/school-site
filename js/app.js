$(document).ready(function(){
  var topBar = $(".top-bar");
  var homePage = $("#home");
  var mission = $("#mission");
  var quickLink = $("#quickLink");
  var quickLinkDiv = $("#quickLink > div > div");
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
  var globalIcon = $("#global div .icons");
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
      globalIcon.stop().animate({"opacity": "1"}, 3000);
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
    linkQuick.addClass('currentLink underLine');
		linkQuick.removeClass("slideUnder");
		linkHome.removeClass("currentLink underLine");
    linkNews.removeClass('currentLink underLine');
    linkResources.removeClass("currentLink underLine");
    linkContact.remooveClass("currentLink underLine");
	});

	linkResources.click(function()
	{
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



  if (navigator.userAgent.indexOf('Safari') != -1)
	{
    topBar.css("width", "1150px");
    mission.css("margin-top", "10%");
    quickLinkDiv.css("padding-bottom", "2%");
	}



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
