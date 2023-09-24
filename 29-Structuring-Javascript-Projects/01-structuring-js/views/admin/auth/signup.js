const layout = require('../layout')

module.exports = ({ req }) => {
  return layout({
    content: `
    <div>
      <p>Your id is: ${req.session.userId}</p>  
      <br />
      <br />
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign up</button>
      </form>
    </div>
  `,
  })
}
