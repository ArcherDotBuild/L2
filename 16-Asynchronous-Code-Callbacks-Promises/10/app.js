// ******************************
// Refactoring with Promises ******************************
// Example 1
console.log('Refactoring with Promises')
console.log('\n')

/*
Refactoring a Callback HELL
*/

const btn = document.querySelector('button')
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth
      const elRight = element.getBoundingClientRect().right
      const currLeft = element.getBoundingClientRect().left
      if (elRight + amount > bodyBoundary) {
        reject({bodyBoundary, elRight, amount})
      } else {
        element.style.transform = `translateX(${currLeft + amount}px)`
        resolve()
      }
    }, delay)
  })
}

// moveX(btn, 300, 1000)
// .then(() => {
//   return moveX(btn, 300, 1000)
// })
// .then(() => {
//   return moveX(btn, 300, 1000)
// })
// .catch((err) => {
//   console.log('OUT OF SPACE, CANNOT MOVE!', err);
// })

// Catching the third 3rd moveX
// moveX(btn, 300, 1000)
//   .then(() => {
//     return moveX(btn, 300, 1000)
//   })
//   .then(() => {
//     return moveX(btn, 5000, 1000)
//   })
//   .then(() => {
//     return moveX(btn, 300, 1000)
//   })
//   .catch((err) => {
//     console.log('OUT OF SPACE, CANNOT MOVE!', err)
//   })

// Example 2
// Using implicit return
moveX(btn, 100, 1000)
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 200, 1000))
  .then(() => moveX(btn, 200, 1000))
  .catch(({bodyBoundary, elRight, amount}) => {
    // console.log('OUT OF SPACE, CANNOT MOVE!', err)
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is to large!`);
  })
