function trans() {
  var input_ = document.getElementsByName("input")[0].value;
  window.input = input_.toString();

  var select = document.getElementsByClassName("select");
  var indexNo = select[0].selectedIndex;
  //alert(indexNo);
  if (indexNo==0) {
    trans_z2d();
  } else if (indexNo==1) {
    trans_z2d();
    input = input.replace(/ /gi, '');
  } else if (indexNo==2) {
    trans_d2z_c();
  } else if (indexNo==3) {
    trans_d2z();
  }

  document.getElementsByName("output")[0].value = input;
  //alert(input);
}
function trans_z2d() {
  input = input.replace(/zeta/gi, 'ζ');
  input = input.replace(/delta/gi, 'Δ');
  input = input.replace(/a/gi, 'Λ');
  input = input.replace(/b/gi, 'ϴ');
  input = input.replace(/c/gi, 'Ϲ');
  input = input.replace(/d/gi, 'Ͻ');
  input = input.replace(/e/gi, '≡');
  input = input.replace(/f/gi, '=');
  input = input.replace(/g/gi, 'Ꮾ');
  input = input.replace(/h/gi, 'Π');
  input = input.replace(/i/gi, 'I');
  input = input.replace(/j/gi, '⊅');
  input = input.replace(/k/gi, '⊄');
  input = input.replace(/l/gi, '∟');
  input = input.replace(/m/gi, '╞');
  input = input.replace(/n/gi, '├');
  input = input.replace(/o/gi, 'Ο');
  input = input.replace(/p/gi, '>');
  input = input.replace(/q/gi, '⦰');
  input = input.replace(/r/gi, '▷');
  input = input.replace(/s/gi, 'Ͷ');
  input = input.replace(/t/gi, '𝟩');
  input = input.replace(/u/gi, 'ⵡ');
  input = input.replace(/v/gi, '┤');
  input = input.replace(/w/gi, '╡');
  input = input.replace(/x/gi, '┼');
  input = input.replace(/y/gi, '┴');
  input = input.replace(/z/gi, '⧖');
}
function trans_d2z_c() {
  input = input.replace(/ζ/gi, 'ZETA');
  input = input.replace(/Δ/gi, 'DELTA');
  input = input.replace(/Λ/gi, 'A');
  input = input.replace(/ϴ/gi, 'B');
  input = input.replace(/Ϲ/gi, 'C');
  input = input.replace(/Ͻ/gi, 'D');
  input = input.replace(/≡/gi, 'E');
  input = input.replace(/=/gi, 'F');
  input = input.replace(/Ꮾ/gi, 'G');
  input = input.replace(/Π/gi, 'H');
  input = input.replace(/I/gi, 'I');
  input = input.replace(/⊅/gi, 'J');
  input = input.replace(/⊄/gi, 'K');
  input = input.replace(/∟/gi, 'L');
  input = input.replace(/╞/gi, 'M');
  input = input.replace(/├/gi, 'N');
  input = input.replace(/Ο/gi, 'O');
  input = input.replace(/>/gi, 'P');
  input = input.replace(/⦰/gi, 'Q');
  input = input.replace(/▷/gi, 'R');
  input = input.replace(/Ͷ/gi, 'S');
  input = input.replace(/𝟩/gi, 'T');
  input = input.replace(/ⵡ/gi, 'U');
  input = input.replace(/┤/gi, 'V');
  input = input.replace(/╡/gi, 'W');
  input = input.replace(/┼/gi, 'X');
  input = input.replace(/┴/gi, 'Y');
  input = input.replace(/⧖/gi, 'Z');
}
function trans_d2z() {
  input = input.replace(/ζ/gi, 'zeta');
  input = input.replace(/Δ/gi, 'delta');
  input = input.replace(/Λ/gi, 'a');
  input = input.replace(/ϴ/gi, 'b');
  input = input.replace(/Ϲ/gi, 'c');
  input = input.replace(/Ͻ/gi, 'd');
  input = input.replace(/≡/gi, 'e');
  input = input.replace(/=/gi, 'f');
  input = input.replace(/Ꮾ/gi, 'g');
  input = input.replace(/Π/gi, 'h');
  input = input.replace(/I/gi, 'i');
  input = input.replace(/⊅/gi, 'j');
  input = input.replace(/⊄/gi, 'k');
  input = input.replace(/∟/gi, 'l');
  input = input.replace(/╞/gi, 'm');
  input = input.replace(/├/gi, 'n');
  input = input.replace(/Ο/gi, 'o');
  input = input.replace(/>/gi, 'p');
  input = input.replace(/⦰/gi, 'q');
  input = input.replace(/▷/gi, 'r');
  input = input.replace(/Ͷ/gi, 's');
  input = input.replace(/𝟩/gi, 't');
  input = input.replace(/ⵡ/gi, 'u');
  input = input.replace(/┤/gi, 'v');
  input = input.replace(/╡/gi, 'w');
  input = input.replace(/┼/gi, 'x');
  input = input.replace(/┴/gi, 'y');
  input = input.replace(/⧖/gi, 'z');
}

function copy() {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  var output = document.getElementsByName("output")[0].value;
  dummy.value = output;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  document.getElementById("copy").innerHTML = "Copied to Clipboard!";
  setTimeout(function() {
    document.getElementById("copy").innerHTML = "Copy to Clipboard!";
  }, 1500);
}

/*

Λ
ϴ
Ϲ
Ͻ
≡
=
Ꮾ
Π
I
⊅
⊄
∟
╞
├
Ο
>
⦰
▷
Ͷ
𝟩
ⵡ
┤
╡
┼
┴
⧖

*/