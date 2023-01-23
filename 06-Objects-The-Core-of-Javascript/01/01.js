// Test the JS script before starting
// alert("It's working!");

// ******************************
// Creating Object Literals ******************************
// Example 1
/* 
const fitAppData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avfGoodSleep: '2:13',
  45: 'forty five', // fitBitData[45]
}
console.log(fitAppData)
console.log(fitAppData.length) // undefined
console.log(fitAppData.totalMiles)
console.log(fitAppData.avgCalorieBurn)
console.log(fitAppData.avfGoodSleep)
// console.log(fitBitData.45); ERROR!
console.log(fitAppData[45])

console.log('\n')
let data = { a: 1 }
console.log(data)

let data2 = { a: 1, b: 2, c: 3, d: 4 }
console.log(data2) */

// console.log('\n')
// ******************************
// Accessing Object Properties ******************************
// Example 2
/* 
const numbers = {
  100: 'one hundred',
  16: 'sixteen'
}
// console.log(numbers.100); // Unexpected number
console.log(numbers[100]);
console.log(numbers['100'])
console.log(numbers[16]);

console.log('\n')
const numbers2 = {
  '100': 'one hundred',
  '16': 'sixteen',
  '76 trombones': 'great song!'
};
console.log(numbers2['100']);
console.log(numbers2['16']);
console.log(numbers2['76 trombones']);
console.log(numbers2['10'+'0']); // '100'

console.log('\n')
// Example 3
const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
}

palette.red // '#eb4d4b'
palette.blue // '#30336b'
// palette[blue] // Uncaught ReferenceError: blue is not defined
palette['blue'] // '#30336b'

let mysteryColor = 'yellow';
// It would not work at all because now it's looking for a property
// actually called mystery color and there isn't one
// We only have red, yellow and blue those are the only keys
// It doesn't throw an error, it just tells us undefined
// Just like an array if you're trying to access something that
// does not exist in that array

console.log([1, 2, 3][99]) // undefined
console.log(palette.mysteryColor) // undefined property doesn't exist 'color'
console.log(palette['123 hello hi']); // undefined
console.log(palette.helloworld) // undefined
console.log(palette[mysteryColor]) // '#f9ca24'
console.log(palette['bl'+'ue']); // '#30336b'
 */

// console.log('\n')
// ******************************
// Adding and Updating Properties ******************************
// Example 4
/* 
const userReviews = {
}
console.log(userReviews)
// Using brackets
userReviews['queenBee49'] = 4.0
console.log(userReviews)
console.log(userReviews['queenBee49'])

console.log('\n')
// Using dot notation
userReviews.mrSmith78 = 3.5
console.log(userReviews['mrSmith78'])

console.log(userReviews.colt); // undefined
userReviews.colt = '5'
console.log(userReviews.colt)
console.log(typeof userReviews.colt) // String
userReviews['colt'] = 5
console.log(userReviews.colt)
console.log(typeof userReviews.colt); // Number
console.log(userReviews)

console.log('\n')
userReviews.queenBee49 += 2
console.log(userReviews.queenBee49)

userReviews.mrSmith78++
console.log(userReviews.mrSmith78) */

// console.log('\n')
// ******************************
// Nested Arrays & Objects ******************************
// Example 5
/* 
const student = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  strengths: ['Programmer', 'Futbol'],
  exams: {
    midterm: 92,
    final: 88,
  },
}
let avg = (student.exams.midterm + student.exams.final) / 2
console.log('avg: ', avg)
console.log(
  'Student strength:',
  student.strengths[0],
  ',',
  student.strengths[1]
) */
/* 
// Example 6
console.log('\n')
const tetrisGame = {
  player1: {
    username: 'ElfGodd',
    playingAs: 'X',
  },
  player2: {
    username: 'Josue',
    playingAs: 'O',
  },
  board: [
    ['0', null, 'X'],
    ['X', 'O', null],
    [null, 'O', 'X'],
  ],
}
console.log(tetrisGame.player1.username)
console.log(tetrisGame.player2.username)
// Get length of array inside object
// 2 ways of doing this
console.log(tetrisGame.board.length);
console.log(tetrisGame['board'].length)
console.log('\n')
for(i = 0; i < tetrisGame.board.length; i++) {
  for (j = 0; j < tetrisGame.board.length; j++) {
    console.log(tetrisGame.board[i][j])
  }
}
 */
/* 
// Example 7
console.log('\n')
const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1,
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3,
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2,
  },
]

console.log(shoppingCart)
console.log(shoppingCart[0].product)
console.log(shoppingCart[1].price)
console.log(shoppingCart[2].quantity)
 */
// console.log('\n')
// ******************************
// Objects and Reference Types ******************************
// Example 8
/* 
const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b',
}

const palette2 = palette
palette2.green = '#ebf876'
// You'll see that pallet has been updated, as has pallet2
// The're referring to the same object, the same thing in memory
console.log(palette);
 */

// console.log('\n')
// ******************************
// Array Object Equality ******************************
// Example 9
/* 
let nums = [1, 2, 3];
let mystery = [1, 2, 3];

console.log(nums == mystery); // false
console.log(nums === mystery); // false

let moreNums = nums;
console.log(nums === moreNums); // true

console.log('\n')
const user = {
  username : 'ElfGodd',
  email: 'elfgodd@elfgodd.com',
  notifications: []
};

// false can't compare Reference Types, new place in memory
// They look the same, but each time i type
// empty array, it's a new place in memory
console.log('[] === []: ', [] === [])

// This will not work
if (user.notifications === []) {
  console.log('user.notifications === []' + 'NO NEW NOTIFICATIONS!');
}

console.log('\n')
if (user.notifications.length === 0) {
  console.log('NO NEW NOTIFICATIONS!');
}

if (!user.notifications.length) {
  console.log('NO NEW NOTIFICATIONS!');
}

console.log('\n')
console.log({} === {}); // false
console.log({a:1} === {a:1}); // false

let data1 = {a: 1};
let data2 = {a: 1};
console.log(data1 === data2); // false
let compareObject = data2;
console.log(data1 === compareObject); // false
let data3 = data1;
console.log(data3 === data1); // true */