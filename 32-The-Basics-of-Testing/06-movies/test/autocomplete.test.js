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
})
