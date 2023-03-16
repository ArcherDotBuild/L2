## 11-A-Few-Miscellaneous-JS-Features

## 1. New JS Features Intro

### NEW-ISH FEATURES

New JS features like:

- Arrow Functions
- String Template Literals
- Let & Const
- For...of
- For...in
- Exponent Operator
- String.includes()
- Array.includes()
- Object.values()
- Rest & Spread
- Destructuring
- Default
- Object Enhancements
- Classes
- Async Functions

### GOALS

- Work with rest & spread
- Add default function parameters
- Understand destructuring

## 2. Default Parameters

Default parameters most be placed at the end of the parameters, at the beginning they won't work.

The Old Way:

```
function multiply(a, b) {
  b = typeof b !== 'undefined' ? b : 1;
  return a * b;
}

multiply(7); // 7
multiply(7, 3); // 21
```

The New Way function:

```
function multiply(a, b = 1) {
  return a * b;
}

multiply(4); // 4
multiply(4, 5); // 20
```

All the default parameters need to come at the end of your parameter list. You can't make the first thing default and then have non default parameters afterwards.

```
function multiply(x = 1, y) { // Wrong
  return x * y;
}
```

One really important note about default parameters is that the order absolutely matters. JavaScript knows which one needs to have a default value is purely based off of the order.

```
const greet = (person, greeting = 'hi', punctuation = '!') => {
  return console.log(`${greeting}, ${person} ${punctuation}`);
}

greet('anya') // hi, anya !
greet('anya', '?') // ?, anya !
```

## 3. Spread for Function Calls

Spread syntax allows an iterable such as an array to be **expanded** in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```
const num = [9, 3, 2, 8];
Math.max(nums); // NaN
// Use spread!
Math.max(...nums); // 67
// Same as calling:
// Math.max(9, 3, 2, 8)
```

Expands an iterable (array, string, etc.) into a list of arguments.

Spread allows us to break this up into five separate arguments `const nums = [45, 23, 34, 7, 5]`.

Whatever you're spreading when you spread it into a function call, that iterable is iterated over. Each element is passed as a standalone separate argument.

## 4. Spread in Array Literals

Create a new array using an existing array Spreads the elements from one array into a new array.

```
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[ ...nums1 ...nums2 ];
// [1, 2, 3, 4, 5, 6]

[ 'a', 'b', ...nums2 ];
// ['a', 'b', 4, 5, 6]

[ ...nums1, ...num2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

It takes an iterable and it spreads it out. It takes the individual pieces and in the case of an array, it copies them over into a new destination array. So we can use it to combine arrays to make a copy of an array. There is a whole bunch of situations where you may end up using spread.

**One of the most common use cases for spread is actually just to make a copy of an array**

```
const nums = [1, 2, 3];
const copy = nums
copy === nums // true
// They are referencing the same reference, they're pointing to the same reference
```

## 5. Spread in Object Literals

Copies properties from one object into another object literal.

```
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true };
// { family: "Caninae", furry: true, isPet: true }

const lion = { ...feline, genus: 'Panthera' };
// { legs: 4, family: 'Felidae', genus: 'Panthera' }

const catDog = { ...feline, ...canine };
// { legs: 4, family: 'Caninae', furry: true }
```

We know what happens in an object where we try and have two properties with the same key, they just overwrite each other.

We can also use spread to create a clone of an object so that we don't have the exact same reference. But just like with arrays, this is only one level deep. It wil not clone nested objects or nested arrays.

## 6. The Arguments Object (not new)

### REST

**It looks like spread, but it's not!**, we use the exact same ...three dot syntax, dot, dot, dot. But rest behaves very differently. It's almost like the opposite of spread.

What is does is instead of spreading data out into aguments or into a new object or an array, it actually collects things down into a single array.

It's used when we want to make functions that accept an unlimited number of arguments or a variable number of arguments.

### THE ARGUMENTS OBJECT

- Available inside every function
- It's an array-like object
  - Has a length property
  - Does not have array methods like push/pop
- Contains all the arguments passed to the function
- Not available inside of arrow functions!

**This is the old way**

```
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

sumAll(8, 4, 3, 2); // 17
sumAll(2, 3); // 5
```

```
function sum() {
  // Error: arguments.reduce is not a function
  return arguments.reduce((total, currVal) => {
    return total + currVal
  })
}
sum(1, 2, 3);
```

Arguments is not actually an array. It's an array like object. It looks like an array because we can access arguments of zero or we can loop over it, but it does not have array methods.

If i wanted to make this work using the arguments object, what i could do is turn it into and array.

One way of doing that we just saw is spread, dot, dot, dot arguments.

**Arguments Object don't work in Arrow Functions**

- It's not a real array
- You have to turn it into an array if you want array methods
- There is no functionality provided for collecting remaining arguments
- Arguments contains every argument passed in, even if we captured the first two in parameter names
- The arguments object does not exist at all in arrow functions

## 7. Rest Parameters (new)

Collects all remaining arguments into an actual array

```
function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}

sumAll(1, 2); // 3
sumAll(1, 2, 3, 4, 5); // 15
```

We add 3 dots ... and then we decide on a name that will be the name of they array that contains all the arguments.

We can use it to collect the remaining arguments, not just every argument, instead it collects the remaining arguments that have not been matched with a parameter.

## 8. Destructuring Arrays

### DESTRUCTURING

A short, clean syntax to 'unpack':

- Values from arrays
- Properties from objects

Into distinct variables.

### ARRAY Destructuring

```
const raceResults = [ 'Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [ gold, silver, bronze ] = raceResults;
gold; // "Eliud Kipchoge"
silver; // "Feyisa Lelisa"
bronze; // "Galen Rupp"

const [ fastest, ...everyoneElse ] = raceResults;
fastest; // "Eliud Kipchoge"
everyoneElse; // ["Feyisa Lelisa", "Galen Rupp"]
```

When we destructure an array, we can unpack specific values out of that array intoa new variables.