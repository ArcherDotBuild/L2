// ******************************
// Working with innerText & textContent ******************************
// Example 1
console.log('\n')

const h1 = document.querySelector('h1')
h1.innerText
console.log('h1: ', h1)
console.dir(h1);
console.log('h1.innerText: ', h1.innerText)

// Example 2
console.log('\n')
const ul = document.querySelector('ul')
console.log('ul: ', ul);
console.dir(ul)
console.log('ul.innerText: ', ul.innerText)
// When we use innetText on an element, we get all of the text inside of it

// Example 3
console.log('\n')
// Getting all the text from my Web page
// It doesn't matter how many elements deep it is, if it's nested down, it extracts all the text 
console.log(document.body.innerText);

// Example 4
console.log('\n')
h1.innerText = 'I\'m Hungry!'
console.log('h1: ', h1)

// Example 5
console.log('\n')
// This will delete all the content in the UL
// ul.innerText = 'I AM A BIG UL!'

// Example 6
console.log('\n')
const pIdMain = document.querySelector('#main')
console.log(pIdMain.innerText)
console.log(pIdMain.textContent);
