// ******************************
// removeChild & remove ******************************
// Example 1
console.log('\n')

// With removeChild()
const ul = document.querySelector('section ul')
const removeMe = ul.querySelector('.special')
// Needs to be the parent of the child
// It does return the removed element so i can save it

const deleted = ul.removeChild(removeMe)
console.log(deleted)

// Example 2
// With remove()
console.log('\n')
const h1 = document.querySelector('h1')
h1.remove()

// Example 3
console.log('\n')
// With removeChild()
const h2 = document.querySelector('h2')
document.body.removeChild(h2)