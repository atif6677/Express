const express = require('express');
const router = express.Router(); 
const productController = require('../controllers/productsController.js');  
 
router.get('/',productController.getProducts);

router.post('/',productController.newProduct);

router.get('/:id',productController.getProductById);

module.exports = router;