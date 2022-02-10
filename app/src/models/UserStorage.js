const fs = require("fs").promises;
class UserStorage{
    static #getUserInfo(data,id){
            const users= JSON.parse(data);
             // const users = this.#users;
             const idx = users.id.indexOf(id);
             const userKeys = Object.keys(users);
             const userInfo = userKeys.reduce((newUser,info) => {
                 newUser[info] = users[info][idx];
                 return newUser;
             },{});
             return userInfo;  
            }


    static #getUsers(data,fields) {
        const users = JSON.parse(data);
        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
            },{});
            return newUsers;
                
    }
    static getUsers(...fields) { 
        return fs
        .readFile("./src/databases/users.json")
          .then((data) => {
              return this.#getUsers(data,fields);
          })
          .catch(console.error);
         }


        
    static getUserInfo(id){
       return fs
       .readFile("./src/databases/users.json")
         .then((data) => {
             return this.#getUserInfo(data,id);
         })
         .catch(console.error);
        }
        
   
    static async save(userInfo){
        const users = await this.getUsers("id","psword","name");
    
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json",JSON.stringify(users));
        return {success : true};
    }
}
    module.exports = UserStorage;