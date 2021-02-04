// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("ket noi thanh cong");
// });

//tao bang du lieu:
//let Schema = mongoose.Schema;
//dinh nghia cac cot
// let userSchema = new Schema({
//     username : String,
//     password : String,
//     email : String,
//     age : Number
// })
//ddijnh nghiax teen bang
//ten nay khi chay mongodb thi no se tu dong them 's' vao sau ten minh muon
//let UserModel = mongoose.model("user",userSchema);
// UserModel.create({
//     username : "ta",
//     password : "ta2",
//     email : "ta2@gmail.com",
//     age : 20
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })

// tim kiem ban ghi: 2 truong hop
//     th1: tim kiem k co dieu kien nghia la hien thi toan bo du lieu trong ban ghi
        // UserModel.find().then(function(data){
        //     console.log(data,"user list");
        // }).catch(function(err){
        //     console.log(err);
        // });
    //th2: tim kiem co dieu kien
        // UserModel.find({
        //     age : 20,
        //     email : "ta@gmail.com"
        // }).then(function(data){
        //     console.log(data);
        // }).catch(function(data){
        //     console.log(data);
        // })    
//cap nhat du lieu cho 1 ban ghi(tim ra nhieu ban ghi nhung chi cap nhat gia tri cho ban dau tien), updateMany(tim nhung ban ghi co cung dieu kien va cap nhat cho tat ca cac ban ghi)
// UserModel.updateOne({
//     //dieu kien tim ban ghi:
//     _id: '601a6df213f9d22ed4264692'
// },{
//     //gia tri minh se cap nhat:
//     password : "gia tri password da dc thay doi"(ca one va many deu dc cap nhat nhieu gia tri)
// }).then(function(result){
//     console.log(result);
// }).catch(function(err){
//     console.log(err);
// })

//deleteOne: chi xoa 1 ban ghi
// UserModel.deleteOne({
//     _id: '601a6df213f9d22ed4264692' 
// }).then(function(data){
//     console.log(data);
// })
//deleteMany; de trong dieu kien thi xoa het ban ghi
//
