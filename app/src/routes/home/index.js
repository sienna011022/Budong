"use strict";
const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.hello);
router.get("/login",ctrl.output.login);
router.get("/register",ctrl.output.register);
router.get("/find_id",ctrl.output.find_id);
router.get("/find_psword",ctrl.output.find_psword);
router.get("/reset_psword",ctrl.output.reset_psword);
router.get("/product_register",ctrl.output.product_register);
router.get("/page5_1",ctrl.output.page5_1);
router.get("/page5_2",ctrl.output.page5_2);
router.get("/page7_1",ctrl.output.page7_1);
router.get("/page7_2",ctrl.output.page7_2);
//로그인 데이터를 받아옴
router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);
router.post("/find_id",ctrl.process.find_id);
router.post("/find_psword",ctrl.process.find_psword);
router.post("/make_token",ctrl.process.make_token);
router.post("/reset_psword",ctrl.process.reset_psword);
router.post("/product_register",ctrl.process.product_register);
router.post("/page5_2",ctrl.process.page5_2);
router.post("/page7_1",ctrl.process.page7_1);
router.post("/page7_1",ctrl.process.page7_2);
module.exports = router;



