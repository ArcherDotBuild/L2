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

## 4. Arrow Functions Implicit Returns
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