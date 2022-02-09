"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
    hello : (req,res) => {
        res.render("home/index");
    },
    login : (req,res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req,res) => {
        const id = req.body.id,
        psword = req.body.psword;
        //로그인 인증 여부
       const users = UserStorage.getUsers("id","psword");
        const response = {};
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] == psword){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하셨습니다";
        return res.json(response);
   
     },

};


//밖에서 쓰려고 내보내는거
module.exports = {
    output,
    process,
};


