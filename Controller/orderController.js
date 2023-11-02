const Order = require('../Model/orderModel');

exports.createOrder = async (req, res) => {
    try {
        const { userId, foodItems, totalAmount } = req.body;
        const order = new Order({
            userId,
            foodItems,
            totalAmount
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('foodItems.foodId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// module.exports = {
//     createOrder,
//     getAllOrders
// };
