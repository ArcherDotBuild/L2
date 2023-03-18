// ******************************
// Shorthand Object Properties ******************************
// Example 1
/*
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
*/

// ******************************
// Computed Properties ******************************
// Example 3

console.log('\n')
const role = 'host'
const person = 'Jools Holland'
const role2 = 'Director'
const person2 = 'James Cameron'

const team = {
  role: person,
}
// person (key: value) is assigned to role
// role key stays unchanged, role value changes to 'Jools Holland'
// team: { role: 'Jools Holland' }
console.log('team: ', team)

// Example 4
// DYNAMIC KEYS
console.log('\n')
const team2 = {}
// team2: host: 'Jools Holland'
team2[role] = person
console.log('team2: ', team2)
// team2: director: 'James Cameron'
team2[role2] = person2
console.log('team2: ', team2)
// team2: role: 'Jools Holland'
team2.role = 'ElfGodd'
console.log('team2: ', team2)
// {host: 'Jools Holland', Director: 'James Cameron', role: 'ElfGodd'}

// Example 5
// New syntax for Computed Properties
console.log('\n')
const teamComputed = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen',
}
console.log('teamComputed: ', teamComputed)

// Example 6
// Not using computed properties
console.log('\n')
function addProp(object, key, value) {
  const copy = { ...object }
  copy[key] = value
  return copy
}
const res = addProp(teamComputed, 'happy', ':)')
console.log('addProp res: ', res)

// Example 6
// Using computed properties
console.log('\n')
const addPropComputed = (object, key, value) => {
  return {
    ...object,
    [key]: value,
  }
}
const resComputed = addPropComputed(teamComputed, 'sad', ':(')
console.log('resComputed: ', resComputed)

// Example 7
const resComputed2 = addPropComputed(
  { [role]: 'ElfGodd' },
  'sports',
  ':jogging'
)

console.log('resComputed2: ', resComputed2)
