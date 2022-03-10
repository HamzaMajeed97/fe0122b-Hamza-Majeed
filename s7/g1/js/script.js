class User {
    constructor(username, email, password) {
        this.id = (()=> {
            let newId = localStorage.getItem("id") == null ? 1 : Number(localStorage.getItem("id"))+1
            localStorage.setItem("id", newId)
            return newId  // serve per generare un nuovo id ogni volta che inseriamo un nuovo utente
        })
        this.username = username
        this.email = email
        this.password = password

    }

}


let bottoneInvia = document.querySelector(".bottone");

bottoneInvia.addEventListener("click", function (e) {
   
    e.preventDefault(); // eviti che il form invii in automatico
    
    var valori = document.querySelectorAll(".credenziali");
    var username = document.querySelector("#username").value
    var email1 = document.querySelector("#email1").value
    var email2 = document.querySelector("#email2").value
    var password = document.querySelector("#password").value

    
    var controllo = true // variabile di controllo 



    valori.forEach(element => {


        var valore = element.value; // elemento.value si riferisce ad  valori

        if (valore == "") {
            element.style.border = "2px solid red"
            controllo = false
        } else {
            element.style.border = ""
        }
    });

        

   
    if (email1 != email2) {
        document.querySelector("#span").innerHTML = "Email non corrisponde"
        controllo = false
    }else{
        document.querySelector("#span").innerHTML = ""
    }

    if (controllo){

        var nuovoUtente = new User (username,email1,password)
        let utenteSalvato=  salvaDati(nuovoUtente)
       
        if (utenteSalvato){
            setTimeout(function(){
            window.location.href = "login.html"
        },1000);
    }

    }

})



    function salvaDati(newUser) {
        let elementiSalvati = localStorage.getItem("utenti")
        let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

      var target = dataBase.find(oldUser => oldUser.email == newUser.email || oldUser.username == newUser.username)
      if (target == undefined){

          dataBase.push(newUser);
          localStorage.setItem("utenti", JSON.stringify(dataBase))
          return true 
          
        } else {
            document.querySelector("#check").innerHTML = "Email gia usata "
            return false
        }

    

    }















