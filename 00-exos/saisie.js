let i = 0; //valeur iniatiale qui va rentrer dans la boucle



while (i < 50 || i > 100) {
    let i = Number(prompt('Un nombre entre 50 et 100'));

}

document.getElementById('p1').innerHTML = "Le nombre recupere est le " + i;