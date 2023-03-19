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
/*
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

// Example 7
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

// Example 8
const resComputed2 = addPropComputed(
  { [role]: 'ElfGodd' },
  'sports',
  ':jogging'
)

console.log('resComputed2: ', resComputed2)
*/

// ******************************
// Adding Methods to Objects ******************************
// Example 9
/*
const add = function (x, y) {
  return x + y
}

const math = {
  add,
}

console.log('math: ', math)
console.log('math.add(2, 5): ', math.add(2, 5))
console.log('add(2, 5): ', add(2, 5))

// Example 10
console.log('\n')
const math2 = {
  numbers2: [1, 2, 3, 4, 5],

  add2: function (x, y) {
    return x + y
  },
  multiply2: function (x, y) {
    return x * y
  },
}

console.log('math2.add2: ', math2.add2(10, 26))
console.log('math2.multiply2: ', math2.multiply2(3700, 1000))
console.log('math2.numbers2: ', math2.numbers2)
console.log('math2: ', math2)
*/

// ******************************
// Method Shorthand Syntax ******************************
// Example 11
/*
console.log('\n')
const auth = {
  username: 'ElfGodd',
  login() {
    console.log('LOGGED YOU IN!')
  },
  logout() {
    console.log('GOODBYE')
  },
}

console.log('auth: ', auth)
*/

// ******************************
// Intro to Keyword THIS ******************************
// Example 12

// THIS here refers to the Window Object in the browser
function sayHi() {
  console.log('HI')
  // (this) is an object and it refers to the current execution scope
  console.log('sayHi() this: ', this)
}

sayHi()

console.log('\n')
const greet = function() {
  console.log('greet() this: ', this)
}

greet()
