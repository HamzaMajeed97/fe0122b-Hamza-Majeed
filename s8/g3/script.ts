abstract class Lavoratori {

    redditoLordo : number 

    constructor(redditoLordo:number){


        this.redditoLordo = redditoLordo





    }

  abstract  getUtileTasse(): number;
  abstract  getTasseInps():number ;
  abstract  getTasseIrpef():number;
  abstract  getRedditoAnnuoNetto():number;
 



}



class Avvocato extends Lavoratori {

    constructor(redditoLordo: number){

      super(redditoLordo)

    }


    getUtileTasse(): number {
        return (this.redditoLordo /100) * 1.2
    }

    getTasseInps(): number {
        return (this.redditoLordo/100) * 1.4
    }
    
    getTasseIrpef(): number {

        return (this.redditoLordo/100) * 28
        
    }

    getRedditoAnnuoNetto(): number {
        return this.redditoLordo  -(this.getUtileTasse() + this.getTasseInps() + this.getTasseIrpef())
    }





}


let avvocato = new Avvocato (35000)
console.log(avvocato.getRedditoAnnuoNetto())

