const { check } = require('express-validator')
const usersRepo = require('../../repositories')

module.exports = {
  requireEmail: check('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must be a valid email')
    .custom(async (email) => {
      // Check the email if the user has signed up before
      // const UsersRepo = require('./repositories/users')
      const existingUser = await usersRepo.getOneBy({ email })
      if (existingUser) {
        throw new Error('Email in use')
      }
    }),
  requirePassword: check('password')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Must be between 4 and 20 characters'),
  requirePasswordConfirmation: check('passwordConfirmation')
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage('Must be between 4 and 20 characters')
    .custom((passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password) {
        throw new Error('Passwords must match')
      }
    }),
}
