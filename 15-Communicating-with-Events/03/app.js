// ******************************
// addEventListener ******************************
// Example 1
console.log('addEventListener')
console.log('\n')

const btn = document.querySelector('button')

// 1st argument the event, 2nd argument the function to execute when this event occurs

btn.addEventListener('click', function() {
  alert('CLICKED!!!')
})

// Adding another event listener to the same variable
btn.addEventListener('click', function() {
  console.log('Second thing!!!')
})

console.log(btn.onclick); // null

// Example 2
console.log('\n')

btn.addEventListener('mouseover', function() {
  btn.innerText = 'STOP TOUCHING ME'
})

btn.addEventListener('mouseout', function() {
  btn.innerText = 'Hello'
})

// Example 3
console.log('\n')

console.log(window)
window.addEventListener('scroll', function() {
  console.log('STOP SCROLLING!!!');
})