//Le JS pour la page 02-03-type.html

/* 
1. String */

let presentation = "Je m'appelle Mickaël";
let age = 20;

console.log(typeof presentation, typeof age);
//la fonction typeof va nous afficher le type de données dans notre variable

//afficher l'element dans la page

document.querySelector("#p1").innerHTML = "Type de donnée pour la variable présentation :" + typeof presentation;

document.querySelector("#p2").innerHTML = presentation;

document.getElementById("p3").innerHTML = presentation;

//2. Number

document.querySelector("#p4").innerHTML = "Type de donnée pour la variable âge :" + typeof age;

//3. Boolean

let touf = 8 > 4;

document.getElementById('p5').innerHTML = "Type de données pour la variable touf :" + typeof touf;

//Mettre == (2*=) pour verifier si un calcul est bon
let calcul1 = 12 + 25 == 46
let calcul2 = 3250 * 65 == 211250;
let calcul3 = 58 + 32 == 4;

console.log(calcul1, calcul2, calcul3);