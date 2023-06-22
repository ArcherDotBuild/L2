const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let currentOffset = 0
// Create our instance of the timer and pass in those three elements
// The fourth argument is going to be totally optional so we can use our timer with or without fourth argument
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started')
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset)
    currentOffset = currentOffset - 50
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
