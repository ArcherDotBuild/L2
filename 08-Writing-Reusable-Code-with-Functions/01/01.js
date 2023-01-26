// Test the JS script before starting
// alert("It's working!");

// ******************************
// Our First Function ******************************
// Example 1

function grumpus() {
  console.log('ugh...you again...')
  console.log('for the last time...')
  console.log('LEAVE ME ALONE!!!')
}
grumpus
grumpus()
console.log('\n')
grumpus()

console.log('\n')
for (let i = 0; i < 3; i++) {
  grumpus()
}