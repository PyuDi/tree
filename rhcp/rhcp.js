function setBg() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

	var a = randomColor.substring(0,2);
	var b = randomColor.substring(2,4);
	var c = randomColor.substring(4);
	//console.log(a+b+c);

  document.getElementById("1l").style.backgroundColor = "#" + a+b+c;
  document.getElementById("1c").style.backgroundColor = "#" + b+c+a;
  document.getElementById("1r").style.backgroundColor = "#" + c+a+b;

  document.getElementById("2l").style.backgroundColor = "#" + a+c+b;
  document.getElementById("2c").style.backgroundColor = "#" + c+b+a;
  document.getElementById("2r").style.backgroundColor = "#" + b+a+c;

  document.getElementById("3l").style.backgroundColor = "#" + a+"ff"+"ff";
  document.getElementById("3c").style.backgroundColor = "#" + "ff"+b+"ff";
  document.getElementById("3r").style.backgroundColor = "#" + "ff"+"ff"+c;
	
  document.getElementById("4l").style.backgroundColor = "#" + a+"00"+"00";
  document.getElementById("4c").style.backgroundColor = "#" + "00"+b+"00";
  document.getElementById("4r").style.backgroundColor = "#" + "00"+"00"+c;


	var i = 0;
	for (i=0;i<=1;i++) {
  	document.getElementsByClassName("p1l")[i].innerHTML = "#" + a+b+c;
		document.getElementsByClassName("p1c")[i].innerHTML = "#" + b+c+a;
		document.getElementsByClassName("p1r")[i].innerHTML = "#" + c+a+b;

  	document.getElementsByClassName("p2l")[i].innerHTML = "#" + a+c+b;
  	document.getElementsByClassName("p2c")[i].innerHTML = "#" + b+a+c;
  	document.getElementsByClassName("p2r")[i].innerHTML = "#" + c+b+a;

  	document.getElementsByClassName("p3l")[i].innerHTML = "#" + a+"ff"+"ff";
  	document.getElementsByClassName("p3c")[i].innerHTML = "#" + "ff"+b+"ff";
  	document.getElementsByClassName("p3r")[i].innerHTML = "#" + "ff"+"ff"+c;

  	document.getElementsByClassName("p4l")[i].innerHTML = "#" + a+"00"+"00";
  	document.getElementsByClassName("p4c")[i].innerHTML = "#" + "00"+b+"00";
  	document.getElementsByClassName("p4r")[i].innerHTML = "#" + "00"+"00"+c;
	}
}

setBg();
setInterval(setBg, 10000);
//setInterval(setBg, 1000);