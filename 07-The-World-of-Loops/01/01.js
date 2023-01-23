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

// Example 7
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
]

let totalScore = 0
for (let i = 0; i < gameBoard.length; i++) {
  console.log(gameBoard[i])
  let row = gameBoard[i]
  for (j = 0; j < row.length; j++) {
    console.log(row[j])
    totalScore += row[j]
  }
}
console.log('gameBoard totalScore: ', totalScore)
