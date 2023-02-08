const express = require("express"); 
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/BMI", function(req, res){
    res.sendFile(__dirname + "/BMI.html");
});

app.post("/BMI", function(req, res){
    var h = req.body.height;
    var w = req.body.weight;

    res.send("the bmi is "+h+w);
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1+num2;

    res.send("The sum is "+result);
});

app.listen(3000, function(){
    console.log("Server started at port:3000 \n Running...");
});