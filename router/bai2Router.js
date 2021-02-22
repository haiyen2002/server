var express = require("express")
var router = express.Router();
var path=require("path")
router.get("/bai2",function(req,res){
    res.sendFile(path.join(__dirname,"../views/bai2.html"))
})
module.exports = router