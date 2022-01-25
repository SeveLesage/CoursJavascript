let heure = parseInt(prompt('Saisissez l\'heure'));
let minute = parseInt(prompt('Saisissez les minutes'));
let seconde = parseInt(prompt('Saisissez les secondes'));


console.log(heure, minute, seconde);


document.getElementById('p1').innerHTML = 'Il est ' + heure + 'h ' + minute + ' min ' + seconde + ' sec ';


if ((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59)) {
    seconde++;
    if (seconde === 60) {
        seconde = 0;
        minute++;
        if (minute === 60) {
            minute = 0;
            heure++;
            if (heure === 24) {
                heure = 0
            }
        }
    }
    document.getElementById('p2').innerHTML = 'Dans une segonde il sera ' + heure + 'h ' + minute + ' min ' + seconde + ' sec ';
} else {
    document.getElementById('p2').innerHTML = 'Il faut rentrer une heure valide !';
}