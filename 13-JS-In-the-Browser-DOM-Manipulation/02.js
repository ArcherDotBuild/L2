// ******************************
// Another Fun DOM Example ******************************
// Example 1
/*
// Go to https://google.com/
// Create a snippet

// 1. Go to DevTools in Google Chrome
// 2. Go to Sources Tab
// 3. Go to Snippets Tab
// 4. New snippet
// Start writing code in the new snippet

console.log(2+2)

// Ctrl + Enter: To run the code in the new snippet

const myImg = document.createElement('img')
myImg.src =
  'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'

myImg.style.width = '200px'
document.body.append(myImg)
myImg.style.transition = 'all 2s'

// Moving the image
// myImg.style.transform = 'translate(300px, 200px)'

// Getting the windo width of the client
// document.body.clientWidth

// Moving the image randomly
setInterval(() => {
  const x = Math.floor(document.body.clientWidth * Math.random())
  const y = Math.floor(document.body.clientHeight * Math.random())
  myImg.style.transform = `translate(${x}px,${y}px)`
}, 2000)
*/

// ####################
// Move everything
// Example 2
// On the same code snippet of Example 1 test this code

const allElements = document.body.children

setInterval(() => {
  for (element of allElements) {
    const rotation = Math.floor(Math.random() * 360)

    const x = Math.floor(document.body.clientWidth * Math.random())
    const y = Math.floor(document.body.clientHeight * Math.random())

    // element.style.transform = `translate(${x}px,${y}px)`
    element.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`
  }
}, 2000)
