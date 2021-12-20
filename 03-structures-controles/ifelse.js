let x = 500;

document.querySelector("#valeurX").innerHTML = 'la valeur de X est ' + x;

if (x > 1) {
    document.querySelector("#resultatX").innerHTML = "X contient une valeur superieur à 1";
} else {
    document.querySelector("#resultatX").innerHTML = "X contient une valeur inferieur à 1";
}


let y = 0.5;

document.querySelector("#valeurY").innerHTML = 'la valeur de Y est ' + x;

if (y > 20) {
    document.querySelector("#resultatY").innerHTML = "Y contient une valeur superieur à 20";
} else {
    document.querySelector("#resultatY").innerHTML = "Y contient une valeur inferieur à 20";
}