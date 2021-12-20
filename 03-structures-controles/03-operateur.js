let x = 5;
let y = -5;

//&&

if (x >= 0 && x <= 10) {
    document.getElementById('p1').innerHTML = 'X qui vaut ' + x + ' est une valeur comprise entre 0 et 10. ';
} else {
    document.getElementById('p1').innerHTML = 'X n\'est pas une valeur comprise entre 0 et 10 ';
}


// ||

if (y < -10 || y > 10) {
    document.getElementById('p2').innerHTML = 'Y qui vaut ' + y + ' est une valeur plus petite que -10 ou plus grande que 10 ';
} else {
    document.getElementById('p2').innerHTML = 'Y n\'est pas une valeur plus petite que -10 ou plus grande que 10.';
}

// NON !

if (!((x <= 2))) {
    document.getElementById('p3').innerHTML = 'X qui vaut ' + x + ' est une valeur strictement supérieur à 2';
}