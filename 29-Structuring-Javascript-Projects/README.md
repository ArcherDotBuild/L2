## 29-Structuring-Javascript-Projects

**folder 01**

## 1. 02 Structure Refactor

## 2. 03 HTML Templating Functions

## 3. 05 Building a Layout File

## 4. 07 Validation vs Sanitization

https://express-validator.github.io/docs/

## 5. 08 Receiving Validation Output

## 6. 09 Adding Custom Validators

## 7. 10 Extracting Validation Chains

## 8. 11 Displaying Error Messages

## 9. 12 Validation Around Sign In

## 10. 13 Password Validation

## 11. 14 Template Helper Functions

```javascript
const getError = (errors, prop) => {
  // prop === 'email' || 'password' || 'passwordConfirmation'
  // if (errors) {
  //   return errors.mapped()[prop].msg

  // errors.mapped() === Object {
  //    email: {
  //      msg: 'Invalid Email'
  //    },
  //    password: {
  //      msg: 'Password too short'
  //    },
  //    passwordConformation: {
  //      msg: 'Passwords must match'
  //    }
  // }
  // }

  try {
    return errors.mapped()[prop].msg
  } catch (err) {
    return ''
  }
}
```

## 11. 15 Adding Some Styling

## 12. 16 Exposing Public Directories

## 12. 18 Product Routes

## 12. 020 Code Reuse with Classes
