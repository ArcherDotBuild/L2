// ******************************
// Extends, Super, and Subclasses ******************************

console.log('Extends, Super, and Subclasses')
console.log('\n')

// Example 1
// class Cat {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   eat() {
//     return `${this.name} is eating!`
//   }
//   meow() {
//     return 'MEOWWWW!!'
//   }
// }

// const monty = new Cat('monty', 9)
// console.log(monty)
// console.log(monty.meow());

console.log('\n')
// Example 2
// class Dog {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   eat() {
//     return `${this.name} is eating!`
//   }
//   bark() {
//     return 'WOOOF!'
//   }
// }

// const wyatt = new Dog('wyatt', 13)
// console.log(wyatt)
// console.log(wyatt.bark());

console.log('\n')
// Example 3
// Parent class
class Pet {
  constructor(name, age) {
    console.log('IN PET CONSTRUCTOR!')
    this.name = name
    this.age = age
  }
  eat() {
    return `${this.name} is eating!`
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log('IN CAT CONSTRUCTOR!');
    // Super is going to reference the class that we are extending from
    // Is going to call Pet constructor
    super(name, age)
  }
  meow() {
    return 'MEOWWWW!!'
  }
}

class Dog extends Pet {
  bark() {
    return 'WOOOF!'
  }
}

const monty = new Cat('monty', 9)
console.log(monty)
console.log(monty.meow())
console.log(monty.eat())

console.log('\n')
const wyatt = new Dog('wyatt', 13)
console.log(wyatt)
console.log(wyatt.bark())
console.log(wyatt.eat())

console.log('\n')
