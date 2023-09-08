const express = require('express')
const bodyParser = require('body-parser')
const usersRepo = require('./repositories/users')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
  <div>
  <br />
  <br />
  <form method="POST">
    <input name="email" placeholder="email" />
    <input name="password" placeholder="password" />
    <input name="passwordConfirmation" placeholder="password confirmation" />
    <button>Sign up </button>
  </form>
  </div>`)
})

app.post('/', async (req, res) => {
  console.log(req.body)
  const { email, password, passwordConfirmation } = req.body

  // Check the email if the user has signed up before
  // const UsersRepo = require('./repositories/users')
  const existingUser = await usersRepo.getOneBy({ email })
  if(existingUser) {
    return res.send('Email in use')
  }

  if(password !== passwordConfirmation) {
    return res.send('Passwords most match')
  }

  res.send('Account created!!!')
})

app.listen(3000, () => {
  console.log('Listening')
})
