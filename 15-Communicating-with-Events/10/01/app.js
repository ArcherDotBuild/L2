// ******************************
// Input & Change Events ******************************
// Example 1

const creditCardInput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms')
const veggieSelect = document.querySelector('#veggie')

const formData = {}

// Use this for testing example 1

// Testing the CC input field
// creditCardInput.addEventListener('input', function(e) {
//   console.log('CC CHANGED!', e);
//   console.log(e.target.value)
// })

// ********************************
// Use this for testing example 1 with multiple inputs

creditCardInput.addEventListener('input', (e) => {
  console.log('CC CHANGED!', e)
  formData['cc'] = e.target.value
})

termsCheckbox.addEventListener('input', (e) => {
  console.log('CHECKED!', e)
  formData['terms'] = e.target.checked
})

veggieSelect.addEventListener('input', (e) => {
  console.log('VEGGIE!', e)
  formData['veggie'] = e.target.value
})

// {
//   cc: '1209831203'
//   terms: false
//   veggie: 'carrot'
// }

// Type (formData) variable in the browser console to see the object info
