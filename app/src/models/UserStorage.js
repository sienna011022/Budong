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
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser,info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
        }

    }

module.exports = UserStorage;