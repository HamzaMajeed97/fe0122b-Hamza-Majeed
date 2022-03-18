// METODO FETCH APPLICATO AL FILE JSON 
fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (abbigliamento) {
    abbigliamento.forEach(function (item) {
        var vestito = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo);
        console.log(vestito);
    });
});
// CREAZIONE DELLA CLASSE ABBIGLIAMENTO
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    // METODI APPLICATI
    Abbigliamento.prototype.getacquistocapo = function () {
        return (this.prezzoivainclusa * this.saldo) / 100;
    };
    Abbigliamento.prototype.getsaldocapo = function () {
        return Math.floor(this.prezzoivainclusa - this.getacquistocapo());
    };
    return Abbigliamento;
}());
// ISTANZE DELLA CLASSE ABBIGLIAMENTO  
var zara = new Abbigliamento(134, 2600, "estate", "maglietta", 4560, 6, "rosso", 45, 50, "negozio", 30);
console.log("lo sconto applicato \u00E8 di ".concat(zara.getacquistocapo(), " euro"));
console.log("il costo finale \u00E8 ".concat(zara.getsaldocapo(), " euro"));
var bershka = new Abbigliamento(72, 1777, "inverno", "giacca", 9907, 8, "nero", 50, 60, "negozio", 40);
console.log("lo sconto applicato \u00E8 di ".concat(bershka.getacquistocapo(), " euro"));
console.log("il costo finale \u00E8 ".concat(bershka.getsaldocapo(), " euro"));
var primark = new Abbigliamento(68, 3480, "primavera", "jeans", 8567, 10, "blu", 34, 40, "magazzino", 55);
console.log("lo sconto applicato \u00E8 di ".concat(primark.getacquistocapo(), " euro"));
console.log("il costo finale \u00E8 ".concat(primark.getsaldocapo(), " euro"));
