// ******************************
// Shorthand Object Properties ******************************
// Example 1
/*
const getStats = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const sum = arr.reduce((sum, r) => sum + r)
  const avg = sum / arr.length
  return {
    max: max,
    min: min,
    sum: sum,
    avg: avg,
  }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]
console.log('reviews: ', reviews)

console.log('\n')
const stats = getStats(reviews)
console.log('stats: ', stats)

// Example 2
console.log('\n')
// New short syntax
const getStatsShortSyntax = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const sum = arr.reduce((sum, r) => sum + r)
  const avg = sum / arr.length
  return { max, min, sum, avg }
}

console.log('getStatsShortSyntax: ', getStatsShortSyntax(reviews))
*/

// ******************************
// Computed Properties ******************************
// Example 3
/*
console.log('\n')
const role = 'host'
const person = 'Jools Holland'
const role2 = 'Director'
const person2 = 'James Cameron'

const team = {
  role: person,
}
// person (key: value) is assigned to role
// role key stays unchanged, role value changes to 'Jools Holland'
// team: { role: 'Jools Holland' }
console.log('team: ', team)

// Example 4
// DYNAMIC KEYS
console.log('\n')
const team2 = {}
// team2: host: 'Jools Holland'
team2[role] = person
console.log('team2: ', team2)
// team2: director: 'James Cameron'
team2[role2] = person2
console.log('team2: ', team2)
// team2: role: 'Jools Holland'
team2.role = 'ElfGodd'
console.log('team2: ', team2)
// {host: 'Jools Holland', Director: 'James Cameron', role: 'ElfGodd'}

// Example 5
// New syntax for Computed Properties
console.log('\n')
const teamComputed = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen',
}
console.log('teamComputed: ', teamComputed)

// Example 6
// Not using computed properties
console.log('\n')
function addProp(object, key, value) {
  const copy = { ...object }
  copy[key] = value
  return copy
}
const res = addProp(teamComputed, 'happy', ':)')
console.log('addProp res: ', res)

// Example 7
// Using computed properties
console.log('\n')
const addPropComputed = (object, key, value) => {
  return {
    ...object,
    [key]: value,
  }
}
const resComputed = addPropComputed(teamComputed, 'sad', ':(')
console.log('resComputed: ', resComputed)

// Example 8
const resComputed2 = addPropComputed(
  { [role]: 'ElfGodd' },
  'sports',
  ':jogging'
)

console.log('resComputed2: ', resComputed2)
*/

// ******************************
// Adding Methods to Objects ******************************
// Example 9
/*
const add = function (x, y) {
  return x + y
}

const math = {
  add,
}

console.log('math: ', math)
console.log('math.add(2, 5): ', math.add(2, 5))
console.log('add(2, 5): ', add(2, 5))

// Example 10
console.log('\n')
const math2 = {
  numbers2: [1, 2, 3, 4, 5],

  add2: function (x, y) {
    return x + y
  },
  multiply2: function (x, y) {
    return x * y
  },
}

console.log('math2.add2: ', math2.add2(10, 26))
console.log('math2.multiply2: ', math2.multiply2(3700, 1000))
console.log('math2.numbers2: ', math2.numbers2)
console.log('math2: ', math2)
*/

// ******************************
// Method Shorthand Syntax ******************************
// Example 11
/*
console.log('\n')
const auth = {
  username: 'ElfGodd',
  login() {
    console.log('LOGGED YOU IN!')
  },
  logout() {
    console.log('GOODBYE')
  },
}

console.log('auth: ', auth)
*/

// ******************************
// Intro to Keyword THIS ******************************
// Example 12
/*
// THIS here refers to the Window Object in the browser
function sayHi() {
  console.log('HI')
  // (this) is an object and it refers to the current execution scope
  console.log('sayHi() this: ', this)
}

sayHi()

console.log('\n')
const greet = function() {
  console.log('greet() this: ', this)
}

greet()
*/

