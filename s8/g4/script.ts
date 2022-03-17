interface Smartphone {
    carica : number;
    numeroChiamate : number ;


    ricarica(soldi:number): void;
    chiamata(minuti:number):void;
    numero404():number;
    getNumeroChiamate():number;
    azzeraChiamate():number;



}


class FirstUser implements Smartphone{

    public carica: number;
    public  numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number){
    
        this.carica = carica
        this.numeroChiamate = numeroChiamate



    }


    ricarica(soldi:number): void{
      this.carica += soldi
    }
   


    chiamata(minuti: number): void {
        this.carica -= (0.20 * minuti)
        this.numeroChiamate += 1
    }

    numero404(): number {
        return this.carica
    }



    getNumeroChiamate(): number {
        return this.numeroChiamate
    }


    azzeraChiamate(): number {
        return this.numeroChiamate = 0
    }



}



class SecondUser implements Smartphone{

    public carica: number;
    public  numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number){
    
        this.carica = carica
        this.numeroChiamate = numeroChiamate



    }


    ricarica(soldi:number): void{
      this.carica += soldi
    }
   


    chiamata(minuti: number): void {
        this.carica -= (0.20 * minuti)
        this.numeroChiamate += 1
    }

    numero404(): number {
        return this.carica
    }



    getNumeroChiamate(): number {
        return this.numeroChiamate
    }


    azzeraChiamate(): number {
        return this.numeroChiamate = 0
    }



}




class ThirdUser implements Smartphone{

    public carica: number;
    public  numeroChiamate: number;

    constructor(carica: number, numeroChiamate: number){
    
        this.carica = carica
        this.numeroChiamate = numeroChiamate



    }


    ricarica(soldi:number): void{
      this.carica += soldi
    }
   


    chiamata(minuti: number): void {
        this.carica -= (0.20 * minuti)
        this.numeroChiamate += 1
    }

    numero404(): number {
        return this.carica
    }



    getNumeroChiamate(): number {
        return this.numeroChiamate
    }


    azzeraChiamate(): number {
        return this.numeroChiamate = 0
    }



}



    


let Federico = new FirstUser (100,2)


console.log(Federico)
console.log(Federico.ricarica(20))
console.log(Federico.azzeraChiamate())















