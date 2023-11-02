const express = require("express");
const { getLL, createUserSignUp, logIn } = require("../Controller/allControler");
const { createFood, getAllFoods } = require("../Controller/foodController");
const { createOrder, getAllOrders } = require("../Controller/orderController");

const router = express.Router();

router.get("/", getLL);
router.post("/signup", createUserSignUp);
router.post("/login", logIn);

router.get('/createFood', getAllFoods);
router.post('/createFood', createFood);
// Oder Complete Router

router.post('/orders',createOrder);
router.get('/orders', getAllOrders);

module.exports = router;