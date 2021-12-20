let mois = parseInt(prompt('Saisissez le numéros du mois que vous souhaitez !', 'saisir un nombre entre 1 et 12'));
let moisNom = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];

//Ici on a creer un tableau (array) avec les mois de l'année ! ATTENTION commence à 0, il faut considérer que janvier == 0

console.log(moisNom[0]);

if (isNaN(mois)) { //si c'est une string execute ça
    document.getElementById('p1').innerHTML = 'Vous devez saisir un nombre ! ';
} else {
    if (mois === 2) {
        document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ' , il fait 28 jours.';
    } else if (mois === 01 || mois === 03 || mois === 05 || mois === 07 || mois === 08 || mois === 10 || mois === 12) {
        document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ' , il fait 31 jours.';
    } else if (mois === 04 || mois === 06 || mois === 09 || mois === 11) {
        document.getElementById('p1').innerHTML = 'Le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ' , il fait 30 jours.';
    }
}

/* if (isNaN(mois)) { //isnan is not number = chaine de caractere
    document.getElementById('p1').innerHTML = 'Vous devez saisir un nombre ! ';
} else if (mois == 01 || mois == 03 || mois == 05 || mois == 07 || mois == 08 || mois == 10 || mois == 12) {
    document.querySelector('#p1').innerHTML = 'Votre mois est ' + mois + ' et Il ya 31 jours dans ce mois la !';
} else if (mois == 04 || mois == 06 || mois == 09 || mois == 11) {
    document.querySelector('#p1').innerHTML = 'Votre mois est  ' + mois + ' et Il ya 30 jours dans ce mois la !';
} else if (mois == 02) {
    document.querySelector('#p1').innerHTML = 'Votre mois est  ' + mois + ' et Il ya 28 jours dans ce mois la !';
} else {
    document.querySelector('#p1').innerHTML = 'Il y a que 12 mois dans l\'année';
} */