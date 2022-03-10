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
    static async getUserEmail(id){
        //데이터베이스에 접근 후 유저 정보 반환
    return new Promise((resolve,reject) => {
        const query = "SELECT * FROM users where id = ?;";
        db.query(query,[id],(err,data) =>{
            if(err) reject(err);
            resolve (data[0]);
        
    });
    });
    }
    static async save(userInfo){
        return new Promise((resolve,reject) => {
            const query = "INSERT INTO users(id,name,psword,phone_num,email) VALUES(?,?,?,?,?);";
            //물음표에 대입될 데이터
           db.query(query,[userInfo.id,userInfo.name,userInfo.psword,userInfo.phone_num,userInfo.email],(err) =>{
               if(err) reject(`${err}`);
               resolve({success :true});
        });
       });
    }

    static async reset_psword(userInfo){
        return new Promise((resolve,reject) => {
            const query = "UPDATE users SET psword = ? where token = ?;"
            //물음표에 대입될 데이터
           db.query(query,[userInfo.new_psword,userInfo.token],(err) =>{
               if(err) reject(`${err}`);
               resolve({success :true});
        });
       });
    }
    static async save_token(token_data){
        return new Promise((resolve,reject) => {
            const query = "UPDATE users SET token = ? where id = ?; ";
            //물음표에 대입될 데이터
           db.query(query,[token_data.token,token_data.id],(err) =>{
               if(err) reject(`${err}`);
               resolve({success :true});
        });
       });
    }

    static async save_product(product){
        return new Promise((resolve,reject) => {
            const query = "INSERT INTO offerings(area,floor,direction,roomNum,bathNum,details) VALUES(?,?,?,?,?,?);";
            //물음표에 대입될 데이터
           db.query(query,[product.area,product.floor,product.direction,product.room,product.restroom,product.info],(err) =>{
               if(err) reject(`${err}`);
               resolve({success :true});
        });
       });
    }
}

module.exports = UserStorage;