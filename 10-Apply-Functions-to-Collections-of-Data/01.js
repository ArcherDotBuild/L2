// Test the JS script before starting
// alert("It's working!");

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
  },
]

// ******************************
// forEach ******************************
// Example 1
/*
console.log('\n ');
const numbers = [20, 21, 22, 23, 24, 25, 26, 27]

numbers.forEach(function (element) {
  console.log(element)
})

console.log('\n')
// Example 2
numbers.forEach(function (num) {
  console.log(num * 2)
})

console.log('\n')
// Example 3
function printTriple(n) {
  console.log(n * 3)
}

numbers.forEach(printTriple)

console.log('\n')
// Example 4
books.forEach(function (book) {
  console.log(book.title.toUpperCase())
})

console.log('\n')
for (let book of books) {
  console.log(book.title.toUpperCase())
}

console.log('\n')
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title.toUpperCase())
}

console.log('\n')
// printing the Index of numbers
numbers.forEach(function(num, index) {
  console.log(index, num)
})
*/

// ******************************
// Map ******************************
// Example 5
/*
console.log('\n')
const numbers = [20, 21, 22, 23, 24, 25, 26, 27]
const words = ['asap', 'byob', 'rsvp', 'diy']

const doubles = numbers.map(function (num) {
  return num * 2
})
console.log('numbers: ', numbers)
console.log('doubles: ', doubles)

const doubles2 = []
for (let num of numbers) {
  doubles2.push(num * 2)
}

console.log('forOf doubles2: ', doubles2)

console.log('\n')
// Example 6
const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  }
})

console.log('numDetail: ', numDetail)

console.log('\n')
// Example 7
const abbrevs = words.map(function (word) {
  return word.toUpperCase().split('').join('.')
})

console.log('words: ', words)
console.log('abbrevs: ', abbrevs)

console.log('\n')
// Example 8
const titles = books.map(function (book) {
  return book.title
})

console.log('titles: ', titles)
*/

// ******************************
// Arrow Functions Intro ******************************
// Example 9
/*
const square = (x) => {
  return console.log(`Square of ${x} is: `, x * x)
}
square(2)
square(10)

console.log('\n')
// Example 10
// With 1 parameter we dont need the parenthesis
const isEven = (num) => {
  return console.log(`Num: ${num} isEven?: `, num % 2 === 0)
}
isEven(99)
isEven(100)

console.log('\n')
// Example 11
const multiply = (x, y) => {
  return console.log(`Multiplication ${x} * ${y} is: `, x * y)
}
multiply(4, 7)
multiply(100, 7)

console.log('\n')
// Example 12

// 1 parameter no needs for parens
const helloWorld = (string) => {
  return console.log('print: ' + string)
}

helloWorld('hello-world')

// With no parameters
const greet = () => {
  console.log('hi!')
}

greet()
*/

// ******************************
// Arrow Functions Implicit Returns ******************************
// Example 13
/*
console.log('\n')
const squareNormal = (n) => {
  console.log(`${n} * ${n}: `, n * n)
}

squareNormal(6)

console.log('\n')
const square = (n) => console.log(`${n} * ${n}: `, n * n)

square(11)

console.log('\n')
// Example 14
const nums = [1, 2, 3, 4, 5, 6, 7, 8]
const doublesX1 = nums.map(function (n) {
  return console.log(`doublesX1: ${n} * 2`, n * 2)
})

console.log('\n')
const doublesX2 = nums.map((n) => {
  return console.log(`doublesX2: ${n} * 2`, n * 2)
})

console.log('\n')
const doublesX3 = nums.map((n) => console.log(`doublesX3: ${n} * 2`, n * 2))
console.log('\n')
const doublesX4 = nums.map((n) => n * 2)
console.log('doublesX4: ', doublesX4)

console.log('\n')
// Example 15
const parityList = nums.map(function (n) {
  if (n % 2 === 0) return console.log(`${n} is even!.`)
  return console.log(`${n} is odd`)
})

console.log('\n')
const parityListArrow = nums.map((n) => {
  if (n % 2 === 0) return console.log(`${n} is even!`)
  return console.log(`${n} is odd`)
})

console.log('\n')
const parityTernary = nums.map((n) =>
  n % 2 === 0 ? console.log('isEven') : console.log('odd')
)
console.log('\n')
const partityTernary1Line = nums.map((n) =>
  n % 2 === 0 ? console.log('isEven') : console.log('odd')
)
*/

// ******************************
// Array.find ******************************
// Example 16
/*
console.log('\n')
let movies = [
  'The Fantastic Mr. Fox',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds',
]
const movie = movies.find((movie) => {
  return movie.includes('Mrs')
})

console.log('movie: ', movie)

// Makes sure Mrs comes at the very beginning of the string
const movie2 = movies.find((m) => m.indexOf('Mrs') === 0)
console.log('movie2: ', movie2)

console.log('\n')
const goodBook = books.find((b) => b.rating >= 4.3)
console.log('goodBook: ', goodBook)

const neilBook = books.find((b) => b.authors.includes('Neil Gaiman'))
console.log('neilBook: ', neilBook)
*/

// ******************************
// Filter ******************************
// Example 17

console.log('\n')
const nums = [34, 35, 67, 54, 109, 102, 32, 9]

const odds = nums.filter((n) => n % 2 === 1)
console.log('odds: ', odds)
const evens = nums.filter((n) => n % 2 === 0)
console.log('evens: ', evens)
const bigNums = nums.filter((n) => n > 50)
console.log('bigNums: ', bigNums)

const bookz = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays'],
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
]

console.log(bookz)

console.log('\n')
// Example 18
const goodBooks = bookz.filter((b) => b.rating > 4.3)
console.log('goodBooks: ', goodBooks)

console.log('\n')
const fantasyBooks = bookz.filter((book) => book.genres.includes('fantasy'))
console.log('fantasyBooks: ', fantasyBooks)

console.log('\n')
const shortForm = bookz.filter(
  (book) =>
    book.genres.includes('short stories') || book.genres.includes('essays')
)
console.log('shortForm: ', shortForm)

console.log('\n')
// Example 19
const query = 'The'
const results = bookz.filter((book) => {
  return book.title.toLowerCase().includes(query.toLowerCase())
})
console.log('results: ', results)
*/