"use strict";


const output = {
    hello : (req,res) => {
        res.render("home/index");
    },
    login : (req,res) => {
        res.render("home/login");
    },
};

const users = {
    id : ["sienna","dong"],
    psword : ['1022','0320'],
};

const process = {
    login : (req,res) => {
        const id = req.body.id,
        psword = req.body.psword;
        //로그인 인증 여부
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] == psword){
                return res.json({
                    success : true,
                });
            }
        }
        return res.json({
            sucess : false,
            msg : "로그인 실패"
    });
   
    },

};


//밖에서 쓰려고 내보내는거
module.exports = {
    output,
    process,
};
