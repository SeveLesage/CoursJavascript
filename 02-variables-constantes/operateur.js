//1- Les opérateurs arithmétique

let a = 22;
let b = 33;
let c = 1028;

let x = a + b;
let y = a - b * c;
let z = c % b;



//le signe de modulo est %

console.log(x);
console.log(y);
console.log(z);


//exemple de tous les operateurs arithemétique

let nbr1 = 12;
let nbr2 = 45;
let nbr3 = 7;
let nbr4 = 96;
let nbr5 = 63;
let nbr6 = 4005;

//additionne

let addition = nbr2 + nbr6;
console.log(addition);


//soustraction
let soustraction = nbr1 - nbr4;
console.log(soustraction);

//multiplication
let multiplication = nbr5 * nbr3;
console.log(multiplication);

//division

let division = nbr2 / nbr4;
console.log(division);

//modulo

let modulo = nbr1 % nbr3;
console.log(modulo);

//exponentielle

let exponentielle = 2 ** 3;
console.log(exponentielle);

//operateur d'affectation

//addition puis affecter

nbr1 += nbr2; //on change le premier on demande a nbr1 de changer sa valeur avec le nbr2
console.log(nbr1);

//soustraction puis affecter

nbr2 -= nbr3;
console.log(nbr2);

//multiplie puis affecter

nbr3 *= nbr4;
console.log(nbr3);

//divise puis affecter

nbr4 /= nbr5;
console.log(nbr4);

//modulo puis affecter

nbr5 %= nbr6;
console.log(nbr5);