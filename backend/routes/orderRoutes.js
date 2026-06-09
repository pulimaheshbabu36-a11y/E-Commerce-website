const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

// Create Order
router.post("/", async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find()
            .populate("items.productId");

        res.json(orders);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;