let counter = 0

module.exports = {
  incrementCounter() {
    counter = counter + 1
  },
  getCounter() {
    return counter
  }
}