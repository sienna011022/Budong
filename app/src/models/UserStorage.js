//userstorage에서 user정보가져옴
const db = require("../config/db");

class UserStorage{
   //getUsers 필요하면 만들기
    static getUserInfo(id){
     //데이터베이스에 접근 후 유저 정보 반환
     return new Promise((resolve,reject) => {
         const query = "SELECT * FROM users where id = ?;";
        db.query(query,[id],(err,data) =>{
            if(err) reject(err);
            resolve (data[0]);
            
        
     });
    });
}

    static getUserId(name){
        //데이터베이스에 접근 후 유저 정보 반환
    return new Promise((resolve,reject) => {
         const query = "SELECT * FROM users where name = ?;";
        db.query(query,[name],(err,data) =>{
            if(err) reject(err);
            resolve (data[0]);
           
     });
    });
}
    static async save(userInfo){
        return new Promise((resolve,reject) => {
            const query = "INSERT INTO users(id,name,psword,phone_num) VALUES(?,?,?,?);";
            //물음표에 대입될 데이트
           db.query(query,[userInfo.id,userInfo.name,userInfo.psword,userInfo.phone_num],(err) =>{
               if(err) reject(`${err}`);
               resolve({success :true});
        });
       });
    }
}
    module.exports = UserStorage;