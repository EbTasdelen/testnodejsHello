const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

 app.use(express.static(__dirname)); 


app.get("/", function(req,res){
     res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
    let name = req.body.name;
    res.send("<p>Bonjour</p> "+name);
});



app.listen(3000, function(){
    console.log("Server Started");
});