// ******************************
// Using THIS in Methods ******************************
// Example 13
/*
console.log('\n')
// THIS inside of a Method, the object THIS is inside of a method
// The value of THIS is the personThis object itself
const personThis = {
  first: 'Alberto',
  last: 'Guzman',
  nickName: 'ElfGodd',
  fullName() {
    console.log('this: ', this)
    console.log(`FullName: ${this.first} ${this.last} AKA ${this.nickName}`)
  },
}

console.log('personThis: ', personThis)

console.log('\n')
personThis.fullName()

// Example 14
console.log('\n')
// Destructuring properties props from 'this'
const personThisDestructuring = {
  first: 'Alberto',
  last: 'Guzman',
  nickName: 'ElfGodd',
  fullName() {
    const { first, last, nickName } = this
    console.log(`${first} ${last} AKA ${nickName}`)
  },
}

personThisDestructuring.fullName()

// Example 15
console.log('\n')
// Changing nickName in personThisDestructuring
personThisDestructuring.nickName = 'Duende'
console.log(
  'personThisDestructuring.nickName NEW: ',
  personThisDestructuring.nickName
)

personThisDestructuring.fullName()

// Example 16
console.log('\n')
const personThis2 = {
  first: 'Alberto',
  last: 'Guzman',
  nickName: 'ElfGodd',
  fullName() {
    const { first, last, nickName } = this
    return `${first} ${last} AKA ${nickName}`
  },
  printBio() {
    console.log('THIS in printBio(): ', this)
    // fullName() // Won 't work. ReferenceError:

    // We have to use This to reference the object
    const fullName = this.fullName()
    console.log(`${fullName} is a person!`)
  }
}

personThis2.printBio()
*/

// ******************************
// THIS Invocation Context ******************************
// Example 17
/*
const personThis = {
  first: 'Alberto',
  last: 'Guzman',
  nickName: 'ElfGodd',
  fullName() {
    console.log('this fullName(): ', this)
    const { first, last, nickName } = this
    return `${first} ${last} AKA ${nickName}`
  },
  printBio() {
    console.log('this printBio(): ', this)
    const fullName = this.fullName()
    console.log(`${fullName} is a person!`)
  },
  laugh: () => {
    console.log('THIS in laugh() ArrowFunction: ', this)
    console.log(`${this.nickName} says HAHAHAHA`)
  },
}

const printBio = personThis.printBio()

console.log('\n')
console.log('printBio: ', printBio)

console.log('\n')
console.log(personThis.printBio());

console.log('\n')
// printBio() // Error: printBio is not a function
*/

// ******************************
// Annoyomatic Demo ******************************
// Example 18
/*
const annoyerTest = {
  phrases: [
    'literally',
    'cray cray',
    "I can't even",
    'Totes!',
    'YOLO',
    "Can't Stop, Won't Stop",
  ],

  pickPhrase() {
    // const phrases = this.phrases
    const { phrases } = this

    const idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx]
  },
  start() {
    // THIS here is set to the Object annoyer
    // console.log('this.pickPhrase: ', this.pickPhrase)

    // If we want to save the this data to use it inside the setInterval
    const that = this

    // setInterval(() => {
    setInterval(function () {
      // console.log(this.pickPhrase())
      // THIS here is set to the Window Object
      // setInterval is part of the DOM API so
      // Error this.pickPhrase is not a function
      // Remember, this changes depending on how it is called

      console.log(that.pickPhrase())
      // console.log('setInterval annoyerTest.pickPhrase(): ', this.pickPhrase())
      console.log('setInterval annoyerTest.pickPhrase(): ', that.pickPhrase())
    }, 3000)
  },
}
// Pick a Random Phrase each time
console.log('annoyerTest.pickPhrase(): ', annoyerTest.pickPhrase())
// annoyerTest.start()

// Example 19
console.log('\n')
const annoyer = {
  phrases: [
    'literally',
    'cray cray',
    "I can't even",
    'Totes!',
    'YOLO',
    "Can't Stop, Won't Stop",
  ],

  pickPhrase() {
    // const phrases = this.phrases
    const { phrases } = this

    const idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx]
  },
  // Run this to start the setInterval
  start() {
    // I have no access to id in stop() func this way
    // timerId = setInterval(() => {

    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  // Run this to stop the setInterval
  stop() {
    clearInterval(this.timerId)
    console.log('PHEW THANK HEAVENS THAT IS OVER!')
  },
}

console.log('annoyer: ', annoyer)

// Pick a Random Phrase each time
console.log('annoyer.pickPhrase(): ', annoyer.pickPhrase())

// annoyer.start();
// annoyer.stop();
*/

// ******************************
// Annoyomatic Demo ******************************
// Example 20
/*
function makeDeck() {
  const deck = []
  const suits = ['hearts', 'diamonds', 'spades', 'clubs']
  const values = '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A'
  for (let value of values.split(',')) {
    for (let suit of suits) {
      // deck.push({value: value, suit: suit})
      // Shorthand sintax
      deck.push({ value, suit })
    }
  }
  return deck
}

console.log('\n')
console.log('makeDeck(): ', makeDeck())

// Remember .pop  returns the value and it also changes the original array
function drawCard(deck) {
  return deck.pop()
}

// Making a copy of makeDeck to myDeck
const myDeck = makeDeck()
const card1 = drawCard(myDeck)
const card2 = drawCard(myDeck)

console.log('\n')
console.log('card1: ', card1)

console.log('\n')
console.log('card2: ', card2)

console.log('\n')
console.log('makeDeck: ', makeDeck()) // 52 cards

console.log('\n')
console.log('myDeck: ', myDeck) // 50 cards

/*
I can use an object to store the deck and on that object i can have
a method called drawCard and another one called shuffle and we have
access to the deck because of the keyword THIS
*/

