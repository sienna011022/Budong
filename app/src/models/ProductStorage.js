
const db = require("../config/db");
class ProductStorage{

   
    static async save(productInfo){
        return new Promise((resolve,reject) => {
            const query = "INSERT INTO offerings(area,roomNum,bathNum,floor,rentM,rentL,details) Values(?,?,?,?,?,?,?);"
           db.query(query,[productInfo.area,productInfo.room,productInfo.restroom,productInfo.floor,productInfo.month_money,productInfo.month_control,productInfo.info],(err) =>{
               if(err) reject(`${err}`);
               resolve({success :true});
        });
       });
    }

  
}

module.exports = ProductStorage;