// ******************************
// getElementsByTagName ******************************
// Example 1

const allPs = document.getElementsByTagName('p')
console.log('allPs: ', allPs);

console.log('\n')
const allH3 = document.getElementsByTagName('h3')
console.log('allH3: ', allH3) // We get empty collection back

console.log('\n')
const allH1 = document.getElementsByTagName('h1')
console.log('allH1: ', allH1) // Just 1 element but i still get a collection

console.log('\n')
const allInputs = document.getElementsByTagName('input')
console.log('allInputs: ', allInputs)
console.log('input[0]: ', allInputs[0]);
console.log('input[1]: ', allInputs[1]);
console.log('inpu[2]: ', allInputs[2])

console.log('\n')
console.log('input[3]: ', allInputs[3]) // undefined

console.log('\n')
console.log('input.length: ', allInputs.length)

console.log('\n')
// console.log('input.pop(): ', allInputs.pop()) // TypeError: allInputs.pop is not a function

// type (input.) in the browser console to see all the available methods for the HTML Collection

for(let input of allInputs) {
  console.log('input: ', input)
  console.log('input.value: ', input.value)
}

console.log('\n')
// Turn the HTML  Collection into an array
// const arrayInputs = [...allInputs]
// console.log('arrayInputs: ', arrayInputs)

