$(document).ready(function(){
    $("#search-button").on("click", function(){
        var cityName = $("#cityName").val().trim();


        searchWeather(cityName)
    })

    function searchWeather(name) {
        var API_KEY = "9fcb47e5b41e9c176f458ba469f9eaf0"
        console.log(API_KEY);
        console.log(name);

        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=" + API_KEY + "&units=imperial",
            dataType: "json"
        }).then(function(res){
            console.log(res)
            var temp = Math.round(res.main.temp);
            console.log(temp)

            // this is where response should be located?
            // generate our html
            // call the function for 5 day - I think we will need latitude and the long

            var card = $("<div>").addClass("card")

        })
    }




})