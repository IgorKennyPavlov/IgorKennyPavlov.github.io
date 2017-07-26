$(function(){
	$("#burger").click(function() {
		$("#dropdown").slideToggle(500);
		$("#burger").toggleClass("cross");
	});

	$("#left").click(function() {
		var activeSlide = $(".slide.active");
		var prevSlide = activeSlide.prev(".slide");

		if (prevSlide.length == 0) {
			prevSlide = $(".slider img").last();
		}

		activeSlide.removeClass("active").addClass("hidden");
		prevSlide.removeClass("hidden").addClass("active");
	});

	$("#right").click(function() {
		var activeSlide = $(".slide.active");
		var nextSlide = activeSlide.next(".slide");

		if (nextSlide.length == 0) {
			nextSlide = $(".slider img").first();
		}

		activeSlide.removeClass("active").addClass("hidden");
		nextSlide.removeClass("hidden").addClass("active");
	});

	var block = $("#play");
	var video = document.getElementById("video");

	$(block).click(function() {
		video.paused ? video.play() : video.pause();
		$(block).toggleClass("played");
	});
});