// FUNZIONE AL CLICK 

document.querySelector("#add").addEventListener("click", function () {
    let valore = document.querySelector("#testo").value;

    if (!valore)
        return

    let li = document.createElement("li");

    li.innerText = valore;

    document.querySelector("#lista").prepend(li);

    document.querySelector("#testo").value = " ";

    li.addEventListener("click", function () {
        li.remove();
        elimina(testo);
    })

    salva(valore);

})



// SALVARE NEL LOCALSTORAGE

function salva(testo) {
    let elementiSalvati = localStorage.getItem("lista");
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    db.push(testo);
    localStorage.setItem("lista", JSON.stringify(db));

}


// TENERE SALVATI GLI ELEMENTI AL RELOAD DELLA PAGINA

function createHTML() {
    let elementiSalvati = localStorage.getItem("lista");
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);


    db.forEach( function(elemento) {

        let li = document.createElement("li");
        li.innertext = elemento;
        document.querySelector("#lista").append(li);

        li.addEventListener("click", function () {
            li.remove();
            elimina(elemento);
        })

    })

}
createHTML();



// FUNCTION PER ELIMINARE GLI ELEMENTI DAL LOCALSTORAGE


function elimina(testo) {

    let elementiSalvati = localStorage.getItem("lista");
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);

    let indice = db.indexOf(testo);

    db.splice(indice, 1);

    localStorage.setItem("lista", JSON.stringify(db));

}

