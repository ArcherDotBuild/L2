// ******************************
// getElementById ******************************
// Example 1
/// Selecting the bear photo

const bearImg = document.getElementById('bear-photo')
// This looks like HTML but it's not
// This will return an Object
// This object represents that one image with the id: bear-photo
console.log('bearImg: ', bearImg)
console.log('\n')
console.log('bearImg ID: ', bearImg.id)
console.log('\n')
console.log('bearImg: ', bearImg.src)

console.log('\n')
// True object form
// Here are all the properties i have
console.dir(bearImg)

// Example 2
console.log('\n')
// Selecting the main paragraph <p id="main"></p>
const pMain = document.getElementById('main')
console.log('pMain: ', pMain)
console.dir(pMain)
console.log(pMain.textContent)
