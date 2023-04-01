// ******************************
// getComputedStyle ******************************
// Example 1
console.log('\n')

const li = document.querySelector('li')
console.log(getComputedStyle(li))

console.log('\n')
liComputedStyle = getComputedStyle(li)
console.log(liComputedStyle.color)

console.log('\n')
li.style.color = 'blue'
console.log(liComputedStyle.color)
