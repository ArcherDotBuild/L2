## 07-The-World-of-Loops

## 1. Intro to Loops

### JS LOOPS Repeating Code

### GOALS

- Write for loops
- Write while loops
- Avoid infinite loops!
- Iterate over arrays and objects

### LOOPS

Doing things repeatedly

- Loops allow us to repeat code
  - "Print 'hello' 10 times
  - Sum all numbers in an array
- There are multiple types:
  - for loop
  - while loop
  - for...of loop
  - for...in loop

## 2. For Loops

This is the syntax of a For Loop

```
for (
  [initialExpression]; // initial value

  [condition]; // when to run the loop

  [incrementExpression] // how to change value each time
)
```

```
for (let i = 200; i <= 0; i -= 25) {
  console.log('DOES IT WORK?');
}
```

### ANOTHER EXAMPLE

```
// Start at 50
// Stop at 0, Keep going as long as i>= 0
// Subtract 10 on each iteration
for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
  // 50, 40, 30, 20 ,10, 0
}
```

## 3. Infinite Loops

You can write infinite loops and an infinite loop is something you absolutely want to avoid.

The idea behind the infinite loop is that you write a loop where the ending condition is never met.

```
// DO NOT RUN THIS CODE!
for (let i = 20; i >= 0; i++) {
  console.log(i);
} // BAD!!!

// Or this infinite loop
for(let i = 1; i !== 20; i+= 2) {
  console.log('Infinite Loop')
}
```

- Make sure you're going to the right direction
- Your logic makes sense here
- Generally try to avoid equality and non equality there
- Prefer to use greater > than or < less than when i can

## 4. For Loops & Arrays
To loop over an array, start at 0 and continue to the last index (length-1)

```
const animals = ['lions', 'tigers', 'bears'];

for(let i =0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
// 0 'lions'
// 1 'tigers'
// 2 'bears'
```

## 5. Nested For Loops
```
let str = 'LOL;
for (let i = 0; i <= 4; i++) {
  console.log("Outer:", i);  
  for (let j = 0; j < str.length; j++) {
    console.log(' Inner:', str[j]);
  }
}
```