/*
// Example 21
console.log('\n')
console.log('\n')
console.log('########## DECK2 ##########')
const myDeck2 = {
  deck2: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A',
  initializeDeck() {
    // Destructuring suits, values and deck2 from myDeck2 Object
    const { suits, values, deck2 } = this

    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck2.push({ value, suit })
      }
    }
    // return deck2;
  },
  drawCard() {
    const card = this.deck2.pop()
    this.drawnCards.push(card)
    return card
  },
  drawMultiple(numCards) {
    const cards = []
    for (let i = 0; i < numCards; i++) {
      cards.push(this.drawCard())
    }
    return cards
  },
  // This is an algorithm called the Fisher Yates Shuffle
  shuffle() { 
    const { deck2 } = this
    // loop over array backwards
    for (let i = deck2.length - 1; i > 0; i--) {
      // Pick random index before current element
      let j = Math.floor(Math.random() * (i + 1))
      // swap
      ;[deck2[i], deck2[j]] = [deck2[j], deck2[i]]
    }
  },
}

console.log('\n')
console.log('myDeck2: ', myDeck2)

console.log('\n')
// This initializes the function inside myDeck2
console.log('myDeck2.initializeDeck: ', myDeck2.initializeDeck())
console.log('myDeck2.shuffle: ', myDeck2.shuffle())
console.log('myDeck2.deck2', myDeck2.deck2)

const myDeck2Card1 = myDeck2.drawCard()
const myDeck2Card2 = myDeck2.drawCard()
const myDeck2Card3 = myDeck2.drawCard()

console.log('\n')
console.log('myDeck2Card1: ', myDeck2Card1)
console.log('\n')
console.log('myDeck2Card2: ', myDeck2Card2)
console.log('\n')
console.log('myDeck2Card3: ', myDeck2Card3)

console.log('\n')
console.log('myDeck2: ', myDeck2)
console.log('\n')
console.log('myDeck2.drawnCards: ', myDeck2.drawnCards)

console.log('\n')
const myDeckMultiple1 = myDeck2.drawMultiple(8)
console.log('myDeckMultiple1: ', myDeckMultiple1)

console.log('\n')
console.log('myDeck2: ', myDeck2)

console.log('\n')
console.log('myDeck2.deck2: ', myDeck2.deck2)
console.log('myDeck2.drawnCards: ', myDeck2.drawnCards)

console.log('\n')
// Doing same thing with the Object version
const h1 = myDeck2.drawMultiple(2)
const h2 = myDeck2.drawMultiple(2)
const h3 = myDeck2.drawMultiple(5)
console.log('h1: ', h1)
console.log('h2: ', h2)
console.log('h3: ', h3)

console.log('\n')
console.log('myDeck2.deck2: ', myDeck2.deck2)
console.log('myDeck2.drawnCards: ', myDeck2.drawnCards)
*/

/*
// Example 22
console.log('\n')
console.log('########## DECK3 ##########')
function initializeDeckX() {
  const deck = []
  const suits = ['hearts', 'diamonds', 'spades', 'clubs']
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({ value, suit })
    }
  }
  return deck
}

function drawCardX(deck, drawnCards) {
  const card = deck.pop()
  drawnCards.push(card)
  return card
}

function drawMultipleX(numCards, deck, drawnCards) {
  const cards = []
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCardX(deck, drawnCards))
  }
  return cards
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

// Doing same thing with the Functions version
const firstDeck = initializeDeckX()
const drawnCards = []
shuffle(firstDeck)
const hand1 = drawMultipleX(2, firstDeck, drawnCards)
const hand2 = drawMultipleX(2, firstDeck, drawnCards)
const pokerHand = drawMultipleX(5, firstDeck, drawnCards)

console.log('firstDeck: ', firstDeck)
console.log('hand1: ', hand1)
console.log('hand2: ', hand2)
console.log('pokerHand: ', pokerHand)
console.log('drawnCards: ', drawnCards)
*/

/*
- initializeDeckX creates the deck of cards in order
- drawCard(deck, drawnCards), we need to pass in the deck and if we
want to keep track of the drawn cards, the cards that have already been
drawn from the deck, we need to pass in a second array called drawnCards
- drawMultiple(numCards, deck, drawnCards), if i want to draw multiple, i
need to pass in the number of cards to draw, the deck to draw from and the
array to put the drawn cards in that pile of cards that have already been
drawn
*/
