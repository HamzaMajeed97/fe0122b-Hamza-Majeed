  let elementiSalvati = localStorage.getItem("utenti")
  let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)


  dataBase.forEach(function (valore){

    let  username = valore.username
    let email = valore.email

      let tr = document.createElement("tr")
      let cel1 = document.createElement("td")
      let cel2 = document.createElement("td")
      let bottone = document.createElement("button")
      
      let tabella = document.querySelector("#tbody")

      cel1.innerText = username
      cel2.innerText = email
      bottone.innerText = "Elimina"


      tabella.append(tr)
      tr.append(cel1,cel2,bottone)


      bottone.addEventListener("click", function(){
          tr.remove()
            elimina()
      })


      

    
  })








function elimina (pippo){

    let elementiSalvati = localStorage.getItem("utenti")
    let dataBase = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)

     let indice = dataBase.indexOf(pippo)

    dataBase.splice(indice,1)

    localStorage.setItem("utenti", JSON.stringify(dataBase));

}

