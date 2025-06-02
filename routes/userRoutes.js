const express = require('express');
const router = express.Router(); 

const usersController = require('../controllers/usersControllers.js');

router.get('/',usersController.getUsers);

router.post('/',usersController.postUser);

router.get('/:id',usersController.getUserByID);

module.exports = router;