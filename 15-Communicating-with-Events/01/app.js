// ******************************
// 2 Ways NOT to Add Events ******************************
// Example 1
console.log('2 Ways NOT to Add Events')
console.log('\n')

const clicker = document.querySelector('#clicker')
console.dir(clicker)

clicker.onclick = function() {
  console.log('clicker.onclick')
}


// 2 events on the same button
clicker.ondblclick = function() {
  console.log('double clicker.onclick');
}