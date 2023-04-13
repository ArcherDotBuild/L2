## 16-Asynchronous-Code-Callbacks-Promises

## 1. The Call Stack

#### CALL STACK
The mechanism the JS interpreter uses to keep track of its place in a script that cals multiple functions.

How JS "knows" what function is currently being run and what functions are called from within that function, etc.

The **Call Stack** is like the bookmark of a book.

The Stack part:
- Function calls
- Which functions are being called
- What is or what's been called
- What is waiting on a result to come back

The **stack** part has to do with a data structure in Computer Science called a Stack. A stack the last thing that you put in is going to be on top and that will be the first thing that you remove

### HOW IT WORKS
- When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
- Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
- When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

```javascript
const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5); // true
// square(3) + square(4) === square(5)
```

### The Call Stack workflow
1: 
- isRightTriangle(3, 4, 5)
- square(3) + square(4) === square(5)

2: 
- square(3) first added
- square(3) calls => multiply(3, 3)

3:
- multiply(3, 3)
- returns 9
- This one doesn't call any other function
- This one is taken out of the stack
- 3: it's popoff the stack
- 2: it's popoff the stack

The Call Stack continues like this

1: 
- isRightTriangle(3, 4, 5)
- square(9) + square(4) === square(5)

2: 
- square(4) first added
- square(4) calls => multiply(4, 4)

3:
- multiply(4, 4)
- returns 16
- This one doesn't call any other function
- This one is taken out of the stack
- 3: it's popoff the stack
- 2: it's popoff the stack

The Call Stack continues like this

1: 
- isRightTriangle(3, 4, 5)
- square(9) + square(16) === square(5)

2: 
- square(5) first added
- square(5) calls => multiply(5, 5)

3:
- multiply(5, 5)
- returns 25
- This one doesn't call any other function
- This one is taken out of the stack
- 3: it's popoff the stack
- 2: it's popoff the stack

The Call Stack continues like this

1: 
- isRightTriangle(3, 4, 5)
- square(9) + square(16) === square(25) // TRUE
- It's return true
- 1: It's popoff the stack

- DONE // true

## 2. Call Stack Debugging with Dev Tools

Dev tools debugging file app.js
1. Run the app.js file on the server with the browser
2. Mark a breakpoint here: makeRant('I hate mayonnaise', document.body)
3. Hit the down arrow each time to watch the Call Stack in action

## 3. The Await Keyword
- We can only use the await keyword inside of functions declared with async
- await will pause the execution of the function, waiting for a promise to be resolved

```javascript
async function hello() {
  return 'Hey guy!';
}
hello();
// Promise {<resolved>: "Hey guy!"}
async function uhOh() {
  throw new Error('oh no!');
}
uhOh();
// Promise {<rejected>: Error: oh no!}
```

