
class Product{
    constructor(body){
        this.body = body;
    }
    async register(){
        const client = this.body;
        try{
        const response = await UserStorage.save_product(client);
        return response;
        }catch(err){
            console.error(err);
        }
    }
}
module.exports = Product;
