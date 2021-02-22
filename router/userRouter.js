var express = require("express")
var router = express.Router();
var userSevices = require("../sevices/userSevices");
var path=require("path")
//dang ki
// router.post("/",function(req,res){
//     var username = req.body.username;
//     var email = req.body.email;
//     var password = req.body.password;
//     var age = req.body.password;
// userSevices.createUser(username,email,password,age)
// .then(function(data){
//     res.json({
//         error : false,
//         message : "dang ki thnah cong"
//     });
// })
// .catch(function(err){
//     res.json({
//         error : true,
//         message : "dang ki khong thanh cong"
//     });
// })
// })


//BAI1: connectClient-SEVER:  tạo một trang login đơn giản, dữ liệu được gửi từ client lên server bằng ajax,
// server kiểm tra tài khoản vừa đăng kí trong db xem đã tồn tại chưa nếu rồi thì thông báo cho người dùng đăng kí tài khoản khác,
// nếu chưa thì cho người dùng đăng nhập;


//dang ki va check:
// router.post("/",function(req,res){
//     var username = req.body.username;
//     var email = req.body.email;
//     var password = req.body.password;
//     var age = req.body.password;
//     userSevices.findUserByUsername(username).then(function(data){
//         if(data.length === 0){
//             return userSevices.createUser(username,email,password,age).then(function(){
//                 return res.json({
//                     error : "true",
//                     message : "dang ki thanh cong"
//                 })
//             })
//         }
//         else{
//             return res.json({
//                 error : "false",
//                 message : "tai khoan ton tai"
//             })
//         }
//     })
// })

//Bài 2: Tạo giao diện cho người dùng có 1 ô input nhập số và 1 nút bấm
//Khi người dùng bấm vào nút bấm đó lên server và hãy kiểm tra dữ liệu nhập vào xem có đúng là 1 số không? 
//Mặc định ai cũng làm được là nhận dữ liệu ở input đó và trả về cho người dùng số vừa nhập.
//Nâng cao: kiểm tra được đấy là 1 số thì thông báo đấy là số, còn đấy là 1 string thì thông báo là 1 kí tự?
    // router.post("/",function(req,res){
    //     var number = req.body.number;
     
    //     if(typeof number === "number" ){
    //         res.json({
    //            isNumber : true,
    //             message : "day la 1 so"
    //         })
    //    }else{
    //        res.json({
    //            isNumber : false,
    //            message : "day la 1 ki tu"
    //        })
    //     }
    // })


//Bài 3: login: Khi server trả về kết quả kiểm tra thông tin tài khoản.
// Nếu tài khoản đó đúng thì chuyển người dùng đến 1 api tên là /home
// (api là hiển thị ra 1 giao diện html).Gợi ý: Chuyển đổi api bằng cách sử dụng câu lệnh window.localtion.href = “/home”
    router.post("/",function(req,res){
        var email = req.body.email
        var password = req.body.password
        userSevices.findUserByEmailAndPassword(email,password).then(function(data){
            if(data === 0 ){
             res.json({
                 error : true,
                 message : "sai tai khoan hoac mat khau"
             })

            }else{
                res.sendFile(path.join(__dirname,"./views/home.html"))
            }
        })
    })

// //hiển thị toàn bộ dữ liệu trong db
router.get("/",function(req,res){
    userSevices.getAllUser()
    .then(function(data){
        res.json(data)
    })
    .catch(function(err){
        res.json("k the ket noi dc sever")
    })
})

//hiển thị chi tiết 1 ng dùng theo id
router.get("/:id",function(req,res){
    var id = req.params.id
    userSevices.getUserById(id)
    .then(function(data){
        res.json(data)
    })
    .catch(function(err){
        res.json("k the ket noi sever")
    })
})

//cap nhat toan bo gia tri theo id
router.put("/:id", function (req, res) {
    var id = req.params.id
    var body = {}
    if(req.body.name) body.name = req.body.name;
    // var username = req.body.username
    // var password = req.body.password
    // var email = req.body.email
    // var age = req.body.age
    // var school = req.body.school
    userSevices.updateUserById(id, username, password, email, age, school)
        .then(function (data) {
           
               res.json(data )
        })
        .catch(function(err){
            res.json("k the ket noi sever")
        })

})

//xoa nguoi dungtheo id
router.delete("/:id",function(req,res){
    var id = req.params.id
    userSevices.deleteUserById(id)
    .then(function(data){
        res.json("da xoa thanh cong")
    })

})

module.exports = router


