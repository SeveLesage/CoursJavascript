/* let nbr1 = Number(prompt('Entrez un nombre'));
let nbr2 = Number(prompt('Entrez un deuxiement nombre'));
let nbr3 = nbr1 * nbr2;

document.getElementById('p1').innerHTML = "Les nombre sont " + nbr1 + " et " + nbr2;



document.getElementById('p2').innerHTML = "Les deux nombre multiplier donne  " + nbr3;
 */


let nbr1 = Number(prompt('Entrez un nombre'));
let nbr2 = Number(prompt('Entrez un deuxiement nombre'));

for (let a = 1; a <= 10; a++) {

    document.getElementById('p1').innerHTML += nbr1 + 'x' + a + ' = ' + nbr1 * a + '<br>';
}


for (let a = 1; a <= 10; a++) {

    document.getElementById('p2').innerHTML += nbr2 + 'x' + a + ' = ' + nbr2 * a + '<br>';
}

document.getElementById('p3').innerHTML = nbr1 + 'x' + nbr2 + '=' + nbr1 * nbr2;