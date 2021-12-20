let x = 48;
switch (x) {
    //on switch sur notre variable
    case 2:
        document.querySelector('#p1').innerHTML = 'x contient la valeur 2';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 5:
        document.querySelector('#p1').innerHTML = 'x contient la valeur 5';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 8:
        document.querySelector('#p1').innerHTML = 'x contient la valeur 8';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 13:
        document.querySelector('#p1').innerHTML = 'x contient la valeur 13';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    default:
        document.querySelector('#p1').innerHTML = 'x ne contient pas les valeurs 2, 5, 8 et 13.';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai
}