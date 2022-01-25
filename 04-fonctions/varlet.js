function porteeNew() {
    let xlet = 1;
    var yvar = 2;

    if (true) {
        let xlet = 500;
        var yvar = 100;
        document.getElementById('p1').innerHTML = 'La variable let appelée xlet qui se trouvent dans le if = ' + xlet;
        document.getElementById('p2').innerHTML = 'La variable var appelée yvar qui se trouvent dans le if = ' + yvar;
        console.log(xlet);
    }

    document.getElementById('p3').innerHTML = 'La variable let "xlet" hors du if vaut ' + xlet;
    document.getElementById('p4').innerHTML = 'La variable var "yvar" hors du if vaut ' + yvar;
    console.log(yvar);
    //yvar affichera la derniere valeur declaree car var a une portée elargie
} //fin de la function
porteeNew(); //l'appel de la function