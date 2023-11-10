module.exports = {
  forEach(arr, fn) {
    for (let index in arr) {
      fn(arr[index], index)
    }
  },
}