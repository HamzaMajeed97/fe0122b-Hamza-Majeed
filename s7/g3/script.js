fetch('https://sofin.wp-admin.it/public/api/v1/user')
  .then(response => response.json())
  .then(data => {


    var campi = ["name", "lastname", "email", "role",]



    data.forEach(function (elemento) {



      var tbody = document.querySelector('#tbody')
      let tr = document.createElement('tr');
      tbody.append(tr)



      // TASTO ELIMINA
      var bottoneElimina = document.createElement("button")
      bottoneElimina.innerText = "Elimina"
    


     
     // TASTO MODIFICA
      var bottoneModifiche = document.createElement("a")
      bottoneModifiche.innerText = "Modifica"
      bottoneModifiche.href = "modifica.html?id=" + elemento.id







// CICLO FOR IN 
      for (let prop in elemento) {

        if (campi.includes(prop)) {

          let contenuto = typeof elemento[prop] == "object" ? elemento[prop].nicename : elemento[prop]
          let td = document.createElement('td')
          td.innerText = contenuto
          tr.append(td, bottoneElimina, bottoneModifiche)
        }
      }


// BUTTON PER ELIMINARE GLI UTENTI 
      bottoneElimina.addEventListener("click", function (){
       
      
        fetch('https://sofin.wp-admin.it/public/api/v1/user/' +  elemento.id , {
          method :  "DELETE",

          headers : {
            "Content-Type" : "application/json"
          }

        })
        .then(response => response.text())
        .then(data =>{
          alert("Utente Eliminato")
          tr.remove()
          
          }
        )
          

      })


    























    })

  }

  );








