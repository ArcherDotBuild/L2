// ******************************
// Getting & Setting Attributes ******************************
// Example 1
console.log('\n')

const range = document.querySelector('input[type="range"]')
console.log(range.getAttribute('min'));
console.log(range.getAttribute('max'))
console.log(range.getAttribute('type'));
console.log(range.getAttribute('LoLoLoWar')) // null

// Example 2
console.log('\n')
// Changes from min: 100 to min: -100
range.setAttribute('min', '-100')
console.log(range.getAttribute('min'));

// Example 3
console.log('\n')
// Changing an entire type of the input
// range.setAttribute('type', 'radio')
// console.log(range.checked) 