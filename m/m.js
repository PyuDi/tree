/*
1. button click -> mute/unmute music
2. loop music when played


*/



function ToggleMute(a) {
	var song = document.getElementById(a);
	song.muted = !song.muted;
}
function PlaySong(a) {
	/* var song = document.getElementById("paff");
	song.play(); */
	document.getElementsByClassName("song").play();
}