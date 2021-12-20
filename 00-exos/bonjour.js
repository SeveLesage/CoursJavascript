//declarer variable
let nom;
let prenom;
let age;
let ville;

//utiliser la variable
nom = prompt('Quel est votre nom de famille ?');
prenom = prompt('Quel est votre prénom ?');
age = prompt("Quel est votre age ?");
ville = prompt("Dans quel ville habitez-vous ?");


console.log(nom);
console.log(prenom);
console.log(age, ville);

//afficher ensemble
alert(nom + " " + prenom + " " + age + " " + ville);
//ici on affiche d'abord le contenu de notre variable prenom
//puis grace au signe + on ajoute ici une chaine de caractere
//ici juste un espace on concaténe à nouveau pour ajouter le contenu de notre variable nom

//afficher sur la page HTML
document.getElementById("p1").innerHTML = "Bonjour vous vous appellez" + " " + nom + " " + prenom;
document.querySelector("#p2").innerHTML = "Vous avez" + " " + age + " " + "ans" + " " + "et vous habitez à" + " " + ville;