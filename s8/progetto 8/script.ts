
// METODO FETCH APPLICATO AL FILE JSON 


fetch('Abbigliamento.json')
.then(response => response.json())
.then(abbigliamento => {

    abbigliamento.forEach((item: Abbigliamento) =>{
        
        
       
      let vestito = new Abbigliamento (item.id,item.codprod,item.collezione,item.capo,item.modello,item.quantita,item.colore,item.prezzoivaesclusa,item.prezzoivainclusa,item.disponibile,item.saldo)


      console.log(vestito)

    })


})

// CREAZIONE DELLA CLASSE ABBIGLIAMENTO


class Abbigliamento {

    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
          

     

    this.id = id 
    this.codprod = codprod
    this.collezione = collezione
    this.capo = capo 
    this.modello = modello
    this.quantita = quantita
    this.colore = colore
    this.prezzoivaesclusa = prezzoivaesclusa
    this.prezzoivainclusa = prezzoivainclusa
    this.disponibile = disponibile
    this.saldo = saldo





        
    }

    // METODI APPLICATI

    getacquistocapo():number {

        return (this.prezzoivainclusa  * this.saldo ) /100


    }

    

    getsaldocapo():number{

        return Math.floor(this.prezzoivainclusa - this.getacquistocapo())

    }    
    


}


// ISTANZE DELLA CLASSE ABBIGLIAMENTO  


let zara = new Abbigliamento (134,2600,"estate","maglietta",4560,6,"rosso",45,50,"negozio",30)


console.log(`lo sconto applicato è di ${zara.getacquistocapo()} euro`)
console.log(`il costo finale è ${zara.getsaldocapo()} euro`)

let bershka = new Abbigliamento (72,1777,"inverno","giacca",9907,8,"nero",50,60,"negozio",40) 

console.log(`lo sconto applicato è di ${bershka.getacquistocapo()} euro`)
console.log(`il costo finale è ${bershka.getsaldocapo()} euro`)


let primark = new Abbigliamento (68,3480,"primavera","jeans",8567,10,"blu",34,40,"magazzino",55)


console.log(`lo sconto applicato è di ${primark.getacquistocapo()} euro`)
console.log(`il costo finale è ${primark.getsaldocapo()} euro`)




