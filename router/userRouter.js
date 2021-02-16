var express = require("express")
var router = express.Router();
var userSevices = require("../sevices/userSevices");
// router.post("/",function(req,res){
//     var username = req.body.username;
//     var email = req.body.email;
//     var password = req.body.password;
//     var age = req.body.password;
// userSevices.createUser(username,email,password,age)
// .then(function(data){
//     res.json("tao ng dung thanh cong");
// })
// .catch(function(err){
//     res.json("khong the ket noi duoc sever");
// })
// })

// //hiển thị toàn bộ dữ liệu trong db
// router.get("/",function(req,res){
//     userSevices.getAllUser()
//     .then(function(data){
//         res.json(data)
//     })
//     .catch(function(err){
//         res.json("k the ket noi dc sever")
//     })
// })

//hiển thị chi tiết 1 ng dùng theo id
// router.get("/:id",function(req,res){
//     var id = req.params.id
//     userSevices.getUserById(id)
//     .then(function(data){
//         res.json(data)
//     })
//     .catch(function(err){
//         res.json("k the ket noi sever")
//     })
// })

//cap nhat toan bo gia tri theo id
// router.put("/:id", function (req, res) {
//     var id = req.params.id
//     var username = req.body.username
//     var password = req.body.password
//     var email = req.body.email
//     var age = req.body.age
//     var school = req.body.school
//     userSevices.updateUserById(id, username, password, email, age, school)
//         .then(function (data) {
           
//                res.json(data )
//         })
//         .catch(function(err){
//             res.json("k the ket noi sever")
//         })

// })

//xoa nguoi dungtheo id
// router.delete("/:id",function(req,res){
//     var id = req.params.id
//     userSevices.deleteUserById(id)
//     .then(function(data){
//         res.json("da xoa thanh cong")
//     })

// })

module.exports = router


