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
const multiply = (x, y) => x * y

const square = (x) => multiply(x, x)

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c)
}

isRightTriangle(3, 4, 5) // true
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

## 4. How Asynchronous Callbacks Actually Work

Commonly we do a lot of things that take time, whether it's getting data from a database or an API or trying to save something or even just set a timer.

### What happens when something takes a long time?

```javascript
const newTodo = input.value; // get user iput
saveToDatabase(newTodo; // this could take a while!
input.value = ''; // reset form
```

This is not exactly full code that would work!

- User type, something into a form it submits
- We want to grab value from the form
- Save it to a database

And that could take a couple of seconds. It could take half a second, could go really fast. It could take 10 seconds and fail.

#### Fortunately... We have a workaround

```javascript
console.log('I print first!')
setTimeout(() => {
  console.log('I print after 3 seconds')
}, 3000)
console.log('I print second!')
```

### CALLBACKS???!

For these processes, that take time, We pass a callback function and those functions will be executed at the appropriate time after this interval has passed in the case of a **setTimeout**.

#### HOW DOES IT WORK?

#### THE BROWSER DOES THE WORK!

The trick here is that the browser does the work, JavaScript is not the same thing as your browser. JavaScript is a language that is implemented in your browser. But the browsers are written in usually C++.

A different programming language in the browser itself is capable of doing certain tasks that JavaScript sucks at or things that take time they're handed off to the browser. So JavaScript says, here is this thing i need you to do for me. The browser takes over and then when it's done, it reminds JavaScript, OK your turn again.

JavaScript is not setting a timer or keeping track of how many seconds have gone by. JavaScript is not sending a request to an API. The browser actually handles it.

### OK BUT HOW?

- Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)

- The JS call stack recognizes these Web API functions and passes them off to the browser to take care of

- Once the browser finishes those tasks, they return and are pushed onto the stack as a callback

JavaScript single thread isn't blocked by the **setTimeout** because it's passed off to the browser. Then that callback function in the case of **setTimeout**, when it's time when 3 seconds has elapsed, the browser is going to take that function, `console.log('I print after 3 seconds')` and put it on the call stack.

## 6. Introducing Promises

#### Callback Hell

```javascript
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = values.width / values.height
          widths.forEach(
            function (width, widthIndex) {
              height = Math.round(width / aspect)
              console.log(
                'resizing ' + filename + 'to ' + height + 'x' + height
              )
              this.resize(width, height).write(
                dest + 'w' + width + '_' + filename,
                function (err) {
                  if (err) console.log('Error writing file: ' + err)
                }
              )
            }.bind(this)
          )
        }
      })
    })
  }
})
```

### ENTER PROMISES

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

Promises allow us to write asynchronous code that is much easier to read and understand.

It's usually shorter, but even if it's not actually shorter in terms of the number of characters, it's much flatter, often it's not so nested.

```javascript
moveXPromise(btn, 100, 1000)
  .then(() => moveXPromise(btn, 100, 1000))
  .then(() => moveXPromise(btn, 200, 1000))
  .then(() => moveXPromise(btn, 300, 1000))
  .then(() => moveXPromise(btn, 50, 1000))
  .then(() => moveXPromise(btn, 50, 1000))
  .catch((position) => {
    alert('CANNOT MOVE FURTHER')
  })
```

#### PROMISES A pattern for writing async code

When we work with promises, there's really two different things you need to understand.

1. The first is how you create your promise, how you could create a function that returns a promise
2. The second is how you consume or interact with promises

We consume promises all the time, even if we're not writing the promises ourself, we might be making a request from a library or using a library like Axios, which a lot of its functions return promises.

A promise is just an object, It's a JavaScript object which represents the completion or failure of some eventual process, something that can take time.

So a promise is a way of promising a value that you may not have at the moment. It's just a guarantee or a supposed guarantee of an eventual value.

Promises are objects that represent an eventual either failure or success of some tasks that takes time.

You make a request using **AXIOS**, that returns a promise because that value if you're making an HTTP request, it could take time and that value may never come back. It might be a failure or it might be successful and you might get some data back from an API, but it takes time.

So the object that is returned in the meantime is a promise. And what we do is we attach callbacks to that object, but we don't pass in two callbacks or a single callback to a function and nest a whole bunch of things.

Promises are objects that we can attach callbacks to instead

- [ ] RESOLVE
- [ ] REJECT

#### A promise is a returned object to which you attach callbacks instead of passing callbacks into a function

- When we create a Promise, we pass in a function
- And this function has two parameters
- This two parameters are functions

```javascript
const willgetYouADog = new Promise((resolve, reject) => {})
console.log(willgetYouADog)
```

- This Promise is pending `[[PromiseState]]:"pending"`
- It has not been resolved or rejected
- It has not been fulfilled or it has not been broken

So if we don't reject or resolve a promise, its value or its status will be pending.

So the pending state of a promise is frequently what you will see initially when a promise is first returned.

If we're making a request and that takes 10 seconds, which would be horrendously slow during those 10 seconds we don't have a response. We don't know if it's a failure or success, if the response went to the right URL, if the server was up, if your internet was working, **so it would be pending**.

When you call **resolve()**, it resolves the promise, it fulfulls it and the status is set to resolved.

If instead **reject()**, the status of that promise is rejected.

#### How we actually interact with the promise?

How do i run code if this promise was rejected VS  run code, if this promise was resolved?

### .THEN

So every promise has a **.then** method, `willgetYouADog.then()` this **.then** method will run if our promise is resolved.

Pass in a callback function to the **.then**. This code will run when this promise is resolved and we'll `console.log('resolved)`.

So we have another method we can use with every single promise **.catch()**, and we could just chain it on. This code will run when this promise is rejected and we'll `console.log('rejected)`.

## 7. Returning Promises from Functions

So our current promise will get you a dog promise is either resolved or rejected immediately. There's nothing that takes time in this promise, there's no real reason to use a promise. 

```javascript
const willgetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random()
  if (rand < 0.5) {
    resolve()
  } else {
    reject()
  }
})
willgetYouADog.then(() => {
  console.log('YAY WE GOT A DOG!!!!')
})
willgetYouADog.catch(() => {
  console.log(':( NO DOG')
})
```

Now let's introduce some delay so it takes longer.

So another thing that we frequently do is return a promise from a function instead of just making one.

## 8. Resolving Rejecting with Values

The next thing to know about promises is that when you reject or resolve a promise, you can reject or resolve it with a value and you'll have access to that value in your callback that you pass into **.then** or **.catch**, which is really useful because most of the time we're not just waiting on some resolve or reject.

It happens arbitrarily, like a random resolver or reject. We want to know why was something rejected, for example, in the case of a HTTP request? Why did this fail? And if it didn't fail, if it was resolved, what is the data that we got back?.

That's the point of making a request, at least most of the time as you're trying to get some information.