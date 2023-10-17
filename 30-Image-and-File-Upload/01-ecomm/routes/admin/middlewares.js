const { validationResult } = require('express-validator')

module.exports = {
  handleErrors(templateFunc) {
    // Customize this handle erros middleware
    return (req, res, next) => {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.send(templateFunc({ errors }))
      }

      next()
    }
  },
  // No customization
  requireAuth(req, res, next) {
    if(!req.session.userId) {
      return res.redirect('/signin')
    }
    // Continue on an run the next middleware or whatever else
    next()
  }
}
