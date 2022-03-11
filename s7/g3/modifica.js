var param = new URLSearchParams(location.search)
var id = param.get("id")

fetch('https://sofin.wp-admin.it/public/api/v1/user')
  .then(response => response.json())
  .then(data => {
      var campi = data

      var utente = campi.find(u => u.id == id)


      document.querySelector("#modifica").addEventListener("click", function (){




        let nome = document.querySelector("#nome").value
        let cognome = document.querySelector("#cognome").value
        let email = document.querySelector("#email").value
        let ruolo = document.querySelector("#ruolo").value

        fetch('https://sofin.wp-admin.it/public/api/v1/user/' + id, {
            method :  "PUT",
  
            headers : {
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name: nome,
                lastname: cognome,
                email: email,
                role_id : id
            })



  
          })
          .then(response => response.text())
          .then(data =>{
            alert("Dati Aggiornati")
            
            
            }
          )


        












      })

  })
