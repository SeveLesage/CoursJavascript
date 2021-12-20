let x = 4;
let y = 0;

if (x > 1) { //normalement ce bloc affiche car c'est vrai
    alert('x contient une valeur supérieur à 1');
}

if (x == y) { //comme c'est faux cette alert ne doit pas se déclencher
    alert('x et y contiennent la même valeur');
}

if (y) { // l'alerte ne se déclenche pas car y contient contient la valeur de zero. qui est une valeur ui renvoie false (liste sur page HTML)
    alert('la valeur de y est évaluée à true');
}


//inversion du test logique

if ((x < 1) == false) {
    alert('x ne contient pas une valeur inférieur à 1');
}