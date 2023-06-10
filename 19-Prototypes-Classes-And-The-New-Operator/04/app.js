// ******************************
// Constructor Functions ******************************

console.log('Constructor Functions')
console.log('\n')

// Example 1
// function makeColor(r,g,b) {
//   const color = {}
//   color.r = r
//   color.g = g
//   color.b = b
//   color.rgb = function() {
//     const {r, g, b} = this
//     return `rgb(${r}, ${g}, ${b})`
//   }
//   color.hex = function () {
//     const  {r, g, b} = this
//      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//   }
//   return color
// }

// makeColor(355,255,255)

// const firstColor = makeColor(35,255,150)
// firstColor.hex()
// firstColor.rgb()

// // firstColor.r = 255

// const black = makeColor(0, 0, 0)
// black.rgb()
// black.hex()

// console.log(black.hex === firstColor.hex) // false
// console.log('hello'.slice === 'bye'.slice) // true

// Example 2
// Creates a blank, plain JavaScript object
// Links (sets the constructor of) this object to another object
// Passes the newly created object from Step 1 as the this context
// Returns this if the function doesn't return its own object
function Color(r, g, b) {
  this.r = r
  this.g = g
  this.b = b
  console.log(this)
}

Color.prototype.rgb = function () {
  const { r, g, b } = this
  return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function () {
  const { r, g, b } = this
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const color1 = new Color(40, 255, 60)
// console.log(color1);

const color2 = new Color(0, 0, 0)
// console.log(color2);

console.log(color1.rgb === color2.rgb)
console.log(color1.hex === color2.hex)

// Run this in the browser console
document.body.style.backgroundColor = color1.rgb()

document.body.style.backgroundColor = color1.rgba(0.4)