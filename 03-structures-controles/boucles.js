let a = 10;
b = 10;
c = 20;
d = 20;
//La pré-incrementation

document.querySelector('#p1').innerHTML = 'b contient la valeur : ' + b + ' , là je vais pré-incrémenter, ce qui fait que maintenant b contient : ' + (++b);


//la post-incrementation

document.querySelector('#p2').innerHTML = 'a contient la valeur : ' + a + ' , là je vais post-incrémenter, ce qui fait que  a est toujours égal à: ' + (a++) + ' et après ça a sera égal à ' + a;

//La pré-décrementation

document.querySelector('#p3').innerHTML = 'd contient la valeur : ' + d + ' , là je vais pré-décrémenter, ce qui fait que d est égal à ' + (--d);

//la post-décrementation

document.querySelector('#p4').innerHTML = 'c contient la valeur : ' + c + ' , là je vais post-décrémenter, ce qui fait que c est toujours égal à: ' + (c--) + ' et après ça c sera égal à ' + c;

//la boucle while

let w1 = 0;

while (w1 < 5) {
    document.getElementById('while1').innerHTML += 'w1 contient la valeur ' + w1 + ' .<br>';
    w1++;
}

let w2 = 0;

while (w2 < 10) {
    document.getElementById('while2').innerHTML += 'Oyez, oyez, w2 contient la valeur ' + w2 + ' !<br>';
    w2++;
}

//la boucle de while

let w3 = 11;

do {
    document.getElementById('dw').innerHTML += 'w3 contient la valeur' + w3 + ' .<br>';
    w3++;
} while (w3 < 10)