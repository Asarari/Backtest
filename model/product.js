const mongoose = require('mongoose');



const newProduct = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },

    Price:{
        type:Number,
        require:true
    },

    Category:{
        type:String,
        require:true
    },
})

module.exports = mongoose.model('product', newProduct)