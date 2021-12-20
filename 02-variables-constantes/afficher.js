let age; //j'initialize ma variable

age = prompt('Quel est votre age ?'); //je lance une boite de dialogue avec l'utilisateur, j'enregistre sa valeur dans ma variable


//age a une valeur


console.log(age); //j'affiche la valeur dans la console (seulement en periode de développement du site)

//un autre exemple declarer et affectation d'une variable

let prenom = 'séverine';
let ville = 'Paris';

//console.log ou console.info sont des instruction qi permettent d'afficher le contenu d'une variable sur le navigateur dans la console

console.log(prenom);
console.info(ville);

//j'affiche le contenu de ma variable dans une boite alerte
//alert(prenom); ici j'affiche le contenu de ma variable
//alert("prenom"); ici j'affiche la chaine de caracteres (string) prénom
alert(prenom + ' ' + ville);