$(function() {
  $(".info__accordion .info__accordion-title:first").addClass("info__accordion-title-active");
		$(".info__accordion .info__accordion-text:not(:first)").hide();
 
		$(".info__accordion .info__accordion-title").click(function(){
 
			$(this).next(".info__accordion-text").slideToggle("slow")
			.siblings(".info__accordion-text:visible").slideUp("slow");
			$(this).toggleClass("info__accordion-title-active");
			$(this).siblings(".info__accordion-title").removeClass("info__accordion-title-active");
     });
});

 