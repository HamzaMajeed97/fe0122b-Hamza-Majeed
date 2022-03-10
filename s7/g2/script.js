let data = fetch('https://sofin.wp-admin.it/public/api/v1/user')
  .then(response => response.json())
  .then(data => { 
      
    
    var campi = ["name","lastname","email","role",]

    var bottone = document.createAttribute("button")
    bottone.innerText = "Elimina"

    

  



    
    

    
    
    
    
    data.forEach(function (elemento){
   
   
   
    var select = document.querySelector('#prova')
    let riga = document.createElement('tr');

    select.append(riga)
    for(let prop in elemento){

        if (campi.includes(prop)){ 

        let contenuto = typeof elemento[prop] == "object" ? elemento[prop].nicename : elemento[prop]
        let cella = document.createElement('td')
        cella.innerText = contenuto
        riga.append(cella)
        }
    }



  }) 

}

  );












 /* var select = document.querySelector('#prova')
  let riga = document.createElement('tr');
  







  
  select.append(riga)
  for(let prop in elemento){
      let cella = document.createElement('td')
      cella.innerText = elemento[prop]
      riga.append(cella)
  } */