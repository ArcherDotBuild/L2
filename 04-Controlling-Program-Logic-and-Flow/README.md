## 04-Controlling-Program-Logic-and-Flow

## 1. Making Decisiones in JS

### BOOLEAN LOGIC

- Understand comparasion operators
- Write conditionals
- Work with boolean operators

## 2. Comparison Operators

```
> // greater than
< // less than
>= // greater than or equal to
<= // less than or equal to

// Ignore this for now
== // equality
!= // not equal
== // strict equality
!= // strict non-equality
```

```
-2 > 1 // false
10 < 999 // true
2 >= 2 // true
2 >= 5 // false
2 >= 1 // true
55.1 <= 55.5 // true
```

Notice these all return a Boolean!
Though it's uncommon, you can compare strings. Just be careful, things get dicey when dealing with case, special characters, and accents!

```
"hello".length >= "hello".length // true
"hello".length >= "hello!".length // false
10 > 1; // true
0.2 > 0.3 // false
-10 < 0; // true
50.5 < 5; // false
0.5 <= 0.5; // true
99 >= 4; // true
99 >= 99; // true
'a' < 'b'; // true
'A' > 'a'; // false
'#' < '$' // true
```

## 3. Double Equals (==)

- Checks for equality of value, but not equality of type
- It coerces both values to the same type and then compares them
- This can lead to some unexpected results!

```
== // equality
!= // not equal
```

```
5 == 5; // true
'b' == 'c'; // false
7 == '7'; // true
0 == ''; // true
true == false; // false
null == undefined; // true
4 == 4; // true
'a' == 'a'; // true
false == false; // true
null == null; // true
0 == false; // true
undefined == undefined // true
```

## 4. Triple Equals (===)

Checks for equality of value AND type

```
=== // strict equality
!== // strict non-equality
```

```
5 === 5; // true
1 === 2; // false
2 === '2'; // false
false === 0; // false
null === undefined; // false
null === null; // true
undefined === undefined // true

```

### GO WITH TRIPLE EQUALS! (===)

```
// Same applies for != and !==
10 != '10'; // false
10 !== '10'; // true
```

## 5. Running Code From a Script
### Folder 01

How we were going to run our code from here on out, sofar, we've been playing around in the console with little one liners like on plus two or four is less than or equal to eight.

It's nice, We can get an answer evaluated immediately and we see the result visually.

We are not writing an entire script with a bunch of code and executing it. When we're ready, we're typing something immediately.

This is actually called a REPL

### REPL Read Evaluate Print Loop

That's what the JavaScript console is here. It reads in whatever you type. It evaluates it, it prints it and it loops. Meaning thqat i can do it continuously if i hit enter right now

It throws an error, if it's not valid JavaScript, but it reads in that code, thinks this is code. It realize it's not when it evaluates it or it's not valid code, it prints an error and then it loops, so i can do something else

So that's great for playing around, for testing things out, but it's not so great for creating larger scripts and larger applications where we actually want to have access to our code after the fact. the code all goes away

But also it's not that easy to write multiple lines of code and create larger scripts in the console

So we're going to be writing our code in JavaScript files most of the time. From here on out.

Unfortunately, we can't simply open a JavaScript file and the browser to run it. We have to open an HTML file which has a script or it includes our JavaScript file.

The browser doesn't know how to handle just a plain JavaScript file. It knows how to handle an HTML file that includes a JavaScript file.

So there's two steps. I'm going to make a new file, I'm working in a folder called Code 

I'm going to put them in the same folder. It just makes it easier when i'm including this JavaScript file

app.js or script.js

1. First step
```
// Put your code in the JS File
alert('Hello from JS!')

// Won't show up!!
'hit'.toUpperCase();

// Will show up!
console.log('hi'.toUpperCase());
```

Write your code in a .js file

2. Second step
index.html or demo.html

```
<!DOCTYPE html>
<html>
<head>
  <title>My First JS Script</title>
</head>
<body>

  <!-- source attribute which corresponds to the path to our file -->
  <script src='app.js'></script>
</body>
</html>
```

Include your script in a .html file

So if we get it working correctly, we should see this pop up in the browser.

You can type in VSCode ! exclamation point tab and it fills all of this stuff out for me. I get my standard boilerplate HTML essentially the template, the thing we use every time or the code we write every time in an HTML file.

Now open with the browser the index.html file. So we've now successfully included a script. It's working and this is a workflow.

You could even make a template, a folder that you could just duplicate anytime you wanted to make a new script

If we want something to be explicitly printed out, we have to use a method, another method

