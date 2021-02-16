var express = require("express");
var app = express();
var path=require("path")
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
var userRouter = require("./router/userRouter")
app.use(express.static("public"))
app.use("/user", userRouter)
app.listen(3000, function(){
    console.log("dang ket noi tai cong 3000");
})





