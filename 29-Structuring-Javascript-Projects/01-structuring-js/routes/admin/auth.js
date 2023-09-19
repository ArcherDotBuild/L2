const express = require('express')
const usersRepo = require('../../repositories/users')

const router = express.Router()

router.get('/signup', (req, res) => {
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

router.post('/signup', async (req, res) => {
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

router.get('/signout', (req, res) => {
  // forget all the information that is stored inside their cookie
  // the information inside the cookie is what alone proves that
  // someone is authenticated
  req.session = null
  res.send('You are logged out')
})

router.get('/signin', (req, res) => {
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

router.post('/signin', async (req, res) => {
  const { email, password } = req.body

  const user = await usersRepo.getOneBy({ email })

  if (!user) {
    return res.send('Email not found')
  }

  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  )

  if (!validPassword) {
    return res.send('Invalid password')
  }

  req.session.userId = user.id

  res.send('You are signed in!!!')
})

// Make all these different handlers available to other files inside of our project
module.exports = router