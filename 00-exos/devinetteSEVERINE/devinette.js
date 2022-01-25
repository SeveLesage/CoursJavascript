let valeur = Math.floor(Math.random() * 100) + 1;
console.log(Math.floor);
let nombre = 0;

for (let nbrEssai = 1; nbrEssai < 7; nbrEssai++) {

    nombre = Number(prompt("Entrez un nombre entre 1 et 100"));

    console.log("Essai numéro : " + nbrEssai + "." + " Vous avez entré le nombre " + nombre);

    if ((nombre < 1) || (nombre > 100)) {
        prompt("Ce nombre n'est pas autorisé, merci d'entrer un nombre entre 1 et 100");
    } else if (nombre < valeur) {
        prompt(" Le nombre à trouver est plus grand");
    } else if (nombre > valeur) {
        prompt("Le nombre à trouver est plus petit");
    } else if (nombre === valeur) {
        document.getElementById('p1').innerHTML = "Félicitation, la réponse était bien " + valeur;
        break;
    }

}

if (nombre !== valeur) {

    document.getElementById('p1').innerHTML = "Perdu, tu n'as pas trouvé la réponse. Le résultat est " + valeur;
}