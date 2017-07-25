$(function(){
	$("#burger").click(function() {
		$("#dropdown").slideToggle(500);
		$("#burger").toggleClass("cross");
	});

	var block = document.getElementById("play");
	var video = document.getElementById("video");

	$(block).click(function() {
		video.paused ? video.play() : video.pause();
		$(block).toggleClass("played");
	});
});