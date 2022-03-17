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

}


module.exports = Product;

