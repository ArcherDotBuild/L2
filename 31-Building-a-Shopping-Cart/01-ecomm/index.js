const express = require('express')
const bodyParser = require('body-parser') // Middleware function
const cookieSession = require('cookie-session') // Middleware function
const authRouter = require('./routes/admin/auth')
const ardminProductsRouter = require('./routes/admin/products')
const productsRouter = require('./routes/products')
const cartsRouter = require('./routes/carts')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  cookieSession({
    // Configuration object

    // This key property is used to encrypt all the info that
    // is stored inside the cookie
    keys: ['randomcharacters'],
  })
)
app.use(authRouter)
app.use(productsRouter)
app.use(ardminProductsRouter)
app.use(cartsRouter)

app.listen(3000, () => {
  console.log('Listening')
})
