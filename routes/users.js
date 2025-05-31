const express = require('express');
const router = express.Router();    

router.get('/', (req, res) => {
    res.send('User List');
}); 

router.post('/', (req, res) => {
    res.send('User Added');
}); 

module.exports = router;