### console.log(msg) or console.log('msg')
**prints arguments to the console**  
(we need this if we're going to start working with files!)  

All that it does is it prints something to the console. If i refresh the page and open up the JS console, you can see the message, just add to the app.js this line
`console.log('hello from the js console');`
`console..log(3+4');`

This shows up like a JS error.  
`console.error('OH NOO!!!');`

We can pass in multiple things to the console.log, we could do  
`console.log(3+4, 'hello', true);`


## 6. CONDITIONALS
### Folder 02

### If Statements
Making decisions with code: **IF, ELSE IF AND ELSE**

We can start writing slightly longer, slightly more complex scripts to add logic into our code to actually make decisions. The key mechanism we use is something called a conditional statement.

Now, a conditional statement can have three different pieces. And if an else if and an else and we'll go through them in order

- IF allows us to run certain code if a give condition is true.

We spent a healthy amount of time talking about these different operators `(>,<, >=, <=, ==, ===, !=, !==)`, and they all evaluate to true or false, they all evalute to a boolean. Now we can use them instead of a conditional where we end up with either a true or false. And if that thing is true, if the condition is true, our code will run.

The simplest possible conditional looks like this

```
IF: Run code if a given condition is true

// Example 1
let rating = 3;

if (rating === 3) {
  console.log('1. It's true');
  console.log("1. YOU ARE A SUPERSTAR!");
}

// Example 2
// This one is false, code will not run
if (rating === 2) {
  console.log('2. It's true');
  console.log("2. YOU ARE A SUPERSTAR!");
}
```

```
// Example 3
// If a number is odd
let num = 37;

if(num !== 0) {
  console.log('ODD NUMBER!');
}
```

## 7. Else If

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

if not the first thing, maybe this other thing?  

If you can think of if else as if the first condition was not true, maybe this other thing will be true. It will only be attempted if the first part if the if was false
```
let rating = 2;

if(rating === 3) {
  console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2) {
  console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
console.log("NEEDS IMPROVEMENT");
}
```

- **You need an If to have an Else If**
- **You can have as many else if's as we want**

When using ELSE IF block structure only one line of code will run true. We can add in multiple else ifs. Your probably don't want to have a ton of them. Your code can get pretty long and there might be a better way to refactor or rewrite your massive conditional, but it is valid JavaScript.

## 8. Else
"If nothing else was true, do this.."

```
let rating = -99

if(rating === 3) {
  console.log("YOU ARE A SUPERSTAR!");
}
else if (rating === 2) {
  console.log("MEETS EXPECTATIONS");
}
else if (rating === 1) {
  console.log("NEEDS IMPROVEMENT");
}
else {
  console.log("INVALID RATING!");
}
```
- **You need an If to have an Else**
- **You can only have one else per if**

## 9. NESTING CONDITIONALS
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

We can nest conditionals inside conditionals

```
let password = "cat dog";

if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    console.log("Password cannot include spaces");
  }
  else {   
    console.log("Valid password!!");
  }
}
else {
  console.log("Password too short!");
}
```

We can nest them inside of one another so we can have multiple layers deep of conditionals where we're checking for a certain condition to be true and we can nest them as much as we want, whether it's if and elses we can throw an else if if we just nest them inside the curly braces.

## 10. TRUTHY & FALSY VALUES
- All values have an inherent truthy or falsy boolean value  
- **Almost every single value in JS is Truthy except for these right here**:
- Falsy values:
  - false
  - 0
  - "" // (empty string with no spaces)
  - null
  - undefined
  - NaN
- Everything else is truthy!

Let's talk about this kind of odd topic, truthy and falsey values. 

## 11. Logical AND (&&)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment

Both sides must be true in order for the whole thing to be true

```
1 <= 4 && 'a' == 'a'; // true
1 <= 2 && 5 === 5; // true
9 > 10 && 9 >= 9; // false
'abc'.length === 3 && 1 + 1 === 4; // false
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

## 12. Logical OR (||)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

The OR || uses the pipe character, If either side is true, the entire thing is considered true.

```
// only one side needs to be true!

1 !== 1 || 10 === 10 // true
10 / 2 === 5 || null // true
0 || undefined // false
false || true // true
true || false // true
true || true // true
false || false // false
```

## 13. NOT (!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

**!expression** returns true if the expression is false  

NOT is just going to operate on a single expression and it returns true if that expression is false. So we put exclamation point in front of some expression. If that expression returns false, when you have the not in front of it, the whole thing is now true.
```
!null // true
!0 // true
!'' // true
!45 // false
!'asdas' // false

We can also negate use NOT to negate actual expressions that are not just a single value.
!(0 === 0) // false
!(3 <= 4) // false
```
The scenarios where you use this can vary greatly and it's hard to show all that useful as an example.  

Alll of these operators AND, OR, NOT, along with the conditionals themselves, if else if and else's are really flexible and there's often a ton of different ways of achieving the exact same logic or the same outcome. You can use nested things as we've seen you could use and you can combine certain things with, NOT in order to make them work.

## 14. OPERATOR PRECEDENCE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
```
NOT (!) has higher precedence than && and ||,
&& has higher precedence than ||
```
**You an alter this using parens ()**

```
! && || // this is the order from most important to less
You can alter this using parens ()
let x = 7;
// This is TRUE because the AND operator takes precedence over OR
x == 7 || x === 3 && x > 10; // true
true   ||   false   :   false
      true     &&      false
              FALSE
```
```
(x == 7 || x === 3) && x > 10; // false
```

So the order does matter when we're working with these operators, especially the logical ones. Logical NOT is going to run first, then logical AND then OR it can be confusing to remember all of this and keep track of it. So if you ever have any doubt, put parentheses in there. Parentheses will trump everything and it makes it clearer how things are supposed to run.

## 15. SWITCH
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch

Switch statement, decision making and logic. It's not as commonly used as the typical conditional, if else if and else, but in certain scenarios, it's really useful

```
const expr = 'Papayas';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound" break;
  default: console.log(Sorry, we are out of ${expr}.);
}
```
## 16. TERNARY OPERATOR
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

Shortcut syntax you can use in JavaScript for certain conditionals. It's a way of basically taking an If and an Else and turning them into a single line of code. It's called the ternary operator because there are three pieces instead of binary.

`condition ? expIfTrue: expIfFalse`