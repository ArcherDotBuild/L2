// ******************************
// querySelector & querySelectorAll ******************************
// Example 1
console.log('\n')

const firstH1 = document.querySelector('h1')
console.log('firstH1: ', firstH1)
console.dir(firstH1)
console.log(firstH1.innerText)

// Example 2
console.log('\n')
// This won't work we need to use querySelectorAll
// const secondP = document.querySelector('p')[1]
// console.log('secondP: ', secondP);
// console.log(secondP)
// console.log(secondP.innerHTML);

// Example 3
console.log('\n')
const selectById = document.querySelector('#bear-photo')
console.log('selectById: ', selectById)
console.dir(selectById)
console.log(selectById.src)

// Example 4
console.log('\n')
// Both examples do the same
// Getting the same paragraph
console.log(document.querySelector('#main'))
console.log(document.getElementById('main'))

// Example 5
console.log('\n')
console.log(document.querySelector('.special'));

// Example 6
console.log('\n')
// This is just valid CSS, no new syntax
console.log(document.querySelector('li.special'))

// Example 7
console.log('\n')
// Using valid CSS syntax
console.log(document.querySelector('section ul li.special'))

// Example 8
console.log('\n')
console.log(document.querySelector('input'))
console.log(document.querySelector('input[type="password"]'));

// Example 9
console.log('\n')
console.log(document.querySelectorAll('input'))
console.log(document.querySelectorAll('li'))
console.log(document.querySelectorAll('#main'))

// Example 10
console.log('\n')
const specials = document.querySelectorAll('.special')
// Type (special.) to see available options
console.log('specials: ', specials)
console.log('specials[0]: ', specials[0]);
console.log('specials.length: ', specials.length)
