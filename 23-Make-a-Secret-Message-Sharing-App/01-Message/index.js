// console.log('hello world');
const { hash } = window.location
// console.log(atob(hash.replace('#', '')));
const message = atob(hash.replace('#', ''))

if (message) {
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#message-show').classList.remove('hide')

  document.querySelector('h1').innerHTML = message
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()

  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#link-form').classList.remove('hide')

  const input = document.querySelector('#message-input')
  const encrypted = btoa(input.value)

  console.log(input.value)
  console.log('\n')

  // document.querySelector('#link-input').value = encrypted
  // document.querySelector('#link-input').value = `${window.location}#${encrypted}`
  const inputLink = document.querySelector('#link-input')
  inputLink.value = `${window.location}#${encrypted}`
  inputLink.select()
})

console.log(window.location)
console.log('\n')
console.log(`${window.location}`)
