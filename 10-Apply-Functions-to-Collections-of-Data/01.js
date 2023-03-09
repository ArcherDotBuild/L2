// Test the JS script before starting
// alert("It's working!");

// ******************************
// forEach ******************************
// Example 1

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

// ====================
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