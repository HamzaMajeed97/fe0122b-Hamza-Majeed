var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(redditoLordo) {
        this.redditoLordo = redditoLordo;
    }
    return Lavoratori;
}());
var Avvocato = /** @class */ (function (_super) {
    __extends(Avvocato, _super);
    function Avvocato(redditoLordo) {
        return _super.call(this, redditoLordo) || this;
    }
    Avvocato.prototype.getUtileTasse = function () {
        return (this.redditoLordo / 100) * 1.2;
    };
    Avvocato.prototype.getTasseInps = function () {
        return (this.redditoLordo / 100) * 1.4;
    };
    Avvocato.prototype.getTasseIrpef = function () {
        return (this.redditoLordo / 100) * 28;
    };
    Avvocato.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoLordo - (this.getUtileTasse() + this.getTasseInps() + this.getTasseIrpef());
    };
    return Avvocato;
}(Lavoratori));
var avvocato = new Avvocato(35000);
console.log(avvocato.getRedditoAnnuoNetto());
