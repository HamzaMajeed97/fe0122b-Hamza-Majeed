


document.querySelector("#aggiungi").addEventListener("click",function (e){
e.preventDefault()



let nome = document.querySelector("#nome").value
let cognome = document.querySelector("#cognome").value
let email = document.querySelector("#email").value
let ruolo = document.querySelector("#ruolo").value
let psw = document.querySelector("#password").value



    
    fetch('https://sofin.wp-admin.it/public/api/v1/user', {
        method :  "POST",
        
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: nome,
            lastname: cognome,
            email: email,
            password: psw,
            role_id : ruolo
        })
        
        
        
        
    })
    .then(response => response.text())
    .then(data =>{
        alert("Utente Aggiunto")
        
        
    }
    )
    
})