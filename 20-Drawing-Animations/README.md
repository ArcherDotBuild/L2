## 19-Prototypes-Classes-And-The-New-Operator

## 1. 06 Binding Events in a Class

## 2. 08 Determining the Value of 'This'

#### Determining the value of this inside of an arrow function

Did you define the function with an arrow function?
R// Write 'console.log(this)' on the first **valid** line above the arrow function. Value of 'this' in the arrow function will be equal to that console log

```javascript
const colors = {
  printColor() {
    console.log(this)
  },
}

colors.print()
```

```javascript
const colors = {
  printColor() {
    console.log(this)
    const printThis = () => {
      console.log(this)
    }
    printThis()
  },
}

colors.print()
```

#### Calling the function with bind, call or apply

Did you call 'bind', 'call' or 'apply' on the function when you invoked it?
R// 'this' is equal to the first argument of 'bind', 'call' or 'apply

**bind, call and apply** are built-in functions that belong to all functions inside of JavaScript that we create

```javascript
const printThis = function() {
  console.log(this)
}

printThis.call({ color: 'red'})
printThis.apply({ color: 'red'})
```

#### All other cases
'this' is equal to whatever is to the left of the '.' in the method call

```javascript
const colors = {
  printColor() {
    console.log(this)
  }
}

const randomObject = {
  a: 1
}

randomObject.printColor = colors.printColor
randomObject.printColor()
```