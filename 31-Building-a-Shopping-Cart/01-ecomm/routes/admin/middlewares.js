const { validationResult } = require('express-validator')

module.exports = {
  handleErrors(templateFunc, dataCb) {
    // Customize this handle erros middleware
    return async (req, res, next) => {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {

        let data = {} // Even if we don't have a data callback
        if(dataCb) {
          data = await dataCb(req)
        }
        return res.send(templateFunc({ errors, ...data }))
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
