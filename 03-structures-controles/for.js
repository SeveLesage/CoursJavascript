for (let i = 0; i < 10; i++) { //initialisation de la variable // 2 condition de sortie //3 generalement incrémentation
    document.getElementById('p1').innerHTML += 'i contient la valeur ' + i + ' qui est incrémenter à chaque passage. <br> ';
}

for (let i = 0; i <= 5; i++) {
    document.getElementById('tr1').innerHTML += '<tr><td>Passage n°' + (i + 1) + ' de la boucle</td> <td> i contient la valeur ' + i + ' qui est incrementée à chaque passage.</td></tr>'
};

//for avec un if

for (let arreteToi = 0; arreteToi < 10; arreteToi++) {
    if (arreteToi == 5) {
        break;
    }

    document.getElementById('div1').innerHTML += '<p class="text-white bg-success"> arreteToi contient la valeur' + arreteToi + 'qui est incrémentée à chaque passage de la boucle.</p>'
}

// for avec un if (continue)

for (let i = 0; i < 15; i++) {
    if (i % 2 != 0) { //Si le reste de la division est différent de 0 alors ça signifie que le nombre est impair
        continue; // va au suivant

    }
    document.getElementById('div2').innerHTML += '<p class="text-white bg-success">la variable qui contient la valeur ' + i + ' est incrémentée à chaque passage de la boucle</p>'
}