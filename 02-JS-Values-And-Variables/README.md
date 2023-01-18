## 02-JS-Values-And-Variables

## 1. Goals & Primitives

### JS BUILDING BLOCKS  
### Values & Variables

### GOALS:

- Work with primitive types
- Understand let & const
- Use String Template Literals
- Work with common operators / methods

### PRIMITIVE TYPES

- Number
- String
- Boolean
- Null
- Undefined
- Technically there are two others: Symbol and BigInt

## 2. Running Code in the JS Console

We'll start by using the chrome console to quickly run code without any setup. (just for this section)

- Open Google Chrome and hit F12 to open the console and paste the code in the terminal and hit enter

`console.log('Hello World!')`

**Play around with the 'Dock side'**

## 3. Introducing Numbers

### NUMBERS IN JS

```
50
7
3.874
0.99
-45
-777.23444
```

- Javascrit has ONE Number type
- Positive numbers!
- Negative numbers!
- Whole number (integers)!
- Decimal numbers!

**Play around with the numbers in the terminal**

### SIMPLE OPERATIONS

```
// Addition
50 + 5 = 55
1.5 + 8 = 9.5

// Subtraction
90 - 1 = 89
12 - 4.567 = 7.433

// Multiplication
11111 * 7 = 77777
4 * 1.2 = 4.8

// Division
400 / 25 = 16
4 / 2 = 2
10 / 3 = 3.3333333333333335

// Modulo
27 % 2 = 1
25 % 5 = 0
25 % 3 = 1
14 % 4 = 2

// Exponential
2 ** 3 = 8
5 ** 2 = 25
5 ** 5 = 3125

// We have all the basic math operations you would expect...

// creates a comment in a single line which JavaScript will ignore


// Order expressions
3 - 9 * 2 = -15
(3 - 9) * 2 = -12
```

## 4. NaN & Infinity

NaN: NOT A NUMBER  
NaN is a numeric value that represents something that is not... a number

```
0 / 0 // NaN
1 + NaN // NaN
1 / NaN // NaN
1 / 0 // Infinity
-1 / 0 // -Infinity
-0 / -0 // NaN
```

## 5. Numbers Quiz
```
1.5 + 1.5 * 2 // 4.5
(10 % 6) ** 2 // 16
200 + 0 / 0 // NaN
```
## 6. VARIABLES
Variables are like "labeled jars" for a value in JavaScript.

We can store a value and give it a name, so that we can...

- recall it
- use it
- or change it later on  

### BASIC SYNTAX
```
let someName = 'value';
let age = 35;
age // 35
```

### RECALL VARIABLES
```
let hens = 4;
let roosters = 2;
hens + roosters // 6
```

### UPDATE VARIABLES
```
let hens = 4;

// A raccoon killed a hen
// This does not change the value stored in hens
hens - 1; // 3
hens; // Still 4!

// To actually change hens:
// This does!
hens = hens -1;
hens // 3
hens = 100
hens // 100
```

### RESERVED WORDS IN JS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_keywords_as_of_ecmascript_2015

### Naming Convention Camel Cased Names
```
let numOfHens = 6; // This is the standard

// Bad naming conventions
let NumOfHens = 6;
let avgrating = 9.7;
let avg_rating = 9.7;
let avg-rating = 9.7;
```

### Redeclaring Variables
```
let avgRating = 0;
avgRating = 9.7;
let avgRating = 10; // Identifier 'avgRating' has already been declared
```

## 7. UNARY OPERATORS
```
let score = 0;
score = score + 10; // 10
score += 1; // 11
score += 10; // 21
score -= 11; // 10
```
```
let score = 30;
let bonusMult = 5;  
score *= bonusMult // 150
```

```
let counter = 0;
counter++;
counter // 1
counter--
counter // 0
```

## 8. CONST
**Const** works just like let, except you CANNOT change the value

```
const hens = 4;
hens = 20; // ERROR!
// NOT ALLOWED!
const age = 17;
age = age + 1; // ERROR!
```

### WHY USE CONST?
```
const pi = 3.14159;
const daysInWeek = 7;
const minHeightForRide = 60;
```
Once we cover Arrays & Objects, we'll see other situations where **const** makes sense over **let**.

## 9. VAR
`var tripDistance = 7.4;`

Before let & const, var was the only way of declaring variables. These days,
there isn't really a reason to use it, but you will see it a lot on older code.

## 10. Variables Quiz
```
let eggCount = 42;
eggCount + 2; // 44
eggCount // 42

const rating = 7.5;
rating = 8; // Error!
// Assignment to constant variable

// What's the minor issue with this code?
let wind_speed = 76;
wind_speed += 5;
wind_speed--; // 80
// It uses not standard camelCase syntax
// windSpeed
```