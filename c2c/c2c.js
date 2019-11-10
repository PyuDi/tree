function calc() {
  window.p = Number(document.getElementById("p").value);
  window.g = Number(document.getElementById("g").value);
  window.b = Number(document.getElementById("b").value);
  window.m = Number(document.getElementById("m").value);
	window.tp = Number(document.getElementById("tp").value);

	window.t = Number(p+g+m+b);

	console.log(p, g, b, m, tp, t);

	res = ( p*1.0 + g*0.3 + b*0.0 + m*0.0 - tp/100*t ) / 0.3;
	res = Math.round(res);

	document.getElementById("res").innerHTML = "There were " + res + " Lemon Perfects :|";
}

function Enter_Check(){
  if(event.keyCode == 13){
    calc();
  }
}