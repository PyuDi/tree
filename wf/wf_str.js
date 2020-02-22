function calc1() {
  window.i1 = document.getElementById("input1").value;
  window.i = 0;
  window.n = 0;
  while (i <= i1.length-1) {
	n += i1.charCodeAt(i);
	i++;
  }

  window.aa1 = Math.pow(n, 1/3) - Math.pow(n, Math.PI/4);
  window.ab1 = 100 * ( aa1 - Math.floor(aa1) );

  window.da1 = Math.pow(n, 4/Math.PI) - Math.pow(n, Math.sin(n));
  window.db1 = 100 * ( da1 - Math.floor(da1) );

  window.fa1 = Math.pow(n, Math.cos(n)) - Math.pow(n, Math.sin(2*n));
  window.fb1 = 1000 * ( fa1 - Math.floor(fa1) );
  
  window.la1 = Math.pow(n, Math.cos(-n)) - Math.pow(n, Math.PI/11);
  window.lb1 = 10 * ( la1 - Math.floor(la1) );

  document.getElementById("result1").innerHTML = "Attack: " + ab1.toFixed(1) + " / Defense: " + db1.toFixed(1) + " / Life: " + fb1.toFixed(1) + " / Luck: " + lb1.toFixed(1);
}
function calc2() {
  window.i2 = document.getElementById("input2").value;
  window.j = 0;
  window.m = 0;
  while (j <= i2.length-1) {
	m += i2.charCodeAt(j);
	j++;
  }

  window.aa2 = Math.pow(m, 1/3) - Math.pow(m, Math.PI/4);
  window.ab2 = 100 * ( aa2 - Math.floor(aa2) );

  window.da2 = Math.pow(m, 4/Math.PI) - Math.pow(m, Math.sin(m));
  window.db2 = 100 * ( da2 - Math.floor(da2) );

  window.fa2 = Math.pow(m, Math.cos(m)) - Math.pow(m, Math.sin(2*m));
  window.fb2 = 1000 * ( fa2 - Math.floor(fa2) );
  
  window.la2 = Math.pow(m, Math.cos(-m)) - Math.pow(m, Math.PI/11);
  window.lb2 = 10 * ( la2 - Math.floor(la2) );

  document.getElementById("result2").innerHTML = "Attack: " + ab2.toFixed(1) + " / Defense: " + db2.toFixed(1) + " / Life: " + fb2.toFixed(1) + " / Luck: " + lb2.toFixed(1);
}

function fight() {
  var i = 0;
  document.getElementById("phase").innerHTML = "";
  document.getElementById("fight1").innerHTML = "";
  document.getElementById("fight2").innerHTML = "";
  window.res = "";
  if (i1<2 || i2<2) { alert("Input integer bigger than 1"); }

  while (fb1>0 && fb2>0) {
    i+=1;

    window.a1 = ab1*(1 + Math.random()*lb1/100); //attack
    window.d1 = db1*(1 + Math.random()*lb1/100); //damage
    window.a2 = ab2*(1 + Math.random()*lb2/100);
    window.d2 = db2*(1 + Math.random()*lb2/100);

    window.h1 = a2 - d1; //harm
    window.h2 = a1 - d2;
    if (h1<0) {h1=0;}
    if (h2<0) {h2=0;}

    window.fb1 -= h1; //life
    window.fb2 -= h2;
    fb1 = fb1.toFixed(1);
    fb2 = fb2.toFixed(1);
    if (fb1<0) {fb1=0;}
    if (fb2<0) {fb2=0;}

    document.getElementById("phase").innerHTML += i + "<br>";
    document.getElementById("fight1").innerHTML += fb1 + "<br>";
    document.getElementById("fight2").innerHTML += fb2 + "<br>";

  }
}
function Enter_Check(){
  if(event.keyCode == 13){
     calc1();
     calc2();
     fight();
  }
}