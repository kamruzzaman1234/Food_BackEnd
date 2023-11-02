const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // Reference to the 'users' collection
        required: true
    },
    foodItems: [
        {
            foodId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'foods', // Reference to the 'foods' collection
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('orders', orderSchema);
module.exports = Order;
