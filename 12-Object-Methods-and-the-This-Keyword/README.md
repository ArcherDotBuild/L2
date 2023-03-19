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
    return X * Y;
  },
  divide : function (x, y) {
    return x / y;
  },
  square : function(x) {
    return X * X;
  }
};
```

We can also store functions in objects. The first simplest reason, why we would do this is just to group functions together, to group functionality into some sort of cohesive unit.