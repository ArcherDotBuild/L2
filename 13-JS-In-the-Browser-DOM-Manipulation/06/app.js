// ******************************
// getElementsByClassNames ******************************
// Example 1
console.log('\n')

const header = document.getElementsByClassName('header')
console.log(header)
console.dir(header);

// Example 2
console.log('\n')
const special = document.getElementsByClassName('special')
console.log(special)
console.dir(special)
special[0].innerText = 'Lazy Bear'

console.log('\n')
for(let element of special) {
  console.log('element: ', element)
  console.log('element.innerText: ', element.innerText)
}

// Example 3
console.log('\n')
// Getting just specific elements
const getUL = document.getElementsByTagName('ul')[0]
console.log('getUL: ', getUL)

console.log('\n')
const ulWithSpecial = getUL.getElementsByClassName('special')
console.log('ulWithSpecial: ', ulWithSpecial)

console.log('\n')
console.log(getUL.getElementsByTagName('li'))
