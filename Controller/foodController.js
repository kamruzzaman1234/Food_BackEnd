const Food = require("../Model/foodModels");

exports.createFood = async(req,res)=>{
    try{
        const newFoods = new Food(req.body);
        const saveFood = await newFoods.save()
        res.status(201).json(saveFood)
    }catch(err){
        console.log('Error creatting Food items', err)
        res.status(404).json({err:'An error occurred while creating the food item'})
    }
}

exports.getAllFoods = async(req,res)=>{
    try{
        const foods = await Food.find()
        res.json(foods)
    }catch(err){
        console.log('Error creatting Food items', err)
        res.status(404).json({err:'An error occurred while creating the food item'})
    }
}