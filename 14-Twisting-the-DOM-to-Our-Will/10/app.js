// ******************************
// Creating Elements ******************************
// Example 1
console.log('\n')

const newH2 = document.createElement('h2')
newH2.textContent = 'new h2'
console.log('newH2: ', newH2)
console.dir(newH2)

newH2.classList.add('special')
const section = document.querySelector('section')
section.appendChild(newH2)

// Example 2
console.log('\n')
const newImg = document.createElement('img')
newImg.src =
  'https://www.fayerwayer.com/resizer/j5t99xUsygsnO8VAhqzTEvzC9l8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg'
console.log(newImg)
console.dir(newImg)

newImg.style.width = '300px'
document.body.appendChild(newImg)

// Example 3
console.log('\n')
const newLink = document.createElement('a')
newLink.innerText = 'Cat funny video'
newLink.href = 'https://www.youtube.com/watch?v=NsUWXo8M7UA'

const firstP = document.querySelector('p')
firstP.appendChild(newLink)