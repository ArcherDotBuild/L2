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
