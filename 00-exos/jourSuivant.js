//methode if ...elfe...if...else

let jour = prompt('Quel jour sommes-nous aujourd\'hui ?');

console.log(jour);

document.querySelector('#p1').innerHTML = 'Le jour est ' + jour;

if (jour == 'lundi') {
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ' , demain nous serons mardi.';
} else if (jour == 'mardi') {
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ' , demain nous serons mercredi.';
} else if (jour == 'mercredi') {
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ' , demain nous serons jeudi.';
} else if (jour == 'jeudi') {
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ' , demain nous serons vendredi.';
} else if (jour == 'vendredi') {
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ' , demain nous serons samedi.';
} else if (jour == 'samedi') {
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ' , demain nous serons dimanche.';
} else if (jour == 'dimanche') {
    document.querySelector('#p1').innerHTML = 'Aujourd\'hui, nous sommes ' + jour + ' , demain nous serons lundi une nouvelle semaine.';
} else {
    document.querySelector('#p1').innerHTML = 'Ceci n\'est pas un jour de la semaine';
}