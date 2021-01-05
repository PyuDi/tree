function fz(obj, len) {
	obj='000000000000000'+obj;
	return obj.substring(obj.length-len);
} 
var type=1;
var clock = document.querySelector('.clock');
function getTime(){
	window.time = new Date();
	window.Y = time.getFullYear();
	window.M = time.getMonth()+1;
	window.D = time.getDate();
	window.h = time.getHours();
	window.m = time.getMinutes();
	window.s = time.getSeconds();
	if (type==1) {
		clock.innerHTML = fz(Y,4) + "-" + fz(M,2) + "-" + fz(D,2) + " " + fz(h,2) + ":" + fz(m,2) + ":" + fz(s,2);
	} else if (type==11) {
		Y-=parseInt(Y/100)*100;
		clock.innerHTML = fz(Y,2) + "-" + fz(M,2) + "-" + fz(D,2) + " " + fz(h,2) + ":" + fz(m,2) + ":" + fz(s,2);
	} else if (type==12) {
		clock.innerHTML = fz(M,2) + "-" + fz(D,2) + "-" + fz(Y,4) + " " + fz(h,2) + ":" + fz(m,2) + ":" + fz(s,2);
	} else if (type==13) {
		Y-=parseInt(Y/100)*100;
		clock.innerHTML = fz(M,2) + "-" + fz(D,2) + "-" + fz(Y,2) + " " + fz(h,2) + ":" + fz(m,2) + ":" + fz(s,2);
	} else if (type==2) {
		clock.innerHTML = fz(h,2) + ":" + fz(m,2) + ":" + fz(s,2);
	} else if (type==21) {
		clock.innerHTML = fz(m,2) + ":" + fz(s,2);
	}
	
}
setInterval(getTime, 3);
function f1() {
	type=1;
}
function f11() {
	type=11;
}
function f12() {
	type=12;
}
function f13() {
	type=13;
}
function f2() {
	type=2;
}
function f21() {
	type=21;
}
function hide() {
	var x = document.getElementById("table");
	if (x.style.visibility !== "hidden") {
		x.style.visibility = "hidden";
		document.getElementById("button").innerHTML = "Show Selections";
	} else {
		x.style.visibility = "visible";
		document.getElementById("button").innerHTML = "Hide Selections";
	}
}
