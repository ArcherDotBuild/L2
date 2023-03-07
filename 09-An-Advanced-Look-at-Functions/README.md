## 09-An-Advanced-Look-at-Functions

## 1. Function Scope

### FUNCTIONS IN DETAIL

Important things you should know about functions

### GOALS

- Understand Scope
- Write Higher Order Functions
- Pass functions as callbacks

Higher Order Functions, functions as value in JavaScript, how we can pass functions to other functions.

We'll take a look at some existing built-in functions and methods that expect you to pass a function as an argument.

### SCOPE

Variable "visibility"

- The location where a variable is defined dictates **where we have access to that variable**

### FUNCTION SCOPE

```
function helpMe() {

  let msg = "I'm on fire!";

  msg; // "I'm on fire";
  // msg is scoped to the helpMe function
}

msg; // NOT DEFINED!
```

```
let bird = 'mandarin duck';

function birdWatch() {

  let bird = 'golden pheasant'
  bird; // 'golden pheasant'

  // bird is scoped to the birdWatch function
}

birdWatch() // 'golden pheasant'
console.log(bird) // 'mandarin duck'
```

## 2. Block Scope

```
let radious = 8;

if(radius > 0) {
  const PI = 3.14;
  let circ = 2 * PI * radius;
}
// PI & circ are scoped to the BLOCK

console.log(radius); // 8
console.log(PI); // NOT DEFINED
console.log(circ); // NOT DEFINED
```

We get an error: **radius is not defined**. So what does this tell us? it tells us that radius is scoped inside this conditional, It is scoped to this block of code. Blocks in JavaScript are denoted by curly brackets.

Keep in mind, this is very different than an object literal, which is also curly brackets.

```
// This is an object literal
{
  a: 1,
  b: 2
}

// This is a block of code
if (true) {
  let animal = 'eel'
  console.log(animal)
}
// Same thing if we had a while, for loops, the code we write between the curly brackets
```

**let and const** both have the same exact scope, but different than var scope.

**there is no block scope for var**, if we declare a variable using var in any block like a conditional a for loop a while loop, it is not scoped to that block. We have access to it outside and that could be problematic.

**I cannot redeclared the same variable with the same name in the same scope**.

## 3. Lexical Scope

If i have a nested function like the one i have, here are the two functions i have outer and inside.

Lexical scope refers to the fact that nested functions are lexically bound. They're bound to the scope of their parent or of their outer functions.

```
function outer() {
  let hero = "Black Panther";

  function inner() {
    let cryForHelp = `${hero}, please save me!`
    console.log(cryForHelp);
  }
  inner();
}
```

**But it's a one way relationship, It doesn't work the other way around**

```
function outer() {
  let hero = "Black Panther";

  function inner() {
    let let elfLeader = 'ElfGodd'
    let cryForHelp = `${hero}, please save me!`
    console.log(cryForHelp);
  }
  inner();
  console.log(hero)
}

outer() // hero is not defined
```

The variable is successfully declared in inner, but i don't have access to it out here.

So a variable declared in one function is available to nested functions within it.

## 4. Function Expressions

There's another syntax we can use to define functions:

```
const square = function (num) {
  return num * num;
}
square(7); // 49
```

#### FUNCTIONS ARE... OBJECTS!

In JavaScript functions are objects, which means we can put them in a variable, we can store 10 of them in an array, we can even pass them around as arguments, which is something we do all the time.

**There are some differences between function expressions and normal functions how these behave**

**You can add in a name for a function expression**

## 5. Higher Order Functions

Functions that operate on/with other functions. They can:

## 6. Functions as Arguments
**Higher Order Functions**

- Accept other functions as arguments
- Return a function

Functions that either accept functions as arguments and use them or do something with them or
a function that returns another function

```
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHAHAHAHAHAHAHAHAHA");
}

callTwice(laugh); // pass function as an argument!
// "HAHAHAHAHAHAHAHAHAHA"
// "HAHAHAHAHAHAHAHAHAHA"
```
