const waitFor= ((selector) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval)
        clearInterval(timeout)
        resolve()
      }
    }, 30)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      reject()
    }, 2000)
  })
})

beforeEach(() => {
  document.querySelectorAll('#target').innerHTML = ''
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Blade Runner' },
        { Title: 'Redemption of the Ghost' },
        { Title: 'Die hard' },
      ]
    },
    renderOption(movie) {
      return movie.Title
    },
  })
})

it('Dropdown starts closed', () => {
  const dropdown = document.querySelector('.dropdown')

  // no real, we don't have access to the assert library inside of the browser
  // assert.strictEquals(dropdown.className, 'dropdown')

  // Mocha inside the browser
  expect(dropdown.className).not.to.include('is-active')
  // Fail the test
  // expect(dropdown.className).to.include('is-active')
})

it('After searching, dropdown opens up', async () => {
  const input = document.querySelector('input')
  input.value = 'avengers'
  input.dispatchEvent(new Event('input'))

  await waitFor('.dropdown-item')

  const dropdown = document.querySelector('.dropdown')
  expect(dropdown.className).to.include('is-active')
})


it('After searching, display some results', async () => {
    const input = document.querySelector('input')
    input.value = 'avengers'
    input.dispatchEvent(new Event('input'))

    await waitFor('.dropdown-item')

    const items = document.querySelectorAll('.dropdown-item')

    expect(items.length).to.equal(3)
    // expect(items.length).to.equal(4) // This test will fail
})