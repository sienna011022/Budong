"use strict";
const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.hello);
router.get("/login",ctrl.output.login);
router.get("/register",ctrl.output.register);
router.get("/find_id",ctrl.output.find_id);
router.get("/find_psword",ctrl.output.find_psword);
//로그인 데이터를 받아옴
router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);
router.post("/find_id",ctrl.process.find_id);
router.post("/find_psword",ctrl.process.find_psword);
router.post("/make_token",ctrl.process.make_token);

module.exports = router;



