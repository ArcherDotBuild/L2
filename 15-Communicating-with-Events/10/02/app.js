// ******************************
// Input & Change Events ******************************
// Example 1

// Input and Change events work the same
// But in the (input) only works when we lose focus, taking the pointer out of the input box
// input.addEventListener('input', ({target}) => {
// input.addEventListener('change', ({target}) => {

const creditCardInput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')

const formData = {}

// for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
//   input.addEventListener('input', (e) => {
//     console.log(e.target.name)
//     console.log(e.target.type);
//     formData[e.target.name] = e.target.value
//   })
// }

// Getting the checkbox value, more advanced solution of example 1
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener('input', ({ target }) => {
    const { name, type, value, checked } = target
    formData[name] = type === 'checkbox' ? checked : value
    console.log('formData: ', formData)
  })
}

// {
//   cc: '1209831203'
//   terms: false
//   veggie: 'carrot'
// }

// Type (formData) variable in the browser console to see the object info
