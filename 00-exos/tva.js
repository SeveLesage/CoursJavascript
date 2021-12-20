let prixHT = Number(prompt("Quel est votre prix de votre objet hors taxes ?"));
let taxe = 1.20;
let ttc = prixHT * taxe;

console.log(ttc);

let phrase = "Le prix de votre objet hors taxe est" + " " + prixHT + " " + "€. Avec la TVA le prix sera " + ttc + " " + "€.";


document.getElementById('ptva').innerHTML = phrase;