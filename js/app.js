$(document).ready(function(){
  var downArr = $("#downArr");

  downArr.animate({"opacity": "1", "margin-top": "1%"}, 3000,
	function()
	{
		downArr.addClass("animated css3-notification");
	});
});
