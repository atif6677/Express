const express = require('express');
const router = express.Router();    

router.get('/:userid', (req, res) => {
    const userId = req.params.userid;
  res.send(` Fetch the cart items for a specific user with User ID: ${userId}`);
});

router.post('/:userid', (req, res) => {
    const userId = req.params.userid;
  res.send(` Add a product to the user's cart for user ID: ${userId}`);
});


module.exports = router;    