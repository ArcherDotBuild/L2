// ******************************
// Manipulating Classes ******************************
console.log('\n')

/* Long way */
// const todo = document.querySelector('#todos .todo')
// todo.style.color = 'gray'
// todo.style.textDecoration = 'line-through'
// todo.style.opacity = '50%'

console.log('Example 1')
// Applying a class
const todo = document.querySelector('#todos .todo') // <li class="todo">Mow the lawn <button>X</button></li>
console.log('todo: ', todo)
console.log('todo.textContent: ', todo.textContent)

console.log('\n')
// Printing the class of the todo <li class="todo">Mow the lawn <button>X</button></li>
console.log(todo.getAttribute('class'))

console.log('\n')
todo.getAttribute('todo')
console.log(getComputedStyle(todo))

console.log('\n')
console.log('Example 2')
console.log('\n')
// Overwritting the class
// todo.setAttribute('class', 'done')

console.log('\n')
console.log('Example 3')
console.log('\n')

// This will overwrite the class with a new one
// todo.setAttribute('class', 'done')

// Applying 2 classes hard coding
todo.setAttribute('class', 'todo done')
console.log(todo.getAttribute('class'))

console.log('\n')
console.log('Example 4')
console.log('\n')
// classList
// Removing a class
todo.classList.remove('done')
console.log(todo.classList)
todo.classList.add('done')
console.log(todo.classList)

console.log('\n')
console.log('Example 5')
console.log('\n')
// Toggle a class
todo.classList.toggle('done')
console.log(todo.classList)
todo.classList.toggle('done')
console.log(todo.classList)
todo.classList.toggle('done')
console.log(todo.classList)
todo.classList.toggle('done')
console.log(todo.classList)


/*
// Without classList toggle
todo.getAttribute('class') // 'todo'

todo.getAttribute('class').includes('done) // false

// If it's false
todo.setAttribute('class', todo.getAttribute('class') + 'done')

todo.getAttribute('class') // 'todo done'

todo.getAttribute('class').includes('done') // true
*/