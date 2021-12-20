let note = parseFloat(prompt('Saisissez votre note aux Bac !'));

console.log(note);

if (note < 10 && note > 0) {
    document.querySelector('#p1').innerHTML = 'Votre note est  ' + note + ' vous etes recalé !';
} else if (note == 10 && note <= 12) {
    document.querySelector('#p1').innerHTML = 'Votre note est  ' + note + ' vous avez votre Bac sans mention';
} else if (note >= 12 && note < 14) {
    document.querySelector('#p1').innerHTML = 'Votre note est  ' + note + ' vous avez votre Bac avec mention assez bien';
} else if (note >= 14 && note < 16) {
    document.querySelector('#p1').innerHTML = 'Votre note est  ' + note + ' vous avez votre Bac avec mention bien';
} else if (note >= 16 && note < 18) {
    document.querySelector('#p1').innerHTML = 'Votre note est  ' + note + ' vous avez votre Bac avec mention trés bien';
} else if (note >= 18 && note <= 20) {
    document.querySelector('#p1').innerHTML = 'Votre note est  ' + note + ' vous avez votre Bac avec les félicitations du jury';
} else {
    document.querySelector('#p1').innerHTML = 'Vous devez saisir une note entre 0 et 20 !';
}

//if((note< 10) && (note > 0)) document.getElementById('p1').innerHTML = 'Votre note est ' + note + 'vous etes recalé !';
//>= superieur ou egale > strictement