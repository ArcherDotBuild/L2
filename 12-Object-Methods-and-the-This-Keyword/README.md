## 12-Object-Methods-and-the-This-Keyword

## 1. Shorthand Object Properties

### METHODS & THIS

Objects Pt 2

### The Secret Life of OBJECTS

- We've seen the basics of object literals, but there is so much more to talk about with OBJECTS!.

### GOALS

- Add methods to objects
- Use new object shorthand syntax
- Use computed properties
- Understand prototypes
- Explain how the %$@# this works

## 2. Computed Properties

Computed Properties are just an improvement for the object literal syntax where we can add a property with a dynamic key.

**We can use a variable as a key name in an object literal property!**

```
const user = 'Jools';

const userRoles = {
  [user]: 'Admin'
}

userRoles: // {Jools: "Admin"}
```

```
// From this syntax
// copy[key] = value;

// To this syntax
// [key]: value;
```

## 3. Adding Methods to Objects

### METHODS

We can add functions as properties on objects.

We call them methods!

```
const math = {
  multiply: function(x, y) {
    return x * y;
  },
  divide : function (x, y) {
    return x / y;
  },
  square : function(x) {
    return x * x;
  }
};
```

We can also store functions in objects. The first simplest reason, why we would do this is just to group functions together, to group functionality into some sort of cohesive unit.

##  4. Method Shorthand Syntax

We do this so often that there's a new shorthand way of adding methods.

```
const math = {
  blah: 'Hi!',
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
}

math.add(50, 60); // 110
```

## 5. Intro to Keyword THIS

The keyword **this** can be major point of confusion and misery and hardship and general suffering in the life of a new JS developer.

The keyword **this** is pretty useful it comes up a lot once you get to DOM manipulation, when we do things like add events, click events, keyboard events will sometimes reference they keyword **this**.

**this** is a keyword, think of it as a reference to the current execution scope. it's going to give you an object back. So depending on the scope and depending on the rules of how this works, which is the confusing part, that object changes, it could be a reference to to the global scope, which is what we're going to see right now.

```
function sayHi() {
  console.log('HI')
  console.log('this: ', this)
}

sayHi()
```

Now we see an object called the **window**, the **window** is the global scope in the browser.

When we define **sayHi()** like this, it is added as a property, it is a method on the window object. The **window** is the global scope of our browser.

Example if we call `alert('ALERT HERE!')`, we get our alert on the browser. It's a built in function and we call it like this, but it's a property on the **window**. So i could also call it like this `window.alert('ALERT HERE!')`.

Variables declared with **var** are added to the window global scope, let and const are not added to the window global scope.

## 6. Using THIS in Methods
```
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
personThis.fullName() // Alberto Guzman AKA ElfGodd


personThis.last = 'Duende';
person.fullName(); // // Alberto Guzman AKA Duende
```
**THIS** allows us to reference these properties or other methods so we can have a method that is aware of the other contents in its object.

With **THIS** we have the ability to write an object or a method that is aware of the object it lives in, which means we can use objects not just to store different methods because they're related or similar like we had add, subtract, multiply and divide.

But now we have a way of also interacting with properties, with other values or even other methods. So our object can now be a little self-contained world where we can have variables, we can have these properties.

## 7. THIS Invocation Context

The value of **this** depends on the **invocation context** of the function it is used in.

The value will change depending on how the function is actually executed, not just where you write it.

**Arrow functions** do not get their own version of this.