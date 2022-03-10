  let elementiSalvati = localStorage.getItem("utenti")
  let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)


  dataBase.forEach(function (valore){

    let  username = valore.username
    let email = valore.email
    
    let tabella = document.querySelector("#tbody")

      let tr = document.createElement("tr")
      let cel1 = document.createElement("td")
      let cel2 = document.createElement("td")
      let bottone = document.createElement("button")
      

      cel1.innerText = username
      cel2.innerText = email
      bottone.innerText = "Elimina"
      bottone.classList.add('btn','btn-outline-primary','btn-primary', 'text-white', 'btn-sm')
      bottone.setAttribute("data-email", valore.email)
      


      tabella.append(tr)
      tr.append(cel1,cel2,bottone)


      bottone.addEventListener("click", function(){
        var deleteMail = this.getAttribute("data-email")
       


          tr.remove()
            elimina(deleteMail)
      })
    
  })





 

function elimina (email){

    

     let indice =  dataBase.findIndex(u => u.email == email)
     console.log(indice)
   
     dataBase.splice(indice,1)

    localStorage.setItem("utenti", JSON.stringify(dataBase));

}

