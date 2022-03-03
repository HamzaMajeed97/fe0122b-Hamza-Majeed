$(() => {


    $("#start").click(function () {
        $("#box").animate({
            width: "100%"
        }, {
            duration: 1000,
            easing: "linear",
            step: function (x) {
                $("#text").text(Math.round(x * 100 / 100) + "%");
              
            }
        })
    })

    $("#back").click(function () {
        $("#box").animate({
            width: "0px"
        }, {
            duration: 1000,
            easing: "linear",
           step: function (x) {
                $("#text").text(Math.round(x) + "%");
            }
        })
    })



})