## 08-Writing-Reusable-Code-with-Functions

## 1. Our First Function

### JS LOOPS Repeating Code

### FUNCTIONS

Reusable procedures

- Functions allow us to write reusable, modular code
- We define a "chunk" of code that we can then execute at a later point

Functions are like little machines, a bunch of code we put together and we wrap it up into a package. a machine that has a button to call it.

### 2 STEP PROCESS

- DEFINE step 1
- RUN step 2
- We use them ALL THE TIME

**Methods are functions** they're chunks of code that have been wrapped up, given a name and made into a repeatable function.

`"hello".toUpperCase()`: HELLO, toUpperCase() is built in method or built in function

### DEFINE

```
function funcName() {
  // codes goes here in the body
  // do something
}
```

```
function grumpus() {
  console.log('ugh...you again...')
  console.log('for the last time...')
  console.log('LEAVE ME ALONE!!!')
}
```

### RUN

```
funcName(): // run once
funcName(): // run again!
```

## 2. Dice Roll Function

```
function rollDie() {
  let roll = Math.floor(Math.random() * 6);
  console.log(`Rolled: ${roll}`);
}

rollDie()
```

## 3. Introducing Arguments

### ARGUMENTS

Arguments is really a fancy term for **inputs to a function**, and right now our functions don't expect they don't accept any inputs.

### INPUTS

Right now, our simple functions accept zero inputs They behave the same way every time.

We can also write functions that accept inputs, called arguments.

```
function greet(value) {
  console.log(`Hi, ${value}!`);
}
greet('Alberto')
// "Hi Alberto!"
// avg(20, 25) -> 22.5
// avg(3,2,5,6) -> 4
```

```
// No inputs
"hello".toUpperCase();

// Arguments!
// Different inputs...
"hello".indexOf('h'); // 0
// Different outputs...
"hello".indexOf('o'); // 4
```

## 4. Functions With Multiple Args

- the value we pass in when the function is executed **argument**
- num is a **parameter** we define when the function is defined

```
function square(parameter) {
  console.log(num * num);
}

square(argument)
```

The order of arguments is very important, the order that we define these parameters in dictates the order that they are filled in from left to right.

```
function sum(x, y) {
  console.log(x + y);
}

sum(4, 5); // 9
```

## 5. The Return Statement

### return

Built-in methods **return** values when we call them.

We can store those values:

```
const yell = "I will end you".toUpperCase();
yell; // "I WILL END YOU"

const idx = ['a', 'b', 'c'].indexOf('c');
idx; // 2
```

When i run `'hello'.toUpperCase()`the console prints out HELLO and we see the text HELLO, but that's only in the console.

So printing something to the console is entirely different than returning a value. When we're working in the console, they might seem similar, but there still is a significant difference

The code is run toUpperCase() does return a value, but it's lost forever. We're not capturing it, but we would normally do most likely, though, we just put it in a variable

So return values are extremely useful because we can capture them in variable, we could pass them to another function,

### NO RETURN!

Our functions print values out, but do NOT return anything

```
function add(x, y) {
  console.log(x + y);
}

const sum = add(10, 16);
sum; // undefined
```

### FIRST RETURN!

Now we can capture a return value in a variable!

```
function add(x, y) {
  return x + y; // RETURN!
}

const sum = add(10, 16);
sum; // 26

const answer = add(100, 200);
answer; // 300
```

**There are some rules to know about returning**

- You can only return one thing from a function  
  "that doesn't mean you can't have multiple return statements, but when you actually return something, there needs to be one value"
- The return statement ends function execeution & specifies the value to be returned by that function
