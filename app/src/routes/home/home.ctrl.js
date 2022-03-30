"use strict";
//데이터베이스 로드
const UserStorage = require("../../models/UserStorage");
const ProductStorage = require("../../models/ProductStorage");
const Product = require("../../models/Product");
const User = require("../../models/User");
const res = require("express/lib/response");
const { save } = require("../../models/UserStorage");

const output = {
    hello : (req,res) => {
        //여기바로 views로 가나 여기는 진짜 보여준느 식서버가 클라이언트에게 home.index를 render해서 크라이언트에게 보냄
        res.render("home/index");
    },
    login : (req,res) => {
        res.render("home/login");
    },
    register : (req,res) => {
        res.render("home/register");
    },

    find_id : (req,res)=>{
        res.render("home/find_id");
    },
    find_psword : (req,res)=>{
        res.render("home/find_psword");
    },

    reset_psword : (req,res)=>{
        res.render("home/reset_psword");
    },
    product_register : (req,res)=>{
        res.render("home/product_register")
    },
    page5_1 : (req,res)=>{
        res.render("home/page5_1")
    },
    page5_2 :(req,res)=>{
        res.render("home/page5_2")
    },

    page7_1 :(req,res)=>{
        res.render("home/page7_1")
    },
    page7_2 :(req,res)=>{
        res.render("home/page7_2")
    }

};

const process = {
    //로그인 데이터 받기 
    login : async (req,res) => {
        //요청받는거 user에 넣어줌, 전달한 데이터를 받은게 user
        const user = new User(req.body);
        //로그인 메소드 불러오기
        const response = await user.login();
        //서버에서 보내주는거 res
        return res.json(response);
       
     },
    
     find_id  : async(req,res) => {
         const user = new User(req.body);
         const response = await user.find_id();
         return res.json(response);
     },
     find_psword : async(req,res) => {
        const user = new User(req.body);
        const response = await user.find_psword();
        return res.json(response);
    },
    

    make_token : async(req,res) => {
        const user = new User(req.body);
        const token_data = await user.make_token();
        if(token_data){
            const user = new User();
            const response = await user.node_mailer(token_data);
           // console.log(res.json(node_mailer));
        }
        
    },
    
     register :async (req,res) => {

        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
       
     }, 

     reset_psword : async(req,res) => {
        const user = new User(req.body);
        const response = await user.reset_psword();
        return res.json(response);
     },

     product_register : async(req,res) => {
        const product = new Product(req.body);
        const response = await product.product_register();
        return res.json(response)
        //pdf 엮기
     },
     page5_2: async(req,res) => {
        const product = new Product(req.body);
        const response = await product.page5_2();
        return res.json(response)
     },
     page7_1: async(req,res) => {
        const product = new Product(req.body);
        const response = await product.page7_1();
        return res.json(response)
     },
     page7_2: async(req,res) => {
        const product = new Product(req.body);
        const response = await product.page7_2();
        return res.json(response)
     },
        //pdf 엮기
  

};


//밖에서 쓰려고 내보내는거
module.exports = {
    output,
    process,
};


