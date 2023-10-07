const express = require('express')
const productsRepo = require('../../repositories/products')
const productsNewTemplate = require('../../views/admin/products/new')

const router = express.Router()

router.get('/admin/products', (req, res) => {
  
})

router.get('/admin/products/new', (req, res) => {
  res.send(productsNewTemplate({}))
})

module.exports = router