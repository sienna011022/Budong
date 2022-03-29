
const { json } = require("express/lib/response");
const db = require("../config/db");
class ProductStorage{

   
    static async save(productInfo){
        return new Promise((resolve,reject) => {
    
            const query = "INSERT INTO offerings(offerSort,area,roomNum,bathNum,floor,rentM,rentL,details,floor_multiple,offerType) Values(?,?,?,?,?,?,?,?,?,?);"
           db.query(query,[productInfo.offering_type,productInfo.area,productInfo.room,productInfo.restroom,productInfo.floor,productInfo.month_money,productInfo.month_control,productInfo.info,productInfo.duplex,productInfo.offering_solution],(err) =>{
               if(err) reject(`${err}`);
               resolve({success :true});

            });
        });
    }


    static async page5_2(productInfo){
    
        return new Promise((resolve,reject) => {
            const query = "INSERT INTO jpage5_2(data,profile)Values(?,?);"
            db.query(query,["page_2",JSON.stringify(productInfo)],(err) =>{
                if(err) reject(`${err}`);
                resolve({success :true});


            });
        });
     }
 }

module.exports = ProductStorage;