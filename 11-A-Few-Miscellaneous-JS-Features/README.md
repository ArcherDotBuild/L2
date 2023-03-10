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

Spread allows us to break this up into five separate arguments `const nums = [45, 23, 34, 7, 5]`

Whatever you're spreading when you spread it into a function call, that iterable is iterated over. Each element is passed as a standalone separate argument.
