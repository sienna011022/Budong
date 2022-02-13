"use strict";

const UserStorage = require("./UserStorage");
class User{
    constructor(body){
        this.body = body;
    }
    async login(){
        //client는 클라이언트가 입력한 데이터
        const client = this.body;
        //그냥 id는 userstorage에서 가져온것
        const user = await UserStorage.getUserInfo(client.id);
        if(user){

                if(user.id === client.id && user.psword === client.psword ){
                    return {success : true};
                }
                return {success : false , msg : "비밀번호가 틀렸습니다"};
            }
            return {success :false ,msg : "존재하지 않는 아이디입니다"};
    
}

    async register(){
        const client = this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }


}

module.exports = User;