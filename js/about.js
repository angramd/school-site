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

	linkContactFa.click(function()
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
});
