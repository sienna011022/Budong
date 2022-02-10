"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");
const output = {
    hello : (req,res) => {
        res.render("home/index");
    },
    login : (req,res) => {
        res.render("home/login");
    },
    register : (req,res) => {
        res.render("home/register");
    }
};

const process = {
    login : (req,res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
       
     },

};


//밖에서 쓰려고 내보내는거
module.exports = {
    output,
    process,
};


