## 10-Apply-Functions-to-Collections-of-Data

## 1. Intro to Array Callback Methods

### ARRAY CALLBACK METHODS

- Arrays come with many built-in methods that accept callback functions

### GOALS

- Use the new arrow function syntax
- UNderstand and use these methods:
  - forEach
  - map
  - filter
  - find
  - reduce
  - some
  - every

## 2. forEach

Accepts a callback function.  
Calls the function once per element in the array.

```
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n)) {
  console.log(n * n); // prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function (el)) {
  if (el % 2 === 0) {
    console.log(el) // prints: 8, 6, 4, 6
  }
});
```

**We can also add a second a parameter to our callback to the function if we want to use the index**

## 3. Map

Creates a new array with the results of calling a call back on every element in the array

- The most used array method
- Map is used to create a new array from an existing array
- It can be used to simply duplicate an array
- It can be used to extract portions of an array
- It can be use to transform an array into a new array
- Example: double every number in an array, or reverse every string in the original array and make a new array with those reverse strings

```
const texts = ['rofl', 'lol, 'omg', 'ttyl'];

const caps = texts.map(function (t) {
  return t.toUpperCase();
})

texts; // ["rofl", "lol", "omg", "ttyl"]
caps; // ["ROFL", "LOL", "OMG", "TTYL"]
```

**It does not alter or update the original data**

Usually we use anonymous functions unless you have a predefined function that does exactly what you need.

## 4. Arrow Functions Intro

"Syntactically compact alternative" to a regular function expression

```
const square = (x) => {
  return x * x;
}

const sum = (x, y) => {
  return x + y
}

// Compare the 2 syntaxes
const sum = function(x, y) {
  return x + y;
}
```

Parens are optional if there's only one parameter:

```
const square = x => {
  return x * x;
}
```

Use empty parens for function w/ no parameters:

```
const singASong = () {
  return "LA LA LA LA LA LA";
}
```

## 5. Arrow Functions Implicit Returns

All these functions do the same thing:

```
const isEven = function (num) { // regular function expression
  return num % 2 === 0;
}
const isEven = (num) => { // arrow function with parens around param
  return num % 2 === 0;
}
const isEven = num => { // no parens around param
  return num % 2 === 0;
}
const isEven = num => { // implicit return
  num % 2 === 0;
}
const isEven = num => num % 2 ===0; // one-liner implicit return
```

There's an even more compact way of writing some arrow functions, this only works in certain scenarios, it's caled implicit return.

## 6. Array.find

Returns the value of the **first element** in the array that satisfies the provided testing function.

It retrieves an element from an array based off of a function that we pass in. The function needs to return true or false, and each time find will call that function with one of the elements and if that function returns true, then it's done. It will return the value of that element

**Array.find returns one value, one element that matches, even if there are 10 matches in a given array, it stops after it finds the very first one**

```
let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds" ]

let movie = movies.find(movie => {
  return movie.includes('Mrs.')
}) // "Mr. and Mrs. Smith"

let movies2 = movies.find(m => m.indexOf('Mrs') === 0);
// "Mrs. Doubtfire"
```

## 7. Filter

Creates a new array with all elements that pass the test implemented by the provided function

Filter allows us to filter out subsets of an array. Basically, we pass in a function which returns true or false, a test function. And if an element passes that function, it will be added into the returned or the result array.

```
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
  return n % 2 === 1; // our callback returns true or false
  // if it returns true, n is added to the filtered array
})
// [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
// [4, 3, 2, 1]
```

**Remember, you're not actually updating or mutating the original array**, but it gives you a return value that you can save and then work with. You pass in a test function that you write, it returns true or false.

If it's true for a given element, then that element is added to the filtered result array.

## 8. Some & Every

Both of these methods are boolean methods, they return true or false.

### EVERY

tests whether **all** elements in the array pass the provided function. It returns a Boolean value.

```
const words = ['dog', 'dig', 'log', 'bag', 'wag'];

words.every(word => {
  return word.length === 3;
}) // true

words.every(word => word[0] === 'd'); // false

words.every(w => {
  let last_letter = w[w.length - 1];
  return last_letter === 'g'
}) // true
```

### SOME

Similar to every, but returns true if ANY of the array elements pass the test function. It only cares if any of those elements pass the test.

```
const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters?
words.some(word => {
  return word.length > 4;
}) // true

// Do any words start with 'Z'?
words.some(word => word[0] === 'Z'); // false

// Do any words contain 'cake?
words.some(w => w.includes('cake)) // true
```

## 9. Revisiting Sort

arr.sort(compareFunc(a, b))

- If compareFunc(a, b) returns less than 0
  - Sort a before b
- If compareFunc(a, b) returns 0
  - Leave a and b unchanged with respect to each other
- If compareFunc(a, b) returns greater than 0
  - Sort b before a

**sort mutates the original array**

So if i wanted to just have two clear different results where i was not sorting the same array, i could either declare two variables prices with the same data.

**Or i could use a method to copy the data into a new array. Someting like Slice**

## 10. Reduce Intro

Executes a reducer function on each element of the array, **resulting in a single value**.

It takes an array of values and ir reduces them down to a single value

```
// Reduce format
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})
```

## 11. Reduce Pt2

```
let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73]

const  = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
})

topScore; // 99

// A shorter option w/ Math.max & implicit return
const topScore2 = grades.reduce((max, currVal) => (
  Math.max(max, currVal)
))
```

### INITIAL VALUE

```
[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}); // return 30

[4, 5, 6, 7, 8] .reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100); // <-- initial starting value (100) after the callback
// 130
```

## 12. Even More Reduce

TALLYING

```
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y']; const tally = votes.reduce((tally, vote) => { tally[vote] = (tally[vote] || 0) + 1; return tally; }, {}); // INITIAL VALUE: {}

tally; // { y: 7, n: 6}
```
