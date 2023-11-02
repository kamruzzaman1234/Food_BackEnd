const mongoose = require("mongoose");

const createSchema = mongoose.Schema({
    name: {
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,

    },
    createDate:{
        type:Date,
        default:Date.now
    }
  
    
},{ timestamps: true })

module.exports = mongoose.model("users", createSchema);