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