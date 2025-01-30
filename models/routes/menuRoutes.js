const express = require("express");
const router = express.Router();

const MenuItem = require('../menu');

router.post('/MenuItem',async(req,res)=>{
    try{
        const {name, price, taste, is_drink, ingredients, num_sales, is_veg} = req.body;
        const newMenuItem = new MenuItem({
            name, price, taste, is_drink, ingredients, num_sales, is_veg
        });
        const response = await newMenuItem.save();
        console.log("Data Is saved!");
        res.status(200).send(response);
    }catch(err){
        console.log(err);
        res.status(500).send({error:'Internal Server Error!!!!!!'});
    }
});
router.get('/MenuItem',async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('Data is fetched !!');
        res.status(200).send(data);
    }catch(err){
        console.log(err);
        res.status(500).send({error:'Internal Server Error!!!'});
    }
});

router.get('/MenuItem/:taste',async(req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste==='sweet'|| taste ==='spicy' || taste ==='sour' || taste ==='bitter' || taste ==='salty'){
            const response = await MenuItem.find({taste : taste});
            console.log('Data is fetched !');
            res.status(200).send(response);
        }else{
            res.status(400).send({error : 'Invalid Taste Type!'});
        }
    }catch(err){
        console.log(err);
        res.status(500).send({error:'Internal Server Error!!!'});
    }
});

module.exports = router;