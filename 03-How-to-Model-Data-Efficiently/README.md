## 03-How-to-Model-Data-Efficiently

## 1. BOOLEANS

They are TRUE or FALSE

```
let isLoggedIn = true;
isLoggedIn = false;
isLoggedIn // false

let gameOver = false;
const isWaterWet = true;
```

Booleans are simple True or False values

- Yes or No
- 1 or 0
- 'true' // this is not a Boolean

### VARIABLES CAN CHANGE TYPE

```
let numDonuts = 12; // It's a Number
numDonuts = false; // Now it's a Boolean!
numDOnuts = 129873872; // Back to a Number
```

You probably wouldn't change a number to a boolean, but you can!

## 2. STRINGS

In JavaScript, Strings are pieces of text, or strings of characters.

We wrap them in quotes

```
let firstName = "Ziggy"; // Double quotes work
let lastName = 'Zagga' ; // Single quotes work
let msg = "Please do not feed the chimps!";
let animal = 'Dumbo Octopus'; // So do single quotes
let bad = "this is wrong'; // This DOES NOT work
let bad2 = "this is wrong; // This DOES NOT work
let bad3 = "this is "wrong""; // This DOES NOT work
let doubleQuotes = "he said, 'hahahaha'";
let singleQuotes = 'she said, "bye"';
let anotherTrick = 'I\'m Alberto';
```

```
typeof 'Hello? // string
typeof '101' // string
typeof 15 // number
```

Whether you use single or double quotes, just make sure you are consistent

```
let firstName = 'Alberto';
let lastName = 'Guzman';
firstName + lastName // "AlbertoGuzman"
let fullName = firstName + ' ' + lastName;
fullName // "Alberto Guzman"
hi + 1 // 'hi1'
```

## 3. STRING INDICES

### STRINGS ARE INDEXED

```
 C  H  I  C  K  E  N
[0][1][2][3][4][5][6]
```

Each character has a corresponging index (a positional number)

```
"hello".length // 5 characters
"".length // 0
" ".length // 1
```

```
let mySong = "Surfing' the USA";
mySong[0] // "S"
mySong[1] // "u"
mySong[7] // "'"
mySong[7] // white space
mySong[200] // undefined, there is nothing there

mySong[mySong.length - 1] // "A" last value of the s

mySong[0] = "X" // We can't change strings this way console.log(mySong); // "Surfing' the USA"
```

## 4. STRING METHODS

Strings come with a set of built-in methods, which are **actions** that can be performed on or with that particular string.

We can do thigs like...

- Searching within a string
- Replacing parts of a string
- Changing case (upper/lowecase)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

`thing.method()`

```
let firstName = 'Alberto';
firstName.toUpperCase() // "ALBERTO"
firstName // "Alberto"
let newFirstName = firstName.toUpperCase();
newFirstName // "ALBERTO"

firstName.toLowerCase() // "alberto"
```

### trim (removes white spaces)

```
let greeting = ' leave me alone plz ';
greeting.trim() // "leave me alone plz"
// removes white spaces at the beginning and at the end

// Chaining 2 methods
let color = " purple "
color.trim().toUpperCase() // "PURPLE"
```

## 5. More String Methods

`thing.method(arg)`  
Some methods accept **arguments** that modify their behavior, We pass these arguments inside of the parenthesses

### indexOf

```
let tvShow = 'catdog';

tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog); // 3
tvShow.indexOf('z'); // -1 (not found)

'baseball'.indexOf('ball') // 4

// It only tells me the first instance
'baseball'.indexOf('b') // 0

// It is case sensitive
'Baseball'.indexOf('b') // 4
```

### slice

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

```
let str = 'superalbertoishere'

// Starts at index 0 to index 5
str.slice(0, 5) // 'super'

// Takes a slice starting at index 5 all the way to the end
str.slice(5) // 'albertoishere'
```

```
let sport = 'Baseball';
'baseball'.slice(4) // ball
sport // 'Baseball' remember strings are inmutable, it's not changing the value in the variable

sport.slice(100); // '' Empty string
```

```
// slice method is not inclusive it stops before the index passed as argument
"superhero".slice(0,5); // 'super' starts at 0 index and ends at 4 index

"superhero".slice(5,9); // 'hero'
'superhero'.slice(5, 'superhero'.length) // 'hero'

// Removing the dollar sign from a price
'$50.60'.slice(1); // '50.60'
```

### replace

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace

```
'baseball is entertaining'.replace('entertaining', 'ok')
// "baseball is ok";

'ha ha ha'.replace('ha', 'hee); // "hee ha ha"
// Notice that it only replaces the first one

'ha ha ha'.replace('haaaa', 'heee');
// No Error! but it won't replace nothing
```

## 6. String Quiz

