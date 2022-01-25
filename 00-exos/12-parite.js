for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.getElementById('p1').innerHTML += i + ' est pair'
    } else {
        document.getElementById('p1').innerHTML += i + ' est pair'
    }
}


let nombre = parseInt(prompt('Saisir un nombre'));
let nombreMax = (nombre + 10)
    //console.log(nombre);
    //document.getElementById('p2').innerHTML = 'Le nombre est ' + nombre;

for (let i = nombre; i <= nombreMax; i++) {
    if (i % 2 === 0) { /* si le reste de la division est égal à 0 alors mon chiffre/nombre est pair */
        document.getElementById('p2').innerHTML += i + nombre + " est pair. " + ' .<br>';
    } else {
        document.getElementById('p2').innerHTML += i + nombre + " est impair. " + ' .<br>';
    }
}


/* for (let i = 0; i <= 5; i++) {
    document.getElementById('p2').innerHTML += '<tr><td>Passage n°' + (i + 1) + ' de la boucle</td> <td> i contient la valeur ' + i + ' qui est incrementée à chaque passage.</td></tr>'
}; */


let nbre = parseInt(prompt('Saisir un nombre'));
let nbreMax = (nbre + 10)

while (nbre <= nbreMax) {
    if (nbre % 2 === 0) { /* si le reste de la division est égal à 0 alors mon chiffre/nombre est pair */
        document.getElementById('p4').innerHTML += nbre + " est pair. " + ' .<br>';
    } else {
        document.getElementById('p4').innerHTML += nbre + " est impair. " + ' .<br>';
    }
    nbre++;
}