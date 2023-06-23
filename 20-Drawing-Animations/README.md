## 19-Prototypes-Classes-And-The-New-Operator

**folder 01**

## 1. 06 Binding Events in a Class

## 2. 08 Determining the Value of 'This'

#### Determining the value of this inside of an arrow function

Did you define the function with an arrow function?
R// Write 'console.log(this)' on the first **valid** line above the arrow function. Value of 'this' in the arrow function will be equal to that console log

```javascript
const colors = {
  printColor() {
    console.log(this)
  },
}

colors.print()
```

```javascript
const colors = {
  printColor() {
    console.log(this)
    const printThis = () => {
      console.log(this)
    }
    printThis()
  },
}

colors.print()
```

#### Calling the function with bind, call or apply

Did you call 'bind', 'call' or 'apply' on the function when you invoked it?
R// 'this' is equal to the first argument of 'bind', 'call' or 'apply

**bind, call and apply** are built-in functions that belong to all functions inside of JavaScript that we create

```javascript
const printThis = function () {
  console.log(this)
}

printThis.call({ color: 'red' })
printThis.apply({ color: 'red' })
```

#### All other cases

'this' is equal to whatever is to the left of the '.' in the method call

```javascript
const colors = {
  printColor() {
    console.log(this)
  },
}

const randomObject = {
  a: 1,
}

randomObject.printColor = colors.printColor
randomObject.printColor()
```

## 3. 10 Starting and Pausing the Timer

```javascript
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    // start(){}, Calling the constructor anytime the user clicks on the start button
    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  // start() {
  //   // console.log('Time to start the timer!');
  //   console.log(this);
  // }
  start = () => {
    // This runs on tick immediately
    this.tick()
    // const timer = setInterval(this.tick, 1000)
    this.interval = setInterval(this.tick, 1000)
    console.log(timer)
    // function that is built into the browser
    // clearInterval(timer)
  }

  pause = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    console.log('tick')
  }
}
```

## 4. 12 DOM-Centric Approach

## 5. 13 Getters and Setters

```javascript
  getTime() {
    return parseFloat(this.durationInput.value)
  }

  setTime() {
    return this.durationInput = time
  }
```

```javascript
  tick = () => {
    console.log('tick')
    this.timeRemaining = this.timeRemaining - 1
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    this.durationInput.value = time
  }
```

## 6. 14 Stopping the Timer

```javascript
tick = () => {
  console.log('tick')
  if (this.timeRemaining <= 0) {
    this.pause()
  } else {
    this.timeRemaining = this.timeRemaining - 1
  }
}
```

## 7. 15 Notifying the Outside World

```javascript
// The fourth argument is going to be totally optional so we can use our timer with or without fourth argument
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started')
  },
  onTick() {},
  onComplete() {},
})
```

```javascript
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    // Callbacks are optional (logic for that)
    if (callbacks) {
      this.onStart = callbacks.onStart
    }

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }
```

## 8. 16 OnTick and OnComplete

```javascript
if (callbacks) {
  this.onStart = callbacks.onStart
  this.onTick = callbacks.onTick
  this.onComplete = callbacks.onComplete
}
```

```javascript
tick = () => {
  if (this.timeRemaining <= 0) {
    this.pause()
    if (this.onComplete) {
      this.onComplete()
    }
  } else {
    this.timeRemaining = this.timeRemaining - 1
    if (this.onTick) {
      this.onTick()
    }
  }
}
```

## 8. 17 Extracting Timer Code

**folder 02**

## 9. 18 Introducing SVG

```html
<svg height="200" widht="200">
  <circle r="20" cx="30" cy="30" />
</svg>
```

## 10. 19 Rules of SVGs

The X axis increases from left to right and the Y axis increases from top to bottom

## 11. 20 Advanced Circle Properties

```html
<circle
  r="90"
  cx="100"
  cy="100"
  fill="transparent"
  stroke="blue"
  stroke-width="10"
  stroke-dasharray="560"
  stroke-dashoffset="-100"
/>
```

## 12. 21 The Secret to the Animation

`transform="rotate(-90, 100, 100)"`

## 13. 22 First Pass on the Animation

## 14. 23 Smoothing the Animation