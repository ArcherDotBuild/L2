const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
}) => {
  root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`

  const input = root.querySelector('input')
  const dropdown = root.querySelector('.dropdown')
  const resultsWrapper = root.querySelector('.results')

  const onInput = async (event) => {
    const movies = await fetchData(event.target.value)

    if (!movies.length) {
      dropdown.classList.remove('is-active')
      return
    }

    resultsWrapper.innerHTML = ''
    dropdown.classList.add('is-active')
    for (let movie of movies) {
      const option = document.createElement('a')

      option.classList.add('dropdown-item')
      option.innerHTML = renderOption(movie)

      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active')
        input.value = inputValue(movie)
        // Helper function
        onOptionSelect(movie)
      })

      resultsWrapper.appendChild(option)
    }
  }
  input.addEventListener('input', debounce(onInput, 1000))

  document.addEventListener('click', (event) => {
    console.log(event.target)
    if (!root.contains(event.target)) {
      dropdown.classList.remove('is-active')
    }
  })
}
