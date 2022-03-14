var giocatore1 = Math.floor(Math.random() * ((100 - 1) + 1));
var giocatore2 = Math.floor(Math.random() * ((100 - 1) + 1));
console.log(giocatore1);
console.log(giocatore2);
var numero = Math.floor((Math.random() * (100 - 1) + 1));
console.log(numero);
var diff1 = Math.abs(numero - giocatore1);
var diff2 = Math.abs(numero - giocatore2);
if (diff1 < diff2 && diff1 != 0) {
    console.log("gioc1 è andato piu vicino ");
}
else if (diff1 > diff2 && diff2 != 0) {
    console.log("gioc2  è andato piu vicino");
}
else if (giocatore1 == numero) {
    console.log("gioc1 ha vinto");
}
else if (giocatore2 == numero) {
    console.log("gioca2 ha vinto");
}
else if (giocatore1 == giocatore2) {
    console.log("pareggio");
}
