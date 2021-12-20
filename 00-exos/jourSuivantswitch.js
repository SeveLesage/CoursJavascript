let jour = prompt('Quel jour sommes-nous aujourd\'hui ?');

switch (jour) {
    //on switch sur notre variable
    case 'lundi':
        document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes lundi , demain nous serons mardi.';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 'mardi':
        document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes Mardi , demain nous serons mercredi.';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 'mercredi':
        document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes mercredi , demain nous serons jeudi.';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 'jeudi':
        document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes jeudi , demain nous serons vendredi.';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 'vendredi':
        document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes vendredi , demain nous serons samedi.';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 'samedi':
        document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes samedi , demain nous serons dimanche.';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    case 'dimanche':
        document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes dimanche , demain retour du lundi au soleil !';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai

    default:
        document.querySelector('#p1').innerHTML = 'Ce n\'est pas un jour de la semaine';
        break; //le mot clé break est obligatoire pour un switch, ça permet de sortir si le cas est vrai
}