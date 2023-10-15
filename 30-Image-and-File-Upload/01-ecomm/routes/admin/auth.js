const express = require('express')

const { handleErrors } = require('./middlewares')
const usersRepo = require('../../repositories/users')
const signupTemplate = require('../../views/admin/auth/signup')
const signinTemplate = require('../../views/admin/auth/signin')
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser,
} = require('./validators')

const router = express.Router()

router.get('/signup', (req, res) => {
  res.send(
    // res.send(signupTemplate({req: req}))
    res.send(signupTemplate({ req }))
  )
})

router.post(
  '/signup',
  [requireEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async (req, res) => {
    const { email, password } = req.body

    // Create a user in our user repo to represent this person
    // const user =  await usersRepo.create({email: email, password: password})
    const user = await usersRepo.create({ email, password })

    //  Store the id of that user inside the users cookie
    // req.session === {} Added by cookie-session
    // we can add in anyu property name we want
    req.session.userId = user.id

    res.send('Account created!!!')
  }
)

router.get('/signout', (req, res) => {
  // forget all the information that is stored inside their cookie
  // the information inside the cookie is what alone proves that
  // someone is authenticated
  req.session = null
  res.send('You are logged out')
})

router.get('/signin', (req, res) => {
  res.send(signinTemplate({}))
})

router.post(
  '/signin',
  [requireEmailExists, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  async (req, res) => {
    const { email } = req.body

    const user = await usersRepo.getOneBy({ email })

    req.session.userId = user.id

    res.send('You are signed in!!!')
  }
)

// Make all these different handlers available to other files inside of our project
module.exports = router
