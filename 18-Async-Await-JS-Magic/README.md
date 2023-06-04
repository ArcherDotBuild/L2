## 18-Async-Await-JS-Magic

## 1. A Quick Overview of Async Functions

#### ASYNC FUNCTIONS

Async functions depend extremely heavily on promises. Async functions are just a nice syntactic sugar for promises. It's a nice, clean, easy syntax to work with promises, but you still have to understand promises.

#### 2 PIECES

- ASYNC
- AWAIT

## 2. The Async Keyword

#### The async keyword

- Async functions always return a promise
- If the function returns a value, the promise will be resolved with that value
- If the function throws an exception, the promise will be rejected

```javascript
async function hello() {
  return 'Hey guy!'
}
hello()
// Promise {<resolved>: "Hey guy!"}
async function uhOh() {
  throw new Error('oh no!')
}
uhOh()
// Promise {<rejected>: Error: oh no!}
```

So we use async in front of a function declaration or function expression, we use it to designate a certain function as an async function.

The key thing to understand about this keyword is when you put it in front of a function, this function behaves differently. **It's now going to return a promise**.

So even though i never write a new promise, i don't explicitly say, hey, return a promise. I'm simply saying return a string because i put async there the function now returns a promise.

#### How do we return a promise that is not resolved?

- If we want to return a rejected promise, all that we do is
  raise an exeption. So if we throw an exception, we throw an error,
  that promise will be rejected

## 3. The Await Keyword

- We can only use the await keyword inside of functions declared wit async
- await will pause the execution of the function, waiting for a promise to be resolved

We put the **await** keyword inside of an async function and it iwll pause the execution of the function while it waits for a promise to be resolved so it will await something without having to use the **.then**, we can run code after an asynchrounous operation without having to nest things with callbacks.

**You can only use await keyword inside of an async function**

```javascript
async function getPlanets() {
  const res = await axios.get('https://swapi.dev/api/planets/')
  console.log(res.data)
}

getPlanets()
```

## 4. Error Handling in Async Functions

What if the asynchronous operation, if that promise is not resolved?, What if it's rejected?

```javascript
const res = await axios.get('https://swapi.dev/api/planetklsajdalksts/')
```

- This endpoint should give me a 404
- **Axios** is going to reject the promise
- I don't have a catch
- I don't have any sort of error handling

```javascript
async function getPlanets() {
  try {
    const res = await axios.get('https://swapi.dev/api/planetklsajdalksts/')
    console.log(res.data)
  } catch (e) {
    console.log('IN CATCH!!!')
    console.log(e)
  }
}

getPlanets()
```

## 5. Multiple Awaits

```javascript
const btn = document.querySelector('button')
async function animateRight(el, amt) {
  await moveX(el, amt, 1000)
  await moveX(el, amt, 1000)
  await moveX(el, amt, 1000)
  await moveX(el, amt, 1000)
}
animateRight(btn, 100).catch((err) => {
  console.log('ALL DONE!!!')
  animateRight(btn, -100)
})
```

## 6. Parallel Vs. Sequential Requests

#### Sequential Requests

```javascript
async function get3Pokemon() {
  // This has to finish completely before the poke2
  // So this runs we get data back
  const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
  // Then this line runs, we get data back
  const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
  // Then this line runs, we get data back
  const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
  console.log(poke1)
  console.log(poke2)
  console.log(poke3)
}

get3Pokemon()
```

The loading looks like it's instantaneous, but it's important to note they are happening in sequence. So they're not going in parallel. They're not being sent off at the same time.

In this case we don't need them to be in sequence because these don't depend on one another. We're not using information from this first request to make our second request

#### Parallel Requests

```javascript
async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')

  // Pending promise
  console.log(prom1)

  const poke1 = await prom1
  const poke2 = await prom2
  const poke3 = await prom3

  // Resolved promise
  console.log(prom1)

  console.log(poke1.data)
  console.log(poke2.data)
  console.log(poke3.data)
}

get3Pokemon()
```

These were sent in parallel, which is a big distinction. If you do not care, that one request must be finished before the next is done.

## 7. Refactoring with Promise.all

So if i don't want to have to type all the stuff we typed in the last chapter. What we can do is use a promise helper method called **Promise.all**, this method accepts an array of promises. So i could just pass those into Promise.all and then await that.

```javascript
// Parallel Requests
async function get3Pokemon() {
  const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
  const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
  const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')

  const results = await Promise.all([prom1, prom2, prom3])
  console.log(results)
}

get3Pokemon()
```

This code will only run when all of these promises have been resolved.
