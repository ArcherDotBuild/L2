it('Shows an autocomplete', () => {
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
    }
  })

  const dropdown = document.querySelector('.dropdown')

  // no real, we don't have access to the assert library inside of the browser
  // assert.strictEquals(dropdown.className, 'dropdown')

  // Mocha inside the browser
  
})
