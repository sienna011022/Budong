"use strict";
const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.hello);
router.get("/login",ctrl.output.login);
router.get("/register",ctrl.output.register);
router.get("/find_id",ctrl.output.find_id);

//로그인 데이터를 받아옴
router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);
router.post("/find_id",ctrl.process.find_id);
module.exports = router;



