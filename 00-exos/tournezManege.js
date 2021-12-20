// boucle while

let w1 = 0;

while (w1 < 10) {

    w1++;
    document.getElementById('p1').innerHTML += 'While : c\'est le tour de Manége n° ' + w1 + ' .<br>';
}


//boucle while avec prompt
let w2 = 0;
let tourM = prompt('Combien de tours de manége voulez-vous ?');

while (w2 < tourM) {
    w2++;
    document.getElementById('p3').innerHTML += 'While avec prompt : c\'est le tour de Manége n° ' + w2 + ' .<br>';

}

// boucle for

for (let for1 = 1; for1 <= 10; for1++) { //initialisation de la variable // 2 condition de sortie //3 generalement incrémentation
    document.getElementById('p2').innerHTML += 'for : c\'est le tour de Manége n° ' + for1 + ' .<br>';
}

// boucle for prompt

for (let for2 = prompt('Combien de tours de manége voulez-vous ?'); for2 <= 10; for2++) { //initialisation de la variable // 2 condition de sortie //3 generalement incrémentation
    document.getElementById('p4').innerHTML += 'for avec prompt : c\'est le tour de Manége n° ' + for2 + ' .<br>';
}