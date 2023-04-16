// ******************************
// Welcome to Callback Hell ******************************
// Example 1
console.log('Welcome to Callback Hell')
console.log('\n')

const btn = document.querySelector('button')

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`
//         },1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// Example 2
// Same but using a function
// const moveX = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px)`
//     if (callback) callback()
//   }, delay)
// }

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000, () => {
//         moveX(btn, 500, 1000)
//       })
//     })
//   })
// })

// Example 3
// const moveX = (element, amount, delay, callback) => {
//   // console.log(btn.getBoundingClientRect())
//   // console.log(document.body.clientWidth);

//   const bodyBoundary = document.body.clientWidth
//   const elRight = element.getBoundingClientRect().right
//   const currLeft = element.getBoundingClientRect().left
//   if (elRight + amount > bodyBoundary) {
//     console.log('DONE - CANNOT GO THAT FAR')
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currLeft + amount}px)`
//       if (callback) callback()
//     }, delay)
//   }
// }

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 1000, 1000)
//       })
//     })
//   })
// })

// Example 4
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  // console.log(btn.getBoundingClientRect())
  // console.log(document.body.clientWidth);

  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth
    const elRight = element.getBoundingClientRect().right
    const currLeft = element.getBoundingClientRect().left
    if (elRight + amount > bodyBoundary) {
      onFailure()
    } else {
      element.style.transform = `translateX(${currLeft + amount}px)`
      onSuccess()
    }
  }, delay)
}

moveX(
  btn,
  300,
  1000,
  () => {
    // success
    moveX(
      btn,
      300,
      1000,
      () => {
        // success
        moveX(
          btn,
          300,
          1000,
          // success
          () => {
            console.log('REALLY, WE STILL HAVE SCREEN LEFT')
          },
          // fail
          () => {
            alert('CANNOT MOVE FURTHER')
          }
        )
      },
      () => {
        // Fail
        alert('CANNOT MOVE FURTHER')
      }
    )
  },
  () => {
    // Fail
    alert('CANNOT MOVE FURTHER')
  }
)
