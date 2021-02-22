var express = require("express");
var app = express();
var path=require("path")
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
var indexRouter = require("./router/indexRouter")
var bai2Router = require("./router/bai2Router")
var bai3Router = require("./router/bai3Router")

app.use(bodyParser.json())
var userRouter = require("./router/userRouter")
app.use(express.static("public"))
app.use("/user", userRouter)
app.use("/",indexRouter)
app.use("/",bai2Router)
app.use("/",bai3Router)
app.listen(3000, function(){
    console.log("dang ket noi tai cong 3000");
})





