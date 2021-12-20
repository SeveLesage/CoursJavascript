let nombre1 = 5;
let nombre2 = 3;

document.getElementById('p1').innerHTML = 'Au départ , ma variable nombre1 contient la valeur' + nombre1;
document.getElementById('p2').innerHTML = 'Au départ , ma variable nombre2 contient la valeur' + nombre2;
// tapez votre code ici sans rien modifier d'autre
let tmp; //initialize une variable temporaire

tmp = nombre1;

nombre1 = nombre2; //nombre1 = maintement egal à 3
nombre2 = tmp;



console.log("nombre1 est égal à " + nombre1); // vous devez trouver 3
console.log(" nombre2 est égal à " + nombre2); // vous devez trouver 5





document.getElementById('p3').innerHTML = 'Et maintenant , ma variable nombre1 contient la valeur' + nombre1;
document.getElementById('p4').innerHTML = 'Au départ , ma variable nombre2 contient la valeur' + nombre2;