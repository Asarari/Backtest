const express = require('express');
const mongoose = require('mongoose')
const Product = require('./model/product')
const app = express();
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/apipro')

app.use(express.urlencoded({extended:false}))

app.use(cors({
    origin: '*'
}));

app.get('/',(req,res) => {
    Product.find({},(err,produst) =>{
        res.send(produst)
    })
})

app.post('/',(req,res) =>{
    const {Name,Price,Category} = req.body;
    const newProduct = new Product({
        Name,
        Product,
        Category
    });

    newProduct.save()

    res.send('Ok staus 200')

})



app.listen('5000')