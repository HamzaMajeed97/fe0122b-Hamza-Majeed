$(document).ready(function(){

// ARRAY DELLE IMMAGINI
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
    "piangere", "ridere", "amare", "amare1", "spavento", "shock"];



   // CICLO FOR PER PESCARE RANDOMICAMENTE LE IMMAGINI
    for( var i=0 ; i  < 16; i++ ){
    
        
        let imgRandom = Math.floor(Math.random() * mieImg.length);
       
            
            let imgEliminata = mieImg.splice(imgRandom,1);
            
            $("#memory").append($('<div class= "images" id = "emoji'+i+'">  <img id= "'+i+'" src = "img/' +imgEliminata+'.png" width="130" height= "130" /></div>'));
            
        }

            
            let immaginiCliccate = [];


            // CONTATTORE DI CLICK

            $(".images").click(function (){ 
                 
                let clicks = $("#clicks").text();
                clicks++
                $("#clicks").text(clicks);



                if(immaginiCliccate.length < 2 ){



                 $(this).children().show().addClass("rotate");
                 
                 let imgId =  $(this).children().attr("id");

                 let imgSrc = $(this).children().attr("src");


                 let infoImmagine = {
                    
                    id : imgId,
                    src : imgSrc
                 }


                 immaginiCliccate.push(infoImmagine);





// FUNZIONE IF PER VERIFICARE LE IMMAGINI



                    if(immaginiCliccate.length == 2 ){

                    if(immaginiCliccate[0].src == immaginiCliccate[1].src){
                        $("#"+immaginiCliccate[0].id).css("cursor","no-drop");
                        $("#"+immaginiCliccate[1].id).css("cursor","no-drop");
                        immaginiCliccate = []
                    }else {
                        setTimeout(function (){
                            $("#"+immaginiCliccate[0].id).removeClass("rotate").hide();
                            $("#"+immaginiCliccate[1].id).removeClass("rotate").hide();
                            immaginiCliccate = [];
                        },500);
                    };
                }};
            });
            
            });
            
            
         