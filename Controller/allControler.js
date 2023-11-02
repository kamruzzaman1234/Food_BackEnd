const Users = require("../Model/userModel");
const {body, validationResult} = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.getLL = (req,res)=>{
    res.send("Hellow Express Js")
}
//SIGN UP AREA CREATE / WITH POST METHOD   

exports.createUserSignUp = async(req,res)=>{
    body('name').isLength({min: 5})
    body('email').isEmail()
    body('passsword','Invalid Password').isLength({min: 5})

    const errors =  validationResult(req)
    if(!errors.isEmpty()){
        res.status(404).json({errors: errors.array()})
    }

    try{
        req.body.password = await bcrypt.hash(req.body.password, 5)
        const newUser = new Users({   
            name : req.body.name,
            email : req.body.email,
            address : req.body.address,
            password : req.body.password
        })
        await newUser.save()
        res.status(201).json({
            newUser,
            message:"Sign Up success",
            success:true
        })
    }catch(error){
        res.status(404).send(error.message)
    }
}



exports.logIn = async(req,res)=>{
    const {email, password} = req.body
    try{
       const userEmail = await Users.findOne({email});
       if(!userEmail){
        return res.status(401).json({
            message : "Wrong Credentials"
        })
       }
       const validate = await bcrypt.compare(password, userEmail.password)
       if(!validate){
        return res.status(400).json({
            message : "Password Not match"
        })
       }
       const token = await jwt.sign({email, _id:userEmail._id}, process.env.PRIVET_KEY,
        {expiresIn:"2h"})
        res.status(201).json({
            message: "Log In Success",
            token,
            userEmail,
            success:true
        })
    }catch(error){
        res.status(404).json({
            message: "Not Found"
        })
    }
}