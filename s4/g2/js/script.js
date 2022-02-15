//esempio con var
var nome ="Mario";

var cognome= "Super";
document.write(nome+cognome);


nome = "Luigi";

document.write(nome+cognome);



// esempio con let  


var a = 20;
alert(a);

{
    let a = 40;
    alert(a);
}

alert(a);


// esempio con const          nome1 non può essere cambiato 

const nome1 = "Marco";

console.log(nome1);



// esempio con addizione e sottrazione 

 var prezzo1 = 10;
 var prezzo2 = 10;
var totale = prezzo1 + prezzo2;
console.log(totale); 


prezzo1 = 20;
 prezzo2 = 15;
 totale = prezzo1 - prezzo2;
console.log(totale);



// esempio con boolean


function funzione() {
    document.getElementById("demo").innerHTML = Boolean(8 > 9);
}





