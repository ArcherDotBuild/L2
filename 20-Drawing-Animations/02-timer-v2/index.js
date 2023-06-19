const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

// Create our instance of the timer and pass in those three elements
// The fourth argument is going to be totally optional so we can use our timer with or without fourth argument
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started')
  },
  onTick() {
    console.log('Timer just ticked down')
  },
  onComplete() {
    console.log('Timer just completed')
  },
})
// timer.start()

// ####################
// ####################
// version 1
// tick = () => {
//   console.log('tick')
//   const timeRemaining = parseFloat(this.durationInput.value)
//   this.durationInput.value = timeRemaining - 1
// }
