// ******************************
// Changing Multiple Elements ******************************
// Example 1
console.log('\n')

const allLis = document.querySelectorAll('li')

for (let i = 0; i < allLis.length; i++) {
  console.log(allLis[i].innerText)

  allLis[i].innerHTML = `<b>${i} changed</b>`
}

console.log('\n')
for (let li of allLis) {
  console.log(li.innerText)
}