```
const age = '5' + '4' // '54'

'pecan pie'[7] // 'i'

'PUP'[3] // undefined

// What is the value of song?
let song = 'london calling';
song.toUpperCase() // 'LONDON CALLING'
song // 'london calling'

let userInput = '  TODD@gmail.com';
let cleanedInput = userInput.trim().toLowerCase();
cleanedInput // 'todd@gmail.com'

let park = 'Yellowstone';
const index = park.indexOf('Stone');
index // -1

let yell = 'GO AWAY!!';
let index = yell.indexOf('!');
index // 7

'GARBAGE!'.slice(2).replace('B', ''); // 'RAGE!'
```

## 7. String Escape Characters

### STRING ESCAPES

- \' - single quote
- \" - double quote
- \n - newLine
- \\ - backslash

```
'he said i ain\'t happy' // "he said i ain't happy"
"he said i ain\"t happy" // 'he said i ain"t happy'
"he said \"i ain\'t happy\"" // `he said "i ain't happy"`
"hello \n goodbye" // adds a new line after hello
"hello\\world" // "hello\world"
```

## 8. STRING TEMPLATE LITERALS
Template literals are strings that allow embedded expresions, which will be evaluated and then turned into a resulting string.

```
`I counted ${3 + 4} sheeps`; // "I counted 7 sheeps"
`I counted {3 + 4} sheeps`; // This is in ReactJS JSX
```
This are BACK-TICKS not single quotes

```
`TEMPLATE LITERALS` // "TEMPLATE LITERALS"
`' "` // "' ""
`he said 'lol'` // "he said 'lol'"
```

```
let username = 'ElfGodd';
`Welcome back, ${username}` // "Welcome back, ElfGodd"

`GAME OVER ${username.toUpperCase()}`
// "GAME OVER ElfGodd"
```

```
`You owe me ${100 + 218937}`
// 'You owe me 219037'

'${1+3}' // "${1+3}"
${1+5} // 6

let animal = "pig";
let sound = "oink";
`${animal} says ${sound}` // "pig says oink"
`${animal} says ${sound}.toUpperCase()`
// "pig says OINK"
```
```
let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
`You bought ${quantity} ${item}, total price: $${price * quantity}`
// "You bought 4 cucumbers, total price: $7.96"
```

```
const minAge = 21;
let yourAge = 19;
`You must be ${minAge} or older to enter. Come back in ${minAge - yourAge} years`
// "You must be 21 or older to enter. Come back in 2 years"


`poasted ${elapsedTime} minutes ago by ${user}`
```

## 9. Null & Undefined

NULL & UNDEFINED
```
null // null
undefined // undefined
```
- Null
  - Intentional absense of any value
  - Must be assigned
```
// No one is logged in yet...
let loggedInUser = null; // value is explicitly nothing
loggedInUser // null

// A user logs in...
loggedInUser = 'Alberto Guzman';
```

- Undefined
  - Variables that do not have an assigned value are  undefined

```
let colorNow;
colorNow // undefined
colorNow = undefined
colorNow // undefined
"lol"[4] // undefined
```

## 10. The Math Object & Random Numbers

### MATH OBJECT
Contains properties and methods for mathematical constants and functions

```

// Type Math in the console or Math. and check the auto complete with all the tons of methods

Math.PI // 3.141592653589793

// Rounding number:
Math.round(4.6) // 5

// Rounding number:
Math.round(4.4) // 4

// Absolute value:
Math.abs(-456) // 456

// Raises 2 to the 5th power:
Math.pow(2,5) // 32

// Removes decimal:
Math.floor(3.999) // 3

Math.floor(3.657) // 3
```

### RANDOM NUMBERS
Math.random() gives us a random decimal between 0 and 1 (non-inclusive)
Math.random(); // 0.14502435424141957
Math.random(); // 0.8937425043112937
Math.random(); // 0.9759952148727442

### RANDOM INTEGERS
Let's generate random numbers between 1 and 10 const 

```
const step1 = Math.random(); // 0.5961104892810127
// This will give me a number from 0 to 9
// It won't include the number 10
const step2 = step1 * 10 // 5.961104892810127
const step3 = Math.floor(step2); // 5
// If i don't add 1 it will give me sometimes the number 0
const step4 = step3 + 1;

// Run all steps in a single line
Math.floor(Math.random() X 10) + 1;
```

## 11. TYPE OF
```
typeof 'hello'; // "string"
typeof 2; // "number"
typeof true; // "boolean"
typeof undefined // "undefined"
typeof null // "object"

console.log(typeof 'hello'); // string
let myNumberTypeOf = 100
console.log(typeof myNumberTypeOf); // number
```

## 12. parseInt & parseFloat
User to parse strings into numbers, but watch out for **NaN**!

```
parseInt('24') // 24
parseInt('24.987') // 24
parseInt('28dayslater') // 28
parseInt('$28') // NaN
parseInt('i ate 3 shramp') // NaN
parseInt('28x28') // 28
parseInt('22') + 1 // 22

parseFloat('24.987') // 24.987
parseFloat('7') // 7
parseFloat('i ate 3 shramp') // NaN
parseFloat('99cents') // 99
parseFloat('cents99') // NaN
parseFloat('28x28') // 28
```