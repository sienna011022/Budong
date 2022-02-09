"use strict";
class UserStorage{
    //은닉화 처리 #
   static #users = {
    id : ["sienna","dong"],
    psword : ["1022","0320"],
    name : ["김성윤","김동현"]
};
//받아올 수 있도록 매소드 설정
static getUsers(...fields) { 
   const users = this.#users;
   const newUsers = fields.reduce((newUsers,field) => {
       if(users.hasOwnProperty(field)){
           newUsers[field] = users[field];}
           return newUsers;
       },{});
       return newUsers;
        
}
    
}
module.exports = UserStorage;