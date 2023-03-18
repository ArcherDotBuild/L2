// ******************************
// Shorthand Object Properties ******************************
// Example 1

const getStats = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const sum = arr.reduce((sum, r) => sum + r)
  const avg = sum / arr.length
  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg,
  }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]
console.log('reviews: ', reviews)

console.log('\n')
const stats = getStats(reviews)
console.log('stats: ', stats)

// Example 2
console.log('\n')
// New short syntax
const getStatsShortSyntax = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const sum = arr.reduce((sum, r) => sum + r)
  const avg = sum / arr.length
  return { max, min, sum, avg }
}

console.log('getStatsShortSyntax: ', getStatsShortSyntax(reviews))