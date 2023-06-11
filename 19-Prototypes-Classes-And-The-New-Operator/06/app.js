// ******************************
// A Bit More Practice with Classes ******************************

console.log('A Bit More Practice with Classes')
console.log('\n')

// Example 1

class Color {
  constructor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
    // Calling a function automatically whenever you make a new color
    this.calcHSL()
  }
  hsl() {
    const {h,s,l} = this
    return `hsl(${h}, ${s}%, ${l}%)`
  }
  opposite() {
    const { h, s, l } = this
    const newHue = (h + 180) % 360
    return `hsl(${newHue}, ${s}%, ${l}%)`
  }
  fullySaturated() {
    const {h, l} = this
    return `hsl(${h}, 100%, ${l}%)`

  }
  calcHSL() {
    let {r,g,b} = this
    // Make r, g, and b fractions of 1
    r /= 255
    g /= 255
    b /= 255

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0
    if (delta == 0) h = 0
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2
    // Blue is max
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    // Make negative hues positive behind 360°
    if (h < 0) h += 360
    // Calculate lightness
    l = (cmax + cmin) / 2

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)
    this.h = h
    this.s = s
    this.l = l
  }
}

const red = new Color(255,67,89, 'tomato')
const white = new Color(255, 255, 255, 'white')
white.calcHSL()
console.log(white);
console.log(white.hsl());

console.log('\n')
red.hsl()
document.body.style.backgroundColor = red.hsl()
// document.body.style.backgroundColor = red.opposite()

const orange = new Color(230, 128, 34, 'orange')
document.body.style.backgroundColor = orange.hsl()
// document.body.style.backgroundColor = orange.fullySaturated()