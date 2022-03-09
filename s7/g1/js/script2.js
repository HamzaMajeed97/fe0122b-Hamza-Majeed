var bottone = document.querySelector("#accedi");

bottone.addEventListener("click", function (e) {
    e.preventDefault()


    var nome1 = document.querySelector('#nome1').value
    var password1 = document.querySelector('#password1').value
    var listaUtenti = localStorage.getItem('utenti') == null ? [] : JSON.parse(localStorage.getItem('utenti'))

    let checkUser = listaUtenti.find(oldUser => oldUser.username == nome1 && oldUser.password == password1)

    if (checkUser == undefined) {
        alert("Dati inseriti non validi")

    } else {
        alert("Ti sei loggato")
        setTimeout(function () {
            window.location = "tabelle.html";
        }, 1000)

    }

})








