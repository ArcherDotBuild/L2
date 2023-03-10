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

We can combine information, usually your data is relatively cohesive when you have it inside of an array, but it doesn't have to be. We could have a string, a number, true, null even put NaN in there perfectly valid.

Some programming languages this will not be good. Some of them don't want you to mix up data in an array. You have to specify this is a collection of only strings and you're only allowed to put strings in there. **But that's not the case with JavaScript**, we can put whatever we want.

## 2. Array Indices

### ARRAYS ARE INDEXED

The next thing to know about Arrays is that they are indexed just like with Strings, where each string character has a corresponding index and i can access them one character at a time.`'Archer'[0] // 'A'`An array has a corresponding index and that index is what dictates the order. So if something is index zero 0, it's at the beginning of the array, If something is index one, it is the second item.

```
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

colors.length // 4
colors[0] // 'red'
colors[1] // 'orange'
colors[2] // 'yellow'
colors[3] // 'green'
colors[7] // 'undefined'
```

## 3. Modifying Arrays

We can assign a new value and that will change whatever is at that index. Remember **Strings are immutable, so i can't change this to an uppercase 
```
let laugh = 'hahaha'
laugh[0] // 'h'
laugh[0] = 'H'
laugn // 'hahaha'
```
Arrays are different, arrays are mutable, We can change them whenever we want.

```
let colors = ['red', 'orange', 'green', 'yellow']

colors[0] = 'green'

colors[2] = 'purple'
colors[3] = 'black'
colors[4] // undefined
colors[4] = 'blue navy'
``` 
## 4. Push and Pop

### ARRAYS METHODS

Next up, we'll dive into our first 4 Array methods. Now, there are more to come next, but these first four are grouped together for a reason. They're really commonly used and they all have to do with either adding content or removing content or elements from an array. So adding to the end, removing from the end, removing from the start, adding to the start.

- Push - add to end
- Pop - remove from end
- Shift - remove from start
- Unshift - add to start

**You might mix up shift and unshift for a while**

Every array comes with a bunch of built-in actions https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

**array.pop()** is going to always return its value to you

## 5. Shift and Unshift

MORE METHODS!
concat - merge arrays
includes - merge arrays
indexOf - just like str.indexOf
join - creates a string from array
reverse - reverses an array
slice - copy portion of an array
splice - remove/replace elements
sort - sorts an array

## 6. Concat

Contact it's used to merge more than one or two or more arrays. You can combine them into a new array.

```
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

console.log(array1.concat(array2))
// ['a', 'b', 'c', 'd', 'e', 'f']
```

We can pass in multiple we could concat 3 or 4 or 5 arrays by passing them 

## 7. Includes and IndexOf

We'll take a look at two in methods that are kind of similar, they have to do with searching or looking for a value includes and indexOf. They sound like they might do the same thing, but they return a different values.

**includes** it is known as a boolean method, it returns true or false. It takes a value and it tells you if that array includes that value or not.

**indexOf** works just like string.indexOf, So it will search for a value and if it finds it, it will return the index where it found it versus includes which returns true or false. And just like with string, if it does not find the value, if it's not present, it returns negative 1.

## 8. Reverse and Join

**reverse** reverses an array in place, it does not make a copy, it actually impacts and mutates the original array.

**reverse does actually mutate the array**

**join** takes an array and it spits out a string where it joins all of the elements in that array into one single string. If you join things that are not strings like like numbers, boolean it turns them into a string.

## 9. Slice

Similar to the string slice method, It takes a portion of an array and it makes a new array with it, So it doesn't impact the original , It doesn't modify the original array, but allows you to select or copy a part of an array into a new array.

## 10. Splice

What it does is it either removes elements of replaces elements or adds in a new elements, So usually you would do it in the middle of an array because if you were just trying to remove or add to the beginning or end, we already have pushed pop shift and unshift. So there are three arguments, We have the start index, then how many things you want to delete and then whatever you want to insert, So you don't have to insert anything and you don't have to delete anything but those are the three values.

## 11. Sorting

Sort method, sort the array of elements or sorts the elements of an array in place and returns the sorted array.

## 12. Intro to Reference Types

Primitive types strings, numbers, booleans, null, undefined all those work differently than things like arrays and objects

## 13. Using Const with Arrays

Arrays are reference types, which means that the actual array data is not the content that is stored in the slot in memory for each variable. Instead, it is a reference, So as long as the reference doesn't change the internals, the insides of an array can change even if you're using const

```
const my Eggs = ['brown', 'white']
myEggs.push('purple')
myEggs[0] = 'green'

myEggs = ['blue', 'pink'] // NO!!
// TypeError: Assignment to constant variable.
```

- Error because we change the reference
- You can change anything inside the array

Because arrays are reference types, const is used all the time when we work with arrays, far more often than let, unless you have some good reason that your variable would need to point to different, entirely different arrays, most of the time you just need a variable for your array and the array might change, but you're not going to just point some new array.

## 14. Working with Nested Arrays

We can store arrays inside other arrays!

```
const colors = [
  ['red', 'crimson']
  ['orange', 'dark orange']
  ['yellow', 'golden rod']
  ['green', 'olive']
  ['blue', 'navy blue']
  ['purple', 'orchild']
]
```