fetch("regioni.json")
    .then(function (response) { return response.json(); })
    .then(function (regioni) {
    console.log(regioni);
    selezionaRegioni(regioni);
});
var selRegioni = document.querySelector("#regioni");
function selezionaRegioni(p) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", p[i].prov_regione);
        option.text = p[i].prov_regione;
        selRegioni.append(option);
    }
}
var regione = selRegioni.value;
fetch("province.json")
    .then(function (response) { return response.json(); })
    .then(function (province) {
    console.log(province);
    var selProvince = document.querySelector("#province");
});
