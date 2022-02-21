var  dataAttuale = new Date();
document.write(dataAttuale); 

document.write("<br>")
document.write(dataAttuale.getFullYear() + " " + dataAttuale.getDay() +  "  " + dataAttuale.getMonth() + "  " + dataAttuale.getHours() +  "  " + dataAttuale.getMinutes() + " " + dataAttuale.getSeconds());


document.write("<br>");
var date = new Date();
dataAttuale = date.toLocaleString();
document.write(dataAttuale);

   


/*var getTime = function(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = this.checkTime(h);
    m = this.checkTime(m);
    s = this.checkTime(s);
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
    var t = setTimeout(this.getTime, 1000);
}
var checkTime = function(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
getTime();*/