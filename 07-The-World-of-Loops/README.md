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

## 6. Intro to While Loops

A while loop continues to run as long as its test condition is true.

The While loop is syntactically simpler and it's more flexible than a for loop in some ways.

```
// Basic syntax
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
} // 0 1 2 3 4
```

In these scenarios where we're simply iterating through numbers zero to five, i prefer a for loop, because we don't have to make the variable up top separately. And once we talk about scope, you'll understand why that is it's an advantage even if we still have to write the same declaration it to better practice to not create a variable outside of a loop whenever possible.

A While loop really excels when:

- You're writing a loop where you don't know exactly how many times it's going to run.
- We don't know that we're going from 0 to 10
- We don't know we want this to run exactly 20 times

## 7. More While Loops

```
while(!gameOver)
while(stillAlive)
while(livesLeft > 0)
// So you don't know exactly how many times it will run, but at some point in this loop you will be changing livesLeft or you will be setting gameOver to be true
```

## 8. Break Keyword

There's a special keyword in JavaScript called Break, which we can use inside of loops to break out of that lopp to stop its execution whenever JavaScript encounters break, that loop that it's enclosed in is done.

If you have multiple loops and you break in one of the nested loops, it does not stop all loops from executing. It will only stop the inner loop or the current loop the break is located in.

**Break: not that common in a for loop, but it can be common in a while loop.**

## 9. For...Of Intro

A nice and easy way of iterating over arrays (or other iterable objects)

```
for (variable of iterable) {
  statement
}
```

## 10. Comparing For and For...Of

For...Of is great a lot of the time, but if you need to care about the index then it's not going to work out for you or it won't be as easy as it would be to just generate those indices using a traditional for loop instead.

## 11. For...Of with Objects

**For Loop and For Of Loop those don't really work with objects, at least not easily**

```
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5,
}
```

If i wanted to just loop over and print out each value, i couldn't really use a for loop or for..Of loop. There are no indices for this object, i can't do `movieReviews[1]`, we can there's just nothing there.

So what can we do instead? We have a couple of options.

1. The first is to use a for of loop, and instead of looping over the entire object, which doesn't work, we can loop over just the keys or just the values

We haven't seen this yet because there's not much use for it aside from looping. But there is a method called object keys and you pass in an object to it. `Object.keys(movieReviews)` and we get a list of the keys,

```
for (let x of movieReviews) {
  console.log(x)
}
// Uncaught TypeError: movieReviews is not iterable
```

## 12. For...In Loops

### OBJECTS!

We can loop over the keys of an object, using Object.keys()

```
const movieReviews = {
  Amadeus: 10,
  Arrival: 9.5,
  Alien: 9,
  Amelie : 8
};

for (let movie of Object.keys(movieReviews)) {
  let score = movieReviews[movie];
  console.log(I rated $[movie ${score}/10`);
}
// I rated Amadeus 10/10
// I rated Arrival 9.5/10
// I rated Alien 9/10
// I rated Amelie 8/10
```

### FOR...IN
Loop over the keys in an object
```
for (variable in object) {
  statement
}
```
### The main difference between a ForOf and ForIn

Is that a **ForOf** will iterate over the actual values in an array or an iterable in a string each character in an array each value

And **ForIn** will loop over te keys, the properties in an object

**Arrays are objects technically**, which means that we can use a ForIn with an array

**Arrays are special cases, they're special objects where they keys are an ordered set of indices, numbers starting at 0**

**ForIn the order is not necessarily set in stone, and that's another reason it's not great to use with arrays. It's an arbitrary order, If you are updating or manupulating properties, that can change the order as well. Unlike an array where the order is set in stone, the first item always index 0**

So don't use a **ForIn** with an array even though you can