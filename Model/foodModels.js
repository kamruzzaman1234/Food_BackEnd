const mongoose = require("mongoose");

const foodScehema = new mongoose.Schema({
    CategoryName:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true,
    },
    options:[String],
    price:{
        type:String,
        requie:true,
    },
    amount:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    createDate:{
        type:Date,
        default:Date.now
    }  

})

const Food = mongoose.model('foods', foodScehema);
module.exports = Food;