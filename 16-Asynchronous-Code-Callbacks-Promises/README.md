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

## 3. JS is Single Threaded

**JavaScript is a single threaded language**

#### WHAT DOES THAT MEAN?
At any given point in time, that single JS thread is running at most one line of JS code. 

All that it really means is that at any given point in our script, whatever script is being executed, JavaScript is running one thing at a time. It's not multitasking, It does one thing.

What happen if we do things that aren't immediate, we don't want to just have a user sit there waiting and have no other code running.

**Example:** of someting that we do via JavaScript all the time. We send a request from the browser, JavaScript code asking for, data from a movie API that takes time. It goes sends a request to a server, that server may or may not be online, we may have a valid endpoint, we may not.

But even if everything goes great, it still takes time. The server will respond to your request if we're looking for movies that match the query. It will search through its database, find the revelant information, and then send a response back.

### THIS TAKES TIME 

It can be very slow

### IS OUR APP GOING TO GRIND TO A HALT?
So what happens to our application? Does it just stop and nothing else happens like what we had over here, where this `alert('Hi there!')` potentially takes a long time for a user to finish? .

Is this what happens when we make a request, when we are fetching data from an API, when we're trying to save data to an API, any time we do some sort of single page app functionality, which usually involves communicating with an API, communicating with a database or a server that takes time.

Is our app just going to sit there doing nothing and as a user, just going to sit there waiting for something to happen? the answer is no.

#### How does that work and why not?
JavaScript has a couple of tricks up its sleeve, or rather, the browser has some tricks up its sleeve to get around this single threadedness of JavaScript.