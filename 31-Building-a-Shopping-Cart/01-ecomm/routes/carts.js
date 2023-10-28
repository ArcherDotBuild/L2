const express = require('express')

const router = express.Router()

// Receive a post request to add an item to a cart
router.post('/cart/products', (req, res) => {
  console.log(req.body.productId);

  res.send('Product added to cart')
})

// Receive a GET request to show all items in cart

// Receive a POST request to delete an item from a cart

module.exports = router
