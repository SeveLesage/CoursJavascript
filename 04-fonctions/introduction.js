// la fonction random : aléatoire

document.getElementById('p1').innerHTML = Math.floor(Math.random() * 100 + 1);

document.getElementById('p2').innerHTML = Math.floor(Math.random() * 11);

//ici on ecris * 11 car nous voulons les nombres de 0 à 10 ce qui équivaux à 11 nombres !


// le * 100 = pour dire qu'on veut un chiffre entre 0 et 100

// le Math.floor signifie qu'on veut un chiffre entier

// +1 signifie que l'on ne veut pas le chiffre 0

document.getElementById('p3').innerHTML = Math.random();
//Math.random par defaut renvoie un decimal entre 0 et 1

//fonction personnalisée

function randomX100() {
    return Math.random() * 100;
}

document.querySelector('#p4').innerHTML = 'Le nombre généré est ' + randomX100();

//exemple de fonction personnalisé avec une multiplication

//entre parenthese d'une function on peut declarer des arguments
function multiplier(nbr1, nbr2) {
    return ('Multiplions : ' + nbr1 + ' x ' + nbr2 + ' = ' + (nbr1 * nbr2));
}

document.querySelector('#p5').innerHTML = multiplier(20, 5);

//addition
function addition(nbr3, nbr4) {
    return ('Additionnnons : ' + nbr3 + ' + ' + nbr4 + ' = ' + (nbr3 + nbr4));
}

document.querySelector('#p6').innerHTML = addition(78, 2);

//soustraction
function soustraction(nbr5, nbr6) {
    return ('Soustrayions : ' + nbr5 + ' - ' + nbr6 + ' = ' + (nbr5 - nbr6));
}

document.querySelector('#p7').innerHTML = soustraction(45, 41);

//division

function division(nbr7, nbr8) {
    return ('Divison : ' + nbr7 + ' / ' + nbr8 + ' = ' + (nbr7 / nbr8));
}

document.querySelector('#p8').innerHTML = division(20, 5);

//modulo

function modulo(nbr9, nbr10) {
    return ('Modulon : ' + nbr9 + ' % ' + nbr10 + ' = ' + (nbr9 % nbr10));
}

document.querySelector('#p9').innerHTML = modulo(20, 5);