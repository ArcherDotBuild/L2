// ******************************
// Call Stack Debugging with Dev Tools ******************************
// Example 1
console.log('Call Stack Debugging with Dev Tools')
console.log('\n')

const repeat = (str, times) => {
  let result = ''
  for (let i = 0; i < times; i++) {
    result += str
  }
  return result
}

const scream = (str) => {
  return str.toUpperCase() + '!!!'
}

const getRantText = (phrase) => {
  let text = scream(phrase)
  let rant = repeat(text, 8)
  return rant
}

const makeRant = (phrase, el) => {
  const h1 = document.createElement('h1')
  h1.innerText = getRantText(phrase)
  el.appendChild(h1)
}

console.log('BEFORE  the breakpoint');

makeRant('I hate mayonnaise', document.body)
// makeRant('If you have to cough, please cover your mouth', document.body)

console.log('AFTER the breakpoint')