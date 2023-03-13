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

Default parameters most be placed at the end of the parameters, at the beginning they won't work

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
