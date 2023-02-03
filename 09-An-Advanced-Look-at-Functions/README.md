## 09-An-Advanced-Look-at-Functions

## 1. Function Scope

### FUNCTIONS IN DETAIL

Important things you should know about functions

### GOALS

- Understand Scope
- Write Higher Order Functions
- Pass functions as callbacks

Higher Order Functions, functions as value in JavaScript, how we can pass functions to other functions.

We'll take a look at some existing built-in functions and methods that expect you to pass a function as an argument

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


### BLOCK SCOPE

```
let radious = 8; if(radius > 0) { const PI = 3.14; let circ = 2 x PI x radius; } // PI & circ are scoped to the BLOCK console.log(radius); // 8 console.log(PI); // NOT DEFINED console.log(circ); // NOT DEFINED
```

### LEXICAL SCOPE

```
function outer() { let hero = "Black Panther";

function inner() { let cryForHelp = ${hero}, please save me! console.log(cryForHelp); }

inner(); }
```

### FUNCTION EXPRESSIONS

There's another syntax we can use to define functions:

const square = function (num) { return num x num; } square(7); // 49

FUNCTIONS ARE... OBJECTS!
HIGH ORDER FUNCTIONS
Functions that operate on/with other functions. They can:

Accept other functions as arguments
Return a function
FUNCTIONS AS ARGUMENTS
function callTwice(func) { func(); func(); }

function laugh() { console.log("HAHAHAHAHAHAHAHAHAHA"); } callTwice(alught); // pass a function as an argument! // "HAHAHAHAHAHAHAHAHAHA" // "HAHAHAHAHAHAHAHAHAHA"

RETURNING FUNCTIONS
function makeBetweenFunc(min, max) { return function (val) { return val >= min && val <= max; } }

const inAgeRange = makeBetweenFunc(18, 100);

inAgeRange(17); // false inAgeRange(68); // true

CALLBACKS FUNCTIONS
A callback functon is a function passed into another function as an argument, which is then invoked inside the outer function

HOISTING
Variables order declaration

let animal = 'tiger'; console.log(animal); // 'tiger'

console.log(beast); // error let beast = 'grizzly';

// Functions are hoisted at the top of the file how(); // works! function howl() { console.log('AWOOOOO); } how(); // works!

// Functions expressions are not hoisted hoot(); // error let hoot = function () { console.log('HOOOO HOOOOO'); }
