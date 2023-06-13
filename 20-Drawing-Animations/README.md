## 19-Prototypes-Classes-And-The-New-Operator

## 1. 06 Binding Events in a Class

## 2. 08 Determining the Value of 'This'

#### Determining the value of this inside of an arrow function

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

**bind, call and apply** are built-in functions that belong to all functions inside of JavaScript that we create