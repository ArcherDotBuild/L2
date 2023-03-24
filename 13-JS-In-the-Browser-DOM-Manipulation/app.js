// ******************************
// Taste of the DOM ******************************
// Example 1

// Go to https://google.com/

// Select the I'm Feelin Lucky button with the devtools
// query the id or class
const btnObj = document.querySelector('.RNmpXc')
// btnObj
console.log(btnObj)

console.log('\n')
console.dir(btnObj)

console.log('\n')
console.dir(btnObj.value)

console.log('\n')
console.log(btnObj.id)

console.log('\n')
console.log(btnObj.className)

console.log('\n')
btnObj.value = '@ArcherDotBuild'
console.dir(btnObj.value)

// You can see it's an object with many properties

// Example 2
// Select a button and add a mouseover event
const btnObj = document.querySelector('.RNmpXc')
btnObj.addEventListener('mouseover', function () {
  alert("Hi i'm an alert")
})
