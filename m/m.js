/*
1. button click -> mute/unmute music
2. loop music when played


*/



function ToggleMute(a) {
	var song = document.getElementsByClassName(a);
	song.muted = !song.muted;
}
