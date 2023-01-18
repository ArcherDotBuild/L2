## 05-Capture-Collections-of-Data-with-Arrays

## 1. Creating Arrays

## ARRAYS & OBJECTS

###  Collections of Data

- Work with Arrays
- Write object literals
- Understand reference types
- Use common Array/Object methods

### ARRAYS
**Ordered collections of values**
- List of comments in IG post
- Collection of levels in a game
- Songs in a playlist

Usually we have more than one piece of information and they're often related to one another, So this is where data structures come in, which is what we're talking about here. We're seeing our first two data structures in this section, the array and the object.

They're both built into JavaScript and they're both used all over the place. You would be hard pressed to find any code base that did not contain both of them. They're really, really useful.

**Arrays and Objects have their own set of methods as well.**

We're going to start with arrays which are collections of values. All of these different values we've seen so far, strings, numbers, booleans, things like null and undefined arrays collect them into one structure, one collection, and it's ordered.

Arrays are like slots and on their own arrays don't do much unless we put information in them. So they collect all those primitive types of data we've seen so far. They also can collect other data like other arrays.

**Each slot of an array consists of multiple pieces of information, which is where objects will come in.**

For now, will be creating arrays that consist of single values in each slot in that array. Something like a **comment** consists of multiple values, a username, a date, the comment text. There's multiple pieces of information bundled into one comment.


### CREATING ARRAYS
```
// To make an empty array
let students = [];

// An array of strings
let colors = ['red', 'orange', 'yellow', 'green'];

// An array of numbers
let lottoNums = [19, 22, 56, 12, 51];

// A mixed array
let stuff = [true, 68, 'cat', null];
```

ARRAYS ARE INDEXED
colors.length // 4

colors[0] // 'red'
colors[1] // 'orange'
colors[2] // 'yellow'
colors[3] // 'green'
colors[4] // 'undefined'

MODIFYING ARRAYS
colors[3] = 'black'
colors[4] // undefined
colors[4] = 'blue'

ARRAYS METHODS
Push - add to end
Pop - remove from end
Shift - remove from start
Unshift - add to start

You might mix up shift and unshift for a while

MORE METHODS!
concat - merge arrays
includes - merge arrays
indexOf - just like str.indexOf
join - creates a string from array
reverse - reverses an array
slice - copy portion of an array
splice - remove/replace elements
sort - sorts an array



