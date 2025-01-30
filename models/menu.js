const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    price :{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum : ['sweet','spicy','sour','bitter','salty'],
        required:true,
    },
    is_drink :{
        type:Boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        required:true,
    },
    num_sales:{
        type:Number,
        default:0,
    },
    is_veg:{
        type:Boolean,
        default:true,
    },
    })
    const MenuItem = mongoose.model('MenuItem',menuItemSchema);
    
    module.exports = MenuItem