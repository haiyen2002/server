const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("ket noi thanh cong");
});
//tao ket noi voi mongodb:
module.exports = mongoose



//tao bang du lieu:
// let Schema = mongoose.Schema;
//BAI1:
//dinh nghia cac cot
// let postSchema = new Schema({
//     content : String,
//     title : String,
//     comment : String,
    
//})
//ddijnh nghiax teen bang
//let PostModel = mongoose.model("post",postSchema);
//tao 2 ban ghi moi
// PostModel.create({
//     content : "noi dung ban ghi 1",
//     title : "ban ghi 1",
//     comment : "ok",
// },{
    //     content : "noi dung ban ghi 2",
//     title : "ban ghi 2",
//     comment : "ok",

//})
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })

//tim toan bo bai post:
// PostModel.find().then(function(data){
//             console.log(data,"post list");
//         }).catch(function(err){
//             console.log(err);
//         });

//1.3 In ra 1 bài post theo điều kiện id
// PostModel.find({
//             _id : "601aa1ce56a56637840f5636"
//         }).then(function(data){
//             console.log(data);
//         }).catch(function(data){
//             console.log(data);
//         })    


//1.4 Cập nhật 1 giá trị của content theo 1 id 

// PostModel.updateOne({
//     //dieu kien tim ban ghi:
//     _id: '601aa1f902028d142471e94e'
// },{
//     //gia tri minh se cap nhat:
//     content : "noi dung content da duoc cap nhat"
// }).then(function(result){
//     console.log(result);
// }).catch(function(err){
//     console.log(err);
// })

//BAI2:

// let userSchema = new Schema({
//    username : String,
//     password : String,
//     email : String,
//     age : Number,
//     school : String
    
// })
//ddijnh nghiax teen bang
//let UserModel = mongoose.model("post",userSchema);
//let UserModel = mongoose.model("user",userSchema);
// tao 5 ban ghi moi
// UserModel.create({
//     username : "nam",
//     password : "nam1",
//     email : "namdeptrai@gmail.com",
//     age : 19,
//     school : "fpt"
// },{
//     username : "huy",
//     password : "huy2",
//     email : "huydeptrai@gmail.com",
//     age : 20,
//     school : "fpt"

// },{
//     username : "thang",
//     password : "thang3",
//     email : "thangdeptrai@gmail.com",
//     age : 20,
//     school : "fpt"

// },{
//     username : "hung",
//     password : "hung3",
//     email : "hungdeptrai@gmail.com",
//     age : 22,
//     school : "fpt"
// },{
//     username : "loi",
//     password : "loi2",
//     email : "loideptrai@gmail.com",
//     age : 27,
//     school : "hust"
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })




//  UserModel.find({
//            username : "huy",
//             password : "huy2"
//         }).then
        
       

      

//2.3 Xóa 1 bản ghi theo  id
// UserModel.deleteOne({
//   _id: '601aab7c1cc2c22664dbe26b' 
// }).then(function(data){
//   console.log(data);
// })

// 2.4 Thực hiện tìm và in ra giới hạn chỉ in ra 3 bản ghi 
// UserModel.find()
// .limit(3)
// .then(function(data){
//   console.log(data);
// })

