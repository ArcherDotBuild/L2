// ******************************
// innerHTML ******************************
// Example 1
console.log('\n')

const form = document.querySelector('form')
console.log(form.innerText)
console.log(form.innerHTML)

// Example 2
console.log('\n')
const ul = document.querySelector('ul')
console.log(ul.innerText)
console.log(ul.innerHTML)

// Example 3
console.log('\n')
// Destroying the form
// form.innerHTML = 'I just changed my whole form for this text'
// form.innerHTML = '<b>I\'m a bold tag</b>'
// console.log(form)
// console.dir(form)

// Example 4
console.log('\n')
// form.innerText = 'I just changed my whole form for this text'
// form.innerText = "<b>I'm a bold tag</b>"
// console.log(form);
// console.dir(form);

// Example 5
console.log('\n')
const h1 = document.querySelector('h1')
console.log(h1)
console.log(h1.innerHTML)
console.log(h1.innerText)
h1.innerHTML += ' is'
h1.innerText += ' cool!'