// declare deux variable global

let x = 5;
let y = 10;

function portee1() { //premiere fonction avec des variable global
    document.getElementById('p1').innerHTML = 'Depuis portee1() dont les élémént sont déclarer globalment, x = ' + x + ' et y = ' + y;

}

portee1();

//fonction portee2


function portee2() { //notre deuxieme fonction avec des variable local
    let a = 1;
    let b = 2;
    document.getElementById('p2').innerHTML = 'Depuis portee2() dont les élémént sont déclarer localment, a = ' + a + ' et b = ' + b;
}
portee2();


function portee3() { // notre troiseime fonction avec des variables locales qui portent le même non les variables globales (l.283) bien qu'elles s'appellent de la même facon ce sont des entités complétement différentes
    let x = 20;
    let y = 40;
    document.getElementById('p3').innerHTML = 'Depuis portee3(), x est égal à  ' + x + ' et y est égal à  ' + y;
}
portee3();

//Ce sont des variables déclarer dans l'espace local qui prennent le dessus sur celles déclarée dans l'espace global.

//ici on affiche les variable global 
document.getElementById('p4').innerHTML = 'J\'affiche les variables déclarées globalement , x = ' + x + ' et y est égal à = ' + y;


//afficher les variable local
//document.getElementById('p5').innerHTML = 'Depuis l\'espace global, a = ' + a + ' et b = ' + b;

//Cette derniere instruction ne peut pas s'executé car a et b sont des variables locales, elles ne sont donc pas définies globalement.