$(document).ready(function() {

 $('.inner').hover(
	  function () {
		$(this).addClass("hoveron");
	   },
	   function () {
		  $(this).removeClass("hoveron");
	   }); 
	   
 $('.inner').mousedown(
	  function () {
		$(this).addClass("pink");
	   });
 $('.inner').mouseup(
	  function () {
		$(this).removeClass("pink");
	   });
	   
})
	   