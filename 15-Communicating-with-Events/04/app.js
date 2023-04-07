// ******************************
// The Impossible Button Demo ******************************
// Example 1
console.log('The Impossible Button Demo')
console.log('\n')

// Option 1
console.log(window.screen);

// Option 2
console.log(window.innerHeight)
console.log(window.innerWidth);

const btn = document.querySelector('button')

btn.addEventListener('mouseover', function() {
  console.log('MOUSED OVER ME!')

  const width = Math.floor(Math.random() * window.innerHeight)
  const height = Math.floor(Math.random() * window.innerWidth)

  btn.style.left = `${width}px`
  btn.style.top = `${height}px`
})

btn.addEventListener('click', function() {
  btn.innerText = 'YOU GOT ME'
  document.body.style.backgroundColor = 'lightgreen'
})

