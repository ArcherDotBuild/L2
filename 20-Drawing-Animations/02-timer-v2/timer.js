class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    // Callbacks are optional (logic for that)
    if (callbacks) {
      this.onStart = callbacks.onStart
      this.onTick = callbacks.onTick
      this.onComplete = callbacks.onComplete
    }

    // start(){}, Calling the constructor anytime the user clicks on the start button
    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  // start() {
  //   // console.log('Time to start the timer!');
  //   console.log(this);
  // }
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining)
    }
    // This runs on tick immediately
    this.tick()
    // const timer = setInterval(this.tick, 1000)
    this.interval = setInterval(this.tick, 50)
    console.log(timer)
    // function that is built into the browser
    // clearInterval(timer)
  }

  pause = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    // console.log('tick')
    if (this.timeRemaining <= 0) {
      this.pause()
      if (this.onComplete) {
        this.onComplete()
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05
      if (this.onTick) {
        this.onTick(this.timeRemaining)
      }
    }
  }

  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2)
  }
}
