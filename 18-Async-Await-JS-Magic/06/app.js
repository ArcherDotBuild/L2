// ******************************
// Parallel Vs. Sequential Requests ******************************
// Example 1

// pokeapi.co/api/v2/pokemon/1

// console.log('Parallel Vs. Sequential Requests')

// const moveX = (element, amount, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const bodyBoundary = document.body.clientWidth
//       const elRight = element.getBoundingClientRect().right
//       const currLeft = element.getBoundingClientRect().left
//       if (elRight + amount > bodyBoundary) {
//         reject({ bodyBoundary, elRight, amount })
//       } else {
//         element.style.transform = `translateX(${currLeft + amount}px)`
//         resolve()
//       }
//     }, delay)
//   })
// }

// const btn = document.querySelector('button')
// async function animateRight(el, amt) {
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
//   await moveX(el, amt, 1000)
// }
// animateRight(btn, 100).catch((err) => {
//   console.log('ALL DONE!!!')
//   animateRight(btn, -100)

// })

// Example 1
// Sequential Requests
// async function get3Pokemon() {
//   const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
//   const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
//   const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
//   console.log(poke1.data)
//   console.log(poke2.data)
//   console.log(poke3.data)
// }

// get3Pokemon()

// Example 2
// Parallel Requests
// async function get3Pokemon() {
//   const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
//   const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
//   const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')

//   console.log(prom1);

//   const poke1 = await prom1
//   const poke2 = await prom2
//   const poke3 = await prom3

//   console.log(prom1)

//   console.log(poke1.data)
//   console.log(poke2.data)
//   console.log(poke3.data)
// }

// get3Pokemon()

// Example 3
function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

// Sequential Requests
// async function lightShow() {
//   await changeBodyColor('teal', 1000)
//   await changeBodyColor('pink', 1000)
//   await changeBodyColor('indigo', 1000)
//   await changeBodyColor('violet', 1000)
// }

// lightShow()

// Parallel Requests
async function lightShow() {
  const p1 = changeBodyColor('teal', 1000)
  const p2 = changeBodyColor('pink', 1000)
  const p3 = changeBodyColor('indigo', 1000)
  const p4 = changeBodyColor('violet', 1000)

  await p1
  await p2
  await p3
  await p4
}

lightShow()
