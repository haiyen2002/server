var mongoose = require("../configDB/dbConnect")
//tao bang du lieu:
let Schema = mongoose.Schema;
//dinh nghia cac cot
let userSchema = new Schema({
    username : String,
     password : String,
     email : String,
     age : Number,
     school : String
     
 })
 //ddijnh nghiax teen bang:
let UserModel = mongoose.model("user",userSchema);
module.exports = UserModel
