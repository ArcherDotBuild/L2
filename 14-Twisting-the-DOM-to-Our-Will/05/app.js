// ******************************
// Finding Parent Children Siblings ******************************
// Example 1
console.log('\n')

const firstLi = document.querySelector('li')
console.log('firstLi: ', firstLi)

console.log('\n')
// In the browser console open the tab of this output
// and search for the parentElement property of firstLi
console.dir(firstLi) // parentElement: ul

firstLi.parentElement // run this in the browser console

firstLi.parentElement.parentElement

firstLi.parentElement.parentElement.parentElement

firstLi.parentElement.parentElement.parentElement.parentElement

// Example 2
console.log('\n')

const ul = document.querySelector('ul')
console.log('ul: ', ul);
console.log(ul.children)
console.log(ul.children[0]); 
console.log(ul.children.length) // 3
console.log(ul.length) // undefined
console.log(ul.children[0].innerText);

// Example 3
console.log('\n')
console.log(firstLi.nextElementSibling.innerText);
console.log(firstLi.nextElementSibling.nextElementSibling.innerText)

// Example 4
console.log('\n')
// previousElementSibling
// Saving the 3 third Li
const thirdLi = firstLi.nextElementSibling.nextElementSibling
console.log(thirdLi.innerText)
console.log(thirdLi.previousElementSibling.innerText)
