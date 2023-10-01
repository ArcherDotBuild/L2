const layout = require('../layout')
const { getError } = require('../../helpers')

module.exports = ({ req, errors }) => {
  return layout({
    content: `
    <div>
      <p>Your id is: ${req.session.userId}</p>  
      <br />
      <br />
      <form method="POST">
        <input name="email" placeholder="email" />
        ${getError(errors, 'email')}
        <input name="password" placeholder="password" />
        ${getError(errors, 'password')}
        <input name="passwordConfirmation" placeholder="password confirmation" />
        ${getError(
          errors,
          'passwordConfirmation'
        )}        <button>Sign up</button>
      </form>
    </div>
  `,
  })
}
