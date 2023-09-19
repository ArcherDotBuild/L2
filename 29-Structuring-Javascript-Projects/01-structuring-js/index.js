const express = require('express')
const bodyParser = require('body-parser') // Middleware function
const cookieSession = require('cookie-session') // Middleware function
const authRouter = require('./routes/admin/auth')

const app = express()

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

app.listen(3000, () => {
  console.log('Listening')
})
