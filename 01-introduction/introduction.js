//un commentaire monoligne

/* un commentaire multiligne */

let bouton1 = document.getElementById('b1');
bouton1.addEventListener('click', alerter);

function alerter() {
    alert('Je suis une fenêtre d\'alerte');
}

/* getElementById lecteur de js cherche id pas besoin de preciser
getlementsByClassName lecteur de js cherche un element par sa class il n'y pas besoin de preciser 
querySelector le lecteur ne sait pas si on cherche id class il faut donc préciser.
 */

let bouton2 = document.getElementById('b2');
bouton2.addEventListener('click', ajouter);

function ajouter() {
    let nouveauParagraphe = document.createElement('p');
    nouveauParagraphe.textContent = 'paragraphe supplémentaire !';
    document.querySelector('.nouveauContenu').appendChild(nouveauParagraphe);;

}