const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res)
{
    var name = req.body.name;
    var email = req.body.email;

    console.log(name, email);

    if(name == "anurag") res.sendFile(__dirname + "/success.html");
    else res.sendFile(__dirname + "/failure.html");
});

app.listen(3000, function(){

    console.log("Server running at port : 3000");
});


//API Key : 5f0d67e6b372c1cdbfc761ec58084e34-us10