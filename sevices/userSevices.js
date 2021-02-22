var UserModel = require ("../models/userModel")
//them, sua xoa, tim kiem
//b1: xac dinh so luong gia tri can dung tu nguoi dung
//b2:su dung ham tuong tac voi DB tuong ung



//BAI1: connectClient-SEVER:  tạo một trang login đơn giản, dữ liệu được gửi từ client lên server bằng ajax,
// server kiểm tra tài khoản vừa đăng kí trong db xem đã tồn tại chưa nếu rồi thì thông báo cho người dùng đăng kí tài khoản khác,
// nếu chưa thì cho người dùng đăng nhập;


function createUser(username,email,password,age){
    return UserModel.create({
        username : username,
        email : email,
        password : password,
        age : age
    })
}

//tim kiem nguoi dung theo username:
function findUserByUsername(username){
    return UserModel.find({
        username : username
    })
}



//bai 3: login Khi server trả về kết quả kiểm tra thông tin tài khoản.
// Nếu tài khoản đó đúng thì chuyển người dùng đến 1 api tên là /home (api là hiển thị ra 1 giao diện html).
//Gợi ý: Chuyển đổi api bằng cách sử dụng câu lệnh window.localtion.href = “/home”
    function findUserByEmailAndPassword(username,password){
        return UserModel.find({
            username : username,
            password : password
        })
    }


//hien thi toan bo du lieu trong db
function getAllUser(){
    return UserModel.find()
}
module.exports ={
    getAllUser : getAllUser
}

//hiển thị chi tiết 1 ng dùng theo id
function getUserById(id){
    return UserModel.findById({_id :id})
}


//cap nhat toan bo gia tri theo id
function updateUserById(id,username,password,email,age,school){
    return UserModel.updateOne({
        _id : id
    },{
        username : username,
        password : password,
        email : email,
        age : age,
        school : school
    })
}


//xoa nguoi dung theo id
function deleteUserById(id){
    return UserModel.deleteOne({_id : id})
}
 module.exports = {
    createUser : createUser,
    getUserById : getUserById,
    getAllUser : getAllUser,
    updateUserById : updateUserById,
    deleteUserById : deleteUserById,
    findUserByUsername : findUserByUsername,
    findUserByEmailAndPassword : findUserByEmailAndPassword

 }