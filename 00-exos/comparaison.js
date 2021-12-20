let nbr1 = parseFloat(prompt('Saisissez le premier nombre !'));
let nbr2 = parseFloat(prompt('Saisissez le deuxieme nombre !'));

console.log(nbr1, nbr2);

if (nbr1 == nbr2) {
    document.querySelector('#p1').innerHTML = 'Le premier nombre que vous avez saisi ' + nbr1 + ' est égal aux segond nombre ' + nbr2;
} else if (nbr1 < nbr2) {
    document.querySelector('#p1').innerHTML = 'Le premier nombre que vous avez saisi ' + nbr1 + ' est inferieurs aux segond nombre ' + nbr2;
} else if (nbr1 > nbr2) {
    document.querySelector('#p1').innerHTML = 'Le premier nombre que vous avez saisi ' + nbr1 + ' est superieurs aux segond nombre ' + nbr2;
} else {
    document.querySelector('#p1').innerHTML = 'Ceci ne sont pas des nombres';
}