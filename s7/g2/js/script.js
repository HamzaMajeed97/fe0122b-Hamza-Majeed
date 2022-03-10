class Autovetture {
    constructor(id,nome,anno,carburante,colore,km,origine,velocità,foto,prezzo)
    {
this.id = id;
this.nome = nome;
this.anno = anno;
this.carburante = carburante;
this.colore = colore;
this.km = km;
this.origine = origine;
this.velocità = velocità;
this.foto = foto;
this.prezzo = prezzo;


    }
}

var  veicoli = []
var select;

function init(){

    var auto1 = new Autovetture(1, "FIAT 500 X", 2021, "Diesel", "Rosso", 1200,"Italia", "120Km/h","500x.png","€ 18.000,00")
    var auto2 = new Autovetture(2,"BMW x1",2022,"Diesel","Blu",0,"Germania","220 Km/h","bmw_x1.png","€ 31.000,00")
    var auto3 = new Autovetture(3,"JEEP COMPASS 4xe",2021,"Benzina","Grigio",0,"USA","190 Km/h","jeep_compass_4xe.png","€ 45.500,00")
    var auto4 = new Autovetture(4,"JEEP COMPASS",2021,"Diesel","Blu",500,"USA","130 Km/h","jeep_compass.png","€ 35.000,00")
    var auto5 = new Autovetture(5,"JEEP RENEGADE LIMITED",2019,"Diesel","Bianca",80,"USA","120 Km/h","jeep_renegade.png","€ 28.650,00")
    var auto6 = new Autovetture(6,"JEEP WRANGLER",2000,"Benzina","Bianca",0,"USA","190 Km/h","jeep_wrangler.png","€ 60.500,00")
    var auto7 = new Autovetture(7,"WOLKSWAGEN T-CROSS",2021,"Diesel","Bianca",0,"Germania","190 Km/h","tcross.png","€ 32.000,00")
    
    veicoli.push(auto1,auto2,auto3,auto4,auto5,auto6,auto7)
    populateSelectOptions()
}

init()

function populateSelectOptions(){

   select = document.querySelector("#auto")
   select.addEventListener("change",stampaAuto)

   for ( var i = 0; i < veicoli.length; i++){
      var option =  document.createElement("option")
      option.setAttribute("value",veicoli[i].id)
      option.text = veicoli[i].nome + " " + veicoli[i].prezzo
      select.append(option)
      

   }

}

function stampaAuto(){
   
   try{

       
       var idAutoSelezionata = select.value;
       let autoSelezionata = veicoli.find(auto => auto.id == idAutoSelezionata)
       console.log(idAutoSelezionata)
    /* let autoSelezionata;
       for ( var i = 0 ; i < veicoli.length ; i++ ){
           if ( veicoli[i].id == idAutoSelezionata){
               autoSelezionata = veicoli[i]
           }
       }*/


       
       document.querySelector("#NomeAutovettura").innerHTML = autoSelezionata.nome
       document.querySelector("#AnnoImmatricolazione").innerHTML = autoSelezionata.anno
       document.querySelector("#TipoCarburante").innerHTML = autoSelezionata.carburante
       document.querySelector("#Colore").innerHTML = autoSelezionata.colore
       document.querySelector("#Km").innerHTML = autoSelezionata.km
       document.querySelector("#PaeseProduzione").innerHTML = autoSelezionata.origine
       document.querySelector("#Cavalli").innerHTML = autoSelezionata.velocità
       document.querySelector("#immagineAutoSelezionata").setAttribute("src", "img/" + autoSelezionata.foto)
       document.querySelector("#PrezzoVendita").innerHTML = autoSelezionata.prezzo
      
       
   } catch {

        document.querySelector("#NomeAutovettura").innerHTML = ""
        document.querySelector("#AnnoImmatricolazione").innerHTML = ""
        document.querySelector("#TipoCarburante").innerHTML = ""
        document.querySelector("#Colore").innerHTML = ""
        document.querySelector("#Km").innerHTML = ""
        document.querySelector("#PaeseProduzione").innerHTML = ""
        document.querySelector("#Cavalli").innerHTML = ""
        document.querySelector("#immagineAutoSelezionata").setAttribute("src", "")
        document.querySelector("#PrezzoVendita").innerHTML = ""
      
        


    }

}