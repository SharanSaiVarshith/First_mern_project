const Product = require('../models/Product');

const getProducts = async (req,res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)                    // 200 : success,500: internal server error,    
    } catch (error){
        res.status(500).json(error.message)
    }
};

const createProducts = async (req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)   
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

const updateProducts = async (req,res) => {
    try {
        const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(products)                        
    } catch (error){
        res.status(500).json(error.message)
    }
};

const deleteProduct = async (req,res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({"message": "Deleted Successfully"})    
    } catch (error){
        res.status(500).json(error.message)
    }
};

module.exports = {getProducts, createProducts, updateProducts, deleteProduct}