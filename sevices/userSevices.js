var UserModel = require ("../models/userModel")
//them, sua xoa, tim kiem
//b1: xac dinh so luong gia tri can dung tu nguoi dung
//b2:su dung ham tuong tac voi DB tuong ung
// function createUser(username,email,password,age){
//     return UserModel.create({
//         username : username,
//         email : email,
//         password : password,
//         age : age
//     })
// }
// module.exports = {
//     createUser : createUser
// }

//hien thi toan bo du lieu trong db
// function getAllUser(){
//     return UserModel.find()
// }
// module.exports ={
//     getAllUser : getAllUser
// }

//hiển thị chi tiết 1 ng dùng theo id
// function getUserById(id){
//     return UserModel.findById({_id :id})
// }
// module.exports = {
//     getUserById : getUserById
// }

//cap nhat toan bo gia tri theo id
// function updateUserById(id,username,password,email,age,school){
//     return UserModel.updateOne({
//         _id : id
//     },{
//         username : username,
//         password : password,
//         email : email,
//         age : age,
//         school : school
//     })
// }
// module.exports = {
//     updateUserById : updateUserById
// }

//xoa nguoi dung theo id
// function deleteUserById(id){
//     return UserModel.deleteOne({_id : id})
// }
// module.exports = {
//     deleteUserById : deleteUserById
// }