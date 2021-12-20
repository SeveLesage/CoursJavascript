let a = 2;

document.getElementById("td1").innerHTML = "a =" + a;

a = a - 1;

document.getElementById("td2").innerHTML = "a - 1 =" + a;

a++;

document.getElementById("td3").innerHTML = "a++ =" + a;

let b = 8;

document.getElementById("td4").innerHTML = " b =" + b;

b += 2;

document.getElementById("td5").innerHTML = " b +=" + b;

let c = a + b * b;

document.getElementById("td6").innerHTML = " a + b * b =" + c;

let d = a * b + b;

document.getElementById("td7").innerHTML = " a * b + b =" + d;

let e = a * (b + b);

document.getElementById("td8").innerHTML = " a * (b + b) =" + e;

let f = a * b / a;

document.getElementById("td9").innerHTML = " a * b / a =" + f;

let g = b / a * a;

document.getElementById("td10").innerHTML = " b / a * a =" + g;