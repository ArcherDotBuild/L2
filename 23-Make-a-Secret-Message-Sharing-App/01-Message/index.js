// console.log('hello world');

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()

  const input = document.querySelector('#message-input')
  const encrypted = btoa(input.value)

  console.log(input.value);
  console.log('\n')

  document.querySelector('#link-input').value = encrypted

})

console.log(window.location);
console.log('\n');
console.log(`${window.location}`);