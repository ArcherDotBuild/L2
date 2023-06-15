## 19-Prototypes-Classes-And-The-New-Operator

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