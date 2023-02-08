const express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("<p>Contact me at: Anurag@gmail.com</>");
});

app.get("/about", function(req, res){
    res.send("<h1>Hello, My name is Anurag Mahish.</h1>");
});

app.get("/hobbies", function(req, res){
    res.send("<ul> <li>Code</li> </ul>");
});

app.listen(3000, function(){
    console.log("Server started at port:3000 \n Running...");
});