$(document).ready(function(){
  var downArr = $("#downArr");
  downArr.css({"margin": "0 auto", "opacity": "0", "top": "0%"})
  downArr.animate({"opacity": "1", "top": "1%"}, 3000,
	function()
	{
		downArr.addClass("animated css3-notification");
	});
});
