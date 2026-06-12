const express = require('express');
const { getProducts,createProducts,updateProducts,deleteProduct } = require('../controllers/productController');


const router = express.Router()

router.get('/',getProducts)
router.post('/',createProducts)
router.put('/:id',updateProducts)
router.delete('/:id',deleteProduct)

module.exports = router