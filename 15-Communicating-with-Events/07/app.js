// ******************************
// Key Events keypress, keyup, & keydown ******************************
// Example 1
console.log('Key Events keypress, keyup, & keydown')
console.log('\n')

const input = document.querySelector('#username')

input.addEventListener('keydown', function(e) {
  console.log('keydown')
})

input.addEventListener('keyup', function(e) {
  console.log('keyup');
})

input.addEventListener('keypress', function(e) {
  console.log('keypress')
})

const addItemInput = document.querySelector('#addItem')
const itemsUL = document.querySelector('#items')

addItemInput.addEventListener('keypress', function(e) {
  // console.log(e)
  // console.log(e.key);
  console.log(this.value);
  if(e.key === 'Enter') {
    if(!this.value) return
    const newItemText = this.value
    const newItem = document.createElement('li')
    newItem.innerText = newItemText
    itemsUL.append(newItem)
    this.value = ''
  }
})