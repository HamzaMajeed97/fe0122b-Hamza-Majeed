

// NUMBERS

function prendiNumero(tasti){
    let display = document.getElementById("display");

    let numeri = tasti.id;
    display.value += numeri;
}

// RESET BUTTON

function resetta(){
    display = document.getElementById("display");

    display.value = "";
}


// TOTALE

function uguale(){
   let display = document.getElementById("display");

    display.value= eval(display.value);
}


