## 06-Objects-The-Core-of-Javascript

## 1. Intro to Objects

### How would you store this?

Health App, User dashboard
- 308.272 total steps
- 1.826 total floors
- 211.70 total miles
- 5.755 avg. daily calorie burn
- 2312 total active minutes
- 7 of 5 days exercising this week
- 2 hrs 13 mins of restful sleep

If we used an array, we definitely could, It just would be confusing and we'd have to come up with some arbitrary rules. 

### OBJECTS
- Objects are collections of properties
- Properties are a key-value pair
- Rather than accessing data using an index, we use custom keys.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

In objects we don't use a number to access our data out like we do with an array where we say, give me the index of one item instead, Example: give me city, please or give me zip or age and you get the corresponding value.

You have a key and it's kind of a one way relationship, you put the key in and you figure out the corresponding value.

### PROPERTY = KEY + VALUE

```
username: '@ElfGodd',
age: 36,
city: 'Barranquilla',
zip: 101001,
text: 'great post!',
upvotes: '7',
isAdmin: true
```

### AN OBJECT!
```
const fitAppData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep,: '2:13'
};
```
ALL TYPES WELCOME!
```
let comment = {
  username: 'sillyGoose420',
  downVotes: 19,
  upVotes: 214,
  netScore: 195,
  commentText: 'Tastes like chicken lol',
  tags: ['#hilarious', '#funny', '#silly'],
  isGilded: false
};
```

## 2. Creating Object Literals

### VALID KEYS
All keys are converted to strings, Except for Symbols  
`key: value === string: data`

## 3. Accessing Object Properties

### ACCESSING DATA  

```
// This is converted
const numbers = {
  100: 'one hundred',
  16: 'sixteen'
}
// to this
const numbers = {
  '100': 'one hundred',
  '16': 'sixteen'
}

```

Why would you use square brackets aside from if you tried to store numbers as a key, Well sometimes you have property names that may not be valid JavaScript identifiers. Now, an identifier in JS is like the name of a variable. 

```
// invalid name variable
// invalid indentifier or unexpected token
// i cannot have a variable name, start with a number
let my cat = 'Elf Cat'
let 76games = 'NBA team'

// But that doesn't mean we can't do that as a key in an object
object = {
  '76 trombones': 'great song!'
}
console.log(numbers2['76 trombones']); // 'great song!'
```

Another reason sometimes you want to use a dynamic value like a variable to access data from an object. 

```
const palette = {
  red: '#eb4d4b',
  yellow: '#f9ca24',
  blue: '#30336b'
}

palette.red // '#eb4d4b'
palette['blue'] // '#30336b'

let color = 'yellow';
palette.color // undefined property doesn't exist 'color'
palette[color] // '#f9ca24'
```

My general rule of thumb is to try and use the dot notation whenever
possible. It is shorter and nicer to look, but when it's not possible, whether it's because you have a key name that is not valid
as a identifier like **let 76games = 'NBA team'**

## 4. Adding and Updating Properties

It's similar to viewing a property or accessing the data. We have the dot notation or the square brackets. The only difference is we use an equal sign to assign a value either to update that value or to give it an initial value.

```
// Updating properties: 
fitAppData.workoutsThisWeek = '6 of 7';
fitAppData.totalMiles += 7.5;

// Adding a new property
fitAppData.heartStillBeating = true;
```

## 5. Nested Arrays & Objects

### ARRAYS + OBJECTS
```
const shoppingCart = [
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
]
```

```
const student = {
  firstName: 'Alberto',
  lastName: 'Guzman',
  strengths: ['Programmer', 'Futbol'],
  exams: {
    midterm: 92,
    final: 88
  }
}
```

```
const game = {
  player1: { username: 'Blue', playingAs: 'X' }
  player2: { username: 'Muffins', playingAs: '0' }
  board : [
    ['0', null, 'X'],
    ['X', '0', 'X'],
    [null, '0', 'X']
]};
```

Objects and Reference Types
Objects and Arrays are Reference types

Array Object Equality
Arrays and Objects behave the same way when we checking for Equality We are comparing Reference Types Addresses
