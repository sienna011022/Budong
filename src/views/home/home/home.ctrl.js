"use strict";


const hello = (req,res)=>{
    res.render("home/index");
}

const login = (req,res)=>{
    res.render("home/login");
}
//밖에서 쓰려고 내보내는거
module.exports = {
    hello,
    login,
};
