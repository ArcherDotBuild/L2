const express = require('express')
const cartsRepo = require('../repositories/carts')
const productsRepo = require('../repositories/products')
const cartShowTemplate = require('../views/carts/show')

const router = express.Router()

// Receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
  console.log(req.body.productId)
  // Fugure out the cart!
  let cart
  if (!req.session.cartId) {
    // We don't have a cart, we need to create one,
    // and store the cart id on the req.session.cartId property
    cart = await cartsRepo.create({ items: [] })
    req.session.cartId = cart.id
  } else {
    // We have a cart! lets get it from the repository
    cart = await cartsRepo.getOne(req.session.cartId)
  }

  console.log(cart)
  // Either increment quantity for existing product
  // OR add new product to items array
  const existingItem = cart.items.find((item) => {
    // Return true on the first item that has an id to the correct req.body.productId property
    item.id === req.body.productId
  })
  if (existingItem) {
    // Increment quantity and save cart
    /*
      // just an example example:
      {
        id: 987,
        items: [
          { id: 123, quantity: 1 }
        ]
      }
    */
    existingItem.quantity++
  } else {
    // add new product id to items array
    cart.items.push({ id: req.body.productId, quantity: 1 })
  }

  await cartsRepo.update(cart.id, {
    items: cart.items,
  })

  // res.send('Product added to cart')
  res.redirect('/cart')
})

// Receive a GET request to show all items in cart
router.get('/cart', async (req, res) => {
  if (!req.session.cartId) {
    return res.redirect('/')
  }

  const cart = await cartsRepo.getOne(req.session.cartId)

  for (let item of cart.items) {
    // item === { id: , quantity: }
    const product = await productsRepo.getOne(item.id)

    item.product = product
  }

  res.send(cartShowTemplate({ items: cart.items }))
})

// Receive a POST request to delete an item from a cart
router.post('/cart/products/delete', async (req, res) => {
  // console.log(req.body.itemId);
  const { itemId } = req.body
  const cart = await cartsRepo.getOne(req.session.cartId)

  const items = cart.items.filter((item) => item.id !== itemId)

  await cartsRepo.update(req.session.cartId, { items })

  res.redirect('/cart')
})

module.exports = router
