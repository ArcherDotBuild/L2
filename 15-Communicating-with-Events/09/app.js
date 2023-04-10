// ******************************
// Form Events & PreventDefault ******************************
// Example 1

// This will make the browser refresh
// const form = document.querySelector('#signup-form')
// form.addEventListener('submit', function() {
//   console.log('submit form')
// })

// Example 2

const creditCardInput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')

const form = document.querySelector('#signup-form')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  // console.log('submit form')

  console.log('cc: ', creditCardInput.value)
  console.log('terms: ', termsCheckbox.checked)
  console.log('veggieSelect: ', veggieSelect.value);
  
  // send form data to a database
  // append something to page using form data
})

