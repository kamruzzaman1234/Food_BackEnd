const express = require("express");
const app = express();
const path = require("path")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const getRouters = require('./Router/allRoute')




//DGDiOsn1srt1eyJt
//

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")))

app.use("/api", getRouters);

//shoopingFood
//RdRuBYtFM2hgBHxW
const connect = async()=>{
    try{
        await mongoose.connect(process.env.FOOD_DATA)
    }catch(err){
        console.log(err.message)
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("Disconnected")
})

mongoose.connection.on("connected", ()=>{
    console.log("Connected")
})

const PORT = process.env.PORT || 6007;  
app.listen(PORT, ()=>{
    connect()
    console.log(`Server is Running http:${PORT}`);
})