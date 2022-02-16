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
    
        }catch(err){
            return {success :false , msg:err};
        }

    async find_id(){
        //client는 클라이언트가 입력한 데이터 여기서 못가져온느중 뭘가... 왜 안됬냐면 ejs랑 아이디 태그가 달랐었음
        const client = this.body;
        //그냥 id는 userstorage에서 가져온것
        const user = await UserStorage.getUserId(client.name);
        if(user){
                if(user.name === client.name && user.phone_num === client.phone_num ){
                    return {success : true , msg :user.id};
                }
                return {success : false , msg : "비밀번호가 틀렸습니다"};
            }
            return {success :false ,msg : "존재하지 않는 아이디입니다"};
    
        }catch(err){
            return {success :false , msg:err};
        }
    async find_psword(){
        //client는 클라이언트가 입력한 데이터 여기서 못가져온느중 뭘가... 왜 안됬냐면 ejs랑 아이디 태그가 달랐었음
        const client = this.body;
        //그냥 id는 userstorage에서 가져온것
        const user = await UserStorage.getUserEmail(client.id);
        if(user){
                if(user.id === client.id && user.email === client.email ){
        
                    return {success : true ,msg : user.email};
                }
                return {success : false , msg : "일치하는 비밀번호가 없습니다"};
            }
            return {success :false ,msg : "존재하지 않는 비밀번호 입니다"};
    
        }catch(err){
            return {success :false , msg:err};
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
   async make_token(){
        const client = this.body;
        const crypto = require('crypto');
        const token = crypto.randomBytes(20).toString('hex'); // token 생성
        const token_data = { // 데이터 정리
        token : token,
        id : client.msg,
        ttl: 300 // ttl 값 설정 (5분)
        };
       return token_data ;
       
    
        
    
   }
    async save_token(token_data){

        try{
        const response = await UserStorage.save_token(token_data);

        }catch(err){
            console.error(err);
        }
    }
       

}
module.exports = User;