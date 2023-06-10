// ******************************
// JS Classes - Syntactical Sugar ******************************

console.log('JS Classes - Syntactical Sugar')
console.log('\n')

// Example 1

class Color {
  // A constructor is a function that will execute immediately
  // whenever a new color is created
  constructor(r, g, b, name) {
    console.log('INSIDE CONSTRUCTOR!')
    console.log(r, g, b)

    this.r = r
    this.b = b
    this.g = g
    this.name = name
  }

  greet() {
    return `HELLO FROM ${this.name}`
  }
  innerRGB() {
    const {r, g, b} = this
    return `${r}, ${g}, ${b}`
  }
  rgb() {    
    return `rgb(${this.innerRGB()})`
  }
  rgba(a = 1.0) {    
    return `rgba(${this.innerRGB()}, ${a})`
  }
  hex() {
    const { r, g, b } = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }
}

const red = new Color(255, 67, 89, 'tomato')
console.log(red)
console.log(red.greet())
console.log(red.rgb())
console.log(red.rgba());
console.log(red.hex())

console.log('\n')
const white = new Color(255, 255, 255, 'white')
console.log(white)
console.log(white.hex())
console.log(white.hex === red.hex)

// Run in the browser console
document.body.style.backgroundColor = red.rgba(0.5)
// document.body.style.backgroundColor = red.rgba(0.1)