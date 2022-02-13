//userstorage에서 user정보가져옴
const db = require("../config/db");

class UserStorage{
    static #getUserInfo(data,id){
            const users= JSON.parse(data);
             // const users = this.#users;
             const idx = users.id.indexOf(id);
             const userKeys = Object.keys(users);
             const userInfo = userKeys.reduce((newUser,info) => {
                 newUser[info] = users[info][idx];
                 return newUser;
             },{});
             return userInfo;  
            }


    static #getUsers(data,fields) {
        
                
    }
    static getUsers(...fields) { 
     
         }


        
    static getUserInfo(id){
     //데이터베이스에 접근 후 유저 정보 반환
     return new Promise((resolve,reject) => {
        db.query("SELECT * FROM users where id = ?",[id],(err,data) =>{
            if(err) reject(err);
            resolve (data[0]);
            
        
     });
    });
}
    static async save(userInfo){
      
    }
}
    module.exports = UserStorage;