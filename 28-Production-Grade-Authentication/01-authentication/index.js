const express = require('express')
const bodyParser = require('body-parser') // Middleware function
const cookieSession = require('cookie-session') // Middleware function
const usersRepo = require('./repositories/users')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
  // Configuration object

  // This key property is used to encrypt all the info that
  // is stored inside the cookie
  keys: ['randomcharacters']
}))

app.get('/signup', (req, res) => {
  res.send(`
  <p>Your id is: ${req.session.userId}</p>
  <div>
  <br />
  <br />
  <form method="POST">
    <input name="email" placeholder="email" />
    <input name="password" placeholder="password" />
    <input name="passwordConfirmation" placeholder="password confirmation" />
    <button>Sign up</button>
  </form>
  </div>`)
})

app.post('/signup', async (req, res) => {
  console.log(req.body)
  const { email, password, passwordConfirmation } = req.body

  // Check the email if the user has signed up before
  // const UsersRepo = require('./repositories/users')
  const existingUser = await usersRepo.getOneBy({ email })
  if (existingUser) {
    return res.send('Email in use')
  }

  if (password !== passwordConfirmation) {
    return res.send('Passwords most match')
  }

  // Create a user in our user repo to represent this person
  // const user =  await usersRepo.create({email: email, password: password})
  const user = await usersRepo.create({ email, password })

  //  Store the id of that user inside the users cookie
  // req.session === {} Added by cookie-session
  // we can add in anyu property name we want
  req.session.userId = user.id
  

  res.send('Account created!!!')
})


app.get('/signout', (req, res) => {
  // forget all the information that is stored inside their cookie
  // the information inside the cookie is what alone proves that
  // someone is authenticated
  req.session = null
  res.send('You are logged out')
})

app.get('/signin', (req, res) => {
  res.send(`
  <div>
  <br />
  <br />
  <form method="POST">
    <input name="email" placeholder="email" />
    <input name="password" placeholder="password" />
    <button>Sign in</button>
  </form>
  </div>
  `)
})

app.post('/signin', async (req, res) => {
  
})

app.listen(3000, () => {
  console.log('Listening')
})
