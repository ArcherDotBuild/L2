// Test the JS script before starting
// alert("It's working!");

// ******************************
// IF ******************************
/* // Example 1
console.log('Example 1:')
let rating = 3
if (rating === 3) {
  console.log("1. It's true")
  console.log('1. YOU ARE A SUPERSTAR!')
}

console.log('\n')
console.log('Example 2:')
// Example 2
// This one is false, code will not run
if (rating === 2) {
  console.log("2. It's true")
  console.log('2. YOU ARE A SUPERSTAR!')
}

console.log('\n')
console.log('Example 3:')
// Example 3
// If a number is odd
let num = 37
if (num !== 0) {
  console.log('ODD NUMBER!')
} */

// ******************************
// ELSE IF ******************************
/* // Example 4
// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?
rating = 22

if (rating === 3) {
  console.log('YOU ARE A SUPERSTAR!')
} else if (rating === 2) {
  console.log('MEETS EXPECTATIONS')
} else if (rating === 1) {
  console.log('NEEDS IMPROVEMENT')
} else {
  console.log('INVALID RATING!')
} */

// ******************************
// ELSE ******************************
// Example 5
// Performance Review
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - etf?
/* rating = '2'

if (rating === 3) {
  console.log('YOU ARE A SUPERSTAR!')
} else if (rating === 2) {
  console.log('MEETS EXPECTATIONS')
} else if (rating === 1) {
  console.log('NEEDS IMPROVEMENT')
} else {
  console.log('INVALID RATING!')
}
 */

// Example 6
/* let highScore = 1430
let userScore = 1200

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`)
  highScore = userScore
} else {
  console.log(
    `Good Game. Your score of ${userScore} did not
    beat the high score of ${highScore}`
  )
} */

// ******************************
// Nesting Conditionals ******************************
// Example 7
/* let password = 'cat dog'

if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    console.log('Password cannot include spaces')
  } else {
    console.log('Valid password!!')
  }
} else {
  console.log('Password too short!')
} */

// ******************************
// Truthy & Falsey Values ******************************
// Example 8
/* let mystery = ''

if (mystery) {
  console.log('TRUTHY')
} else {
  console.log('FALSY')
} */

// Example 9
/* let loggedInUser = null

if (loggedInUser) {
  console.log('you are logged in')
} else {
  console.log('please log in')
} */

// ******************************
// Logical AND (&&) ******************************
// Example 10
/* let password2 = 'taco tuesday'
if (password2.length >= 6 && password2.indexOf(' ') === -1) {
  console.log('Valid password')
} else {
  console.log('Invalid password')
} */

// Example 11
/* num = 3
if (num >= 1 && num <= 10) {
  console.log('Number is between 1 and 10')
} else {
  console.log('Please guess a number between 1 and 10')
} */

// ******************************
// Logical OR (||) ******************************
// Example 12
/* let age = 26

if (age < 6 || age >= 65) {
  console.log('You get in for free')
} else {
  console.log('That will be $10 please')
} */

// Example 13
// purple orchid violet
/* let color = 'purple'
if (color === 'purple' || color === 'orchid' || color === 'violet') {
  console.log('great choice!')
} */

// ******************************
// NOT (!) ******************************
// Example 14
// If there isn't a logged in user
/* let loggedInUser = 'user123'
if (!loggedInUser) {
  console.log('get out of here')
} else {
  console.log('thanks for logging in')
} */

// Example 15
/* let flavor = 'watermelon'
if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log('we dont have that flavor!')
}

// Example 16
flavor = 'grape'
if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('we dont have that flavor!2')
} */

// ******************************
// SWITCH ******************************
// Example 17
/* let day = 7

console.log('if, else if and else:')
if(day === 1) {
  console.log('monday')
} else if(day === 2) {
  console.log('tuesday')
} else if(day === 3) {
  console.log('wednesday');
} else if(day === 4) {
  console.log('thursday');
} else if(day === 5) {
  console.log('friday');
} else if (day === 6) {
  console.log('saturday')
} else if (day === 7) {
  console.log('sunday');
} else {
  console.log('not a valid day')
}
 */

/* let day = 5
console.log('\n')
console.log('Switch Statement:')
switch (day) {
  case 1:
    console.log('monday')
    break
  case 2:
    console.log('tuesday')
    break
  case 3:
    console.log('wednesday')
    break
  case 4:
    console.log('thursday')
    break
  case 5:
    console.log('friday')
    break
  case 6:
    console.log('saturday')
    break
  case 7:
    console.log('sunday')
    break
  default:
    console.log('not a valid day')
} */

// Example 18
/* let emoji = 'lips'

switch (emoji) {  
  case 'happy face':
  case 'sad face':
    console.log('yellow')
    break
  case 'eggplant':
    console.log('purple')
    break
  case 'lips':
  case 'heart':
    console.log('red')
    break
  default:
    console.log('no face in this data')
} */

// ******************************
// TERNARY OPERATOR ******************************
// Example 19
/* num = 2

if (num === 7) {
  console.log('lucky!')
} else {
  console.log('bad')
}

num === 7 ? console.log('lucky!') : console.log('bad')
 */
/* 
console.log('\n')
// Example 20
let statusUser = 'offline' // anything will run green
let color = null

if (statusUser === 'offline') {
  color = 'red'
} else {
  color = 'green'
}
console.log('statusUser: ', color)

color = statusUser === 'offline' ? 'red' : 'green'
console.log('statusUser: ', color)
 */