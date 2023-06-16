// ******************************
// What on Earth are Prototypes ******************************

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
    if (this.timeRemaining <= 0) {
      this.pause()
    } else {
      this.timeRemaining = this.timeRemaining - 1
    }
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    this.durationInput.value = time
  }
}

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

// Create our instance of the timer and pass in those three elements
const timer = new Timer(durationInput, startButton, pauseButton)
// timer.start()

// version 1
// tick = () => {
//   console.log('tick')
//   const timeRemaining = parseFloat(this.durationInput.value)
//   this.durationInput.value = timeRemaining - 1
// }
