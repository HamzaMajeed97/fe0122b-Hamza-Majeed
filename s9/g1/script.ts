fetch("regioni.json")
.then(response => response.json())
.then(regioni =>{

 console.log(regioni)

 selezionaRegioni(regioni)



})




let  selRegioni : any = document.querySelector("#regioni")

function selezionaRegioni (p:any){
    
   
    for ( var i = 0; i < p.length; i++){
       let option =  document.createElement("option")
       option.setAttribute("value",p[i].prov_regione)
       option.text = p[i].prov_regione
       selRegioni.append(option)
     }


}



let regione = selRegioni.value

fetch("province.json")
.then(response => response.json())
.then(province => {


      console.log(province)


    let selProvince: any = document.querySelector("#province")
    
      
      
      
      
      
    })



