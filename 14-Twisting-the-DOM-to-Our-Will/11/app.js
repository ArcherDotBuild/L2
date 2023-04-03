// ******************************
// Append, Prepend, & insertBefore ******************************
// Example 1
console.log('\n')

const parentUL = document.querySelector('ul')
console.log('parentUL', parentUL)

console.log('\n')
const newLI = document.createElement('li')
newLI.innerText = 'I am a new <li></li> element'
console.log(newLI);

console.log('\n')
// When i do appendChild, it becomes the last child of an element, the last child of the parent
parentUL.appendChild(newLI)

// Example 2
console.log('\n')
// Inserting an LI at the top
const newLITwo = document.createElement('li')
newLITwo.innerText = 'newLITwo No2 <li></li> element'
const firstLI = document.querySelector('li.todo')
// Parent element (New thing i want to insert, Where i want to insert it before)
parentUL.insertBefore(newLITwo, firstLI)
// The way it's structured we have to have the parent of what we're trying to insert into
// and then we also have to select what we want to insert before
// and then what we are actually inserting

// Example 3
console.log('\n')
// Inserting before the last ul with class todo
const anotherLI = document.createElement('li')
anotherLI.innerText = 'anotherLI'
const lastTodo = document.querySelectorAll('li.todo')[2]
console.log('lastUL.innerText: ', lastTodo.innerText)
parentUL.insertBefore(anotherLI, lastTodo)

// Example 4
console.log('\n')
const i = document.createElement('i')
i.innerText = 'I AM ITALICS!!!'

const firstP = document.querySelector('p')
// Before the paragraph
// firstP.insertAdjacentElement('beforebegin', i)

// After the paragraph ends
// firstP.insertAdjacentElement('afterend', i)

// Into the paragraph element itself after the opening tag
// firstP.insertAdjacentElement('afterbegin', i)

// Before the end of the paragraph element closing tag
firstP.insertAdjacentElement('beforeend', i)

// Example 5
console.log('\n')
// Append
// Inserting an LI in the first paragraph after the last element
const helloLI = document.createElement('li')
helloLI.innerText = 'hello LI'
// firstP.append(i, helloLI)

// Example 6
console.log('\n')
// Prepend
// Inserting an LI in the first paragraph after the last element before the paragraph
firstP.prepend(i, helloLI)

// Example 7
console.log('\n')
// With appendChild() you cannot insert multiple elements
// firstP.appendChild(i, helloLI)