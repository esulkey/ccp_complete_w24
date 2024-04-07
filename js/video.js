var video;

window.addEventListener("load", function() {
	video=document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log ('auto play is set to '+ video.autoplay)
	console.log('loop is set to ' + video.loop)
    document.querySelector("#play").addEventListener("click", function() {
        console.log("Play Video");
        video.play();
	});
    document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down");
		video.playbackRate -= 0.1;
		console.log("New Speed: " + video.playbackRate);
	});
	document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate += 0.1;
        console.log("New Speed: " + video.playbackRate);
    });
	document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        video.currentTime += 10;
        if (video.currentTime > video.duration) {
            video.currentTime = video.duration;
        }
        console.log("Video current time is " + video.currentTime);
    });
    document.querySelector("#rewind").addEventListener("click", function() {
        console.log("Rewind");
        video.currentTime -= 10;
        if (video.currentTime < 0) {
            video.currentTime = 0;
        }
});
});