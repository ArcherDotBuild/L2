// module.exports = {
//   forEach(arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//       const value = arr[i]
//       fn(value, i)
//     }

//   },
// }

module.exports = {
  forEach(arr, fn) {
    for (let index in arr) {
      fn(arr[index], index)
    }
  },
}

// forEach([1, 2, 3], (value) => {
//   console.log(value);
// })
