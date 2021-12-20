let x = 0.5;

if (x > 1) {
    alert('X contient une valeur strictement supérieur à 1');
} else if (x == 1) {
    alert('X contient la valeur 1');
} else {
    alert('X contient la valeur strictement inferieur à 1');
}


//autre exemple

let y = -10;

if (y > 1) {
    alert('Y contient une valeur strictement superieur à 1')
} else if (y == 1) {
    alert('Y contient la valeur 1');
} else if (y < 1) {
    alert('y contient la valeur strictement inferieur à 1');
} else if (y < -2) {
    alert('y contient la valeur strictement inferieur à -2');
} else {
    alert('X contient la valeur de y n\'a pas pu être comparée à un nombre');
}