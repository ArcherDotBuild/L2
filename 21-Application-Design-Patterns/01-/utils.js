const debounce = (func, delay = 1000) => {
  let timeoutId
  return (...arg) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(null, arg)
    }, delay)
  }
}
