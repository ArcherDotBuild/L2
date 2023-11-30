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