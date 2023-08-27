// console.log('hi there');

const express = require('express')

const app = express()
app.get('/', (req, res) => {
  res.send(`
  <div>
  <br />
  <br />
  <form method="POST">
    <input name="email" placeholder="email" />
    <input name="password" placeholder="password" />
    <input name="password-confirmation" placeholder="password confirmation" />
    <button>Sign up </button>
  </form>
  </div>`)
})

const bodyParser = (req, res, next) => {
  // get access to email, password, and passwordConfirmation
  if (req.method === 'POST') {
    req.on('data', (data) => {
      // console.log(data.toString('utf-8'));
      const parsed = data.toString('utf-8').split('&')
      const formData = {}
      for (let pair of parsed) {
        const [key, value] = pair.split('=')
        formData[key] = value
      }
      // console.log(formData)
      req.body = formData
      next() // Express will continue processing
    })
  } else {
    next()
  }
}

app.post('/', bodyParser, (req, res) => {
  // console.log(req);
  console.log(req.body)
  res.send('Account created!!!')
})

app.listen(3000, () => {
  console.log('Listening')
})
