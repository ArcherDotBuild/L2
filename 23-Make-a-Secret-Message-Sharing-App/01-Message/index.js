// console.log('hello world');

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()

  const input = document.querySelector('input')

  console.log(input.value);
})