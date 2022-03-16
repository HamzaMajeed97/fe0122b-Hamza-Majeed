class SonAccount {
    balanceInit: number;
    versamento : number[] = []
    prelievo : number [] = []

    

    constructor( balanceInit: number){
        this.balanceInit=  balanceInit
     

    }

    oneDeposit(num:number):number{

        this.versamento.push(num)
        return this.balanceInit += num
    }

    oneWithDraw(num:number):number {

        this.prelievo.push(num)
        return this.balanceInit -=  num
    }

}



class MotherAccount extends SonAccount{



    constructor(balanceInit: number){
         
        super (balanceInit )

       


    }

    interests():number{
        return (this.balanceInit /100) * 10
    }
  
    addInterests(): number {
        return this.balanceInit += this.interests()
    }



}


let figlio = new SonAccount (2000)
let madre = new MotherAccount (3000)

console.log(figlio.balanceInit)
console.log(figlio.oneDeposit(100))
console.log(figlio.oneWithDraw(100))

console.log(madre.addInterests())



