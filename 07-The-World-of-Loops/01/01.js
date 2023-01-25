// Test the JS script before starting
// alert("It's working!");

// ******************************
// For Loops ******************************
// Example 1
/* 
for (let i = 1; i <= 3; i++) {
  console.log('Hello: ', i)
}

console.log('\n')
for (let i = 1; i <= 10; i += 3) {
  console.log('i +=3: ', i)
}

console.log('\n')
for (let i = 1; i <= 32; i *= 2) {
  console.log('i *= 2: ', i)
}

console.log('\n')
for (num = 1; num <= 5; num++) {
  console.log(`${num}x${num} =`, num * num)
  console.log(`${num}x${num} = ${num * num}`)
} */
/* 
// Example 2
console.log('\n')
for (let i = 200; i >= 0; i -= 25) {
  console.log(i)
}
 */

// ******************************
// For Loops & Arrays ******************************
// Example 3
/* 
const examScores = [98, 77, 84, 91, 57, 66]

for (let i = 0; i < examScores.length; i++) {
  console.log(`Exam ${i}, Score: ${examScores[i]}`)
} */

console.log('\n')
// Don't comment this Array i will use it in more examples
const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86,
  },
  {
    firstName: 'Artemis',
    grade: 97,
  },
  {
    firstName: 'Hera',
    grade: 72,
  },
  {
    firstName: 'Apollo',
    grade: 90,
  },
]

// Example 4
/* for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i]
  // This prints each object in the array
  // console.log(student);
// {firstname: 'Zeus', grade: 86}
// {firstName: 'Artemis', grade: 97}
// {firstName: 'Hera', grade: 72}
// {firstName: 'Apollo', grade: 90}

  // Now the variable has each student object
  // I will print each one in the console
  console.log(`${student.firstName} scored: ${student.grade}`)
} */
/* 
console.log('\n')
// Example 5
const word = 'stressed'
let reversedWord = ''
for (let i = word.length - 1; i >= 0; i--) {
  // This prints d, e, s, s, e, r, t, s
  // console.log(word[i])

  reversedWord += word[i]
  console.log(reversedWord)
}
console.log('Original word: ', word)
console.log('reversedWord: ', reversedWord)

console.log('\n')
let total = 0
for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i]
  total += student.grade
}
console.log('total: ', total)
console.log('Average grades of students: ', total / myStudents.length) */

// ******************************
// Nested For Loops ******************************
// Example 6
/* 
for (let i = 1; i <= 5; i++) {
  console.log('OUTER LOOP:', i)
  for (let j = 10; j >= 0; j -= 2) {
    console.log(' INNER LOOP:', j)
  }
} */
/* 
// Example 7
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
]

let totalScore = 0
for (let i = 0; i < gameBoard.length; i++) {
  console.log(gameBoard[i]);
  let row = gameBoard[i]
  for (j = 0; j < row.length; j++) {
    console.log(row[j])
    totalScore += row[j]
  }
}
console.log('gameBoard totalScore: ', totalScore)
 */

// console.log('\n')
// ******************************
// Intro to While Loops ******************************
// Example 8
/* 
let j = 0
while (j <= 5) {
  console.log('j: ', j)
  j++
} // 0, 1, 2, 3, 4, 5
 */
/* 
// Example 9
const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)
// while (some condition)
// in the loop, update or attempt to make that condition false
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`)
  guess = Math.floor(Math.random() * 10)
}
console.log(`Target: ${target} Guess: ${target}`)
console.log('CONGRATS YOU WIN!')
 */

// console.log('\n')
// ******************************
// Break Keyword ******************************

// Example 10
// break: it's not very commonly used in a for loop
// because why not just write this for loop to go
// from 0 to 5 instead of 0 through 10 and
// then stopping halfway through
/* 
for (let i = 0; i < 10; i++) {
  console.log(i)
  if (i === 5) {
    break
  }
}
 */
/* 
// Example 11
const targetWhile = Math.floor(Math.random() * 10)
let guessWhile = Math.floor(Math.random() * 10)
while (true) {
  if (targetWhile === guessWhile) break
  console.log(`Target: ${targetWhile} Guess: ${guessWhile}`)
  guessWhile = Math.floor(Math.random() * 10)
}
console.log(`Target: ${targetWhile} Guess: ${targetWhile}`)
console.log('CONGRATS YOU WIN!')
*/

// console.log('\n')
// ******************************
// For...Of Intro ******************************
// Example 12
/* 
let subreddits = ['soccer', 'popheads', 'cringe', 'books']

for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i])
}

console.log('\n')
for (let sub of subreddits) {
  console.log(sub)
}

console.log('\n')
for (let char of 'cockadoodledoo') {
  console.log(char.toUpperCase())
}
*/

// console.log('\n')
// ******************************
// Comparing For and For...Of ******************************
// Example 13
/* 
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
] */
/* 
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i]
  let sum = 0
  for (let j = 0; j < row.length; j++) {
    console.log(row[j])
    sum += row[j]
  }
  console.log(`row ${i}: ${row} summed to ${sum}`)
} */

// console.log('\n')
/* 
// This is cleaner than the code above
for (let row of magicSquare) {
  let sum = 0
  for (let num of row) {
    sum += num
  }
  console.log(`${row} summed to ${sum}`)
} */
/* 
// Example 14
// Not to your advantage to use For...Of
const words1 = ['mail', 'milk', 'bath', 'black']
const words2 = ['box', 'shake', 'tub', 'berry']
// If you need an index, regular for loop is easier
for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`)
} */

// console.log('\n')
// ******************************
// For...Of with Objects ******************************
// Example 15

// Don't comment this object i will use it in more examples
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5,
}
/* 
console.log('Object.keys: ', Object.keys(movieReviews))
console.log('Object.values: ', Object.values(movieReviews))
console.log('\n')

for (let movie of Object.keys(movieReviews)) {
  console.log('Object.keys: ', movie)
}
console.log('\n')
for (let movie of Object.values(movieReviews)) {
  console.log('Object.values: ', movie)
}
console.log('\n')
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie])
}
 */
/* 
console.log('\n')
// Example 17
for(let movie of Object.keys(movieReviews)) {
  let score = movieReviews[movie]
  console.log(`I rated ${movie} ${score}/10`)
} */
/* 
console.log('\n')
// Example 18
const ratings = Object.values(movieReviews)
let total = 0
for (let r of ratings) {
  total += r
}
let avg = total / ratings.length
console.log('Average: ', avg)
console.log('\n')
console.log(Object.keys(movieReviews)[1])
console.log(Object.keys(movieReviews)[4])
 */

// console.log('\n')
// ******************************
// For...In Loops ******************************
// Example 19

/* const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
}

for (let prop in jeopardyWinnings) {
  console.log(prop)
  console.log(jeopardyWinnings[prop])
  console.log('\n')
  console.log(`${prop}, Earnings: ${jeopardyWinnings[prop]}`)
} */

/* console.log('\n')
// Example 20
let total = 0
for (let prop in jeopardyWinnings) {
  total += jeopardyWinnings[prop]
}
console.log(`Ken Jennings Total Earnings: ${total}`)
console.log(jeopardyWinnings['regularPlay'])
 */

/* console.log('\n')
// Example 21
for (let k in [88, 99, 77, 66]) {
  console.log('index: ', k)
}
console.log('\n')
console.log(jeopardyWinnings)
 */