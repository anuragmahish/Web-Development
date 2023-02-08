const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req,res){

    const endpoint = "https://api.openweathermap.org/";
    const path = "data/2.5/weather";
    const parameters = "?q=London&units=metric&appid=62c3b65111822db1798a9221af8409f5";

    https.get(endpoint + path + parameters, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);

            var temp = weatherData.main.temp;
            var desc = weatherData.weather[0].description;

            console.log(temp+"\n"+desc);
        });
    });

    res.send("running");
});


app.listen(3000, function(req, res){
    console.log("Server is running at port : 3000\n")
});


//API ID
//62c3b65111822db1798a9221af8409f5