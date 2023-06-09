// ******************************
// Factory Functions ******************************

console.log('Factory Functions')
console.log('\n')

// Example 1
function hex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`
}

// console.log(hex(255, 100, 25))
// ;('#ff6419')
// rgb(255, 100, 25)

console.log('\n')
// Example 2
function makeColor(r, g, b) {
  const color = {}
  color.r = r
  color.g = g
  color.b = b
  color.rgb = function () {
    const { r, g, b } = this
    return `rgb(${r}, ${g}, ${b})`
  }
  color.hex = function () {
    const { r, g, b } = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }
  return color
}

makeColor(355, 255, 255)

const firstColor = makeColor(35, 255, 150)
firstColor.hex()
firstColor.rgb()

// firstColor.r = 255
