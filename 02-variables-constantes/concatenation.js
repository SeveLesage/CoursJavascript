let age = Number(prompt("Quel est votre âge ?"));

let phrase = "Bonjour, j'ai " + age + " " + "ans.";
console.log(phrase);

document.getElementById('p1').innerHTML = phrase;