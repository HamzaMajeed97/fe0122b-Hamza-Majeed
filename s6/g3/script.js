$(()=>{
   let  carosello = $("#img-l");
$("#r-btn").on("click", function (){
   let lProp= parseInt($("#img-l").css("left"))
   var newLprop = 0

   var limite = carosello.width()
   
   if(lProp <= 0 && lProp -400 > -limite)
   {
       newLprop = lProp -300
   }


$("#img-l").animate({
    left: newLprop 
})
})



$("#l-btn").on("click", function(){

    let lProp= parseInt($("#img-l").css("left"));
    var newLprop = 0;
 
    var limite = carosello.width();
    console.log(lProp,limite)
    if(lProp <= 0 && lProp +100 > -limite)
    {
        newLprop = lProp +300
    } if(lProp == 0)
    {
        newLprop = lProp
    }
 
 
 $("#img-l").animate({
     left: newLprop
 })
 })

})




























// quando il documento è pronto...(forma breve)...

    // creo una variabile "carosello" e creo così un oggetto jQuery che contenga gli elementi ul (il selettore è #img-l).
    

    // gestisco il click event handler per il pulsante sinistro.
    
        // creo una variabile "lProp" che contiene il valore della proprietà "left" (usa parseInt per convertire in numero intero)
        // qui contengo l'ul che serve per muovere l'elemento a destra e sinistra.
        

        // determino il nuovo valore della proprietà left e prima creo una nuova variabile "newLProp" che lo contiene. 
        // Utilizzo l'if.
        

        // uso il metodo animate per cambiare il valore della proprietà "left"
    

    // gestisco il click event handler per il pulsante destro
    
        // uso il codice per la gestione del pulsante sinistro, l'unica variazione è la determinazione del nuovo valore
        // della proprietà "left".
        

        // determino il nuovo valore della proprietà "left"
        

        // uso il metodo animate per cambiare il valore della proprietà left
     