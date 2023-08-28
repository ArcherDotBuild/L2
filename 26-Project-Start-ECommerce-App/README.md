## 26-Project-Start-ECommerce-App

**folder 01**

## 1. 03 Package.json Scripts

`npm run dev` Command runs nodemon index.js

`ctrl + c` To stop de server

## 2. 04 Creating a Web Server

```javascript
const express = require('express')

const app = express()

// Route handler
// 1st argument: the path
// 2nd argument: a callback function
// This callback function is always going to be called with the same
// two arguments that we abbreviate as req and res

// req stands for request, it is an object that represents
// the incoming request from a browser into our web server

// res stands for response, it is an object that represents
// the outgoing response from our server back over to the browser
app.get('/', (req, res) => {
  res.send('hi there!')
})

// Start listening for incoming network requests
app.listen(3000, () => {
  console.log('Listening')
})
```

## 3. 06 Displaying Simple HTML

## 4. 07 Understanding Form Submissions

## 5. 08 Parsing Form Data

## 6. 09 Middlewares in Express

Moddleware: Function that does some preprocessing on the 'req and 'res objects. Primary means of code reuse in Express

```javascript
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
```

## 7. 10 Globally Applying Middleware

```javascript
app.post('/', bodyParser.urlencoded({ extended: true}), (req, res) => {
  // console.log(req);
  console.log(req.body)
  res.send('Account created!!!')
})
```
