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
  var homePage = $("#home");
  var footer = $("#footer");

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
					jQuery('html,body').animate({scrollTop: target.offset().top}, 2000);
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
			linkFaculty.addClass("currentLink underLine");
			linkContact.removeClass("currentLink underLine");
		}

		if(footer.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkContact.addClass("currentLink underLine");
      linkFaculty.removeClass("currentLink underLine");
		}
	});
	/**/



	/*MAKE LINK ACTIVE WHEN CLICKED*/
	linkFaculty.click(function()
	{
		linkFaculty.addClass("currentLink underLine");
		linkFaculty.removeClass("slideUnder");
		linkContact.removeClass("currentLink underLine");
	});

	linkContact.click(function()
	{
    linkContact.addClass("currentLink underLine");
		linkContact.removeClass("slideUnder");
    linkFaculty.removeClass("currentLink underLine");
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

    // if ($(window).width() <= 1428 && $(window).width() >= 1357) {
    //   topBar.css({"width": "1250px !important", "margin-left": "4%"});
    // }
	}
});
