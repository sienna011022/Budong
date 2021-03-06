"use strict";
const res = require("express/lib/response");
const ProductStorage = require("./ProductStorage");


class Product{
    constructor(body){
        this.body = body;
    }
    
    async product_register(){
        const client = this.body;
        try{
        const response = await ProductStorage.save(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }

    async page5_2(){
        const client = this.body;
        try{
        const response = await ProductStorage.page5_2(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }

    async page7_1(){
        const client = this.body;
        try{
        const response = await ProductStorage.page7_1(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }

    async page7_2(){
        const client = this.body;
        try{
        const response = await ProductStorage.page7_2(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }

}


module.exports = Product;

