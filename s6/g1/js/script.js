// Quando il documento è pronto...
/*$(() =>{
    $("#iscr-news").click(()=>{
        let nome = $("#nome").val();
        let email1 = $("#email-1").val();
        let email2 = $("#email-2").val();
        let controllo = true


        if( nome == "" ){

        $("#nome").next().text("Richiesto");
        controllo= false;
        }else{
            $ ("#nome").next().text("Campo corretto");
        } 

        if ( email1 == "" ){
        $("#nome").next().text("Richiesto");
        controllo= false;
        }else{
        $("#nome").next().text("Campo corretto");
        }


        if ( email1 != email2 || email == ""){
        $("#email-2").next().text("Email non corrisponde");
        controllo= false;
        }else{
        $("#email-2").next().text("Email corrisponde");
        }

        if(controllo){
        $("form").submit();
        }else {
        alert("il form non è compilato correttamente");
  }

    });






    $("#pulisci-form").click(() => {
        let arrayP= $("#nome, #email-1, #email-2")

   arrayP.val("")
    })

/*$("#pulisci-form").click(function(){
     $("#nome").val("");
     $("#email-1").val("");
     $("#email-2").val("");
})*/




/*$(()=>{

$("#iscr-news").click(()=>{

    let arrayP= $("#nome, #email-1, #email-2")
    arrayP.each()
})


})*/



// CODICE FUNZIONANTE

$(document).ready(function (){

    $("#iscr-news").click(function (){

        let email1 = $("#email-1").val()
        let email2= $("#email-2").val()
        let controllo = true

let arrayP= $("#nome, #email-1, #email-2 ")
arrayP.each((indice,campo) => {
    if ($(campo).val() == ""){
    $(campo).next().text("Required")
    controllo = false}
   
    else {
        $(campo).next().text("")
    }
})
     if (email1 !== email2 ) 
     {$("#email-2").next().text("Email non corrisponde") 
     controllo = false}
     


     if (controllo ){
         alert("form inviato")
     }else {
         alert("controlla che tutti i campi siano corretti!")
     }
    })
})


    //gestisco il click sul pulsante Iscriviti
    
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
