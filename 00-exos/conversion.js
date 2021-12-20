let celsius = Number(prompt("Saisir une température en celsius à convertir en fahrenheit ?"));
let fahrenheit = (celsius * 9 / 5) + 32;
let fahrenheit2 = Number(prompt("Saisir une température en fahrenheit à convertir en celsius ?"));
let celsius2 = (fahrenheit2 - 32) * 5 / 9;


console.log(fahrenheit);
console.log(celsius2);

let phrase = "La température en celsius est de " + celsius + " " + "°C" + " et la converstion en fahrenheit est de " + fahrenheit + " °F";


document.getElementById('degre').innerHTML = phrase;


let phrase2 = "La température en Fahrenheit est de " + fahrenheit2 + " " + "°F" + " et la converstion en celsius est de " + celsius2 + " °C";


document.getElementById('degre2').innerHTML = phrase2;

//avec li

//temp 1 convertion1

//document.getId li1 1 degrés représente + ((1*9/5) + 32) + degré fahrenheit

//document.getId li2 innerHTML phrase + temp1 + phrase + conversion1

//temp2 

//convertion 2 temp2 - 32 * 5 / 9

//document.getId li3 1 degrés représente + ((1-32) * 5/9) + degré celsius

//document.getId li4 innerHTML phrase + temp2 + phrase + conversion2