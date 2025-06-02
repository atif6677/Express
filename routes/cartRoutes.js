const express = require('express');
const router = express.Router();  

const cartController = require('../controllers/cartController.js');

router.get('/:userid',cartController.getCart);

router.post('/:userid',cartController.postCart);


module.exports = router;    