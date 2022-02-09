//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");
const PORT = 3000;
//앱세팅
app.engine('ejs', require('ejs').__express);
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/",home); //미들웨어use 연결해줌 index.js랑

module.exports = app;

