## 32-The-Basics-of-Testing

**folder 01**

## 1. 01 Testing Overview

### Goals of Testing

- Automate the process of ensuring that our app works as we expect
- Keep us from having to manually click around the app to find bugs
- Make sure the app still works as expected even after twe change something

### Personal Thoughts

- People spend more time setting up testing than they do writing tests
- All testing frameworks / libraries are essentially the same
- You don't even have to use a testing library

## 2. 02 A Simple Function to Test

## 3. 03 A No-Frills Testing Implementation

## 4. 04 Test Driven Development

## 5. 05 Fixing Three Issues

## 6. 06 The Assert Module

## 7. 07 Using Mocha darle play

`npm run test index.test.js`

## 8. 08 App Setup

## 9. 11 Mocha in the Browser

## 10. 12 Displaying the Autocomplete

## 11. 13 Verifying the Dropdown State

#### Chai.js

https://chaijs.com
Is what we call an expectation library or an assertion library is the library that allows us to use those same kind of assert statements that we saw at that node module.

## 12. 14 Writing Assertions

https://www.chaijs.com/guide/styles/#expect


## 13. 15 Fake DOM Events

`document.querySelector('input').value = 'Avenger'`

Faking the event with mocha
`document.querySelector('input').dispatchEvent(new Event('input'))`

## 14. 16 Holding Up Assertions