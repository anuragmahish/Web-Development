const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

const items = ["Smile"];

app.get("/", function(req, res){
    
    const day = date.getDate();

    res.render("list", { kindOfDay: day, newListItems: items });
    
});

app.post("/", function(req, res){
    
    const item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server running at port : 3000 ...");
});