const assert = require('assert')

it('has a text input', async () => {
  const dom = await render('index.html')

  // console.log(dom);
  const input = dom.window.document.querySelector('input')

  // if(!input) {
  //   throw new Error('error!')
  // }

  assert(input)
})

it('shows a success message with a valid email', async () => {
  const dom = await render('index.html')
  const input = dom.window.document.querySelector('input')
  input.value = 'hello@hello.com'
  dom.window.document
    .querySelector('form')
    .dispatchEvent(new dom.window.Event('submit'))

  const h1 = dom.window.document.querySelector('h1')
  console.log('Contents of h1', h1.innerHTML)
})
