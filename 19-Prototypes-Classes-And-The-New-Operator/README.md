## 19-Prototypes-Classes-And-The-New-Operator

## 1. What on Earth are Prototypes

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

**__proto__**, So rather than having a separate method on every single array called push, there is one prototype and each array has a reference to that prototype with this special property **__proto__**. And we actually can see this in other types of objects in JavaScript.

```javascript
console.log(Array.prototype)
console.log(Object.prototype)
console.log(String.prototype)
```

I could actually define my own type of an object and set its prototype to the array prototype. And i would have access to those array methods in my whatever object, my version of the array.

Prototypes are lik e a template object. They are objects, they contain typically a bunch of methods, and then we can create multiple objects that share the same prototype so that they all have access to the same methods without having to have their own copy.

## 2. An Intro to OOP

Basic object oriented concepts in JavaScript. Things like factory functions, constructor functions, the new class keywords, constructores in a class, the new keyword, there's super, inheritance.

But it all has to do with this one central idea, which is organizing our code, designing and structuring our applications by breaking things up into distinct patterns of objects.

## 3. Factory Functions

```javascript
function makeColor(r,g,b) {
  const color = {}
  color.r = r
  color.g = g
  color.b = b
  color.rgb = function() {
    const {r, g, b} = this
    return `rgb(${r}, ${g}, ${b})`
  }
  color.hex = function () {
    const  {r, g, b} = this
     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }
  return color
}
```

## 4. Constructor Functions

- Creates a blank, plain JavaScript object
- Links (sets the constructor of) this object to another object
- Passes the newly created object from Step 1 as the this context
- Returns this if the function doesn't return its own object

```javascript
function Color(r, g, b) {
  this.r = r
  this.g = g
  this.b = b
  console.log(this);
}

const color1 = new Color(255,0,0)
```