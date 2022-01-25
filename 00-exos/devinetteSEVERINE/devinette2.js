//Correction

//alert
alert('Bienvenue dans le jeu !');

//nombre aléatoire
let nbrAleatoire = Math.floor(Math.random() * 100);
console.log(nbrAleatoire);

//boucle for

for (i = 1; i <= 6; i++) {
    let nbUser = parseInt(prompt('trouvez le numéro mystère, compris entre 0 et 100. Attention, vous n\'avez que 6 essais.'));
    if ((nbUser < 0) || (nbUser > 100)) {
        alert('Vous devez saisir un nombre entre0 et 100 !' + i + '/6');
    } else if (isNaN(nbUser)) {
        //isNaN n'est pas pas un nombre
        alert('Vous devez saisir un NOMBRE !' + i + '/6');
    } else if (nbrAleatoire < nbUser) {
        alert('Visez plus bas !' + i + '/6');
    } else if (nbrAleatoire > nbUser) {
        alert('Visez plus haut !' + i + '/6');
    } else {
        document.getElementById('p1').innerHTML = "Félicitation, vous avez trouvé la réponse ! le nombre mystère était" + nbrAleatoire;
        break
    }
}

document.getElementById('p1').innerHTML = "Perdus, le nombre mystère était " + nbrAleatoire;