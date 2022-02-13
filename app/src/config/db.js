const mysql = require("mysql");

const db = mysql.createConnection({
    host : "budong-login-lecture.cx7nibwxuqk2.ap-northeast-2.rds.amazonaws.com",
    user : "admin",
    password : "tjddbs123",
    database : "login_lecture",

});
db.connect();

module.exports = db;